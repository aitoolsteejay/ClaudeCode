import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { pageFaqsQA } from "@/lib/page-faqs";

export const metadata: Metadata = {
  title: "B2B Lead Generation Company in Hyderabad",
  description: "Lead generation services in Hyderabad for IT, pharma and biotech companies: cold email, LinkedIn and ABM that book qualified meetings, live in 18 days.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-hyderabad" },
  keywords: ["lead generation company in hyderabad", "lead generation services in hyderabad", "pharma lead generation agency hyderabad", "b2b lead generation hyderabad", "outbound agency hyderabad", "linkedin outreach hyderabad", "cold email agency hyderabad pharma", "account based marketing hyderabad", "ai lead generation hyderabad", "abm agency hyderabad", "sales intelligence hyderabad", "b2b lead generation for pharma companies hyderabad", "lead generation for biotech companies genome valley", "lead generation for it services companies hyderabad", "b2b leads for hyderabad startups", "demand generation agency hyderabad", "linkedin ghostwriting for founders hyderabad", "best b2b outbound agency in hyderabad", "how to get b2b leads in hyderabad", "cold email agency for pharma companies telangana"],
  openGraph: {
    title: "B2B Lead Generation Company in Hyderabad | Myntmore",
    description: "Outbound lead generation for Hyderabad's IT, pharma and biotech companies: cold email, LinkedIn and ABM.",
    url: "https://www.myntmore.com/b2b-lead-generation-hyderabad",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "Pharma and biotech sales cycles that need consistency", desc: "Hyderabad's pharmaceutical and biotech companies, based around its Genome Valley cluster, sell into long, compliance-heavy, technical buying processes. Getting in front of the right procurement and R&D contacts takes sustained, multi-touch outreach, not a single email blast." },
  { title: "IT and SaaS teams across HITEC City, Madhapur, and Gachibowli", desc: "Hyderabad's enterprise tech and SaaS corridor across HITEC City, Madhapur, and Gachibowli competes globally for enterprise deals and GCC mandates. Generic SDR templates get lost immediately; winning qualified pipeline requires signal-led, multi-channel outreach built around verified buyer context." },
  { title: "Growth-stage founders still running outbound manually", desc: "Many of Hyderabad's fastest-growing venture-backed startups and IT services companies have no full-time outbound system. Prospecting happens in sporadic bursts on the founder's calendar, creating unpredictable revenue cycles." },
];

const SEGMENTS = [
  { title: "Pharma, API and biotech", desc: "API makers, formulation and contract manufacturers, and biotech firms selling to procurement, sourcing and R&D teams in India and export markets." },
  { title: "Clinical research and life-sciences services", desc: "CROs, labs and life-sciences service providers reaching sponsors and pharma decision-makers who rarely respond to generic outreach." },
  { title: "IT services and SaaS", desc: "IT services, product engineering and SaaS companies selling to enterprises, global capability centres and international buyers." },
];

const STEPS = [
  { when: "Week 1", title: "ICP and buying signals", desc: "We define who to target and which signals mean they are in-market: new facilities, pipeline milestones, funding, leadership changes and hiring." },
  { when: "Weeks 1–2", title: "Lists, domains and copy", desc: "Verified contact lists, dedicated sending domains with warm-up, and copy written for the buyer's role, industry and country." },
  { when: "Within 18 days", title: "Campaigns go live", desc: "Cold email and LinkedIn sequences start sending, with account-based plays for your named target accounts." },
  { when: "Weeks 3–8", title: "Conversations, then consistency", desc: "First qualified conversations usually come in weeks 3 to 4, and meeting volume becomes consistent by weeks 6 to 8 as we tune messaging on real replies." },
];

const SERVICES = [
  { title: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach", desc: "Multi-touch LinkedIn sequences that turn connections into conversations." },
  { title: "Cold Email Infrastructure", href: "/services/cold-email", desc: "Domain warm-up, deliverability, and AI-personalised sequences that land in the inbox." },
  { title: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence", desc: "40+ buying signals monitored daily so you reach in-market accounts first." },
  { title: "AI Lead Generation", href: "/services/ai-lead-generation", desc: "Custom AI agents research and prioritise leads so your team only talks to fits." },
  { title: "Account-Based Marketing", href: "/services/account-based-marketing", desc: "Coordinated campaigns targeting your highest-value target accounts." },
  { title: "Personal Branding", href: "/services/personal-branding", desc: "LinkedIn ghostwriting that builds authority for founders and execs." },
  { title: "GTM Strategy", href: "/services/gtm-strategy", desc: "ICP, positioning and channel mix, then run by the same team across every channel." },
];

const DIFFERENTIATORS = [
  "Signal-based targeting instead of static, bought contact lists",
  "A fully productized system, live in weeks, not a slow agency ramp-up",
  "Transparent reporting on every meeting, reply, and touch",
  "A monthly retainer: 3-month minimum, then month to month",
];

const FAQ = pageFaqsQA("city-hyderabad");

export default function B2BLeadGenerationHyderabadPage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={buildLocalBusinessSchema("https://www.myntmore.com/b2b-lead-generation-hyderabad")} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Hyderabad", href: "/b2b-lead-generation-hyderabad" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>
              Hyderabad
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Hyderabad
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Hyderabad runs on IT/ITES, pharma and biotech, and a fast-growing startup scene. We build the AI-powered cold email, LinkedIn, and ABM systems that turn long, technical sales cycles into a predictable pipeline.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Hyderabad businesses need this</h2>
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
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Who we generate leads for in Hyderabad</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>Our lead generation services in Hyderabad are built for companies that sell to other businesses, in India or overseas.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SEGMENTS.map((item) => (
              <div key={item.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-6" style={{ color: "#52525B" }}>
            See it in practice:{" "}
            <Link href="/case-studies/pharma-api-supplier-conversations" className="font-bold underline" style={{ color: "#A14A08" }}>new commercial conversations for an API supplier</Link>,{" "}
            <Link href="/case-studies/pharma-clinical-research-meetings" className="font-bold underline" style={{ color: "#A14A08" }}>14 high-intent meetings for a clinical research firm</Link>{" "}and{" "}
            <Link href="/case-studies/agencies-it-services-international-proposals" className="font-bold underline" style={{ color: "#A14A08" }}>9 proposal-stage opportunities for an IT services company</Link>. For pharma specifically, see{" "}
            <Link href="/lp/pharma" className="font-bold underline" style={{ color: "#A14A08" }}>lead generation for pharma companies</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>How B2B lead generation works with us</h2>
          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#0a0a0a" }}>{step.title} <span className="text-sm font-semibold" style={{ color: "#A14A08" }}>· {step.when}</span></p>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm mt-6" style={{ color: "#52525B" }}>
            Comparing agencies? Use our{" "}
            <Link href="/resources/guides/how-to-choose-b2b-lead-generation-agency-india" className="font-bold underline" style={{ color: "#A14A08" }}>guide to choosing a B2B lead generation agency in India</Link>.
          </p>
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Myntmore over a typical Hyderabad agency</h2>
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

      <LeadCaptureForm title="Get a free GTM audit for your Hyderabad business" subtitle="We'll audit your current outreach, map your ICP, and tell you exactly what's holding your pipeline back. No pitch, no pressure." />
    </InnerLayout>
  );
}
