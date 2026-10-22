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
  title: "Messaging Shift Tripled Hot Leads for Leadership Brand | Myntmore",
  description: "How Myntmore tripled hot leads and achieved a 60% acceptance rate for an executive leadership brand by shifting to concise, relevance-led LinkedIn outreach.",
  keywords: [
    "leadership development lead generation case study",
    "executive coaching linkedin outreach",
    "cxo outbound lead generation case study",
    "messaging shift b2b case study",
    "real estate cxo linkedin acceptance",
    "high consideration b2b sales case study",
    "voice notes linkedin outreach case study",
    "myntmore executive coaching case study",
    "founder retreat outbound pipeline",
  ],
  alternates: { canonical: "https://www.myntmore.com/case-studies/leadership-development-messaging-shift" },
  openGraph: {
    title: "Messaging Shift Tripled Hot Leads & Achieved 60% Acceptance | Myntmore",
    description: "3x hot leads · 60% Real Estate CXO acceptance · 41% peak response rate across 3,826 executive touches",
    url: "https://www.myntmore.com/case-studies/leadership-development-messaging-shift",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "How a Messaging Shift Tripled Hot Leads and Helped Achieve 60% LinkedIn Acceptance for a Leadership Development Brand | Myntmore",
  description: "3x hot leads increase · 60% Real Estate CXO acceptance · 41% peak response rate for executive leadership development",
  url: "https://www.myntmore.com/case-studies/leadership-development-messaging-shift",
  datePublished: "2026-10-22T11:00:00+05:30",
  dateModified: "2026-10-22T11:00:00+05:30",
});

const LIFETIME_DATA = [
  { period: "Feb 15 to Mar 15", sent: 580, accepted: 247, accRate: "43%", replies: 59, respRate: "24%", leads: 14, meetings: 1 },
  { period: "Mar 15 to Apr 15", sent: 548, accepted: 220, accRate: "40%", replies: 57, respRate: "26%", leads: 17, meetings: 0 },
  { period: "May 15 to Jun 30", sent: 523, accepted: 219, accRate: "42%", replies: 48, respRate: "22%", leads: 5, meetings: 1 },
  { period: "July (Shift)", sent: 612, accepted: 208, accRate: "34%", replies: 60, respRate: "29%", leads: 15, meetings: 0, highlight: true },
  { period: "August", sent: 631, accepted: 291, accRate: "46%", replies: 98, respRate: "34%", leads: 19, meetings: 3, highlight: true },
  { period: "September", sent: 932, accepted: 385, accRate: "41.3%", replies: 158, respRate: "41%", leads: 19, meetings: 0, highlight: true },
];

