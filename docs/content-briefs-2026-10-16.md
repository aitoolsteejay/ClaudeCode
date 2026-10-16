# Content briefs, 2026-10-16 (checklist item W11, content backlog depth)

Five briefs, built from the Search Console "almost ranking" pull plus the gap list in [`content-gaps.md`](./content-gaps.md). Nothing here has been drafted or published, and no other file was edited.

Two briefs are new pages and three are refreshes of pages that already earn the impressions. Each is labelled NEW PAGE or REFRESH in its first line. Where a close match already exists, the refresh is the recommendation, per the collision rule.

## READY means

A brief is ready only if it has: a working title, a primary keyword that passes the collision check, the search intent, exactly 3 internal link targets that exist in `app/sitemap.ts`, and a source for every statistic. A statistic is allowed only if I opened its source on 2026-10-16 and the URL is in the brief. Otherwise the brief says "no external statistics" and the article uses only the Myntmore proof points in `lib/entity-facts.json` (12K+ meetings booked, $120M+ pipeline generated, 300+ B2B companies served).

## How the data was pulled, and its limits

- Search Console, property `sc-domain:myntmore.com`, 2026-09-17 to 2026-10-14, web search, `get_advanced_search_analytics`, brand queries excluded with five `notContains` filters (myntmore, mintmore, "mint more", "mint and more", "tejas jhaveri"). The `query` pull returned 496 rows and the `query,page` pull 571 rows, both with `has_more: false`. Position is the average over the window.
- 167 of the 496 query rows sit at average position 8 to 30. 95 of those have only 1 or 2 impressions, and only 25 have 10 or more. Of the 25, most are city or agency queries for pages that already exist (excluded as not-new-content). The only informational queries with 10+ impressions are "cold reply meaning" (188), "inbound vs outbound" (25), "inbound outbound" (15) and "b2b outbound" (14). So the almost-ranking pool is thin, and briefs 4 and 5 below have little or no Search Console support. They are marked as such and come from the gap list and coverage gaps instead.
- Search Console samples and anonymises queries. `seo-opportunity-map-2026-10-10.md` records about 40% of impressions missing from the query report for an earlier window. I cannot measure that for this window, so treat all numbers as directional.
- Collision check method: grep of `app`, `lib` and `components` (all `.ts` and `.tsx`) for the primary keyword and its close variants, plus a lookup in `docs/keyword-map.md`. `keyword-map.md` is stale: it lacks `/blog/what-is-b2b-outbound-sales`, `/blog/cold-email-sequence-templates` and all 50 glossary pages, so a keyword-map-only check would miss real collisions. The live source is the authority.
- Every internal link below was checked against the URL list in `app/sitemap.ts` and against `app/<path>/page.tsx`.

## Existing claims I noticed on live pages (not edited, flagged for the owner)

1. `/blog/handling-cold-email-replies` says a Harvard Business Review study found responding within an hour made leads "nearly 7x" more likely to qualify. I opened the HBR page and the BYU ScholarsArchive abstract. Both show only the abstract ("Our research shows that most companies are not responding nearly fast enough.", Oldroyd, McElheran and Elkington, March 2011), which describes "potential customers' online queries", meaning web inquiries, not replies to cold email. I could not confirm the 7x figure. Search results from secondary sources quoted different multipliers. Verify against the full article or reword without the number.
2. `/blog/linkedin-outreach-sequences` says LinkedIn limits connection requests to "around 100 per week for standard accounts and 150-200 for Sales Navigator" and to keep acceptance "above 30%". No source is given. LinkedIn's own Help page on invitation restrictions states no weekly number (see Brief 5). This is the reason Brief 5 exists.
3. `/blog/what-is-b2b-outbound-sales` shows "8 touches (RAIN Group)" and "49% (LinkedIn Research)". RAIN Group's page names the study ("Top Performance in Sales Prospecting", 489 sellers, 488 buyers, $4.2 billion in purchases, 25 industries) but keeps the touches figure behind a download form, so I could not confirm it. I did not check the 49% figure.
4. `/services/cold-email` (`ColdEmailClient.tsx`, around line 319) shows "0.2% Spam rate, well below industry threshold". No source is given. Brief 4 quotes Google's actual thresholds, so this claim needs real Postmaster data before it sits next to them.

