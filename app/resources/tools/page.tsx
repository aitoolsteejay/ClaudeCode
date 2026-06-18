import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Free B2B Lead Generation Tools | Myntmore",
  description: "Free AI-powered tools for B2B founders — optimise your LinkedIn profile, generate outreach angles, and build a stronger pipeline. No sign-up required.",
  alternates: { canonical: "https://myntmore.com/resources/tools" },
  openGraph: {
    title: "Free B2B Lead Generation Tools | Myntmore",
    description: "AI-powered tools for B2B outreach — free to use, no sign-up required.",
    url: "https://myntmore.com/resources/tools",
  },
};

const FREE_TOOLS = [
  {
    title: "LinkedIn Profile Optimizer",
    desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies. Paste your current profile and get a rewrite optimised for your ICP.",
    href: "https://myntmore-linkedin-profile-optimizer.lovable.app",
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

export default function ToolsPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Tools</span>
          </div>
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Free Tools</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            AI tools.<br />Free to use.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Tools we have built to help B2B founders run smarter outreach. No sign-up, no credit card, no catch.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FREE_TOOLS.map((t) => (
                <div key={t.title} className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="text-4xl mb-4">{t.icon}</div>
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
              <p className="text-sm mb-6" style={{ color: "#52525B" }}>We build bespoke AI outbound tools for our clients — scrapers, personalisation engines, intent trackers. Book a call to find out what we can build for you.</p>
              <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
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
