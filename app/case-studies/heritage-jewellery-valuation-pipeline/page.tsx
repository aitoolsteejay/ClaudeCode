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
  title: "Building a B2B Pipeline for a 180-Year-Old Heritage Jewellery Business | Myntmore",
  description: "How Myntmore helped a 5-generation heritage jewellery valuation firm generate 68 hot leads, 897 connections, and 9 booked meetings across CAs, wealth managers, and private banks.",
  keywords: [
    "jewellery b2b lead generation case study",
    "heritage business b2b outreach",
    "valuation firm linkedin lead generation",
    "wealth management referral pipeline case study",
    "chartered accountant outreach case study",
    "antique jewellery valuation consulting",
    "gold loan valuation b2b outbound",
    "myntmore luxury asset case study",
    "b2b referral pipeline generation",
  ],
  alternates: { canonical: "https://www.myntmore.com/case-studies/heritage-jewellery-valuation-pipeline" },
  openGraph: {
    title: "Building a B2B Pipeline for a 180-Year-Old Heritage Jewellery Business | Myntmore",
    description: "68 hot leads · 43.7% overall response rate · 897 accepted connections across financial and wealth advisory networks",
    url: "https://www.myntmore.com/case-studies/heritage-jewellery-valuation-pipeline",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Building a B2B Pipeline for a 180-Year-Old Heritage Jewellery Business | Myntmore",
  description: "68 hot leads · 43.7% response rate · 897 accepted connections across accounting, wealth management, and private banking",
  url: "https://www.myntmore.com/case-studies/heritage-jewellery-valuation-pipeline",
  datePublished: "2026-10-22T10:30:00+05:30",
  dateModified: "2026-10-22T10:30:00+05:30",
});

const SEGMENTS = [
  {
    name: "Chartered Accountants",
    acceptance: "38.27%",
    response: "49.71%",
    leads: "9",
    notes: "Highest response rate and hot-lead volume; 86 responses and 2 meetings",
    highlight: true,
  },
  {
    name: "Wealth Managers",
    acceptance: "57.60%",
    response: "27.78%",
    leads: "5",
    notes: "Highest acceptance rate, showing strong initial willingness to connect",
    highlight: true,
  },
  {
    name: "Insurance Claims",
    acceptance: "43.90%",
    response: "40.00%",
    leads: "3",
    notes: "Strong post-connection engagement with 36 responses",
    highlight: false,
  },
  {
    name: "Gold Loans",
    acceptance: "55.00%",
    response: "30.91%",
    leads: "6",
    notes: "Strong acceptance rate and 2 scheduled meetings",
    highlight: false,
  },
  {
    name: "Private Banking",
    acceptance: "39.07%",
    response: "32.14%",
    leads: "7",
    notes: "Second-highest hot-lead volume with significant relationship upside",
    highlight: true,
  },
];

