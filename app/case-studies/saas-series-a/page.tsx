import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "40 Qualified Meetings in 8 Weeks | SaaS Series A",
  description: "How Myntmore built an outbound engine for a SaaS Series A: 40 meetings, 34% reply rate, $1.2M pipeline in 8 weeks. See the case study.",
  keywords: ["saas series a lead generation results", "b2b saas outbound case study", "cold email and linkedin case study", "multi-channel outbound case study", "saas pipeline generation case study", "b2b saas case study", "cold start outbound case study", "ai lead generation case study", "icp mapping and lead scoring case study", "series a growth marketing case study", "saas qualified meetings case study", "myntmore case study", "b2b saas pipeline results", "cold email reply rate case study"],
  alternates: { canonical: "https://www.myntmore.com/case-studies/saas-series-a" },
  openGraph: {
    title: "40 Qualified Meetings in 8 Weeks | SaaS Series A | Myntmore",
    description: "Cold start → 40 meetings · 34% reply rate · $1.2M pipeline",
    url: "https://www.myntmore.com/case-studies/saas-series-a",
  },
};

export default function SaasSeriesA() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "SaaS Series A", href: "/case-studies/saas-series-a" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>SaaS · Series A</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            40 qualified meetings in 8 weeks from a cold start
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#52525B" }}>
            A B2B SaaS company entering a new vertical had zero outbound infrastructure. Their AE was spending 60% of their day manually finding leads on LinkedIn instead of closing deals.
          </p>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            {[{ v: "40", l: "Meetings in 8 weeks" }, { v: "34%", l: "Reply rate" }, { v: "$1.2M", l: "Pipeline generated" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The problem</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              A B2B SaaS company entering a new vertical had zero outbound infrastructure. Their account executive was spending 60% of their working day manually finding leads on LinkedIn instead of closing deals. There was no ICP definition, no sequences, and no way to predict where the next qualified meeting was coming from.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The solution</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              We built a multi-channel engine running cold email and LinkedIn automation in parallel. We scraped active intent data, specifically companies currently hiring for roles that signalled readiness to buy, to trigger perfectly timed outreach sequences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "ICP Mapping & Lead Scoring", desc: "ICP built around hiring signals and funding triggers specific to the target vertical" },
                { title: "Cold Email", desc: "3-step personalised sequences with intent-based first lines. A/B tested subject lines and CTAs" },
                { title: "LinkedIn Outreach", desc: "Parallel LinkedIn sequences reinforcing the cold email touch on the same prospects" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The results</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              Within 8 weeks from a complete cold start, the system was generating 5+ qualified meetings per week. The AE was freed from manual prospecting entirely, spending 100% of their time on demos and follow-ups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              {[{ v: "40", l: "Qualified meetings booked", sub: "In 8 weeks from zero" }, { v: "34%", l: "Email reply rate", sub: "vs 2–5% industry average" }, { v: "$1.2M", l: "Pipeline generated", sub: "Qualified opportunities created" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.v}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#3D3D3D" }}>{s.l}</div>
                  <div className="text-xs" style={{ color: "#8C8279" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>Services used in this engagement</h3>
            <div className="flex flex-wrap gap-2">
              {["ICP Mapping & Lead Scoring", "AI Lead Generation", "Cold Email Infrastructure", "LinkedIn Outreach & Automation"].map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "#F8F6F2", color: "#3D3D3D", border: "1px solid #E8E2D9" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>Get results like this for your pipeline</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Book a free 30-minute strategy call and we&apos;ll map out exactly how to build this system for your business.
          </p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      <LeadCaptureForm />
    </InnerLayout>
  );
}
