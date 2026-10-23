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
  title: "Retail Strategy & Store Design Pipeline Case Study | Myntmore",
  description: "How Myntmore generated 69 hot leads across 8+ industries for a retail innovation and store design consultancy through segmented LinkedIn outbound.",
  keywords: [
    "retail design b2b lead generation case study",
    "retail strategy consulting outbound",
    "store design agency linkedin leads",
    "retail architecture b2b pipeline",
    "consumer brand offline expansion outbound",
    "event-based linkedin outreach case study",
    "myntmore retail design case study",
    "multi-industry b2b lead generation",
  ],
  alternates: { canonical: "https://www.myntmore.com/case-studies/retail-strategy-design-pipeline" },
  openGraph: {
    title: "Retail Strategy & Store Design Pipeline Across 8+ Industries | Myntmore",
    description: "69 hot leads · 8+ industries · 16 event-based leads across retail, fashion, pet care, auto, and consumer electronics",
    url: "https://www.myntmore.com/case-studies/retail-strategy-design-pipeline",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "How We Generated Business Conversations Across 8+ Industries for a Retail Strategy & Design Business | Myntmore",
  description: "69 hot leads across 8+ industries for a retail innovation consultancy through segmented LinkedIn outreach",
  url: "https://www.myntmore.com/case-studies/retail-strategy-design-pipeline",
  datePublished: "2026-10-22T10:45:00+05:30",
  dateModified: "2026-10-22T10:45:00+05:30",
});

const SEGMENTS = [
  {
    name: "Event-Based Outreach (Campaign 1)",
    accepted: "93",
    responses: "16",
    leads: "11",
    notes: "Highest lead density among all campaigns; focused on industry summit attendees",
    highlight: true,
  },
  {
    name: "Pet Care",
    accepted: "48",
    responses: "19",
    leads: "8",
    notes: "Exceptional post-connection engagement leveraging previous Supertails work",
    highlight: true,
  },
  {
    name: "Event-Based Outreach (Campaign 2)",
    accepted: "46",
    responses: "16",
    leads: "5",
    notes: "Strong follow-through on retail leadership event participants",
    highlight: false,
  },
  {
    name: "Business Development",
    accepted: "43",
    responses: "15",
    leads: "5",
    notes: "Role-based targeting focused on offline retail expansion heads",
    highlight: false,
  },
  {
    name: "Automobiles",
    accepted: "29",
    responses: "10",
    leads: "4",
    notes: "Framed around moving beyond traditional showroom formats",
    highlight: false,
  },
  {
    name: "Fashion",
    accepted: "62",
    responses: "10",
    leads: "4",
    notes: "Positioned around offline city expansion without diluting brand identity",
    highlight: false,
  },
  {
    name: "Furniture Retail & BD",
    accepted: "40",
    responses: "11",
    leads: "4",
    notes: "Targeting founders and retail heads exploring physical showroom formats",
    highlight: false,
  },
  {
    name: "Jewellery with Connection Note",
    accepted: "29",
    responses: "7",
    leads: "4",
    notes: "Referencing Ethera work; generated 4 leads and 1 scheduled meeting",
    highlight: true,
  },
  {
    name: "Startups",
    accepted: "43",
    responses: "11",
    leads: "3",
    notes: "D2C brands planning their first physical flagship store openings",
    highlight: false,
  },
  {
    name: "Exhibition CXOs",
    accepted: "9",
    responses: "4",
    leads: "3",
    notes: "High conversion efficiency on a highly targeted executive shortlist",
    highlight: false,
  },
];

