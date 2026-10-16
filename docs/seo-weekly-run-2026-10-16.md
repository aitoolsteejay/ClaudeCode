# Weekly SEO checklist run, Friday 2026-10-16

Checklist tasks W1 to W15 (`docs/seo-checklist.md`, weekly list, plus the two attribution tasks W14 and W15). Nothing was deployed, posted, submitted or changed in Search Console, Zoho or any other production system. Findings that needed a code change are committed on the local branch for review.

**Timing note.** The list is built to run on a Monday against the last full Monday-to-Sunday week. This run was a Friday, in the middle of week 3 (12 to 18 Oct), and Search Console data lags 2 to 3 days (the last complete day was Wed 14 Oct). So the scorecard below restates week 2 (5 to 11 Oct) with today's data, shows the latest complete 7 days (8 to 14 Oct), and shows week 3 so far (12 to 14 Oct). Run the scorecard again on Mon 19 or Tue 20 Oct for the real week 3 (12 to 18 Oct).

## Result at a glance

| Task | Result | One line |
|---|---|---|
| W1 Site health crawl | PASS | Site Health 100% (243 of 243), Schema coverage 86.8% (211 of 243), up from 78.9% |
| W2 Sitemap and robots live | PASS | 243 URLs live and 243 in `app/sitemap.ts`; robots.txt has the Sitemap line |
| W3 Manual actions and security | NOT CHECKED, URGENT | Needs a logged-in Search Console page; do it before anything else because of W4 |
| W4 Wrong-canonical tripwire | FAIL, URGENT | 19 pages have a Google-selected canonical on another domain (17 on `747live.bet`, 2 on `winzir.ph`), up from 12 on 7 Oct; `/services` is one of them |
| W5 Indexing errors | FAIL (explained) | Not-indexed total rose from 29 to 102 because 105 new URLs await a first crawl; no 5xx, soft 404, robots or redirect errors; 9 old noindex rows need a recrawl |
| W6 Core Web Vitals | NOT CHECKED | Not available through any tool here, see "What needs you" |
| W7 Search performance snapshot | PASS | Clicks 60 vs 59, impressions 2,189 vs 1,859, position 10.2 vs 12.5; no page lost more than 50% of 20+ clicks |
| W8 KPI scorecard | PARTIAL | 9 of 11 rows filled; AI citation rate needs you; week 3 is not over |
| W9 Newsletter issue sent | NOT CHECKED | The newsletter runs in Zoho Campaigns, which no tool here can read |
| W10 Distribute what shipped | DRAFTS READY | Six post drafts plus a ten-week case study series; nothing posted |
| W11 Content backlog depth | PASS | 5 ready briefs: 3 refreshes of pages that already rank, 2 new pages (`docs/content-briefs-2026-10-16.md`) |
| W12 Events page accuracy | FAIL, FIXED | Ended webinar was listed as live; fixed in commit `6f504a1`, not pushed |
| W13 Careers accuracy | PASS | 7 roles open and listed, all `validThrough` 104+ days out, both closed roles redirect (308) |
| W14 Organic lead attribution | FAIL | No lead carries source data beyond "Website"; fields exist in Zoho but are empty |
| W15 Lead-form and booking reliability | PASS WITH GAPS | Forms and Calendly links consistent and reachable; no conversion events; one booking path untracked |

## W1 · Site health crawl: PASS

`python3 scripts/seo-crawl.py` against the live site: Site Health **100.0% (243/243)**, Schema **86.8% (211/243)**. Last week's figures: 100% and 78.9% (116/147). The checklist baseline (7 Oct) was 100% and 84.4%.

- The script lived only on the local `seo-checklist` branch, so `python3 scripts/seo-crawl.py` from this repo did not work. It is now in `scripts/seo-crawl.py` (commit `6f504a1`).
- The first run exited 1 because of one false FAIL: it compared the literal dynamic route `/case-studies/[filter]` against the sitemap. The ten concrete filter URLs are all in the sitemap. The script now skips route templates. Exit code is 0.
- 32 pages have no page-specific JSON-LD (warning only): `/careers`, `/events`, `/editorial-policy`, `/case-studies` and its ten filter pages, `/resources` hubs, `/privacy-policy`, `/newsletter-subscribe`, `/1-on-1-consultation`, `/seo`, `/sitemap`, `/marketing-automation`, and six guides. The ten case study filter pages and the three hubs are the easiest wins (CollectionPage or ItemList schema).
- 13 blog posts are under 800 words and 50 glossary entries are under 300 words (warnings, already tracked in the checklist baseline).

