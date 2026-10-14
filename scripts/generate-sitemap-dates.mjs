// Derives every sitemap <lastmod> from git, so a page whose source changed
// cannot keep a stale hand-typed date. Writes lib/sitemap-dates.json, which
// app/sitemap.ts reads.
//
//   node scripts/generate-sitemap-dates.mjs           regenerate the file
//   node scripts/generate-sitemap-dates.mjs --check   exit 1 if it is stale
//
// Why a committed JSON file and not a git call inside app/sitemap.ts: the
// production build runs without git history (Vercel builds from a source
// snapshot or a shallow clone), where `git log` would return nothing or, worse,
// the boundary commit for every file. So the dates are computed where full
// history exists (a dev machine or CI), committed, and merely read at build
// time. When history is not available this script does nothing and leaves the
// committed file untouched.
//
// What counts as "the page changed": the last commit touching the route's own
// files under app/<route>/ plus every local module it imports, transitively
// (components/, lib/, app/components/...). Modules imported by many routes
// (the nav, footer, layout shell, shared UI) are ignored, otherwise editing
// the footer would stamp a new date on every URL, which is exactly the
// signal-free lastmod this replaces. The ignore threshold is SHARED_MIN_ROUTES.
//
// Dynamic routes (app/case-studies/[filter], etc.) take the dates of the
// route files plus the data modules they import, so a change to the shared
// data refreshes every URL generated from it -- the honest answer for those.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
const OUT = path.join(ROOT, "lib", "sitemap-dates.json");
const SITEMAP = path.join(APP, "sitemap.ts");
const SHARED_MIN_ROUTES = 12;
const CHECK = process.argv.includes("--check");
const WHY = process.argv.includes("--why") ? process.argv[process.argv.indexOf("--why") + 1] : null;

