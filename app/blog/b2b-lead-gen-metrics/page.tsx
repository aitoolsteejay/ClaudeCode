import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop) | Myntmore Blog",
  description: "Most outbound teams track the wrong numbers. Here are the 7 metrics that actually tell you whether your lead generation engine is healthy — and the exact actions to take when each one dips.",
  alternates: { canonical: "https://myntmore.com/blog/b2b-lead-gen-metrics" },
  keywords: ["b2b lead generation metrics", "outbound kpis", "cold email metrics", "reply rate", "meeting booked rate", "pipeline metrics", "lead gen dashboard"],
  openGraph: {
    title: "The 7 B2B Lead Gen Metrics That Actually Matter",
    description: "Track these 7 numbers and you will always know exactly where your pipeline is leaking.",
    url: "https://myntmore.com/blog/b2b-lead-gen-metrics",
  },
};

export default function B2BLeadGenMetrics() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Lead Generation · 7 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop)
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Most founders running outbound are flying blind. They know emails are going out and occasionally a meeting gets booked, but they have no idea which part of the funnel is working and which part is leaking. These are the 7 numbers that tell you everything.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "Only 23%", source: "of B2B companies track outbound metrics beyond open rate", cite: "HubSpot State of Sales" },
            { stat: "4–8%", source: "is a healthy meeting-booked rate from cold outreach", cite: "Myntmore Benchmark" },
            { stat: "2x", source: "pipeline improvement from weekly metric review vs monthly", cite: "Forrester Research" },
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
                heading: "Why open rate is a vanity metric",
                body: "Open rate is the most tracked metric in cold email and also the least useful. It tells you whether your subject line was intriguing enough to get a click, nothing more. With Apple Mail Privacy Protection now artificially inflating open rates, it has become even less reliable. Stop optimising for opens. Start optimising for replies.",
              },
              {
                heading: "The 7 metrics that actually tell you something",
                body: null,
                numbered: [
                  "Inbox placement rate (target: 85%+): What percentage of your emails are landing in the primary inbox vs spam or promotions. Measure this with GlockApps or Mail-Tester before every new campaign. If this drops below 80%, stop sending and fix your infrastructure.",
                  "Reply rate (target: 3–8%): The single most important cold email metric. A reply — even a no — means your message was read. Below 2% means your copy or targeting is broken. Above 8% means you have found a message-market fit and should scale immediately.",
                  "Positive reply rate (target: 20–35% of all replies): What percentage of replies are interested vs out-of-office or unsubscribes? If you have a 5% reply rate but 90% of replies are negative, you have a messaging problem, not a volume problem.",
                  "Meeting booked rate (target: 4–8% of contacts): How many of the people you contacted converted to a booked meeting? This is the true north metric for any outbound campaign. If reply rate is healthy but meeting rate is low, the problem is your call-to-action or your qualification process.",
                  "Show rate (target: 75%+): Of meetings booked, how many actually show up? A low show rate means your prospect was not qualified, your confirmation sequence is weak, or the value proposition of the call was not clear enough. Fix show rate before scaling volume.",
                  "Opportunity rate (target: 40–60% of meetings): How many meetings convert to a real sales opportunity? This is where you find out if your ICP is right. If less than 40% of meetings become opps, you are still talking to the wrong people.",
                  "Pipeline-to-outreach ratio: For every 100 contacts you reach out to, how much pipeline do you generate? This is the ultimate efficiency metric. A healthy outbound motion generates $50K–$200K in pipeline per 100 contacts depending on your ACV. Track this monthly.",
                ],
              },
              {
                heading: "How to build a weekly metrics review",
                body: "Every Monday morning, pull these seven numbers from the previous week. Compare them to your benchmark. Any metric that dropped more than 20% from the prior week gets a root-cause analysis before you send another email. This review takes 30 minutes and prevents weeks of wasted outreach.",
              },
              {
                heading: "The diagnostic tree: what to do when a metric drops",
                body: null,
                list: [
                  "Inbox placement drops: Check DNS records, bounce rate, sending volume, and warm-up status. Pause sending until resolved.",
                  "Reply rate drops: Run an A/B test on the subject line and first line. Check whether your list quality has declined. Review whether recent sends have been too salesy.",
                  "Meeting rate drops despite good reply rate: Rewrite the CTA. Test a lower-friction ask like a 15-minute call vs a 30-minute demo. Consider adding a Calendly link directly in the email.",
                  "Show rate drops: Add a 24-hour and 1-hour reminder sequence. Include a one-sentence reason why the call is worth their time in the confirmation email.",
                ],
              },
              {
                heading: "The one dashboard you actually need",
                body: "You do not need expensive analytics software. A simple spreadsheet with weekly entries for each of these seven metrics, a column for notes on what you changed, and a rolling four-week average is enough. The goal is to see the trend, not just the number. A metric that has been declining for three weeks tells a different story than one that dipped once.",
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
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want a free audit of your outbound metrics?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Share your current numbers and we will tell you exactly where your pipeline is leaking and what to fix first. No pitch. Just a diagnosis.
            </p>
            <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
