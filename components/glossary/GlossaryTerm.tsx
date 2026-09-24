import Link from "next/link";
import InnerLayout from "@/app/components/InnerLayout";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import FadeIn from "@/app/components/FadeIn";
import JsonLd from "@/app/components/JsonLd";

export interface GlossaryTermProps {
  slug: string;
  tag: string;
  accent: string;
  title: string;
  tagline: string;
  definition: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
  articleSchema: Record<string, unknown>;
}

// Shared layout for every short-form glossary entry (~20-30 word definition,
// one supporting paragraph, one outbound link). The original 3 terms
// (Total Conversional Market, Signal-Heavy Structuring, 3-Second Rule) stay
// as bespoke longer-form pages -- this is for the newer, shorter dictionary
// style entries so 17+ near-identical pages don't duplicate the same layout.
export default function GlossaryTerm({
  slug,
  tag,
  accent,
  title,
  tagline,
  definition,
  body,
  sourceLabel,
  sourceHref,
  articleSchema,
}: GlossaryTermProps) {
  return (
    <InnerLayout>
      <JsonLd data={articleSchema} />

      <section className="relative pt-32 pb-14 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: `radial-gradient(circle, ${accent}2e 0%, ${accent}0f 40%, transparent 68%)`, filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }, { label: title, href: `/resources/glossary/${slug}` }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${accent}14`, color: accent, border: `1px solid ${accent}33` }}>{tag}</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>{title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>{tagline}</p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border-l-4 p-6 mb-10" style={{ backgroundColor: `${accent}0d`, borderColor: accent }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>Definition</p>
              <p className="text-base leading-relaxed" style={{ color: "#0a0a0a" }}>{definition}</p>
            </div>

            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{body}</p>
          </FadeIn>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            <p className="text-sm mb-4" style={{ color: "#8C8279" }}>Where this comes from</p>
            <Link href={sourceHref} className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: accent }}>
              {sourceLabel}
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
