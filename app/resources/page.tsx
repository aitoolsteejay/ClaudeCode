import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Growth Resources: Blogs, Tools & Case Studies | Myntmore",
  description: "Free B2B lead generation resources from Myntmore — in-depth blogs on cold email, ICP mapping, LinkedIn outreach, and outbound metrics, plus free AI tools and real client case studies.",
  alternates: { canonical: "https://myntmore.com/resources" },
  openGraph: {
    title: "B2B Growth Resources: Blogs, Tools & Case Studies | Myntmore",
    description: "Free playbooks, tools, and real client results for B2B founders who want predictable pipeline.",
    url: "https://myntmore.com/resources",
  },
};

const BLOG_PREVIEW = [
  {
    href: "/blog/predictable-b2b-lead-gen-engine",
    tag: "Lead Generation",
    title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine",
    readTime: "5 min read",
    accent: "#3b82f6",
  },
  {
    href: "/blog/cold-email-deliverability-guide",
    tag: "Cold Email",
    title: "Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)",
    readTime: "6 min read",
    accent: "#ef4444",
  },
  {
    href: "/blog/icp-mapping-b2b",
    tag: "ICP & Targeting",
    title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close",
    readTime: "5 min read",
    accent: "#10b981",
  },
];

const TOOLS_PREVIEW = [
  { title: "LinkedIn Profile Optimizer", desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies.", href: "https://myntmore-linkedin-profile-optimizer.lovable.app", icon: "🔗" },
  { title: "DM Angle Generator", desc: "Generate hyper-personalised outreach opening angles based on prospect triggers and activity.", href: "https://mynt-more-angles.lovable.app", icon: "⚡" },
];

const CASE_STUDIES_PREVIEW = [
  {
    href: "/case-studies/saas-series-a",
    tag: "SaaS · Series A",
    title: "40 qualified meetings in 8 weeks from a cold start",
    stats: ["40 meetings", "34% reply rate", "$1.2M pipeline"],
    accent: "#3b82f6",
  },
  {
    href: "/case-studies/professional-services-linkedin",
    tag: "Professional Services",
    title: "LinkedIn brand drove 3x inbound in 90 days",
    stats: ["3x inbound", "18K new followers", "4.8% engagement"],
    accent: "#a855f7",
  },
  {
    href: "/case-studies/ecommerce-conversion-playbook",
    tag: "eCommerce Tech",
    title: "Cold email added $400K pipeline in 6 weeks",
    stats: ["28 meetings", "41% open rate", "$400K pipeline"],
    accent: "#10b981",
  },
];

export default function Resources() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Learn the system.<br />Then let us run it.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Free playbooks, tools, and real client results for B2B founders who want predictable pipeline.
          </p>
        </div>
      </section>

      {/* ── Blogs ── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Blog</span>
              <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>In-depth guides & playbooks</h2>
            </div>
            <Link href="/resources/blogs" className="text-sm font-bold hidden sm:inline-flex items-center gap-1" style={{ color: "#F5B731" }}>
              View all <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BLOG_PREVIEW.map((p) => (
                <Link key={p.href} href={p.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${p.accent},${p.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${p.accent}12`, color: p.accent }}>{p.tag}</span>
                    <h3 className="text-sm font-black mb-4 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                      <span className="text-xs font-bold" style={{ color: p.accent }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link href="/resources/blogs" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all blogs →</Link>
            </div>
            <div className="mt-6 hidden sm:block text-right">
              <Link href="/resources/blogs" className="text-sm font-semibold" style={{ color: "#52525B" }}>
                + 2 more guides in the blog →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Free Tools</span>
              <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>AI-powered tools, free to use</h2>
            </div>
            <Link href="/resources/tools" className="text-sm font-bold hidden sm:inline-flex items-center gap-1" style={{ color: "#F5B731" }}>
              View all <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TOOLS_PREVIEW.map((t) => (
                <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <div className="text-2xl mb-3">{t.icon}</div>
                  <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>{t.desc}</p>
                  <span className="text-xs font-bold" style={{ color: "#F5B731" }}>Try free →</span>
                </a>
              ))}
            </div>
            <div className="mt-6 sm:hidden text-center">
              <Link href="/resources/tools" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all tools →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(16,185,129,0.08)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>Case Studies</span>
              <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>Real results, real numbers</h2>
            </div>
            <Link href="/case-studies" className="text-sm font-bold hidden sm:inline-flex items-center gap-1" style={{ color: "#F5B731" }}>
              View all <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CASE_STUDIES_PREVIEW.map((cs) => (
                <Link key={cs.href} href={cs.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${cs.accent},${cs.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${cs.accent}12`, color: cs.accent }}>{cs.tag}</span>
                    <h3 className="text-sm font-black mb-4 leading-snug" style={{ color: "#0a0a0a" }}>{cs.title}</h3>
                    <div className="space-y-1 mb-4">
                      {cs.stats.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={cs.accent} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold" style={{ color: cs.accent }}>Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 sm:hidden text-center">
              <Link href="/case-studies" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all case studies →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
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
