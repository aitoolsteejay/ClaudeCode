import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { pageFaqsQA } from "@/lib/page-faqs";

export const metadata: Metadata = {
  title: "B2B Lead Generation Company in Mumbai",
  description: "Mumbai lead generation agency based in BKC, booking qualified meetings for BFSI, media, SaaS and professional services firms with cold email and LinkedIn.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-mumbai" },
  keywords: ["b2b lead generation companies in mumbai", "lead generation company in mumbai", "b2b marketing company in mumbai", "linkedin lead generation agency mumbai", "b2b lead generation mumbai", "outbound agency mumbai", "linkedin outreach mumbai", "cold email agency mumbai", "account based marketing mumbai", "ai lead generation mumbai", "abm agency mumbai", "sales intelligence mumbai", "b2b lead generation for bfsi companies mumbai", "lead generation for media and entertainment companies mumbai", "b2b leads for professional services firms mumbai", "demand generation agency mumbai", "linkedin ghostwriting for founders mumbai", "cold email agency bkc mumbai", "best b2b outbound agency in mumbai", "how to get b2b leads in mumbai", "outbound agency for saas founders mumbai"],
  openGraph: {
    title: "B2B Lead Generation Company in Mumbai | Myntmore",
    description: "BKC-based lead generation agency booking qualified meetings for Mumbai's BFSI, media, SaaS and professional services firms.",
    url: "https://www.myntmore.com/b2b-lead-generation-mumbai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "A financial capital across BKC, Lower Parel, and Nariman Point", desc: "Mumbai's BFSI, fintech, and media leaders across Bandra Kurla Complex (BKC), Lower Parel, and Nariman Point get pitched constantly. A cold email that reads like every other vendor's template gets deleted immediately. Cutting through takes research-backed, signal-driven outreach built around executive timing." },
  { title: "Real estate is expensive, SDRs more so", desc: "Between commercial office costs in Mumbai and rising SDR salaries, hiring an in-house sales development team takes months to become productive and even longer to pay for itself. A fully managed outbound engine gives you pipeline from week three without adding headcount." },
  { title: "Fast-growing B2B tech and agency corridors", desc: "From Andheri East to Goregaon and Navi Mumbai, scaling B2B companies need a systematic outbound pipeline that does not rely on random founder networking or sporadic referrals." },
];

// The homepage holds the head term ("lead generation agency in mumbai"); this
// page goes after the longer company, industry and channel searches.
const SEGMENTS = [
  { title: "BFSI, fintech and wealth", desc: "NBFCs, fintechs, wealth managers and PMS firms selling to CFOs, treasury heads and business owners who ignore anything that reads like a template." },
  { title: "Media, SaaS and tech", desc: "Media, adtech and B2B SaaS companies selling to brand, marketing and technology leaders in Mumbai's corporate HQs and across India." },
  { title: "Professional services", desc: "Consulting, legal, tax and HR firms that grew on referrals and now need a steady flow of new conversations with decision-makers." },
];

const STEPS = [
  { when: "Week 1", title: "ICP and buying signals", desc: "We define who to target and which signals mean they are in-market: funding, leadership changes, expansion, regulatory deadlines and hiring." },
  { when: "Weeks 1–2", title: "Lists, domains and copy", desc: "Verified contact lists, dedicated sending domains with warm-up, and copy written for the buyer's role and industry." },
  { when: "Within 18 days", title: "Campaigns go live", desc: "Cold email and LinkedIn sequences start sending, with account-based plays for your named target accounts." },
  { when: "Weeks 3–8", title: "Conversations, then consistency", desc: "First qualified conversations usually come in weeks 3 to 4, and meeting volume becomes consistent by weeks 6 to 8 as we tune messaging on real replies." },
];

const SERVICES = [
  { title: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach", desc: "Multi-touch LinkedIn sequences that turn connections into conversations." },
  { title: "Cold Email Infrastructure", href: "/services/cold-email", desc: "Domain warm-up, deliverability, and AI-personalised sequences that land in the inbox." },
  { title: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence", desc: "40+ buying signals monitored daily so you reach in-market accounts first." },
  { title: "AI Lead Generation", href: "/services/ai-lead-generation", desc: "Custom AI agents research and prioritise leads so your team only talks to fits." },
  { title: "Account-Based Marketing", href: "/services/account-based-marketing", desc: "Coordinated campaigns targeting your highest-value Mumbai and pan-India accounts." },
  { title: "Personal Branding", href: "/services/personal-branding", desc: "LinkedIn ghostwriting that builds authority for founders and execs." },
  { title: "GTM Strategy", href: "/services/gtm-strategy", desc: "ICP, positioning and channel mix, then run by the same team across every channel." },
];

const DIFFERENTIATORS = [
  "AI-powered signal tracking instead of static, bought lists",
  "A fully productized system, live in weeks, not a slow agency ramp-up",
  "Transparent reporting on every meeting, reply, and touch",
  "A monthly retainer: 3-month minimum, then month to month",
];

const FAQ = pageFaqsQA("city-mumbai");

export default function B2BLeadGenerationMumbaiPage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={buildLocalBusinessSchema("https://www.myntmore.com/b2b-lead-generation-mumbai")} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Mumbai", href: "/b2b-lead-generation-mumbai" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>
              Mumbai
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Company in Mumbai
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Mumbai runs on BFSI, media, and some of India's densest corporate HQ density. We build the AI-powered cold email, LinkedIn, and ABM systems that get your business in front of the right buyers here, systematically.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Mumbai businesses need this</h2>
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
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Who we generate leads for in Mumbai</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>We are a Mumbai lead generation company, based in BKC, working with B2B firms across the city and beyond.</p>
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
            <Link href="/case-studies/wealth-management-pms-pipeline" className="font-bold underline" style={{ color: "#A14A08" }}>a wealth management and PMS firm</Link>,{" "}
            <Link href="/case-studies/saas-fintech-pipeline" className="font-bold underline" style={{ color: "#A14A08" }}>a ₹72 lakh pipeline for a fintech SaaS company</Link>{" "}and{" "}
            <Link href="/case-studies/professional-services-consulting-conversations" className="font-bold underline" style={{ color: "#A14A08" }}>a management consulting firm</Link>.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Myntmore over a typical Mumbai agency</h2>
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

      <LeadCaptureForm title="Get a free GTM audit for your Mumbai business" subtitle="We'll audit your current outreach, map your ICP, and tell you exactly what's holding your Mumbai pipeline back. No pitch, no pressure." />
    </InnerLayout>
  );
}
