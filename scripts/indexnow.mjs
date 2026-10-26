// Tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver) which
// URLs changed, so they recrawl within hours instead of whenever they next get
// round to the sitemap. ChatGPT search answers from Bing's index, so this is
// also how a page edit reaches ChatGPT.
//
//   node scripts/indexnow.mjs <base> <head>     submit paths whose lastmod differs between two git refs
//   node scripts/indexnow.mjs --all             submit every path in lib/sitemap-dates.json
//   node scripts/indexnow.mjs /blog/a /about-us submit these paths
//   add --dry-run to any of them to print the URLs without submitting
//
// The change signal is lib/sitemap-dates.json, not a fresh diff of app/: that
// file already records, per URL, the last commit that changed the page itself
// (see scripts/generate-sitemap-dates.mjs), so diffing it between two refs gives
// exactly the URLs whose content changed, and nothing for a footer tweak.
// Paths that disappeared are submitted too: IndexNow wants deletions as well,
// so the engine recrawls them and sees the redirect or 404.
//
// Runs from .github/workflows/indexnow.yml after each successful production
// deploy, with <base> = the previous production deploy's commit. It has to run
// after the deploy, not in the build: a ping during the build would send Bing
// to fetch the old version of the page.
//
// The key is public by design: IndexNow proves ownership by fetching
// https://www.myntmore.com/<KEY>.txt and checking it holds the same string.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const SITE = "https://www.myntmore.com";
const HOST = "www.myntmore.com";
const KEY = "33c4ec0413cf7003402388f4fb732426";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const DATES = "lib/sitemap-dates.json";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10000; // the protocol's per-request limit

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const ALL = args.includes("--all");
const rest = args.filter((a) => !a.startsWith("--"));

if (!fs.existsSync(path.join(ROOT, "public", `${KEY}.txt`))) {
  console.error(`[indexnow] public/${KEY}.txt is missing; engines would reject the key`);
  process.exit(1);
}

const datesAt = (ref) => {
  try {
    const json = execFileSync("git", ["show", `${ref}:${DATES}`], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    return JSON.parse(json).dates;
  } catch {
    return null;
  }
};

let paths;
if (ALL) {
  paths = Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, DATES), "utf8")).dates);
} else if (rest.length === 2 && !rest[0].startsWith("/")) {
  const [base, head] = rest;
  const before = datesAt(base);
  const after = datesAt(head);
  if (!after) {
    console.error(`[indexnow] cannot read ${DATES} at ${head}`);
    process.exit(1);
  }
  if (!before) {
    console.error(`[indexnow] cannot read ${DATES} at ${base}; refusing to guess, run with --all if you mean it`);
    process.exit(1);
  }
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  paths = [...keys].filter((p) => before[p] !== after[p]);
} else if (rest.length && rest.every((p) => p.startsWith("/"))) {
  paths = rest;
} else {
  console.error("usage: node scripts/indexnow.mjs <base-ref> <head-ref> | --all | /path ... [--dry-run]");
  process.exit(1);
}

const urls = [...new Set(paths)].sort().map((p) => (p === "/" ? `${SITE}/` : `${SITE}${p}`));

if (!urls.length) {
  console.log("[indexnow] no changed URLs, nothing to submit");
  process.exit(0);
}

console.log(`[indexnow] ${urls.length} URL${urls.length === 1 ? "" : "s"}${DRY ? " (dry run, not submitted)" : ""}:`);
for (const u of urls) console.log(`  ${u}`);
if (DRY) process.exit(0);

let failed = false;
for (let i = 0; i < urls.length; i += BATCH) {
  const urlList = urls.slice(i, i + BATCH);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 = accepted, 202 = accepted but the key is still being validated.
  // Anything else (400 bad request, 403 key not found, 422 URL not on host,
  // 429 too many requests) is a failure worth seeing in the workflow log.
  const body = (await res.text()).trim();
  console.log(`[indexnow] batch ${i / BATCH + 1}: HTTP ${res.status}${body ? ` ${body.slice(0, 300)}` : ""}`);
  if (res.status !== 200 && res.status !== 202) failed = true;
}
process.exit(failed ? 1 : 0);