---

## Brief 1: What is a cold reply? Meaning, types and how to respond

- **Type: REFRESH of `/blog/handling-cold-email-replies` (recommended). Not a new page.**
- **Working title (title tag test):** "Cold Reply Meaning: What It Is and How to Respond Fast". The current title tag is "How to Respond to Cold Email Replies Fast" and the description says "cold email reply". Neither contains "cold reply". Keep the existing H1 or demote it to a subhead.
- **Primary keyword:** `cold reply meaning`
- **Secondary keywords:** `what is a cold reply`, `cold reply`, `cold replies`, `cold reply examples`, `cold response meaning`
- **Search Console (2026-09-17 to 2026-10-14, brand excluded):**
  - "cold reply meaning": 188 impressions, 0 clicks, position 8.8.
  - "cold reply": 30 / 0 / 5.8. "cold replies": 14 / 0 / 5.9. "what is cold reply": 6 / 0 / 6.3. "what is a cold reply": 2 / 0 / 5.0.
  - "cold reply means": 3 / 0 / 8.0. "meaning of cold reply": 2 / 0 / 11.
  - "cold reply example": 2 / 0 / 28.5, landing on `/blog/cold-email-sequence-templates` instead.
  - Page level (`query,page`): `/blog/handling-cold-email-replies` has 250 impressions, 0 clicks, impression-weighted position 8.2 across 12 queries, 197 of them in the 8 to 30 window.
- **Collision check:** I grepped `app`, `lib` and `components` for "cold reply", "cold replies", "cold response" and "what is a cold reply". The only hit is one prose sentence on `/blog/handling-cold-email-replies` ("A cold reply works the same way."). It is in no `keywords` array and not in `keyword-map.md`. That page's own primary is "how to respond to cold email replies". Nothing else on the site targets these queries, and this page already ranks 5 to 9 for them, so refresh it. A separate glossary entry or post would split a query that already ranks. Only if the query is still unmoved after the next settled window, consider a short glossary entry `/resources/glossary/cold-reply` that links here through `furtherHref`.
- **Search intent:** informational, definitional, with a how-to follow-on. The searcher wants to know what "cold reply" means: a reply to a cold email, or a curt reply. A WebSearch for "cold reply meaning" on 2026-10-16 returned a mix of cold-email reply guides and a dictionary page for "cold", and its summary described the everyday sense as a curt or unfriendly response. I could not open dictionary.com (HTTP 403), so the everyday-sense wording is unverified. It is not a statistic and does not need a source line.
- **First 60 words must state (do not copy as prose):**
  - a cold reply is a response to a cold email, the unsolicited first message to someone with no prior relationship;
  - it can be interested, a brush-off, or a question, and the recipient is not yet a warm contact;
  - one clause acknowledging that "cold reply" also means a curt answer in everyday English;
  - the link to how to answer it.
- **Suggested H2 outline:**
  1. What is a cold reply? (new, directly under the intro)
  2. Cold reply vs warm reply: what changes in how you answer (new, short)
  3. The four replies you'll get and how to answer each (existing)
  4. Speed is the first signal of relevance (existing, fix the HBR claim per the flag above)
  5. Kill the naked calendar link (existing)
  6. Reply handling is a system, not a mood (existing)
  7. FAQ, add "What does cold reply mean?" and "Is a cold reply the same as a warm reply?" (the three existing FAQ items stay)
- **3 internal links to add:**
  1. `/resources/glossary/cold-email`, anchor "cold email" (in the definition).
  2. `/resources/glossary/response-rate`, anchor "response rate".
  3. `/blog/b2b-outbound-benchmark-report-2026`, anchor "reply-rate benchmarks from our 2026 report" (link only, no new numbers).
