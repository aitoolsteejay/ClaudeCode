import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.myntmore.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Critical SEO recovery pages
    { url: `${base}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // Service subpages
    { url: `${base}/services/sales-intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-lead-generation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/linkedin-outreach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/personal-branding`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/cold-email`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Case studies
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/saas-series-a`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/professional-services-linkedin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/ecommerce-conversion-playbook`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/founder-personal-brand-linkedin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies/predictable-b2b-lead-gen-engine`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Resources & blog
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/agency-vs-in-house`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Free tools
    { url: `${base}/tools/linkedin-optimizer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dm-angle-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/posting-rhythm-builder`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/lead-magnet-ideas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/founder-presence-analyzer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/icp-builder`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/case-study-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/battle-card-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/predictable-b2b-lead-gen-engine`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/ecommerce-conversion-playbook`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/founder-personal-brand-linkedin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/cold-email-deliverability-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/icp-mapping-b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/linkedin-outreach-sequences`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/b2b-lead-gen-metrics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/linkedin-profile-inbound-lead-machine`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Guides (surfaced under /resources/guides, originally Instagram bio-link pages)
    { url: `${base}/instagram-resources/claude-skills-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instagram-resources/80-us-meetings-ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instagram-resources/how-to-set-up-vibe-prospecting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Careers
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers/senior-sales-head`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/lead-gen-strategist`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/gtm-strategist`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/hr-operations-intern`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // Industry landing pages
    { url: `${base}/lp/agencies-it`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/manufacturers-exporters`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/lp/saas-founders`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // SEO recovery pages
    { url: `${base}/marketing-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/1-on-1-consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/personal-branding`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/GIAtech-stack`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