export default function RetailStrategyDesignPipeline() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: "Retail Strategy & Design", href: "/case-studies/retail-strategy-design-pipeline" },
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
            Professional Services · Retail Strategy &amp; Design
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0A0A0A" }}>
            How we generated business conversations across 8+ industries for a retail strategy &amp; design business
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-[#52525B]">
            Working at the intersection of retail innovation, physical store design, and customer experience technology, our client helps established retailers and emerging consumer brands rethink how their physical spaces function and how customers discover, touch, and purchase products. Through industry-specific LinkedIn outbound, Myntmore built a multi-vertical pipeline generating <strong>69 hot leads</strong> across retail, consumer brands, automotive, furniture, and event-based audiences.
          </p>

          {/* Key Stat Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border mb-6"
            style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
          >
            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="69" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Hot leads generated
              </div>
            </div>

            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#7E22CE]">
                <StatTicker value="8+" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Industries penetrated
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="16" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Event-based hot leads
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">8</strong> Pet Care leads (19 responses)
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">16</strong> Event campaign leads
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">5</strong> Business Development leads
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">4</strong> Leads each in Fashion &amp; Auto
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
              Retail innovation involves diverse stakeholders with radically divergent priorities: a founder expanding offline is focused on establishing a physical brand presence; a retail head wants to optimise footfall conversion and store unit economics; a marketing leader cares about in-store storytelling and customer experience.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Furthermore, the client&apos;s work went far beyond traditional aesthetic interior design. It involved rethinking how customers discover products, compare complex options, and make purchase decisions inside physical spaces.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B]">
              A generic pitch about &ldquo;creating better stores&rdquo; would not communicate that strategic depth. The objective was to <strong>identify businesses actively expanding or revamping physical retail, reach relevant decision-makers, and position the client&apos;s expertise around each industry&apos;s specific spatial friction points</strong>.
            </p>
          </div>

          {/* 2. The Approach */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Approach: Industry-Specific Targeting &amp; Tailored Case Experience
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-8">
              Myntmore developed the LinkedIn outreach around a fundamental reality: <em>different industries invest in physical retail for completely different reasons</em>. We tailored messaging and project credentials for each sector:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  sector: "Jewellery",
                  hook: "Purchase Confidence & Quiet Elegance",
                  desc: "Addressed considered, high-value purchases where store environments must foster trust and intimate consultation (referenced client's work with Ethera).",
                },
                {
                  sector: "Fashion & Lifestyle",
                  hook: "Scaling Offline Without Diluting Identity",
                  desc: "Spoke to offline city expansion and maintaining brand integrity across formats (referenced work with Raymond, Arvind, and Nicobar).",
                },
                {
                  sector: "Beauty & Wellness",
                  hook: "Experiential Discovery & Product Trial",
                  desc: "Addressed experiential sampling and clinic networks for brands moving beyond digital (referenced Estée Lauder, Colorbar, and Pilgrim).",
                },
                {
                  sector: "Consumer Electronics & Durables",
                  hook: "Product Testing & Comparison Clarity",
                  desc: "Focused on simplifying complex product specs and comparison friction (referenced Croma, Hero, Apple, and OnePlus).",
                },
                {
                  sector: "Automotive",
                  hook: "Moving Beyond Traditional Showrooms",
                  desc: "Introduced concepts where showrooms function as lifestyle brand hubs rather than static vehicle delivery depots.",
                },
                {
                  sector: "Pet Care & Emerging D2C",
                  hook: "Community Hubs for Emerging Categories",
                  desc: "Leveraged previous project credentials with Supertails to connect with founders navigating initial offline flagships.",
                },
              ].map((item) => (
                <div key={item.sector} className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E22CE] bg-purple-50 px-2 py-0.5 rounded border border-purple-200 inline-block mb-2">
                    {item.sector}
                  </span>
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-1.5">{item.hook}</h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3-Stage Follow-Up Structure */}
            <div className="rounded-2xl p-6 border bg-white" style={{ borderColor: "#E8E2D9" }}>
              <h3 className="text-base font-bold text-[#0A0A0A] mb-4">
                The 3-Stage Follow-Up Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">1. Connection Request</p>
                  <p className="text-[#52525B]">Short, relevant opening noting a specific company expansion, city launch, or shared industry context.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">2. Project Experience</p>
                  <p className="text-[#52525B]">Share category-relevant client case study (e.g. Croma for electronics, Supertails for pet care, Ethera for jewellery).</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <p className="font-bold text-[#0A0A0A] mb-1">3. Value &amp; Meeting Invitation</p>
                  <p className="text-[#52525B]">Introduce a relevant retail article, direct calendar link, or founder voice note to continue the conversation.</p>
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
              The outreach generated <strong>69 hot leads</strong> across multiple campaigns. Event-based outreach, pet care, business development, fashion, and furniture delivered the highest concentration of qualified business conversations:
            </p>

            {/* Segment Table */}
            <div className="rounded-2xl border overflow-hidden bg-white shadow-sm mb-6" style={{ borderColor: "#E8E2D9" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FAF8F5] text-xs font-bold uppercase text-[#71675E] border-b" style={{ borderColor: "#E8E2D9" }}>
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Segment</th>
                      <th className="py-3.5 px-4">Accepted Connections</th>
                      <th className="py-3.5 px-4">Responses</th>
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
                        <td className="py-4 px-4 font-semibold text-[#0A0A0A]">{seg.accepted}</td>
                        <td className="py-4 px-4 font-black text-[#7E22CE]">{seg.responses}</td>
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

            {/* Scale vs Intent Insight */}
            <div className="rounded-xl border p-5 bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
              <h4 className="text-sm font-bold text-[#0A0A0A] mb-2">Audience Receptivity vs. Commercial Intent</h4>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                The results revealed a clear difference between audiences willing to connect and those actively moving into commercial discussions: <strong>Event-based outreach</strong> generated <strong>16 hot leads</strong> across two campaigns, demonstrating that reaching decision-makers around industry summits creates immediate conversational momentum. Similarly, <strong>Pet Care</strong> delivered an exceptional 8 hot leads from 48 connections (19 responses), proving the immense leverage of category-specific social proof.
              </p>
            </div>
          </div>

          {/* 4. Why It Worked */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Core Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Why It Worked: Connecting Retail Expertise to Industry Priorities
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              The strongest campaigns were those where the client&apos;s experience could be linked directly to a live business initiative. Key drivers included:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Industry-Specific Messaging:</strong> Outreach was framed around the commercial priorities of each sector rather than a generic interior design pitch.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Category-Relevant Case Studies:</strong> Referencing Supertails for pet care, Ethera for jewellery, and Raymond for fashion gave prospects instant proof of domain competence.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Event &amp; Role Segmentation:</strong> Combining industry targeting with event-based timing and business development roles unlocked outsized conversion efficiency.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#52525B]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7E22CE] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span><strong>Multi-Modal Follow-Ups:</strong> Sharing thought leadership articles, case studies, and personal voice notes provided varied, low-pressure touchpoints that kept conversations alive.</span>
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
                  title: "69 hot leads across multiple campaigns",
                  body: "Proving that retail innovation and spatial strategy appeal to a far wider range of industries than traditional apparel retail alone.",
                },
                {
                  title: "Event-based timing creates outsized pipeline",
                  body: "16 hot leads generated through event-related targeting, validating that aligning outreach with industry summits drives immediate engagement.",
                },
                {
                  title: "Pet Care emerged as an unexpected high-intent vertical",
                  body: "Delivered 8 hot leads from 48 accepted connections, demonstrating how emerging consumer categories are investing aggressively in physical experiential spaces.",
                },
                {
                  title: "Category-relevant case studies are non-negotiable",
                  body: "Prospects responded when shown work in their exact domain; cross-category references were far less effective.",
                },
                {
                  title: "The right positioning opens doors; relevant conversations turn connections into pipeline",
                  body: "Focusing on the specific business problem the prospect owns turns cold networking into actionable consulting mandates.",
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
                { name: "GTM Strategy", href: "/services/gtm-strategy" },
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
        items={CASE_STUDY_PATHS["retail-strategy-design-pipeline"]}
        cta={false}
      />

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-[#0A0A0A]">
            Scale business conversations across your target industries
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto text-[#52525B]">
            Book a free 30-minute strategy call. We&apos;ll help you map vertical-specific ICPs, craft tailored proposition hooks, and engineer a multi-channel outbound pipeline.
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