const git = (args) => {
  try {
    return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
};

if (git(["rev-parse", "--is-inside-work-tree"]) !== "true" || git(["rev-parse", "--is-shallow-repository"]) !== "false") {
  console.log("[sitemap-dates] no full git history here; keeping the committed lib/sitemap-dates.json");
  process.exit(0);
}

const read = (f) => fs.readFileSync(f, "utf8");
const exists = (f) => fs.existsSync(f);
const rel = (f) => path.relative(ROOT, f).split(path.sep).join("/");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// ── URLs, straight from the sitemap source ───────────────────────────────
const urls = [...read(SITEMAP).matchAll(/url:\s*(?:base|`\$\{base\}([^`]*)`)/g)].map((m) => m[1] ?? "");

// ── Route -> source files ────────────────────────────────────────────────
// A route's own files are everything sitting directly in its app/ directory
// (page.tsx plus the *Client.tsx / data modules next to it). Sub-directories
// are other routes.
const appFiles = walk(APP).filter((f) => /\.(tsx?|mdx?)$/.test(f));
const dirFiles = new Map();
for (const f of appFiles) {
  const d = path.dirname(path.relative(APP, f)).split(path.sep).join("/");
  if (!dirFiles.has(d)) dirFiles.set(d, []);
  dirFiles.get(d).push(f);
}
const pageDirs = [...dirFiles.keys()].filter((d) => dirFiles.get(d).some((f) => /^page\.tsx?$/.test(path.basename(f))));
const isDynamic = (seg) => /^\[.+\]$/.test(seg);

function routeFiles(urlPath) {
  const segs = urlPath.split("/").filter(Boolean);
  const same = pageDirs.filter((d) => {
    const parts = d === "." ? [] : d.split("/");
    return parts.length === segs.length && parts.every((p, i) => p === segs[i] || isDynamic(p));
  });
  // A static directory beats a dynamic one ("/case-studies/pharma" vs [filter]).
  same.sort((x, y) => x.split("/").filter(isDynamic).length - y.split("/").filter(isDynamic).length);
  const d = same[0];
  if (d === undefined) return [];
  // Special files (layouts, error boundaries, sitemap.ts, robots.ts, route
  // handlers...) share a directory with the page but are not its content. For
  // the homepage that matters: app/ itself also holds sitemap.ts and robots.ts.
  return dirFiles.get(d).filter((f) => !/^(layout|loading|error|global-error|not-found|template|default|route|sitemap|robots|manifest|opengraph-image|twitter-image|icon|apple-icon)\.[jt]sx?$/.test(path.basename(f)) && !/\.(css|md)$/.test(f));
}

// ── Local import graph ───────────────────────────────────────────────────
const importRe = /(?:import|export)\s+(?:[^'";]*?\s+from\s+)?["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g;
const EXTS = ["", ".ts", ".tsx", ".js", ".jsx", ".json", "/index.ts", "/index.tsx"];

function resolve(from, spec) {
  let base;
  if (spec.startsWith("@/")) base = path.join(ROOT, spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(from), spec);
  else return null;
  for (const e of EXTS) {
    const f = base + e;
    if (exists(f) && fs.statSync(f).isFile()) return f;
  }
  return null;
}

const importsCache = new Map();
function importsOf(file) {
  if (importsCache.has(file)) return importsCache.get(file);
  const out = new Set();
  if (/\.(tsx?|jsx?)$/.test(file)) {
    const src = read(file);
    for (const m of src.matchAll(importRe)) {
      const r = resolve(file, m[1] ?? m[2]);
      if (r) out.add(r);
    }
  }
  importsCache.set(file, out);
  return out;
}

function closure(starts) {
  const seen = new Set(starts);
  const stack = [...starts];
  while (stack.length) {
    const f = stack.pop();
    for (const d of importsOf(f)) if (!seen.has(d)) { seen.add(d); stack.push(d); }
  }
  return seen;
}

// Per-route closures, then count how many routes pull in each module.
const perRoute = new Map();
for (const u of urls) {
  const files = routeFiles(u);
  perRoute.set(u, { own: files, all: closure(files) });
}
const useCount = new Map();
for (const { all, own } of perRoute.values()) {
  for (const f of all) if (!own.includes(f)) useCount.set(f, (useCount.get(f) ?? 0) + 1);
}
const shared = (f) => (useCount.get(f) ?? 0) >= SHARED_MIN_ROUTES;

// The root layout and global CSS are shared by definition.
const alwaysIgnored = new Set([path.join(APP, "layout.tsx"), path.join(APP, "globals.css")]);

// ── Dates ─────────────────────────────────────────────────────────────────
// Commits that must not move a date (see scripts/sitemap-dates-ignore.txt).
const ignoreRules = new Map(); // sha prefix -> path prefixes ([] = whole commit)
const ignoreFile = path.join(ROOT, "scripts", "sitemap-dates-ignore.txt");
if (exists(ignoreFile)) {
  for (const raw of read(ignoreFile).split("\n")) {
    const line = raw.replace(/#.*$/, "").trim();
    if (!line) continue;
    const [sha, ...prefixes] = line.split(/\s+/);
    ignoreRules.set(sha, prefixes);
  }
}
const isIgnored = (sha, file) => {
  for (const [prefix, paths] of ignoreRules) if (sha.startsWith(prefix) && (paths.length === 0 || paths.some((p) => file === p || file.startsWith(p + "/")))) return true;
  return false;
};

const dateCache = new Map();
function lastCommit(files) {
  const key = files.join("\0");
  if (dateCache.has(key)) return dateCache.get(key);
  let latest = null;
  // Author dates (not committer dates): a rebase or cherry-pick rewrites the
  // committer date of every commit it replays, which would stamp "now" on
  // pages nobody edited. The maximum over the recent commits is used because
  // after a cherry-pick the topologically newest commit is not always the one
  // with the newest author date. Commits named in the ignore file are skipped
  // for the files they are ignored for.
  for (let i = 0; i < files.length; i += 200) {
    const chunk = files.slice(i, i + 200).map(rel);
    const out = git(["log", "-n", "80", "--format=@@%H%x09%aI", "--name-only", "--", ...chunk]) ?? "";
    for (const block of out.split("@@").slice(1)) {
      const [head, ...names] = block.split("\n").filter(Boolean);
      const [sha, date] = head.split("\t");
      const touched = names.filter((n) => chunk.includes(n));
      if (touched.length === 0 || touched.every((n) => isIgnored(sha, n))) continue;
      if (!latest || new Date(date) > new Date(latest)) latest = date;
    }
  }
  dateCache.set(key, latest);
  return latest;
}

const dates = {};
const unresolved = [];
for (const [u, { own, all }] of perRoute) {
  const relevant = [...all].filter((f) => !alwaysIgnored.has(f) && (own.includes(f) || !shared(f)));
  const d = relevant.length ? lastCommit(relevant) : null;
  if (!d) { unresolved.push(u || "/"); continue; }
  dates[u || "/"] = d;
}

// Sitemap entries the route walker could not map (pages whose content lives
// outside app/, redirects, etc.) keep whatever date the committed file has.
let previous = {};
if (exists(OUT)) previous = JSON.parse(read(OUT)).dates ?? {};
for (const u of unresolved) if (previous[u]) dates[u] = previous[u];

if (WHY !== null) {
  const key = WHY === "/" ? "" : WHY;
  const entry = perRoute.get(key);
  if (!entry) { console.error(`[sitemap-dates] ${WHY} is not in app/sitemap.ts`); process.exit(2); }
  const rows = [...entry.all].filter((f) => !alwaysIgnored.has(f) && (entry.own.includes(f) || !shared(f)))
    .map((f) => ({ f: rel(f), d: lastCommit([f]) })).sort((a, b) => new Date(b.d ?? 0) - new Date(a.d ?? 0));
  console.log(`${WHY} <- ${dates[WHY]}\n` + rows.slice(0, 15).map((r) => `  ${r.d}  ${r.f}`).join("\n"));
  process.exit(0);
}

const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
const next = JSON.stringify({ generatedBy: "scripts/generate-sitemap-dates.mjs", dates: sorted }, null, 2) + "\n";

if (CHECK) {
  const stale = [];
  for (const [u, d] of Object.entries(sorted)) {
    if (!previous[u] || new Date(previous[u]).getTime() !== new Date(d).getTime()) stale.push(`${u}  committed=${previous[u] ?? "none"}  actual=${d}`);
  }
  if (stale.length) {
    console.error(`[sitemap-dates] ${stale.length} stale entr${stale.length === 1 ? "y" : "ies"} in lib/sitemap-dates.json:\n  ${stale.join("\n  ")}\nRun: npm run sitemap:dates`);
    process.exit(1);
  }
  console.log(`[sitemap-dates] ok: ${Object.keys(sorted).length} URLs current` + (unresolved.length ? `, ${unresolved.length} unmapped kept as-is` : ""));
} else {
  fs.writeFileSync(OUT, next);
  console.log(`[sitemap-dates] wrote ${Object.keys(sorted).length} dates to lib/sitemap-dates.json` + (unresolved.length ? ` (${unresolved.length} unmapped: ${unresolved.join(", ")})` : ""));
}
