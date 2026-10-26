#!/usr/bin/env python3
"""Single source for the SEO checklist. Generates:

    docs/seo-checklist.md      Markdown (GitHub checkboxes)
    docs/seo-checklist.html    standalone page (checkboxes remember state in the browser)
    docs/seo-checklist.notion.md   Notion-flavored markdown, for pasting or the Notion API

Edit the TASKS data below, then run:   python3 scripts/build-seo-checklist.py

Text rules: inline `code` only (no other markup in task text), and avoid
the characters < > [ ] { } outside code spans so the Notion output stays valid.
"""
import html, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASELINE_DATE = "2026-10-07"

INTRO = [
    "Every task has an exact way to measure it, a pass threshold, and a defined action if it fails. If a task can't be marked pass or fail from a number or a yes/no check, it doesn't belong here.",
]
RULES = [
    ("Search Console property", "`sc-domain:myntmore.com` (the domain property), never the bare-domain URL property."),
    ("When", "Weeks run Monday to Sunday. Weekly list on Monday. Bi-weekly list on alternate Mondays. Monthly list in the first week of the month. Quarterly list in the first two weeks of Jan, Apr, Jul and Oct."),
    ("Three tracks in each list", "Technical and indexing, search performance, and content and publishing."),
    ("Related docs", "`docs/seo-aeo-geo-cadence.md` (reasoning and the every-new-page list), `docs/keyword-map.md`, `docs/featured-snippet-audit.md`, `docs/content-gaps.md`."),
]

BASELINE = [
    ("Site Health (`python3 scripts/seo-crawl.py`)", "100% (135 of 135 URLs)", "stays 100%"),
    ("Schema coverage (page-specific JSON-LD)", "84.4% (114 of 135)", "90% by end of quarter"),
    ("Sitemap URLs", "135", "+2 content pages per month"),
    ("Indexed pages (URL Inspection)", "77% (105 of 137)", "at least 90%"),
    ("Pages marked Duplicate without user-selected canonical (8 of 12 confirmed pointing at another domain)", "12", "0"),
    ("Search Console, last 28 days", "122 clicks, 4,184 impressions, 2.9% CTR, position 10.3", "rising"),
    ("Sitemaps submitted in Search Console", "2 (www and bare domain)", "1 (www only)"),
    ("Redirect hops for `http://myntmore.com`", "2", "1"),
    ("Public orphan pages", "8 (the allow-list in task B3)", "no unlisted orphans"),
    ("City page positions", "Ahmedabad 8.7, Chennai 7.7, Hyderabad 11.6, Mumbai 14.4, Delhi 15.3, Pune 17.6, Kolkata 23.9, Bengaluru 61.8", "all at 20 or better"),
    ("Blog posts / median body length / posts under 700 words", "29 / 619 words / 15 posts", "new posts 800+, under-700 count falling"),
    ("Blog posts with FAQ schema", "8 of 29", "29 of 29"),
    ("Glossary entries / median body length", "30 / 125 words", "all 300+ words"),
    ("Indexed case studies, tools, industry landing pages", "6 / 9 / 9", "case studies 8 by year end"),
    ("Blog posts linking to each industry landing page", "0 of 9 pages have any", "at least 2 each"),
    ("Blog and glossary links into each service page", "GTM 0, Do It Yourself 0, AI lead gen 1, Sales intelligence 1, LinkedIn 2, Personal branding 2, ABM 3, Cold email 4", "at least 5 each"),
]

# Task fields: id, title, time, tool, why, steps (list), pass, fail
def T(id, title, time, tool, why, steps, pass_, fail):
    return dict(id=id, title=title, time=time, tool=tool, why=why, steps=steps, pass_=pass_, fail=fail)

TECH, PERF, CONTENT = "Technical and indexing", "Search performance", "Content and publishing"

