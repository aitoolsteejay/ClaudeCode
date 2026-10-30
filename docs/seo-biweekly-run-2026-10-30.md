# Bi-weekly SEO run, 2026-10-30 (checklist B1 to B11)

Data: Search Console `sc-domain:myntmore.com`, URL Inspection on all 265 sitemap URLs (run 2026-10-30), `/site-audit` data regenerated the same day. Nothing here was pushed. Search Console figures end 2026-10-28 (2 to 3 day lag).

## B1 · Indexing follow-up: FAIL (158 of 265 indexed, 59.6%)

Week 4 was 153 of 261 (58.6%).

| Coverage state | URLs |
|---|---|
| Submitted and indexed | 158 |
| Discovered, currently not indexed | 59 |
| URL is unknown to Google | 24 |
| Duplicate without user-selected canonical | 14 |
| Excluded by noindex | 9 |
| Duplicate, Google chose different canonical | 1 |

Where the 107 non-indexed URLs sit: case studies 57 (33 discovered, 7 unknown, 8 duplicate, 9 noindex), resources 42 (22 discovered, 17 unknown, 3 duplicate), careers 4, services 2, tools 2 (discovered, not indexed).

- The 24 "unknown to Google" are mostly the `/resources/blogs/...` URLs created by the 2026-10-28 move. Google has not crawled them yet, so this is expected. Re-check after 2026-11-06.
- **Foreign canonicals, 14 URLs (was 19 on 2026-10-16):** 10 point to `747live.bet` (`/services`, 7 case studies, 2 careers pages), 2 to `marcustheatres.com` (`/services/gtm-strategy`, one case study), 2 to `winzir.ph` (two glossary terms). Search Console reports no user-declared canonical for 13 of the 14, and the cause is still unknown. The agent's own summary said 9 and then 10 for 747live.bet; the recount from the TSV is 10.
- Action for you: Search Console, Test Live URL then Request Indexing for the 14 (an earlier list is in `docs/gsc-request-indexing-foreign-canonical.md`; it may be out of date). I cannot do this from here.
- Per the checklist: anything still not indexed at 28 days gets a content-improvement ticket. The 33 case-study pages in "Discovered" are the largest group.

## B2 · Internal links for new pages: FIXED for 4 of 6, 2 need a decision

Pages published since 2026-10-16 that were below 3 inbound or 2 outbound contextual links, and what changed (local commit `3d934c6`):

| Page | Before (in / out) | After | Change |
|---|---|---|---|
| `/resources/blogs/outbound-offer-problem` | 1 / 2 | 4 / 2 | "Keep reading" link from `value-premium-lead-magnets`, `stop-selling-features-cold-outreach`, `pitching-trap-competitor-positioning` |
| `/resources/blogs/ai-personalization-cold-outreach` | 2 / 3 | 4 / 3 | from `cold-email-sequence-templates`, `relevance-beats-reach-b2b-outbound` |
| `/resources/guides/how-to-choose-b2b-lead-generation-agency-india` | 2 / 5 | 5 / 5 | from `agency-vs-in-house`, `linkedin-outreach-agency-vs-manual-prospecting`, `what-is-b2b-outbound-sales` |
| `/resources/guides/outbound-meme-prompt-kit` | 1 / 4 | 4 / 4 | from `how-to-write-a-linkedin-hook`, `3-second-rule-cold-outreach`, `linkedin-profile-inbound-lead-machine` |
| `/case-studies/specialist-recruitment-linkedin-leads` | 1 / 2 | link added, audit still shows 1 | `/lp/recruitment-firms` now links to it, but the audit scanner does not read landing-page JSON |
| `/tools/linkedin-hook-grader` | 13 / 1 | unchanged | The tool page already links to the hook post from its client component; the scanner undercounts it |

Not fixed, for you to decide: five long-form case studies (`heritage-jewellery-valuation-pipeline`, `leadership-development-messaging-shift`, `medical-tourism-platform-pipeline`, `retail-strategy-design-pipeline`, `wealth-management-pms-pipeline`) each have only the `/case-studies` index linking in. Suggested sources are the closest industry landing page and city page for each. Their "first added" date in git may reflect a file move, so they may not be new.

## B3 · Orphan check: PASS on indexing, FAIL against the literal allow-list

32 orphans. 8 are the allow-list. The other 24 are all `noindex` or private/admin, so none can hurt indexing:

