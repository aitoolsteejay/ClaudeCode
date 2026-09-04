import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency in Pune",
  description: "AI-powered B2B lead generation for Pune's IT, SaaS, and auto-component firms: cold email, LinkedIn & ABM. Book a free GTM audit.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-pune" },
  keywords: ["b2b lead generation pune", "outbound agency pune", "linkedin outreach pune", "cold email agency pune", "account based marketing pune", "ai lead generation pune", "abm agency pune", "sales intelligence pune", "b2b lead generation for saas companies pune", "lead generation for auto component manufacturers pune", "b2b leads for it services companies pune", "lead generation for oem suppliers pune", "demand generation agency pune", "linkedin ghostwriting for founders pune", "best b2b outbound agency in pune", "how to get b2b leads in pune", "cold email agency for engineering companies pune"],
  openGraph: {
    title: "B2B Lead Generation Agency in Pune | Myntmore",
    description: "AI-powered outbound systems built for Pune's IT, SaaS, and manufacturing base.",
    url: "https://www.myntmore.com/b2b-lead-generation-pune",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const WHY_CITY = [
  { title: "IT and SaaS teams that are strong on product, thin on pipeline", desc: "Pune's software and SaaS companies compete on engineering strength, but that alone doesn't fill a calendar. Without a repeatable outbound motion, even great products stay word-of-mouth secrets." },
  { title: "Auto-component makers stuck waiting for the next trade show", desc: "Reaching OEM buyers has traditionally meant trade fairs and existing supplier relationships. A systematic outreach engine gets your capability in front of new procurement teams year-round, not just at exhibitions." },
  { title: "Great engineers, no one owning outbound", desc: "A lot of Pune's most technically capable founders and teams have simply never had anyone dedicated to consistent outbound. It falls to whoever has time, which usually means it doesn't happen at all." },
];

const SERVICES = [
  { title: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach", desc: "Multi-touch LinkedIn sequences that turn connections into conversations." },
  { title: "Cold Email Infrastructure", href: "/services/cold-email", desc: "Domain warm-up, deliverability, and AI-personalised sequences that land in the inbox." },
  { title: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence", desc: "40+ buying signals monitored daily so you reach in-market accounts first." },
  { title: "AI Lead Generation", href: "/services/ai-lead-generation", desc: "Custom AI agents research and prioritise leads so your team only talks to fits." },
  { title: "Account-Based Marketing", href: "/services/account-based-marketing", desc: "Coordinated campaigns targeting your highest-value target accounts." },
  { title: "Personal Branding", href: "/services/personal-branding", desc: "LinkedIn ghostwriting that builds authority for founders and execs." },
];

const DIFFERENTIATORS = [
  "Signal-based targeting instead of static, bought contact lists",
  "A fully productized system, live in weeks, not a slow agency ramp-up",
  "Transparent reporting on every meeting, reply, and touch",
  "A monthly retainer with no long-term lock-in contract",
];

const FAQ = [
  { q: "Do we need to be based in Pune to work with you?", a: "No. The entire engagement runs remotely, so it doesn't matter where your team sits." },
  { q: "Do you only work with Pune companies?", a: "No. We have clients in Pune, but we run outbound systems for B2B companies across India and internationally." },
  { q: "How quickly can we expect meetings to start?", a: "Most clients see their first qualified conversations within 3 to 4 weeks of kickoff, once ICP mapping, list building, and sequence setup are complete." },
  { q: "What does pricing look like?", a: "We work on a monthly retainer with no long-term lock-in. You can review results every 30 days and decide whether to continue." },
  { q: "Which Pune industries do you have the most experience with?", a: "IT services, B2B SaaS, and auto-component and engineering manufacturers are where we've run the most campaigns, but our system adapts to any B2B ICP." },
  { q: "What channels do you actually use to generate leads?", a: "Primarily cold email and LinkedIn outreach aimed at IT, SaaS, and auto-component buyers, layered with account-based marketing for named OEM and enterprise accounts, and AI-assisted list building and personalisation underneath all three. We pick the mix based on where your buyers actually spend their attention." },
  { q: "How is this different from hiring an in-house SDR?", a: "Hiring an in-house SDR in Pune means months of recruiting and ramp-up before they're fully productive, and even then, one person can only run so many sequences at once. A managed outbound system gets multiple channels running from week one, at a fraction of the fully loaded cost of a hire, and scales without you managing headcount." },
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
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Pune
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Pune
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Pune runs on IT services, SaaS, and auto-component manufacturing. We build the AI-powered cold email, LinkedIn, and ABM systems that turn strong engineering into a predictable pipeline of meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
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
          <h2 className="text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Every service, one system</h2>
          <p className="text-base mb-10" style={{ color: "#52525B" }}>Six productized services, built and managed for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border p-5 transition-all duration-200 hover:shadow-md" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-black mb-1.5 flex items-center justify-between" style={{ color: "#0a0a0a" }}>
                  {s.title}
                  <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#8C8279" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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
