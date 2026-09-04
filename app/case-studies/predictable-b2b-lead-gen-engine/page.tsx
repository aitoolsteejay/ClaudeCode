import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Outbound Engine That Books 15+ Meetings a Month",
  description: "How Myntmore rebuilt a B2B firm's outbound motion: 15+ meetings/month, 29% reply rate, 4x pipeline growth. See the full case study.",
  keywords: ["predictable pipeline case study", "b2b lead generation case study", "outbound engine case study", "professional services lead generation", "cold email deliverability case study", "b2b services firm outbound results", "meetings booked per month case study", "b2b outbound agency results", "icp mapping case study", "cold email infrastructure case study", "ai lead generation case study", "b2b sales pipeline growth case study", "myntmore case study", "growth stage b2b lead generation"],
  alternates: { canonical: "https://www.myntmore.com/case-studies/predictable-b2b-lead-gen-engine" },
  openGraph: {
    title: "15+ Meetings/Month on Autopilot | B2B Outbound Case Study | Myntmore",
    description: "15+ meetings/month · 29% reply rate · 4x pipeline vs prior quarter",
    url: "https://www.myntmore.com/case-studies/predictable-b2b-lead-gen-engine",
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "15+ Meetings/Month on Autopilot | B2B Outbound Case Study | Myntmore",
  description: "15+ meetings/month · 29% reply rate · 4x pipeline vs prior quarter",
  url: "https://www.myntmore.com/case-studies/predictable-b2b-lead-gen-engine",
  datePublished: "2026-06-11T11:39:57+05:30",
  dateModified: "2026-09-03T23:48:49+05:30",
});

export default function PredictableB2BLeadGenEngine() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "Professional Services", href: "/case-studies/predictable-b2b-lead-gen-engine" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>Professional Services · Growth Stage</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Built a full outbound engine that books 15+ meetings/month on autopilot
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#52525B" }}>
            A mid-size B2B services firm had tried outbound before and failed: bad lists, generic copy, zero personalisation. We rebuilt everything from scratch and made outbound their #1 channel.
          </p>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            {[{ v: "15+", l: "Meetings/month" }, { v: "29%", l: "Reply rate" }, { v: "4x", l: "Pipeline vs prior quarter" }].map((s) => (
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
              The client was a 30-person B2B services firm that had run cold email campaigns in-house twice and gotten almost no results. They&apos;d bought a list, blasted generic emails, and seen reply rates under 1%. They had given up on outbound entirely and were relying on inbound and referrals, neither of which was scaling. The core issue wasn&apos;t the channel; it was the execution. Wrong lists, wrong messaging, and no follow-up logic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The solution</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              We started from zero: redefined the ICP across three distinct buyer personas, built fresh prospect lists using intent data and technographic filters, and rewrote every sequence from scratch. We also rebuilt their sending infrastructure across multiple domains with proper warm-up, SPF, DKIM, and DMARC in place. The result was a fully automated outbound engine that ran without manual prospecting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["ICP rebuilt across 3 personas", "Domain infra + deliverability fix", "5-touch multi-channel sequences"].map((item) => (
                <div key={item} className="rounded-xl p-4 border text-sm font-semibold" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", color: "#3D3D3D" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              {[{ v: "15+", l: "Qualified meetings/month" }, { v: "29%", l: "Average reply rate" }, { v: "4x", l: "Pipeline vs prior quarter" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black" style={{ color: "#ef4444" }}><StatTicker value={s.v} /></div>
                  <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed mt-6" style={{ color: "#52525B" }}>
              Within 10 weeks the engine was fully live and booking 15+ qualified meetings every month without any manual prospecting from the sales team. Pipeline grew 4x compared to the prior quarter. The client&apos;s head of sales described it as &ldquo;finally having a system that actually works.&rdquo;
            </p>
          </div>

          <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#FEF2F2", borderColor: "#ef4444" }}>
            <p className="text-lg font-semibold italic mb-3" style={{ color: "#0a0a0a" }}>
              &ldquo;We&apos;d tried outbound twice before and failed both times. Myntmore rebuilt everything: the list, the copy, the infrastructure. Now it just runs. We haven&apos;t touched a spreadsheet to find leads in months.&rdquo;
            </p>
            <p className="text-sm font-bold" style={{ color: "#ef4444" }}>Head of Sales, B2B Professional Services (Growth Stage)</p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Services used</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
                { name: "Cold Email Infrastructure", href: "/services/cold-email" },
                { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm px-4 py-2 rounded-full font-semibold transition-colors hover:opacity-80" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{s.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <LeadCaptureForm />
        </div>
      </section>
    </InnerLayout>
  );
}