- 14 `/calendar/*` booking pages, `/agency-vs-in-house`, `/founder-meeting`, `/research/kmspharma`, `/research/myntmore`, `/keystatic/[[...params]]` (admin) and 5 hidden private routes with no path.

Recommendation: add the `/calendar/*` pages, the two `/research/*` pages and `/founder-meeting` to the allow-list rather than linking them. `/agency-vs-in-house` is noindex and orphaned, but a blog post of the same name exists; confirm it is meant to stay hidden.

## B4 · Striking-distance queries: 3 pages changed (local, not deployed)

Filter: 14 days to 2026-10-28, positions 8 to 20, 20+ impressions, non-brand. Only 8 rows qualified.

| Rank by impressions | Page | Evidence | Change |
|---|---|---|---|
| 1 | `/resources/blogs/handling-cold-email-replies` | "cold reply meaning" 438 impressions, 0 clicks, position 9.2 | **Already changed 2026-10-26** (new title, "What Does 'Cold Reply' Mean?" H2). Too recent to judge. Re-measure 2026-11-23. |
| 2 | `/b2b-lead-generation-pune` | "lead generation companies in pune" 45 impr, position 15.1; "b2b lead generation companies in pune" 34, position 16.2 | Title to "B2B Lead Generation Companies in Pune" (plural matches both queries) |
| 3 | `/b2b-lead-generation-delhi` | "lead generation agency" 49 impr, position 9.3; "lead generation company in delhi" 11 | Title to "B2B Lead Generation Agency in Delhi NCR" |
| 4 (replacement for #1) | `/b2b-lead-generation-hyderabad` | "lead generation company in hyderabad" 36 impr, position 11.8; "lead generation services in hyderabad" 18, position 15.1 | Title to "Lead Generation Company & Services in Hyderabad" |

Re-measure all three on 2026-11-27 (28 days after deploy, once it ships).

## B5 · Low-CTR pages: 4 rewritten, 6 deliberately not

Filter: 28 days to 2026-10-28, 100+ impressions, CTR under 1%. Ten pages matched.

Rewritten (title and description; local):

| Page | Evidence | New title (with " \| Myntmore", chars) |
|---|---|---|
| `/who-this-is-for` | 231 impr, 0 clicks, position 3.4 | "Who Is Myntmore For? Who We Work With (and Don't)" (60) |
| `/myntmore-framework` | 173 impr, 0 clicks, position 4.7 | "Myntmore Framework: How Our Outbound Works" (53) |
| `/resources/guides/how-to-set-up-vibe-prospecting` | 165 impr, 0 clicks, position 7.2 | "Vibe Prospecting on Claude: 7-Step Setup Guide" (57) |
| (description only) same guide | | "Connect Vibe Prospecting to Claude in 7 steps, then copy 10 prompts that pull verified B2B leads. Read the setup guide." |

I also removed "account-safe sending" from the framework page's search description, because the LinkedIn brief says that claim needs an owner decision (LinkedIn prohibits third-party automation).

Not rewritten, with reasons (a deviation from the literal pass criterion):
- `/blog/handling-cold-email-replies` (1,085 impr) and `/blog/what-is-b2b-outbound-sales` (154): both were retitled on 2026-10-26, so the window mostly measures the old titles.
- `/b2b-lead-generation-bengaluru` (536 impr, position 44.2), `/b2b-lead-generation-kolkata` (451, position 22.5) and `/resources/glossary/inbound-vs-outbound` (251, position 33.5): CTR below 1% is normal at those positions. A new title will not fix it; ranking will. Bengaluru's title was shortened separately in `94ee068`.
- `/resources/glossary/total-conversional-market` (100 impr, position 5.8): Myntmore's own coined term, with a description already written for the snippet. Low click intent.
- `https://myntmore.com/` (apex, 2,183 impr, 15 clicks): a second host reported separately from `www`. Not a title problem. Worth confirming the apex 301s to `www`, which I have not tested this run.

## B6 · Blog post: DRAFT READY, not published

`content/posts/gmail-and-yahoo-sender-requirements.mdoc`, `published: false` (drafts are never rendered, listed or put in the sitemap). From brief 4.

- 848 words of body copy plus a comparison table, 6 H2s, 3 FAQs (answers 48 to 52 words, each opening with a direct answer), keyword in the title, H1, slug and first 100 words, search title 56 characters with suffix, description 149.
- Links out: deliverability guide, compliance guide, SPF/DKIM/DMARC, sender reputation, domain warmup, spam complaint rate, `/services/cold-email`; plus CTA block.
- Collision check: primary "gmail and yahoo sender requirements" is unique across 201 pages (see B9).
- Sources, read 2026-10-30: Google's email sender guidelines (support.google.com/a/answer/81126) and Yahoo's sender best practices (senders.yahooinc.com/best-practices/). **I read these through a summarising fetch tool, so a person should open both pages and confirm each figure and quote before publishing.**
- Corrections to the brief, made in the draft: Yahoo's page gives no bulk-volume threshold; no source for "bulk status is permanent", so it is omitted; the brief's "cold teams reach 5,000 sooner than expected" claim is replaced with the honest version (most cold programmes sit well under it, the spam-rate rule is the one that bites).
- To publish: set `published` to true in the CMS, then add inbound links from `cold-email-deliverability-guide`, `cold-email-compliance-guide` and the `furtherHref` slots of `spf-dkim-dmarc`, `sender-reputation` and `domain-warmup` (not added yet, because they would 404 while the post is a draft).
- Brief 5 (LinkedIn connection request limits) stays blocked on your decision about how Myntmore describes automation.

## B7 · Glossary term: DRAFT READY (goes live on push)

`content/glossary/spam-complaint-rate.json`, 404 words of page copy (24-word definition, paragraph with an illustrative worked example, 3 FAQs), generated page and sitemap entry created, links to Sender Reputation and the deliverability guide. Primary keyword "spam complaint rate" is unique.

Caveats: the glossary has no draft switch, so this page publishes when the branch is pushed. It has no inbound blog link until the Gmail/Yahoo post is published. No Search Console what-is query supports this term, so it is chosen as a supporting entry for the post, not on demand evidence. The 2026-10-30 `seo-crawl.py` run flags 42 glossary entries under 300 words, so this term is not the only thin-content issue.

## B8 · Repurposed assets: outlines drafted, nothing posted

Rule: every outline uses only what the post itself says. UTM pattern: `?utm_source=linkedin&utm_medium=social&utm_campaign=<slug>`. Log column is empty until posted.

| Post (published) | Carousel outline | Link |
|---|---|---|
| `outbound-offer-problem` (28 Oct) | Hook: "Your outbound isn't failing on copy." 1. Copy is the packaging, not the product. 2. Three signs the offer is the problem. 3. What a strong offer looks like: one promise, one buyer, a low-risk first step, one proof point. 4. Lower the cost of yes. CTA: fix the offer before you rewrite another subject line. | `/resources/blogs/outbound-offer-problem?...campaign=outbound-offer-problem` |
| `how-to-write-a-linkedin-hook` (20 Oct) | Hook: "Your idea is fine. Nobody read past line two." 1. The feed shows only the top. 2. What a hook actually is. 3. Six checks. 4. Before and after. 5. Hooks to retire. CTA: grade your hook free. | `/resources/blogs/how-to-write-a-linkedin-hook?...` and the grader at `/tools/linkedin-hook-grader?...` |
| `ai-personalization-cold-outreach` (17 Oct) | Hook: "AI made personalization cheap. That's the problem." 1. Personalization became a template. 2. The compliment trap. 3. Relevant beats personal. 4. Where AI helps, where it gets you ignored. 5. The human-in-the-loop rule. | `/resources/blogs/ai-personalization-cold-outreach?...` |
| `cold-email-follow-up-sequence` (17 Oct) | Hook: "Most campaigns die after one email." 1. Silence isn't a no. 2. "Just bumping this" is a feature dump in disguise. 3. The follow-up ladder. 4. Know when to stop. | `/resources/blogs/cold-email-follow-up-sequence?...` |
| `positive-reply-to-booked-meeting` (17 Oct) | Hook: "A positive reply is not a booked meeting." 1. Interest has a half-life. 2. Where positive replies leak. 3. The reply-to-meeting playbook. 4. Measure the gap. | `/resources/blogs/positive-reply-to-booked-meeting?...` |

The three older drafts in `docs/linkedin-distribution-drafts-2026-10-16.md` still apply. No post log was supplied, so I cannot show any asset as published.

## B9 · Records: UPDATED

`docs/keyword-map.md` has a new section with the 13 pages from this cycle (12 live plus the draft). Sitewide primary-keyword check: 201 pages, zero duplicates. `docs/content-gaps.md` has a 2026-10-30 status block (brief 4 drafted; briefs 3 and 5 and the infrastructure explainer still open). The keyword map's older tables still list blog URLs as `/blog/...`; I did not rewrite them.

## B10 · Commercial opportunity scoring

Method: ordinal 1 to 5 judgements, not measured values. Score = (intent × evidence × value × confidence) ÷ effort. Evidence is the Search Console or crawl figure shown. There are no conversion data to feed a revenue estimate: organic leads are 0 and no source is captured (see W14), so "value" is a judgement.

| # | Opportunity | Evidence | Intent | Evid. | Value | Conf. | Effort | Score |
|---|---|---|---|---|---|---|---|---|
| 1 | Confirm the Zoho forms work (6 of 10 public form pages 404, including the contact form) | W15 check, 2026-10-30 | 5 | 5 | 5 | 3 | 1 | 375 |
| 2 | Test Live URL and Request Indexing for 14 foreign-canonical URLs, starting with `/services` | 14 URLs, `/services` is the main commercial hub | 5 | 5 | 5 | 3 | 2 | 188 |
| 3 | Publish brief 2, inbound vs outbound (post), and strengthen the glossary entry | "inbound vs outbound" 251 impr at position 33.5 | 3 | 4 | 3 | 3 | 3 | 36 |
| 4 | Publish the Gmail/Yahoo post after fact-check | Draft ready, no demand data | 3 | 1 | 3 | 3 | 1 | 27 |
| 5 | City pages Bengaluru / Kolkata content depth | 536 and 451 impr at positions 44 and 22 | 5 | 4 | 4 | 2 | 4 | 40 |
| 6 | Hidden UTM and referrer fields on forms (W14) | 0 attributable leads | 4 | 3 | 4 | 4 | 2 | 96 |
| 7 | Link the 5 long-form case studies from industry pages | 1 inbound each | 2 | 3 | 2 | 4 | 2 | 24 |

Top three actions: (1) verify the forms, owner you, 15 minutes, expected outcome is no silent lead loss; (2) the 14-URL indexing request, owner you, about 30 minutes; (3) hidden UTM fields, owner me after approval, expected outcome is the first attributable organic leads. Missing evidence: no conversion data, no CWV, no GA4.

## B11 · Change-impact log

Baselines are Search Console 2026-10-01 to 2026-10-28 for the page (old `/blog/` URLs where the page moved). Causality is not claimed from rankings alone. Earlier rows are backfilled from `dateModified` fields and git history; those dates should be checked against the deploy log.

| Date | URL | Change | Baseline | Review | Confounders |
|---|---|---|---|---|---|
| 2026-10-26 | `/resources/blogs/handling-cold-email-replies` | New title and H2 aimed at "cold reply meaning" | 1,085 impr, 1 click, position 8.2 | 2026-11-23 | The URL moved on 10-28, so impressions split across two URLs |
| 2026-10-26 | `/resources/blogs/what-is-b2b-outbound-sales` | New title and description | 154 impr, 0 clicks, position 12.0 | 2026-11-23 | Same URL move |
| 2026-10-28 | All blogs | `/blog/<slug>` moved to `/resources/blogs/<slug>` with 308s | Blog traffic (see week 5 scorecard) | 2026-11-25 | Google still reports old URLs (one post still has the old path as Google's canonical) |
| 2026-10-30 (local) | `/b2b-lead-generation-bengaluru`, how-to-choose guide | Titles shortened to 60 or fewer | Bengaluru: 536 impr, 1 click, position 44.2 | 28 days after deploy | Not deployed yet |
| 2026-10-30 (local) | Pune, Delhi, Hyderabad city pages | Titles aligned to queries | See B4 | 28 days after deploy | Not deployed yet |
| 2026-10-30 (local) | `/who-this-is-for`, `/myntmore-framework`, Vibe guide | Title and description rewrites | See B5 | 28 days after deploy | Not deployed yet |
| 2026-10-30 (local) | 11 posts and the recruitment LP | Contextual links added (B2) | Inbound counts in B2 | 2026-11-27 | Not deployed yet |

## Time

Audit time this run was dominated by the indexing pass (about 60 minutes of agent time for 265 URLs). Fix time: B2 and B4/B5 about 20 minutes of edits; B6 and B7 drafting is the largest block.
