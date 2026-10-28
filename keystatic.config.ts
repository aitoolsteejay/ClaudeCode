import { collection, config, fields } from "@keystatic/core";

// Content lives as files in the repo.
//  - Homepage FAQs: JSON files. `npm run faqs:build` (run by prebuild) turns
//    them into lib/faq-content.generated.json, which lib/faq-data.ts
//    re-exports, so the FAQ components and FAQPage JSON-LD read the same data
//    they always did.
//  - Page FAQs: one JSON file per page (service, city, landing, guide, blog
//    post, tool). The page reads its list through lib/page-faqs.ts.
//  - Landing pages (ICP): one JSON file per page. `npm run landing-pages:build`
//    (run by prebuild) writes app/lp/<slug>/page.tsx; components/lp/LandingPage.tsx
//    renders it.
//  - Case studies: JSON files. `npm run case-studies:content` rebuilds
//    lib/case-study-library.json, then `case-studies:build` writes each page and
//    its sitemap entry (both run by prebuild).
//  - Blog posts: .mdoc files read at build time by lib/cms-posts.ts and
//    rendered by app/resources/blogs/[slug]/page.tsx (served at /resources/blogs/<slug>).
//    The 36 older posts are hand-built pages; a static folder under app/resources/blogs/ always wins over
//    the dynamic route.
//
// Storage: local files while developing. Set NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO
// ("owner/name") plus the GitHub app variables (see docs/cms-setup.md) and the
// same admin works on the live site, saving each edit as a commit.
const githubRepo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO as `${string}/${string}` | undefined;

