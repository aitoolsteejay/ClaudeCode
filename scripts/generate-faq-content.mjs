// Builds lib/faq-content.generated.json from content/faqs/homepage/*.json
// (the files the Keystatic admin edits). Pass --check to fail if the
// generated file is out of date instead of writing it.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "content/faqs/homepage");
const out = path.join(root, "lib/faq-content.generated.json");

const items = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
  .sort((a, b) => a.order - b.order)
  .map(({ question, answer, links }) => {
    if (!question || !answer) throw new Error(`FAQ missing question or answer: ${question}`);
    return links && links.length ? { question, answer, links } : { question, answer };
  });

const next = JSON.stringify(items, null, 2) + "\n";
if (process.argv.includes("--check")) {
  const current = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : "";
  if (current !== next) {
    console.error("[faqs] lib/faq-content.generated.json is stale, run npm run faqs:build");
    process.exit(1);
  }
  console.log(`[faqs] ok (${items.length} FAQs)`);
} else {
  fs.writeFileSync(out, next);
  console.log(`[faqs] wrote ${items.length} FAQs`);
}
