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

export const metadata: Metadata = {
  title: "AI Medical Tourism Platform Case Study",
  description: "How Myntmore generated 140 qualified leads with a 61.6% hospital response rate for an AI medical tourism platform. See the case study.",
  keywords: [
    "medical tourism lead generation case study",
    "healthtech b2b outbound case study",
    "hospital decision maker linkedin outreach",
    "doctor outreach b2b case study",
    "international patient healthcare outbound",
    "ai medical travel platform pipeline",
    "myntmore healthcare case study",
    "b2b lead generation medical travel",
  ],
  alternates: { canonical: "https://www.myntmore.com/case-studies/medical-tourism-platform-pipeline" },
  openGraph: {
    title: "Outbound Pipeline for an AI Medical Tourism Platform | Myntmore",
    description: "140 qualified leads · 61.6% hospital response rate · 58 leads from doctors",
    url: "https://www.myntmore.com/case-studies/medical-tourism-platform-pipeline",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Building an Outbound Pipeline for an AI-Powered Medical Tourism Platform | Myntmore",
  description: "140 qualified leads · 61.59% hospital decision-maker response rate · 58 leads from doctors across healthcare outbound",
  url: "https://www.myntmore.com/case-studies/medical-tourism-platform-pipeline",
  datePublished: "2026-10-22T10:15:00+05:30",
  dateModified: "2026-10-22T10:15:00+05:30",
});

const SEGMENTS = [
  {
    name: "Doctors",
    acceptance: "30.54%",
    response: "37.63%",
    leads: "58",
    notes: "Largest audience tested and highest overall lead volume",
    highlight: true,
  },
  {
    name: "Hospital Decision Makers",
    acceptance: "32.84%",
    response: "61.59%",
    leads: "45",
    notes: "Strongest major segment after connection, high lead concentration",
    highlight: true,
  },
  {
    name: "CEOs of Hospitals",
    acceptance: "32.73%",
    response: "49.30%",
    leads: "16",
    notes: "Senior hospital leaders showed strong engagement once connected",
    highlight: false,
  },
  {
    name: "Operations & Partnerships",
    acceptance: "33.33%",
    response: "51.85%",
    leads: "9",
    notes: "Focused decision-maker audience with healthy post-connection engagement",
    highlight: false,
  },
  {
    name: "Business Development & Operations",
    acceptance: "38.12%",
    response: "59.74%",
    leads: "12",
    notes: "Highest acceptance rate among consolidated segments and strong response",
    highlight: true,
  },
];

