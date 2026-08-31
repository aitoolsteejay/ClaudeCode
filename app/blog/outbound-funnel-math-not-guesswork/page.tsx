import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/outbound-funnel-math-not-guesswork",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/roi-calculator",
];

export const metadata: Metadata = {
  title: "Outbound Funnel Math, Not Gut Feel",
  description: "Outbound isn't a guessing game, it's rhythm, math, and infrastructure. Learn why B2B outreach should be treated as a technical delivery system.",
  alternates: { canonical: "https://www.myntmore.com/blog/outbound-funnel-math-not-guesswork" },
  keywords: [
    "b2b outbound funnel math",
    "outbound as a technical system",
    "predictable b2b pipeline math",
    "outbound infrastructure vs copy",
    "how to calculate cost per meeting b2b",
    "sales funnel spreadsheet b2b",
    "outbound budget justification",
    "b2b pipeline roi calculator",
    "meeting value calculator",
    "cold outreach acceptance rate",
    "value of a booked meeting b2b",
  ],
  openGraph: {
    title: "Gut Feel vs. Funnel Math: Why Outbound Is a Technical System, Not a Guessing Game",
    description: "Outbound doesn't fail because of timing or budget. It fails because nobody mapped the math behind a single booked meeting.",
    url: "https://www.myntmore.com/blog/outbound-funnel-math-not-guesswork",
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Gut Feel vs. Funnel Math: Why Outbound Is a Technical System, Not a Guessing Game",
  description: "Outbound isn't a guessing game, it's rhythm, math, and infrastructure. Learn why B2B outreach should be treated as a technical delivery system.",
  url: "https://www.myntmore.com/blog/outbound-funnel-math-not-guesswork",
  datePublished: "2026-08-31T11:00:00+05:30",
  dateModified: "2026-08-31T11:00:00+05:30",
});

const SECTIONS = [
  {
    heading: "Relying on Gut Feel Instead of a System",
    body: "In his early days of running lead generation campaigns, Tejas Jhaveri admits to making a classic founder mistake: relying entirely on raw motivation instead of a structured process. \"I used to think it would all work out eventually,\" Tejas confesses. \"I'd send a bunch of messages one day, then nothing for three days. I had no system in place.\" When lead flow dried up, it was easy to blame the timing, the budget, or the platforms.",
  },
  {
    heading: "Outbound Is a Technical Delivery Engine, Not a Guessing Game",
    body: "But B2B outbound does not respond well to sporadic bursts of effort; it responds to rhythm, math, and infrastructure. Cold outreach is fundamentally a technical delivery engine: 80% setup and 20% copy. If you don't know the exact conversion rates of your domains, acceptance rates, and meeting values, you are essentially flying an airplane blind.",
  },
  {
    heading: "Stop Approving Budgets on Gut Feeling",
    body: "Many executive teams approve or cut outbound marketing budgets based on emotional gut feelings, because nobody has sat down to map out the actual mathematical value of a single booked meeting. If you want outbound to generate a predictable pipeline, you must treat your sales funnel as a structured spreadsheet where every micro-adjustment directly impacts your bottom line.",
  },
  {
    heading: "Take the Guesswork Out of Your Acquisition Costs",
    body: "To help you visualise your pipeline math with total clarity, we built the Interactive ROI Calculator. This is the only tool on our website that is completely ungated: no contact details, forms, or email addresses required. Just plug in your real funnel numbers, your monthly connection volume, acceptance rates, cold email reply rates, average deal size, and operational costs, and adjust the sliders live to see how a minor 2% increase in reply rates cascades down into meetings booked, closed deals, overall revenue, and total ROI.",
  },
];

export default function OutboundFunnelMathNotGuesswork() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Lead Generation · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Gut Feel vs. Funnel Math: Why Outbound Is a Technical System, Not a Guessing Game
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Outbound doesn&apos;t fail because of timing or budget. It fails because nobody mapped the actual math behind a single booked meeting.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Model your funnel, export it, share it with leadership</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Once you&apos;ve modelled your ideal sequence, export the entire calculation to a clean, professional PDF you can hand straight to your leadership or finance team. No guesswork, no gut feel, just the math behind your pipeline.
            </p>
            <a href="/tools/roi-calculator" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Open the Free Interactive ROI Funnel Calculator
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