CADENCES = [
 dict(key="weekly", name="Weekly", when="Every Monday, about 2.5 hours in total", groups=[
  (TECH, [
   T("W1", "Site health crawl", "10 min", "Terminal",
     "Catches broken pages, bad canonicals, duplicate or oversized titles and invalid schema before Google does.",
     ["Run `python3 scripts/seo-crawl.py` from the repo root.",
      "Read the PASS and FAIL lines, then the Site Health and Schema percentages at the bottom.",
      "Record both percentages in the scorecard."],
     "Exit code 0, Site Health 100%, Schema coverage no lower than last week.",
     "Fix every FAIL line before the next Monday. A new page that fails is fixed the same day."),
   T("W2", "Sitemap and robots live", "5 min", "Browser or curl",
     "A broken sitemap or robots file quietly stops indexing of new pages.",
     ["Open `https://www.myntmore.com/sitemap.xml` and count the URLs.",
      "Count the entries in `app/sitemap.ts`.",
      "Open `https://www.myntmore.com/robots.txt` and confirm the `Sitemap:` line is present."],
     "Both return 200. The live URL count equals the count in `app/sitemap.ts`. The robots file contains the Sitemap line.",
     "Redeploy, then check `app/sitemap.ts` and `app/robots.ts`."),
   T("W3", "Manual actions and security issues", "5 min", "Search Console",
     "A manual action or hack warning removes pages from search until resolved.",
     ["In Search Console open Security and Manual actions, then Manual actions.",
      "Open Security issues."],
     "Both pages say No issues.",
     "Treat as urgent. Fix within 48 hours and file the review request."),
   T("W4", "Wrong-canonical tripwire", "15 min", "Search Console URL Inspection",
     "Google has picked other domains (including a gambling site) as the canonical for 12 Myntmore pages. This check catches that pattern early.",
     ["Inspect `/`, `/services` and every page published or edited in the last 14 days.",
      "Compare Google-selected canonical with User-declared canonical.",
      "Record any page where the two differ."],
     "Every Google-selected canonical is the page's own URL, never another domain.",
     "Run Test Live URL, compare the rendered page and screenshot to the browser view, then Request Indexing. If it repeats, check Vercel logs for the status codes Googlebot received."),
   T("W5", "Indexing errors", "10 min", "Search Console",
     "New crawl or server problems show up here first.",
     ["Open Indexing, then Pages.",
      "Read the table Why pages aren't indexed.",
      "Compare each row's count with last week."],
     "No new rows for Server error (5xx), Soft 404, Blocked by robots.txt or Redirect error. The total Not indexed is no higher than last week.",
     "Open the example URLs, fix the cause, then click Validate Fix."),
   T("W6", "Core Web Vitals", "5 min", "Search Console",
     "Poor page experience can hold back rankings and conversions.",
     ["Open Experience, then Core Web Vitals, mobile report."],
     "0 URLs in Poor.",
     "Identify the failing template and open a fix ticket the same week."),
  ]),
  (PERF, [
   T("W7", "Search performance snapshot", "10 min", "Search Console",
     "Week-over-week movement is the earliest signal of a win or a problem.",
     ["Open Performance and compare the last 7 days with the previous 7.",
      "Record clicks, impressions, CTR and average position.",
      "Sort pages by clicks and note any that dropped."],
     "Numbers recorded. No page that had 20 or more clicks the previous week lost more than 50% of them.",
     "Open the page and check for a recent edit, deploy, ranking loss or indexing change."),
   T("W8", "KPI scorecard", "20 min", "Scorecard sheet",
     "One consistent scorecard is how progress is judged. Definitions must not drift.",
     ["Fill all 11 rows for the Monday to Sunday week using the definitions at the end of this document.",
      "Compare each row with the target and last week."],
     "All 11 rows filled using the same definitions as last week.",
     "Never change a definition silently. If one must change, restate the prior week under the new rule."),
  ]),
  (CONTENT, [
   T("W9", "Newsletter issue sent", "10 min", "Email tool",
     "The site promises The Outbound Operator weekly. Missing issues breaks that promise and loses return traffic.",
     ["Confirm an issue went out this week.",
      "Confirm it links to at least one myntmore.com page with UTM tags (`utm_source=newsletter&utm_medium=email&utm_campaign=` plus the issue date).",
      "Record sends and open rate."],
     "One issue sent, with at least one tagged link to the site.",
     "If two consecutive weeks are missed, either resume or change the weekly wording on the site."),
   T("W10", "Distribute what shipped", "20 min", "LinkedIn, Instagram",
     "New pages get indexed and cited faster when they get early traffic and links.",
     ["List every page published or materially updated last week.",
      "For each, post once on LinkedIn within 48 hours of publishing, with the link tagged `utm_source=linkedin&utm_medium=social&utm_campaign=` plus the page slug.",
      "Log the post link next to the page."],
     "100% of pages published last week have a logged LinkedIn post.",
     "Post it the same day. Skip only if the page is noindex."),
   T("W11", "Content backlog depth", "15 min", "docs/content-gaps.md",
     "A full backlog is what makes the bi-weekly publishing target achievable.",
     ["Count briefs that are ready. Ready means: working title, primary keyword that passes the collision check, search intent, 3 internal link targets, and a source for every statistic.",
      "If fewer than 4, build new briefs from Search Console queries (position 8 to 30) and the gap list."],
     "At least 4 ready briefs.",
     "Spend one hour this week building briefs. Do not draft without a brief."),
   T("W12", "Events page accuracy", "5 min", "Browser",
     "Past events shown as upcoming damage trust and can invalidate Event schema.",
     ["Open `/events` and read every listed date.",
      "Confirm each upcoming event has valid Event schema (the crawl lists its schema types)."],
     "0 events with a start date in the past in the upcoming list.",
     "Move past events to the archive or remove them, and deploy."),
   T("W13", "Careers accuracy", "10 min", "Browser, curl",
     "Expired job postings and 404 role pages hurt both search and applicants.",
     ["Compare the roles on `/careers` with the roles actually open.",
      "Check each job page's `validThrough` date in its JobPosting schema.",
      "For every closed role run `curl -sI` on its old URL and confirm a 308 redirect, not a 404."],
     "Every listed role is open, every `validThrough` is at least 7 days ahead, and every closed role redirects.",
     "Remove or update the role and add a redirect in `next.config.js`."),
  ]),
 ]),
 dict(key="biweekly", name="Bi-weekly", when="Alternate Mondays, about 6 hours in total (2 to 3 of them writing the blog post)", groups=[
  (TECH, [
   T("B1", "Indexing follow-up", "20 min", "Search Console URL Inspection",
     "New pages that never get indexed produce no traffic however good they are.",
     ["List pages that went live at least 14 days ago.",
      "Run URL Inspection on each (10 per batch).",
      "For any not indexed, confirm it is in the sitemap and has 3 or more inbound internal links (task B2), then click Request Indexing."],
     "100% show Submitted and indexed.",
     "Re-check in 7 days. Still not indexed at 28 days: queue a content improvement (more depth, clearer intent, more internal links)."),
   T("B2", "Internal links for new pages", "20 min", "`/site-audit`, repo",
     "Internal links are how Google finds and weighs new pages.",
     ["Run `node scripts/generate-site-map.mjs`, open `/site-audit` and expand each page published in the last 14 days.",
      "Check it has at least 3 inbound links from other content pages (not only nav or footer).",
      "Check it links out to at least 2 relevant existing pages."],
     "Every page published in the last 14 days has 3 or more inbound and 2 or more outbound contextual links.",
     "Add contextual links from the 3 most related existing pages."),
   T("B3", "Orphan check", "10 min", "`/site-audit`",
     "A page nothing links to is invisible to visitors and weakly signalled to Google.",
     ["Open `/site-audit` and click the Orphan filter."],
     "Orphans are only the allow-list: `/enwilfernandes`, `/jahnvijhaveri`, `/tejasjhaveri`, `/workshop`, `/feedback`, `/menti`, `/thank-you`, `/site-audit`.",
     "For any other orphan: link it from a relevant page, redirect it, or mark it noindex, within the cycle."),
  ]),
  (PERF, [
   T("B4", "Striking-distance queries", "30 min", "Search Console",
     "Queries at positions 8 to 20 are the cheapest traffic gains.",
     ["Open Performance for the last 14 days with Queries and Pages together.",
      "Filter: position 8 to 20 and impressions at least 20.",
      "Take the top 3 pages by impressions. For each make one change: better title, a new H2 answering the query, or added internal links.",
      "Log the page, change and date."],
     "3 pages changed and logged this cycle.",
     "Log no candidates only if the filter returns fewer than 3 rows. Re-measure each change after 28 days."),
   T("B5", "Low-CTR pages", "30 min", "Search Console",
     "Pages that are seen but not clicked are losing traffic to a weak title or description.",
     ["Open Performance for the last 28 days and filter impressions at least 100 and CTR under 1%.",
      "Rewrite the title and description of each listed page, one page at a time, keeping the primary keyword near the front and a clear benefit or CTA at the end.",
      "Log the change and date."],
     "Every listed page has a rewritten title and description.",
     "After 28 days, if CTR has not improved, try a different angle."),
  ]),
  (CONTENT, [
   T("B6", "Publish one blog post", "2 to 3 hours", "Repo, Search Console",
     "Steady publishing builds the indexed surface that search and AI answers draw from.",
     ["Take the next brief from the backlog (task W11).",
      "Write at least 800 words of body copy with one H1, at least 4 H2s, and a FAQ of 3 questions with 40 to 60 word answers that start with a direct answer.",
      "Primary keyword goes in the title, H1, URL slug and first 100 words. It must pass the collision check in `docs/keyword-map.md`.",
      "Title 60 characters or fewer including the suffix. Description 155 or fewer with a call to action.",
      "Use the `BlogArticle` layout so Article, FAQPage and Breadcrumb schema are included. Add an og image.",
      "Link out to at least 3 pages: one service or tool, one glossary term, one related post. Add the CTA block.",
      "Register it in `app/sitemap.ts`, the `/sitemap` page and the blog hub. Get at least 3 inbound links (task B2).",
      "Run `python3 scripts/seo-crawl.py` and confirm no FAIL lines. Check any statistic has a named source."],
     "One post live, 800 or more words, passing the crawl, listed in the sitemap, hub and `/sitemap`, with 3 or more inbound links.",
     "Do not skip the cycle. Ship a shorter piece, then expand it next cycle."),
   T("B7", "Publish one glossary term", "45 min", "Repo",
     "Glossary entries earn definitional searches and give blog posts natural link targets.",
     ["Pick a term from `docs/content-gaps.md` or from Search Console what-is queries.",
      "Write a 20 to 30 word definition, a supporting section, a worked example and one outbound link, reaching at least 300 words of body copy.",
      "Keep DefinedTerm schema and the breadcrumb. Check the primary keyword for collisions.",
      "Link to it from at least one blog post and list it on the glossary index and sitemap."],
     "One new entry live, 300 or more words, with an inbound link from at least one blog post.",
     "Hold the entry until it reaches 300 words. Thin entries are not being indexed."),
   T("B8", "Repurpose what shipped", "45 min", "LinkedIn, Instagram, newsletter",
     "One idea earns more reach and more links when it appears in several formats.",
     ["For each blog post published this cycle, produce at least one extra asset: a LinkedIn carousel, a short video, or a newsletter section.",
      "Each asset links back to the post with UTM tags.",
      "Log the asset link next to the post."],
     "Every post published this cycle has at least one repurposed asset logged.",
     "Schedule it within the next 3 days."),
   T("B9", "Keep the records current", "15 min", "Repo docs",
     "The keyword map and gap list only protect against collisions if they are up to date.",
     ["After publishing, add each new page's primary keyword to `docs/keyword-map.md` and update its page counts.",
      "Remove or tick off the matching row in `docs/content-gaps.md`."],
     "Every page published this cycle appears in the keyword map, and the gap list reflects what is now covered.",
     "Update both before the next publish."),
  ]),
 ]),
 dict(key="monthly", name="Monthly", when="First week of the month, about 9 hours in total", groups=[
  (TECH, [
   T("M1", "Keyword collisions", "15 min", "Terminal",
     "Two pages competing for the same primary keyword split their rankings.",
     ["Run the script in the Method section of `docs/keyword-map.md`.",
      "Update the counts and table in the same file."],
     "0 duplicate primary keywords and 0 exact overlaps involving a page changed this month.",
     "Reorder or remove the colliding keyword on the lower-intent page."),
   T("M2", "Indexed ratio", "45 min", "Search Console URL Inspection",
     "This is the single best measure of whether Google trusts the site's content.",
     ["Run URL Inspection on every sitemap URL, 10 per batch.",
      "Count Submitted and indexed. Group the rest by reason.",
      "Compare each reason with last month."],
     "At least 90% indexed, and no reason bucket larger than last month.",
     "Work the largest bucket first (duplicate-canonical, then discovered-not-indexed)."),
   T("M3", "Sitemap submission", "5 min", "Search Console",
     "A second submitted sitemap that redirects splits Google's attention.",
     ["Open Search Console, then Sitemaps."],
     "Exactly one sitemap, `https://www.myntmore.com/sitemap.xml`, status Success, 0 errors.",
     "Delete the bare-domain sitemap entry and resubmit the www one."),
   T("M4", "Search spam check", "15 min", "Google, Search Console",
     "Hacked sites often show injected spam pages before the owner notices.",
     ["Search Google for `site:myntmore.com (casino OR slot OR betting OR viagra OR \"free spins\")`.",
      "In Search Console, filter Queries containing those words."],
     "0 results and 0 impressions.",
     "Treat as a possible hack. Check the repo, Vercel deployments, DNS and third-party scripts the same day."),
   T("M7", "Structured data", "30 min", "Rich Results Test",
     "Broken schema can silently disable enhancements after a code change.",
     ["Test one URL for each template: home, a service, a blog post, a glossary entry, a job posting, a tool.",
      "Record errors and warnings."],
     "0 errors. Warnings are listed (known: JobPosting missing `streetAddress` and `postalCode`).",
     "Fix errors the same week and track warnings until closed."),
   T("M8", "Page speed", "30 min", "PageSpeed Insights",
     "Speed affects both rankings and conversion.",
     ["Run mobile tests on `/`, `/services`, `/blog/icp-mapping-b2b`, `/tools/icp-builder` and `/b2b-lead-generation-mumbai`.",
      "Record LCP, CLS, INP and the performance score."],
     "LCP 2.5s or less, CLS 0.1 or less, INP 200ms or less, performance score 80 or more, on every URL.",
     "Record the failing metric and open a ticket for the heaviest asset or script."),
   T("M10", "llms.txt", "10 min", "Terminal",
     "AI tools use this file to understand the site. Dead links make it useless.",
     ["Run: `grep -o 'https://[^)]*' public/llms.txt | xargs -n1 curl -s -o /dev/null -w '%{http_code} %{url_effective}\\n' | grep -v '^200'`.",
      "Confirm every service page is listed."],
     "No output from the command, and every service page appears in the file.",
     "Fix or remove dead URLs. Add any new service or pillar page."),
   T("M17", "Blog hub parity", "10 min", "Terminal",
     "A post missing from the hub or the sitemap loses internal links or indexing.",
     ["Count blog URLs in the sitemap: `curl -s https://www.myntmore.com/sitemap.xml | grep -o '/blog/[a-z0-9-]*<' | sort -u | wc -l`.",
      "Count blog links on the hub: `curl -s https://www.myntmore.com/resources/blogs | grep -o 'href=\"/blog/[a-z0-9-]*\"' | sort -u | wc -l`."],
     "The two counts are equal (baseline 29 and 29).",
     "Add the missing post to the hub or the sitemap."),
  ]),
  (PERF, [
   T("M5", "Non-brand performance", "20 min", "Search Console",
     "Brand searches will always work. Growth comes from non-brand queries.",
     ["Open Performance for the last 28 days, Queries, and exclude the regex in the scorecard definitions.",
      "Record non-brand clicks, impressions and queries in the top 10."],
     "Non-brand clicks and impressions are no more than 20% below last month, or the drop is explained in the scorecard.",
     "Compare the top 20 queries month over month and find what fell."),
   T("M6", "City pages", "20 min", "Search Console",
     "City pages carry most of the local impressions and are the weakest performers on click rate.",
     ["Open Performance, Pages, filter `b2b-lead-generation-` and read average position for the 8 pages."],
     "Every city page at average position 20 or better and none worse than its baseline.",
     "For each page over 20: add local proof, 2 internal links and a stronger title, then re-check next month."),
   T("M9", "Backlinks", "20 min", "Ahrefs Webmaster Tools",
     "Links drive authority, and bad links can signal trouble.",
     ["Record referring domains, new and lost.",
      "Scan new domains for adult, gambling or pharma sites."],
     "Referring domains no more than 10% below last month, and no new spam domains.",
     "Ask for lost links to be reinstated. Add spam domains to a disavow review."),
   T("M11", "Content freshness", "45 min", "Sitemap, Search Console",
     "Stale pages lose rankings and credibility.",
     ["List sitemap pages with a lastModified older than 180 days that earned at least 50 impressions in 90 days.",
      "Update each with new data or examples, then set lastModified from `git log -1 --format=%aI`."],
     "None remain stale, or each has a scheduled refresh in the next publishing slot.",
     "Move the refresh into the next bi-weekly slot."),
   T("M12", "AI visibility", "40 min", "ChatGPT, Vercel Analytics",
     "AI answers are a growing source of discovery.",
     ["Run the 10 prompts at the end of this document in logged-out ChatGPT.",
      "Count answers that name Myntmore or cite myntmore.com.",
      "Record AI referral visitors from Vercel Analytics."],
     "Citation rate no lower than last month.",
     "Check which prompts lost the citation and add a direct-answer section to the matching page."),
   T("M19", "Newsletter performance", "15 min", "Email tool",
     "The list is an owned audience that drives return visits.",
     ["Record issues sent, subscribers gained and lost, and average open rate."],
     "At least 4 issues sent and net subscriber growth at or above zero.",
     "Review subject lines and the signup placement on blog posts."),
  ]),
  (CONTENT, [
   T("M13", "Publishing volume", "5 min", "Sitemap",
     "Cadence compounds. This confirms the plan actually happened.",
     ["Compare the sitemap URL count with last month.",
      "Count new blog posts and glossary entries."],
     "At least 2 new blog posts and at least 2 new glossary entries.",
     "Move the shortfall into next month's bi-weekly slots."),
   T("M14", "Proof bank", "30 min", "Notion or sheet",
     "Case studies and stats need real, approved numbers. Nothing here may be invented.",
     ["Log at least one new real client result: client type, metric, date, how it was measured and written permission status.",
      "Mark whether it can be used publicly."],
     "At least one new entry with permission status recorded.",
     "Ask the account lead for the next result before month end."),
   T("M15", "Tool QA", "45 min", "Browser",
     "The nine free tools are lead magnets. A broken tool wastes traffic.",
     ["For each of the 9 tools in `/tools`, submit a real test input end to end.",
      "Confirm the result renders in under 60 seconds, the console shows no errors, and the lead is recorded."],
     "9 of 9 tools pass.",
     "Open a fix ticket for any failing tool the same day."),
   T("M16", "Supporting links to services and landing pages", "30 min", "Terminal, repo",
     "Service and industry pages rank better when blog and glossary content links to them.",
     ["Count links per page, for example `grep -l '/services/gtm-strategy' app/blog/*/page.tsx app/resources/glossary/*/page.tsx | wc -l` and `grep -l '/lp/pharma' app/blog/*/page.tsx | wc -l`.",
      "Add contextual links in at least 3 relevant existing posts to the pages furthest below target."],
     "Each service page has at least 5 blog and glossary links and each industry landing page has at least 2 blog links. Progress is at least 3 pages moved closer to target this month.",
     "Prioritise `/services/gtm-strategy` and `/services/do-it-yourself` (both 0)."),
   T("M18", "FAQ backfill", "60 min", "Repo",
     "FAQ sections feed answer boxes and AI summaries. 21 posts lack one.",
     ["List posts without FAQ schema: `for u in $(curl -s https://www.myntmore.com/sitemap.xml | grep -o 'https://www.myntmore.com/blog/[a-z0-9-]*'); do curl -s $u | grep -q '\"@type\":\"FAQPage\"' || echo $u; done`.",
      "Add 3 questions with 40 to 60 word direct answers to at least 2 of them, with FAQPage schema."],
     "At least 2 posts upgraded this month. Baseline 8 of 29 with FAQ.",
     "Pick the posts with the most impressions first."),
   T("M20", "Expand thin glossary entries", "60 min", "Repo",
     "Entries around 125 words are not being indexed. Seven are discovered but not crawled.",
     ["List the glossary entries Search Console marks Discovered, currently not indexed.",
      "Expand at least 3 to 300 or more words with an example, a related-terms section and an internal link."],
     "At least 3 entries expanded to 300 or more words.",
     "Re-inspect after 14 days. If still not indexed, add more internal links."),
  ]),
 ]),
 dict(key="quarterly", name="Quarterly", when="First two weeks of Jan, Apr, Jul and Oct, about 6 working days in total, spread across the quarter", groups=[
  (TECH, [
   T("Q1", "Featured-snippet audit", "1 hour", "Terminal",
     "Direct, short FAQ answers are what get picked for answer boxes.",
     ["Re-run the script in `docs/featured-snippet-audit.md`.",
      "Confirm every page with an FAQ section also emits FAQPage schema."],
     "0 FAQ answers over 60 words, 0 hedge openers such as it depends, and FAQPage schema on every page with an FAQ.",
     "Rewrite the failing answers."),
   T("Q2", "Internal-link depth", "2 hours", "`/site-audit`, crawl",
     "Pages buried deep or lightly linked get crawled less and rank lower.",
     ["Use the inbound counts in `/site-audit` and the click depth from the homepage."],
     "Every indexable page has at least 3 inbound links and is within 3 clicks of the homepage.",
     "Add links from the most related high-traffic pages."),
   T("Q7", "Technical health", "2 hours", "Terminal",
     "Dependencies and redirects drift over time.",
     ["Run `npx tsc --noEmit`, `npm run build` and `npm outdated next`.",
      "Check that each redirect in `next.config.js` resolves in one hop.",
      "Check `http://myntmore.com`, `http://www.myntmore.com` and `https://myntmore.com` each reach `https://www.myntmore.com` in at most 1 hop."],
     "Build and typecheck pass, 0 redirect chains, and all 3 host variants are at 1 hop or fewer.",
     "Fix the Vercel domain redirect settings and review pending framework upgrades."),
   T("Q9", "Backlink audit", "1 hour", "Ahrefs Webmaster Tools",
     "Quality of links matters as much as quantity.",
     ["Review referring domains by quality and the disavow file against last quarter."],
     "Reviewed, and the disavow file is current.",
     "Add spam domains to the disavow file."),
  ]),
  (PERF, [
   T("Q3", "Zero-traction pages", "2 hours", "Search Console",
     "Pages that earn nothing dilute the site and waste crawl budget.",
     ["Open Performance for the last 90 days, Pages. List pages with 0 clicks and fewer than 50 impressions.",
      "Decide for each: improve, merge with a 301, or noindex."],
     "Each page has a recorded decision, and the list is shorter than last quarter.",
     "Do not leave pages undecided."),
   T("Q4", "Query gaps", "2 hours", "Search Console",
     "Queries with impressions but no matching page are demand you are not serving.",
     ["List non-brand queries with at least 200 impressions in 90 days where no page title or H1 contains the main term."],
     "Each one is either added to `docs/content-gaps.md` or recorded as deliberately skipped.",
     "Add to the backlog with a primary keyword."),
   T("Q5", "Cannibalisation", "1 hour", "Search Console",
     "Two pages ranking for one query often rank worse than one strong page.",
     ["Find queries where 2 or more of our pages each get at least 10 impressions."],
     "Each case has one chosen page, and the other is differentiated or merged.",
     "Re-run task M1 afterwards."),
   T("Q8", "Competitor snapshot", "2 hours", "Google",
     "Rankings are relative. This shows who is moving.",
     ["For 10 target queries record our position and the top 3 domains."],
     "Recorded, with no query worse than 3 positions below last quarter.",
     "For each loss, review the winning page and plan an update."),
  ]),
  (CONTENT, [
   T("Q12", "Quarterly publishing target", "30 min", "Sitemap",
     "A quarterly target keeps monthly effort honest.",
     ["Count new pages by type since the last review."],
     "At least 6 blog posts, 6 glossary entries, 1 pillar guide or comparison page, and 1 new or updated tool or lead magnet.",
     "Carry the shortfall into the next quarter's first month."),
   T("Q13", "Refresh the top 10 pages", "1 day", "Repo, Search Console",
     "Refreshing winners is cheaper than creating new pages.",
     ["List the top 10 pages by clicks over 90 days.",
      "For each: verify and update statistics, add new examples, improve the intro, then set the update date."],
     "10 of 10 updated this quarter with sources checked.",
     "Schedule the remainder in the first month of next quarter."),
   T("Q14", "Cluster coverage", "2 hours", "Terminal, repo",
     "Topic clusters show Google which pages matter most for each service.",
     ["Count blog and glossary links into each service page and each industry landing page (see task M16 commands)."],
     "Every service page has at least 5 supporting links and every industry page at least 2 blog links.",
     "Add the missing links and commission a post for any thin cluster."),
   T("Q15", "Expand thin blog posts", "1 day", "Repo",
     "Median blog body is 619 words and 15 of 29 are under 700.",
     ["Run `python3 scripts/seo-crawl.py` and read the thin blog post warnings.",
      "Expand the 5 weakest posts to 800 or more words with new sections and examples, or merge two overlapping posts with a redirect."],
     "At least 5 posts expanded to 800 or more words. Posts under 700 words decrease by at least 5.",
     "Prioritise posts that already get impressions."),
   T("Q16", "Case study or proof asset", "1 day", "Proof bank",
     "Real client outcomes are the strongest ranking and conversion content.",
     ["Pick an approved entry from the proof bank (task M14).",
      "Publish a case study or update an existing one with fresh numbers, written with client permission."],
     "One case study published or refreshed, with every figure traceable to the proof bank.",
     "Do not publish a case study without recorded permission."),
   T("Q17", "Repurposing library", "2 hours", "LinkedIn, Instagram",
     "Top posts deserve more than one distribution.",
     ["Take the top 5 posts by clicks.",
      "Turn each into at least one new format (carousel, video, newsletter feature)."],
     "5 of 5 repurposed with links logged.",
     "Carry to the next quarter only the posts that no longer get traffic."),
   T("Q10", "Benchmark report refresh", "1 day", "Repo",
     "The report earns citations only while it is current.",
     ["Check the date on `/blog/b2b-outbound-benchmark-report-2026`."],
     "Updated within the last 6 months.",
     "Refresh with new aggregate data."),
   T("Q6", "Claims consistency", "1 hour", "Repo",
     "Different numbers for the same claim damage credibility.",
     ["Search the repo for each headline figure, for example 12K+ meetings, 130+ accounts and 35 to 60 meetings per month."],
     "Each metric shows the same number on every page.",
     "Correct the outliers. No unsourced figures."),
   T("Q11", "Checklist review", "1 hour", "This document",
     "Targets must move as the baseline does.",
     ["Compare this quarter's results with the baseline table and reset it."],
     "Baseline table and thresholds updated to the new numbers.",
     "Do it before starting the next quarter."),
  ]),
 ]),
]

