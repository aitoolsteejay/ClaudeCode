import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import FadeIn from "../../components/FadeIn";
import JsonLd from "../../components/JsonLd";
import BlogGrid, { type BlogPost } from "./BlogGrid";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Resources", url: `${SITE_URL}/resources` },
  { name: "Blog", url: `${SITE_URL}/resources/blogs` },
]);

export const metadata: Metadata = {
  title: "B2B Lead Generation Blog",
  description: "In-depth guides on cold email, ICP mapping, LinkedIn outreach, deliverability, and outbound metrics, written by the team that has booked 12K+ B2B meetings.",
  keywords: [
    "b2b lead generation blog",
    "cold email deliverability guide",
    "linkedin outreach sequences",
    "icp mapping for b2b",
    "b2b sales pipeline metrics",
    "outbound sales playbooks",
    "agency vs in-house sdr",
    "linkedin profile optimization tips",
    "b2b lead gen metrics",
    "cold email best practices",
    "b2b outbound strategy blog",
    "sales development blog",
  ],
  alternates: { canonical: "https://www.myntmore.com/resources/blogs" },
  openGraph: {
    title: "B2B Lead Generation Blog | Myntmore",
    description: "Practical lead gen guides from the team behind 12K+ B2B meetings booked.",
    url: "https://www.myntmore.com/resources/blogs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const BLOG_POSTS: BlogPost[] = [
  {
    href: "/blog/vanity-metrics-personal-brand-pipeline",
    tags: ["Personal Branding", "Lead Generation"],
    title: "Visibility vs. Value: Optimising the Founder's Personal Brand for Pipeline, Not Likes",
    excerpt: "A ₹3.5 crore order came from one cold LinkedIn message. Here's why vanity metrics won't repeat it, and how to fix your profile's positioning gap.",
    readTime: "5 min read",
  },
  {
    href: "/blog/outbound-funnel-math-not-guesswork",
    tags: ["Lead Generation", "Metrics & Reporting"],
    title: "Gut Feel vs. Funnel Math: Why Outbound Is a Technical System, Not a Guessing Game",
    excerpt: "Outbound isn't a guessing game. It's rhythm, math, and infrastructure. Here's how to map the real value of a single booked meeting.",
    readTime: "5 min read",
  },
  {
    href: "/blog/relevance-beats-reach-b2b-outbound",
    tags: ["Cold Outreach", "Copywriting"],
    title: "Relevance Beats Reach: Why Your Outbound Strategy Is Failing to Trigger Responses",
    excerpt: "More sends and bigger lists won't fix silent outbound. Three psychology shifts that turn cold outreach into a real conversation starter.",
    readTime: "5 min read",
  },
  {
    href: "/blog/conversations-not-impressions-outbound",
    tags: ["Lead Generation", "Cold Outreach"],
    title: "The Impression Illusion: Why Outbound Success Is Mapped in Conversations, Not Sends",
    excerpt: "Sending more messages isn't a strategy. Here's why predictable pipelines are built on conversation momentum, not impression volume.",
    readTime: "5 min read",
  },
  {
    href: "/blog/case-study-procrastination",
    tags: ["Content Strategy", "Lead Generation"],
    title: "Case Study Procrastination: Why Your Best Proof Is Still Undocumented",
    excerpt: "Your strongest customer proof may still be buried in Slack. Here is how to turn fresh wins into credible sales assets before the details disappear.",
    readTime: "4 min read",
  },
  {
    href: "/blog/pitching-trap-competitor-positioning",
    tags: ["Sales Strategy", "Copywriting"],
    title: "The Pitching Trap: How to Articulate Pain Better Than Your Competitors",
    excerpt: "Generic feature pitches get ignored. Better competitor research helps your team lead with real buyer pain and sharper positioning.",
    readTime: "4 min read",
  },
  {
    href: "/blog/cold-email-vs-linkedin-outreach",
    tags: ["Comparison", "Cold Email", "LinkedIn Outreach"],
    title: "Cold Email vs. LinkedIn Outreach for B2B Pipeline",
    excerpt: "Neither channel universally wins. Reply rates, cost to scale, and which buyers respond to which channel, with real benchmark data.",
    readTime: "6 min read",
  },
  {
    href: "/blog/cold-email-compliance-guide",
    tags: ["Cold Email", "Compliance"],
    title: "Is Cold Email Legal? A Compliance Guide for B2B Outbound",
    excerpt: "CAN-SPAM, GDPR, India's DPDP Act, and CASL explained in plain English, plus a practical compliance checklist.",
    readTime: "7 min read",
  },
  {
    href: "/blog/b2b-outbound-benchmark-report-2026",
    tags: ["Lead Generation", "Metrics & Reporting"],
    title: "The 2026 B2B Outbound Benchmark Report",
    excerpt: "Real reply rate, inbox placement, and time-to-meeting benchmarks from 300+ B2B accounts, aggregated and anonymized. See how you compare.",
    readTime: "8 min read",
  },
  {
    href: "/blog/tam-trap-vague-targeting",
    tags: ["ICP & Targeting", "Lead Generation"],
    title: "The TAM Trap: Why Vague Targeting Is Quietly Killing Your Outbound Pipeline",
    excerpt: "Targeting \"founders and CXOs\" isn't a strategy, it's praying in the dark. Here's how to find your Total Conversional Market instead.",
    readTime: "5 min read",
  },
  {
    href: "/blog/3-second-rule-cold-outreach",
    tags: ["Cold Outreach", "Copywriting"],
    title: "The 3-Second Rule: How to Stop Writing Outbound Messages That Get Ignored",
    excerpt: "Your outbound isn't ignored because of the algorithm. It's ignored because it's boring. Here's the fix.",
    readTime: "4 min read",
  },
  {
    href: "/blog/value-premium-lead-magnets",
    tags: ["Lead Magnets", "Content Strategy"],
    title: "The Value Premium: Stop Chasing Attention and Start Creating Magnetic Leads",
    excerpt: "Real value is rare. Here's the Signal-Heavy Structuring framework we use to build content that generates direct sales requests.",
    readTime: "5 min read",
  },
  {
    href: "/blog/predictable-b2b-lead-gen-engine",
    tags: ["Lead Generation"],
    title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine",
    excerpt: "The exact framework we use to build a lead generation engine that compounds over time. No guessing, no spraying.",
    readTime: "5 min read",
  },
  {
    href: "/blog/ecommerce-conversion-playbook",
    tags: ["Conversion", "eCommerce"],
    title: "The eCommerce Conversion Playbook",
    excerpt: "Traffic without conversion is expensive noise. A practical playbook to fix the trust gap, friction, and messaging killing your conversion rate.",
    readTime: "5 min read",
  },
  {
    href: "/blog/founder-personal-brand-linkedin",
    tags: ["Personal Branding", "LinkedIn Outreach"],
    title: "The Founder's Edge: Why You Are Your Company's Best Marketing Asset",
    excerpt: "Founders who build a real LinkedIn presence close deals faster and generate inbound without ad spend. Here's the content strategy.",
    readTime: "5 min read",
  },
  {
    href: "/blog/cold-email-deliverability-guide",
    tags: ["Cold Email"],
    title: "Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)",
    excerpt: "Deliverability is the silent killer of outbound. Most campaigns fail before a single human ever reads them. Here is how to fix it.",
    readTime: "6 min read",
  },
  {
    href: "/blog/icp-mapping-b2b",
    tags: ["ICP & Targeting"],
    title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close",
    excerpt: "Stop targeting everyone. The exact ICP mapping process we use to find the buyers most likely to close, and build outreach around them.",
    readTime: "5 min read",
  },
  {
    href: "/blog/linkedin-outreach-sequences",
    tags: ["LinkedIn Outreach"],
    title: "LinkedIn Outreach Sequences That Actually Get Replies",
    excerpt: "The multi-touch LinkedIn sequence structure that warms up prospects and converts connections into conversations, without being spammy.",
    readTime: "6 min read",
  },
  {
    href: "/blog/linkedin-profile-inbound-lead-machine",
    tags: ["Personal Branding", "LinkedIn Outreach"],
    title: "The Silent Salesperson: How to Turn Your LinkedIn Profile into an Inbound Lead Machine",
    excerpt: "No one reads a word you post without checking your profile first. The exact framework, and the $1M deal that proved it.",
    readTime: "4 min read",
  },
  {
    href: "/blog/agency-vs-in-house",
    tags: ["Comparison"],
    title: "Agency vs. In-House SDR: How to Build B2B Outbound",
    excerpt: "A direct, non-salesy comparison of cost, ramp-up time, tooling, and risk, with real figures from running both.",
    readTime: "6 min read",
  },
  {
    href: "/blog/b2b-lead-gen-metrics",
    tags: ["Analytics"],
    title: "The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop)",
    excerpt: "Most outbound teams track the wrong numbers. These 7 metrics tell you exactly where your pipeline is leaking, and how to fix it.",
    readTime: "7 min read",
  },
];

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch("https://medium.com/feed/@myntmore", { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.split("<item>").slice(1);
    return items
      .map((item) => {
        const title = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1]?.trim() ?? "";
        const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? "";
        const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? "";
        return { title, link, pubDate };
      })
      .filter((p) => p.title && p.link)
      .slice(0, 3);
  } catch {
    return [];
  }
}

function formatMediumDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default async function BlogsPage() {
  const mediumPosts = await getMediumPosts();

  return (
    <InnerLayout>
      <JsonLd data={BREADCRUMB_SCHEMA} />
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(37,99,235,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.09) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-140px", left: "10%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#3b82f6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#3b82f6" }}>Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            In-depth guides<br />
            <span className="relative inline-block">
              No fluff
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 220 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q55 2 110 6 Q165 10 218 5" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Practical B2B lead generation playbooks from the team that has booked 12K+ meetings and generated $120M+ in pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="#blog-grid" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Read the Guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="https://medium.com/@myntmore" target="_blank" rel="noopener noreferrer" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Follow on Medium
            </a>
          </div>
        </div>
      </section>

      <section id="blog-grid" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <BlogGrid posts={BLOG_POSTS} />
          </FadeIn>
        </div>
      </section>

      {mediumPosts.length > 0 && (
        <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-7 h-7" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fill="#0a0a0a" d="M588.67 296.36c0 163.72-131.87 296.35-294.44 296.35S-.21 460.08-.21 296.36 131.65 0 294.23 0s294.44 132.63 294.44 296.36M910.42 296.36c0 154.16-65.94 279.15-147.22 279.15s-147.22-125-147.22-279.15S681.93 17.21 763.2 17.21s147.22 125 147.22 279.15M1043.63 296.36c0 138.19-23.17 250.24-51.76 250.24s-51.76-112.05-51.76-250.24 23.17-250.24 51.76-250.24 51.76 112.05 51.76 250.24" />
                </svg>
                <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>Also on Medium</h2>
              </div>
              <a href="https://medium.com/@myntmore" target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-2.5 text-sm font-bold inline-flex items-center gap-2">
                Follow on Medium
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {mediumPosts.map((post) => (
                <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <span className="text-xs font-semibold" style={{ color: "#8C8279" }}>{formatMediumDate(post.pubDate)}</span>
                  <h3 className="text-base font-black mt-2 mb-3 leading-snug" style={{ color: "#0a0a0a" }}>{post.title}</h3>
                  <span className="text-xs font-bold" style={{ color: "#0a0a0a" }}>Read on Medium ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">Let us build the system for you</h2>
          <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Book a free 30-minute audit. We&apos;ll map out exactly how to replicate these results for your business.</p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
            Book a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