export default config({
  storage: githubRepo ? { kind: "github", repo: githubRepo } : { kind: "local" },
  collections: {
    homepageFaqs: collection({
      label: "Homepage FAQs",
      path: "content/faqs/homepage/*",
      format: "json",
      slugField: "question",
      schema: {
        question: fields.slug({
          name: { label: "Question", validation: { isRequired: true } },
        }),
        answer: fields.text({
          label: "Answer",
          description:
            "Answer first, 40 to 60 words. Plain text only: it is also used in the FAQPage structured data.",
          multiline: true,
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: "Order",
          description: "Lowest number shows first.",
          validation: { isRequired: true },
        }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Link text" }),
            href: fields.text({ label: "Link path, e.g. /services" }),
          }),
          {
            label: "Links under the answer (optional)",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),

    pageFaqs: collection({
      label: "Page FAQs",
      path: "content/faqs/pages/*",
      format: "json",
      slugField: "page",
      schema: {
        page: fields.slug({
          name: {
            label: "Page",
            description: "Which page these questions belong to. Pick the existing entry for that page; do not create a new one unless a developer has added the page.",
            validation: { isRequired: true },
          },
        }),
        items: fields.array(
          fields.object({
            question: fields.text({ label: "Question", validation: { isRequired: true } }),
            answer: fields.text({
              label: "Answer",
              description: "Answer first, 40 to 60 words, plain text. It is also used in the page's FAQPage structured data.",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Questions (drag to reorder)",
            itemLabel: (props) => props.fields.question.value,
          }
        ),
      },
    }),

    landingPages: collection({
      label: "Landing pages (ICP)",
      path: "content/landing-pages/*",
      format: "json",
      slugField: "slug",
      schema: {
        slug: fields.slug({
          name: {
            label: "Page address",
            description: "The page lives at /lp/<address>. It cannot be changed after the first save. A page is only included in the sitemap once a developer adds its line to app/sitemap.ts.",
            validation: { isRequired: true },
          },
        }),

        metaTitle: fields.text({
          label: "Search title",
          description: "Shown in Google. Up to 49 characters (the site adds \" | Myntmore\").",
          validation: { isRequired: true, length: { max: 49 } },
        }),
        metaDescription: fields.text({
          label: "Search description",
          description: "120 to 155 characters.",
          multiline: true,
          validation: { isRequired: true, length: { max: 155 } },
        }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "Keywords (one search phrase each)",
          itemLabel: (props) => props.value,
        }),
        ogTitle: fields.text({ label: "Share title (LinkedIn, WhatsApp)", validation: { isRequired: true } }),
        ogDescription: fields.text({ label: "Share description", multiline: true, validation: { isRequired: true } }),

        breadcrumbLabel: fields.text({ label: "Breadcrumb label", validation: { isRequired: true } }),
        badge: fields.text({ label: "Hero badge", description: "The small pill above the headline.", validation: { isRequired: true } }),
        h1Line1: fields.text({ label: "Headline, line 1", validation: { isRequired: true } }),
        h1Before: fields.text({ label: "Headline, line 2: text before the underlined words (optional)" }),
        h1Underlined: fields.text({ label: "Headline, line 2: underlined words", validation: { isRequired: true } }),
        h1After: fields.text({ label: "Headline, line 2: text after the underlined words", validation: { isRequired: true } }),
        heroSubheading: fields.text({ label: "Hero subheading", multiline: true, validation: { isRequired: true } }),
        primaryCta: fields.text({ label: "Main button label", validation: { isRequired: true } }),
        secondaryCta: fields.text({ label: "Second button label", validation: { isRequired: true } }),
        heroNote: fields.text({ label: "Small note under the buttons", validation: { isRequired: true } }),
        floatingIcons: fields.array(fields.text({ label: "Emoji" }), {
          label: "Floating emoji in the hero (exactly 4)",
          validation: { length: { min: 4, max: 4 } },
          itemLabel: (props) => props.value,
        }),

        stats: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            prefix: fields.text({ label: "Before the number, e.g. ₹" }),
            target: fields.number({ label: "Number (counts up to this)", validation: { isRequired: true } }),
            decimals: fields.integer({ label: "Decimal places (0 or 1)", validation: { isRequired: true, min: 0, max: 1 }, defaultValue: 0 }),
            suffix: fields.text({ label: "After the number, e.g. +, %, ×, Cr+" }),
            label: fields.text({ label: "Caption", validation: { isRequired: true } }),
          }),
          {
            label: "Stats row (exactly 4)",
            validation: { length: { min: 4, max: 4 } },
            itemLabel: (props) => props.fields.label.value,
          }
        ),

        painTitle: fields.text({ label: "Pain section heading", validation: { isRequired: true } }),
        pain: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            heading: fields.text({ label: "Heading", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true, validation: { isRequired: true } }),
          }),
          { label: "Pain cards (exactly 3)", validation: { length: { min: 3, max: 3 } }, itemLabel: (props) => props.fields.heading.value }
        ),

        flowTitle: fields.text({ label: "Flow diagram title (a new line splits it in two)", multiline: true, validation: { isRequired: true } }),
        flowTop: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            title: fields.text({ label: "Step title", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true, validation: { isRequired: true } }),
          }),
          { label: "Flow steps 1 to 3 (exactly 3)", validation: { length: { min: 3, max: 3 } }, itemLabel: (props) => props.fields.title.value }
        ),
        flowParallelLabel: fields.text({ label: "Side track label", validation: { isRequired: true } }),
        flowParallel: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true, validation: { isRequired: true } }),
          }),
          { label: "Side track items (exactly 3)", validation: { length: { min: 3, max: 3 } }, itemLabel: (props) => props.fields.title.value }
        ),
        flowBottom: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            title: fields.text({ label: "Step title", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true, validation: { isRequired: true } }),
          }),
          { label: "Flow steps 4 to 6 (exactly 3)", validation: { length: { min: 3, max: 3 } }, itemLabel: (props) => props.fields.title.value }
        ),

        processTitle: fields.text({ label: "How-it-works heading", validation: { isRequired: true } }),
        process: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true, validation: { isRequired: true } }),
          }),
          { label: "How-it-works steps (exactly 4)", validation: { length: { min: 4, max: 4 } }, itemLabel: (props) => props.fields.title.value }
        ),

        trackTitle: fields.text({ label: "Track record heading", validation: { isRequired: true } }),
        track: fields.array(
          fields.object({
            icon: fields.text({ label: "Emoji" }),
            prefix: fields.text({ label: "Before the number, e.g. $" }),
            target: fields.number({ label: "Number (counts up to this)", validation: { isRequired: true } }),
            suffix: fields.text({ label: "After the number, e.g. K+, %, M+,  days" }),
            label: fields.text({ label: "Caption", validation: { isRequired: true } }),
          }),
          {
            label: "Track record numbers (exactly 4; keep them in step with lib/entity-facts.json)",
            validation: { length: { min: 4, max: 4 } },
            itemLabel: (props) => props.fields.label.value,
          }
        ),

        faqTitle: fields.text({ label: "FAQ heading (the questions are under Page FAQs)", validation: { isRequired: true } }),
        ctaHeading: fields.text({ label: "Closing call to action: heading", validation: { isRequired: true } }),
        ctaBody: fields.text({ label: "Closing call to action: text", multiline: true, validation: { isRequired: true } }),
        formHeading: fields.text({ label: "Form heading", validation: { isRequired: true } }),
        formBody: fields.text({ label: "Form intro text", multiline: true, validation: { isRequired: true } }),
        namePlaceholder: fields.text({ label: "Name field example", validation: { isRequired: true } }),
        companyLabel: fields.text({ label: "Company field label", validation: { isRequired: true } }),
        companyPlaceholder: fields.text({ label: "Company field example", validation: { isRequired: true } }),
        emailPlaceholder: fields.text({ label: "Email field example", validation: { isRequired: true } }),
        submitLabel: fields.text({ label: "Submit button label", validation: { isRequired: true } }),
        formNote: fields.text({ label: "Note under the submit button", validation: { isRequired: true } }),
      },
    }),

    caseStudies: collection({
      label: "Case studies",
      path: "content/case-studies/*",
      format: "json",
      slugField: "slug",
      schema: {
        slug: fields.slug({
          name: {
            label: "Page address",
            description: "Lowercase words with dashes, e.g. pharma-contract-manufacturer-pipeline. It becomes /case-studies/<address> and cannot be changed after the first save.",
            validation: { isRequired: true },
          },
        }),
        title: fields.text({
          label: "Title (H1)",
          description: "Lead with the headline number, e.g. 22 Qualified Meetings in 90 Days for a Nutraceutical Manufacturer.",
          validation: { isRequired: true, length: { max: 100 } },
        }),
        industry: fields.select({
          label: "Industry",
          description: "Decides which industry filter and landing page this appears on.",
          options: [
            "Pharma",
            "SaaS",
            "Professional Services",
            "eCommerce Tech",
            "B2B Founder",
            "Agencies & IT",
            "Financial Services",
            "Insurance",
            "Manufacturers & Exporters",
            "Recruitment & Staffing",
          ].map((v) => ({ label: v, value: v })),
          defaultValue: "Pharma",
        }),
        segment: fields.text({
          label: "Client type",
          description: "Short, e.g. Contract Manufacturer. Used in the search title: <client type> Case Study.",
          validation: { isRequired: true, length: { max: 38 } },
        }),
        n: fields.integer({
          label: "Order",
          description: "Lowest number shows first. Use the next free number for a new case study.",
          validation: { isRequired: true, min: 1 },
        }),
        challenge: fields.text({
          label: "Challenge",
          description: "The client's situation before Myntmore, in two or three sentences. Client names stay out (confidentiality).",
          multiline: true,
          validation: { isRequired: true },
        }),
        solution: fields.array(fields.text({ label: "Step", multiline: true }), {
          label: "What Myntmore did",
          description: "First line introduces the approach, the rest are the steps.",
          itemLabel: (props) => props.value.slice(0, 60),
        }),
        results: fields.array(fields.text({ label: "Result" }), {
          label: "Results",
          description: "Start a result with its number (22 qualified meetings...). The first figures become the headline numbers. Only real, verifiable results.",
          itemLabel: (props) => props.value.slice(0, 60),
        }),
      },
    }),

    posts: collection({
      label: "Blog posts",
      path: "content/posts/*",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title (H1)",
            description: "Shown as the page heading. The web address is made from it and cannot be changed after the first save.",
            validation: { isRequired: true },
          },
        }),
        published: fields.checkbox({
          label: "Published",
          description: "Leave off while drafting. Only published posts appear on the site, the blog index, the sitemap and llms-full.txt.",
          defaultValue: false,
        }),
        metaTitle: fields.text({
          label: "Search title (optional)",
          description: "Shown in Google results. Leave empty to use the title. Keep under 60 characters.",
        }),
        description: fields.text({
          label: "Search description",
          description: "One or two sentences, 120 to 155 characters. Also shown on the blog index.",
          multiline: true,
          validation: { isRequired: true, length: { min: 60, max: 200 } },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Cold Email", value: "Cold Email" },
            { label: "Cold Outreach", value: "Cold Outreach" },
            { label: "LinkedIn Outreach", value: "LinkedIn Outreach" },
            { label: "Personal Branding", value: "Personal Branding" },
            { label: "Lead Generation", value: "Lead Generation" },
            { label: "ICP & Targeting", value: "ICP & Targeting" },
            { label: "GTM Strategy", value: "GTM Strategy" },
            { label: "Sales Strategy", value: "Sales Strategy" },
            { label: "Metrics & Reporting", value: "Metrics & Reporting" },
            { label: "Positioning", value: "Positioning" },
          ],
          defaultValue: "Lead Generation",
        }),
        readTime: fields.integer({
          label: "Read time (minutes)",
          validation: { isRequired: true, min: 1, max: 60 },
          defaultValue: 5,
        }),
        datePublished: fields.date({
          label: "Date published",
          validation: { isRequired: true },
        }),
        dateModified: fields.date({
          label: "Date last updated",
          description: "Change this when you make a real edit. It shows on the page and in the sitemap.",
        }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "Keywords (one search phrase each)",
          itemLabel: (props) => props.value,
        }),
        summary: fields.text({
          label: "Answer-first summary",
          description:
            "40 to 60 words that answer the post's main question outright, with one number and one named thing. AI answer engines quote this block, and it is the first paragraph under the title.",
          multiline: true,
          validation: { isRequired: true, length: { min: 120, max: 520 } },
        }),
        content: fields.document({
          label: "Body",
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: "public/blog-images",
            publicPath: "/blog-images/",
          },
        }),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: "Question", validation: { isRequired: true } }),
            answer: fields.text({
              label: "Answer",
              description: "Answer first, 40 to 60 words, plain text.",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "FAQs at the end (optional, becomes FAQPage structured data)",
            itemLabel: (props) => props.fields.question.value,
          }
        ),
        relatedLinks: fields.array(
          fields.object({
            label: fields.text({ label: "Link text", validation: { isRequired: true } }),
            href: fields.text({ label: "Path, e.g. /services/cold-email-outreach", validation: { isRequired: true } }),
          }),
          {
            label: "Related reading (optional)",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
  },
});