## W2 · Sitemap and robots live: PASS

`sitemap.xml` and `robots.txt` both return 200. Live URL count 243, entries in `app/sitemap.ts` 243. robots.txt contains `Sitemap: https://www.myntmore.com/sitemap.xml`.

One thing to know: Search Console still lists **two** submitted sitemaps (`https://myntmore.com/sitemap.xml` and `https://www.myntmore.com/sitemap.xml`), both valid with 243 URLs. The checklist baseline target is one (www only). I did not delete the bare-domain one, because that is a Search Console change.

## W3 · Manual actions and security issues: NOT CHECKED, do this first

Search Console's Manual actions and Security issues pages are not exposed by the API, no Chrome session is connected to this account, and I will not sign in for you. Open both and read the result:
- https://search.google.com/search-console/manual-actions?resource_id=sc-domain%3Amyntmore.com
- https://search.google.com/search-console/security-issues?resource_id=sc-domain%3Amyntmore.com

Pass is "No issues" on both. Given W4, treat this as urgent, not a Monday chore.

## W4 · Wrong-canonical tripwire: FAIL, urgent

The tripwire fired and the problem is bigger than the 7 Oct baseline (12 pages, 8 of them confirmed on another domain). Every one of the 243 sitemap URLs was inspected; 232 got the full per-URL check (canonicals, fetch state, robots), including every non-indexed URL, `/`, `/services` and the eight city pages. I re-ran `/services` and `/careers/gtm-strategist` myself and got the same result.

**19 pages are "Duplicate without user-selected canonical" with Google's chosen canonical on a different domain, and Google recorded no user-declared canonical on any of them:**
- **17 point to `https://www.747live.bet/`**: `/services`, `/services/gtm-strategy`, `/careers/{gtm-strategist, content-marketing-strategist-intern, systems-ai-automation-intern}`, `/blog/{ecommerce-conversion-playbook, linkedin-profile-inbound-lead-machine, agency-vs-in-house, personal-branding-agency-vs-content-freelancer}`, and eight case studies (`founder-personal-brand-linkedin`, `b2b-founder-tech-decision-makers`, `agencies-it-branding-agency-meetings`, `financial-services-wealth-management-discovery`, `financial-services-corporate-finance-meetings`, `insurance-insurtech-product-demos`, `insurance-health-advisory-consultations`, `manufacturers-exporters-engineering-goods-replies`).
- **2 point to `https://winzir.ph/`**: `/resources/glossary/founder-led-sales` and `/resources/glossary/existing-connection-nurturing`.
- **`/services`, the main service hub, has Google's canonical set to `https://www.747live.bet/`.** Its last crawl was 2026-07-27, so Google has not looked at it for almost three months.
- `/` is fine: Google's canonical is its own URL, crawled 2026-10-15 (only a trailing-slash difference).

What I could and could not establish:
- Both foreign domains are real betting sites. Neither mentions Myntmore anywhere on its homepage, so they are not copies of our content.
- Our live HTML is correct. Fetched as Googlebot-smartphone, all 19 return 200, `index, follow` and a self-referencing canonical. The `canonical` tag on `/services` has been in the code since 2026-05-29 and on the careers pages since July, so "no user-declared canonical" in Google's record is not explained by our source.
- Nothing in the repo mentions either domain, there is no middleware, and no `vercel.json`. `next.config.js` only rewrites the DM angle generator to an external app. The Vercel project has no firewall configuration at all (the API says none exists), so nothing is challenging or blocking Googlebot at the firewall level. Vercel's runtime logs cover functions only, not static page requests, so Googlebot's status codes cannot be read there.
- **Root cause not found.** Eight of the 19 were crawled on 2026-10-15 and still show no declared canonical, so this is not just stale data. The checklist's next step needs Search Console itself: for `/services` and two of the others, run **Test Live URL**, open **View tested page**, compare the HTML and screenshot with what a browser shows, then **Request Indexing**. If the tested page shows a different page or no canonical, that is the answer; if it looks right, the fix is to let Google recrawl.
- Smaller mismatches, all from August crawls and probably pre-www canonicals: 9 indexed pages declare an apex (`https://myntmore.com/...`) canonical where Google chose the www URL (`/resources/tools`, three `/tools/*` pages, four blog posts, `/careers/hr-operations-intern`).
- Not individually checked (indexed per the batch pass): `/lp/{insurance, financial-services, fundraising, agency-partners}`, `/marketing-automation`, `/seo`, `/1-on-1-consultation`, `/resources/guides/ai-tech-stack-jewellery`, `/editorial-policy`, `/privacy-policy`, `/sitemap`.

