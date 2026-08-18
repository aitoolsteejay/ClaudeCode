import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/predictable-b2b-lead-gen-engine",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "Building a Predictable B2B Lead Generation Engine",
  description: "Most B2B outbound fails because it has no system behind it. Here is the exact framework we use to build a lead generation engine that compounds over time.",
  alternates: { canonical: "https://www.myntmore.com/blog/predictable-b2b-lead-gen-engine" },
  keywords: ["b2b lead generation engine", "how to build a predictable pipeline", "outbound sales system", "lead generation framework", "icp definition for outbound", "intent signals for b2b sales", "cold outreach mistakes", "building a repeatable sales pipeline", "b2b outbound strategy", "personalized cold email sequences", "how to scale cold outreach", "sales pipeline predictability", "pray and spray outbound", "b2b sales development framework", "outbound lead gen system for startups"],
  openGraph: {
    title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine",
    description: "The exact framework for building a B2B lead generation engine that compounds over time.",
    url: "https://www.myntmore.com/blog/predictable-b2b-lead-gen-engine",
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Building a Predictable B2B Lead Generation Engine",
  description: "Most B2B outbound fails because it has no system behind it. Here is the exact framework we use to build a lead generation engine that compounds over time.",
  url: "https://www.myntmore.com/blog/predictable-b2b-lead-gen-engine",
  datePublished: "2026-05-29T18:55:36+05:30",
  dateModified: "2026-08-17T13:05:02+05:30",
});

export default function PredictableB2BLeadGen() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Lead Generation · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Beyond the &apos;Pray and Spray&apos;: Building a Predictable B2B Lead Generation Engine
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Most B2B founders I talk to are frustrated with outbound. They&apos;ve tried hiring an SDR, buying a list, and sending a few batches of emails. Usually, the result is the same: a lot of effort, very few replies, and a growing belief that outbound just doesn&apos;t work for their niche.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "80%", source: "of B2B leads never convert due to poor follow-up", cite: "Marketing Sherpa" },
            { stat: "2%", source: "of cold outreach gets a reply without personalisation", cite: "Backlinko" },
            { stat: "68%", source: "higher win rates for companies with defined ICPs", cite: "TOPO Research" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>Source: {s.cite}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Article body */}
      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {[
              {
                heading: "The truth about outbound",
                body: "The truth is that outbound works. It works for almost every B2B niche if you treat it as an engineering problem rather than a hustle problem. Most companies fail because they have no system. They are spraying and praying, hoping that if they throw enough generic messages at enough people, someone will eventually say yes. That is not a strategy. That is a lottery.",
              },
              {
                heading: "What a real system looks like",
                body: "A predictable lead generation engine is built on four pillars: a defined ICP, live intent signals, personalised sequences, and a continuous feedback loop. If any of these are missing, the whole engine breaks down. Remove one pillar and you are back to guessing.",
              },
              {
                heading: "Start with ICP definition",
                body: "It starts with your Ideal Customer Profile. Most people define their ICP by industry and company size. That is too broad. A real ICP is defined by the problems you solve and the specific triggers that make those problems urgent. For example, if you sell cybersecurity, your ICP is not just every tech company. It is tech companies that just raised a Series B and are currently hiring their first Head of IT. Those are the people who have the budget and the immediate need.",
              },
              {
                heading: "Layer in intent signals",
                body: "Once you have the profile, you need a way to find those people in real time. We call these intent signals. These are events like funding rounds, leadership changes, or new job postings. Instead of reaching out to a static list, your system should be adding new prospects the moment they show a sign of being in market.",
              },
              {
                heading: "The 3 mistakes killing your outbound",
                body: null,
                list: [
                  "Wrong ICP: Most founders go after the biggest names because they want the prestige, but they ignore the mid-market companies that actually have the pain point they solve. Or they go after everyone, which means their message resonates with no one.",
                  "Generic copy: We have all seen those emails that start with 'I saw your company and was impressed.' No one believes that. Buyers are smarter than ever. Your copy needs to prove that you understand their specific situation.",
                  "No iteration: They set up a sequence, run it for a week, and if they do not get a meeting, they give up. A real system is built on data. You should be A/B testing your subject lines, opening angles, and CTAs every single week.",
                ],
              },
              {
                heading: "The 6-week build",
                body: null,
                numbered: [
                  "Weeks 1–2, Foundation: Deep work on ICP and messaging. Set up technical infrastructure, sending domains, warmup tools, data sourcing agents. You do not send a single email during this time. You are building the machine.",
                  "Weeks 3–4, Initial run: Start small. Send low volumes to highly targeted lists. You are not looking for 100 meetings yet. You are looking for feedback. What are the common objections in the replies? Use this data to refine the messaging.",
                  "Weeks 5–6, Scale: You have a message that resonates and a technical setup that lands in the inbox. Now you increase the volume. Because you built it as a system, scaling up does not mean working harder. It just means letting the machine run at higher capacity.",
                ],
              },
              {
                heading: "The compounding effect",
                body: "When you have a real engine running, your life as a founder changes. You stop waking up wondering where the next deal is coming from. Predictable pipeline is not about luck. It is about building a system that respects the data, respects the buyer, and respects your time.",
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                {section.body && <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>}
                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.numbered && (
                  <ol className="space-y-6">
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
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want to skip the 6 weeks of setup?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We build and run this exact system for B2B companies. Book a free 30-minute audit and we&apos;ll tell you exactly where your pipeline is leaking.
            </p>
            <a href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
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
