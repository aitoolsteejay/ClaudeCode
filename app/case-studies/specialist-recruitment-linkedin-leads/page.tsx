import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";
import JsonLd from "../../components/JsonLd";
import RelatedPath from "../../components/RelatedPath";
import { CASE_STUDY_PATHS } from "@/lib/internal-paths";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/specialist-recruitment-linkedin-leads";

export const metadata: Metadata = {
  title: "15 Leads a Month for a Specialist Recruiter",
  description: "LinkedIn and email outreach to GCC, tech and HR leaders: a 50% acceptance rate, 40% response rate and 15 leads a month for a specialist recruiter.",
  keywords: [
    "recruitment firm lead generation case study",
    "lead generation for recruitment agencies",
    "linkedin outreach for recruiters",
    "gcc recruitment lead generation",
    "b2b lead generation for staffing firms",
    "offshore recruitment delivery india",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "15 Leads a Month for a Specialist Recruitment Firm | Myntmore",
    description: "50% connection acceptance · 40% response rate · 15 leads per month",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Generating Qualified B2B Leads for a Specialist Recruitment Firm",
  description: "LinkedIn and email outreach to GCC, tech and HR leaders: a 50% acceptance rate, 40% response rate and 15 leads a month for a specialist recruiter.",
  url: URL,
  datePublished: "2026-10-26T12:00:00+05:30",
  dateModified: "2026-10-26T12:00:00+05:30",
});

const HERO_STATS = [
  { value: "50%", label: "Connection acceptance rate" },
  { value: "40%", label: "Response rate" },
  { value: "15", label: "Leads generated per month" },
];

// One message angle per audience, so each segment heard about the hiring
// problem it actually owns.
const SEGMENTS = [
  { title: "HR leaders", body: "Candidate quality, screening efficiency and less time spent reviewing CVs." },
  { title: "CXOs and business leaders", body: "The cost of prolonged vacancies and hiring delays on business execution." },
  { title: "GCC decision-makers", body: "Aligning global hiring plans with India's talent market." },
  { title: "Engineering and technology leaders", body: "Specialist skills, difficult-to-fill roles and fewer unnecessary interview rounds." },
  { title: "US and UK recruitment firms", body: "A managed recruitment delivery model through dedicated teams in India." },
];

const RESULTS = [
  { metric: "Connection acceptance rate", value: "50%" },
  { metric: "Response rate", value: "40%" },
  { metric: "Leads generated per month", value: "15" },
];

const THEMES = [
  { title: "Quality over volume", body: "Fewer, better-qualified candidates and less time wasted on unsuitable profiles." },
  { title: "Hiring outcomes", body: "The firm's reported conversion rates: about 75% from CV to interview, and 75–80% from offer to joining." },
  { title: "A specific reason to engage", body: "An invitation to discuss one difficult open role, or to explore a managed recruitment team in India." },
];

const WHY_IT_WORKED = [
  "Audience-specific messaging tied the recruitment offer to each person's own business problem.",
  "Practical hiring challenges gave prospects a clear reason to respond.",
  "Multiple touchpoints across LinkedIn and email created more chances to engage.",
  "Offering to discuss one difficult role made the next step concrete and easy to say yes to.",
  "The offshore recruitment offer gave US and UK staffing firms a distinct reason to engage.",
];

