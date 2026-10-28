import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { pageFaqsQA } from "@/lib/page-faqs";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency in Delhi",
  description: "AI-powered B2B lead generation for Delhi NCR's enterprise, trading, and D2C companies: cold email, LinkedIn & ABM. Book a free GTM audit.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-delhi" },
  keywords: ["b2b lead generation delhi", "outbound agency delhi ncr", "linkedin outreach delhi", "cold email agency delhi", "account based marketing delhi", "ai lead generation delhi ncr", "abm agency delhi ncr", "sales intelligence delhi", "b2b lead generation for trading companies delhi", "lead generation for export houses delhi", "b2b leads for d2c brands delhi ncr", "enterprise lead generation delhi ncr", "demand generation agency gurgaon", "linkedin ghostwriting for founders delhi", "best b2b outbound agency in delhi ncr", "how to get b2b leads in delhi", "cold email agency gurgaon noida"],
  openGraph: {
    title: "B2B Lead Generation Agency in Delhi | Myntmore",
    description: "AI-powered outbound systems built for Delhi NCR's enterprise, trading, and D2C landscape.",
    url: "https://www.myntmore.com/b2b-lead-generation-delhi",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "Enterprise and export teams across Gurugram, Noida, and Delhi", desc: "From Cyber City and Golf Course Road in Gurugram to Sector 62 in Noida and Okhla Industrial Area, Delhi NCR is home to India's largest corporate headquarters and export houses. Growth stalls when teams rely solely on founder networks instead of a predictable cold outbound pipeline." },
  { title: "D2C and retail brands scaling B2B distribution", desc: "Fast-growing consumer brands across NCR often master D2C acquisition but lack an automated B2B outbound engine for wholesale, institutional retail partnerships, and corporate gifting deals." },
  { title: "Enterprise buyers behind layers of gatekeepers", desc: "Corporate buying committees across Connaught Place, Aerocity, and Gurugram have heavy administrative gatekeepers. Getting through requires multi-touch email and LinkedIn outreach built around timing signals, not brute-force cold calls." },
];

const SERVICES = [
  { title: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach", desc: "Multi-touch LinkedIn sequences that turn connections into conversations." },
  { title: "Cold Email Infrastructure", href: "/services/cold-email", desc: "Domain warm-up, deliverability, and AI-personalised sequences that land in the inbox." },
  { title: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence", desc: "40+ buying signals monitored daily so you reach in-market accounts first." },
  { title: "AI Lead Generation", href: "/services/ai-lead-generation", desc: "Custom AI agents research and prioritise leads so your team only talks to fits." },
  { title: "Account-Based Marketing", href: "/services/account-based-marketing", desc: "Coordinated campaigns targeting your highest-value NCR and pan-India accounts." },
  { title: "Personal Branding", href: "/services/personal-branding", desc: "LinkedIn ghostwriting that builds authority for founders and execs." },
  { title: "GTM Strategy", href: "/services/gtm-strategy", desc: "ICP, positioning and channel mix, then run by the same team across every channel." },
];

const DIFFERENTIATORS = [
  "Signal-based targeting instead of static, bought contact lists",
  "A fully productized system, live in weeks, not a slow agency ramp-up",
  "Transparent reporting on every meeting, reply, and touch",
  "A monthly retainer: 3-month minimum, then month to month",
];

const FAQ = pageFaqsQA("city-delhi");

export default function B2BLeadGenerationDelhiPage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={buildLocalBusinessSchema("https://www.myntmore.com/b2b-lead-generation-delhi")} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Delhi", href: "/b2b-lead-generation-delhi" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>
              Delhi NCR
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Delhi
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Delhi NCR runs on trading houses, D2C brands, and one of India's largest enterprise buyer bases. We build the AI-powered cold email, LinkedIn, and ABM systems that get you past the gatekeepers and into real conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book-a-call" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/services" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Delhi NCR businesses need this</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WHY_CITY.map((item) => (
              <div key={item.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Every service, one system</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>Seven productized services, built and managed for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border p-5 transition-all duration-200 hover:shadow-md" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-black mb-1.5 flex items-center justify-between" style={{ color: "#0a0a0a" }}>
                  {s.title}
                  <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#71675E" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Myntmore over a typical Delhi agency</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-2xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(245,183,49,0.12)" }}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm title="Get a free GTM audit for your Delhi NCR business" subtitle="We'll audit your current outreach, map your ICP, and tell you exactly what's holding your pipeline back. No pitch, no pressure." />
    </InnerLayout>
  );
}
