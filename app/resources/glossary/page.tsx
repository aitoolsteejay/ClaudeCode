import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Outbound Glossary",
  description: "Clear, single-page definitions of the frameworks and terms Myntmore uses in its own outbound systems: Total Conversional Market, Signal-Heavy Structuring, and the 3-Second Rule.",
  keywords: [
    "b2b outbound glossary",
    "total conversional market definition",
    "signal-heavy structuring",
    "3-second rule cold outreach",
    "b2b outbound terminology",
    "cold outreach frameworks explained",
  ],
  alternates: { canonical: "https://www.myntmore.com/resources/glossary" },
  openGraph: {
    title: "B2B Outbound Glossary | Myntmore",
    description: "Clear definitions of the frameworks Myntmore uses in its own outbound systems.",
    url: "https://www.myntmore.com/resources/glossary",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const TERMS = [
  {
    href: "/resources/glossary/total-conversional-market",
    tag: "Targeting",
    title: "Total Conversional Market (TCM)",
    excerpt: "The highly specific, highly motivated subset of prospects actively feeling your problem today, versus the broad, theoretical TAM.",
    accent: "#D97706",
  },
  {
    href: "/resources/glossary/signal-heavy-structuring",
    tag: "Content Strategy",
    title: "Signal-Heavy Structuring",
    excerpt: "A framework for building content that includes a concrete, usable asset, not generic branding copy, so it earns a reply on its own.",
    accent: "#7C3AED",
  },
  {
    href: "/resources/glossary/3-second-rule",
    tag: "Cold Outreach",
    title: "The 3-Second Rule",
    excerpt: "You have roughly 3 seconds to earn a prospect's curiosity before an outbound message gets ignored, and pitching in that window loses it.",
    accent: "#F97316",
  },
];

export default function GlossaryPage() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.18) 0%, rgba(255,160,0,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7C3AED" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#7C3AED" }}>Glossary</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The terms behind the system
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            A few frameworks come up repeatedly across Myntmore&apos;s own content and campaigns. Here&apos;s exactly what each one means, in one place.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TERMS.map((t) => (
                <Link key={t.href} href={t.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${t.accent},${t.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${t.accent}12`, color: t.accent }}>{t.tag}</span>
                    <h2 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{t.title}</h2>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{t.excerpt}</p>
                    <span className="text-xs font-bold" style={{ color: t.accent }}>Read the definition &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