## W5 · Indexing errors: FAIL on the literal rule, explained

Coverage across all 243 URLs (the later per-URL pass, which supersedes the batch pass where they differ): **141 indexed (58.0%)**, 19 duplicates (W4), 67 "Discovered - currently not indexed", 9 "Excluded by noindex tag", 7 "URL is unknown to Google". The batch pass alone said 140 indexed; the figure moved by one while the agent was working.

- The pass rule is "no new error rows and total Not indexed no higher than last week". Not indexed went from 29 (of 147) to 102 (of 243). 105 of the 243 URLs were not in the 12 Oct set, and about 75 URLs have never been crawled: mostly case studies (29 in the "Discovered" bucket, spread across the new library and some of the 20 older pages), glossary entries, guides, the new `/careers/sales-and-growth-intern` page and a few blog posts. This is a lag after publishing 70 case studies and a dozen other pages in three days, not a new fault.
- Like for like, the 138 URLs that were in the 147-URL set are 111 indexed (80.4%), against 118 of 147 (80.3%) on 12 Oct. Indexing of the old set is flat; 30 of the 105 new URLs are already indexed.
- **No new error types.** None of the URLs that got the per-URL check shows a 5xx, soft 404, robots block or redirect error; page fetch is successful and robots allowed. The 9 noindex rows are the nine older case studies that were `noindex` when Google crawled them on 10 and 11 Oct. They are `index, follow` now and need a recrawl. The 11 URLs not individually inspected are excluded from this statement.
- 51 URLs have not been crawled for more than 30 days (46 indexed, 5 duplicates). The oldest is `/1-on-1-consultation` (5 Jul), then `/services` (27 Jul).
- To speed things up, in Search Console use Request Indexing on `/services`, the nine ex-noindex case studies, `/careers/sales-and-growth-intern`, and a handful of the new case studies. The API cannot do it.
- Also: Search Console still has two submitted sitemaps (bare and www). Deleting the bare one is a one-click change for you.

## W6 · Core Web Vitals: NOT CHECKED

Search Console's Core Web Vitals report is not in the API, and Google's PageSpeed Insights API refused the request (the free daily quota for keyless callers was exhausted). Open https://search.google.com/search-console/core-web-vitals?resource_id=sc-domain%3Amyntmore.com, mobile report. Pass is 0 URLs in Poor.

## W7 · Search performance snapshot: PASS

Latest complete 7 days (Thu 8 to Wed 14 Oct) against the 7 before (Thu 1 to Wed 7 Oct):

| | 8 to 14 Oct | 1 to 7 Oct | Change |
|---|---|---|---|
| Clicks | 60 | 59 | +1.7% |
| Impressions | 2,189 | 1,859 | +17.8% |
| CTR | 2.74% | 3.17% | -0.43 pt |
| Average position | 10.2 | 12.5 | 2.3 better |

Pass rule: no page that had 20 or more clicks the earlier week lost more than 50% of them. Only the homepage had 20 or more (28 then 38 clicks, up 36%). Smaller moves worth a glance: `/b2b-lead-generation-pune` 6 to 1 click and `/b2b-lead-generation-delhi` 3 to 0 (both with flat impressions, positions 16.6 and 14.2); `/b2b-lead-generation-chennai` 1 to 6. The bare-domain homepage `https://myntmore.com/` still gets about 640 impressions a week in Search Console (4 clicks), a leftover from the www/bare-domain split.