- **Pages that should link back:** `/resources/glossary/cold-email` and `/resources/glossary/response-rate`. Both currently use only `sourceHref`, so their `furtherLabel` and `furtherHref` slots are free. `/resources/glossary/meeting-booked-rate` already does this and is the pattern to copy.
- **Sources for statistics:** no external statistics; use only Myntmore proof points already in `lib/entity-facts.json`. Sources opened: https://hbr.org/2011/03/the-short-life-of-online-sales-leads and https://scholarsarchive.byu.edu/facpub/9711. Both gave the abstract only, so the "nearly 7x" figure is not confirmed (see flag 1). Do not add or keep it unless the writer reads the full article.
- **Format and length:** blog refresh using the existing `BlogArticle` layout. The page is roughly 700 words today (about 760 counting metadata and FAQ strings). Add 150 to 250 words so it clears the 800+ target. Schema: unchanged. `BlogArticle` already emits Article, FAQPage (the new FAQ items flow in) and BreadcrumbList. Bump `dateModified`.
- **Ready? Yes.**

---

## Brief 2: Inbound vs. outbound: how B2B teams should choose, and when to run both

- **Type: REFRESH of `/resources/glossary/inbound-vs-outbound` into a bespoke long-form glossary page (recommended).** Precedent: `/resources/glossary/total-conversional-market` and `/resources/glossary/3-second-rule` are bespoke pages outside the short-form `GlossaryTerm` template. The fallback is in the collision check below.
- **Working title:** "Inbound vs. Outbound: What's the Difference and Which Should You Start With?"
- **Primary keyword:** `inbound vs outbound`
- **Secondary keywords:** `inbound outbound meaning`, `inbound and outbound`, `outbound vs inbound`, `inbound vs outbound lead generation`
- **Search Console:**
  - "inbound vs outbound": 25 impressions, 0 clicks, position 11.0.
  - "inbound outbound": 15 / 0 / 26.4. "inbound outbound meaning": 7 / 0 / 29.1. "inbound vs. outbound": 3 / 0 / 12.
  - "define inbound and outbound": 2 / 0 / 29.5. "outbound inbound meaning": 2 / 0 / 28.5. "outbound vs inbound": 2 / 0 / 24.
  - Outside the window: "inbound and outbound" 17 / 0 / 39.2 and "inbound and outbound meaning" 9 / 0 / 42.
  - Page level: `/resources/glossary/inbound-vs-outbound` has 105 impressions, 0 clicks across 22 queries. 59 impressions across 10 queries fall in the 8 to 30 window (weighted position 19.1).
- **Collision check:** neither "inbound vs outbound" nor "inbound vs outbound lead generation" is an exact keyword anywhere in `app`. The page that owns the topic is the glossary entry (keywords: "inbound vs outbound marketing", "inbound vs outbound sales", "difference between inbound and outbound", "b2b inbound outbound"). Related: `/blog/what-is-b2b-outbound-sales` and `/resources/glossary/outbound-sales` both list "outbound vs inbound sales", and `/resources/glossary/abm` lists "abm vs outbound". The glossary entry already ranks 11 for the head query. Adding a blog post would put a third page on one intent, so update the glossary page in place. Fallback only if the owner wants a blog-index entry: a new `/blog/inbound-vs-outbound-lead-generation` with that primary keyword, a comparison table via the `comparison` prop, and a `furtherHref` from the glossary entry. I do not recommend it now.
- **Search intent:** informational, comparison with a decision. The searcher wants the difference, then which to start with. The current page is a 30-word definition and one paragraph, so it answers the first and not the second.
- **First 60 words must state (do not copy as prose):**
  - inbound attracts prospects who come to you, outbound reaches prospects who haven't found you;
  - the decision rule: start with outbound when you can name your buyers and need pipeline on a schedule, start with inbound when the market is broad and you can wait for it to compound;
  - most B2B teams end up running both.
- **Suggested H2 outline:**
  1. Inbound vs. outbound in one line each (keep the existing definition as the direct answer)
  2. Side by side: who starts the conversation, speed to first conversation, control over who you reach, how each scales, what each needs from you (qualitative table, no numbers)
  3. When outbound should come first
  4. When inbound should come first
  5. Why most B2B teams run both, and how they feed each other
  6. How to sequence them without splitting focus
  7. FAQ ("Is outbound or inbound better for B2B?", "Can a startup rely on inbound alone?")
