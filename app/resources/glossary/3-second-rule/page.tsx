import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../../components/InnerLayout";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FadeIn from "../../../components/FadeIn";
import JsonLd from "../../../components/JsonLd";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/resources/glossary/3-second-rule`;
const TITLE = "The 3-Second Rule";
const DESCRIPTION = "The 3-Second Rule: a prospect decides whether to keep reading an outbound message within about 3 seconds, and spending that window pitching features, services, or company history loses their attention before curiosity is earned.";
// Short form for the SERP snippet; DESCRIPTION stays full-length for the
// DefinedTerm schema, where the complete definition is the point.
const META_DESCRIPTION = "The 3-Second Rule: prospects decide whether to keep reading an outbound message in about 3 seconds. Why pitching features in that window loses them.";

export const metadata: Metadata = {
  title: `${TITLE} — B2B Outbound Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["3-second rule cold outreach", "how to write cold outreach that gets replies", "pattern breaking cold email", "earn curiosity outbound", "cold email opening lines"],
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

export default function ThreeSecondRulePage() {
  return (
    <InnerLayout>
      <JsonLd data={TERM_SCHEMA} />

      <section className="relative pt-32 pb-14 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(217,119,6,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }, { label: TITLE, href: "/resources/glossary/3-second-rule" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#F97316", border: "1px solid rgba(249,115,22,0.2)" }}>Cold Outreach</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>{TITLE}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            You have roughly 3 seconds to earn a prospect&apos;s curiosity before an outbound message gets ignored, and spending those seconds pitching loses it.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border-l-4 p-6 mb-10" style={{ backgroundColor: "#FFF7ED", borderColor: "#F97316" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>Definition</p>
              <p className="text-base leading-relaxed" style={{ color: "#0a0a0a" }}>
                <strong>The 3-Second Rule:</strong> you have exactly 3 seconds to earn a prospect&apos;s interest in a cold outbound message. If those seconds are spent pitching features, listing service offerings, or introducing company history, the prospect has already moved on. The message&apos;s sole job in that window is to earn curiosity, not to explain the product.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>The three shifts it implies</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>1</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}><strong>Earn curiosity, don&apos;t pitch.</strong> The opening line's only job is to make someone want to read the next one.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>2</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}><strong>Ditch the static script.</strong> A generic feature-dump opener signals a salesperson looking to take up time, and gets the same treatment as spam.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>3</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}><strong>Break the pattern.</strong> A sharp, specific observation about the prospect&apos;s situation disarms the usual filtering reflex a busy inbox trains people to have.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>Why it matters</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                  Decision-makers skim their inboxes like skeptics, not fans. Outbound isn&apos;t dead as a channel, but treating every touch like a generic broadcast instead of a high-leverage, individual moment is what keeps reply rates stuck at zero.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            <p className="text-sm mb-4" style={{ color: "#8C8279" }}>Where this comes from</p>
            <Link href="/blog/stop-selling-features-cold-outreach" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#F97316" }}>
              Read: Stop Selling Features — The 3-Second Rule of Outbound Outreach
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
