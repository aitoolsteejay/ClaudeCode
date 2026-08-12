import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";
import JsonLd from "../components/JsonLd";
import Faq from "../lp/Faq";
import { buildFaqSchema, buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Agency vs. In-House SDR: How to Build B2B Outbound",
  description: "A direct, non-salesy comparison of hiring a B2B outbound agency vs. building an in-house SDR team, covering cost, ramp-up time, tooling, and risk, with real figures from running both.",
  alternates: { canonical: "https://myntmore.com/agency-vs-in-house" },
  openGraph: {
    title: "Agency vs. In-House SDR: How to Build B2B Outbound | Myntmore",
    description: "Cost, speed, risk, and when each approach actually makes sense, no one-sided pitch.",
    url: "https://myntmore.com/agency-vs-in-house",
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Resources", url: `${SITE_URL}/resources` },
  { name: "Agency vs. In-House", url: `${SITE_URL}/agency-vs-in-house` },
]);

interface ComparisonRow {
  factor: string;
  agency: string;
  inHouse: string;
}

const COMPARISON: ComparisonRow[] = [
  {
    factor: "Time to first meeting booked",
    agency: "~18 days on average, systems and infrastructure already built",
    inHouse: "Typically 3–6 months once you count hiring, onboarding, and ramp-up before the first meeting lands",
  },
  {
    factor: "Upfront cost",
    agency: "A monthly retainer. No recruiting cost, no salary, no benefits before you see a result",
    inHouse: "Recruiter fees plus a base salary (commonly $60K–$100K+ fully loaded, depending on market) before a single meeting is booked",
  },
  {
    factor: "Ramp-up time",
    agency: "Live within days, the ICP, sequences, and sending infrastructure already exist",
    inHouse: "60–90 days is typical for a new SDR to reach full productivity, longer if they're also learning your product",
  },
  {
    factor: "Tooling & infrastructure",
    agency: "Included and managed: domain warm-up, deliverability monitoring, enrichment tools, CRM integration",
    inHouse: "You buy, configure, and maintain all of it yourself, or it becomes one more thing on someone's plate",
  },
  {
    factor: "Risk if it doesn't work",
    agency: "Contract flexibility, month-to-month after a 3-month minimum engagement",
    inHouse: "Severance, sunk hiring cost, and months of lost ramp-up time if the hire doesn't work out",
  },
  {
    factor: "Scalability",
    agency: "Scale volume up or down with a conversation, not a hiring cycle",
    inHouse: "Scaling means repeating the entire hire-train-ramp cycle for every additional rep",
  },
];

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Can we start with an agency and bring outbound in-house later?",
    answer: "Yes, and it's common. Agencies are a fast way to get a system running and learn what actually converts for your ICP before you commit to hiring. Once you know your winning messaging, targeting, and channel mix, bringing it in-house is a smaller, lower-risk decision than starting from zero.",
  },
  {
    question: "Is an agency more expensive than an SDR long-term?",
    answer: "It depends on the horizon. Month-to-month, a retainer is usually cheaper than a fully-loaded SDR salary. Over 2+ years, a great in-house hire who owns the relationship and product knowledge can out-earn their cost. The honest answer is: agencies win on speed and flexibility, a strong long-term hire can win on depth, if you can find and keep one.",
  },
  {
    question: "What happens to our systems and lists if we bring outbound in-house later?",
    answer: "Whatever we build for you, ICP definitions, sequences, positioning, lists, is yours. A good agency engagement should leave you with a documented, transferable system, not a black box you're locked into.",
  },
  {
    question: "Why does hiring take so much longer than starting with an agency?",
    answer: "It's not just the hiring process itself. It's sourcing candidates, interviewing, onboarding, teaching them your product and ICP, and then the natural ramp period every new rep needs before they're fully productive. An agency skips straight to execution because the ICP work, infrastructure, and sequences are already built.",
  },
];

export default function AgencyVsInHouse() {
  return (
    <InnerLayout>
      <JsonLd data={BREADCRUMB_SCHEMA} />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.20) 0%, rgba(37,99,235,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Agency vs. In-House</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#3b82f6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#3b82f6" }}>Comparison</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Agency vs. in-house: how should you actually build B2B outbound?
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-4" style={{ color: "#52525B" }}>
            Every founder hits this decision eventually: hire an SDR (or a team of them) and build outbound in-house, or bring in an agency that already has the system running. There's no universally right answer, it comes down to how fast you need pipeline, how much risk you can absorb if a hire doesn't work out, and whether outbound is a core, ownable skill for your team or a function you'd rather not manage.
          </p>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            Here's the actual tradeoff, without the one-sided pitch.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: "#0a0a0a" }}>The tradeoff, side by side</h2>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ backgroundColor: "#ffffff" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #E8E2D9", backgroundColor: "#F8F6F2" }}>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#8C8279" }}>Factor</th>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#3b82f6" }}>Agency</th>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#D97706" }}>In-House SDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.factor} style={{ borderBottom: i < COMPARISON.length - 1 ? "1px solid #F0EBE3" : "none" }}>
                        <td className="px-5 py-5 font-bold align-top" style={{ color: "#0a0a0a" }}>{row.factor}</td>
                        <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.agency}</td>
                        <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.inHouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: "#8C8279" }}>
              Time-to-first-meeting and minimum engagement figures are Myntmore's actual averages. In-house salary and ramp-up ranges are typical industry figures, not Myntmore-specific data, since we don't run your hiring process.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* When in-house makes sense */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>When in-house actually makes more sense</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
              <p>Your sales motion is deeply technical or relationship-led, and prospects need to feel like they're talking to someone who lives inside your product every day, not an external rep working several accounts at once.</p>
              <p>You're playing a long game. A great SDR who grows into an AE, learns your product cold, and builds real relationships with your accounts can compound in value over 2+ years in a way a retainer doesn't.</p>
              <p>You already have the infrastructure, tooling, and management bandwidth to ramp someone properly, and outbound is a core, strategic capability you want fully owned and built as internal IP.</p>
              <p>You have the runway to absorb 3-6 months of near-zero output while a hire ramps, without that gap threatening your pipeline.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* When agency makes sense */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>When an agency actually makes more sense</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
              <p>You need pipeline now, not in a quarter. Hiring, onboarding, and ramp-up realistically take months before a new SDR is fully productive.</p>
              <p>You're testing a new market, ICP, or offer and don't yet know if it's worth a full-time hire. It's far cheaper to learn that with a flexible engagement than with a severance package.</p>
              <p>You don't have (and don't want to build) in-house expertise in deliverability infrastructure, list enrichment, or outbound tooling, that's a specialised skill set on its own.</p>
              <p>You want a predictable monthly cost instead of a hiring outcome you can't fully control, some hires simply don't work out, no matter how good the interview process is.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Final CTA */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e" }}>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">Let&apos;s figure out what fits your stage</h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
              Book a free 30-minute call. We'll tell you honestly whether an agency, an in-house hire, or a mix of both makes sense for where you are, even if the answer isn't us.
            </p>
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
