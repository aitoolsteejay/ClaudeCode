import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Free B2B Lead Generation Tools | Myntmore",
  description: "Free AI-powered tools for B2B founders: optimise your LinkedIn profile, generate outreach angles, and build a stronger pipeline. No sign-up required.",
  alternates: { canonical: "https://myntmore.com/resources/tools" },
  openGraph: {
    title: "Free B2B Lead Generation Tools | Myntmore",
    description: "AI-powered tools for B2B outreach, free to use, no sign-up required.",
    url: "https://myntmore.com/resources/tools",
  },
};

const FREE_TOOLS = [
  {
    title: "LinkedIn Profile Optimizer",
    desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies. Paste your current profile and get a rewrite optimised for your ICP.",
    href: "/tools/linkedin-optimizer",
    icon: "🔗",
    cta: "Optimize my profile",
    accentColor: "#0077b5",
    accentBg: "rgba(0,119,181,0.1)",
    hoverClass: "card-hover-linkedin",
  },
  {
    title: "DM Angle Generator",
    desc: "Generate 5 psychology-aligned outreach opening angles tailored to your industry, ICP role, and offer. Stop sending the same opener to every lead.",
    href: "/tools/dm-angle-generator",
    icon: "⚡",
    cta: "Generate angles",
    accentColor: "#a855f7",
    accentBg: "rgba(168,85,247,0.1)",
    hoverClass: "card-hover-purple",
  },
  {
    title: "ROI Calculator",
    desc: "Estimate the pipeline and revenue you could generate from cold email and LinkedIn outreach. Plug in your numbers and see the projected return.",
    href: "/tools/roi-calculator",
    icon: "📊",
    cta: "Calculate my ROI",
    accentColor: "#16a34a",
    accentBg: "rgba(34,197,94,0.1)",
    hoverClass: "card-hover-green",
  },
  {
    title: "Posting Rhythm Builder",
    desc: "Plan a consistent LinkedIn posting rhythm that keeps your personal brand visible to your ICP, without guessing what to post or when.",
    href: "/tools/posting-rhythm-builder",
    icon: "📅",
    cta: "Build my rhythm",
    accentColor: "#D97706",
    accentBg: "rgba(245,183,49,0.12)",
    hoverClass: "card-hover-warm",
  },
  {
    title: "Lead Magnet Idea Generator",
    desc: "Tell us what your business does, who you sell to, and your industry, and get concrete lead magnet ideas you can actually use in outreach.",
    href: "/tools/lead-magnet-ideas",
    icon: "💡",
    cta: "Generate ideas",
    accentColor: "#3b82f6",
    accentBg: "rgba(59,130,246,0.1)",
    hoverClass: "card-hover-blue",
  },
  {
    title: "Founder Presence Analyzer",
    desc: "Benchmark your LinkedIn posting frequency and engagement against up to 5 competitors and get AI-powered positioning and headline recommendations.",
    href: "/tools/founder-presence-analyzer",
    icon: "📈",
    cta: "Analyze my presence",
    accentColor: "#14B8A6",
    accentBg: "rgba(20,184,166,0.1)",
    hoverClass: "card-hover-teal",
  },
  {
    title: "ICP Builder & Value Prop Generator",
    desc: "Build deep B2B and D2C customer profiles from your business description, then get a structured value proposition for each one, including your channel partners.",
    href: "/tools/icp-builder",
    icon: "🎯",
    cta: "Build my ICP",
    accentColor: "#F97316",
    accentBg: "rgba(249,115,22,0.1)",
    hoverClass: "card-hover-orange",
  },
  {
    title: "Case Study & Proposal Generator",
    desc: "Turn a finished project into a case study, or a prospect conversation into a proposal draft. No invented numbers, no generic filler.",
    href: "/tools/case-study-generator",
    icon: "📝",
    cta: "Draft mine",
    accentColor: "#6366f1",
    accentBg: "rgba(99,102,241,0.1)",
    hoverClass: "card-hover-indigo",
  },
  {
    title: "Competitor Battle Card Generator",
    desc: "Researches a competitor live and builds a sales battle card: what they do, their pricing if public, their real strengths and gaps, and how to position against them.",
    href: "/tools/battle-card-generator",
    icon: "🛡️",
    cta: "Build my battle card",
    accentColor: "#ef4444",
    accentBg: "rgba(239,68,68,0.1)",
    hoverClass: "card-hover-red",
  },
];

export default function ToolsPage() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,160,0,0.10) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.20) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-140px", left: "10%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(37,99,235,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Tools</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(245,183,49,0.35)", background: "rgba(245,183,49,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#D97706" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>Free Tools</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            AI tools<br />
            <span className="relative inline-block">
              Free to use
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 260 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q65 2 130 6 Q195 10 258 5" stroke="#F5B731" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Tools we have built to help B2B founders run smarter outreach. No sign-up, no credit card, no catch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="#tools-grid" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Explore Tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/founder-meeting" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
            </a>
          </div>
        </div>
      </section>

      <section id="tools-grid" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FREE_TOOLS.map((t) => (
                <div key={t.title} className={`rounded-2xl border p-8 ${t.hoverClass}`} style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: t.accentBg, border: `1px solid ${t.accentColor}33` }}>{t.icon}</div>
                  <h2 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>{t.title}</h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{t.desc}</p>
                  <a href={t.href} target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                    {t.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-16 rounded-2xl border p-8 text-center" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
              <h2 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>Want a custom tool built for your outreach?</h2>
              <p className="text-sm mb-6" style={{ color: "#52525B" }}>We build bespoke AI outbound tools for our clients: scrapers, personalisation engines, intent trackers. Book a call to find out what we can build for you.</p>
              <a href="/founder-meeting" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
                Book a Free GTM Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
