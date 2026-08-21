# Keyword Map & Search Intent

Reference audit of every service, tool, and blog page's primary target keyword and search intent. Regenerate/re-audit this whenever pages are added or their `keywords` metadata changes — the check is mechanical (see method below) and should be re-run rather than hand-maintained from memory.

**Rule enforced:** no two pages across these 30 share the same primary keyword (the first entry in each page's `keywords` array). Confirmed clean as of this audit — see "Method" for how to re-verify. (Updated 2026-08-21: added `/blog/cold-email-compliance-guide` and `/blog/cold-email-vs-linkedin-outreach` from the content-gap analysis, primaries checked against all others, no collision. Updated 2026-08-19: added `/blog/b2b-outbound-benchmark-report-2026`, primary keyword checked against all others, no collision.)

## Search intent convention

| Page type | Intent | Why |
|---|---|---|
| `/services/*` | Commercial | Buyer is evaluating a paid service; keywords center on "agency", "services" |
| `/tools/*` | Transactional | Visitor wants to use a free tool right now; keywords are the tool's own name/action |
| `/blog/*` | Informational | Visitor wants to learn something; keywords are "how to" / concept-explainer phrasing |

## Services (Commercial) — 6 pages

| Page | Primary keyword |
|---|---|
| `/services/account-based-marketing` | account-based marketing agency |
| `/services/ai-lead-generation` | ai lead generation agency |
| `/services/cold-email` | cold email agency |
| `/services/linkedin-outreach` | linkedin outreach agency |
| `/services/personal-branding` | linkedin ghostwriting services |
| `/services/sales-intelligence` | icp mapping services |

## Tools (Transactional) — 9 pages

| Page | Primary keyword |
|---|---|
| `/tools/battle-card-generator` | competitor battle card generator |
| `/tools/case-study-generator` | free case study generator |
| `/tools/dm-angle-generator` | dm angle generator |
| `/tools/founder-presence-analyzer` | founder presence analyzer |
| `/tools/icp-builder` | icp builder tool |
| `/tools/lead-magnet-ideas` | lead magnet idea generator |
| `/tools/linkedin-optimizer` | linkedin profile optimizer |
| `/tools/posting-rhythm-builder` | linkedin posting rhythm builder |
| `/tools/roi-calculator` | roi calculator for cold outreach |

## Blog (Informational) — 15 pages

| Page | Primary keyword |
|---|---|
| `/blog/cold-email-compliance-guide` | cold email compliance |
| `/blog/cold-email-vs-linkedin-outreach` | cold email vs linkedin outreach |
| `/blog/b2b-outbound-benchmark-report-2026` | b2b outbound benchmark report |
| `/blog/3-second-rule-cold-outreach` | why cold emails get ignored |
| `/blog/agency-vs-in-house` | agency vs in-house sdr |
| `/blog/b2b-lead-gen-metrics` | b2b lead generation metrics |
| `/blog/cold-email-deliverability-guide` | cold email deliverability |
| `/blog/ecommerce-conversion-playbook` | ecommerce conversion rate optimization |
| `/blog/founder-personal-brand-linkedin` | founder personal brand |
| `/blog/icp-mapping-b2b` | icp mapping |
| `/blog/linkedin-outreach-sequences` | linkedin outreach sequence |
| `/blog/linkedin-profile-inbound-lead-machine` | why your linkedin profile matters more than posts |
| `/blog/predictable-b2b-lead-gen-engine` | b2b lead generation engine |
| `/blog/tam-trap-vague-targeting` | total addressable market vs total conversional market |
| `/blog/value-premium-lead-magnets` | how to create a lead magnet that converts |

## `/lp/*` vs `/services/*` cannibalization check

Programmatically diffed the full keyword arrays (every keyword, not just primary) of all 8 `/lp/*` vertical pages against all 6 `/services/*` pages: **zero exact overlaps**. This holds structurally — `/lp/*` pages target industry verticals (`b2b lead generation for nbfcs`, `lead generation for exporters india`, `lead generation for staffing agencies`, …) while `/services/*` pages target channels/methods (`cold email agency`, `linkedin outreach agency`, `icp mapping services`, …). Different axis of differentiation, no query overlap.

(Note: as of this audit there are 8 `/lp/*` pages and 6 `/services/*` pages, not the "3 and 5" some older checklists reference — the site grew since that count was written. Re-run the check below against the current file list if that changes again.)

## Issues found and fixed in this pass

Three blog posts had a tool's own primary/branded keyword phrase listed verbatim in their own `keywords` array (leftover from templated keyword generation, not intentional targeting) — removed from the blog post since the tool page already owns that exact phrase as its primary term:

- `/blog/3-second-rule-cold-outreach` had `"dm angle generator"` (primary term of `/tools/dm-angle-generator`)
- `/blog/tam-trap-vague-targeting` had `"icp builder tool"` and `"value proposition generator"` (from `/tools/icp-builder`)
- `/blog/value-premium-lead-magnets` had `"lead magnet idea generator"` (primary term of `/tools/lead-magnet-ideas`)

One service/blog secondary-keyword collision:
- `/services/cold-email` and `/blog/cold-email-deliverability-guide` both listed `"how to improve cold email deliverability"` — an informational "how to" phrase. Removed from the service page (commercial intent) and left on the blog post (informational intent), matching the intent convention above.

One near-duplicate *primary* term (not an exact string match, so the mechanical diff didn't catch it — found by manual review):
- `/blog/linkedin-profile-inbound-lead-machine`'s primary was `"linkedin profile optimization"`, nearly identical to `/tools/linkedin-optimizer`'s primary `"linkedin profile optimizer"`. Reordered the blog's keyword array to promote `"why your linkedin profile matters more than posts"` (already in its list, matches the post's actual narrative angle) to primary; `"linkedin profile optimization"` stays in the list as a secondary term.

Left as-is (acceptable, not cannibalization): a handful of shared *secondary* keywords between blog↔blog pairs on genuinely related topics (e.g. `"b2b targeting strategy"` shared by the ICP-mapping and TAM-trap posts) — normal topic-cluster overlap between related informational content, not two pages competing for the same primary term.

## Method (for re-auditing later)

```python
import re, glob

def extract_keywords(text):
    m = re.search(r'keywords:\s*\[(.*?)\]', text, re.DOTALL)
    return re.findall(r'"([^"]+)"', m.group(1)) if m else []

groups = {
    'service': sorted(glob.glob('app/services/*/page.tsx')),
    'tool': sorted(glob.glob('app/tools/*/page.tsx')),
    'blog': sorted(glob.glob('app/blog/*/page.tsx')),
    'lp': sorted(glob.glob('app/lp/*/page.tsx')),
}
all_kw = {f: extract_keywords(open(f).read()) for files in groups.values() for f in files}

# Primary-keyword uniqueness
primaries = [kws[0] for kws in all_kw.values() if kws]
dupes = {x for x in primaries if primaries.count(x) > 1}
print("Duplicate primaries:", dupes or "None")

# Full exact-match overlap, any position, any pair
files = list(all_kw.keys())
for i in range(len(files)):
    for j in range(i + 1, len(files)):
        overlap = set(all_kw[files[i]]) & set(all_kw[files[j]])
        if overlap:
            print(files[i], "<->", files[j], ":", overlap)
```