SCORECARD = [
    ("Organic Leads", "Zoho CRM Leads created in the week with Lead Source Website. Treat as an upper bound, because the forms can't separate organic search from Instagram or direct visits."),
    ("Non-Brand Clicks and Impressions", "Search Console `sc-domain:myntmore.com`, query dimension, excluding the regex `myntmore|mintmore|mint more|mint and more|tejas jhaveri`. Anonymised queries are excluded, so totals won't equal the site total."),
    ("Queries Ranking in Top 10", "Non-brand queries with average position 10 or better in the week."),
    ("City Pages on Page 1", "The 8 `/b2b-lead-generation-` city pages with page-level average position 10 or better."),
    ("Indexed and Submitted Pages", "Submitted is the URL count of the sitemap in Search Console. Indexed is the URL Inspection count of Submitted and indexed across every sitemap URL (10 per call)."),
    ("Site Health Check", "Share of sitemap URLs passing every check: 200 with no redirect, self-referencing canonical, no noindex, exactly one h1, title 60 characters or fewer, description 160 or fewer, valid JSON-LD. `python3 scripts/seo-crawl.py` prints it."),
    ("Schema Coverage", "Share of sitemap URLs with page-specific JSON-LD, excluding the sitewide Organization and BreadcrumbList. The same script prints it."),
    ("AI Referral Sessions", "Vercel Analytics visitors for `myntmoreclaude` whose referrer is chatgpt.com, perplexity.ai, claude.ai, gemini.google.com or copilot.microsoft.com (Vercel counts visitors, not sessions)."),
    ("AI Citation Rate", "The 10 prompts below, run in logged-out ChatGPT. A hit is any answer that names Myntmore or cites myntmore.com."),
]
PROMPTS = [
    "best B2B lead generation agency in Mumbai",
    "best cold email agency for B2B SaaS in India",
    "top LinkedIn outreach agencies in India",
    "B2B lead generation companies in Pune",
    "B2B lead generation company in Delhi",
    "outbound sales agency for SaaS startups in India",
    "best AI-powered B2B lead generation agencies in India",
    "what is B2B outbound sales",
    "average B2B outbound reply rate 2026",
    "how to choose an outbound lead generation agency",
]

