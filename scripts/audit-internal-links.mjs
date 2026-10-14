// Crawls the built site (.next/server/app/**/*.html) and reports every internal
// link that does not land on a real page, plus problems in redirects and the
// sitemap. Run after `npm run build`:
//
//   node scripts/audit-internal-links.mjs            report, exit 1 on any broken link
//   node scripts/audit-internal-links.mjs --verbose  also list every link that goes through a redirect
//
// What it checks
//   1. Broken links         <a href> to a path that is not a page, a redirect source, or a public file.
//   2. Links via redirects  internal links that point at a redirect source instead of the final URL
//                           (works for users, wastes crawl budget and dilutes link signals).
//   3. Redirect health      chains of 2+ hops, loops, and redirects whose destination does not exist.
//   4. Sitemap              URLs in sitemap.xml that 404, redirect, or are not canonical.
//   5. Retired routes       paths that were removed on purpose (RETIRED below) must not appear in
//                           the sitemap, the generated site-audit data, internal links, or redirect
//                           destinations.
//
// Source of truth for "what exists": the prerendered HTML files, the app-paths
// manifest (dynamic and on-demand routes), next.config.js redirects/rewrites and
// public/. A page that only exists at runtime and is not in the manifest would be
// reported as broken; none do today.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const BUILD = path.join(ROOT, ".next", "server");
const APP_OUT = path.join(BUILD, "app");
const VERBOSE = process.argv.includes("--verbose");
const SITE = "https://www.myntmore.com";

// Routes removed on purpose. They must stay gone everywhere except where a
// deliberate redirect source is listed in next.config.js.
const RETIRED = ["/cold-emailing-package", "/cold-emailing-package-mars", "/cold-emailing-package-earth"];

if (!fs.existsSync(APP_OUT)) {
  console.error("No build output at .next/server/app. Run `npm run build` first.");
  process.exit(2);
}

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

const norm = (p) => {
  let x = decodeURI(p.split("#")[0].split("?")[0]);
  if (x.length > 1) x = x.replace(/\/+$/, "");
  return x || "/";
};

// ── What exists ──────────────────────────────────────────────────────────
const htmlFiles = walk(APP_OUT).filter((f) => f.endsWith(".html"));
const pageOf = (f) => {
  const r = "/" + path.relative(APP_OUT, f).split(path.sep).join("/").replace(/\.html$/, "");
  return r === "/index" ? "/" : r.replace(/\/index$/, "") || "/";
};
const staticPages = new Set(htmlFiles.map(pageOf));

