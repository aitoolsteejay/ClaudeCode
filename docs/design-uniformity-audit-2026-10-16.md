# Font and colour uniformity audit, 2026-10-16

**Scope and method.** All 243 sitemap pages plus five extras (`/thank-you`, `/thankyou`, `/feedback`, `/jahnvijhaveri`, a 404 page), 248 in all, loaded in headless Chrome at 1440 px width against a local production build of master (`2f87d10`). The page was scrolled so reveal animations ran, and every visible text run was measured for font family, size, weight, text colour and the colour of the surface behind it (blended through any transparent layers). The source (451 files under `app/`, `components/`, `lib/`) was scanned for every hex colour, Tailwind palette class and font declaration. Nothing in the repo was changed.

**Not measured:** mobile width, hover and focus states, text on photos or gradients (5.5% of text, contrast unknowable), text inside the Calendly iframe, SVG-drawn text, and the OG image.

## Verdict

**Fonts: very uniform.** **Colours: the core palette is uniform; the drift is in the greys, in four template-level exceptions, and in one real contrast defect in the shared case study template.** Details and the fixes I would make are below. Nothing has been changed yet.

## Fonts

| Finding | Evidence | Verdict |
|---|---|---|
| One body font | Inter on 97.9% of all text, and it is the body font on all 248 pages. Self-hosted, loaded everywhere, no page falls back to a browser default (no Times, Arial or other unexpected family). | Consistent |
| Headings | Every heading on every page is Inter, weight 900, except the homepage hero (two-tone, see below). | Consistent |
| Fredoka for small uppercase labels | On 97 pages: all 32 blog posts, all 51 glossary entries, all 13 guides, plus the blogs hub. On none of the other 150 pages. Labels on services, case studies, landing pages and careers are Inter. It is 0.9% of text. | Deliberate (commit `6ba4ba8`) but a visible switch when you move from a blog post to a case study. Your call whether to keep. |
| Caveat handwriting | 3 pages (home, `/services/do-it-yourself`, one guide), 7 short runs ("12K+ meetings", "Respectfully, Teejay"). | Fine, deliberate accent |
| Code blocks | 9 pages (8 guides and `/myntmore-framework`) use the system monospace (`ui-monospace`), 1.2% of text. It is not a loaded font, so it looks different on Mac, Windows and Android. | Minor. Fix only if you want identical code blocks everywhere. |
| H1 size by template | 48 px (blog posts, glossary, job postings, 4 guides, 5 case studies), 60 px (hubs, 81 case studies, 8 guides, tools), 72 px (landing pages, 6 service pages, 1 guide), 83 and 69 px (cold email and LinkedIn service pages), 96 px (home). Same family and weight everywhere; size follows the template. | Consistent within most templates; guides (60/48/72) and case studies (60 vs 5 at 48) are mixed inside one template. |

## Colours that are consistent

- Six colours carry 90% of all text: `#52525B` (40%), `#6B6B6B` (17%), `#0A0A0A` (12.5%), `#71675E` (10%), `#3D3D3D` (8%) and white (1.4%).
- Page canvas is `#FFFFFF` on all 248 pages. Surfaces behind text: white 52%, `#F8F6F2` 31%, cream `#FEF9EC` 4%, dark `#0A0A0A` 2%.
- The primary call-to-action (gold pill, near-black bold text) is identical on 246 pages. Gold fill is `#F5B731` on 260 of 263 filled buttons.
- 98.7% of text on a flat background meets WCAG AA (the previous accessibility pass held), apart from the case study defect below.

## Colours that are not

**1. Five different "secondary text" greys.** Body paragraphs are `#52525B` (cool zinc grey) almost everywhere, small and muted text is `#71675E` (warm grey, the documented muted token), and in between sit `#6B6B6B` (neutral), `#3D3D3D` and, for breadcrumb links, `#5F564E`. 177 of 248 pages show four of these at once. The biggest single source is the **footer**: 82% of all `#6B6B6B` text is footer links, and the footer is on every page, so it is 17% of all text on the site. The page background and borders are warm (`#F8F6F2`, `#E8E2D9`) while body text `#52525B` is cool, which is why the greys feel slightly off against each other. `#71675E` has marginally better contrast than `#6B6B6B` (5.5:1 vs 5.3:1 on white, 5.1 vs 4.9 on `#F8F6F2`), so merging them is safe.

**2. Body paragraph colour differs by section.** `#52525B` for 91% of blog paragraphs, 97% on the case studies hub and 99% on landing pages, but only 42% in guides (33% `#3D3D3D`), 60% in the glossary (24% `#0A0A0A`) and 74% on tools (`#606060`).