- **3 internal links:**
  1. `/blog/what-is-b2b-outbound-sales`, anchor "what B2B outbound sales is and how it works".
  2. `/blog/cold-email-vs-linkedin-outreach`, anchor "cold email vs LinkedIn outreach".
  3. `/blog/agency-vs-in-house`, anchor "agency vs in-house SDR".
- **Pages that should link back:** `/resources/glossary/b2b-lead-generation`, `/blog/cold-email-vs-linkedin-outreach` and `/blog/agency-vs-in-house`. The glossary hub, `/resources/glossary/outbound-sales` and `/blog/what-is-b2b-outbound-sales` already link to this URL.
- **Sources for statistics:** no external statistics; use only Myntmore proof points already in `lib/entity-facts.json`.
- **Format and length:** long-form glossary page, 900 to 1,200 words, hand-built like `total-conversional-market`. Schema: keep DefinedTerm (`buildDefinedTermSchema`), keep BreadcrumbList (from the `Breadcrumbs` component), add FAQPage (`buildFaqSchema`, as `what-is-b2b-outbound-sales` does). Keep the short definition for the glossary hub list.
- **Ready? Yes.**

---

## Brief 3: B2B outbound sales strategy: the five decisions (new section on the outbound guide)

- **Type: REFRESH of `/blog/what-is-b2b-outbound-sales` (recommended). Not a new page.**
- **Working title for the new section:** "How to build a B2B outbound sales strategy: five decisions". Leave the page title and H1 alone: the page ranks 4.5 to 7 for its head terms.
- **Primary keyword for the new section:** `b2b outbound sales strategy`. The page's own primary stays "what is b2b outbound sales".
- **Secondary keywords:** `b2b outbound`, `outbound b2b`, `outbound sales b2b`, `outbound sales channels`
- **Search Console:**
  - "b2b outbound sales strategy": 5 impressions, 0 clicks, position 22.6.
  - "b2b outbound": 14 / 0 / 14.8. "outbound sales b2b": 9 / 0 / 13.4. "outbound b2b": 8 / 0 / 12. "outbound b2b sales": 3 / 0 / 13. "b2b outbound telemarketing": 4 / 0 / 10. "outbound sales channels": 1 / 0 / 11.
  - Page level: `/blog/what-is-b2b-outbound-sales` has 138 impressions, 0 clicks across 21 queries. 48 impressions across 11 queries fall in the 8 to 30 window (weighted position 14.4).
  - Outside the window, same page: "b2b outbound sales" 21 / 0 / 7.0, "what is b2b outbound sales" 11 / 0 / 4.5, "b2b outbound sales meaning" 12 / 0 / 5.4.
- **Collision check:** I grepped for "b2b outbound sales strategy", "outbound sales strategy" and "outbound strategy". No page uses the first two. "Outbound strategy" appears in the title of `/blog/relevance-beats-reach-b2b-outbound` and in the `/resources/blogs` index keywords. Strategy-adjacent pages: `/blog/predictable-b2b-lead-gen-engine` (keywords "outbound sales system", "lead generation framework"), `/blog/outbound-funnel-math-not-guesswork` and `/blog/icp-mapping-b2b`. A standalone strategy post would sit among four existing pages and overlap this page's "anatomy of an outbound system" section. The impressions already land here, so add a section and FAQ items instead of a new URL.
- **Search intent:** informational, planning. The searcher wants the decisions that make up an outbound plan, not the definition (which the page already gives).
- **The new section must state in its opening 60 words (do not copy as prose):** an outbound strategy is five decisions: who you target (ICP and account tiers), which channels, what you say, how often you follow up, and who runs it. Metrics come last.
- **Suggested H2 outline (the new section slots between "anatomy" and "in-house vs outsourcing"):**
  1. The definition, in one sentence (existing)
  2. The three main channels (existing)
  3. The anatomy of an outbound system (existing)
  4. How to build a B2B outbound sales strategy: five decisions (new, with one short subsection per decision plus a closing line on measuring it)
  5. Building it in-house vs. outsourcing it (existing)
  6. How to know if outbound is worth it for you (existing)
  7. FAQ, add "What is an outbound sales strategy?" and "What's the difference between an outbound strategy and outbound tactics?"
