// Internal linking job: for each source page, ONE Jev call (experimental_evaluate) with the page as the
// state and one boolean question per destination. Writes a CSV of from,to,probability.
// It reads the live site and writes two CSVs here. It never edits the site and inserts no links.
//
//   cd scripts/internal-linking && npm install
//   export AI_GATEWAY_API_KEY=...            # Vercel dashboard > AI Gateway > API keys
//   node run.mjs --dry                       # fetch + build states and questions, no API calls
//   node run.mjs                             # first 20 source pages, one call each
//
// Rules (from the brief): one call per page, never one per pair; questions are about the reader's next
// move; no flat threshold: rank per page, keep the winner only if it clears MIN_WINNER on its own and
// beats the runner-up by MIN_MARGIN.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { experimental_evaluate as evaluate } from "ai";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.myntmore.com";
const MODEL = "typesafe-ai/jev";
const MAX_BODY_CHARS = 24000;   // Jev's state budget is 32k tokens (~4 chars per token, leave room for title and questions)
const MIN_WINNER = 0.6;
const MIN_MARGIN = 0.15;
const LIMIT = Number((process.argv.find((a) => a.startsWith("--limit=")) || "--limit=20").split("=")[1]);
const DRY = process.argv.includes("--dry");

// Destination pages and, for each, what a reader who has finished a page might still need.
const DESTINATIONS = [
  { path: "/services/linkedin-outreach", need: "someone to run LinkedIn outreach for them so that it turns into booked meetings" },
  { path: "/services/cold-email", need: "a done-for-you cold email system that gets replies and stays out of spam folders" },
  { path: "/services/personal-branding", need: "a founder-led LinkedIn presence that brings inbound conversations" },
  { path: "/services/ai-lead-generation", need: "AI-driven prospecting and lead research that keeps a pipeline full" },
  { path: "/case-studies", need: "proof, from companies like theirs, that this approach produces meetings and pipeline" },
];
// Source pages: content pages (blog posts and guides) in sitemap order, never a destination itself.
const SOURCE_PREFIXES = ["/blog/", "/resources/guides/"];

const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
const strip = (html) => decode(html.replace(/<(script|style|noscript|svg|template)\b[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

async function get(url) {
  const r = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (Myntmore internal linking job)" } });
  if (!r.ok) throw new Error(`${url} -> ${r.status}`);
  return r.text();
}
function pageParts(html) {
  const title = decode((html.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ""])[1]).replace(/\s*\|\s*Myntmore\s*$/i, "").trim();
  const description = decode((html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || [, ""])[1]);
  const main = (html.match(/<main\b[\s\S]*<\/main>/i) || [html])[0]
    .replace(/<(nav|footer|header|aside)\b[\s\S]*?<\/\1>/gi, " ");
  let body = strip(main);
  const full = body.length;
  if (body.length > MAX_BODY_CHARS) body = body.slice(0, MAX_BODY_CHARS);
  return { title, description, body, fullChars: full };
}

const urls = [...(await get(`${SITE}/sitemap.xml`)).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname.replace(/\/$/, "") || "/");
const destPaths = new Set(DESTINATIONS.map((d) => d.path));
const sources = urls.filter((u) => SOURCE_PREFIXES.some((p) => u.startsWith(p)) && !destPaths.has(u)).slice(0, LIMIT);
console.log(`sitemap: ${urls.length} URLs; source pages this run: ${sources.length}; destinations: ${DESTINATIONS.length}; model ${MODEL}${DRY ? "  (DRY RUN, no API calls)" : ""}`);

for (const d of DESTINATIONS) {
  const p = pageParts(await get(SITE + d.path));
  d.title = p.title; d.offers = p.description;
}

// The reader's-next-move wording. Not "is this relevant / helpful".
const question = (d) =>
  `A reader who finishes this page still needs ${d.need}. Would they click the link "${d.title}" (${SITE}${d.path}), which offers: ${d.offers} and find what they came for?`;

const rows = [];   // kept links
const all = [];    // every score, for auditing
let totalIn = 0;
for (const [i, from] of sources.entries()) {
  const page = pageParts(await get(SITE + from));
  const qs = {};
  const dests = DESTINATIONS.filter((d) => d.path !== from);
  for (const [j, d] of dests.entries()) qs[`q${j}`] = { type: "boolean", instructions: question(d) };
  const state = { url: SITE + from, title: page.title, body: page.body };
  if (DRY) { console.log(`${String(i + 1).padStart(2)}. ${from}  body ${page.body.length}/${page.fullChars} chars (~${Math.round(page.body.length / 4)} tokens)`); continue; }
  let result;
  try { result = await evaluate({ model: MODEL, state, questions: qs }); }
  catch (e) { console.error(`${from}: ${e.message}`); all.push({ from, error: e.message }); continue; }
  totalIn += result.usage.inputTokens || 0;
  const scored = dests.map((d, j) => ({ to: d.path, p: result.answers[`q${j}`].probability })).sort((a, b) => b.p - a.p);
  for (const s of scored) all.push({ from, to: s.to, p: s.p });
  const [w, r] = scored;
  const keep = w && w.p >= MIN_WINNER && w.p - (r ? r.p : 0) >= MIN_MARGIN;
  if (keep) rows.push({ from, to: w.to, p: w.p });
  console.log(`${String(i + 1).padStart(2)}. ${from}  top ${w.to} ${w.p.toFixed(3)}  next ${r ? r.p.toFixed(3) : "-"}  ${keep ? "LINK" : "no link"}  (${result.usage.inputTokens} in-tokens)`);
}
if (!DRY && all.length > 0 && all.every((r) => r.error)) {
  console.error(`\nEvery call failed (first error: ${all[0].error}). No CSV written. Nothing was scored.`);
  process.exit(1);
}
if (!DRY) {
  fs.writeFileSync(path.join(HERE, "links.csv"), "from,to,probability\n" + rows.map((r) => `${r.from},${r.to},${r.p.toFixed(3)}`).join("\n") + "\n");
  fs.writeFileSync(path.join(HERE, "all-scores.csv"), "from,to,probability,error\n" + all.map((r) => `${r.from},${r.to || ""},${r.p !== undefined ? r.p.toFixed(3) : ""},${r.error ? JSON.stringify(r.error) : ""}`).join("\n") + "\n");
  console.log(`\n${rows.length} links proposed for ${sources.length} pages -> scripts/internal-linking/links.csv (all scores in all-scores.csv). ${totalIn} input tokens total. Site untouched.`);
}