// Dynamic / on-demand pages from the manifest ("/blog/[slug]/page" -> regex).
const dynamicPatterns = [];
const manifestPath = path.join(BUILD, "app-paths-manifest.json");
if (fs.existsSync(manifestPath)) {
  for (const key of Object.keys(JSON.parse(fs.readFileSync(manifestPath, "utf8")))) {
    if (!key.endsWith("/page")) continue;
    const route = key.replace(/\/page$/, "") || "/";
    if (!route.includes("[")) { staticPages.add(route); continue; }
    const re = new RegExp("^" + route.split("/").map((s) => (/^\[\[?\.\.\./.test(s) ? ".+" : /^\[.+\]$/.test(s) ? "[^/]+" : s.replace(/[.*+?^${}()|\\]/g, "\\$&"))).join("/") + "$");
    dynamicPatterns.push({ route, re });
  }
}

const publicFiles = new Set(walk(path.join(ROOT, "public")).map((f) => "/" + path.relative(path.join(ROOT, "public"), f).split(path.sep).join("/")));

// Metadata routes (sitemap.xml, robots.txt) are served by the app but are not .html.
for (const f of walk(APP_OUT)) {
  const r = "/" + path.relative(APP_OUT, f).split(path.sep).join("/");
  if (/\.(xml|txt)\.body$/.test(r)) staticPages.add(r.replace(/\.body$/, ""));
}

// ── next.config.js redirects ─────────────────────────────────────────────
const require = createRequire(import.meta.url);
const cfgModule = await import(pathToFileURL(path.join(ROOT, "next.config.js")).href);
const nextConfig = cfgModule.default ?? require(path.join(ROOT, "next.config.js"));
const redirects = (await nextConfig.redirects?.()) ?? [];
const rewrites = (await nextConfig.rewrites?.()) ?? [];

const patternToRe = (source) =>
  new RegExp("^" + source.replace(/[.+?^${}()|\\]/g, "\\$&").replace(/\/:([A-Za-z]+)\*/g, "(?:/.*)?").replace(/:([A-Za-z]+)\*/g, ".*").replace(/:([A-Za-z]+)/g, "[^/]+") + "$");
const redirectRules = redirects.filter((r) => !r.has && !r.missing).map((r) => ({ ...r, re: patternToRe(r.source) }));
const rewriteRules = (Array.isArray(rewrites) ? rewrites : rewrites.beforeFiles ?? []).map((r) => ({ ...r, re: patternToRe(r.source) }));

const matchRedirect = (p) => {
  for (const r of redirectRules) {
    const m = r.re.exec(p);
    if (m) {
      let dest = r.destination;
      // Wildcard destinations (/foo/:path*) are kept as written: only static ones are followed.
      return { rule: r, to: dest.includes(":") ? null : dest };
    }
  }
  return null;
};

const exists = (p) => staticPages.has(p) || dynamicPatterns.some((d) => d.re.test(p)) || publicFiles.has(p) || rewriteRules.some((r) => r.re.test(p));

// Follow redirects to a final target, recording the hops.
function resolveRedirect(p) {
  const hops = [];
  let cur = p;
  const seen = new Set();
  for (;;) {
    const hit = matchRedirect(cur);
    if (!hit) return { final: cur, hops, loop: false };
    if (seen.has(cur)) return { final: cur, hops, loop: true };
    seen.add(cur);
    if (!hit.to) return { final: cur, hops, loop: false, wildcard: true };
    const next = hit.to.startsWith("http") ? hit.to : norm(hit.to);
    hops.push(next);
    if (next.startsWith("http")) return { final: next, hops, loop: false, external: true };
    cur = next;
  }
}

// ── Crawl ────────────────────────────────────────────────────────────────
const broken = new Map(); // target -> Set(source)
const viaRedirect = new Map(); // target -> { final, sources:Set }
let linkCount = 0;
const linkRe = /<a\b[^>]*?\shref="([^"]*)"/g;

for (const f of htmlFiles) {
  const source = pageOf(f);
  const html = fs.readFileSync(f, "utf8");
  for (const m of html.matchAll(linkRe)) {
    let href = m[1].replace(/&amp;/g, "&");
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || "/";
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    if (href.startsWith("/_next/") || href.startsWith("/api/")) continue;
    linkCount++;
    const target = norm(href);
    const red = matchRedirect(target);
    if (red) {
      const r = resolveRedirect(target);
      if (!viaRedirect.has(target)) viaRedirect.set(target, { final: r.final, sources: new Set() });
      viaRedirect.get(target).sources.add(source);
      continue;
    }
    if (!exists(target)) {
      if (!broken.has(target)) broken.set(target, new Set());
      broken.get(target).add(source);
    }
  }
}

// ── Redirect health ──────────────────────────────────────────────────────
const redirectProblems = [];
for (const r of redirectRules) {
  if (r.source.includes(":")) continue;
  const { final, hops, loop, external, wildcard } = resolveRedirect(norm(r.source));
  if (loop) redirectProblems.push(`${r.source}: redirect loop`);
  else if (hops.length > 1) redirectProblems.push(`${r.source}: chain of ${hops.length} hops -> ${hops.join(" -> ")} (point it straight at ${final})`);
  else if (!external && !wildcard && !exists(final)) redirectProblems.push(`${r.source}: destination ${final} does not exist`);
}

