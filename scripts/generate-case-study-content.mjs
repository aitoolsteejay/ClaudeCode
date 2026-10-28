// Builds lib/case-study-library.json from content/case-studies/*.json (the files the
// Keystatic admin edits). scripts/generate-case-study-pages.mjs then writes a page and a
// sitemap entry for each case. Pass --check to fail if the generated file is out of date.
//
//   node scripts/generate-case-study-content.mjs           write lib/case-study-library.json
//   node scripts/generate-case-study-content.mjs --check   exit 1 if it is stale
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "content/case-studies");
const out = path.join(root, "lib/case-study-library.json");

const INDUSTRIES = ["Pharma", "SaaS", "Professional Services", "eCommerce Tech", "B2B Founder", "Agencies & IT", "Financial Services", "Insurance", "Manufacturers & Exporters", "Recruitment & Staffing"];
const KEYS = ["n", "industry", "segment", "slug", "title", "challenge", "solution", "results"];

const seen = new Set();
const cases = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => {
    const raw = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    // The file name is the page address; keep the stored slug in step with it.
    const slug = f.replace(/\.json$/, "");
    const c = { ...raw, slug };
    for (const k of KEYS) if (c[k] === undefined || c[k] === "" || (Array.isArray(c[k]) && !c[k].length)) throw new Error(`${f}: "${k}" is empty`);
    if (!INDUSTRIES.includes(c.industry)) throw new Error(`${f}: unknown industry "${c.industry}"`);
    if (seen.has(slug)) throw new Error(`duplicate slug ${slug}`);
    seen.add(slug);
    return Object.fromEntries(KEYS.map((k) => [k, c[k]]));
  })
  .sort((a, b) => a.n - b.n || a.slug.localeCompare(b.slug));

const next = JSON.stringify({ cases }, null, 1);
if (process.argv.includes("--check")) {
  const current = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : "";
  if (current !== next) {
    console.error("[case-studies] lib/case-study-library.json is stale, run npm run case-studies:content");
    process.exit(1);
  }
  console.log(`[case-studies] ok (${cases.length} cases)`);
} else {
  fs.writeFileSync(out, next);
  console.log(`[case-studies] wrote ${cases.length} cases`);
}
