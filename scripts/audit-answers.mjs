// Checks that answer copy is snippet-shaped: 40-60 words, the answer in the
// first sentence, no hedge opener ("it depends", "great question"...). Covers
//   - the direct-answer definitions in lib/service-answers.json (must pass)
//   - every FAQ question/answer pair found in app/, components/ and lib/
//
//   node scripts/audit-answers.mjs               summary + files with the most misses
//   node scripts/audit-answers.mjs --all         every out-of-range answer
//   node scripts/audit-answers.mjs --strict      exit 1 if any service-answer fails
//                                                (FAQ misses are reported, not fatal)
//
// FAQ pairs are found by pattern, not by running the code: `q: "..", a: ".."`
// and `question: "..", answer: ".."` string literals (also as quoted JSON keys in content/faqs/ and as YAML in content/posts/*.mdoc) (single-line or split over
// lines). Answers built by concatenation or from variables are not seen.
//
// The range is the one in docs/seo-aeo-geo-cadence.md and
// docs/featured-snippet-audit.md. It is a guideline for snippet eligibility, not
// a quality score: a 35-word answer that fully answers the question is fine, it
// just will not be reported as "in range".

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const ALL = process.argv.includes("--all");
const STRICT = process.argv.includes("--strict");
const MIN = 40;
const MAX = 60;
const HEDGE = /^(it depends|that depends|depends on|well,|great question|good question|honestly,|so,|yes and no|there's no (one|single) answer)/i;

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?|json|mdoc)$/.test(e.name)) out.push(p);
  }
  return out;
};

const unescape = (s) => s.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\n/g, " ").replace(/\\\\/g, "\\");
const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;
const strLit = String.raw`"((?:[^"\\]|\\.)*)"`;

// q/a pairs, either key naming, in either order of whitespace/newlines.
const pairRe = new RegExp(String.raw`\b(?:q|question)"?\s*:\s*${strLit}\s*,?\s*"?(?:a|answer)"?\s*:\s*${strLit}`, "g");

const results = [];
for (const file of [...walk(path.join(ROOT, "app")), ...walk(path.join(ROOT, "components")), ...walk(path.join(ROOT, "lib")), ...walk(path.join(ROOT, "content", "faqs")), ...walk(path.join(ROOT, "content", "posts")), ...walk(path.join(ROOT, "content", "glossary"))]) {
  const rel = path.relative(ROOT, file);
  if (rel.startsWith("lib/service-answers") || rel.endsWith(".generated.json")) continue; // checked separately below
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(pairRe)) {
    const q = unescape(m[1]);
    const a = unescape(m[2]);
    results.push({ file: rel, q, a, n: words(a), hedge: HEDGE.test(a.trim()) });
  }
}

// De-duplicate identical answers that are re-declared in several files.
const seen = new Set();
const faqs = results.filter((r) => { const k = r.q + "\0" + r.a; if (seen.has(k)) return false; seen.add(k); return true; });

const under = faqs.filter((r) => r.n < MIN);
const over = faqs.filter((r) => r.n > MAX);
const hedged = faqs.filter((r) => r.hedge);
const inRange = faqs.length - under.length - over.length;

console.log(`FAQ answers found: ${faqs.length} (de-duplicated)`);
console.log(`  in ${MIN}-${MAX} words: ${inRange}    under ${MIN}: ${under.length}    over ${MAX}: ${over.length}    hedge opener: ${hedged.length}`);

const byFile = new Map();
for (const r of [...under, ...over]) byFile.set(r.file, (byFile.get(r.file) ?? 0) + 1);
const top = [...byFile].sort((a, b) => b[1] - a[1]);
console.log(`\nFiles with the most out-of-range answers:`);
for (const [f, n] of top.slice(0, ALL ? top.length : 12)) console.log(`  ${String(n).padStart(3)}  ${f}`);

if (ALL) {
  console.log(`\nOut-of-range answers:`);
  for (const r of [...under, ...over].sort((a, b) => a.file.localeCompare(b.file))) console.log(`  [${r.n}w] ${r.file}: ${r.q}`);
}
if (hedged.length) {
  console.log(`\nHedge openers:`);
  for (const r of hedged) console.log(`  ${r.file}: ${r.q}  ->  "${r.a.slice(0, 60)}..."`);
}

// The direct-answer definitions must pass.
const svcData = JSON.parse(fs.readFileSync(path.join(ROOT, "lib", "service-answers.json"), "utf8"));
const svcFail = [];
for (const entry of svcData) {
  const n = words(entry.answer);
  const first = entry.answer.split(/(?<=[.?!])\s/)[0];
  if (n < MIN || n > MAX) svcFail.push(`${entry.slug}: ${n} words`);
  if (HEDGE.test(entry.answer)) svcFail.push(`${entry.slug}: hedge opener`);
  if (words(first) < 6) svcFail.push(`${entry.slug}: first sentence too short to hold the answer`);
}
console.log(`\nService direct answers (lib/service-answers.json): ${svcData.length - svcFail.length}/${svcData.length} pass` + (svcFail.length ? `\n  ${svcFail.join("\n  ")}` : ""));
if (STRICT && svcFail.length) process.exit(1);
