import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../../components/InnerLayout";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FadeIn from "../../../components/FadeIn";
import JsonLd from "../../../components/JsonLd";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/resources/glossary/signal-heavy-structuring`;
const TITLE = "Signal-Heavy Structuring";
const DESCRIPTION = "Signal-Heavy Structuring is a content framework built around including a concrete, immediately usable asset, a template, a tool, a specific breakdown, rather than generic branding copy, so the content earns a reply on its own.";
// Short form for the SERP snippet; DESCRIPTION stays full-length for the
// DefinedTerm schema, where the complete definition is the point.
const META_DESCRIPTION = "Signal-Heavy Structuring: build content around a concrete, usable asset, a template, a tool, a breakdown, so it earns a reply instead of reading as branding.";

export const metadata: Metadata = {
  title: `${TITLE} — B2B Outbound Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["signal-heavy structuring", "b2b content framework", "lead magnets that convert", "value-first content marketing", "b2b content that gets replies"],
  openGraph: {
    title: `${TITLE} | Myntmore Glossary`,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const TERM_SCHEMA = buildDefinedTermSchema({
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inDefinedTermSet: `${SITE_URL}/resources/glossary`,
});

export default function SignalHeavyStructuringPage() {
  return (
    <InnerLayout>
      <JsonLd data={TERM_SCHEMA} />

      <section className="relative pt-32 pb-14 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }, { label: TITLE, href: "/resources/glossary/signal-heavy-structuring" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(124,58,237,0.08)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.2)" }}>Content Strategy</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>{TITLE}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            A framework for building content and lead magnets around a concrete, usable asset, not generic branding copy, so the content itself does the convincing.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border-l-4 p-6 mb-10" style={{ backgroundColor: "#F8F6F2", borderColor: "#7C3AED" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#7C3AED" }}>Definition</p>
              <p className="text-base leading-relaxed" style={{ color: "#0a0a0a" }}>
                <strong>Signal-Heavy Structuring:</strong> a content framework where every piece includes a highly specific, concrete asset the reader can use to solve a real problem immediately, rather than generic branding copy. If a system is being explained, that means a tailored walkthrough showing exactly how it works. If a tool is being discussed, that means an actual pre-built template, not just a description of one.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>The test it has to pass</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                  The moment a prospect opens the content, they should immediately think: &quot;there&apos;s something specific in here I can use today.&quot; That's the bar. A generic checklist or a repackaged how-to that could apply to any company in any industry fails it, no matter how well-designed it looks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>Why it works</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                  High-converting content isn&apos;t about how much is said, it&apos;s about what sticks and what a reader can immediately act on. When a piece of content hands over a genuinely useful, pre-built workaround to a problem someone is actively living with, it doesn&apos;t need a hard sell attached. The value speaks for itself, and cold interest turns into a booked conversation without extra persuasion.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            <p className="text-sm mb-4" style={{ color: "#8C8279" }}>Where this comes from</p>
            <Link href="/blog/value-premium-lead-magnets" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#7C3AED" }}>
              Read: The Value Premium — Stop Chasing Attention and Start Creating Magnetic Leads
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="mt-6">
            <Link href="/resources/glossary" className="text-sm font-bold" style={{ color: "#8C8279" }}>&larr; Back to the glossary</Link>
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