## W8 · KPI scorecard (definitions from the appendix of `docs/seo-checklist.md`, unchanged)

| # | Row | Wk 2 restated (5 to 11 Oct) | Latest 7 days (8 to 14 Oct) | Wk 3 so far (12 to 14 Oct) |
|---|---|---|---|---|
| 1 | Organic leads (Zoho, Lead Source "Website") | 2 | n/a | 0 (12 to 16 Oct) |
| 2 | Non-brand clicks | 6 | 3 | 2 |
| 3 | Non-brand impressions | 1,260 | 1,353 | 690 |
| 4 | Non-brand queries ranking in top 10 | 151 (strictly under 10; 154 including exactly 10.0; 89 have 2+ impressions) | 153 (158; 87) | 100 (102; 60) |
| 5 | City pages on page 1 (of 8) | 2 (Chennai 6.9, Ahmedabad 8.4) | 2 (Chennai 7.7, Ahmedabad 8.4) | 2 (Chennai 7.8, Ahmedabad 6.6) |
| 6 | Submitted pages (sitemap URLs) | n/a | 243 | |
| 7 | Indexed pages | 118 of 147 (80.3%) as logged on 12 Oct | 141 of 243 (58.0%); like for like on the 138 URLs that were in the 147-URL set: 111 of 138 (80.4%) | |
| 8 | Site health | | 100% (243/243), 16 Oct | |
| 9 | Schema coverage | | 86.8% (211/243), 16 Oct | |
| 10 | AI referral visitors (chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com) | 0 | 0 | 0 (checked 5 to 16 Oct) |
| 11 | AI citation rate | not measured | not measured | not measured |

Notes on the numbers:
- Week 2 as logged on 12 Oct was: leads 2, non-brand clicks 6, impressions 1,215, top-10 queries 151, city pages 2 of 8. Restated with today's data: clicks 6, impressions 1,260. The 151 matches when counted strictly under 10; the earlier count therefore used "better than 10", so that is the comparable figure.
- Non-brand clicks are tiny (2 to 6 a week): the figures move by a single click. The signal is in impressions and top-10 count, which are steady.
- The brand filter lets a few brand-like queries through (`www.mynt`, `krish jhaveri`, `genxlead`, `lensmor`). They are left in because the definition is fixed. A handful of queries carry most non-brand impressions, e.g. `gtm` (position 4.3) and `cold reply meaning` (position 8.8).
- AI referrals: the only AI-or-search-engine host that referred anyone in 5 to 16 Oct was bing.com (4 visitors), which is not on the definition's list. Vercel counts visitors, not sessions, and AI traffic that strips its referrer hides in "direct".
- AI citation rate: ChatGPT shows a bot check to automated browsers, so it was not worked around. The 10 prompts are in the appendix of `docs/seo-checklist.md`; run them in a private window and tell me which ones name Myntmore.
- Organic leads: Zoho shows 2 "Website" leads (6 and 8 Oct), none since. Other sources created in the same period: Lead Magnet 2 (12 Oct), WhatsApp 2, plus a bulk "ASCENT" import (about 50 records on 10 and 12 Oct) that should not be counted.

## W9 · Newsletter issue sent: NOT CHECKED

The subscribe form posts to Zoho Campaigns (`maillist-manage.com`). No tool in this session can read Zoho Campaigns, so I cannot tell whether an issue went out this week, whether it carried a UTM-tagged link, or its open rate. Paste the campaign report (or tell me the sends and open rate) and I will mark it. The site promises "one practical B2B growth playbook every week", so two missed weeks in a row means either resuming or changing that wording.

## W10 · Distribute what shipped: drafts ready, nothing posted

`docs/linkedin-distribution-drafts-2026-10-16.md` has six post drafts (58-meetings guide, three comparison posts, the case study library, the Sales and Growth Intern opening) and a ten-week spotlight series with one case study per industry. Every link carries `utm_source=linkedin&utm_medium=social&utm_campaign=<slug>`. Every figure in the copy comes from the page it links to. I do not have your LinkedIn post log, so I cannot mark the "100% logged" pass rule; it is not realistic for 70 case study pages in one week, which is why the library gets a series.

## W11 · Content backlog depth: PASS (5 ready briefs, 3 of them refreshes)

