# CMS: how to use it and how to switch on live editing

## What is in the CMS today

| Collection | Where files live | What reads them |
|---|---|---|
| Homepage FAQs | `content/faqs/homepage/*.json` | homepage FAQ section and its FAQPage schema (via `npm run faqs:build`) |
| FAQs on every other page (services, city pages, ICP landing pages, guides, blog posts, tools) | `content/faqs/pages/<page>.json` | the page itself, through `lib/page-faqs.ts`, and its FAQPage schema |
| ICP landing pages (so far: insurance, financial services) | `content/landing-pages/<slug>.json` | `app/lp/<slug>/page.tsx` is generated from it at every build and rendered by `components/lp/LandingPage.tsx` |
| Case studies | `content/case-studies/*.json` | `lib/case-study-library.json`, then one generated page and sitemap entry per case (both rebuilt on every deploy) |
| Blog posts | `content/posts/*.mdoc` | `app/blog/[slug]/page.tsx`, the blog index, `sitemap.xml`, `llms-full.txt` |

To change FAQs on any page: admin, **Page FAQs**, open the page's entry (names start with `city-`, `lp-`, `service-`, `blog-`, `guide-`, `tool-`), edit or drag questions, save. The answer text and the page's FAQPage schema update together on the next deploy. Adding FAQs to a page that has none yet needs a developer to connect the page once.

Landing pages: edit the text, numbers, steps and button labels in the admin under **Landing pages (ICP)**. Layout, colours, animations and the form wiring stay in code. The counts (4 stats, 3 pain cards, and so on) are fixed by the template and enforced in the admin. A brand-new landing page also needs one line in `app/sitemap.ts` (the build warns if it is missing). The FAQ questions on these pages live under **Page FAQs** (`lp-<slug>`).

A new case study published from the admin appears after the next deploy, with its page, sitemap entry and place on the industry filter. Its sitemap date is not refreshed automatically, because sitemap dates come from git history of page code.

The 36 older blog posts are hand-built pages and are not in the CMS. A hand-built page always wins over the CMS route, so nothing about them changes.

A new post gets, with no code: the page, canonical tag, Open Graph tags, Article schema, FAQPage schema (from the FAQ fields), BreadcrumbList, a visible "Updated" date, an answer-first summary block, a spot on the blog index, a sitemap entry and an `llms-full.txt` line. Posts with **Published** off are invisible everywhere.

## Using it on your computer (works today)

```bash
npm run dev
```

Open http://localhost:3100/keystatic, pick **Blog posts**, **Add**. Saving writes a file into the repo. Commit and push it to `master` like any other change; Vercel then deploys.

After adding or publishing a post run `npm run llms:build` and commit the updated `public/llms-full.txt` (the prebuild step also regenerates it).

## Switching on live editing at myntmore.com/keystatic (one-time, about 10 minutes)

This is what lets non-developers publish without a code editor. Sign-in is GitHub, so only people with write access to the repository can edit. Each save becomes a commit, and Vercel deploys it.

1. In `.env.local` on your computer add `NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO=aitoolsteejay/ClaudeCode`.
2. Run `npm run dev`, open http://localhost:3100/keystatic. Keystatic offers to **create a GitHub app**. Accept; it writes four values into `.env.local`: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
3. In GitHub, Settings, Developer settings, GitHub Apps, open the new app and add this callback URL next to the localhost one: `https://www.myntmore.com/api/keystatic/github/oauth/callback`. Install the app on the repository.
4. In Vercel, Project Settings, Environment Variables, add the four values from step 2 plus `NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO`, for Production. Redeploy.
5. Open https://www.myntmore.com/keystatic and sign in with GitHub.

Until step 4 is done the live `/keystatic` returns 404, and `/keystatic` and `/api/keystatic` are disallowed in `robots.txt`.

## Writing a post that helps SEO, AEO and GEO

- **Answer-first summary** (40 to 60 words): answer the title question outright, with one number and one named thing. This is the first paragraph under the title and the block AI answer engines quote.
- **Search description** 120 to 155 characters; **keywords** are search phrases, one each.
- **FAQs**: two to five, each answer 40 to 60 words, plain text. They show on the page and become FAQPage schema.
- Keep claims consistent with the rest of the site (the "300+ companies" and "$120M+ pipeline" figures come from `lib/entity-facts.json`).
- Set **Date last updated** only on a real edit.
