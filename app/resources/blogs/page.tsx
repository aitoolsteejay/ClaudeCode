import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Lead Generation Blog | Myntmore",
  description: "In-depth guides on cold email, ICP mapping, LinkedIn outreach, deliverability, and outbound metrics — written by the team that has booked 12K+ B2B meetings.",
  alternates: { canonical: "https://myntmore.com/resources/blogs" },
  openGraph: {
    title: "B2B Lead Generation Blog | Myntmore",
    description: "Practical lead gen guides from the team behind 12K+ B2B meetings booked.",
    url: "https://myntmore.com/resources/blogs",
  },
};

const BLOG_POSTS = [
  {
    href: "/blog/predictable-b2b-lead-gen-engine",
    tag: "Lead Generation",
    title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine",
    excerpt: "The exact framework we use to build a lead generation engine that compounds over time. No guessing, no spraying.",
    readTime: "5 min read",
    accent: "#3b82f6",
  },
  {
    href: "/blog/cold-email-deliverability-guide",
    tag: "Cold Email",
    title: "Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)",
    excerpt: "Deliverability is the silent killer of outbound. Most campaigns fail before a single human ever reads them. Here is how to fix it.",
    readTime: "6 min read",
    accent: "#ef4444",
  },
  {
    href: "/blog/icp-mapping-b2b",
    tag: "ICP & Targeting",
    title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close",
    excerpt: "Stop targeting everyone. The exact ICP mapping process we use to find the buyers most likely to close — and build outreach around them.",
    readTime: "5 min read",
    accent: "#10b981",
  },
  {
    href: "/blog/linkedin-outreach-sequences",
    tag: "LinkedIn Outreach",
    title: "LinkedIn Outreach Sequences That Actually Get Replies",
    excerpt: "The multi-touch LinkedIn sequence structure that warms up prospects and converts connections into conversations — without being spammy.",
    readTime: "6 min read",
    accent: "#a855f7",
  },
  {
    href: "/blog/b2b-lead-gen-metrics",
    tag: "Analytics",
    title: "The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop)",
    excerpt: "Most outbound teams track the wrong numbers. These 7 metrics tell you exactly where your pipeline is leaking — and how to fix it.",
    readTime: "7 min read",
    accent: "#f97316",
  },
];

export default function BlogsPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            In-depth guides —<br />No fluff
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Practical B2B lead generation playbooks from the team that has booked 12K+ meetings and generated $120M+ in pipeline.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((p) => (
                <Link key={p.href} href={p.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${p.accent},${p.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${p.accent}12`, color: p.accent }}>{p.tag}</span>
                    <h2 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h2>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{p.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                      <span className="text-xs font-bold" style={{ color: p.accent }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">Want us to build the system for you?</h2>
          <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Book a free 30-minute audit. We&apos;ll map out exactly how to replicate these results for your business.</p>
          <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
            Book a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
