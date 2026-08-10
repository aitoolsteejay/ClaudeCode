import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://myntmore.com";
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
    // Resources & blog
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
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
    // Instagram bio-link guides
    { url: `${base}/instagram-resources/claude-skills-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/instagram-resources/80-us-meetings-ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/instagram-resources/how-to-set-up-vibe-prospecting`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Careers
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers/senior-sales-head`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/lead-gen-strategist`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/gtm-strategist`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers/hr-operations-intern`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // SEO recovery pages
    { url: `${base}/marketing-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/1-on-1-consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/personal-branding`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