- **3 internal links to add:**
  1. `/blog/icp-mapping-b2b`, anchor "ICP mapping process".
  2. `/blog/cold-email-vs-linkedin-outreach`, anchor "how to choose between cold email and LinkedIn".
  3. `/blog/outbound-funnel-math-not-guesswork`, anchor "work backwards from meetings with funnel math".
- **Pages that should link back:** `/blog/icp-mapping-b2b`, `/blog/outbound-funnel-math-not-guesswork` and `/blog/predictable-b2b-lead-gen-engine`. None links to this page today. A grep of `app`, `lib` and `components` finds links only from the sitemap files, the blog index, `/resources/glossary/outbound-sales`, `lib/internal-paths.ts` and the site audit data.
- **Sources for statistics:** no external statistics; use only Myntmore proof points already in `lib/entity-facts.json`. Separately, the existing stat strip needs attention (flag 3 above). RAIN Group's page https://www.rainsalestraining.com/sales-research/sales-prospecting-research names the study but does not show the touches figure. Remove or replace that strip item unless the writer obtains the report.
- **Format and length:** addition of 300 to 400 words to a page of roughly 1,200. Schema: unchanged (Article, FAQPage, BreadcrumbList already emitted). Bump `dateModified`.
- **Ready? Yes.**

---

## Brief 4: Gmail and Yahoo sender requirements: what they mean for cold email

- **Type: NEW PAGE.** Proposed slug `/blog/gmail-yahoo-sender-requirements-cold-email` (checked: not in the sitemap and no folder exists).
- **Working title:** "Gmail and Yahoo Sender Requirements: What They Mean for Cold Email"
- **Primary keyword:** `gmail and yahoo sender requirements`
- **Secondary keywords:** `gmail bulk sender requirements`, `yahoo bulk sender requirements`, `google 5000 emails per day rule`, `cold email spam rate 0.3%`, `dmarc required for cold email`
- **Search Console:** no rows for any of these. The nearest signal is the deliverability cluster, all in the 8 to 30 window and all on existing pages: "cold email infra" 7 impressions / 0 clicks / position 8.3 (`/services/cold-email`), "sender reputation" 6 / 0 / 15.8, "domain warm up" 2 / 0 / 23.5, "domain warmup" 2 / 0 / 27.5, "cold email warm-up sequence" 1 / 0 / 9, "email warm up sequence" 1 / 0 / 30. Total 19 impressions, 0 clicks. That is thin. The topic comes from the gap list ("is this even legal?" is only half answered: the compliance guide covers CAN-SPAM, GDPR, DPDP and CASL, not mailbox-provider rules) and from a repo grep finding no page that mentions "bulk sender", "sender requirements" or Postmaster.
- **Collision check:** I grepped "sender requirements", "bulk sender", "gmail and yahoo" and "google and yahoo": zero hits in `app`, `lib` and `components`, and none in `keyword-map.md`. Closest pages: `/blog/cold-email-deliverability-guide` (primary "cold email deliverability"; mentions Google and Outlook only generally and quotes no thresholds), `/resources/glossary/spf-dkim-dmarc`, `/resources/glossary/sender-reputation`, `/blog/cold-email-compliance-guide` (law, not provider rules). Distinct intent: those cover technique and law, this covers the providers' published rules and how they are counted. Recommendation: new page, plus a one-line pointer from each of those.
- **Search intent:** informational and compliance. The searcher wants to know whether the 2024 rules apply to them, exactly what they must do, what counts toward the 5,000 figure, and what happens if they ignore it.
- **First 60 words must state (do not copy as prose):**
  - since February 2024, Gmail requires every sender to personal Gmail accounts to authenticate and keep spam rates low, with extra requirements (SPF, DKIM and DMARC, one-click unsubscribe) for bulk senders;
  - Yahoo requires SPF and DKIM, a DMARC policy and spam rate under 0.3% for bulk senders;
  - the figures are the providers' own, linked.