# ---- validation ----------------------------------------------------------------
def plain(s): return re.sub(r"`[^`]*`", "", s)
bad = []
all_text = list(INTRO) + [v for _, v in RULES] + [x for r in BASELINE for x in r] + [x for _, v in SCORECARD for x in [v]] + PROMPTS
for c in CADENCES:
    for _, ts in c["groups"]:
        for t in ts:
            all_text += [t["title"], t["why"], t["pass_"], t["fail"], t["time"], t["tool"]] + t["steps"]
for s in all_text:
    if re.search(r"[<>\[\]{}\\*~$|^]", plain(s)): bad.append(s)
if bad:
    sys.exit("Unsafe characters outside code spans (breaks Notion output):\n" + "\n".join(bad[:10]))
ids = [t["id"] for c in CADENCES for _, ts in c["groups"] for t in ts]
assert len(ids) == len(set(ids)), "duplicate task ids"

# Renumber tasks sequentially (W1, W2, ...) in display order and update every
# "task X" cross-reference, so the IDs always read in order after edits.
_prefix = {"weekly": "W", "biweekly": "B", "monthly": "M", "quarterly": "Q"}
_remap = {}
for c in CADENCES:
    i = 0
    for _, ts in c["groups"]:
        for t in ts:
            i += 1
            _remap[t["id"]] = f"{_prefix[c['key']]}{i}"
