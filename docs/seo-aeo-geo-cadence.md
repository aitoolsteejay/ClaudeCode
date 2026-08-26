# SEO / AEO / GEO Recurring Task Cadence

Reference checklist for ongoing site health across three related but distinct goals:

- **SEO** (Search Engine Optimization) — ranking in traditional Google/Bing search results.
- **AEO** (Answer Engine Optimization) — being the direct answer in Google's AI Overviews, People Also Ask, and voice assistants. Driven mostly by structured data (schema.org JSON-LD) and tightly-formatted direct-answer content.
- **GEO** (Generative Engine Optimization) — being cited or mentioned by generative AI chat tools (ChatGPT, Perplexity, Claude, Gemini) when someone asks them a relevant question. Driven by crawlability, `llms.txt`, citation-worthy original data, and clear factual claims with sources.

The three overlap heavily in practice (good structured data and direct-answer FAQs serve all three at once), so most tasks below aren't labeled as belonging to just one.

## Triggered — every time a page is added or changed

Not calendar-based; do these as part of shipping the change itself, same commit where possible.

- [ ] **Keyword collision check** — run the script in `docs/keyword-map.md`'s "Method" section before publishing. No two pages should share a primary keyword.
- [ ] **Full schema pass** — Breadcrumb on every page; Article/Service/JobPosting/HowTo as the page type calls for; FAQPage if the page has an FAQ section. See `lib/schema.ts` for the builders.
- [ ] **Sitemap entry** — add to `app/sitemap.ts` with a real `lastModified` date (derive from `git log -1 --format=%aI -- <path>`, not `new Date()`/"now" — see that file's own header comment for why).
- [ ] **Title/description length** — title ≤60 chars including the auto-appended `| Myntmore`, meta description ≤155 chars with a CTA.
- [ ] **Bidirectional internal linking** — new page should link out to at least one relevant existing page, and get a real inbound link from at least one relevant existing page (not just added to a nav/footer list and left orphaned everywhere else).
- [ ] **FAQ answers formatted for snippets** — question as the heading, direct claim in the first sentence (no "it depends"-style hedge openers), ~40-60 words or tighter. See `docs/featured-snippet-audit.md`'s method.
- [ ] **`public/llms.txt`** — update if the change is a new service, a structural page, or a name/URL change to something already listed. Its own footer note requires this; a blog post doesn't need an entry, a new service or major page does.
- [ ] **No fabricated stats** — real numbers only, or explicit "new offering, no track record yet" framing when there isn't a real number to cite (see `docs/content-gaps.md` and the GTM Strategy / fundraising pages for the pattern).

## Weekly

- [ ] Skim Google Search Console for new indexing errors, manual actions, or coverage drops. *(Needs GSC access confirmed/connected — flagged below.)*
- [ ] If multiple people touched the repo that week: run `tsc --noEmit` + `npm run build` once to catch drift before it compounds.

## Monthly

- [ ] Re-run the keyword-collision script sitewide, even with no new pages shipped — catches keyword edits made outside the "new page" checklist above.
- [ ] Broken internal-link sweep (same method used in the free-tools cross-linking pass).
- [ ] Publish 1-2 pieces of content from the `docs/content-gaps.md` backlog. Steady cadence beats sporadic bursts for both SEO freshness signals and GEO surface area (more indexed, citable pages).
- [ ] Spot-check the one known off-page stale listing (Edverise) and scan for any new ones — third-party directories drift independent of the site's own changes.
- [ ] **GEO citation spot-check**: manually run 5-10 target prompts through ChatGPT, Perplexity, Claude, and Gemini (e.g. "best cold email agency for B2B SaaS in India", "average B2B outbound reply rate 2026") and note whether Myntmore is mentioned/cited and what's said. No API exists for this today — needs a human at the keyboard, but paste results back and I can help analyze and act on what's missing.

## Quarterly

- [ ] Full re-run of the featured-snippet audit (`docs/featured-snippet-audit.md`) — more content accumulated means more chances to drift on word count or hedge-openers.
- [ ] Full internal-linking review of everything shipped in the past quarter — confirm bidirectional links didn't get missed under time pressure.
- [ ] Structured-data validation pass — run each page type through Google's Rich Results Test / schema.org validator. Catches silent breakage from a framework upgrade or refactor that the build doesn't surface as a TypeScript error.
- [ ] E-E-A-T consistency sweep — scan for stale or contradicting stats across the site (the pass done earlier: case-studies stat strip vs. sitewide figures). Drifts naturally as new case studies and posts get added with slightly different numbers.
- [ ] Backlink/citation audit — new mentions, lost links, spam links worth disavowing. *(Needs an Ahrefs/Semrush-class tool — flagged below.)*
- [ ] Rank tracking review — trend on target keywords. *(Needs a rank-tracking tool — flagged below.)*

## Semi-annual / Annual

- [ ] Refresh the benchmark report (`/blog/b2b-outbound-benchmark-report-2026`) with updated aggregate data. Its value for both SEO citations and GEO/LLM citations depends on staying current — a report visibly two years stale loses credibility fast.
- [ ] Full content audit — which older pages are underperforming and need a rewrite, consolidation, or redirect, vs. which are working and deserve more internal links pointed at them.
- [ ] Re-evaluate keyword/service strategy — has the market shifted enough to warrant a new service or `/lp/*` page (the pattern behind GTM Strategy and the fundraising page this year)?

## Needs the user's own accounts/tooling, not something executable from here

- Google Search Console — confirm connection status, review it directly for the weekly/monthly items above.
- Backlink/citation audit tool (Ahrefs, Semrush, or similar) for the quarterly item.
- Rank tracking tool for the quarterly item.
- Dedicated GEO/AI-citation tracking (Profound, Otterly, or similar) if manual monthly spot-checks stop being enough — these platforms automate what the monthly GEO check above does by hand.
- Benchmark report distribution/outreach (PR, newsletter placements, etc.) to actually get it cited elsewhere, not just published.

## Re-auditing later

Every checklist item that says "re-run the script/method" points to a doc that already contains that exact, mechanical method (`docs/keyword-map.md`, `docs/featured-snippet-audit.md`, `docs/content-gaps.md`). Update this file itself whenever a new recurring pattern gets established, the same way those docs get updated when they're re-run.