// ── Sitemap ──────────────────────────────────────────────────────────────
const sitemapProblems = [];
const sitemapFile = path.join(APP_OUT, "sitemap.xml.body");
let sitemapUrls = [];
if (fs.existsSync(sitemapFile)) {
  sitemapUrls = [...fs.readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const seenUrl = new Set();
  for (const u of sitemapUrls) {
    if (seenUrl.has(u)) sitemapProblems.push(`${u}: listed twice`);
    seenUrl.add(u);
    if (!u.startsWith(SITE)) { sitemapProblems.push(`${u}: not on ${SITE}`); continue; }
    const p = norm(u.slice(SITE.length) || "/");
    if (matchRedirect(p)) sitemapProblems.push(`${p}: is a redirect source, list the destination instead`);
    else if (!exists(p)) sitemapProblems.push(`${p}: does not exist`);
  }
} else sitemapProblems.push("sitemap.xml.body not found in the build output");

// Canonicals must point at an existing, non-redirecting page.
const canonicalProblems = [];
const canonRe = /<link rel="canonical" href="([^"]+)"/;
for (const f of htmlFiles) {
  const c = canonRe.exec(fs.readFileSync(f, "utf8"));
  if (!c) continue;
  const href = c[1].replace(/&amp;/g, "&");
  if (!href.startsWith(SITE)) { canonicalProblems.push(`${pageOf(f)}: canonical ${href} is off-site`); continue; }
  const p = norm(href.slice(SITE.length) || "/");
  if (matchRedirect(p)) canonicalProblems.push(`${pageOf(f)}: canonical ${p} is a redirect`);
  else if (!exists(p)) canonicalProblems.push(`${pageOf(f)}: canonical ${p} does not exist`);
}

// ── Retired routes ───────────────────────────────────────────────────────
const retiredProblems = [];
const isRetired = (p) => RETIRED.some((r) => p === r || p.startsWith(r + "/"));
for (const u of sitemapUrls) if (isRetired(norm(u.slice(SITE.length) || "/"))) retiredProblems.push(`sitemap.xml lists ${u}`);
for (const r of redirects) if (isRetired(norm(r.destination))) retiredProblems.push(`next.config.js redirects ${r.source} -> ${r.destination} (retired destination)`);
for (const f of htmlFiles) if (isRetired(pageOf(f))) retiredProblems.push(`a page is still being built at ${pageOf(f)}`);
for (const t of [...broken.keys(), ...viaRedirect.keys()]) if (isRetired(t)) retiredProblems.push(`internal links still point at ${t}`);
const auditData = path.join(ROOT, "app", "site-audit", "data.json");
if (fs.existsSync(auditData)) {
  const txt = fs.readFileSync(auditData, "utf8");
  for (const r of RETIRED) if (txt.includes(`"${r}"`) || txt.includes(`"${r}/`)) retiredProblems.push(`app/site-audit/data.json still contains ${r}`);
}

// ── Report ───────────────────────────────────────────────────────────────
const section = (title, rows) => {
  console.log(`\n== ${title} (${rows.length})`);
  for (const r of rows) console.log("  " + r);
};
console.log(`Crawled ${htmlFiles.length} built pages, ${linkCount} internal links, ${redirectRules.length} redirects, ${sitemapUrls.length} sitemap URLs.`);

const brokenRows = [...broken].map(([t, s]) => `${t}  <- ${[...s].slice(0, 4).join(", ")}${s.size > 4 ? ` (+${s.size - 4} more)` : ""}`);
section("Broken internal links", brokenRows);
const viaRows = [...viaRedirect].map(([t, v]) => `${t} -> ${v.final}  <- ${[...v.sources].slice(0, 3).join(", ")}${v.sources.size > 3 ? ` (+${v.sources.size - 3} more)` : ""}`);
section("Internal links that go through a redirect", VERBOSE ? viaRows : viaRows.slice(0, 15));
if (!VERBOSE && viaRows.length > 15) console.log(`  ... ${viaRows.length - 15} more (use --verbose)`);
section("Redirect problems", redirectProblems);
section("Sitemap problems", sitemapProblems);
section("Canonical problems", canonicalProblems);
section("Retired routes still referenced", retiredProblems);

const failed = brokenRows.length + redirectProblems.length + sitemapProblems.length + canonicalProblems.length + retiredProblems.length;
console.log(failed ? `\nFAIL: ${failed} issue${failed === 1 ? "" : "s"} (links via redirects are advisory and not counted)` : "\nOK: no broken links, redirect problems, sitemap problems or retired routes.");
process.exit(failed ? 1 : 0);
