import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "The 2026 B2B Outbound Benchmark Report",
  description: "Real reply rate, inbox placement, and time-to-meeting benchmarks from 120+ B2B accounts, aggregated and anonymized. See how you compare.",
  alternates: { canonical: "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026" },
  keywords: [
    "b2b outbound benchmark report",
    "cold email reply rate benchmark",
    "linkedin outreach reply rate benchmark",
    "average time to book a b2b meeting",
    "cold email inbox placement benchmark",
    "b2b lead generation benchmarks 2026",
    "what is a good reply rate for cold email",
    "average sales cycle for outbound b2b",
    "cold email deliverability statistics",
    "linkedin connection acceptance rate benchmark",
    "b2b outbound industry benchmarks",
    "myntmore benchmark report",
    "how long does outbound take to book meetings",
    "cold email vs linkedin reply rate",
    "b2b pipeline generation statistics",
  ],
  openGraph: {
    title: "The 2026 B2B Outbound Benchmark Report | Myntmore",
    description: "Aggregated, anonymized data from 120+ B2B accounts: what a healthy reply rate, inbox rate, and time-to-meeting actually looks like.",
    url: "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "The 2026 B2B Outbound Benchmark Report",
  description: "Real reply rate, inbox placement, and time-to-meeting benchmarks from 120+ B2B accounts, aggregated and anonymized. See how you compare.",
  url: "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
  datePublished: "2026-08-19T12:00:00+05:30",
  dateModified: "2026-08-19T12:00:00+05:30",
});

const REPLY_RATE_ROWS = [
  { channel: "Cold email", myntmore: "27–35%", typical: "2–5%", note: "Blended across ICP-mapped, signal-based campaigns" },
  { channel: "LinkedIn outreach", myntmore: "18–24%", typical: "8–12%", note: "Connection + follow-up sequence combined" },
  { channel: "AI-qualified lists", myntmore: "35–40%", typical: "N/A", note: "Leads pre-scored by intent signals before first touch" },
];

const TIMELINE_ROWS = [
  { milestone: "First meeting booked on the calendar", days: "~18 days", note: "From campaign kickoff, once ICP, list, and sequences are live" },
  { milestone: "First qualified conversation actually happens", days: "3–4 weeks", note: "Booked meetings typically sit a few days to a week out" },
  { milestone: "Consistent, repeatable meeting volume", days: "6–8 weeks", note: "Once messaging is optimized against real reply data" },
];

export default function B2BOutboundBenchmarkReport2026() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(16,185,129,0.08)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>Benchmark Report · 8 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The 2026 B2B Outbound Benchmark Report
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            &quot;Is our reply rate good?&quot; is the question every founder running outbound eventually asks and rarely gets a straight answer to. We pulled aggregated, anonymized performance data across our own managed accounts to give you real numbers to check yours against.
          </p>
        </div>
      </section>

      <div className="px-4 pb-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Methodology</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
            These figures are aggregated and anonymized across the 120+ B2B accounts Myntmore has managed cold email, LinkedIn outreach, and AI-qualified list campaigns for. No single client&apos;s data is broken out or identifiable. Ranges reflect the spread across account size, industry, and ICP, not a single blended average, since a flat number would hide more than it reveals. &quot;Typical&quot; figures for unmanaged outbound are commonly cited industry ranges, not a specific third-party study.
          </p>
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-10">
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Reply rate benchmarks by channel</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Reply rate is the single clearest signal that your targeting and messaging are working, before a single meeting gets booked. Here&apos;s what a properly run channel looks like against what most teams settle for.
              </p>
              <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#E8E2D9" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#F8F6F2" }}>
                      <th className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Channel</th>
                      <th className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Myntmore client range</th>
                      <th className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Typical unmanaged range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REPLY_RATE_ROWS.map((row, i) => (
                      <tr key={row.channel} style={{ borderTop: i > 0 ? "1px solid #E8E2D9" : undefined }}>
                        <td className="p-4">
                          <p className="font-bold" style={{ color: "#0a0a0a" }}>{row.channel}</p>
                          <p className="text-xs" style={{ color: "#8C8279" }}>{row.note}</p>
                        </td>
                        <td className="p-4 font-black" style={{ color: "#10b981" }}>{row.myntmore}</td>
                        <td className="p-4" style={{ color: "#8C8279" }}>{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4" style={{ color: "#8C8279" }}>
                Individual campaigns land across the full range depending on ICP fit and offer clarity. A specific SaaS Series A account of ours landed at 34% on cold email; a B2B services account landed at 29%, both within the range above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>How long outbound actually takes</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                &quot;A meeting gets booked&quot; and &quot;a meeting actually happens&quot; are two different milestones, and conflating them is why founders expect results in week one and get frustrated by week two. Here&apos;s the real sequence.
              </p>
              <div className="space-y-4">
                {TIMELINE_ROWS.map((row, i) => (
                  <div key={row.milestone} className="flex gap-4 rounded-2xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                    <div>
                      <p className="font-bold mb-1" style={{ color: "#0a0a0a" }}>{row.milestone} <span style={{ color: "#10b981" }}>— {row.days}</span></p>
                      <p className="text-sm" style={{ color: "#52525B" }}>{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Inbox placement: the metric most teams never check</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Reply rate means nothing if your emails never reach the inbox. Across Myntmore-managed domains, average inbox placement holds at <strong>98.5%</strong>, maintained through dedicated sending domains, SPF/DKIM/DMARC authentication, and structured warmup. Teams sending cold email from an unwarmed domain with no authentication typically see somewhere in the <strong>80–85%</strong> range, and often don&apos;t find out until reply rates mysteriously collapse. If your reply rate looks broken, check inbox placement before you rewrite a single line of copy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>What to do with these numbers</h2>
              <ul className="space-y-4">
                {[
                  "Below range on reply rate: the problem is almost always targeting or offer clarity, not copy. Revisit your ICP before you rewrite your sequence.",
                  "Below 90% inbox placement: stop sending and fix domain authentication first. Every other metric is downstream of this one.",
                  "No meeting booked by day 25–30: check that your CTA is low-friction (a 15-minute call, not a 30-minute demo) and that a scheduling link is in every positive reply.",
                  "Above range on every metric: you've found message-market fit. Scale volume before you change anything else.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>See where your own numbers fall</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Share your current reply rate, inbox placement, and time-to-meeting, and we&apos;ll tell you honestly whether you&apos;re in range and what to fix first if you&apos;re not.
            </p>
            <Link href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