**3. The tools pages are a separate colour system (documented in `app/globals.css`, kept on purpose so the ported tools keep their exact look).** All 9 tool pages use pure black headings `#000000` (site: `#0A0A0A`), muted grey `#606060` (site: `#71675E`) and a yellow `#FFC547` or `#FFC947` (site: `#F5B731`, about 28 to 30 apart in RGB). Hard to see side by side, but it is the one part of the site that is a different palette.

**4. Four near-blacks.** `#0A0A0A` is the standard (159 files). `#0F0F14` heads the rebuilt cold email and LinkedIn service pages (6 files). `#1A1A1A` and `#1A1A2E` appear in dark sections (17 and 13 files). `#000000` comes from the tools tokens.

**5. Two golds plus amber.** Brand gold `#F5B731` (81 files), tools yellow `#FFC947`/`#FFC547` (6 files and CSS variables), amber `#D97706` (44 files) and `#F59E0B` (6), and the text-safe `#A14A08` (119).

**6. Strays.** Homepage: `#6B7280` (Tailwind gray-500) on three text blocks and `#3A3A3A` for the second hero line. `/resources/guides/dos-and-donts-of-outreach`: `#6B6560` and `#6B655E`. About 15 near-white tints (`#FCFBF8`, `#FDFDFD`, `#FFFDF9`, `#FCFCFC`, `#FDFCFB` and others) on 8 to 15 pages each, next to the standard `#FFFFFF`, `#F8F6F2` and `#FEF9EC`. (336 distinct background colours behind text in total, but most are the intended per-industry accent tints on case studies.)

**7. Colours are written by hand, 6,400 times.** The source holds 294 distinct hex values, 128 of them used once. About 4,900 inline style objects carry hex colours, alongside 929 Tailwind palette-class uses (including `gray-400`/`500`/`600`/`700`, 116 uses in about 20 files, which are cool greys from yet another scale) and 157 arbitrary-value hex classes. There are no named tokens for the core palette; `lib/colors.ts` only covers accent text shades. That is why the drift above exists and why it will keep coming back.

**8. Contrast defect in the shared case study template (the only real accessibility failure).** `components/case-studies/CaseStudyLayout.tsx` sets text colour to the raw accent in six places (the tag pill, the four numbered step labels, "Myntmore's role", and the metric values). The convention in `lib/colors.ts` is to pass accents through `textTone()` for text on light surfaces. Because of this, 71 case study pages have text below WCAG AA, for example green `#10B981` at 2.5:1, sky `#0EA5E9` at 2.8:1 and orange `#F97316` at 2.8:1 on white. Everything else that fails is not a real problem: visually hidden screen-reader labels and the decorative "/" in breadcrumbs.

## What I would change, in order

| # | Change | Size | Effect |
|---|---|---|---|
| 1 | Route the six accent text colours in `CaseStudyLayout.tsx` through `textTone()` | 1 file, 6 lines | Fixes all 71 case study pages; the accent look stays, text gets the darker shade of the same hue |
| 2 | Replace `#6B6B6B` with `#71675E` (footer, hero, services blocks and about 15 other files) | Mechanical, 19 files | Removes the biggest grey split; footer matches the rest of the site |
| 3 | Add named tokens (ink, body, muted, border, surface, gold, gold-text) to `lib/colors.ts` and use them in the shared components first (Footer, Navbar, Breadcrumbs, layout templates) | Medium | Stops further drift |
| 4 | Decide guides and glossary paragraph colour (`#3D3D3D` / `#0A0A0A` vs `#52525B`) and make it one value | Small, needs your call | Same reading colour across hubs |
| 5 | Heads of the cold email and LinkedIn service pages from `#0F0F14` to `#0A0A0A` | 2 files | Removes the fourth near-black |
| 6 | Homepage and dos-and-donts strays to the standard greys | 2 files | Removes one-offs |
| 7 | Decide the tools exception (keep as documented, or move to the site palette) | Needs your call | Either way, write the decision down |
| 8 | Decide Fredoka labels (keep in the content hub only, extend sitewide, or drop) | Needs your call | Label typography either consistent or consciously split |
| 9 | Optional: self-host one monospace font for code blocks | Small | Identical code blocks on every device |

Items 1, 2, 5 and 6 are safe, mechanical and visually near-invisible except for the contrast fix in 1. Items 4, 7 and 8 are design decisions.

Raw per-page measurements and the extraction script are in the session scratchpad (`ui/desktop.jsonl`, `ui/extract.mjs`); I can move the script into `scripts/` as a repeatable `npm run audit:design` if you want it.