export default function SpecialistRecruitmentLinkedinLeadsCaseStudy() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-160px", left: "-180px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,148,136,0.20) 0%, rgba(13,148,136,0.07) 42%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-180px", width: "620px", height: "620px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(245,183,49,0.07) 42%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "Recruitment & Staffing · India", href: "/case-studies/specialist-recruitment-linkedin-leads" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ backgroundColor: "rgba(13,148,136,0.08)", color: "#0f766e", borderColor: "rgba(13,148,136,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0d9488" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]">Recruitment & Staffing · India</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Generating qualified B2B leads for a specialist recruitment firm
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl hero-fade-d2" style={{ color: "#52525B" }}>
            A specialist recruitment firm focused on technology and senior hiring for Global Capability Centres (GCCs), technology companies and engineering-led organisations wanted to generate qualified enterprise leads through LinkedIn outreach.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 rounded-2xl border hero-fade-d3" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center py-3 sm:py-1">
                <div className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={stat.value} /></div>
                <div className="text-xs mt-1" style={{ color: "#71675E" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F766E" }}>01 · The challenge</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Hard-to-fill roles, and buyers tired of CV volume</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#52525B" }}>
              <p>The firm differentiates itself through specialised recruiters, detailed candidate screening and a focus on hiring outcomes rather than CV volume. Its buyers often struggle to close niche technology and leadership roles: long hiring cycles, unsuitable CVs and candidates dropping out at the offer stage consume time for HR teams and business leaders alike.</p>
              <p>The objective was to reach decision-makers in growing GCCs and technology organisations, start relevant hiring conversations, and position specialist recruitment as a practical answer to difficult-to-fill roles.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F766E" }}>02 · The approach</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Five audiences, five hiring problems</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#52525B" }}>
              Outreach was segmented by audience and tailored to each group&apos;s hiring priorities. The campaign used personalised LinkedIn connection notes, structured follow-ups, email outreach, voice notes and memes, with messaging centred on practical hiring challenges and the value of a better-qualified shortlist.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SEGMENTS.map((segment, index) => (
                <div key={segment.title} className="rounded-2xl p-5 border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black mb-4" style={{ backgroundColor: "rgba(13,148,136,0.12)", color: "#0f766e" }}>0{index + 1}</span>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{segment.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{segment.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F766E" }}>03 · The results</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Relevant conversations, every month</h2>
            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#E8E2D9" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#F8F6F2" }}>
                    <th scope="col" className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Metric</th>
                    <th scope="col" className="text-right p-4 font-black" style={{ color: "#0a0a0a" }}>Average result</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row, i) => (
                    <tr key={row.metric} style={{ borderTop: i > 0 ? "1px solid #E8E2D9" : undefined }}>
                      <th scope="row" className="text-left p-4 font-bold" style={{ color: "#0a0a0a" }}>{row.metric}</th>
                      <td className="p-4 text-right font-black" style={{ color: "#0F766E" }}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F766E" }}>04 · The messaging</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Three themes in every conversation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {THEMES.map((theme) => (
                <div key={theme.title} className="rounded-2xl p-5 border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{theme.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{theme.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F766E" }}>05 · Why it worked</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-5" style={{ color: "#0a0a0a" }}>Lead with the hiring problem, not the agency</h2>
            <ul className="space-y-3">
              {WHY_IT_WORKED.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed" style={{ color: "#52525B" }}>
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5" style={{ backgroundColor: "#0d9488" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl p-6 sm:p-8 border-l-4" style={{ backgroundColor: "#F0FDFA", borderColor: "#0d9488" }}>
              <p className="text-lg font-black leading-relaxed mb-3" style={{ color: "#0a0a0a" }}>Lead with the hiring challenge, show the value of specialist screening, and tailor the conversation to the person responsible for solving the problem.</p>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>With average acceptance and response rates of 50% and 40%, and an average of 15 leads a month, the campaign put relevant conversations ahead of broad, untargeted outreach.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Services used in this engagement</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
                { name: "Cold Email Infrastructure", href: "/services/cold-email" },
                { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
                { name: "Lead generation for recruitment firms", href: "/lp/recruitment-firms" },
              ].map((service) => (
                <Link key={service.name} href={service.href} className="text-sm px-4 py-2 rounded-full font-semibold transition-colors hover:opacity-80" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{service.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPath heading="Go deeper" intro="The method behind this result." items={CASE_STUDY_PATHS["specialist-recruitment-linkedin-leads"]} />

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto"><LeadCaptureForm /></div>
      </section>
    </InnerLayout>
  );
}