export default function MedicalTourismPlatformPipeline() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: "AI Medical Tourism Platform", href: "/case-studies/medical-tourism-platform-pipeline" },
            ]}
          />

          <span
            className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(20,184,166,0.08)",
              color: "#0F766E",
              border: "1px solid rgba(20,184,166,0.25)",
            }}
          >
            Pharma &amp; Healthcare · HealthTech
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0A0A0A" }}>
            Building an outbound pipeline for an AI-powered medical tourism platform
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-[#52525B]">
            With nearly two decades of experience in medical tourism dating back to 2006, the founder saw firsthand how difficult it is for international patients to find the right specialists, reports, and cross-border support. Building in the health-tech and medical travel space, the company leverages technology to simplify cross-border patient journeys while helping hospitals and partners manage enquiries, case coordination, and patient care.
          </p>

          {/* Key Stat Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border mb-6"
            style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
          >
            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="140" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Qualified leads generated
              </div>
            </div>

            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0F766E]">
                <StatTicker value="61.6%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Hospital decision-maker response
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="58" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Leads from doctors (top volume)
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">59.7%</strong> BD &amp; Ops response rate
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">51.9%</strong> Ops &amp; Partnerships response
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">49.3%</strong> Hospital CEOs response rate
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">38.1%</strong> highest acceptance (BD &amp; Ops)
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Case Study Body ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto space-y-14">
          {/* 1. The Challenge */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">
              The Context
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Challenge
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Medical travel is an exceptionally high-trust category. The stakeholders involved are not making everyday business software purchases: they are dealing with patients seeking critical treatments, referrals between specialists and hospitals, diagnostic reports, cultural expectations, and cross-border care delivery.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B]">
              A generic product-led sales pitch would have immediately failed in this environment. The challenge was to systematically reach diverse roles across the medical travel ecosystem, pinpoint which audiences had genuine commercial appetite, and initiate consultative dialogues without making every interaction feel like another aggressive sales solicitation.
            </p>
          </div>

          {/* 2. The Approach */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">
              The Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Approach: Relevance, Segmentation &amp; Conversation Before Conversion
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-8">
              Myntmore built the outbound architecture around precise audience segmentation, addressing distinct problems for each stakeholder group:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="inline-block text-xs font-black text-[#0F766E] bg-teal-50 px-2.5 py-1 rounded-md mb-3 border border-teal-200">
                  Doctors &amp; Specialists
                </span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Referrals &amp; Continuity</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Approached around referral visibility, patient updates, and staying informed about their patients&apos; care overseas.
                </p>
              </div>

              <div className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="inline-block text-xs font-black text-[#0F766E] bg-teal-50 px-2.5 py-1 rounded-md mb-3 border border-teal-200">
                  Hospital Decision-Makers
                </span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Enquiry Quality &amp; Conversion</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Approached around incoming international patient enquiry quality, conversion rates, and streamlined cross-border case coordination.
                </p>
              </div>

              <div className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="inline-block text-xs font-black text-[#0F766E] bg-teal-50 px-2.5 py-1 rounded-md mb-3 border border-teal-200">
                  Facilitators &amp; Partners
                </span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Expectation Management</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Approached around patient expectations, seamless logistics, and managing India-bound medical travel cases with clarity.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-6 border bg-[#FEF9EC]" style={{ borderColor: "rgba(245,183,49,0.35)" }}>
              <p className="text-sm sm:text-base font-semibold text-[#0A0A0A] leading-relaxed">
                <strong>Strategic Opening:</strong> In multiple campaigns, prospects were invited to share market perspectives, provide feedback, or explore becoming early platform partners. This made initial interactions frictionless and gave conversations organic momentum before introducing commercial terms.
              </p>
            </div>
          </div>

          {/* 3. Outreach Results by Segment */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">
              The Data Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Outreach Results by Segment
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Across the consolidated ICPs, the campaigns generated <strong>140 qualified leads</strong>. Doctors delivered the highest overall lead volume, while hospital leaders and business-focused roles exhibited exceptional response rates post-connection.
            </p>

            {/* Segment Table */}
            <div className="rounded-2xl border overflow-hidden bg-white shadow-sm mb-6" style={{ borderColor: "#E8E2D9" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FAF8F5] text-xs font-bold uppercase text-[#71675E] border-b" style={{ borderColor: "#E8E2D9" }}>
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Segment</th>
                      <th className="py-3.5 px-4">Acceptance</th>
                      <th className="py-3.5 px-4">Response</th>
                      <th className="py-3.5 px-4">Leads</th>
                      <th className="py-3.5 px-4 sm:px-6">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9]/60">
                    {SEGMENTS.map((seg) => (
                      <tr key={seg.name} className={seg.highlight ? "bg-teal-50/30" : "hover:bg-zinc-50/50"}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-[#0A0A0A]">
                          {seg.name}
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#0A0A0A]">{seg.acceptance}</td>
                        <td className="py-4 px-4 font-black text-[#0F766E]">{seg.response}</td>
                        <td className="py-4 px-4 font-black text-[#0A0A0A]">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs font-bold">
                            {seg.leads}
                          </span>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-xs text-[#52525B]">{seg.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scale vs Engagement Insight */}
            <div className="rounded-xl border p-5 bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
              <h4 className="text-sm font-bold text-[#0A0A0A] mb-2">Scale vs. Engagement Dynamics</h4>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                The data highlighted an essential pipeline distinction between <strong>scale</strong> and <strong>engagement</strong>: Doctors provided the highest raw volume with 58 leads, whereas Hospital Decision Makers responded at an extraordinary <strong>61.59%</strong> and Business Development &amp; Operations reached <strong>59.74%</strong>. This clarity allows the team to allocate outreach specifically where volume is required vs where high-touch enterprise partnerships are nurtured.
              </p>
            </div>
          </div>

          {/* 4. The Messaging Strategy */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">
              Execution Mechanics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Messaging Strategy
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Our messaging focused on opening authentic conversations rather than pushing immediate demo requests:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-2">Early Collaborator Positioning</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Prospects were invited as industry co-creators to provide domain input or explore pilot partnerships, significantly lowering defense mechanisms.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-2">Pattern-Disrupting Voice Notes</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Founder-led voice notes were deployed in selected follow-ups to break the rhythm of templated text outreach, humanizing the brand and revitalizing unreplied conversations.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Key Takeaways & What We Learned */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">
              Executive Learnings
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 text-[#0A0A0A]">
              Key Takeaways &amp; What We Learned
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "High-intent ICPs outshine broad targeting",
                  body: "Hospital Decision Makers delivered a 61.59% response rate and 45 leads, validating the enormous leverage of addressing people directly responsible for international patient conversion.",
                },
                {
                  title: "Doctors provide pipeline scale",
                  body: "With 58 leads, doctors represented the largest opportunity base, even though their post-acceptance reply rate was naturally lower than dedicated administrative hospital staff.",
                },
                {
                  title: "Operational roles represent high-conversion assets",
                  body: "Business Development & Operations achieved a 59.74% response rate, and Operations & Partnerships reached 51.85%, highlighting that healthcare operational champions are eager for workflow solutions.",
                },
                {
                  title: "Specificity earns the meeting",
                  body: "Treating each cohort as a distinct conversation (referrals for doctors vs enquiry quality for hospital CEOs) eliminated generic messaging and dramatically lifted trust.",
                },
                {
                  title: "Earn the conversation before asking for the conversion",
                  body: "Leading with the prospect's real-world experience and introducing early collaboration before a commercial ask created an enduring, repeatable healthcare outbound playbook.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-5 bg-white"
                  style={{ borderColor: "#E8E2D9" }}
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-[#0F766E] text-xs font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed pl-8">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Used in this Engagement */}
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: "#E8E2D9" }}>
            <h3 className="text-base font-black mb-3 text-[#0A0A0A]">
              Services used in this engagement
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
                { name: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
                { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="inline-flex min-h-[44px] items-center text-xs px-3.5 py-2 rounded-full font-medium transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#F8F6F2", color: "#3D3D3D", border: "1px solid #E8E2D9" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Paths ────────────────────────────────────────────── */}
      <RelatedPath
        heading="Go deeper"
        intro="The method behind this result."
        items={CASE_STUDY_PATHS["medical-tourism-platform-pipeline"]}
        cta={false}
      />

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-[#0A0A0A]">
            Build a high-converting pipeline for your healthcare platform
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto text-[#52525B]">
            Book a free 30-minute strategy call. We&apos;ll audit your healthcare ICP segments, refine your messaging angles, and engineer your outbound pipeline.
          </p>
          <a
            href="/book-a-call"
            className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <LeadCaptureForm />
    </InnerLayout>
  );
}