export default function HeritageJewelleryPipeline() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: "Heritage Jewellery Business", href: "/case-studies/heritage-jewellery-valuation-pipeline" },
            ]}
          />

          <span
            className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(168,85,247,0.08)",
              color: "#7E22CE",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            Professional Services · Heritage &amp; Valuation
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0A0A0A" }}>
            Building a B2B pipeline for a 180-year-old heritage jewellery business
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-[#52525B]">
            With a family legacy spanning <strong>180 years and five generations</strong>, our client has spent more than 35 years specialising in antique jewellery, heirloom collections, professional valuations, and jewellery liquidation. As a government-approved valuer, the business helps families, advisors, and institutions assess valuable assets, document inherited collections, and navigate asset transfers. The objective was to extend its reach beyond traditional networks into <strong>accounting, wealth management, private banking, insurance, and lending</strong>.
          </p>

          {/* Key Stat Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border mb-6"
            style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
          >
            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="68" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Hot leads generated
              </div>
            </div>

            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#7E22CE]">
                <StatTicker value="43.7%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Overall response rate
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="897" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Accepted connections
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">57.6%</strong> Wealth Managers acceptance
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">49.7%</strong> Chartered Accountants response
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">55.0%</strong> Gold Loans acceptance
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">9</strong> meetings booked
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Case Study Body ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto space-y-14">
          {/* 1. The Challenge */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Context
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Challenge
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Antique jewellery valuation and liquidation are highly specialised services. Unlike conventional jewellery retail, these requirements typically involve inherited assets, collections without formal documentation, estate divisions, and families seeking trusted guidance on high-value possessions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              While credibility was firmly established through generations of industry experience, the challenge was making that specialist expertise visible to advisors and intermediaries outside its existing network.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B]">
              Each professional group had fundamentally different responsibilities: a <strong>Chartered Accountant</strong> encounters inherited jewellery during estate tax filing; a <strong>Wealth Manager</strong> encounters undocumented jewellery during family estate planning; an <strong>insurance professional</strong> needs specialist assessment for older pieces; a <strong>gold loan lender</strong> requires risk checks on mixed purity items. A generic valuation pitch would have fallen completely flat.
            </p>
          </div>

          {/* 2. The Approach */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Approach: Heritage-Led Credibility &amp; Professional Segmentation
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-8">
              Rather than focusing exclusively on jewellery traders and collectors, Myntmore expanded outreach into adjacent professional sectors where jewellery assets naturally form part of broader wealth, tax, or lending workflows:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Chartered Accountants (CAs)",
                  role: "Asset Documentation & Estate Tax",
                  desc: "Positioned around formal valuation requirements, documentation of inherited assets, and supporting families through estate settlements.",
                },
                {
                  title: "Wealth Managers & Private Bankers",
                  role: "Overlooked Family Wealth",
                  desc: "Approached around high-value jewellery holdings frequently left out of estate planning portfolios and wealth transfers.",
                },
                {
                  title: "Insurance Claims Teams",
                  role: "Specialist Valuations",
                  desc: "Approached around assessment accuracy for older, antique, or mixed pieces lacking original purchase bills.",
                },
                {
                  title: "Gold Loan Institutions",
                  role: "Purity & Risk Checks",
                  desc: "Approached around valuation accuracy, risk management, and the complexities of assessing mixed-era ornaments.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E22CE] bg-purple-50 px-2 py-0.5 rounded border border-purple-200 inline-block mb-2">
                    {item.role}
                  </span>
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3-Stage Outreach Architecture */}
            <div className="rounded-2xl p-6 border bg-white" style={{ borderColor: "#E8E2D9" }}>
              <h3 className="text-base font-bold text-[#0A0A0A] mb-4">
                The 3-Stage Outreach Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">1. Connection Request</p>
                  <p className="text-[#52525B]">Establish relevance through shared context, family business heritage, or specialist credentials.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">2. First Follow-Up</p>
                  <p className="text-[#52525B]">Introduce a practical situation where valuation, liquidation, or documentation expertise assists their clients.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">3. Relationship Nurture</p>
                  <p className="text-[#52525B]">Keep channels open with direct contact details and scheduling options without repeating a hard pitch.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Outreach Results by Segment */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Data Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Outreach Results by Segment
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Across the broader campaign, Myntmore sent <strong>2,298 connection requests</strong>, generating <strong>897 accepted connections, 392 responses, 68 hot leads, and 9 scheduled meetings</strong>. The 5 detailed ICP segments below represent 1,197 targeted profiles:
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
                      <th className="py-3.5 px-4">Hot Leads</th>
                      <th className="py-3.5 px-4 sm:px-6">Strategic Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9]/60">
                    {SEGMENTS.map((seg) => (
                      <tr key={seg.name} className={seg.highlight ? "bg-purple-50/30" : "hover:bg-zinc-50/50"}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-[#0A0A0A]">
                          {seg.name}
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#0A0A0A]">{seg.acceptance}</td>
                        <td className="py-4 px-4 font-black text-[#7E22CE]">{seg.response}</td>
                        <td className="py-4 px-4 font-black text-[#0A0A0A]">
                          <span className="bg-purple-100 text-[#7E22CE] px-2 py-0.5 rounded text-xs font-bold">
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

            {/* Key Dynamic Insight */}
            <div className="rounded-xl border p-5 bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
              <h4 className="text-sm font-bold text-[#0A0A0A] mb-2">Acceptance vs. Conversion Dynamics</h4>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                The campaign highlighted an important pattern: <strong>Wealth Managers</strong> were the most receptive to connecting (<strong>57.60% acceptance</strong>), but <strong>Chartered Accountants</strong> generated the highest post-connection response (<strong>49.71%</strong>) and lead volume (<strong>9 hot leads, 2 booked meetings</strong>). Meanwhile, <strong>Gold Loan</strong> executives converted with high intent, delivering 2 scheduled meetings from a focused list.
              </p>
            </div>
          </div>

          {/* 4. Why It Worked */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Core Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Why It Worked: Making Heritage Relevant to Modern Financial Services
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              A 180-year family legacy establishes instant credibility, but heritage alone does not explain why an accountant, wealth manager, or lender should take time out of their day. The strength of the approach came from translating decades of specialized experience into tangible utility:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Role-Specific Triggers:</strong> Tax advisors heard about documentation; wealth planners heard about overlooked estate components; claims adjusters heard about dispute resolution.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Pre-Positioning Before Need Arises:</strong> Valuations are milestone-driven events. Establishing trust in advance ensured our client was top-of-mind the moment an estate settlement or liquidation requirement occurred.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Expanding Beyond Traditional Guilds:</strong> Looking past standard jewellery trade shows directly into advisory professions opened completely uncontested referral pipelines.</span>
              </li>
            </ul>
          </div>

          {/* 5. Key Takeaways & Lessons */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              Executive Learnings
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 text-[#0A0A0A]">
              Key Takeaways &amp; What We Learned
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "68 hot leads and 9 meetings booked across non-traditional networks",
                  body: "Validating that high-end heritage expertise can tap into financial and accounting ecosystems for predictable deal flow.",
                },
                {
                  title: "Chartered Accountants delivered the deepest engagement",
                  body: "With a 49.71% response rate and 9 hot leads, CAs proved to be natural referral partners facing frequent client valuation questions.",
                },
                {
                  title: "Wealth Managers exhibited highest initial curiosity",
                  body: "A 57.60% acceptance rate demonstrated that wealth professionals readily welcome estate valuation specialists into their networks.",
                },
                {
                  title: "High acceptance does not equal immediate commercial intent",
                  body: "Some segments connect easily but require ongoing nurturing; others connect at standard rates but convert immediately into meetings.",
                },
                {
                  title: "Relevance always beats generic prestige",
                  body: "Connecting a 180-year legacy to real-world use cases in accounting, estate planning, and lending turned historical credentials into modern business opportunities.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border p-5 bg-white" style={{ borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7E22CE] text-xs font-black flex items-center justify-center shrink-0">
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
                { name: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
                { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
                { name: "Personal Branding", href: "/services/personal-branding" },
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
        items={CASE_STUDY_PATHS["heritage-jewellery-valuation-pipeline"]}
        cta={false}
      />

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-[#0A0A0A]">
            Turn your heritage and expertise into a predictable B2B pipeline
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto text-[#52525B]">
            Book a free 30-minute strategy call. We&apos;ll help you map adjacent professional ecosystems, engineer relevant messaging, and unlock high-value referral partners.
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
