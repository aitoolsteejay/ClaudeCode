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
  title: "Wealth Management & PMS Firm Case Study",
  description: "How Myntmore built a pipeline for a SEBI-registered PMS firm: 150+ leads, 52% response rate, and 500% impression growth.",
  keywords: [
    "wealth management lead generation case study",
    "pms pipeline b2b outbound case study",
    "financial services linkedin lead generation",
    "hni lead generation case study",
    "linkedin personal branding wealth management",
    "sebi registered pms marketing",
    "financial planning lead generation",
    "mutual fund distributor outbound",
    "myntmore financial services case study",
    "b2b outbound lead generation india",
  ],
  alternates: { canonical: "https://www.myntmore.com/case-studies/wealth-management-pms-pipeline" },
  openGraph: {
    title: "Building a Solid Pipeline for a Wealth Management & PMS Firm | Myntmore",
    description: "150+ qualified leads · 52% avg response rate · 500% impressions growth",
    url: "https://www.myntmore.com/case-studies/wealth-management-pms-pipeline",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Building a Solid Pipeline for a Wealth Management & PMS Firm | Myntmore",
  description: "150+ qualified leads · 52% avg response rate · 500% impressions growth across financial services outbound",
  url: "https://www.myntmore.com/case-studies/wealth-management-pms-pipeline",
  datePublished: "2026-10-22T10:00:00+05:30",
  dateModified: "2026-10-22T10:00:00+05:30",
});

const SEGMENTS = [
  {
    name: "Mutual Fund Distributors",
    acceptance: "47%",
    response: "57%",
    leads: "58",
    notes: "Best-performing ICP overall",
    highlight: true,
  },
  {
    name: "Financial Planning Professionals",
    acceptance: "47%",
    response: "56%",
    leads: "36",
    notes: "Added mid-engagement, scaled fast",
    highlight: true,
  },
  {
    name: "Investment Bankers",
    acceptance: "51%",
    response: "68%",
    leads: "13",
    notes: "Small sample, highest engagement observed",
    highlight: false,
  },
  {
    name: "Surat-Based Decision Makers",
    acceptance: "59%",
    response: "56%",
    leads: "5",
    notes: "Location-specific, tied to a planned visit",
    highlight: false,
  },
  {
    name: "Small Company CXOs",
    acceptance: "25%",
    response: "28%",
    leads: "N/A",
    notes: "Lower intent/urgency for PMS at this stage",
    highlight: false,
  },
];

