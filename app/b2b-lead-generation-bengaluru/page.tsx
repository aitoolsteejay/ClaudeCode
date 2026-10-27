import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency in Bangalore (Bengaluru)",
  description: "B2B lead generation services in Bangalore for SaaS, IT services and tech companies: cold email, LinkedIn outreach and ABM, live within 18 days.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-bengaluru" },
  keywords: ["b2b lead generation agency in bangalore", "lead generation company in bangalore", "sales lead generation companies in bangalore", "lead generation services in bangalore", "b2b lead generation bengaluru", "outbound agency bangalore", "linkedin outreach bengaluru", "cold email agency bangalore saas", "account based marketing bengaluru", "ai lead generation bangalore", "abm agency bengaluru", "sales intelligence bangalore", "b2b lead generation for saas companies bangalore", "demand generation agency bangalore", "lead generation for tech startups bengaluru", "outbound agency for deep tech startups bangalore", "b2b leads for saas companies expanding to us market", "linkedin ghostwriting for founders bangalore", "best b2b outbound agency in bangalore", "how to get b2b leads in bengaluru", "cold email agency for b2b saas india"],
  openGraph: {
    title: "B2B Lead Generation Agency in Bangalore (Bengaluru) | Myntmore",
    description: "Outbound lead generation for Bangalore's SaaS, IT services and tech companies: cold email, LinkedIn and ABM.",
    url: "https://www.myntmore.com/b2b-lead-generation-bengaluru",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "SaaS teams across Koramangala, HSR Layout, and Indiranagar", desc: "Bengaluru has India's highest concentration of B2B SaaS and venture-backed tech startups across Koramangala, HSR Layout, Indiranagar, and Whitefield. Most are exceptional at building product, but lack a structured outbound system for filling the top of the funnel beyond inbound form fills." },
  { title: "The most sophisticated tech buyers in India", desc: "Engineering heads and tech buyers in Bengaluru get pitched constantly and filter out generic SDR templates immediately. Cutting through here takes precision, signal-based targeting built around verified tech stack and hiring triggers." },
  { title: "Expanding from Bengaluru into US and global markets", desc: "Fast-growing tech teams in Electronic City and Outer Ring Road corridors often expand into US, UK, and European markets without an outbound engine built to reach enterprise decision-makers abroad." },
];

// Who the page is for. Bangalore buyers search "Bangalore" far more than
// "Bengaluru", so both names appear in the copy.
const SEGMENTS = [
  { title: "B2B SaaS selling in India and abroad", desc: "Series A and B SaaS teams that need pipeline beyond inbound and founder networks, often into US and UK markets where buyers have never heard of them." },
  { title: "IT services and product engineering", desc: "Firms selling to global capability centres, enterprises and funded startups, where the buyer is a CTO or engineering head who ignores generic pitches." },
  { title: "Fintech and deep tech", desc: "Longer, more technical sales where outreach has to show you understand the buyer's stack, regulation or use case before asking for a call." },
];

const STEPS = [
  { when: "Week 1", title: "ICP and buying signals", desc: "We define who to target and which signals mean they are in-market: funding rounds, sales hiring, new leadership, tech-stack changes." },
  { when: "Weeks 1–2", title: "Lists, domains and copy", desc: "Verified contact lists, dedicated sending domains with warm-up, and copy written for Bangalore's tech buyers or for your overseas market." },
  { when: "Within 18 days", title: "Campaigns go live", desc: "Cold email and LinkedIn sequences start sending, with account-based plays for your highest-value targets." },
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
  { q: "Do we need to be based in Bengaluru to work with you?", a: "No. The entire engagement runs remotely, so it doesn't matter where your team sits." },
  { q: "Do you only work with Bengaluru companies?", a: "No. We have clients in Bengaluru, but we run outbound systems for B2B SaaS and tech companies across India and internationally." },
  { q: "How quickly can we expect meetings to start?", a: "Most clients see their first qualified conversations within 3 to 4 weeks of kickoff, once ICP mapping, list building, and sequence setup are complete." },
  { q: "What does pricing look like?", a: "We work on a monthly retainer with a 3-month minimum, which covers setup and enough sending to judge results. After that it runs month to month with 30 days' notice, with no annual contract." },
  { q: "Are you a B2B marketing agency or a lead generation company?", a: "Myntmore is an outbound lead generation agency, not a full-service B2B marketing agency. We run cold email, LinkedIn outreach, account-based marketing and founder personal branding to start sales conversations. We don't run paid ads, SEO or brand design, so pair us with a marketing agency if you need those too." },
  { q: "Can you help a Bangalore SaaS company sell to the US or UK?", a: "Yes. For Bangalore SaaS teams selling abroad, we build separate sending infrastructure, write copy that reads as native to that market, send in the buyer's time zone and follow CAN-SPAM and GDPR rules. Our case studies include campaigns into the US, the UK and other international markets." },
  { q: "Which Bengaluru company types do you have the most experience with?", a: "B2B SaaS, tech startups, and deep-tech companies are where we've run the most campaigns, but our system adapts to any B2B ICP." },
  { q: "What channels do you actually use to generate leads?", a: "Primarily cold email and LinkedIn outreach tuned for sophisticated SaaS and tech buyers, layered with account-based marketing for named target accounts, and AI-assisted signal tracking and personalisation underneath all three. We pick the mix based on where your buyers, in India or overseas, actually spend their attention." },
  { q: "How is this different from hiring an in-house SDR?", a: "Hiring an in-house SDR in Bengaluru means months of recruiting and ramp-up in one of the country's most competitive hiring markets, before they're fully productive. A managed outbound system has multiple channels live within about three weeks, at a fraction of that fully loaded cost, and scales without you managing headcount." },
  { q: "What do you need from us to get started?", a: "A clear picture of your ICP (even a rough one works), access to a domain we can set up for outbound sending, and about an hour of your time for an onboarding call. We handle ICP refinement, list building, sequence writing, and day-to-day campaign management from there." },
];

export default function B2BLeadGenerationBengaluruPage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={buildLocalBusinessSchema("https://www.myntmore.com/b2b-lead-generation-bengaluru")} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Bengaluru", href: "/b2b-lead-generation-bengaluru" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#A14A08", border: "1px solid rgba(245,183,49,0.3)" }}>
              Bengaluru (Bangalore)
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Bangalore
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Bengaluru (Bangalore) is India's SaaS and tech capital, and its most competitive buyer market. We build the AI-powered cold email, LinkedIn, and ABM systems that cut through the noise and turn great product into predictable pipeline.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Bengaluru businesses need this</h2>
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
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Who we generate leads for in Bangalore</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>Our lead generation services in Bangalore are built for companies that sell to other businesses, at home or overseas.</p>
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
            <Link href="/case-studies/saas-series-a" className="font-bold underline" style={{ color: "#A14A08" }}>40 qualified meetings in 8 weeks for a Series A SaaS company</Link>{" "}and{" "}
            <Link href="/case-studies/saas-fintech-pipeline" className="font-bold underline" style={{ color: "#A14A08" }}>a ₹72 lakh pipeline for a fintech SaaS company</Link>.
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
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Why Myntmore over a typical Bengaluru agency</h2>
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

      <LeadCaptureForm title="Get a free GTM audit for your Bengaluru business" subtitle="We'll audit your current outreach, map your ICP, and tell you exactly what's holding your pipeline back. No pitch, no pressure." />
    </InnerLayout>
  );
}
