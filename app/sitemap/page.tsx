import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on Myntmore, organised by section: services, case studies, blog, guides, free tools, careers, and more.",
  alternates: { canonical: "https://www.myntmore.com/sitemap" },
  keywords: [
    "myntmore sitemap",
    "myntmore site navigation",
    "all myntmore pages",
    "myntmore services list",
    "myntmore resources index",
    "site map",
  ],
};

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Site Map", url: `${SITE_URL}/sitemap` },
]);

interface SitemapLink {
  label: string;
  href: string;
  note?: string;
}

interface SitemapGroup {
  title: string;
  accent: string;
  links: SitemapLink[];
}

const GROUPS: SitemapGroup[] = [
  {
    title: "Services",
    accent: "#D97706",
    links: [
      { label: "All Services", href: "/services" },
      { label: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
      { label: "Cold Email Infrastructure", href: "/services/cold-email" },
      { label: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
      { label: "AI Lead Generation", href: "/services/ai-lead-generation" },
      { label: "Account-Based Marketing", href: "/services/account-based-marketing" },
      { label: "Personal Branding", href: "/services/personal-branding" },
      { label: "GTM Strategy", href: "/services/gtm-strategy" },
      { label: "Marketing Automation", href: "/marketing-automation" },
      { label: "SEO Services", href: "/seo" },
    ],
  },
  {
    title: "Case Studies",
    accent: "#14B8A6",
    links: [
      { label: "All Case Studies", href: "/case-studies" },
      { label: "SaaS, Series A", href: "/case-studies/saas-series-a" },
      { label: "Professional Services, LinkedIn", href: "/case-studies/professional-services-linkedin" },
      { label: "Ecommerce Conversion Playbook", href: "/case-studies/ecommerce-conversion-playbook" },
      { label: "Founder Personal Brand on LinkedIn", href: "/case-studies/founder-personal-brand-linkedin" },
      { label: "Predictable B2B Lead Gen Engine", href: "/case-studies/predictable-b2b-lead-gen-engine" },
      { label: "UK Pharma, Qualified Meetings", href: "/case-studies/uk-pharma-qualified-meetings" },
    ],
  },
  {
    title: "Blog",
    accent: "#3B82F6",
    links: [
      { label: "All Blog Posts", href: "/resources/blogs" },
      { label: "Visibility vs. Value: Founder Personal Brand", href: "/blog/vanity-metrics-personal-brand-pipeline" },
      { label: "Gut Feel vs. Funnel Math", href: "/blog/outbound-funnel-math-not-guesswork" },
      { label: "Relevance Beats Reach", href: "/blog/relevance-beats-reach-b2b-outbound" },
      { label: "The Impression Illusion", href: "/blog/conversations-not-impressions-outbound" },
      { label: "The TAM Trap", href: "/blog/tam-trap-vague-targeting" },
      { label: "The 3-Second Rule", href: "/blog/3-second-rule-cold-outreach" },
      { label: "The Value Premium", href: "/blog/value-premium-lead-magnets" },
      { label: "Predictable B2B Lead Gen Engine", href: "/blog/predictable-b2b-lead-gen-engine" },
      { label: "Cold Email Deliverability Guide", href: "/blog/cold-email-deliverability-guide" },
      { label: "ICP Mapping for B2B", href: "/blog/icp-mapping-b2b" },
      { label: "LinkedIn Outreach Sequences", href: "/blog/linkedin-outreach-sequences" },
      { label: "7 B2B Lead Gen Metrics That Matter", href: "/blog/b2b-lead-gen-metrics" },
      { label: "Ecommerce Conversion Playbook", href: "/blog/ecommerce-conversion-playbook" },
      { label: "Founder Personal Brand on LinkedIn", href: "/blog/founder-personal-brand-linkedin" },
      { label: "The 2026 B2B Outbound Benchmark Report", href: "/blog/b2b-outbound-benchmark-report-2026" },
      { label: "Case Study Procrastination", href: "/blog/case-study-procrastination" },
      { label: "Cold Email Compliance Guide", href: "/blog/cold-email-compliance-guide" },
      { label: "Cold Email vs. LinkedIn Outreach", href: "/blog/cold-email-vs-linkedin-outreach" },
      { label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/blog/linkedin-profile-inbound-lead-machine" },
      { label: "The Pitching Trap", href: "/blog/pitching-trap-competitor-positioning" },
    ],
  },
  {
    title: "Guides",
    accent: "#8B5CF6",
    links: [
      { label: "All Guides", href: "/resources/guides" },
      { label: "The 6 Claude Skills Guide", href: "/instagram-resources/claude-skills-guide" },
      { label: "80+ US Meetings with AI Agents", href: "/instagram-resources/80-us-meetings-ai-agents" },
      { label: "How to Set Up Vibe Prospecting", href: "/instagram-resources/how-to-set-up-vibe-prospecting" },
    ],
  },
  {
    title: "The Feed",
    accent: "#E1306C",
    links: [
      { label: "The Feed", href: "/resources/feed" },
    ],
  },
  {
    title: "Free Tools",
    accent: "#F97316",
    links: [
      { label: "All Free Tools", href: "/resources/tools" },
      { label: "LinkedIn Profile Optimizer", href: "/tools/linkedin-optimizer" },
      { label: "DM Angle Generator", href: "/tools/dm-angle-generator" },
      { label: "ROI Calculator", href: "/tools/roi-calculator" },
      { label: "Posting Rhythm Builder", href: "/tools/posting-rhythm-builder" },
      { label: "Lead Magnet Idea Generator", href: "/tools/lead-magnet-ideas" },
      { label: "Founder Presence Analyzer", href: "/tools/founder-presence-analyzer" },
      { label: "ICP Builder & Value Prop Generator", href: "/tools/icp-builder" },
      { label: "Case Study & Proposal Generator", href: "/tools/case-study-generator" },
      { label: "Competitor Battle Card Generator", href: "/tools/battle-card-generator" },
    ],
  },
  {
    title: "Events & Comparisons",
    accent: "#8B5CF6",
    links: [
      { label: "Events & Webinars", href: "/events" },
      { label: "Agency vs. In-House SDR", href: "/agency-vs-in-house" },
    ],
  },
  {
    title: "Careers",
    accent: "#6366F1",
    links: [
      { label: "All Open Roles", href: "/careers" },
      { label: "Senior Sales Head", href: "/careers/senior-sales-head" },
      { label: "Lead Gen Strategist", href: "/careers/lead-gen-strategist" },
      { label: "GTM Strategist", href: "/careers/gtm-strategist" },
      { label: "HR Operations Intern", href: "/careers/hr-operations-intern" },
      { label: "Content Marketing Strategist Intern", href: "/careers/content-marketing-strategist-intern" },
      { label: "Sales Executive", href: "/careers/sales-executive" },
    ],
  },
  {
    title: "Industry Pages",
    accent: "#A855F7",
    links: [
      { label: "For Agencies & IT", href: "/lp/agencies-it" },
      { label: "For Manufacturers & Exporters", href: "/lp/manufacturers-exporters" },
      { label: "For B2B SaaS Founders", href: "/lp/saas-founders" },
      { label: "For Recruitment & Staffing Firms", href: "/lp/recruitment-firms" },
      { label: "For Pharma Companies", href: "/lp/pharma" },
      { label: "For Insurance Brokers", href: "/lp/insurance" },
      { label: "For Financial Services Firms", href: "/lp/financial-services" },
      { label: "For Founders Raising Capital", href: "/lp/fundraising" },
    ],
  },
  {
    title: "City Pages",
    accent: "#0EA5E9",
    links: [
      { label: "B2B Lead Generation in Mumbai", href: "/b2b-lead-generation-mumbai" },
      { label: "B2B Lead Generation in Delhi", href: "/b2b-lead-generation-delhi" },
      { label: "B2B Lead Generation in Bengaluru", href: "/b2b-lead-generation-bengaluru" },
      { label: "B2B Lead Generation in Pune", href: "/b2b-lead-generation-pune" },
      { label: "B2B Lead Generation in Hyderabad", href: "/b2b-lead-generation-hyderabad" },
      { label: "B2B Lead Generation in Chennai", href: "/b2b-lead-generation-chennai" },
      { label: "B2B Lead Generation in Kolkata", href: "/b2b-lead-generation-kolkata" },
      { label: "B2B Lead Generation in Ahmedabad", href: "/b2b-lead-generation-ahmedabad" },
    ],
  },
  {
    title: "Company",
    accent: "#52525B",
    links: [
      { label: "About Myntmore & Tejas Jhaveri", href: "/about-us" },
      { label: "Contact", href: "/contact-us" },
      { label: "Book a Call", href: "/founder-meeting" },
      { label: "1-on-1 Consultation", href: "/1-on-1-consultation" },
      { label: "Partner with Us", href: "/lp/agency-partners" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <InnerLayout>
      <JsonLd data={BREADCRUMB_SCHEMA} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Navigation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>
            Site Map
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Every page on Myntmore, in one place. Looking for the machine-readable version instead? See{" "}
            <a href="/sitemap.xml" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>sitemap.xml</a>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GROUPS.map((group) => (
                <div key={group.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: group.accent }} />
                    <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: group.accent }}>{group.title}</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm leading-snug hover:underline" style={{ color: "#3D3D3D" }}>
                          {link.label}
                        </Link>
                        {link.note && <span className="text-xs ml-2" style={{ color: "#8C8279" }}>{link.note}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
