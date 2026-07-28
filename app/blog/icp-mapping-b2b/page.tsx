import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import AskYourAI from "../../components/AskYourAI";

const BLOG_AI_RESOURCES = [
  "https://myntmore.com/blog/icp-mapping-b2b",
  "https://myntmore.com",
  "https://myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close | Myntmore Blog",
  description: "Most B2B companies target everyone and convert no one. This is the exact ICP mapping process we use to identify the buyers most likely to close, and build outreach around them.",
  alternates: { canonical: "https://myntmore.com/blog/icp-mapping-b2b" },
  keywords: ["ICP mapping", "ideal customer profile", "b2b targeting", "lead qualification", "b2b outbound", "sales targeting"],
  openGraph: {
    title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close",
    description: "Stop targeting everyone. This is how you find and reach the buyers most likely to say yes.",
    url: "https://myntmore.com/blog/icp-mapping-b2b",
  },
};

export default function ICPMappingB2B() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Lead Generation · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            If your outbound is getting replies but no meetings, or meetings but no closes, the issue is almost always targeting. You are talking to the wrong people. ICP mapping fixes this at the root.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "68%", source: "higher win rates for companies with a tightly defined ICP", cite: "TOPO Research" },
            { stat: "5x", source: "more pipeline from intent-triggered outreach vs static lists", cite: "Gartner" },
            { stat: "3 weeks", source: "average time to first meeting when ICP and copy align", cite: "Myntmore Internal Data" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>Source: {s.cite}</p>
            </div>
          ))}
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {[
              {
                heading: "Why 'targeting everyone' destroys your conversion rate",
                body: "When your ICP is too broad, your message has to be generic enough to speak to everyone. Generic messages speak to no one. A founder in fintech reads the same email as a founder in logistics and neither feels like it was written for them. The click-through never happens, the reply never comes, and you blame the copy. The real culprit is the list.",
              },
              {
                heading: "The four layers of a real ICP",
                body: null,
                list: [
                  "Firmographic layer: Industry, company size (employees and revenue), growth stage, geography, and tech stack. This is where most people stop. It is necessary but not sufficient.",
                  "Trigger layer: What event just happened that makes them a buyer right now? Recent funding, a new hire in the relevant department, an acquisition, a product launch, or a pain point showing up in a job posting. Triggers are the difference between a cold list and a warm list.",
                  "Persona layer: Job title is a starting point, but you need to know what keeps this person up at night. What does their week look like? What metrics are they measured on? What does success look like for them in 90 days?",
                  "Negative ICP layer: Who wastes your time? Startups under 10 people who cannot afford you. Companies that already have a full in-house team. Industries where your solution has never stuck. Define who not to target with as much precision as who to target.",
                ],
              },
              {
                heading: "How to build your ICP from existing data",
                body: "Pull your last 20 closed deals. For each one, write down: company size, industry, the trigger that made them reach out or respond, the job title of the decision-maker, and how long the deal took to close. Now look for the pattern. The companies that closed fastest and with the least friction: that is your ICP. Replicate those characteristics in your prospecting.",
              },
              {
                heading: "Intent signals that tell you someone is in market",
                body: null,
                numbered: [
                  "Hiring signals: A company posting for an SDR, a Head of Sales, or a RevOps role is almost certainly building an outbound function. If you sell outbound tooling or services, that is your trigger.",
                  "Funding announcements: A Series A or B company just got budget approval. They are now actively looking to deploy capital on growth. Reach out within two weeks of the announcement.",
                  "Technology changes: Companies switching CRMs, adopting a new MAP, or posting about migrating their data stack are in transformation mode. They are more open to new vendors than companies in steady state.",
                  "Content engagement: Companies whose leadership is actively posting on LinkedIn about your problem area are already thinking about it. They have raised their hand without knowing it.",
                ],
              },
              {
                heading: "Sub-segmenting your ICP for higher relevance",
                body: "Once you have a core ICP, split it into two or three sub-segments based on the trigger. Each sub-segment gets its own sequence with a different opening angle. A company that just raised a round gets an email about deploying capital efficiently. A company posting for SDRs gets an email about pipeline velocity. Same product, different message, dramatically different reply rates.",
              },
              {
                heading: "ICP mapping is never finished",
                body: "Your ICP should evolve every quarter. As you close more deals and learn more about who buys and who churns, update the profile. The best outbound teams treat ICP mapping as an ongoing process, not a one-time exercise. They are always feeding new data from closed deals and lost deals back into the model.",
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
                  <ol className="space-y-4">
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
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to map your ICP for you?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              In our free 30-minute audit, we analyse your existing deals and build a first-pass ICP that you can take to your next outbound campaign immediately.
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