export default function WealthManagementPmsPipeline() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: "Wealth Management & PMS", href: "/case-studies/wealth-management-pms-pipeline" },
            ]}
          />

          <span
            className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(124,58,237,0.08)",
              color: "#7C3AED",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            Financial Services · Wealth Management & PMS
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0A0A0A" }}>
            Building a solid pipeline for a Wealth Management &amp; PMS firm
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-[#52525B]">
            A wealth and investment management firm with 10 years of experience in the financial services industry, serving HNI investors seeking structured alternatives beyond traditional investment products. Built on credibility, transparency, and a SEBI-registered framework, the firm strengthened its content and outbound approach to engage high-value prospects beyond conventional PMS offerings.
          </p>

          {/* Key Stat Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border mb-6"
            style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
          >
            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="150+" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Qualified leads generated
              </div>
            </div>

            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#7C3AED]">
                <StatTicker value="52%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Average response rate
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="500%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Growth in impressions
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">45%</strong> avg acceptance rate
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">421%</strong> engagement growth
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">86%</strong> follower growth
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">68%</strong> response rate in I-Banker test
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Case Study Body ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto space-y-14">
          {/* 1. The Challenge */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              The Context
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Challenge
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Wealth management and PMS is fundamentally a trust-first category: prospects rarely act on a cold message alone, and the financial-services conversation on LinkedIn is crowded with sales-forward pitches.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B]">
              The client&apos;s starting profile had a modest base (793 followers, ~1,094 monthly impressions) and no established content voice. Myntmore had to build credibility fast enough to convert into a live outbound pipeline before outreach fatigue set in.
            </p>
          </div>

          {/* 2. The Approach */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              The Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Approach
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-8">
              Myntmore ran content and outreach as one integrated system rather than two separate workstreams:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  n: "01",
                  title: "Content That Showed Expertise",
                  desc: "Posts built around the client's market views, cycle-based investing philosophy, and three decades of experience, instead of posts explaining the company.",
                },
                {
                  n: "02",
                  title: "Profile Credibility (The 'Shiny Profile' Effect)",
                  desc: "An active, optimised profile that lifted acceptance and response rates before a single outbound message was even delivered.",
                },
                {
                  n: "03",
                  title: "Engagement in the Right Rooms",
                  desc: "Commenting on and engaging with fund managers, wealth managers, and financial voices whose audiences overlapped with the target ICPs.",
                },
                {
                  n: "04",
                  title: "Lead Magnets as Conversation Starters",
                  desc: "Proprietary website calculators and planning tools used inside outreach messages as free value assets rather than leading with a pitch.",
                },
                {
                  n: "05",
                  title: "Conversational, Non-Salesy Outreach",
                  desc: "Messaging that opened a thoughtful dialogue around current market conditions instead of leading with product specifications.",
                },
                {
                  n: "06",
                  title: "Mutual Connections as a Trust Shortcut",
                  desc: "Outreach sequenced so shared industry connections surfaced naturally before the conversation progressed.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="rounded-2xl border p-5 bg-white shadow-sm flex flex-col justify-between"
                  style={{ borderColor: "#E8E2D9" }}
                >
                  <div>
                    <span className="inline-block text-xs font-black text-[#7C3AED] bg-purple-50 px-2.5 py-1 rounded-md mb-3 border border-purple-200">
                      Pillar {item.n}
                    </span>
                    <h3 className="text-base font-bold text-[#0A0A0A] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Content Impact */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              Pre-Heating Outreach
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Content Impact
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Consistent content and profile activity transformed the client&apos;s LinkedIn presence from modest reach into a credible, high-visibility platform:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border bg-[#FAF8F5] mb-6" style={{ borderColor: "#E8E2D9" }}>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">86%</p>
                <p className="text-xs text-[#71675E] font-medium mt-1">Growth in total followers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#7C3AED]">500%</p>
                <p className="text-xs text-[#71675E] font-medium mt-1">Growth in impressions</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">421%</p>
                <p className="text-xs text-[#71675E] font-medium mt-1">Growth in engagement</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">130%</p>
                <p className="text-xs text-[#71675E] font-medium mt-1">Growth in profile visits</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[#52525B]">
              The audience quality moved in step with the volume: the people discovering and engaging with the content were founders, financial planners, accountants, and investment managers across <strong>Mumbai, Pune, Delhi, and Bangalore</strong>, representing the company&apos;s exact buyer profile, not generic viral reach.
            </p>
          </div>

          {/* 4. Outreach Results by Segment */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              The Data Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Outreach Results by Segment
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Over a 4-month period and ongoing, outreach averaged a <strong>45% acceptance rate</strong> and <strong>52% response rate</strong>, well above typical cold-outreach benchmarks, with financial-services ICPs consistently outperforming.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#52525B] mb-6">
              The outreach was focused entirely on the Indian market. On average, this generated <strong>around 50 leads every month</strong>, while only about 10 responses per month were outright negative where prospects indicated they were not interested.
            </p>

            {/* Tactical Playbook Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl border bg-white" style={{ borderColor: "#E8E2D9" }}>
                <h4 className="text-xs font-bold uppercase text-[#7C3AED] mb-1">Connection Notes</h4>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Compliment-led connection notes worked particularly well for this industry and helped drive the 45% average acceptance rate.
                </p>
              </div>
              <div className="p-4 rounded-xl border bg-white" style={{ borderColor: "#E8E2D9" }}>
                <h4 className="text-xs font-bold uppercase text-[#7C3AED] mb-1">Calculators as Magnets</h4>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Calculators re-started dialogues when prospects had not replied to initial touches. Many replied specifically praising the tool&apos;s utility.
                </p>
              </div>
              <div className="p-4 rounded-xl border bg-white" style={{ borderColor: "#E8E2D9" }}>
                <h4 className="text-xs font-bold uppercase text-[#7C3AED] mb-1">Voice Note Disruptors</h4>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Voice notes in follow-ups disrupted standard text rhythms, adding human authenticity and lifting re-engagement.
                </p>
              </div>
            </div>

            {/* Segment Table */}
            <div className="rounded-2xl border overflow-hidden bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
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
                      <tr key={seg.name} className={seg.highlight ? "bg-purple-50/30" : "hover:bg-zinc-50/50"}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-[#0A0A0A]">
                          {seg.name}
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#0A0A0A]">{seg.acceptance}</td>
                        <td className="py-4 px-4 font-black text-[#7C3AED]">{seg.response}</td>
                        <td className="py-4 px-4 font-black text-[#0A0A0A]">
                          {seg.leads !== "N/A" ? <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs">{seg.leads}</span> : <span className="text-[#A1A1AA]">{seg.leads}</span>}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-xs text-[#52525B]">{seg.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#71675E] mt-4 italic">
              * Mutual Fund Distributors and Financial Planning Professionals were the clearest product-market fit signals, while the Investment Banker test (51% acceptance, 68% response) surfaced a high-potential segment ready to scale.
            </p>
          </div>

          {/* 5. Why It Worked: The Compounding Effect */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              The Flywheel
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Why It Worked: The Compounding Effect
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Content did the introducing before outreach ever started. By the time a prospect received a connection request, many had already seen the posts, formed an impression of the founder&apos;s cycle-investing philosophy, or noticed a mutual connection engaging with the content. That meant:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Lead magnets as value anchors:</strong> Planning calculators gave prospects something tangible to engage with before any commercial discussion.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Familiarity eliminates cold resistance:</strong> Financial-services professionals, already one of the most active cohorts on LinkedIn, respond far faster to an established voice than an unknown profile.</span>
              </li>
            </ul>

            <div className="rounded-2xl p-6 border bg-[#FEF9EC]" style={{ borderColor: "rgba(245,183,49,0.35)" }}>
              <p className="text-sm sm:text-base font-semibold text-[#0A0A0A] leading-relaxed">
                The result was a continuous flywheel: <em>content built credibility, credibility lifted outreach acceptance and response, and outreach conversations reinforced content reach and relevance.</em>
              </p>
            </div>
          </div>

          {/* 6. Key Takeaways & What We Learned */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              Executive Summary
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 text-[#0A0A0A]">
              Key Takeaways &amp; What We Learned
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Content-led outbound outperforms cold pitching",
                  body: "Pairing a credible personal-brand content engine with segmented outreach lifted acceptance (45% avg) and response (52% avg) rates far above pitch-first cold messaging.",
                },
                {
                  title: "Niche ICP focus compounds fastest",
                  body: "Mutual Fund Distributors and Financial Planners, the segments closest to the firm's core buyer profile, delivered the highest and most consistent lead volume (58 and 36 leads respectively).",
                },
                {
                  title: "Lead magnets convert attention into conversation",
                  body: "Calculators and tools gave prospects a reason to reply before any sales ask, especially when restarting dormant conversations.",
                },
                {
                  title: "Test-and-scale reveals hidden winners",
                  body: "A targeted Investment Banker test campaign (51% acceptance / 68% response) surfaced a new high-potential ICP worth larger dedicated allocation.",
                },
                {
                  title: "The repeatable Myntmore model for financial services",
                  body: "In trust-sensitive B2B categories, optimize the profile and publish thought leadership first; then let outbound ride on top of that authority.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-5 bg-white"
                  style={{ borderColor: "#E8E2D9" }}
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-black flex items-center justify-center shrink-0">
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
                { name: "Personal Branding", href: "/services/personal-branding" },
                { name: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
                { name: "GTM Strategy & ICP Mapping", href: "/services/gtm-strategy" },
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
        items={CASE_STUDY_PATHS["wealth-management-pms-pipeline"]}
        cta={false}
      />

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-[#0A0A0A]">
            Build a predictable pipeline for your financial firm
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto text-[#52525B]">
            Book a free 30-minute strategy call. We&apos;ll audit your current profile, map high-converting financial ICPs, and outline your outbound roadmap.
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
