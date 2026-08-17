import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency in Mumbai",
  description: "AI-powered B2B lead generation for Mumbai businesses: cold email, LinkedIn outreach, and account-based marketing built for the city's BFSI, media, and corporate landscape.",
  alternates: { canonical: "https://www.myntmore.com/b2b-lead-generation-mumbai" },
  keywords: ["b2b lead generation mumbai", "outbound agency mumbai", "linkedin outreach mumbai", "cold email agency mumbai", "account based marketing mumbai", "ai lead generation mumbai", "abm agency mumbai", "sales intelligence mumbai", "b2b lead generation for bfsi companies mumbai", "lead generation for media and entertainment companies mumbai", "b2b leads for professional services firms mumbai", "demand generation agency mumbai", "linkedin ghostwriting for founders mumbai", "cold email agency worli mumbai", "best b2b outbound agency in mumbai", "how to get b2b leads in mumbai", "outbound agency for saas founders mumbai"],
  openGraph: {
    title: "B2B Lead Generation Agency in Mumbai | Myntmore",
    description: "AI-powered outbound systems built for Mumbai's BFSI, media, and corporate landscape.",
    url: "https://www.myntmore.com/b2b-lead-generation-mumbai",
  },
};

const WHY_CITY = [
  { title: "A financial capital that ignores generic pitches", desc: "Mumbai's BFSI and media companies get pitched constantly. A cold email that reads like every other vendor's template gets deleted in the same second it's read. Cutting through here needs research-backed, signal-driven outreach, not volume." },
  { title: "Real estate is expensive, SDRs more so", desc: "Between office costs and Mumbai-scale salaries, a single in-house SDR can take months to become productive and even longer to pay for itself. A fully managed outbound engine gets you pipeline from week one at a fraction of that cost." },
  { title: "A crowded founder scene that rewards systems, not hustle", desc: "Mumbai has one of India's densest startup and founder ecosystems. Standing out among that many funded, ambitious competitors takes a repeatable outbound system, not one more founder cold-DMing prospects between meetings." },
];

const SERVICES = [
  { title: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach", desc: "Multi-touch LinkedIn sequences that turn connections into conversations." },
  { title: "Cold Email Infrastructure", href: "/services/cold-email", desc: "Domain warm-up, deliverability, and AI-personalised sequences that land in the inbox." },
  { title: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence", desc: "40+ buying signals monitored daily so you reach in-market accounts first." },
  { title: "AI Lead Generation", href: "/services/ai-lead-generation", desc: "Custom AI agents research and prioritise leads so your team only talks to fits." },
  { title: "Account-Based Marketing", href: "/services/account-based-marketing", desc: "Coordinated campaigns targeting your highest-value Mumbai and pan-India accounts." },
  { title: "Personal Branding", href: "/services/personal-branding", desc: "LinkedIn ghostwriting that builds authority for founders and execs." },
];

const DIFFERENTIATORS = [
  "AI-powered signal tracking instead of static, bought lists",
  "A fully productized system, live in weeks, not a slow agency ramp-up",
  "Transparent reporting on every meeting, reply, and touch",
  "A monthly retainer with no long-term lock-in contract",
];

const FAQ = [
  { q: "Do we need to be based in Mumbai to work with you?", a: "No. We're headquartered in Worli, Mumbai, and many of our clients are here, but the entire engagement runs remotely. Location has no bearing on how the system is built or managed." },
  { q: "Do you only work with Mumbai companies?", a: "Not at all. Mumbai is where we're based and where a large share of our clients happen to be, but we run outbound systems for B2B companies across India and internationally." },
  { q: "How quickly can we expect meetings to start?", a: "Most clients see their first qualified conversations within 3 to 4 weeks of kickoff, once ICP mapping, list building, and sequence setup are complete." },
  { q: "What does pricing look like?", a: "We work on a monthly retainer with no long-term lock-in. You can review results every 30 days and decide whether to continue." },
  { q: "Which Mumbai industries do you have the most experience with?", a: "BFSI, media and entertainment, professional services, and B2B SaaS founders are where we've run the most campaigns, but our system adapts to any B2B ICP." },
  { q: "What channels do you actually use to generate leads?", a: "Primarily cold email and LinkedIn outreach tuned to cut through Mumbai's crowded BFSI and media inboxes, layered with account-based marketing for named target accounts, and AI-assisted signal tracking and personalisation underneath all three. We pick the mix based on where your buyers actually spend their attention." },
  { q: "How is this different from hiring an in-house SDR?", a: "Hiring an in-house SDR in Mumbai means months of recruiting and ramp-up at some of the country's highest salaries and office costs, before they're fully productive. A managed outbound system gets multiple channels running from week one, at a fraction of that fully loaded cost, and scales without you managing headcount." },
  { q: "What do you need from us to get started?", a: "A clear picture of your ICP (even a rough one works), access to a domain we can set up for outbound sending, and about an hour of your time for an onboarding call. We handle ICP refinement, list building, sequence writing, and day-to-day campaign management from there." },
];

export default function B2BLeadGenerationMumbaiPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Mumbai", href: "/b2b-lead-generation-mumbai" }]} />
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Mumbai
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Agency in Mumbai
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: "#52525B" }}>
            Mumbai runs on BFSI, media, and some of India's densest corporate HQ density. We build the AI-powered cold email, LinkedIn, and ABM systems that get your business in front of the right buyers here, systematically.
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
