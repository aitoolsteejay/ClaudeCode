import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";

const URL = "https://www.myntmore.com/case-studies/uk-pharma-qualified-meetings";

export const metadata: Metadata = {
  title: "20+ Qualified Meetings per Month for a UK Pharma Company",
  description: "How Myntmore helped a UK pharma company grow from 3 to 20+ qualified meetings per month and generate £200K+ in potential pipeline.",
  keywords: [
    "pharma lead generation case study",
    "uk pharmaceutical lead generation",
    "b2b pharma outbound",
    "pharma appointment setting",
    "pharma icp mapping",
    "linkedin outreach pharma",
    "b2b lead generation uk",
    "account based marketing pharma",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "20+ Qualified Meetings per Month | UK Pharma Case Study | Myntmore",
    description: "20+ qualified meetings per month · 35% positive response rate · £200K+ potential pipeline",
    url: URL,
  },
};

const HERO_STATS = [
  { value: "20+", label: "Qualified meetings / month" },
  { value: "35%", label: "Positive response rate" },
  { value: "£200K+", label: "Potential pipeline generated" },
];

const SOLUTION_AREAS = [
  {
    title: "ICP Mapping & Account Selection",
    body: "Narrowed the market to high-fit pharma accounts based on commercial relevance, company profile, buyer fit and likelihood to convert.",
  },
  {
    title: "Decision-Maker Outreach",
    body: "Mapped the relevant stakeholders within each account and built segment-specific messaging around the problems and outcomes that mattered to each persona.",
  },
  {
    title: "Campaign Optimisation",
    body: "Tracked responses, objections and conversion patterns to continuously improve targeting, messaging and follow-up sequences throughout the engagement.",
  },
];

const BEFORE_AFTER = [
  { before: "3", after: "20+", label: "Qualified meetings / month" },
  { before: "5%", after: "35%", label: "Positive response rate" },
  { before: "1", after: "11+", label: "Qualified opportunities" },
  { before: "£18K", after: "£200K+", label: "Potential pipeline generated" },
];

export default function UKPharmaQualifiedMeetingsCaseStudy() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-160px", left: "-180px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.20) 0%, rgba(13,148,136,0.07) 42%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-180px", width: "620px", height: "620px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(245,183,49,0.07) 42%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "Pharma · United Kingdom", href: "/case-studies/uk-pharma-qualified-meetings" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ backgroundColor: "rgba(20,184,166,0.08)", color: "#0f766e", borderColor: "rgba(20,184,166,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#14b8a6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]">Pharma · United Kingdom</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            20+ qualified meetings per month for a UK pharma company
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl hero-fade-d2" style={{ color: "#52525B" }}>
            A UK-based pharmaceutical company needed a more predictable way to reach the right B2B decision-makers in a specialised market without relying on broad, volume-heavy outreach.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 rounded-2xl border hero-fade-d3" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center py-3 sm:py-1">
                <div className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={stat.value} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>01 · The problem</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Precision mattered more than volume</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#52525B" }}>
              <p>The client was operating in a specialised pharma market where the number of genuinely relevant accounts was limited. Their existing outbound was generating just 3 meetings per month, with a 5% positive response rate and only 1 qualified opportunity.</p>
              <p>Simply increasing outreach volume was not the answer. They needed a way to identify the highest-fit accounts, reach the actual decision-makers within them, and create messaging relevant enough to start meaningful sales conversations.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>02 · The solution</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>We rebuilt outbound from the buyer backwards</h2>
            <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "#52525B" }}>
              <p>Instead of maximising the size of the prospect database, we narrowed the ICP, mapped high-fit accounts and decision-makers, and segmented outreach around the specific priorities of each buyer group.</p>
              <p>We then used live campaign data to continuously refine targeting, messaging and follow-ups based on which segments and personas were actually converting.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SOLUTION_AREAS.map((area, index) => (
                <div key={area.title} className="rounded-2xl p-5 border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black mb-4" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: "#0f766e" }}>0{index + 1}</span>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{area.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{area.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>03 · The results</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>A repeatable source of qualified opportunities</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#52525B" }}>Within 4 months, the outbound system went from inconsistent prospecting to a repeatable source of qualified B2B opportunities.</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 px-5 py-3 border-b text-xs font-bold uppercase tracking-widest" style={{ borderColor: "#E8E2D9", color: "#8C8279" }}>
                <span>Before</span><span aria-hidden="true">→</span><span className="text-right">After</span>
              </div>
              {BEFORE_AFTER.map((result, index) => (
                <div key={result.label} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center px-5 py-5" style={{ borderBottom: index < BEFORE_AFTER.length - 1 ? "1px solid #E8E2D9" : "none" }}>
                  <div><div className="text-2xl font-black" style={{ color: "#8C8279" }}>{result.before}</div><div className="text-xs mt-1" style={{ color: "#8C8279" }}>{result.label}</div></div>
                  <span className="text-xl" style={{ color: "#F5B731" }} aria-hidden="true">→</span>
                  <div className="text-right"><div className="text-2xl font-black" style={{ color: "#14b8a6" }}>{result.after}</div><div className="text-xs mt-1" style={{ color: "#52525B" }}>{result.label}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl p-6 sm:p-8 border-l-4" style={{ backgroundColor: "#F0FDFA", borderColor: "#14b8a6" }}>
              <p className="text-lg font-black leading-relaxed mb-3" style={{ color: "#0a0a0a" }}>Nearly 7X more meetings, 7X the positive response rate, 11X the qualified opportunities and 11X+ the potential pipeline.</p>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>More importantly, the growth did not come from simply contacting more people. It came from building a more precise system for identifying, reaching and converting the companies that actually mattered.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Services used in this engagement</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
                { name: "B2B Lead Generation", href: "/services/ai-lead-generation" },
                { name: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
                { name: "Outbound Strategy", href: "/services" },
              ].map((service) => (
                <Link key={service.name} href={service.href} className="text-sm px-4 py-2 rounded-full font-semibold transition-colors hover:opacity-80" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{service.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto"><LeadCaptureForm /></div>
      </section>
    </InnerLayout>
  );
}
