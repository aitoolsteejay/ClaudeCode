import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import NewsletterForm from "../../components/NewsletterForm";
import JsonLd from "../../components/JsonLd";
import Faq from "@/app/lp/Faq";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";
import ArticleMeta from "@/app/components/ArticleMeta";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "The 2026 B2B Outbound Benchmark Report",
  description: "Real reply rate, inbox placement, and time-to-meeting benchmarks from 130+ B2B companies, aggregated and anonymized. See how you compare.",
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
    description: "Aggregated, anonymized data from 130+ B2B companies: what a healthy reply rate, inbox rate, and time-to-meeting actually looks like.",
    url: "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "The 2026 B2B Outbound Benchmark Report",
  description: "Real reply rate, inbox placement, and time-to-meeting benchmarks from 130+ B2B companies, aggregated and anonymized. See how you compare.",
  url: "https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026",
  datePublished: "2026-08-19T12:00:00+05:30",
  dateModified: "2026-10-26T12:00:00+05:30",
});

// One line per headline number, written to be quoted on its own. Keep these in
// step with the tables below: they restate them, they never add new figures.
const KEY_FINDINGS = [
  "Cold email is run as a volume channel and judged on positive replies and meetings booked: at least 20% of replies are positive, from a 1–3% reply rate across Myntmore-managed campaigns.",
  "LinkedIn outreach (connection request plus follow-ups) runs at an average 35% reply rate, against a typical 8–12%.",
  "Campaigns go live within 18 days of onboarding, the first qualified conversations come in weeks 3–4, and meeting volume becomes consistent after 6–8 weeks.",
  "Inbox placement averages 98.5% on Myntmore-managed domains, against roughly 80–85% for unwarmed, unauthenticated domains.",
];

const FAQ_ITEMS = [
  {
    question: "What is a good reply rate for B2B cold email?",
    answer: "A good B2B cold email reply rate is 1–3% at volume, with at least 20% of replies positive, based on Myntmore-managed campaigns. Judge cold email on positive replies and meetings booked, not raw reply rate. Campaigns with a sharp ICP can run far higher, while a rate below 1% means stop and check list quality and deliverability.",
  },
  {
    question: "What is a good reply rate for LinkedIn outreach?",
    answer: "A good LinkedIn outreach reply rate is around 35%, the average across Myntmore-managed accounts when a connection request and follow-up messages run as one sequence. Typical unmanaged LinkedIn outreach lands at 8–12%. The gap mostly comes from profile positioning, a tight ICP and messages that start a conversation instead of pitching.",
  },
  {
    question: "How long does B2B outbound take to book the first meeting?",
    answer: "Across Myntmore-managed accounts, campaigns go live within 18 days of onboarding and the first qualified conversations come in weeks three to four. Meeting volume becomes consistent after six to eight weeks, once messaging is tuned against real reply data. Setup covers sending domains, inbox warm-up, the lead list and copy, which is why week one rarely brings meetings.",
  },
  {
    question: "What inbox placement rate should cold email have?",
    answer: "Cold email should land in the inbox at least 90% of the time, and Myntmore-managed domains average 98.5%. Unwarmed domains without SPF, DKIM and DMARC authentication typically land at 80–85%. If placement drops below 90%, stop sending and fix authentication and warm-up before changing any copy, because every other metric depends on it.",
  },
];

const REPLY_RATE_ROWS = [
  { channel: "Cold email", myntmore: "1–3%", typical: "2–5%", note: "High-volume sends, judged on positive replies (20%+ of replies) and meetings booked, not raw reply rate" },
  { channel: "LinkedIn outreach", myntmore: "35%", typical: "8–12%", note: "Average across connection + follow-up sequences" },
  { channel: "AI-qualified lists", myntmore: "35–40%", typical: "N/A", note: "Leads pre-scored by intent signals before first touch" },
];

const TIMELINE_ROWS = [
  { milestone: "Campaign live and sending", days: "within 18 days", note: "From onboarding: domains, inboxes and warm-up, lead list, and copy" },
  { milestone: "First qualified conversation actually happens", days: "3–4 weeks", note: "From onboarding. Booked meetings typically sit a few days to a week out" },
  { milestone: "Consistent, repeatable meeting volume", days: "6–8 weeks", note: "Once messaging is optimized against real reply data" },
];

export default function B2BOutboundBenchmarkReport2026() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="fredoka-pill inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(16,185,129,0.08)", color: "#047857", border: "1px solid rgba(16,185,129,0.2)" }}>Benchmark Report · 8 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The 2026 B2B Outbound Benchmark Report
          </h1>
          <ArticleMeta schema={ARTICLE_SCHEMA} />
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            &quot;Is our reply rate good?&quot; is the question every founder running outbound eventually asks and rarely gets a straight answer to. We pulled aggregated, anonymized performance data across our own managed accounts to give you real numbers to check yours against.
          </p>
        </div>
      </section>

      <div className="px-4 pb-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: "#71675E" }}>Key findings</h2>
          <ul className="space-y-2">
            {KEY_FINDINGS.map((finding) => (
              <li key={finding} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: "#047857" }} />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 pb-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: "#71675E" }}>Methodology</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
            These figures are aggregated and anonymized across the 130+ B2B companies Myntmore has managed cold email, LinkedIn outreach, and AI-qualified list campaigns for. No single client&apos;s data is broken out or identifiable. Ranges reflect the spread across account size, industry, and ICP, not a single blended average, since a flat number would hide more than it reveals. &quot;Typical&quot; figures for unmanaged outbound are commonly cited industry ranges, not a specific third-party study.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "#52525B" }}>
            <strong>How to cite:</strong> Myntmore, &quot;The 2026 B2B Outbound Benchmark Report&quot;, last updated 26 October 2026, https://www.myntmore.com/blog/b2b-outbound-benchmark-report-2026
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
                          <p className="text-xs" style={{ color: "#71675E" }}>{row.note}</p>
                        </td>
                        <td className="p-4 font-black" style={{ color: "#047857" }}>{row.myntmore}</td>
                        <td className="p-4" style={{ color: "#71675E" }}>{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4" style={{ color: "#71675E" }}>
                These are blended ranges, and individual campaigns can land well above them when the ICP is sharp and the offer is clear. A SaaS Series A account of ours reached 34% on cold email and a B2B services account reached 29%, both outliers well above the blended range.
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
                    <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                    <div>
                      <p className="font-bold mb-1" style={{ color: "#0a0a0a" }}>{row.milestone} <span style={{ color: "#047857" }}>· {row.days}</span></p>
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
                  "No meeting booked by week 5: check that your CTA is low-friction (a 15-minute call, not a 30-minute demo) and that a scheduling link is in every positive reply.",
                  "Above range on every metric: you've found message-market fit. Scale volume before you change anything else.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
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
            <Link href="/book-a-call" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="mt-12">
            <Faq badge="FAQ" title="Benchmark questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>

          <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#A14A08" }}>The Outbound Operator</p>
            <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>One practical growth playbook, every week</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
            </p>
            <NewsletterForm inputId="blog-newsletter-email" compact />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
