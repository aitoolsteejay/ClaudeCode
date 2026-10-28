# CMS: how to use it and how to switch on live editing

## What is in the CMS today

| Collection | Where files live | What reads them |
|---|---|---|
| Homepage FAQs | `content/faqs/homepage/*.json` | homepage FAQ section and its FAQPage schema (via `npm run faqs:build`) |
| Blog posts | `content/posts/*.mdoc` | `app/blog/[slug]/page.tsx`, the blog index, `sitemap.xml`, `llms-full.txt` |

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