`docs/content-briefs-2026-10-16.md` holds five briefs that meet the checklist's definition of ready (working title, primary keyword that passes a collision check, intent, three internal links that exist in the sitemap, a source for every statistic). They are built from the Search Console "almost ranking" queries and the gap list:

1. **Refresh** `/blog/handling-cold-email-replies` for "cold reply meaning" (188 impressions, position 8.8, 0 clicks).
2. **Refresh** `/resources/glossary/inbound-vs-outbound` into a long-form page for "inbound vs outbound" (position 11.0).
3. **Refresh** `/blog/what-is-b2b-outbound-sales` with a strategy section ("b2b outbound sales strategy", position 22.6).
4. **New page**: Gmail and Yahoo sender requirements for cold email (no Search Console signal yet; the thresholds come from Google's and Yahoo's help pages, opened and cited in the brief).
5. **New page**: what LinkedIn actually says about connection request limits. Ready on the five criteria, but it needs your decision before anyone drafts it: LinkedIn prohibits third-party automation, while several Myntmore pages market "LinkedIn automation".

Honest limits: Search Console is thin (496 non-brand query rows, 167 at position 8 to 30, 95 of those with only 1 or 2 impressions, and the tool hides anonymised queries), so only two of the five have real query demand behind them. There is not enough clean ground for four or more new pages right now. `docs/keyword-map.md` is stale (it lacks the outbound-sales and sequence-template posts and all 50 glossary pages), so the collision checks used the live source.

**Claims on live pages that the briefing flagged (not edited, your call):**
- `/blog/handling-cold-email-replies` says a Harvard Business Review study found a response within an hour made leads "nearly 7x" more likely to qualify. The HBR page and the BYU abstract that could be opened show only the abstract, about web inquiries, not cold email replies. Unconfirmed as worded.
- `/blog/linkedin-outreach-sequences` says LinkedIn caps connection requests at "around 100 per week for standard accounts and 150-200 for Sales Navigator". LinkedIn's own help page states no weekly number. No source is given on the page.
- `/blog/what-is-b2b-outbound-sales` shows "8 touches (RAIN Group)" and "49% (LinkedIn Research)". RAIN Group keeps the touches figure behind a form, so it could not be confirmed; the 49% was not checked.
- `/services/cold-email` shows a "0.2% spam rate, well below industry threshold" stat with no source. It needs real Google Postmaster data, especially next to Brief 4's thresholds.

## W12 · Events page accuracy: FAIL, fixed locally

`/events` listed the Sep 19 webinar (ended) in the main grid with a date and a "Details" link, as if it were upcoming. The page had no upcoming/past logic, only the empty-state fallback that never triggered. Fix in `app/events/page.tsx` (commit `6f504a1`): the main grid shows only events that have not ended, with the existing "No events scheduled right now" state otherwise; ended events appear under "Past events and recordings" with a "Recording" label and "Watch the recording" link; the page revalidates hourly so an event leaves the upcoming list after it ends. The event page itself was already a noindexed recording page, so its schema is not an issue. Checked in the dev server: one past card, empty state shown, no console errors.

## W13 · Careers accuracy: PASS

Seven roles are listed on `/careers` and each has a live page returning 200 with JobPosting schema; `validThrough` ranges from 2027-01-28 to 2027-04-15 (104 to 180 days). `npm run audit:jobs` passes: every Apply button reaches both founder@ and growth@. Both retired roles (`/careers/senior-sales-head`, `/careers/content-strategist`) return 308 to `/careers`. Caveat: the checklist asks to compare against the roles actually open, and I have no approved list, so this assumes all seven listed roles are open.

## W14 · Organic lead attribution and CRM reconciliation: FAIL

