# SEO opportunity map — 2026-10-10

Source: Google Search Console through GSC Wizard, domain property `sc-domain:myntmore.com`, web search, settled range 2026-09-10 to 2026-10-07. Search Console data is sampled: the query report is missing approximately 40.4% of impressions and 45.7% of clicks, so these numbers are directional rather than a complete accounting.

## Technical crawl

The 25 highest-impression, indexable URLs were crawled live.

- 25/25 returned HTTP 200 and were indexable.
- 25/25 had one H1, a self-referencing canonical, valid structured data, and complete image alt coverage.
- 0 critical, high, or medium issues.
- 1 low issue: `/GIAtech-stack` is a legacy URL that permanently redirects to `/resources/guides/ai-tech-stack-jewellery`. It is not in the XML sitemap and should remain a redirect.
- A broader audit of 15 high-impression URLs found the same pattern. Organization-logo schema fixes are now in production code.

## Query-to-page opportunities

| Priority | Query | Current page | GSC signal | Action |
| --- | --- | --- | --- | --- |
| 1 | `b2b lead generation companies in pune` | `/b2b-lead-generation-pune` | 60 impressions, 1 click, position 13.33 | Added the exact comparison phrase naturally to the hero copy. Strengthen with internal links from Pune-relevant content and monitor position/CTR. |
| 1 | `b2b lead generation services chennai` | `/b2b-lead-generation-chennai` | 11 impressions, 0 clicks, position 6 | Test a more service-specific title/description only after another settled period; current metadata is already within length limits. |
| 1 | `what is b2b outbound sales` | `/blog/what-is-b2b-outbound-sales` | 10 impressions, 0 clicks, position 4.4 | Updated title, description, Article headline, and modification date to improve SERP clarity. |
| 1 | `b2b outbound sales` | `/blog/what-is-b2b-outbound-sales` | 17 impressions, 0 clicks, position 6.41 | Keep the guide as the canonical informational result; continue linking to it from outbound service pages. |
| 2 | `lead generation companies in mumbai` | `/` and `/b2b-lead-generation-mumbai` | 55 impressions across pages, 1 click | Avoid forcing one page prematurely. The homepage owns broad agency intent; the Mumbai page owns local service intent. Improve internal links and compare after the next data window. |
| 2 | `lead generation agency in mumbai` | `/b2b-lead-generation-mumbai` | 11 impressions, 1 click, position 5.27 | Healthy early signal; monitor rather than rewrite. |
| 2 | `gtm` | `/` | 331 impressions, 0 clicks, position 4.37 | Ambiguous query. Do not optimize the homepage around the single token; use the dedicated GTM Strategy service page for qualified intent and review query variants. |
| 2 | `ai agency` | `/` | 32 impressions, 0 clicks, position 6.13 | Ambiguous and broad. Do not add “AI agency” keyword stuffing; clarify AI lead-generation positioning on the dedicated service page instead. |

## Cannibalization findings

The largest apparent collisions are branded queries, not commercial keyword failures. `myntmore` is distributed across 31 URLs and `myntmore company` across 13 URLs, with the homepage receiving the clicks. This is expected brand navigational behavior and does not justify noindexing supporting pages. Local commercial queries show some homepage/city-page overlap, especially Mumbai; the city pages should keep their location-specific copy while the homepage remains the broad brand destination.

## Indexing checks

URL Inspection returned `PASS`, `Submitted and indexed`, and `INDEXING_ALLOWED` for the homepage, about page, Pune and Chennai city pages, the outbound-sales guide, two comparison/template blogs, two service pages, tools, and case studies. The two registered sitemaps report zero errors and zero warnings.

## Next measurement window

After Google has a new settled 28-day window, compare:

1. CTR and position for the updated outbound-sales guide.
2. Pune impressions and clicks for the comparison phrase.
3. Chennai city-page CTR for the service-intent variants.
4. Whether homepage/city-page overlap for Mumbai is still producing useful clicks or just duplicated impressions.

Do not treat the GSC opportunity score as guaranteed traffic. Confirm the query, landing page, intent, and conversion path before making a larger rewrite.
