# Request Indexing list: pages Google files under other sites (prepared 2026-10-27)

18 URLs show "Duplicate without user-selected canonical" in Search Console today (re-inspected 2026-10-27). Google's canonical for each pointed at another site's homepage when last checked on 2026-10-19. `/careers/gtm-strategist` was on the 10-20 list and is now "Submitted and indexed", so it is dropped.

Google allows roughly 10 Request Indexing submissions a day per property, so there are two batches.

## Step 0: do this once, before submitting anything

1. Search Console, URL Inspection, paste `https://www.myntmore.com/services`.
2. Click **Test Live URL**, then **View Tested Page** and check the HTML and screenshot.
3. If it is our page: continue to Step 1.
4. If it is not our page: stop. Treat it as a security problem and check site access and DNS before requesting anything.

## Step 1: for each URL

URL Inspection, paste the URL, Test Live URL, check the tested page shows "User-declared canonical" as the page itself, then **Request Indexing**.

## Day 1: highest value, oldest crawls first within each group

| # | URL | Last crawled | Google's canonical (10-19) |
|---|---|---|---|
| 1 | https://www.myntmore.com/services | 2026-07-27 | 747live.bet |
| 2 | https://www.myntmore.com/services/gtm-strategy | 2026-08-30 | marcustheatres.com |
| 3 | https://www.myntmore.com/case-studies/founder-personal-brand-linkedin | 2026-08-26 | marcustheatres.com |
| 4 | https://www.myntmore.com/blog/agency-vs-in-house | 2026-08-15 | 747live.bet |
| 5 | https://www.myntmore.com/blog/ecommerce-conversion-playbook | 2026-09-22 | 747ph.live |
| 6 | https://www.myntmore.com/blog/linkedin-profile-inbound-lead-machine | 2026-08-14 | 747live.bet |
| 7 | https://www.myntmore.com/blog/personal-branding-agency-vs-content-freelancer | 2026-10-15 | 747live.bet |
| 8 | https://www.myntmore.com/case-studies/b2b-founder-tech-decision-makers | 2026-10-15 | 747live.bet |
| 9 | https://www.myntmore.com/case-studies/agencies-it-branding-agency-meetings | 2026-10-15 | 747live.bet |
| 10 | https://www.myntmore.com/case-studies/financial-services-wealth-management-discovery | 2026-10-15 | 747live.bet |

## Day 2

| # | URL | Last crawled | Google's canonical (10-19) |
|---|---|---|---|
| 11 | https://www.myntmore.com/case-studies/financial-services-corporate-finance-meetings | 2026-10-15 | 747live.bet |
| 12 | https://www.myntmore.com/case-studies/insurance-insurtech-product-demos | 2026-10-15 | 747live.bet |
| 13 | https://www.myntmore.com/case-studies/insurance-health-advisory-consultations | 2026-10-15 | 747live.bet |
| 14 | https://www.myntmore.com/case-studies/manufacturers-exporters-engineering-goods-replies | 2026-10-15 | 747live.bet |
| 15 | https://www.myntmore.com/resources/glossary/founder-led-sales | 2026-09-25 | 747live.bet |
| 16 | https://www.myntmore.com/resources/glossary/existing-connection-nurturing | 2026-09-25 | 747live.bet |
| 17 | https://www.myntmore.com/careers/content-marketing-strategist-intern | 2026-09-19 | 747live.bet |
| 18 | https://www.myntmore.com/careers/systems-ai-automation-intern | 2026-10-05 | 747live.bet |

Day 2 has room for two more. Use them for the stale-noindex case studies (see `docs/gsc-request-indexing-list-2026-10-20.md`, Day 2).

## Notes

- Nothing on the live site explains the foreign canonicals: our pages return a self-referencing canonical tag, and a canonical `Link` header shipped on 2026-10-20. Most of these URLs were last crawled before that, so Google is still showing an old decision.
- The "Google's canonical" column comes from the 2026-10-19 check (`docs/seo-weekly-run-2026-10-19.md`). Today's re-inspection confirmed only the coverage state and crawl date, not the canonical target.
- Check back 3 to 7 days after each batch: re-inspect the URL and look for "Submitted and indexed" and a newer last-crawled date. If a URL still shows a foreign canonical after a fresh crawl, tell me and I will look at what Google fetched.
