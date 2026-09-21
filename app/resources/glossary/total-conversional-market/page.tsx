import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../../components/InnerLayout";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FadeIn from "../../../components/FadeIn";
import JsonLd from "../../../components/JsonLd";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/resources/glossary/total-conversional-market`;
const TITLE = "Total Conversional Market (TCM)";
const DESCRIPTION = "Total Conversional Market (TCM) is the highly specific, highly motivated subset of prospects actively feeling a pain point today, already looking for workarounds, and ready to act immediately, as distinct from the broad, theoretical Total Addressable Market (TAM).";
// Short form for the SERP snippet; DESCRIPTION stays full-length for the
// DefinedTerm schema, where the complete definition is the point.
const META_DESCRIPTION = "Total Conversional Market (TCM): the motivated slice of your TAM feeling the pain today and ready to act. How TCM differs from TAM, and how to target it.";

export const metadata: Metadata = {
  title: `${TITLE} — B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["total conversional market", "tcm vs tam", "total addressable market vs total conversional market", "b2b targeting definition", "how to define your icp"],
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

export default function TotalConversionalMarketPage() {
  return (
    <InnerLayout>
      <JsonLd data={TERM_SCHEMA} />

      <section className="relative pt-32 pb-14 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(217,119,6,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }, { label: TITLE, href: "/resources/glossary/total-conversional-market" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>Targeting</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>{TITLE}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            The specific, motivated slice of your market that&apos;s actually ready to buy right now, as opposed to the much larger group who theoretically could someday.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border-l-4 p-6 mb-10" style={{ backgroundColor: "#FEF9EC", borderColor: "#D97706" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>Definition</p>
              <p className="text-base leading-relaxed" style={{ color: "#0a0a0a" }}>
                <strong>Total Conversional Market (TCM):</strong> the highly specific, highly motivated subset of prospects who are actively feeling the pain point today, are already looking for workarounds, and are ready to act immediately.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>TCM vs. TAM</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
                  <strong>Total Addressable Market (TAM)</strong> is the broad, high-level audience that theoretically could buy your product in a perfect world. It&apos;s the number that goes in a pitch deck. TCM is the much narrower group who could actually close this quarter: the ones already living with the problem, already searching for a fix.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                  Targeting your TAM with generic messaging produces outreach that feels random and depends entirely on luck. Targeting your TCM means every message lands in the middle of a priority the prospect is already trying to solve.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>Why it matters for outbound</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                  A pipeline full of polite &quot;maybe later&quot; replies is usually a sign the targeting is still TAM-shaped, not TCM-shaped. Shrinking the target list to the TCM, and being willing to ignore everyone outside it, is often what turns a stalled outbound motion into a predictable one.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            <p className="text-sm mb-4" style={{ color: "#8C8279" }}>Where this comes from</p>
            <Link href="/blog/tam-trap-vague-targeting" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#D97706" }}>
              Read: The TAM Trap — Why Vague Targeting Is Quietly Killing Your Outbound Pipeline
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
