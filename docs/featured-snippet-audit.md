# Featured-Snippet Structuring Audit

Programmatic audit of every FAQ answer sitewide against Google's featured-snippet format: a question heading paired with a tight, direct answer (roughly 40-60 words, though shorter direct answers are just as extractable). Run 2026-08-21, as part of the "start with all" SEO plan's item 4.

## Method

```python
import re, glob

files = sorted(glob.glob('app/**/page.tsx', recursive=True))
results = []
for f in files:
    text = open(f).read()
    for m in re.finditer(r'\{\s*question:\s*"(.*?)",\s*answer:\s*"(.*?)",?\s*\}', text, re.DOTALL):
        results.append((f, m.group(1), m.group(2)))
    for m in re.finditer(r'\{\s*q:\s*"(.*?)",\s*a:\s*"(.*?)",?\s*\}', text, re.DOTALL):
        results.append((f, m.group(1), m.group(2)))

# 1. Word-count distribution (flag anything over 60 words as too verbose)
# 2. Hedge-opener check (flag answers starting "it depends", "not really", etc. —
#    these bury the direct answer instead of leading with it)
# 3. Cross-check every page with FAQ content also calls buildFaqSchema (structural gap)
```

## Results

**79 FAQ items found sitewide**, across service pages, `/lp/*` vertical pages, `/b2b-lead-generation-{city}` pages, and blog posts.

| Length bucket | Count |
|---|---|
| Under 25 words | 30 |
| 25-40 words | 14 |
| 40-60 words | 35 |
| Over 60 words | 0 (after fixes below) |

**FAQPage schema coverage:** 0 pages found with visible FAQ content but no `buildFaqSchema` call — every page with an FAQ section already emits the schema (holds up the structured-data sweep done earlier this session).

## Issues found and fixed

**3 answers over the 60-word verbosity threshold**, all in the two blog posts just published as part of the content-gap work — trimmed to stay under 60 words without losing the substantive claim:
- `/blog/cold-email-compliance-guide` — "Does India's DPDP Act affect B2B cold email?" (64w → 51w)
- `/blog/cold-email-vs-linkedin-outreach` — "Which channel has a higher reply rate?" (61w → 54w)
- `/blog/cold-email-vs-linkedin-outreach` — "Is LinkedIn outreach more expensive than cold email?" (67w → 57w)

**1 hedge-opener answer**, buries the direct answer instead of leading with it, hurting snippet extractability:
- `/blog/agency-vs-in-house` — "Is an agency more expensive than an SDR long-term?" opened with "It depends on the horizon." Rewritten to lead with a direct claim ("Short-term, no... Long-term, it can flip.") before the same nuance that followed.

## Not flagged as issues

Answers under 25 words (30 of them, mostly on the `/b2b-lead-generation-{city}` pages) are not a problem under this criteria — short, direct answers are equally or more likely to be extracted verbatim into a snippet box than longer ones. Only verbosity (over ~60 words) and buried/hedged answers were treated as defects.

## Re-auditing later

Re-run the Method script above whenever new FAQ content is added. Both checks (word count, hedge-openers) are mechanical; the FAQPage-schema cross-check should also be re-run any time a new page adds visible FAQ content, since that gap is easy to introduce silently (schema added at page-creation time, then a later content edit adds an FAQ section without a matching `buildFaqSchema` call).