def _fix(text):
    return re.sub(r"task ([WBMQ]\d+)", lambda m: "task " + _remap[m.group(1)], text)
for c in CADENCES:
    for _, ts in c["groups"]:
        for t in ts:
            t["id"] = _remap[t["id"]]
            for k in ("why", "pass_", "fail"): t[k] = _fix(t[k])
            t["steps"] = [_fix(x) for x in t["steps"]]
BASELINE = [(_fix(a), _fix(b), _fix(c)) for a, b, c in BASELINE]
for c in CADENCES:
    pass

def n_tasks(c): return sum(len(ts) for _, ts in c["groups"])
TOTAL = sum(n_tasks(c) for c in CADENCES)

# ---- renderers -----------------------------------------------------------------
def md_text(s): return s

def to_md():
    o = ["# SEO Checklist: Weekly, Bi-weekly, Monthly, Quarterly", "",
         f"> Generated by `scripts/build-seo-checklist.py`. Edit the task data in that script, not this file. Baseline measured {BASELINE_DATE}.", ""]
    o += INTRO + [""]
    o += [f"- **{k}:** {v}" for k, v in RULES] + [""]
    o += [f"**{TOTAL} tasks:** " + ", ".join(f"{n_tasks(c)} {c['name'].lower()}" for c in CADENCES) + ".", ""]
    o += [f"## Baseline (measured {BASELINE_DATE})", "", "Every threshold is relative to these numbers. Reset this table at each quarterly review.", "",
          "| Metric | Baseline | Target |", "|---|---|---|"]
    o += [f"| {a} | {b} | {c} |" for a, b, c in BASELINE] + [""]
    for c in CADENCES:
        o += ["---", "", f"## {c['name']}", "", f"*{c['when']}. {n_tasks(c)} tasks.*", ""]
        for g, ts in c["groups"]:
            o += [f"### {c['name']}: {g}", ""]
            for t in ts:
                o += [f"- [ ] **{t['id']} · {t['title']}** ({t['time']} · {t['tool']})",
                      f"  - **Why:** {t['why']}", "  - **Steps:**"]
                o += [f"    {i}. {s}" for i, s in enumerate(t["steps"], 1)]
                o += [f"  - **Pass:** {t['pass_']}", f"  - **If it fails:** {t['fail']}", ""]
    o += ["---", "", "## Appendix: KPI scorecard definitions", "", "Keep these fixed so week-over-week numbers stay comparable.", ""]
    o += [f"- **{k}:** {v}" for k, v in SCORECARD] + [""]
    o += [f"{i}. {p}" for i, p in enumerate(PROMPTS, 1)] + [""]
    return "\n".join(o)

