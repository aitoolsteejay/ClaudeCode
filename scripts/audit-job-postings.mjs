// Lists every job posting under app/careers and checks the two things that went
// wrong silently before:
//
//   - validThrough: the JobPosting structured data on each posting has an end date
//     (a rolling 6-month window). Past it, Google for Jobs treats the posting as
//     expired and drops it, with no error anywhere. The Lead Gen Strategist posting
//     was six weeks from that when it was caught.
//   - apply addresses: every posting should offer founder@ and growth@myntmore.com
//     and no other address (content@ was removed on 2026-10-15).
//
//   node scripts/audit-job-postings.mjs             report; exit 1 if a posting has expired
//   node scripts/audit-job-postings.mjs --strict    also exit 1 when one ends within 45 days
//
// To extend a posting, change validThrough in its page.tsx (about six months out)
// and keep datePosted as the real creation date.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CAREERS = path.join(ROOT, "app", "careers");
const STRICT = process.argv.includes("--strict");
const WARN_DAYS = 45;
const EXPECTED = ["founder@myntmore.com", "growth@myntmore.com"];

const today = new Date();
const days = (iso) => Math.floor((new Date(iso).getTime() - today.getTime()) / 86400000);

const rows = [];
for (const dir of fs.readdirSync(CAREERS, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const file = path.join(CAREERS, dir.name, "page.tsx");
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  const job = src.match(/buildJobPostingSchema\(\{([\s\S]*?)\n\}\);/);
  if (!job) continue; // not a posting page
  const body = job[1];
  const get = (k) => body.match(new RegExp(`${k}:\\s*"([^"]+)"`))?.[1];
  const emp = body.match(/employmentType:\s*(\[[^\]]*\]|"[^"]+")/)?.[1].replace(/["\s]/g, "");
  const sal = body.match(/baseSalary:\s*\{\s*minValue:\s*(\d+),\s*maxValue:\s*(\d+),\s*unitText:\s*"(\w+)"/);
  const emails = [...new Set(src.match(/[A-Za-z0-9._-]+@myntmore\.com/g) ?? [])].sort();
  const validThrough = get("validThrough");
  rows.push({
    slug: dir.name,
    title: get("title"),
    employment: emp,
    pay: sal ? `${Number(sal[1]).toLocaleString("en-IN")}-${Number(sal[2]).toLocaleString("en-IN")} per ${sal[3].toLowerCase()}` : "none",
    posted: get("datePosted")?.slice(0, 10),
    validThrough: validThrough?.slice(0, 10),
    daysLeft: validThrough ? days(validThrough) : null,
    emails,
  });
}

let expired = 0;
let soon = 0;
let badEmail = 0;
console.log(`Job postings (${rows.length}), checked ${today.toISOString().slice(0, 10)}\n`);
for (const r of rows.sort((a, b) => (a.daysLeft ?? 0) - (b.daysLeft ?? 0))) {
  const flag = r.daysLeft === null ? "NO DATE" : r.daysLeft < 0 ? "EXPIRED" : r.daysLeft <= WARN_DAYS ? "ENDING SOON" : "ok";
  if (flag === "EXPIRED" || flag === "NO DATE") expired++;
  if (flag === "ENDING SOON") soon++;
  const unexpected = r.emails.filter((e) => !EXPECTED.includes(e));
  const missing = EXPECTED.filter((e) => !r.emails.includes(e));
  const emailOk = !unexpected.length && !missing.length;
  if (!emailOk) badEmail++;
  console.log(`${r.slug}`);
  console.log(`  ${r.title} | ${r.employment} | ${r.pay}`);
  console.log(`  posted ${r.posted}, valid through ${r.validThrough} (${r.daysLeft === null ? "?" : r.daysLeft + " days left"})  [${flag}]`);
  console.log(`  apply addresses: ${r.emails.join(", ") || "none"}${emailOk ? "" : `  [CHECK: ${unexpected.length ? "unexpected " + unexpected.join(", ") : ""}${missing.length ? " missing " + missing.join(", ") : ""}]`}`);
}

console.log(`\n${expired} expired or undated, ${soon} ending within ${WARN_DAYS} days, ${badEmail} with unexpected apply addresses.`);
if (expired || badEmail || (STRICT && soon)) process.exit(1);
