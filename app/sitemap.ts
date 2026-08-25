import type { MetadataRoute } from "next";

// lastModified per URL is the real last-commit date (git log -1) for the
// page's source directory, not a blanket "now" -- a single identical
// timestamp stamped on every URL on every deploy carries no real signal
// about which pages actually changed, and search engines increasingly
// discount lastmod that behaves that way. Re-derive with:
//
//   git log -1 --format=%aI -- <path to page's app/ directory or file>
//
// and update the entry below whenever a page's content actually changes
// (or just re-run this for every URL the next time this file is touched --
// it's a mechanical lookup, not something to hand-maintain from memory).

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.myntmore.com";

  return [
    { url: base, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "weekly", priority: 1.0 },
    // Critical SEO recovery pages
    { url: `${base}/about-us`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact-us`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "weekly", priority: 0.9 },
    // Service subpages
    { url: `${base}/services/linkedin-outreach`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/cold-email`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/sales-intelligence`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-lead-generation`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/account-based-marketing`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/personal-branding`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.8 },
    // Case studies
    { url: `${base}/case-studies`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/saas-series-a`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/professional-services-linkedin`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/ecommerce-conversion-playbook`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/founder-personal-brand-linkedin`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/predictable-b2b-lead-gen-engine`, lastModified: "2026-08-21T15:18:01+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/uk-pharma-qualified-meetings`, lastModified: "2026-08-24T10:55:56+05:30", changeFrequency: "monthly", priority: 0.7 },
    // Resources & blog
    { url: `${base}/resources`, lastModified: "2026-08-24T17:33:25+05:30", changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/blogs`, lastModified: "2026-08-24T10:44:59+05:30", changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/tools`, lastModified: "2026-08-14T16:24:57+05:30", changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/guides`, lastModified: "2026-08-24T17:33:25+05:30", changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/feed`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/events`, lastModified: "2026-08-14T16:24:57+05:30", changeFrequency: "weekly", priority: 0.7 },
    // Free tools
    { url: `${base}/tools/linkedin-optimizer`, lastModified: "2026-08-17T13:05:02+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dm-angle-generator`, lastModified: "2026-08-17T13:05:02+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/roi-calculator`, lastModified: "2026-08-17T15:44:21+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/posting-rhythm-builder`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/lead-magnet-ideas`, lastModified: "2026-08-17T16:28:30+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/founder-presence-analyzer`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/icp-builder`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/case-study-generator`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/battle-card-generator`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/predictable-b2b-lead-gen-engine`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/ecommerce-conversion-playbook`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/founder-personal-brand-linkedin`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/cold-email-deliverability-guide`, lastModified: "2026-08-21T15:32:29+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/icp-mapping-b2b`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/linkedin-outreach-sequences`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/b2b-lead-gen-metrics`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/linkedin-profile-inbound-lead-machine`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/b2b-outbound-benchmark-report-2026`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/agency-vs-in-house`, lastModified: "2026-08-21T15:41:17+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/tam-trap-vague-targeting`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/3-second-rule-cold-outreach`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/value-premium-lead-magnets`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/cold-email-compliance-guide`, lastModified: "2026-08-21T15:41:17+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/cold-email-vs-linkedin-outreach`, lastModified: "2026-08-21T15:41:17+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/case-study-procrastination`, lastModified: "2026-08-24T10:44:59+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/pitching-trap-competitor-positioning`, lastModified: "2026-08-24T10:44:59+05:30", changeFrequency: "monthly", priority: 0.7 },
    // Guides (surfaced under /resources/guides, originally Instagram bio-link pages)
    { url: `${base}/instagram-resources/claude-skills-guide`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instagram-resources/80-us-meetings-ai-agents`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instagram-resources/how-to-set-up-vibe-prospecting`, lastModified: "2026-08-21T10:38:54+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instagram-resources/golden-icp-framework`, lastModified: "2026-08-24T17:33:25+05:30", changeFrequency: "monthly", priority: 0.7 },
    // Careers
    { url: `${base}/careers`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers/senior-sales-head`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/lead-gen-strategist`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/gtm-strategist`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/hr-operations-intern`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/content-marketing-strategist-intern`, lastModified: "2026-08-25T00:00:00+05:30", changeFrequency: "monthly", priority: 0.5 },
    // Industry landing pages
    { url: `${base}/lp/agencies-it`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/manufacturers-exporters`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/saas-founders`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/recruitment-firms`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/pharma`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/insurance`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/financial-services`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/fundraising`, lastModified: "2026-08-25T00:00:00+05:30", changeFrequency: "monthly", priority: 0.6 },
    // Partner program
    { url: `${base}/lp/agency-partners`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.6 },
    // City landing pages
    { url: `${base}/b2b-lead-generation-mumbai`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-delhi`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-bengaluru`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-pune`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-hyderabad`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-chennai`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-kolkata`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/b2b-lead-generation-ahmedabad`, lastModified: "2026-08-21T14:54:15+05:30", changeFrequency: "monthly", priority: 0.6 },
    // SEO recovery pages
    { url: `${base}/marketing-automation`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/seo`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/1-on-1-consultation`, lastModified: "2026-08-18T15:33:06+05:30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/GIAtech-stack`, lastModified: "2026-08-17T13:05:02+05:30", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: "2026-08-17T13:05:02+05:30", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/sitemap`, lastModified: "2026-08-14T18:34:06+05:30", changeFrequency: "monthly", priority: 0.5 },
  ];
}