- **Suggested H2 outline:**
  1. The short answer: what Gmail and Yahoo require (direct answer plus table via the `comparison` prop, columns Gmail | Yahoo)
  2. Who counts as a bulk sender (5,000 to personal Gmail in 24 hours, same primary domain, permanent)
  3. What each provider requires (authentication, DMARC, spam rate, unsubscribe)
  4. Why cold email teams reach the threshold sooner than they expect (volume across mailboxes on one primary domain adds up)
  5. What the rules do not say about cold email (Google's wording is "marketing messages and subscribed messages", it does not define cold outreach, so claim no certainty)
  6. A pre-send checklist (authentication passing, spam rate in Postmaster Tools, unsubscribe in place)
  7. FAQ
- **3 internal links:**
  1. `/blog/cold-email-deliverability-guide`, anchor "cold email deliverability guide".
  2. `/resources/glossary/spf-dkim-dmarc`, anchor "SPF, DKIM and DMARC explained".
  3. `/services/cold-email`, anchor "managed cold email infrastructure".
- **Pages that should link back:** `/blog/cold-email-deliverability-guide` ("see also"), and `/resources/glossary/spf-dkim-dmarc`, `/resources/glossary/sender-reputation` and `/resources/glossary/domain-warmup` through their free `furtherHref` slot. Also `/blog/cold-email-compliance-guide` (a pointer separating law from provider rules).
- **Sources for statistics (all opened 2026-10-16 via WebFetch; the writer must re-open each and copy exact wording at drafting time):**
  - Google, Email sender guidelines, https://support.google.com/a/answer/81126:
    - "Starting February 1, 2024, email senders who send more than 5,000 messages per day" (section "Requirements for sending 5,000 or more messages per day").
    - "All senders: SPF or DKIM" and "Bulk senders: SPF, DKIM, and DMARC" (section "Email authentication requirements & guidelines").
    - "Keep spam rates reported in Postmaster Tools below 0.3%." (section "Requirements for all senders").
    - "below 0.10% and avoid ever reaching a spam rate of 0.30% or higher" (section "Monitoring and troubleshooting", then "Postmaster Tools", then "Spam rate").
    - "Marketing messages and subscribed messages must support one-click unsubscribe..." (bulk-sender requirements).
    - "Sending to personal Gmail accounts requires a DKIM key of 1024 bits or longer." (DKIM subsection).
  - Google, Email sender guidelines FAQ, https://support.google.com/a/answer/14229414:
    - "A bulk sender is any email sender that sends close to 5,000 messages or more to personal Gmail accounts within a 24-hour period".
    - "Messages sent from the same primary domain count toward the 5,000 limit." (a subdomain counts toward its parent).
    - "Senders who meet the above criteria at least once are permanently considered bulk senders."
    - "The Email sender guidelines don't apply to messages sent to Google Workspace accounts."
  - Yahoo, Email Sender Requirements, https://senders.yahooinc.com/best-practices/:
    - "Implement both SPF & DKIM." and "Publish a valid DMARC policy with at least p=none - DMARC must pass." (item 1, "Authenticate your mail").
    - "Honor unsubscribes within 2 days." (item 2).
    - "Keep your spam rate below 0.3%." (item 3).
    - "Beginning in February 2024, enforcement of the following sending standards will take effect."
    - Yahoo's page uses the heading "Requirements for Bulk Senders" but gives no numeric volume threshold, so never attribute 5,000 to Yahoo.
  - Not usable: Microsoft's Outlook.com high-volume sender announcement. The post body would not load through WebFetch (only the title returned), so no Microsoft figure goes in until the writer opens it.
  - Do not reuse the unsourced "0.2% spam rate" claim from `/services/cold-email` (flag 4).
- **Format and length:** `BlogArticle` layout, 1,000 to 1,300 words, comparison table (Gmail | Yahoo). Schema: Article, FAQPage and BreadcrumbList, all emitted by `BlogArticle`. No HowTo markup.
- **Ready? Yes.**

---

## Brief 5: LinkedIn connection request limits: what LinkedIn actually says

- **Type: NEW PAGE, plus a mandatory correction to `/blog/linkedin-outreach-sequences`.** Proposed slug `/blog/linkedin-connection-request-limits` (checked: free).
- **Working title:** "LinkedIn Connection Request Limits: What LinkedIn Actually Says (and What It Doesn't)"
- **Primary keyword:** `linkedin connection request limit`
- **Secondary keywords:** `linkedin weekly invitation limit`, `linkedin invitation limit reached`, `linkedin personalized invitation limit`, `is linkedin automation allowed`
- **Search Console:** no rows. Across all 496 non-brand query rows, no query mentions limits, invitations or restrictions. The only LinkedIn rows are agency and city queries (for example "linkedin outreach agency mumbai", 12 impressions, position 8.8). This brief has no Search Console support, so rank it below Briefs 1 to 3. It comes from a coverage gap (no page answers the question) and an accuracy problem (flag 2). WebSearch results for the topic showed a SERP crowded with automation-tool vendor blogs, which is an observation, not a source.
- **Collision check:** I grepped "connection request limit", "invitation limit", "weekly invitation": zero hits. Near matches: `/blog/linkedin-outreach-sequences` lists "linkedin sales navigator outreach limits" as a secondary keyword and has a one-paragraph section on limits; `/services/linkedin-outreach` lists "linkedin automation without getting banned" and "how to automate linkedin outreach safely"; `/myntmore-framework` lists "linkedin automation without bans". Those are sequence and commercial pages. This page is about platform rules. The existing section is not a page targeting the keyword, so a new page is justified, and the paragraph must be corrected regardless.
- **Search intent:** informational. The searcher wants how many requests they can send, what happens at the limit, how long it lasts, and whether automation is allowed. The honest answer is that LinkedIn publishes no single weekly number.
- **First 60 words must state (do not copy as prose):**
  - LinkedIn's Help Center states no numeric weekly invitation cap;
  - restrictions come from sending many invitations quickly, or from many going ignored, pending or marked as spam;
  - most restrictions lift within about a week and support cannot remove them;
  - third-party numbers are not LinkedIn's.
- **Suggested H2 outline:**
  1. The short answer: LinkedIn doesn't publish a weekly number
  2. What triggers an invitation restriction (LinkedIn's own list)
  3. How long a restriction lasts, and what does not clear it
  4. The personalized-note cap and the connection-count cap
  5. What LinkedIn's rules say about automation (see the pre-draft decision)
  6. How to stay inside the rules as a sender (qualitative: targeting, pacing, acceptance quality)
  7. FAQ
- **3 internal links:**
  1. `/blog/linkedin-outreach-sequences`, anchor "LinkedIn outreach sequence".
  2. `/blog/cold-email-vs-linkedin-outreach`, anchor "how platform limits change the cold email vs LinkedIn trade-off".
  3. `/services/linkedin-outreach`, anchor "LinkedIn outreach service".
- **Pages that should link back:** `/blog/linkedin-outreach-sequences` (replace the unsourced paragraph with a pointer here), `/blog/linkedin-outreach-agency-vs-manual-prospecting` (the FAQ "Is LinkedIn outreach automation safe for my account?") and `/blog/cold-email-vs-linkedin-outreach` (the platform-limits table rows).
- **Sources for statistics (all opened 2026-10-16 via WebFetch; the writer must re-open each in a browser and copy exact wording):**
  - LinkedIn Help, Types of restrictions for sending invitations, https://www.linkedin.com/help/linkedin/answer/a551012/types-of-restrictions-for-sending-invitations:
    - "Most restrictions will automatically be removed within one week."
    - "LinkedIn won't be able to remove invitation restrictions upon request."
    - Waits: "Wait a few hours, then try again." / "Wait a few days, then try again." / "Wait for up to one month before attempting to send another invitation."
    - "After you withdraw an invitation, you won't be able to resend an invite to the same recipient for up to three weeks."
    - "the network size limit for LinkedIn members is a maximum of 30,000 1st-degree connections".
    - The page states no weekly invitation cap.
  - LinkedIn Help, Invitation limit reached, https://www.linkedin.com/help/linkedin/answer/a550555:
    - "This restriction typically lasts one week."
    - "Withdrawing pending invitations will not remove the restriction."
    - "LinkedIn Support cannot disclose the type or reason for the restriction."
  - LinkedIn Help, Personalize invitations to connect, https://www.linkedin.com/help/linkedin/answer/a563153:
    - Two reads on 2026-10-16 both returned "You can add a personalized message to up to three connection requests per month" and "Each message can be up to 200 characters". Premium is described as unlimited personalized invitations, with a note that connection request limits may still apply.
    - Conflict: a search-result summary of the same page said five per month, which suggests the number has changed. The writer must read the live page in a browser, quote the number with the date, or omit it.
  - LinkedIn Help, Prohibited software and extensions, https://www.linkedin.com/help/linkedin/answer/a1341387/prohibited-software-and-extensions?lang=en:
    - "we don't permit the use of any third party software" and "browser extensions that scrape, modify the appearance of, or automate activity on LinkedIn's website".
    - Section 8.2 also bars "Use bots or other unauthorized automated methods to access the Services".
    - "This means that they risk having their accounts restricted or shut down."
  - Not usable: any "100 per week" or "150-200 for Sales Navigator" figure. I saw those only in third-party blog summaries (which conflict with each other) and in this site's own paragraph. LinkedIn's page states none. The article must not present any weekly number as LinkedIn's rule.
- **Pre-draft decision for the owner (drafting is blocked on this):** LinkedIn prohibits third-party automation (Section 8.2), while `/services/linkedin-outreach`, `/marketing-automation`, `/myntmore-framework` and `/services/do-it-yourself` market "LinkedIn automation". The article will sit beside them. Decide how Myntmore's own approach is described, or whether it is described at all. Until then the draft must not claim "account-safe" or "no bans".
- **Format and length:** `BlogArticle` layout, 900 to 1,200 words. Schema: Article, FAQPage and BreadcrumbList via `BlogArticle`.
- **Ready? Yes on the five criteria. Drafting needs the owner decision above.**

---

## Considered and not briefed

- **`cold-email-infrastructure-explained`** (the gap-list item): now covered by `/resources/glossary/spf-dkim-dmarc`, `/resources/glossary/domain-warmup`, `/resources/glossary/sender-reputation` and `/blog/cold-email-deliverability-guide`, and `/services/cold-email` lists "b2b cold email infrastructure". It would collide. Brief 4 is the uncovered part of that topic.
- **Pharma and manufacturers blog posts that support the `/lp/*` pages** (the other gap-list item): the LP keyword arrays already contain the informational variants verbatim (for example "how to generate leads for pharma exports", "how to find overseas buyers without trade fairs"), so a post would collide. Search Console signal is 1 to 4 impressions per query. One finding: "lead generation agency for manufacturing companies" (13 impressions, position 27.8) is a `/lp/manufacturers-exporters` keyword, yet Google shows the Chennai, Kolkata, Pune and Ahmedabad city pages for it, not the LP. That is a metadata or linking question, not a new brief.
- **Hot lead, sender reputation and domain warm-up clusters:** 15 to 25 impressions each, all on existing glossary entries.
- **Pricing and tool-vs-tool comparison pages:** ruled out in `content-gaps.md`.

## Publishing checklist for the two new pages

Add the URL to `app/sitemap.ts`, then run `npm run sitemap:dates` and commit the JSON (per the comment in `app/sitemap.ts`). Add the post to the list in `app/resources/blogs/page.tsx`. Add a row to `docs/keyword-map.md` and re-run its collision script.

## Summary

| Brief | Type | Primary keyword | Search Console signal | Ready |
|---|---|---|---|---|
| 1. What is a cold reply? | REFRESH `/blog/handling-cold-email-replies` | cold reply meaning | 188 impressions, position 8.8 (250 across the page) | yes |
| 2. Inbound vs. outbound | REFRESH `/resources/glossary/inbound-vs-outbound` | inbound vs outbound | 25 impressions, position 11.0 (105 across the page) | yes |
| 3. B2B outbound sales strategy section | REFRESH `/blog/what-is-b2b-outbound-sales` | b2b outbound sales strategy | 5 impressions, position 22.6 (138 across the page) | yes |
| 4. Gmail and Yahoo sender requirements | NEW PAGE | gmail and yahoo sender requirements | none for the keyword; 19 impressions in the adjacent cluster | yes |
| 5. LinkedIn connection request limits | NEW PAGE | linkedin connection request limit | none | yes (owner decision before drafting) |
