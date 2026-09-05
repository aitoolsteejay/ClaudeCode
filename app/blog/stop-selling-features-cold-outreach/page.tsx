import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/stop-selling-features-cold-outreach",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/dm-angle-generator",
];

export const metadata: Metadata = {
  title: "Stop Selling Features in Cold Outreach",
  description: "Outbound isn't dead, boring outbound is. Why you have exactly 3 seconds to earn curiosity, and why pitching features in that window kills your reply rate.",
  alternates: { canonical: "https://www.myntmore.com/blog/stop-selling-features-cold-outreach" },
  keywords: [
    "stop selling features cold outreach",
    "feature dump cold email mistake",
    "b2b outbound messaging psychology",
    "how to earn curiosity in outbound",
    "cold outreach pattern breaking",
    "boring outbound is dead",
    "linkedin dm opening strategy",
    "outbound copy that gets replies",
  ],
  openGraph: {
    title: "Stop Selling Features: The 3-Second Rule of Outbound Outreach",
    description: "Outbound isn't dead, boring, formulaic outbound is. You have 3 seconds to earn curiosity before a prospect stops reading. Here's how to use them.",
    url: "https://www.myntmore.com/blog/stop-selling-features-cold-outreach",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Stop Selling Features: The 3-Second Rule of Outbound Outreach",
  description: "Outbound isn't dead, boring outbound is. Why you have exactly 3 seconds to earn curiosity, and why pitching features in that window kills your reply rate.",
  url: "https://www.myntmore.com/blog/stop-selling-features-cold-outreach",
  datePublished: "2026-09-04T12:00:00+05:30",
  dateModified: "2026-09-04T12:00:00+05:30",
});

export default function StopSellingFeaturesColdOutreach() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#f97316", border: "1px solid rgba(249,115,22,0.2)" }}>Cold Outreach · 4 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Stop Selling Features: The 3-Second Rule of Outbound Outreach
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            B2B outbound isn&apos;t dead. Boring, formulaic outbound is. Here&apos;s what to do with the 3 seconds you actually get.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Outbound Isn&apos;t Dead, Boring Outbound Is</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                B2B outbound lead generation is a highly crowded space. Because decision-makers are flooded with automated sales pitches every day, many sales leaders assume outbound is a dead channel. But outbound isn&apos;t dead, boring, formulaic outbound is. Whether you&apos;re reaching out over LinkedIn, cold email, or a personalised cold Loom, every outbound touch is a high-leverage moment. Treat it like a generic broadcast and your reply rate will stay stuck at zero.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The 3-Second Rule</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
                To stand out in a crowded inbox, master these three shifts:
              </p>
              <ul className="space-y-4 mt-4">
                {[
                  "Earn curiosity, don't pitch: you have exactly 3 seconds to earn a prospect's interest. If you spend those seconds pitching your features, listing your service offerings, or introducing your company history, you've already lost them. Your outbound touch shouldn't explain your product, its sole goal is to earn curiosity.",
                  "Ditch the static script: the fastest way to get ignored is to open with a safe, corporate feature-dump like \"we help companies streamline their ops using AI and automation.\" That immediately signals a salesperson looking to take up their time.",
                  "Start pattern breaking: disarm the prospect by opening with a pattern breaker. Share a sharp, highly specific observation about their operational bottleneck, or ask a direct, peer-to-peer question about a challenge they're likely facing today.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)" }}>{i + 1}</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Prove Relevance Fastest, Not Loudest</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Outbound lead generation isn&apos;t about shouting the loudest, it&apos;s about proving relevance the fastest. Stop selling features to an unprimed audience. Focus your outbound copy on breaking the inbox pattern, triggering genuine curiosity, and starting a human conversation first.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Get 5 pattern-breaking angles for your next campaign</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Our free DM Angle Generator gives you 5 psychology-backed opening angles that skip the feature-dump entirely and earn curiosity in the first line, built for how your prospects actually think.
            </p>
            <a href="/tools/dm-angle-generator" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Generate My Angles Free
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