def to_notion():
    ind = "\t"
    o = ["<callout icon=\"✅\" color=\"blue_bg\">",
         f"\t**{TOTAL} objective SEO tasks** across four cadences. Each one has an exact method, a pass threshold and a fix action. Baseline measured {BASELINE_DATE}.",
         "\t" + INTRO[0],
         "</callout>", ""]
    o += [f"- **{k}:** {v}" for k, v in RULES] + [""]
    o += ["<table_of_contents/>", ""]
    o += [f"## Baseline (measured {BASELINE_DATE})", "", "<table header-row=\"true\" fit-page-width=\"true\">",
          "\t<tr>", "\t\t<td>Metric</td>", "\t\t<td>Baseline</td>", "\t\t<td>Target</td>", "\t</tr>"]
    for a, b, c in BASELINE:
        o += ["\t<tr>", f"\t\t<td>{a}</td>", f"\t\t<td>{b}</td>", f"\t\t<td>{c}</td>", "\t</tr>"]
    o += ["</table>", ""]
    for c in CADENCES:
        o += [f"# {c['name']}", f"*{c['when']}. {n_tasks(c)} tasks.*", ""]
        for g, ts in c["groups"]:
            o += [f"## {g}", ""]
            for t in ts:
                o += [f"- [ ] **{t['id']} · {t['title']}** ({t['time']} · {t['tool']})",
                      f"{ind}**Why:** {t['why']}", f"{ind}**Steps:**"]
                o += [f"{ind}{i}. {s}" for i, s in enumerate(t["steps"], 1)]
                o += [f"{ind}**Pass:** {t['pass_']}", f"{ind}**If it fails:** {t['fail']}"]
            o += [""]
    o += ["# Appendix: KPI scorecard definitions", "", "Keep these fixed so week-over-week numbers stay comparable.", ""]
    o += [f"- **{k}:** {v}" for k, v in SCORECARD] + [""]
    o += [f"{i}. {p}" for i, p in enumerate(PROMPTS, 1)]
    return "\n".join(o)

