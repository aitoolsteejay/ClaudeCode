import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import FadeIn from "../../components/FadeIn";
import JsonLd from "../../components/JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Resources", url: `${SITE_URL}/resources` },
  { name: "Blog", url: `${SITE_URL}/resources/blogs` },
]);

export const metadata: Metadata = {
  title: "B2B Lead Generation Blog | Myntmore",
  description: "In-depth guides on cold email, ICP mapping, LinkedIn outreach, deliverability, and outbound metrics, written by the team that has booked 12K+ B2B meetings.",
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
    excerpt: "Stop targeting everyone. The exact ICP mapping process we use to find the buyers most likely to close, and build outreach around them.",
    readTime: "5 min read",
    accent: "#10b981",
  },
  {
    href: "/blog/linkedin-outreach-sequences",
    tag: "LinkedIn Outreach",
    title: "LinkedIn Outreach Sequences That Actually Get Replies",
    excerpt: "The multi-touch LinkedIn sequence structure that warms up prospects and converts connections into conversations, without being spammy.",
    readTime: "6 min read",
    accent: "#a855f7",
  },
  {
    href: "/blog/b2b-lead-gen-metrics",
    tag: "Analytics",
    title: "The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop)",
    excerpt: "Most outbound teams track the wrong numbers. These 7 metrics tell you exactly where your pipeline is leaking, and how to fix it.",
    readTime: "7 min read",
    accent: "#f97316",
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
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">Want us to build the system for you?</h2>
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
