// Lists every proof-point claim the site makes (meetings booked, pipeline, client
// counts, founder credentials) with how often each wording appears and where, so
// conflicting versions are visible in one place. The canonical facts live in
// lib/entity-facts.json; this checks the pages against them.
//
//   node scripts/audit-entity-claims.mjs            report
//   node scripts/audit-entity-claims.mjs --strict   exit 1 if any claim family has more than one value
//
// It reports what is written, not what is true: deciding which of two conflicting
// numbers is correct needs a person who knows the business.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const STRICT = process.argv.includes("--strict");

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(tsx?|txt|json|mdoc)$/.test(e.name)) out.push(p);
  }
  return out;
};
const files = [...walk(path.join(ROOT, "app")), ...walk(path.join(ROOT, "components")), ...walk(path.join(ROOT, "lib")), ...walk(path.join(ROOT, "content"))]
  .filter((f) => !/site-audit|sitemap-dates|service-answers|entity-facts|research/.test(f))
  .filter((f) => !f.includes(`${path.sep}api${path.sep}`));

// Each family is a claim that should have exactly one value sitewide.
const FAMILIES = {
  "meetings booked (company total)": /(\d[\d,.]*\s?[KkMm]\+)\s+meetings(?:\s+booked)?/g,
  "pipeline generated (company total)": /\$\s?(\d[\d,.]*\s?[MmKk]\+)\s+(?:in\s+)?pipeline/g,
  // Company-wide counts only (two or three digits). Per-service figures such as "5,000 accounts" are not claims about how many clients Myntmore has.
  "clients / companies / accounts served": /(\d{2,3}\+?)\s+(B2B\s+accounts|B2B\s+companies|B2B\s+clients|clients|companies)\b/g,
  "revenue generated for clients": /\$\s?(\d[\d,.]*\s?[MmKk]\+?)\s+in\s+revenue/g,
  "students taught": /(\d[\d,.]*\+?)\s+students/g,
};

const report = {};
for (const [family, re] of Object.entries(FAMILIES)) {
  const byValue = new Map();
  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    for (const m of src.matchAll(re)) {
      const raw = m[1].replace(/\s/g, "");
      // Company totals only: "12K+" meetings and "$120M+" pipeline, not a single campaign's result.
      if (family.startsWith("meetings") && !/[Kk]\+/.test(raw)) continue;
      if (family.startsWith("pipeline") && !/[Mm]\+/.test(raw)) continue;
      const key = family.startsWith("clients") ? `${raw} ${m[2]}` : raw;
      if (!byValue.has(key)) byValue.set(key, new Set());
      byValue.get(key).add(path.relative(ROOT, file));
    }
  }
  report[family] = byValue;
}

let conflicts = 0;
for (const [family, byValue] of Object.entries(report)) {
  console.log(`\n${family}`);
  if (byValue.size === 0) { console.log("  (none found)"); continue; }
  // For "clients/companies/accounts" the noun is part of the key, so compare by number only.
  const distinctNumbers = new Set([...byValue.keys()].map((k) => k.split(" ")[0].replace(/\+$/, "")));
  if (distinctNumbers.size > 1) conflicts++;
  for (const [value, set] of [...byValue].sort((a, b) => b[1].size - a[1].size)) {
    const list = [...set];
    console.log(`  ${String(list.length).padStart(3)} file${list.length === 1 ? " " : "s"}  ${value}   e.g. ${list.slice(0, 2).join(", ")}${list.length > 2 ? ` (+${list.length - 2})` : ""}`);
  }
  if (distinctNumbers.size > 1) console.log(`  ^ ${distinctNumbers.size} different values: pick one and make every page say it`);
}

const facts = JSON.parse(fs.readFileSync(path.join(ROOT, "lib", "entity-facts.json"), "utf8"));
console.log(`\nCanonical proof points (lib/entity-facts.json): ${facts.proofPoints.join("; ")}`);
console.log(`Canonical office address (lib/entity-facts.json): ${facts.contact.address}`);
console.log(conflicts ? `\n${conflicts} claim famil${conflicts === 1 ? "y has" : "ies have"} conflicting values.` : "\nNo conflicting claim values.");
if (STRICT && conflicts) process.exit(1);
