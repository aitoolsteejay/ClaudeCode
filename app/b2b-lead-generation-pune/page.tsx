import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "B2B Lead Generation Company in Pune",
  description: "B2B lead generation services in Pune for IT, SaaS and auto-component companies: cold email, LinkedIn and ABM that book qualified meetings, live in 18 days.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-pune" },
  keywords: ["b2b lead generation company in pune", "lead generation agency in pune", "lead generation services in pune", "b2b lead generation pune", "outbound agency pune", "linkedin outreach pune", "cold email agency pune", "account based marketing pune", "ai lead generation pune", "abm agency pune", "sales intelligence pune", "b2b lead generation for saas companies pune", "lead generation for auto component manufacturers pune", "b2b leads for it services companies pune", "lead generation for oem suppliers pune", "demand generation agency pune", "linkedin ghostwriting for founders pune", "best b2b outbound agency in pune", "how to get b2b leads in pune", "cold email agency for engineering companies pune"],
  openGraph: {
    title: "B2B Lead Generation Company in Pune | Myntmore",
    description: "Outbound lead generation for Pune's IT, SaaS and auto-component companies: cold email, LinkedIn and ABM.",
    url: "https://www.myntmore.com/b2b-lead-generation-pune",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "IT and SaaS teams across Hinjawadi, Magarpatta, and Kharadi", desc: "From Hinjawadi IT Park to Magarpatta Cybercity and Kharadi, Pune's software and SaaS companies compete on engineering strength, but product alone does not fill a sales calendar. Without a repeatable outbound engine, even great products stay word-of-mouth secrets." },
  { title: "Auto-component and engineering makers across Chakan and Bhosari", desc: "Reaching OEM buyers for manufacturers in Chakan, Bhosari, and Talegaon has traditionally meant trade fairs and supplier directories. A systematic outreach engine gets your precision engineering capabilities in front of new procurement heads year-round, not just at exhibitions." },
  { title: "Great engineers, no one owning outbound", desc: "A lot of Pune's most technically capable founders and teams have simply never had anyone dedicated to consistent outbound. It falls to whoever has time, which usually means it doesn't happen at all." },
];

const SEGMENTS = [
  { title: "IT services and SaaS", desc: "Software, product engineering and SaaS companies selling to enterprises and funded startups in India, the US and Europe, where the buyer is a CTO or business head who ignores generic pitches." },
  { title: "Auto-component and engineering manufacturers", desc: "Suppliers selling to OEMs and Tier 1 buyers, in India and abroad, who want new procurement conversations year-round instead of waiting for the next trade fair." },
  { title: "Industrial exporters", desc: "Engineering-goods and industrial-component makers reaching importers and sourcing teams overseas, with copy and sending times built for each market." },
];

const STEPS = [
  { when: "Week 1", title: "ICP and buying signals", desc: "We define who to target and which signals mean they are in-market: funding, new plants or projects, sales hiring, leadership changes and tenders." },
  { when: "Weeks 1–2", title: "Lists, domains and copy", desc: "Verified contact lists, dedicated sending domains with warm-up, and copy written for the buyer's role, industry and country." },
  { when: "Within 18 days", title: "Campaigns go live", desc: "Cold email and LinkedIn sequences start sending, with account-based plays for named OEM and enterprise accounts." },
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

const FAQ = [
  { q: "Do we need to be based in Pune to work with you?", a: "No. The entire engagement runs remotely, so it doesn't matter where your team sits." },
  { q: "Do you only work with Pune companies?", a: "No. We have clients in Pune, but we run outbound systems for B2B companies across India and internationally." },
  { q: "How quickly can we expect meetings to start?", a: "Most clients see their first qualified conversations within 3 to 4 weeks of kickoff, once ICP mapping, list building, and sequence setup are complete." },
  { q: "What does pricing look like?", a: "We work on a monthly retainer with a 3-month minimum, which covers setup and enough sending to judge results. After that it runs month to month with 30 days' notice, with no annual contract." },
  { q: "Are you a lead generation company or a B2B marketing agency?", a: "Myntmore is an outbound lead generation company, not a full-service B2B marketing agency. We run cold email, LinkedIn outreach, account-based marketing and founder personal branding to start sales conversations. We don't run paid ads, SEO or brand design, so pair us with a marketing agency if you need those too." },
  { q: "Which Pune industries do you have the most experience with?", a: "IT services, B2B SaaS, and auto-component and engineering manufacturers are where we've run the most campaigns, but our system adapts to any B2B ICP." },
  { q: "What channels do you actually use to generate leads?", a: "Primarily cold email and LinkedIn outreach aimed at IT, SaaS, and auto-component buyers, layered with account-based marketing for named OEM and enterprise accounts, and AI-assisted list building and personalisation underneath all three. We pick the mix based on where your buyers actually spend their attention." },
  { q: "How is this different from hiring an in-house SDR?", a: "Hiring an in-house SDR in Pune means months of recruiting and ramp-up before they're fully productive, and even then, one person can only run so many sequences at once. A managed outbound system has multiple channels live within about three weeks, at a fraction of the fully loaded cost of a hire, and scales without you managing headcount." },
  { q: "What do you need from us to get started?", a: "A clear picture of your ICP (even a rough one works), access to a domain we can set up for outbound sending, and about an hour of your time for an onboarding call. We handle ICP refinement, list building, sequence writing, and day-to-day campaign management from there." },
];

export default function B2BLeadGenerationPunePage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={buildLocalBusinessSchema("https://www.myntmore.com/b2b-lead-generation-pune")} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Pune", href: "/b2b-lead-generation-pune" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>
              Pune
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Pune
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Pune runs on IT services, SaaS, and auto-component manufacturing. If you are comparing B2B lead generation companies in Pune, we build the AI-powered cold email, LinkedIn, and ABM systems that turn strong engineering into a predictable pipeline of meetings.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Pune businesses need this</h2>
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
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Who we generate leads for in Pune</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>Our lead generation services in Pune are built for companies that sell to other businesses, in India or overseas.</p>
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
            <Link href="/case-studies/saas-workflow-automation-enterprise" className="font-bold underline" style={{ color: "#A14A08" }}>31 enterprise sales meetings for a workflow automation SaaS</Link>,{" "}
            <Link href="/case-studies/manufacturers-exporters-germany-industrial-components" className="font-bold underline" style={{ color: "#A14A08" }}>an industrial components maker selling into Germany</Link>{" "}and{" "}
            <Link href="/case-studies/agencies-it-usa-software-development" className="font-bold underline" style={{ color: "#A14A08" }}>a software development firm winning US clients</Link>.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Myntmore over a typical Pune agency</h2>
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

      <LeadCaptureForm title="Get a free GTM audit for your Pune business" subtitle="We'll audit your current outreach, map your ICP, and tell you exactly what's holding your pipeline back. No pitch, no pressure." />
    </InnerLayout>
  );
}
