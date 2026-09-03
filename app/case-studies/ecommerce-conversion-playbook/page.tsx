import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "Cold Email Added $400K Pipeline in 6 Weeks",
  description: "How Myntmore built a cold email engine for an eCommerce SaaS: 28 meetings, 41% open rate, $400K pipeline in 6 weeks. See the full case study.",
  keywords: ["ecommerce saas lead generation", "b2b lead generation case study", "cold email case study", "cold email results b2b saas", "b2b pipeline generation case study", "shopify saas outbound case study", "dtc brand outreach case study", "cold email open rate results", "seed stage saas lead generation", "b2b cold email agency results", "ai lead generation case study", "icp mapping case study", "myntmore case study", "cold email pipeline growth"],
  alternates: { canonical: "https://www.myntmore.com/case-studies/ecommerce-conversion-playbook" },
  openGraph: {
    title: "$400K Pipeline in 6 Weeks | eCommerce SaaS Case Study | Myntmore",
    description: "28 meetings · 41% open rate · $400K pipeline",
    url: "https://www.myntmore.com/case-studies/ecommerce-conversion-playbook",
  },
};

export default function EcommerceConversionPlaybook() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "eCommerce Tech", href: "/case-studies/ecommerce-conversion-playbook" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(16,185,129,0.08)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>eCommerce Tech · Seed</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Cold email added $400K pipeline for an eCommerce SaaS in 6 weeks
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#52525B" }}>
            An eCommerce SaaS tool had a strong product but no repeatable way to reach DTC brand owners. Manual outreach was inconsistent and burning the team's time.
          </p>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            {[{ v: "28", l: "Meetings booked" }, { v: "41%", l: "Open rate" }, { v: "$400K", l: "Pipeline generated" }].map((s) => (
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
              The client had built a solid Shopify-integrated analytics tool but had zero outbound motion. Their growth team was relying on paid ads and the occasional warm intro. There was no ICP definition beyond "eCommerce brands," no outreach infrastructure, and no consistent pipeline. The founder was manually DMing prospects on LinkedIn, 5–10 a day, with near-zero conversion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The solution</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              We narrowed the ICP to DTC brands doing $1M–$20M in annual revenue on Shopify, using intent signals like recent funding, new hires in performance marketing, and active job posts for data analysts. We built a three-step cold email sequence with highly personalised first lines referencing each brand's ad spend patterns and product catalogue size.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["ICP narrowed to 3 sub-segments", "Intent-triggered send timing", "Personalised first lines at scale"].map((item) => (
                <div key={item} className="rounded-xl p-4 border text-sm font-semibold" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", color: "#3D3D3D" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              {[{ v: "28", l: "Qualified meetings in 6 weeks" }, { v: "41%", l: "Average email open rate" }, { v: "$400K", l: "Pipeline generated" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black" style={{ color: "#10b981" }}><StatTicker value={s.v} /></div>
                  <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed mt-6" style={{ color: "#52525B" }}>
              Within 6 weeks, the client had 28 qualified demos on the calendar, a 41% average open rate across sequences, and $400K in tracked pipeline. Two of those deals closed within the first quarter, directly attributable to the outbound system we built.
            </p>
          </div>

          <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#F0FDF4", borderColor: "#10b981" }}>
            <p className="text-lg font-semibold italic mb-3" style={{ color: "#0a0a0a" }}>
              &ldquo;We&apos;d tried cold email before and it never worked. Myntmore showed us the problem wasn&apos;t the channel. It was the targeting. The list quality and personalisation changed everything.&rdquo;
            </p>
            <p className="text-sm font-bold" style={{ color: "#10b981" }}>Co-founder, eCommerce SaaS (Seed stage)</p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Services used</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Cold Email Infrastructure", href: "/services/cold-email" },
                { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
                { name: "ICP Mapping", href: "/services/sales-intelligence" },
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
