# Myntmore Website

The marketing website for **Myntmore** — a Mumbai-based, AI-powered B2B outbound agency (cold email, LinkedIn outreach, ABM). Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS, deployed on Vercel at [myntmore.com](https://www.myntmore.com).

This is a large, content-heavy marketing site: **174 page routes** (`page.tsx` files — two of them are dynamic and expand to more URLs) plus 15 API route handlers, as of 2026-10-09. It spans service pages, 9 free interactive AI tools, a 30-term glossary, 29 blog posts, 26 case studies, 9 vertical-specific landing pages, 8 city pages, and several standalone or unlisted pages (a live Mentimeter-style Q&A tool, digital vCard pages, private pricing pages, a prospect-facing cold-emailing overview, a generated site inventory). It is actively developed by iterating directly in production-adjacent branches with heavy attention to SEO/AEO/GEO hygiene — see [SEO / AEO / GEO governance](#seo--aeo--geo-governance) below before adding or changing pages.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Content architecture](#content-architecture)
  - [Marketing & company pages](#marketing--company-pages)
  - [Services](#services)
  - [Vertical landing pages (`/lp/*`)](#vertical-landing-pages-lp)
  - [City pages](#city-pages-b2b-lead-generation-city)
  - [Blog, guides, glossary](#blog-guides-glossary)
  - [Case studies](#case-studies)
  - [Free tools (`/tools/*`)](#free-tools-tools)
  - [Pricing (`/plans/*`)](#pricing-plans)
  - [Misc standalone pages](#misc-standalone-pages)
- [Shared components & design system](#shared-components--design-system)
- [Data layer (`lib/`)](#data-layer-lib)
- [API routes](#api-routes)
- [Database (Supabase)](#database-supabase)
- [Environment variables](#environment-variables)
- [SEO / AEO / GEO governance](#seo--aeo--geo-governance)
- [Redirects, sitemap & robots](#redirects-sitemap--robots)
- [Conventions & gotchas](#conventions--gotchas)
- [Deployment](#deployment)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router, `app/` directory) |
| Language | TypeScript |
| Styling | Tailwind CSS 3, plus per-component inline styles for brand hex values (see [design system](#shared-components--design-system)) |
| UI primitives | A small [shadcn/ui](https://ui.shadcn.com/)-style set in `components/ui/` (Radix UI underneath: `@radix-ui/react-select`, `-slider`, `-tooltip`, `-label`, `-slot`) |
| Icons | `lucide-react` |
| Charts | `recharts` (used in a couple of the free tools) |
| AI | Google Gemini (`gemini-2.5-flash`), called server-side from `app/api/**/route.ts` — through the `@google/genai` SDK in most routes, and through the REST endpoint in `/api/gemini` and `/api/tools/profile-optimizer` |
| Database | Supabase (Postgres) via `@supabase/supabase-js` — a secondary lead log for the gated tools plus the live Q&A feature, see [Database](#database-supabase) |
| PDF / image export | `jspdf` (+ `html2canvas` in the ROI Calculator) — the ROI Calculator and LinkedIn Profile Optimizer export results as a PDF; both libraries are dynamically imported on export |
| Toasts | `sonner` |
| Forms / CRM / booking | Zoho Forms and Zoho Campaigns — plain HTML `<form method="POST">`s that post straight to Zoho (no server code in this repo handles them) — and Calendly for call booking |
| Analytics | `@vercel/analytics`, plus Google Analytics 4, Meta Pixel and Ahrefs Analytics, all loaded in `app/layout.tsx` (the last three via `next/script`, `afterInteractive`) |
| Hosting | Vercel (implied by `next.config.js` conventions and the redirect/rewrite setup; no separate IaC in this repo) |

Node package manager: npm (there's a committed `package-lock.json`).

## Getting started

```bash
npm install      # or `npm ci` for an exact, lockfile-faithful install
npm run dev      # next dev — http://localhost:3000 by default (use `npm run dev -- -p 3100` to change the port)
```

Next.js 14 needs Node 18.17 or newer. No environment variables are required to build or start the site: the Supabase client falls back to a placeholder project, and the Gemini and Menti features simply report an error / fail closed until their variables are set (see [Environment variables](#environment-variables)).

Scripts (from `package.json`):

```bash
npm run dev      # next dev
npm run build    # runs `prebuild` first, then next build
npm run start    # next start (serve the production build)
```

`npm run build` automatically runs a `prebuild` step (`node scripts/generate-site-map.mjs`) that regenerates `app/site-audit/data.json` — the page inventory behind the unlisted `/site-audit` page (see [Redirects, sitemap & robots](#redirects-sitemap--robots)). It prints `[unchanged]` when nothing changed; when pages are added, removed or re-linked the file changes and the regenerated copy should be committed with that work.

There is no test suite or linter script configured — the closest things to CI gates in this repo are:
- `npx tsc --noEmit --incremental false` (typecheck). `tsconfig.json` has `incremental: true` and `tsconfig.tsbuildinfo` is tracked in git, so a plain `npx tsc --noEmit` rewrites that file; the extra flag keeps the working tree clean.
- `npm run build` (full production build — catches most real breakage; it also type-checks)
- The mechanical SEO checks described in `docs/keyword-map.md` (keyword-collision) and `docs/featured-snippet-audit.md`

Run the first two before pushing anything non-trivial.

### A note on the dev server

This project has occasionally hit two distinct, easy-to-conflate issues during long sessions:
1. **`.next` webpack-cache corruption** from a build and a dev server touching the same `.next` directory — fixed with `rm -rf .next` and a restart.
2. **A zombie `next dev` process** left bound to the dev port, silently serving a stale pre-edit module graph even after the terminal/tool that started it appears to have stopped. Find it and kill it before restarting:
   ```bash
   lsof -nP -iTCP:3100 -sTCP:LISTEN
   kill -9 <pid>
   ```
   If you see a genuinely inexplicable build error that `tsc --noEmit` and Prettier both say isn't real, suspect this before anything else.

## Project structure

```
app/                          Next.js App Router — one folder per route (page.tsx + optional *Client.tsx)
  api/                         Server route handlers (Gemini calls, lead-magnet tool logic, Menti, vCards)
  components/                  Sitewide shared components (Navbar, Footer, Hero, schema/JSON-LD helpers, etc.)
  <route folders>/             174 page.tsx routes — see "Content architecture" below
  layout.tsx, page.tsx         Root layout (font, sitewide metadata, Organization JSON-LD, analytics scripts) + homepage
  globals.css                  Tailwind base + every hand-written animation/utility class used sitewide
  sitemap.ts, robots.ts        sitemap.xml (a hand-maintained URL list) / robots.txt (see below)
  og-image.png/route.tsx       Route handler that renders the sitewide Open Graph image at /og-image.png
  site-audit/                  Unlisted page inventory; renders the generated data.json (see "Redirects, sitemap & robots")
  not-found.tsx                Custom 404

components/                    Feature-scoped React components, imported by one or a few app/ routes
  ui/                           shadcn/ui-style primitives (button, card, select, slider, tooltip, ...)
  pricing/                      GrowthPlansPricing.tsx — the one component powering all three /plans/* pages (+ OrbitHero.tsx, the planet hero)
  glossary/                     GlossaryTerm.tsx — the one component powering all 30 glossary term pages
  case-studies/                 Shared case-study page chrome
  tools/                        One subfolder per free tool's client-side UI + shared/ (LeadGate, RelatedTools)

lib/                            Non-visual shared logic (see "Data layer" below)

public/                         Static assets: logos, client logos, photos, videos, llms.txt

scripts/
  generate-site-map.mjs         Build-time generator for app/site-audit/data.json (runs automatically as `prebuild`)

supabase/
  schema.sql                    SQL for the `leads` table (every gated free tool) and the `menti_responses` table (live Q&A)

docs/                           Living SEO/content operations docs (see "SEO / AEO / GEO governance")

HANDOFF.md, MYNTMORE_MANUAL.md  Older long-form docs. HANDOFF.md dates from the first build of the homepage and is partly out of
                                date (components, stats, deploy flow); this README reflects the current code. MYNTMORE_MANUAL.md is a
                                separate full user manual — check it against the code before relying on a specific detail.
myntmore-ai-visibility-checklist.{md,html}   A standalone checklist for getting the brand cited by AI assistants (not used by the app)

.claude/                        Gitignored — any local Claude Code skills/config live only on a developer's machine, not in the repo
```

## Content architecture

The site is organized less like a typical small marketing site and more like a **content system**: several page *types* are each driven by one shared component + a data file, so adding a new instance (a new glossary term, a new case study, a new city) means adding data, not new UI code. Understanding which pages are "templated" vs. fully bespoke is the fastest way to orient in this codebase.

### Marketing & company pages

Bespoke, hand-built pages, each its own `app/<slug>/page.tsx` (occasionally with a co-located `*Client.tsx` for interactive parts):

- `/` — homepage (`app/page.tsx`), composed from the shared section components in `app/components/`, in this order: `Hero`, `LogoStrip`, `WhoWeHelp`, `Industries`, `Services`, `SystemFlow`, `BenefitsMarquee`, `Testimonials`, `Promise`, `FAQ`, `AskYourAI`, `CTABanner` (plus `Navbar`, `Footer`, `ReelWidget` and the switched-off `EventPopup`). `Results.tsx` and `HowItWorks.tsx` still exist but are not rendered on any page — note that the Hero's secondary "See Our Results" button links to `#results`, the id that lives inside `Results.tsx`.
- `/about-us`, `/contact-us`, `/who-this-is-for`, `/how-to-choose-an-outbound-agency`, `/myntmore-framework`, `/dos-and-donts-of-outreach`
- `/careers` — the hub, plus six role pages under `/careers/<role>` (each emits `JobPosting` JSON-LD with a `validThrough` date, so re-check those dates when a role is extended or closed)
- `/events` (data in `lib/events-data.ts`) and `/events/predictable-pipeline-webinar` (the one event detail page)
- `/agency-vs-in-house` — a legacy path whose `page.tsx` calls `permanentRedirect("/blog/agency-vs-in-house")` (see [Redirects, sitemap & robots](#redirects-sitemap--robots)); the real content is the blog post
- `/founder-meeting` — the page that embeds the Calendly widget; it is the destination of the primary "Book a Call" CTAs (navbar, footer and hero — on `/services/do-it-yourself` the navbar and footer CTAs link straight to a Calendly URL instead) and sends the visitor to `/thankyou` when a booking completes. `/1-on-1-consultation` is a separate organic-search landing page: static copy whose buttons link to `/founder-meeting` (it has no Calendly embed of its own)
- `/newsletter-subscribe`, `/feedback`, `/privacy-policy`
- `/thank-you` and `/thankyou` — **both exist** (post-conversion confirmation pages; `/thank-you` is the redirect target of the Zoho lead forms, `/thankyou` is where the Calendly widget sends visitors after a booking); check before assuming either is dead code or safe to remove
- `/careers-and-job-guide`, `/education-guide` — long-form guide-style pages aimed at students/early-career audiences (also linked from `llms.txt`); both are `noindex`
- `/instagram-resources/<slug>` — seven guide pages originally made as Instagram bio-link destinations (there is no index page at `/instagram-resources`); they are in the sitemap and surfaced alongside the other guides
- `/cold-emailing-package` — a private, prospect-facing visual overview of the cold-email package (`ProcessExplorer.tsx`, `FlowVisual.tsx`); `noindex`, not in the sitemap, nav or footer, and withheld from the `/site-audit` inventory

### Services

`/services` is the index; each of the 7 services has its own page under `/services/<slug>`:
LinkedIn Outreach & Automation, Cold Email Infrastructure, ICP Mapping & Lead Scoring, AI Lead Generation, Account-Based Marketing, Personal Branding, GTM Strategy — plus a "Do It Yourself" variant at `/services/do-it-yourself`. There's also a standalone `/marketing-automation` and `/seo` page (positioned as adjacent/complementary services, not in the main 7).

### Vertical landing pages (`/lp/*`)

9 industry-specific paid-traffic landing pages, each a `page.tsx` + `*Client.tsx` pair with its own hero, stat strip, and CTA copy tailored to the vertical:

`agencies-it`, `agency-partners`, `financial-services`, `fundraising`, `insurance`, `manufacturers-exporters`, `pharma`, `recruitment-firms`, `saas-founders`.

Six of them (`agencies-it`, `financial-services`, `insurance`, `manufacturers-exporters`, `pharma`, `recruitment-firms`) have a matching group of vertical [case studies](#case-studies).

### City pages (`/b2b-lead-generation-{city}`)

8 pages — Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad — each with city-specific industry context (e.g. Mumbai's copy leads with BFSI/media), but sharing structure, `LocalBusiness` schema, and FAQ patterns. **Not separate offices** — Myntmore serves all of India from Mumbai; these pages are local-market-context content, not location pages, and the copy is careful to say so (see `llms.txt`).

### Blog, guides, glossary

- **Blog** (`/blog/*`, 29 posts; there is no `/blog` index page — the index is `/resources/blogs`) — each post is its own `page.tsx` (mostly static JSX, not MDX). Several share an identical "3-stat-strip with source citations" block near the top (grid layout — was fixed for mobile in `sm:grid-cols-3`, see git history for the pattern).
- **Guides** (`/resources/guides`) — a hand-written index (`app/resources/guides/page.tsx`) of 13 guide-style pages gathered from across the site: `/dos-and-donts-of-outreach`, `/how-to-choose-an-outbound-agency`, `/blog/agency-vs-in-house`, the seven `/instagram-resources/*` guides, `/careers-and-job-guide`, `/education-guide`, and the one guide that actually lives under this path, `/resources/guides/ai-tech-stack-jewellery` (106 tools across 14 categories; a single client component with search and filters). Add a new guide by adding an entry to that list. `app/components/GuideTemplate.tsx` exists but no page currently imports it.
- **Glossary** (`/resources/glossary/<term>`, 30 terms) — every term page is `<GlossaryTerm ... />` (from `components/glossary/GlossaryTerm.tsx`) with per-term content passed as props/data. This is the cleanest example of the "one component, many pages" pattern in the repo — **always extend this component or its data, never fork it**, when adding a 31st term.
- `/resources`, `/resources/blogs`, `/resources/tools`, `/resources/feed` — index/hub pages tying the above together.
- The 2026 benchmark report (`/blog/b2b-outbound-benchmark-report-2026`) is treated as an evergreen, periodically-refreshed asset (aggregate reply-rate/inbox-placement/time-to-meeting stats) — its value depends on staying current, per `docs/seo-aeo-geo-cadence.md`.

### Case studies

`/case-studies` is the index (`CaseStudiesClient.tsx`); 26 individual pages under `/case-studies/<slug>`: six older general ones (`saas-series-a`, `professional-services-linkedin`, `ecommerce-conversion-playbook`, `founder-personal-brand-linkedin`, `predictable-b2b-lead-gen-engine`, `uk-pharma-qualified-meetings`) and 20 vertical ones named `<vertical>-<country>-<topic>` (e.g. 5 pharma case studies across India/USA/UAE/Singapore/France, plus agencies-it, financial-services, insurance, manufacturers-exporters and recruitment). The 20 vertical pages are `noindex` and left out of the sitemap — they are reachable through internal links but not indexed — while the six older ones are indexed.

`/case-studies/<filter>` is one of the two dynamic routes in the app (`app/case-studies/[filter]/page.tsx`, rendered on demand): ten shareable industry-filter URLs that render the index pre-filtered — `pharma`, `saas`, `professional-services`, `ecommerce-tech`, `b2b-founder`, `agencies-it`, `financial-services`, `insurance`, `manufacturers-exporters`, `recruitment-staffing`. The slug list lives in `lib/case-study-filters.ts` (`CASE_STUDY_FILTERS`); each filter gets its own title, description and canonical, all ten are in the sitemap, and any other slug — including `all` — returns 404. Real case-study folders win over `[filter]` because static route segments take precedence.

Real client results only — `docs/content-gaps.md` and the cadence doc are explicit that **no fabricated stats** are allowed; a new offering with no track record yet gets honest "new, no data yet" framing instead.

### Free tools (`/tools/*`)

9 lead-magnet tools (eight AI-powered, plus the ROI Calculator), each a page under `/tools/<slug>` with a client component next to it and its UI pieces under `components/tools/<tool>/`:

| Tool | Page | Server route |
|---|---|---|
| ROI Calculator | `/tools/roi-calculator` | none — the calculation runs in the browser |
| ICP Builder & Value Proposition Generator | `/tools/icp-builder` | `/api/gemini` (shared proxy; the prompts are built client-side in `components/tools/icp-builder/lib/`) |
| LinkedIn Profile Optimizer | `/tools/linkedin-optimizer` | `/api/tools/profile-optimizer` |
| DM Angle Generator | `/tools/dm-angle-generator` | `/api/tools/dm-angles` (+ `/regenerate`) |
| Competitor Battle Card Generator | `/tools/battle-card-generator` | `/api/tools/battle-card-generator` (two Gemini calls: Google-Search-grounded research, then structuring) |
| Case Study & Proposal Generator | `/tools/case-study-generator` | `/api/tools/case-study-generator` |
| Lead Magnet Idea Generator | `/tools/lead-magnet-ideas` | `/api/tools/lead-magnet-ideas` |
| Posting Rhythm Builder | `/tools/posting-rhythm-builder` | `/api/tools/posting-rhythm` |
| Founder Presence Analyzer | `/tools/founder-presence-analyzer` | `/api/tools/founder-presence` |

`lib/tools-registry.ts` is the **single source of truth** for each tool's name/href/tagline, consumed by the "Try this next" cross-link section every tool page shows — update the registry, not each page individually, when a tool's name or URL changes.

Every tool gates its output behind `components/tools/shared/LeadGate.tsx` (first name, last name, designation and email are required; company, phone and LinkedIn URL are optional). For the ROI Calculator the calculator itself is free and only the PDF export is gated, through `components/tools/roi-calculator/LeadGateModal.tsx`. On submit, `LeadGate` posts the details to that tool's own Zoho form through a hidden iframe (the source-to-form map sits at the top of the file) and logs a row to Supabase (see [Database](#database-supabase)), whose `id` the tool later uses to attach what the visitor typed and what the AI generated.

`/tools/dm-angle-generator` is a special case: the page itself is rendered locally (`app/tools/dm-angle-generator/`, backed by `/api/tools/dm-angles`), but `next.config.js` also rewrites everything *under* it (`/tools/dm-angle-generator/:path*`) to an external Lovable-hosted app, and `app/robots.ts` disallows that subtree. The exact-path rewrite in `next.config.js` never takes effect, because the local page matches first.

### Pricing (`/plans/*`)

`/plans/[code]` is one of the two **dynamic routes** in the app (the other is [`/case-studies/[filter]`](#case-studies)), rendered on demand — resolving `mars` (USD/international), `earth` (INR/Indian), and `neptune` (a 3rd USD variant) via a lookup `Record` in `app/plans/[code]/page.tsx`. All are unlisted (`robots: noindex`, not in any nav/footer/sitemap) and share 100% of their UI via `components/pricing/GrowthPlansPricing.tsx`, which takes `currencyPrefix`/`currencySuffix`/`prices` as props. The URLs are intentionally region-blind codes rather than `/international-pricing` / `/indian-pricing` (old URLs, and the earlier `alpha`/`beta` codes, all 308-redirect to the current ones — see `next.config.js`).

To add another pricing variant, add a key to the `PLANS` record in `app/plans/[code]/page.tsx` (needs all 5 `prices` fields: `starter`, `growth`, `leadGen`, `coldEmail`, `automation`) — do not create a new page.

### Misc standalone pages

- `/menti` + `/menti/room` — a small live, real-time Q&A/polling feature (Supabase-backed, `menti_responses` table with Realtime) used at in-person events/talks. `/menti` is the audience form (one answer, remembered in `localStorage`); `/menti/room` is the presenter view — a live list of answers, an AI "gist of the room" (`/api/menti/gist`) and a "Reset room" button (`/api/menti/reset`). The room page has its own lightweight auth (`lib/mentiAuth.ts`, gated by `MENTI_ADMIN_PASSWORD`) and is rendered on demand because it reads the auth cookie. Both pages are `noindex`.
- `/tejasjhaveri`, `/jahnvijhaveri`, `/enwilfernandes` — individual digital business-card pages for team members, each pairing with an `app/api/vcard/<name>/route.ts` endpoint that serves a downloadable `.vcf` (so a phone's native "Add to Contacts" flow works, which a static file's content-type wouldn't reliably trigger).
- `/workshop` — a thin `iframe` wrapper around an external app; deliberately `noindex`ed since it has no unique content of its own.
- `/sitemap` — a **human-readable** HTML sitemap page (distinct from the machine-readable `sitemap.xml` generated by `app/sitemap.ts`).
- `/site-audit` — an unlisted (`noindex`, orphan by design) inventory of every page: whether it is reachable by following internal links from the homepage, whether it is `noindex`, and whether it is in the XML / HTML sitemaps, plus the legacy redirects and the rewrites (the generated JSON also lists the API routes). It renders `app/site-audit/data.json`, which `scripts/generate-site-map.mjs` regenerates on every build (see [Redirects, sitemap & robots](#redirects-sitemap--robots)).

## Shared components & design system

Brand tokens (used as inline `style` hex values throughout, *not* as Tailwind theme colors, except where noted):

| Token | Hex |
|---|---|
| Cream (background) | `#F8F6F2` |
| Near-black (text) | `#0A0A0A` |
| Gold (primary accent) | `#F5B731` |
| Tan (borders) | `#E8E2D9` |
| Body text | `#52525B` |
| Muted text | `#8C8279` |

Secondary accent rotation (used for tiered/categorized content — service icons, tier cards, table sections, industry cards): Blue `#3B82F6`, Purple `#7C3AED`, Orange `#F97316`, Teal `#14B8A6`, Green `#10B981`, alongside the Gold above. `app/components/Industries.tsx` is the canonical source of this 6-color rotation.

Font: Inter, sitewide (no per-page font switching).

Key shared components (`app/components/*.tsx`, imported across many routes — treat changes here as high-blast-radius):

- **`Navbar.tsx`** — fixed header, desktop dropdown megamenus (Services/Resources) + mobile accordion drawer. Data-driven from `SERVICE_LINKS`/`RESOURCE_LINKS`/`NAV_LINKS` arrays at the top of the file.
- **`Footer.tsx`** — sitewide footer, imported by (effectively) every page via layout.
- **`InnerLayout.tsx`** — the standard page content wrapper (max-width, padding) most `page.tsx` files render into.
- **`Breadcrumbs.tsx`** — visible breadcrumb trail **and** emits `BreadcrumbList` JSON-LD via `lib/schema.ts`; present on about 92% of pages (169 of the 184 URLs in a full crawl on 2026-10-09; the homepage and a few utility/unlisted pages — thank-you, feedback, menti, plans, workshop, site-audit, cold-emailing-package, founder-meeting, the two student guides — don't have it).
- **`FadeIn.tsx`** — the sitewide scroll-reveal wrapper (`IntersectionObserver` + a `.reveal`/`.reveal-visible` CSS class pair in `globals.css`). Respects `prefers-reduced-motion` at the CSS level. Note that wrapped content is server-rendered with `opacity: 0` and only becomes visible after hydration, once the element scrolls into view.
- **`JsonLd.tsx`** — renders a `<script type="application/ld+json">` from a schema object built by `lib/schema.ts`.
- **`LeadCaptureForm.tsx`** / **`NewsletterForm.tsx`** — generic lead/email capture forms used outside the tools' dedicated `LeadGate`.
- **`ReelWidget.tsx`** — the floating bottom-right autoplay Instagram-reel promo, homepage only (appears after a 5s delay or 50% scroll, dismissible, muted by default; plays `public/videos/homepage-reel.mp4`).
- **`EventPopup.tsx`** — a similar fixed-position, timed promo for upcoming events. It is currently switched off by `POPUP_ENABLED = false` in the file (re-enable it when a live event is scheduled in `lib/events-data.ts`).
- **`StatTicker.tsx`** — the count-up-on-scroll-into-view number animation used for stats on the about, services, careers and case-study pages and a few guides (the homepage hero and the pricing page use their own counters). It animates the **first number** in the string it is given and keeps whatever surrounds it verbatim (`"$120M+"` counts `$0M+` → `$120M+`), and its last frame is exactly the original string. Because only the first run of digits is animated, don't pass it grouped values such as `1,74,999` or `30,000+` (they would count `0,74,999` → `1,74,999`); for those use the approach in the pricing page's `AnimatedPrice` (see [conventions](#conventions--gotchas)).
- **`Testimonials.tsx`** — CSS `@keyframes` marquee (not JS-driven), pauses on hover, respects reduced motion.
- Present in `app/components/` but **not currently imported by any page**: `Results.tsx`, `HowItWorks.tsx`, `UpcomingEvents.tsx`, `InstagramEmbed.tsx`, `GuideTemplate.tsx`. Check before building on them, and delete them if they are genuinely retired.

`components/pricing/GrowthPlansPricing.tsx` and `components/glossary/GlossaryTerm.tsx` are the two purest examples of the "one component, N pages via props/data" pattern — see [Content architecture](#content-architecture) above.

## Data layer (`lib/`)

| File | Purpose |
|---|---|
| `schema.ts` | `SITE_URL`, the sitewide `organizationSchema` (rendered in the root layout) and the JSON-LD builders: `buildLocalBusinessSchema`, `buildFaqSchema`, `buildServiceSchema`, `buildWebApplicationSchema`, `buildDefinedTermSchema`, `buildBreadcrumbSchema`, `buildWebsiteSchema`, `buildHowToSchema`, `buildArticleSchema`, `buildEventSchema`, `buildJobPostingSchema`. Every new page should use whichever of these fits its content type — see the "Triggered" checklist in `docs/seo-aeo-geo-cadence.md`. |
| `tools-registry.ts` | Single source of truth for the 9 free tools' slug/name/href/tagline (see [Free tools](#free-tools-tools)). |
| `faq-data.ts` | Shared FAQ content used by the `FAQ.tsx` component / `buildFaqSchema`. |
| `events-data.ts` | Data backing `/events` and `EventPopup.tsx` (`EVENTS` plus the `isUpcoming` helper). |
| `case-study-filters.ts` | `CASE_STUDY_FILTERS` (label + URL slug for the ten industry filters) and the slug/label helpers behind `/case-studies/[filter]`. |
| `tool-social-metadata.ts` | OG/social preview metadata specific to the tools. |
| `mentiAuth.ts` | Password gate for the `/menti/room` admin flow: the session cookie (`menti_admin`) is an HMAC of a fixed message keyed by `MENTI_ADMIN_PASSWORD`, compared in constant time. Fails closed — with no password configured nothing validates. |
| `rateLimit.ts` | `rateLimit(key, limit, windowMs)` + `getClientIp(req)` — an in-memory sliding-window limiter (per server instance, so best-effort on serverless). Used by `/api/gemini` and `/api/menti/auth`. |
| `supabase.ts` | Supabase client init (reads `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`; falls back to a placeholder project when they are unset so importing it never throws). |
| `utils.ts` | Generic helpers (the usual `cn()`-style class merge helper, etc., backing `components/ui/*`). |

## API routes

All under `app/api/`, all Next.js Route Handlers (`route.ts`) — 15 in total. Every route that calls Gemini uses the `gemini-2.5-flash` model and reads the key from `GEMINI_API_KEY`.

- `gemini/route.ts` — the shared Gemini proxy used by the ICP Builder, whose prompts are built in the browser. `POST { prompt, systemPrompt? }` → `{ result }`. It rejects requests that identify themselves as cross-site (`Sec-Fetch-Site: cross-site`, or an `Origin` whose host differs from `Host`) — requests carrying neither header are not rejected — caps `prompt` at 30,000 characters and `systemPrompt` at 2,000, and is rate limited to 40 requests per 10 minutes per IP.
- `tools/{battle-card-generator,case-study-generator,founder-presence,dm-angles,lead-magnet-ideas,profile-optimizer,posting-rhythm}/route.ts` — one per AI tool (see the table under [Free tools](#free-tools-tools)). Each validates its required inputs and length-caps most of them, builds the prompt server-side and asks Gemini for JSON — through `responseSchema` in most routes, while `profile-optimizer` parses the JSON out of a fenced block instead. `dm-angles` also has a `regenerate/route.ts` sub-route, and `battle-card-generator` makes two Gemini calls, the first with Google Search grounding.
- `menti/{auth,reset,gist}/route.ts` — backs the `/menti/room` live Q&A admin flow. `auth` checks the password (8 attempts per 15 minutes per IP) and sets the `menti_admin` cookie (HttpOnly, SameSite=Lax, `Secure` in production, 7 days; `DELETE` clears it). `gist` and `reset` return 401 without a valid cookie.
- `vcard/{tejas-jhaveri,jahnvi-jhaveri,enwil-fernandes}/route.ts` — serves each person's `.vcf` contact card with the correct content-type.

Rate limiting (`lib/rateLimit.ts`) is an in-memory sliding window kept per server instance, so on serverless it is best-effort per warm instance rather than a hard global cap. It is applied to `gemini` and `menti/auth` only.

Outside `/api`, `app/og-image.png/route.tsx` is also a route handler: it renders the sitewide Open Graph image served at `/og-image.png`.

## Database (Supabase)

Two tables, both defined in `supabase/schema.sql` (safe to re-run — it's idempotent: `create table if not exists`, `add column if not exists`, policies dropped/recreated). Row-level security is enabled on both, and the browser talks to them directly with the public anon key.

**`public.leads`** — the secondary record of every gated-tool session. The anonymous roles get an INSERT policy and an UPDATE policy; there is deliberately no SELECT or DELETE policy, so only the service role (or the Supabase dashboard) can read or delete rows.

Flow: `LeadGate.tsx` inserts a row at submission time (contact fields populated, `inputs`/`outputs` empty) and reads the new row's `id` back from the insert; once the tool actually runs, the same page `update`s that row in place by `id` with what the visitor typed (`inputs`) and what the AI generated (`outputs`). So one row = one full session. `source` is constrained by a `check` constraint in `schema.sql` (`profile_optimizer`, `posting_rhythm_builder`, `lead_magnet_ideas`, `dm_angle_generator`, `founder_presence_analyzer`, `roi_calculator`, `icp_builder`); keep that list in sync with the `LeadSource` union in `components/tools/shared/LeadGate.tsx` when adding a tool. The ROI Calculator writes its row when the visitor unlocks the PDF export. Failures are only logged to the browser console (`Supabase lead insert failed` / `Supabase inputs/outputs update failed`) — the visitor is never blocked.

**`public.menti_responses`** — the live Q&A answers (`id`, `created_at`, `answer`). The anonymous roles may INSERT (1–500 characters), SELECT and DELETE, so `/menti/room` can read the list and subscribe to new rows through Realtime (the table is added to the `supabase_realtime` publication) and the reset button can clear it; there is no UPDATE policy. Because the anon key is public, the room password only gates the room UI and the AI/reset API routes, not the table itself — `schema.sql` documents this as an accepted trade-off for anonymous, low-sensitivity event answers.

Zoho CRM is the primary lead record for each tool (a dedicated form per tool, or a shared one); Supabase is explicitly the *secondary* record.

## Environment variables

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase client init (`lib/supabase.ts`). If unset, the client points at a placeholder project, so every Supabase call fails (and is only logged to the console) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase client init |
| `GEMINI_API_KEY` | Server-side Gemini calls in `app/api/**/route.ts`. If unset, the AI routes answer with a 500 and "GEMINI_API_KEY is not configured" |
| `MENTI_ADMIN_PASSWORD` | Gates the `/menti/room` admin flow. **Required** -- there is no default; if unset, nobody can log in to the room |

None of them is needed to build or start the site. No `.env.example` is committed — set these in your local `.env.local` and in the Vercel project's environment settings.

## SEO / AEO / GEO governance

This is a genuinely load-bearing part of the repo, not boilerplate. Read `docs/seo-aeo-geo-cadence.md` before shipping any content change — it defines:

- A **triggered checklist** to run on every page add/change: keyword-collision check, full schema pass, sitemap entry with a real `lastModified`, title/description length limits, bidirectional internal linking, snippet-formatted FAQ answers, `public/llms.txt` updates for structural changes, no fabricated stats.
- Weekly/monthly/quarterly/semi-annual recurring tasks (GSC error sweep, keyword-collision re-run, broken-link sweep, snippet audit, E-E-A-T consistency sweep, benchmark report refresh).
- A monthly **manual** GEO citation spot-check (running target prompts through ChatGPT/Perplexity/Claude/Gemini) — there is no API for this, it has to be done by a human and results pasted back for analysis.

Companion docs:
- `docs/keyword-map.md` — every page's primary target keyword; enforces **zero primary-keyword collisions sitewide** via a mechanical, re-runnable check. Read this before choosing a new page's primary keyword.
- `docs/content-gaps.md` — backlog of high-intent topics not yet covered, cross-checked against the keyword map so nothing proposed would cannibalize an existing page.
- `docs/featured-snippet-audit.md` — audits every FAQ answer against Google's featured-snippet format (~40–60 words, direct claim first, no hedge openers).

`public/llms.txt` is a structured, human-and-AI-readable summary of the whole site (company info, every service/tool/location, key resources) — keep it in sync in the same commit whenever a service, major page, or URL changes name.

## Redirects, sitemap & robots

- **`next.config.js`** — 19 redirect rules, all `permanent: true` (real 308s with a `Location` header, not `next/navigation`'s `redirect()` which always issues a 307 regardless of intent). Grouped by why they exist: legacy renamed paths, retired roles/pages, legacy WordPress URLs from the previous site (deliberately *not* mapping the fully-discontinued service lines like `/cro`, `/sem`, `/web-development` — pointing those at `/services` would read as a soft-404 to Google), and the pricing-page region-code retirement. Also has one `rewrites()` block with two rules sending `/tools/dm-angle-generator` and `/tools/dm-angle-generator/:path*` to an external Lovable app (only the sub-path rule is effective — see [Free tools](#free-tools-tools)). Add new redirects here rather than in a page: the one legacy page that still redirects from inside its `page.tsx` (`app/agency-vs-in-house/page.tsx`, via `permanentRedirect()`) is statically rendered and responds with status 308 but **no `Location` header** on this Next.js version — the move to `/blog/agency-vs-in-house` only happens client-side after hydration, so a client that follows HTTP redirects without running JavaScript never reaches the post (it gets a blank page carrying the homepage's title).
- **`app/sitemap.ts`** — a hand-maintained list of every indexable URL (146 today) with a real `lastModified` per page, derived from `git log -1 --format=%aI -- <path>` (the command is in the file header) — **never** hand-wave this to "now"; a single identical timestamp on every URL on every deploy is actively discounted by search engines. Add new indexable pages here, and update the entry when a page's content changes. Deliberately `noindex` pages — the 20 vertical case studies, `/thank-you`, `/menti*`, `/plans/*`, `/cold-emailing-package`, `/site-audit` and a few others — are not in it.
- **`app/robots.ts`** — `allow: "/"` for all user agents (so GPTBot/ClaudeBot/PerplexityBot/Google-Extended are all permitted by default), with one `disallow` for the `/tools/dm-angle-generator/` subtree (to stop crawlers wandering into the externally-rewritten Lovable app's own open-ended sub-paths).

### Build-time site inventory (`/site-audit`)

`scripts/generate-site-map.mjs` runs automatically before every `next build` (the `prebuild` script) and writes `app/site-audit/data.json`, which the unlisted `/site-audit` page renders. It walks `app/` to list every page, reads `next.config.js` for redirects and rewrites, parses `app/sitemap.ts` and `app/sitemap/page.tsx`, and then works out which pages are reachable by following internal links from the homepage (a "linked" page) and which are orphans — ignoring links that come from the sitemaps and the audit page itself, and treating a link to a legacy redirect source as a link to its destination. It also records which pages are `noindex` (detected by `index: false` in the source) and which are missing from the XML sitemap. The private pages (`/plans/*`, `/menti/room`, `/cold-emailing-package`) are listed without their URLs. Its limits are documented at the top of the script: links assembled at runtime are only recognised when the slug appears as a quoted string nearby, and `[param]` routes appear as one entry (the `[code]` route is expanded from the keys of `PLANS`; `/case-studies/[filter]` is not expanded). Commit the regenerated `data.json` whenever it changes.

## Conventions & gotchas

- **Mobile-first grids.** Any multi-column `grid-cols-N` needs either a `grid-cols-1` mobile base (stacking below `sm:`) or genuinely short cell content (a big number + a 2–4 word label survives 2–3 narrow columns fine; a full sentence + a citation does not — this exact bug shipped across 9 blog posts before being caught and fixed).
- **Tables always get `overflow-x-auto`.** Every comparison/data table sitewide follows this; keep it that way for anything new.
- **`prefers-reduced-motion` is mandatory** for any new animation (background blob drift, count-up numbers, marquees, badge pops) — add both the CSS guard in `globals.css` and, for JS-driven animation loops, an early-return check via `window.matchMedia("(prefers-reduced-motion: reduce)").matches`.
- **Never reformat a pre-formatted number.** Count-up animations must animate a plain digit and swap to the caller's exact string on completion (see the pricing page's `AnimatedPrice` in `components/pricing/GrowthPlansPricing.tsx`) — this is the only way India's `1,74,999`-style grouping survives. `StatTicker.tsx` is fine for values with a single run of digits (`"12K+"`, `"$120M+"`), but not for grouped ones.
- **One primary keyword per page, sitewide** — see `docs/keyword-map.md`.
- **No fabricated numbers.** A new offering with no real track record gets honest "new, no data yet" framing (see the GTM Strategy / fundraising pages for the pattern) rather than an invented stat.
- **Both `/thank-you` and `/thankyou` exist** — don't assume one is a typo to delete without checking what links to it.
- **There are two `[param]` routes in the app: `/plans/[code]` and `/case-studies/[filter]`.** Both are rendered on demand and must call `notFound()` for unknown values; `/menti/room` is also rendered on demand (it reads the auth cookie) but is a plain route. Confirm before assuming a `[param]`-style pattern exists elsewhere.
- **Git remote uses SSH, not HTTPS** — plain `https://` pushes have failed in this environment before; the origin remote should be `git@github.com:...`.
- **Two categories of "fixed-width-looking" code are not bugs**: (1) large `width: "600px"`-class values on `aria-hidden`, `pointer-events:none` decorative background blur blobs inside an `overflow-hidden` section — these never cause scroll; (2) `flex-shrink-0 w-[Npx]` cards inside a CSS `@keyframes marquee` track — these are an intentional horizontal auto-scroll, not a broken grid.
- Watch for a **stale/zombie `next dev` process** vs. genuine `.next` cache corruption when debugging an inexplicable build error — see [Getting started](#getting-started) above.

## Deployment

Hosted on Vercel, deploying from `master`. There's no committed `vercel.json` — routing/redirect/rewrite behavior lives entirely in `next.config.js`, and image formats (AVIF-first, WebP fallback) are configured in the same file's `images` block. Push to `master` to ship; there is no separate staging environment defined in this repo. (`HANDOFF.md` describes an older flow in which pushes did *not* auto-deploy and releases were made by hand with `vercel --prod` — check the Vercel project's Git integration settings to see which applies today.)