def h(s):
    s = html.escape(s)
    return re.sub(r"`([^`]*)`", r"<code>\1</code>", s)

def to_html():
    nav = "".join(f'<a href="#{c["key"]}">{c["name"]} <span>{n_tasks(c)}</span></a>' for c in CADENCES)
    body = []
    for c in CADENCES:
        body.append(f'<section id="{c["key"]}"><h2>{c["name"]}</h2><p class="when">{h(c["when"])}. {n_tasks(c)} tasks.</p>')
        for g, ts in c["groups"]:
            body.append(f'<h3>{h(g)}</h3>')
            for t in ts:
                steps = "".join(f"<li>{h(s)}</li>" for s in t["steps"])
                body.append(f'''<details class="task" data-id="{t["id"]}"><summary>
<input type="checkbox" aria-label="Done: {html.escape(t["title"])}"><span class="tid">{t["id"]}</span><span class="tt">{h(t["title"])}</span><span class="meta">{h(t["time"])} · {h(t["tool"])}</span></summary>
<div class="tb"><p><b>Why</b> {h(t["why"])}</p><p><b>Steps</b></p><ol>{steps}</ol>
<p class="pass"><b>Pass</b> {h(t["pass_"])}</p><p class="fail"><b>If it fails</b> {h(t["fail"])}</p></div></details>''')
        body.append("</section>")
    base = "".join(f"<tr><td>{h(a)}</td><td>{h(b)}</td><td>{h(c)}</td></tr>" for a, b, c in BASELINE)
    rules = "".join(f"<li><b>{h(k)}:</b> {h(v)}</li>" for k, v in RULES)
    sc = "".join(f"<li><b>{h(k)}:</b> {h(v)}</li>" for k, v in SCORECARD)
    pr = "".join(f"<li>{h(p)}</li>" for p in PROMPTS)
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>SEO Checklist</title>
<style>
:root{{--bg:#F8F6F2;--card:#fff;--ink:#0a0a0a;--body:#52525B;--muted:#8C8279;--line:#E8E2D9;--gold:#F5B731;--green:#059669;--red:#DC2626}}
@media (prefers-color-scheme:dark){{:root{{--bg:#141311;--card:#1d1b18;--ink:#f5f2ec;--body:#c5beb3;--muted:#948b7f;--line:#322e28}}}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--body);font:16px/1.55 system-ui,-apple-system,Segoe UI,sans-serif}}
.wrap{{max-width:900px;margin:0 auto;padding:0 16px 80px}}
header{{padding:48px 0 16px}}h1{{color:var(--ink);font-size:clamp(28px,5vw,40px);margin:0 0 8px;line-height:1.15}}
h1 em{{font-style:normal;color:var(--gold)}}h2{{color:var(--ink);font-size:28px;margin:48px 0 4px}}h3{{color:var(--ink);font-size:13px;letter-spacing:.12em;text-transform:uppercase;margin:28px 0 10px}}
.when{{color:var(--muted);margin:0 0 8px}}code{{background:rgba(140,130,121,.15);padding:1px 5px;border-radius:5px;font-size:.88em;word-break:break-word}}
nav{{position:sticky;top:0;background:var(--bg);padding:10px 0;display:flex;gap:8px;flex-wrap:wrap;border-bottom:1px solid var(--line);z-index:5}}
nav a{{color:var(--ink);text-decoration:none;font-weight:700;font-size:14px;border:1px solid var(--line);background:var(--card);border-radius:99px;padding:6px 14px}}
nav a span{{color:var(--muted);font-weight:600}}
.box{{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 20px;margin:16px 0}}
table{{border-collapse:collapse;width:100%;font-size:14px}}td,th{{border-top:1px solid var(--line);padding:9px 10px;text-align:left;vertical-align:top}}th{{color:var(--muted);font-size:12px;letter-spacing:.08em;text-transform:uppercase;border-top:0}}
.task{{background:var(--card);border:1px solid var(--line);border-radius:12px;margin:8px 0}}
.task>summary{{list-style:none;cursor:pointer;padding:12px 14px;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}}
.task>summary::-webkit-details-marker{{display:none}}.task[open]>summary{{border-bottom:1px solid var(--line)}}
.tid{{font-weight:800;color:var(--gold);min-width:2.2em}}.tt{{color:var(--ink);font-weight:700;flex:1 1 220px}}.meta{{color:var(--muted);font-size:13px}}
input[type=checkbox]{{width:18px;height:18px;accent-color:var(--green);align-self:center}}
.task.done .tt{{text-decoration:line-through;opacity:.55}}
.tb{{padding:6px 18px 14px}}.tb p{{margin:10px 0 4px}}.tb b{{color:var(--ink);margin-right:6px}}.tb ol{{margin:4px 0 8px;padding-left:22px}}.tb li{{margin:4px 0}}
.pass b{{color:var(--green)}}.fail b{{color:var(--red)}}
footer{{color:var(--muted);font-size:13px;margin-top:40px}}
@media print{{nav{{display:none}}.task{{break-inside:avoid}}details>*{{display:block}}}}
</style></head><body><div class="wrap">
<header><h1>SEO <em>checklist</em></h1><p>{TOTAL} objective tasks: {", ".join(f"{n_tasks(c)} {c['name'].lower()}" for c in CADENCES)}. Baseline measured {BASELINE_DATE}.</p></header>
<nav>{nav}<a href="#baseline">Baseline</a><a href="#appendix">Scorecard</a></nav>
<div class="box"><p>{h(INTRO[0])}</p><ul>{rules}</ul><p class="when">Tick tasks as you go. Your ticks are saved in this browser only. Click a task to expand its steps.</p></div>
<h2 id="baseline">Baseline</h2><div class="box" style="overflow-x:auto"><table><tr><th>Metric</th><th>Baseline</th><th>Target</th></tr>{base}</table></div>
{"".join(body)}
<h2 id="appendix">Appendix: KPI scorecard definitions</h2><div class="box"><ul>{sc}</ul><p><b>The 10 AI prompts</b></p><ol>{pr}</ol></div>
<footer>Generated by scripts/build-seo-checklist.py. Edit the data there, not this file.</footer></div>
<script>
(function(){{var K="seo-checklist-v1",s={{}};try{{s=JSON.parse(localStorage.getItem(K)||"{{}}")}}catch(e){{}}
document.querySelectorAll(".task").forEach(function(t){{var id=t.dataset.id,c=t.querySelector("input");
if(s[id]){{c.checked=true;t.classList.add("done")}}
c.addEventListener("click",function(e){{e.stopPropagation()}});
c.addEventListener("change",function(){{t.classList.toggle("done",c.checked);s[id]=c.checked;try{{localStorage.setItem(K,JSON.stringify(s))}}catch(e){{}}}});}});}})();
</script></body></html>'''

if __name__ == "__main__":
    (ROOT / "docs/seo-checklist.md").write_text(to_md())
    (ROOT / "docs/seo-checklist.html").write_text(to_html())
    (ROOT / "docs/seo-checklist.notion.md").write_text(to_notion())
    print(f"{TOTAL} tasks: " + ", ".join(f"{n_tasks(c)} {c['name'].lower()}" for c in CADENCES))
    for c in CADENCES:
        print(f"  {c['name']}: " + ", ".join(f"{g} {len(ts)}" for g, ts in c["groups"]))