What I could check: Zoho CRM (read only), the form code, and Vercel Analytics. Google Analytics 4 is not connected to any tool here (the Supermetrics connector's Google Analytics source is not authenticated), so organic sessions and key events from GA4 were not compared.

1. **No source data reaches Zoho.** All site forms post straight to one Zoho Form (`MyntmoreWebsiteform`) with five visible fields and three hidden ones that are always empty strings (`zf_referrer_name`, `zc_gad`, and the redirect URL). There is no landing page, UTM, referrer or click ID in the payload.
2. **The CRM has the fields, they are just empty.** Zoho's Lead module already has `First_Visited_URL`, `Referrer`, `First_Visited_Time`, `Lead_Source_Type` and `Description`. All of them are null on both Website leads from 6 and 8 Oct. Every site form lead is stamped `Lead_Source = Website`, so organic search, Instagram, direct and the careers pages cannot be told apart. Treat the "Organic leads" row as an upper bound.
3. **Bookings are not visible in the CRM.** Vercel shows 14 visitors reaching `/thankyou` (the Calendly booking confirmation) between 5 and 16 Oct, but none of the 200 newest Zoho leads has a Calendly source. They may be stored elsewhere in Zoho (meetings or contacts), which a lead listing cannot show. Check the Calendly to Zoho integration.
4. **Counts that do not reconcile:** two Website leads (6 and 8 Oct) but zero Vercel pageviews on `/thank-you`, where the form redirects. Vercel Analytics undercounts (ad blockers), so this is a limit of the evidence rather than proof of a break, but it means the form-to-thank-you step cannot be audited from analytics.

Proposed fix, not implemented because it changes what production forms send and cannot be tested without creating a real lead: on first page view, store the landing page, referrer and UTM values (first touch, first-party storage) and write them into the hidden `zf_referrer_name` field on submit, then map that value to `Referrer` or `Description` in the Zoho Forms to CRM field mapping. The mapping step is in Zoho and needs you. Say the word and I will build the front-end half and prepare a test plan with a labelled test record you approve and delete.

## W15 · Lead-form and booking reliability: PASS WITH GAPS

Checked without submitting anything:
- All 11 form instances (the shared lead form, the nine industry and partner landing pages, and `/contact-us`) post to the same Zoho form with identical field names, the same required fields (name, designation, email) and the same redirect to `/thank-you`. Both thank-you pages return 200 and are `noindex`.
- Both Calendly links (`founder-myntmore/web` and `sanyam-myntmore/30min`) return 200. `/founder-meeting` listens for the Calendly `event_scheduled` message and sends the visitor to `/thankyou`.
- Gaps: (a) no conversion event is fired anywhere in code (no GA4 `generate_lead`, no Meta Pixel `Lead`), so form submits and bookings are only visible as thank-you pageviews, if a GA4 key event was set up on those URLs by hand; (b) on `/services/do-it-yourself` the Book a Call buttons open the second Calendly link in a new tab, so those bookings never reach `/thankyou` and are not counted on the site; (c) the public page of the main Zoho form returns Zoho's "Page not found" (6 of the 11 Zoho forms the site uses do this, 5 return 200). The site posts to the HTML submit endpoint, not the public page, and leads from forms with this same 404 arrived on 12 Oct (lead magnet), so this looks like a disabled public link, not a dead form. I cannot prove that without a live submission.
- Not done: a live test submission. With your approval, one clearly labelled test lead through the main form (and its deletion afterwards) would settle (c) and the thank-you redirect.

## What needs you (in order)

1. **W3, today.** Open the Manual actions and Security issues pages above and tell me what they say.
2. **W4, today.** Test Live URL on `/services` (View tested page: HTML and screenshot), then Request Indexing for `/services` and a couple of the other 18. Tell me what the tested HTML shows. If it shows anything other than our page, this becomes a security incident (check site access and DNS), not an SEO task.
3. **W5.** Request Indexing for `/careers/sales-and-growth-intern`, the nine ex-noindex case studies and a few new case studies. Delete the bare-domain sitemap if you agree.
4. **W6.** Read the mobile Core Web Vitals report.
5. **W8.** Run the 10 AI-citation prompts in a private ChatGPT window and tell me which name Myntmore.
6. **W9.** Send the newsletter campaign report (or say whether an issue went out this week).
7. **Decisions:** whether to push the `/events` fix (commit `6f504a1`) and this report; whether to build the attribution capture for W14; Brief 5's "LinkedIn automation" wording question; and whether to correct the four unsourced claims listed under W11.
8. **Monday 19 or Tuesday 20 Oct:** re-run the scorecard for the real week 3 (12 to 18 Oct). I can do it from the definitions in `docs/seo-checklist.md`.
