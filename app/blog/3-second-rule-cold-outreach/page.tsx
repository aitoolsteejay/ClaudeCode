import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/3-second-rule-cold-outreach",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/dm-angle-generator",
];

export const metadata: Metadata = {
  title: "The 3-Second Rule: How to Stop Writing Outbound Messages That Get Ignored",
  description: "If your cold emails and LinkedIn DMs get met with silence, it isn't the platform or the algorithm. You have 3 seconds to earn curiosity, here's how to use them.",
  alternates: { canonical: "https://www.myntmore.com/blog/3-second-rule-cold-outreach" },
  keywords: [
    "why cold emails get ignored",
    "how to write cold outreach that gets replies",
    "cold email opening line strategy",
    "linkedin dm opening lines",
    "pattern breaking cold outreach",
    "how to increase cold email reply rate",
    "b2b cold email best practices",
    "dm angle generator",
    "cold outreach psychology",
    "how to write a cold email that converts",
    "b2b outbound messaging framework",
    "cold email open rate benchmarks",
    "linkedin cold message strategy",
    "outbound copywriting tips",
    "spray and pray outbound is dead",
  ],
  openGraph: {
    title: "The 3-Second Rule: How to Stop Writing Outbound Messages That Get Ignored",
    description: "Your outbound isn't ignored because of the algorithm. It's ignored because it's boring. Here's the fix.",
    url: "https://www.myntmore.com/blog/3-second-rule-cold-outreach",
  },
};

export default function ThreeSecondRuleColdOutreach() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(220,38,38,0.08)", color: "#dc2626", border: "1px solid rgba(220,38,38,0.2)" }}>Cold Outreach · 4 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The 3-Second Rule: How to Stop Writing Outbound Messages That Get Ignored
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            If you are sending outbound emails or LinkedIn connection requests and getting met with total silence, you are probably blaming the platform, the algorithm, or your pricing. The truth is much simpler: your outbound is boring.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {[
              {
                heading: "Spray and pray is dead",
                body: "In modern B2B lead generation, the old spray and pray manual volume approach is dead. Decision-makers can smell a generic template from a mile away. When they open their inbox, they don't read like fans, they skim like skeptics.",
              },
              {
                heading: "You have exactly 3 seconds to earn their curiosity",
                body: "If you spend those precious 3 seconds pitching your features, listing your services, or writing a paragraph of fluff like \"Hope this email finds you well,\" you have already lost them.",
              },
              {
                heading: "Treat your outbound like a high-converting landing page",
                body: "To consistently see open rates of 50 to 70% and reply rates of 12 to 20%, your outbound messages must behave like high-converting landing pages:",
                numbered: [
                  "Grab attention with a pattern-breaking headline.",
                  "Show proof of relevance instantly.",
                  "Offer a single, low-friction next step, like asking if a specific challenge is a priority this quarter rather than asking for a quick call.",
                ],
              },
              {
                heading: "Break the pattern instead of pitching",
                body: "Lead with a sharp, data-driven point of view or a hyper-personalized observation about their business. If you can articulate your prospect's core operational pain better than they can, you immediately earn their trust and a direct reply.",
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                {section.body && <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>}
                {section.numbered && (
                  <ol className="space-y-4 mt-4">
                    {section.numbered.map((item, i) => (
                      <li key={i} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Stop staring at a blank prompt: turn cold DMs into qualified meetings</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              The first line of your outreach is where your campaign succeeds or dies. To help you break the pattern every single time, we built the DM Angle Generator. Instead of repeating the same safe, ignorable line to a hundred prospects, our free tool takes your industry, your target customer's role, and your core offer, and instantly generates 5 distinct opening angles built on different psychological triggers, such as curiosity, contrarian takes, social proof, or direct pain points. You can regenerate the entire set at once or fine-tune individual openers to match your brand's natural tone. It's the fastest way to spin up high-converting copy to A/B test in your outreach campaigns.
            </p>
            <a href="/tools/dm-angle-generator" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Try the DM Angle Generator, Free
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
