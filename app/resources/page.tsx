import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Growth Resources: Blogs & Free Tools | Myntmore",
  description: "Free B2B lead generation resources from Myntmore — in-depth blogs on cold email, ICP mapping, LinkedIn outreach, and outbound metrics, plus free AI tools for outreach.",
  alternates: { canonical: "https://myntmore.com/resources" },
  openGraph: {
    title: "B2B Growth Resources: Blogs & Free Tools | Myntmore",
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
  {
    title: "LinkedIn Profile Optimizer",
    desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies. Paste your current profile and get a full rewrite in minutes.",
    href: "/tools/linkedin-optimizer",
    icon: "🔗",
    cta: "Optimize my profile",
  },
  {
    title: "DM Angle Generator",
    desc: "Generate hyper-personalised outreach opening angles based on prospect triggers and recent activity. Stop sending the same opener to every lead.",
    href: "https://mynt-more-angles.lovable.app",
    icon: "⚡",
    cta: "Generate angles",
  },
];

const MARQUEE_ITEMS = [
  "Cold Email Playbooks", "LinkedIn Outreach", "ICP Mapping", "Free AI Tools",
  "Case Studies", "Deliverability Guides", "Outbound Metrics", "GTM Frameworks",
  "Pipeline Building", "Lead Scoring", "Reply Rate Optimisation", "B2B Strategy",
];

export default function Resources() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <InnerLayout>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        {/* Decorative blobs */}
        <div aria-hidden style={{ position: "absolute", top: "20%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.14) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>Free Resources</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Learn the system.<br />
            <span style={{ color: "#F5B731" }}>Then let us run it</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Free playbooks, AI tools, and real case studies for B2B founders who want predictable pipeline — built by the team that has booked 12K+ meetings.
          </p>

          <div className="flex flex-wrap gap-4 hero-fade-d3">
            <Link href="/resources/blogs" className="btn-dark px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2">
              Read the Blog
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/resources/tools" className="px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2 rounded-full border transition-all duration-200 hover:border-yellow-400 hover:text-black" style={{ borderColor: "#E8E2D9", color: "#3D3D3D" }}>
              Try Free Tools
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t hero-fade-d4" style={{ borderColor: "#E8E2D9" }}>
            {[
              { n: "12K+", label: "B2B meetings booked" },
              { n: "$120M+", label: "Pipeline generated" },
              { n: "5", label: "Free guides & tools" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.n}</div>
                <div className="text-xs sm:text-sm" style={{ color: "#8C8279" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="py-5 overflow-hidden border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 30s linear infinite" }}>
          {doubled.map((label, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
              style={{
                background: i % 2 === 0 ? "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)" : "linear-gradient(135deg,#fff 0%,#EFF6FF 100%)",
                borderColor: i % 2 === 0 ? "rgba(245,183,49,0.35)" : "rgba(59,130,246,0.25)",
                color: "#1a1a1a",
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
              }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: i % 2 === 0 ? "#D97706" : "#3b82f6" }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Blogs ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Blog</span>
                <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>In-depth guides & playbooks</h2>
                <p className="text-sm mt-2" style={{ color: "#52525B" }}>No fluff. Just the frameworks we use with real clients.</p>
              </div>
              <Link href="/resources/blogs" className="text-sm font-bold hidden sm:inline-flex items-center gap-1 flex-shrink-0 ml-6" style={{ color: "#F5B731" }}>
                View all 5 →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BLOG_PREVIEW.map((p) => (
                <Link key={p.href} href={p.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1.5" style={{ background: `linear-gradient(90deg,${p.accent},${p.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: `${p.accent}12`, color: p.accent }}>{p.tag}</span>
                    <h3 className="text-base font-black mb-4 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                      <span className="text-xs font-bold transition-all duration-200 group-hover:gap-2" style={{ color: p.accent }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/resources/blogs" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all 5 blogs →</Link>
            </div>
            <div className="mt-4 hidden sm:block text-right">
              <span className="text-xs" style={{ color: "#8C8279" }}>+ 2 more guides available in the blog</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Free Tools</span>
                <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>AI tools built for outbound</h2>
                <p className="text-sm mt-2" style={{ color: "#52525B" }}>No sign-up. No credit card. No catch.</p>
              </div>
              <Link href="/resources/tools" className="text-sm font-bold hidden sm:inline-flex items-center gap-1 flex-shrink-0 ml-6" style={{ color: "#F5B731" }}>
                View all tools →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {TOOLS_PREVIEW.map((t, i) => (
                <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer"
                  className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <div className="h-1.5" style={{ background: i === 0 ? "linear-gradient(90deg,#F5B731,#f97316)" : "linear-gradient(90deg,#a855f7,#3b82f6)" }} />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{t.icon}</div>
                    <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>{t.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{t.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
                      style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
                      {t.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 sm:hidden text-center">
              <Link href="/resources/tools" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all tools →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)" }}>
              <div aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 300, height: 300, marginTop: -150, marginLeft: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.15) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
              <div aria-hidden style={{ position: "absolute", top: "50%", left: "80%", width: 300, height: 300, marginTop: -150, marginLeft: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
              <div className="relative z-10">
                <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#F5B731", border: "1px solid rgba(245,183,49,0.25)" }}>Ready to build the system?</span>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">Want us to build the pipeline<br />engine for you?</h2>
                <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>Book a free 30-minute GTM audit. We&apos;ll map out exactly how to build a predictable outbound system for your business.</p>
                <a href="https://calendly.com/founder-myntmore/web?redirect_url=https://myntmore.com/thankyou" target="_blank" rel="noopener noreferrer" className="btn-dark px-10 py-4 text-base font-bold inline-flex items-center gap-2">
                  Book a Free GTM Audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