export default function LeadershipDevelopmentMessagingShift() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: "Leadership Development", href: "/case-studies/leadership-development-messaging-shift" },
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
            Professional Services · Executive Coaching &amp; Leadership
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0A0A0A" }}>
            How a messaging shift tripled hot leads and helped achieve 60% LinkedIn acceptance for a leadership development brand
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-[#52525B]">
            Working in executive transformation and leadership development, our client offers immersive experiences designed to help founders, entrepreneurs, and senior leaders reflect on their purpose, priorities, and long-term direction. In July, shifting away from lengthy contextual explanations toward shorter, direct invitations <strong>tripled hot leads from 5 to 15</strong>. By September, refining audience-message fit delivered a <strong>60% acceptance rate in Real Estate</strong>, a <strong>45% response rate in Interior Design</strong>, and a peak <strong>41% monthly response rate</strong>.
          </p>

          {/* Key Stat Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border mb-6"
            style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
          >
            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="3x" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Hot lead increase post-July
              </div>
            </div>

            <div className="text-center sm:border-r border-[#E8E2D9]/70 pb-4 sm:pb-0">
              <div className="text-3xl sm:text-4xl font-black text-[#7E22CE]">
                <StatTicker value="60%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Real Estate CXO acceptance
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">
                <StatTicker value="41%" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1 text-[#71675E]">
                Peak monthly response rate
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border bg-[#FAF8F5]" style={{ borderColor: "#E8E2D9" }}>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">480</strong> lifetime replies
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">45%</strong> Interior Design reply rate
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">158</strong> September replies (peak)
            </span>
            <span className="text-xs text-[#E8E2D9] hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-[#52525B]">
              <strong className="text-[#0A0A0A]">3,826</strong> total requests sent (41.0% acceptance)
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
              Leadership development is an exceptionally high-consideration category. The offering asks busy, accomplished founders and CXOs to step away from active operational duties and dedicate multiple days to introspective personal reflection. These individuals are not casually browsing LinkedIn for self-help seminars.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-4">
              Early campaigns exposed a classic outbound paradox: <strong>high acceptance rates did not translate into downstream engagement</strong>. Some early iterations recorded acceptance rates above 40% to 50%, yet generated few or no qualified conversations.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B]">
              Furthermore, lead magnet experiments created severe friction. Forcing prospects to answer lengthy questionnaires and disclose phone numbers before establishing genuine rapport caused sharp drop-offs. The team needed an outbound mechanism that bridged the gap between passive connection acceptance and active, curious engagement.
            </p>
          </div>

          {/* 2. The 4 Evolutionary Phases */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Evolution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The 4-Phase Journey from Testing to Scale
            </h2>

            <div className="space-y-6 mb-8">
              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="text-xs font-bold uppercase text-[#7E22CE] mb-1 block">Phase 1 · Testing Audiences</span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Segment Exploration &amp; Emotional Triggers</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Campaigns targeted Family Business CXOs, Manufacturing, Financial Services, Tech, and Fashion. Family Business leaders responded strongly to emotionally grounded messaging (19 hot leads across 2 campaigns), while Fashion A/B tests proved that referencing a prospect&apos;s actual brand lifted response rates from 19% to 33%.
                </p>
              </div>

              {/* July Breakthrough Highlight */}
              <div className="p-6 rounded-2xl border bg-[#FEF9EC]" style={{ borderColor: "rgba(245,183,49,0.35)" }}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#A14A08] bg-amber-100 px-2.5 py-1 rounded">
                    Phase 2 · The July Breakthrough
                  </span>
                  <span className="text-xs font-bold text-[#0A0A0A]">The Turning Point</span>
                </div>
                <h3 className="text-lg font-black text-[#0A0A0A] mb-2">
                  Simplicity Beats Explanation: The Shorter Invitation Test
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-4">
                  Until July, messages had been long and explanatory. We stripped away the lengthy explanations and introduced short, direct connection invitations that communicated the purpose clearly without cognitive overload.
                </p>

                {/* May-June vs July Comparison Table */}
                <div className="overflow-x-auto rounded-xl border bg-white" style={{ borderColor: "#E8E2D9" }}>
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-[#FAF8F5] border-b text-[11px] font-bold uppercase text-[#71675E]" style={{ borderColor: "#E8E2D9" }}>
                      <tr>
                        <th className="py-2.5 px-4">Metric</th>
                        <th className="py-2.5 px-3">May to June</th>
                        <th className="py-2.5 px-3">July</th>
                        <th className="py-2.5 px-4 text-[#7E22CE]">Net Shift</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E2D9]/60">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#0A0A0A]">Connection requests sent</td>
                        <td className="py-2.5 px-3 text-[#52525B]">523</td>
                        <td className="py-2.5 px-3 text-[#0A0A0A] font-bold">612</td>
                        <td className="py-2.5 px-4 text-emerald-600 font-bold">+17%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#0A0A0A]">Acceptance rate</td>
                        <td className="py-2.5 px-3 text-[#52525B]">42%</td>
                        <td className="py-2.5 px-3 text-[#0A0A0A] font-bold">34%</td>
                        <td className="py-2.5 px-4 text-[#A14A08] font-bold">-8 pts (Higher intent filter)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#0A0A0A]">Replies received</td>
                        <td className="py-2.5 px-3 text-[#52525B]">48</td>
                        <td className="py-2.5 px-3 text-[#0A0A0A] font-bold">60</td>
                        <td className="py-2.5 px-4 text-emerald-600 font-bold">+25%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#0A0A0A]">Response rate</td>
                        <td className="py-2.5 px-3 text-[#52525B]">22%</td>
                        <td className="py-2.5 px-3 text-[#0A0A0A] font-bold">29%</td>
                        <td className="py-2.5 px-4 text-emerald-600 font-bold">+7 percentage points</td>
                      </tr>
                      <tr className="bg-purple-50/50">
                        <td className="py-2.5 px-4 font-black text-[#0A0A0A]">Hot leads</td>
                        <td className="py-2.5 px-3 text-[#52525B]">5</td>
                        <td className="py-2.5 px-3 text-[#7E22CE] font-black">15</td>
                        <td className="py-2.5 px-4 text-[#7E22CE] font-black">3x Increase</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="text-xs font-bold uppercase text-[#7E22CE] mb-1 block">Phase 3 · August Momentum</span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Compounding Conversions &amp; Meeting Velocity</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  August recorded a 46% acceptance rate and a 34% response rate. Crucially, 19 hot leads were booked (including 6 nurtured from July outreach) along with 3 direct meetings scheduled, surpassing all preceding months combined.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="text-xs font-bold uppercase text-[#7E22CE] mb-1 block">Phase 4 · September Alignment</span>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">Audience-Message Fit: Real Estate &amp; Interior Design</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Targeting Real Estate and Interior Design leaders with refined copy unlocked a 60% acceptance rate in Real Estate and a 45% response rate in Interior Design (10 hot leads). Overall monthly response hit a record 41% across 158 replies.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Lifetime Performance Table */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              Historical Data
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              Lifetime LinkedIn Outreach Performance (Feb–Sept 2026)
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Across the 7-month campaign period, Myntmore sent <strong>3,826 connection requests</strong>, generating <strong>1,570 accepted connections (41.0% lifetime acceptance)</strong>, <strong>480 replies (30.6% lifetime response)</strong>, and <strong>89 reported hot leads</strong>:
            </p>

            <div className="rounded-2xl border overflow-hidden bg-white shadow-sm mb-4" style={{ borderColor: "#E8E2D9" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF8F5] text-xs font-bold uppercase text-[#71675E] border-b" style={{ borderColor: "#E8E2D9" }}>
                    <tr>
                      <th className="py-3.5 px-3 sm:px-4">Reporting Period</th>
                      <th className="py-3.5 px-2.5">Sent</th>
                      <th className="py-3.5 px-2.5">Accepted</th>
                      <th className="py-3.5 px-2.5">Acceptance</th>
                      <th className="py-3.5 px-2.5">Replies</th>
                      <th className="py-3.5 px-2.5">Response</th>
                      <th className="py-3.5 px-2.5">Hot Leads</th>
                      <th className="py-3.5 px-3">Meetings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9]/60">
                    {LIFETIME_DATA.map((row) => (
                      <tr key={row.period} className={row.highlight ? "bg-purple-50/30" : "hover:bg-zinc-50/50"}>
                        <td className="py-3 px-3 sm:px-4 font-bold text-[#0A0A0A]">{row.period}</td>
                        <td className="py-3 px-2.5 text-[#52525B]">{row.sent}</td>
                        <td className="py-3 px-2.5 font-semibold text-[#0A0A0A]">{row.accepted}</td>
                        <td className="py-3 px-2.5 text-[#52525B]">{row.accRate}</td>
                        <td className="py-3 px-2.5 font-semibold text-[#0A0A0A]">{row.replies}</td>
                        <td className="py-3 px-2.5 font-black text-[#7E22CE]">{row.respRate}</td>
                        <td className="py-3 px-2.5 font-black text-[#0A0A0A]">
                          <span className="bg-purple-100 text-[#7E22CE] px-2 py-0.5 rounded text-xs">
                            {row.leads}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-[#0A0A0A]">{row.meetings}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#FAF8F5] font-black border-t-2" style={{ borderColor: "#E8E2D9" }}>
                      <td className="py-3.5 px-3 sm:px-4 text-[#0A0A0A]">Lifetime Total</td>
                      <td className="py-3.5 px-2.5 text-[#0A0A0A]">3,826</td>
                      <td className="py-3.5 px-2.5 text-[#0A0A0A]">1,570</td>
                      <td className="py-3.5 px-2.5 text-[#0A0A0A]">41.0%</td>
                      <td className="py-3.5 px-2.5 text-[#0A0A0A]">480</td>
                      <td className="py-3.5 px-2.5 text-[#7E22CE]">30.6%</td>
                      <td className="py-3.5 px-2.5 text-[#7E22CE]">89*</td>
                      <td className="py-3.5 px-3 text-[#0A0A0A]">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-[#71675E] leading-relaxed italic">
              * The 89 hot leads represent the cumulative total of monthly reported figures, including 6 leads originating in July that converted in August. A temporary pause occurred between April 15 and May 15.
            </p>
          </div>

          {/* 4. The 4-Stage Messaging Sequence */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-2 block">
              The Playbook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#0A0A0A]">
              The Refined 4-Stage Messaging Sequence
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#52525B] mb-6">
              Instead of aggressive calendar pushing, the September sequence engaged founders as intellectual peers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7E22CE] text-xs font-black flex items-center justify-center mb-2">1</span>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-1.5">Short Connection Invitation</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Briefly noted shared leadership context without cognitive overload or forced sales hooks.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7E22CE] text-xs font-black flex items-center justify-center mb-2">2</span>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-1.5">Situational Follow-Up</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Framed around transitional dilemmas: rapid scaling, succession, decision fatigue, and next-phase alignment.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7E22CE] text-xs font-black flex items-center justify-center mb-2">3</span>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-1.5">Personalized Voice Note</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Acknowledged the founder&apos;s personal trajectory and highlighted that successful leaders often have clarity on their business but lack dedicated time for personal direction.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#E8E2D9" }}>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7E22CE] text-xs font-black flex items-center justify-center mb-2">4</span>
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-1.5">Low-Pressure Closing</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Acknowledged timing sensitivities and left the door open for future cohorts without repetitive follow-up pressure.
                </p>
              </div>
            </div>
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
                  title: "July proved that shorter invitations filter for intent",
                  body: "Acceptance fell slightly from 42% to 34%, but post-acceptance engagement surged, tripling hot leads from 5 to 15.",
                },
                {
                  title: "Connection acceptance is a vanity metric in isolation",
                  body: "Top-of-funnel willingness to connect must be evaluated alongside post-connection dialogue and conversion velocity.",
                },
                {
                  title: "Audience-message alignment drives peak conversion",
                  body: "Real Estate CXOs achieved 60% acceptance, while Interior Design CXOs yielded a 45% response rate and 10 hot leads.",
                },
                {
                  title: "Voice notes humanize high-ticket B2B outreach",
                  body: "Breaking away from standard text blocks with genuine founder audio created emotional resonance with busy executives.",
                },
                {
                  title: "Success comes from earning the conversation, not pitching harder",
                  body: "Giving leaders a relevant reason to pause and reflect creates a natural, peer-level consultation rather than a transactional pitch.",
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
        items={CASE_STUDY_PATHS["leadership-development-messaging-shift"]}
        cta={false}
      />

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-[#0A0A0A]">
            Turn high-ticket professional outreach into predictable pipeline
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto text-[#52525B]">
            Book a free 30-minute strategy call. We&apos;ll audit your executive outreach copy, eliminate connection friction, and engineer a peer-to-peer outbound engine.
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
