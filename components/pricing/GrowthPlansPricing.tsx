import { Fragment } from "react";
import { Rocket, Zap, Target, Mail, Bot } from "lucide-react";
import InnerLayout from "@/app/components/InnerLayout";
import FadeIn from "@/app/components/FadeIn";

// Every one of these is identical across all 3 tiers (8 infrastructure items
// + the first 4 content items), so they're shown once instead of being
// repeated 3x over -- the only real differences live in DIFFERENTIATORS below.
const INCLUDED_IN_EVERY_PLAN = [
  "Dedicated Account Manager",
  "Monthly Check-In with Founder",
  "End-of-Month (EOM) Reports",
  "ICP Definition Template",
  "Value Proposition Template",
  "One-Time Profile Optimisation",
  "One-Time Competitor Analysis",
  "ORM - Comments & Responses",
  "Content Ideation & Strategy",
  "Content Writing",
  "Monthly Video Interview",
  "4 Content Pieces / Month",
];

type Cell = boolean | string;

interface DiffRow {
  label: string;
  values: [Cell, Cell, Cell]; // Starter, Growth, Lead Generation
}

const DIFFERENTIATORS: DiffRow[] = [
  { label: "Connection Requests / Month", values: ["300", "600", "600"] },
  { label: "Follow-Up Messages per Prospect", values: ["2", "4", "4"] },
  { label: "InMails / Month", values: [false, "15", "15"] },
  { label: "Video-Based Posts / Month", values: [false, "2", false] },
  { label: "Cheatsheet / PDF (Lead Magnet)", values: [false, true, false] },
  { label: "Strategic Engagements / Post", values: [false, "5", false] },
];

interface TableSection {
  title: string;
  rows: DiffRow[];
}

// Full per-card breakdown for the Content and Lead Generation sections
// (Growth Infrastructure is identical across all 3 tiers, so it stays in the
// shared "Included in every plan" band instead of repeating 3x here).
const CONTENT_ITEMS: { label: string; included: [boolean, boolean, boolean] }[] = [
  { label: "Content Ideation & Strategy", included: [true, true, true] },
  { label: "Content Writing", included: [true, true, true] },
  { label: "Monthly Video Interview", included: [true, true, true] },
  { label: "4 Content Pieces / Month", included: [true, true, true] },
  { label: "2 Video-Based Posts / Month", included: [false, true, false] },
  { label: "1 Cheatsheet / PDF (Lead Magnet)", included: [false, true, false] },
  { label: "5 Strategic Engagements / Post", included: [false, true, false] },
];

// Indexed by tier: 0 = Starter, 1 = Growth, 2 = Lead Generation
const LEAD_GEN_PER_TIER: { label: string; included: boolean }[][] = [
  [
    { label: "300 Connection Requests / Month", included: true },
    { label: "2 Follow-Up Messages per Prospect", included: true },
    { label: "15 InMails / Month", included: false },
  ],
  [
    { label: "600 Connection Requests / Month", included: true },
    { label: "4 Follow-Up Messages per Prospect", included: true },
    { label: "15 InMails / Month", included: true },
  ],
  [
    { label: "600 Connection Requests / Month", included: true },
    { label: "4 Follow-Up Messages per Prospect", included: true },
    { label: "15 InMails / Month", included: true },
  ],
];

// Full comparison table: every row from the PDF, grouped the same way as the
// per-card sections above (Growth Infrastructure is identical across tiers,
// shown here too since the table is meant to be the single complete view).
const TABLE_SECTIONS: TableSection[] = [
  {
    title: "Growth Infrastructure",
    rows: [
      "Dedicated Account Manager",
      "Monthly Check-In with Founder",
      "End-of-Month (EOM) Reports",
      "ICP Definition Template",
      "Value Proposition Template",
      "One-Time Profile Optimisation",
      "One-Time Competitor Analysis",
      "ORM - Comments & Responses",
    ].map((label) => ({ label, values: [true, true, true] as [Cell, Cell, Cell] })),
  },
  {
    title: "Content",
    rows: CONTENT_ITEMS.map((c) => ({ label: c.label, values: c.included as [Cell, Cell, Cell] })),
  },
  {
    title: "Lead Generation",
    rows: DIFFERENTIATORS.slice(0, 3),
  },
];

const COLD_EMAIL_FEATURES = [
  "1,200 emails/day (26,400/month)",
  "10 domains + 40 email accounts",
  "Full DNS setup & IP rotation",
  "ICP-based lead list (8,800 prospects/month)",
  "A/B testing & ongoing campaign optimization",
  "Advanced reporting & real-time tracking",
  "Cold email copywriting & strategy",
  "3-4 follow-ups & lead nurturing",
];

const LINKEDIN_TOOL_FEATURES = [
  "Log in via LinkedIn, full campaign control",
  "AI-suggested messaging & follow-up sequences",
  "Automated connection requests & follow-ups",
  "Full analytics: acceptance, reply rates, lead status",
  "Direct human support, no AI chatbots, no queues",
];

const ACCENT = "#B45309";
const GRADIENT = "linear-gradient(135deg, #F5B731 0%, #D97706 100%)";
const TEXT_DARK = "#0A0A0A";
const TEXT_MUTED = "#8C8279";
const CARD_BG = "rgba(255,255,255,0.78)";
const CARD_BORDER = "rgba(232,226,217,0.9)";
const DARK_CARD_BG = "#0a0a0a";

function CheckIcon({ color = "#16A34A" }: { color?: string }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#C9C2B7" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function PlanFeatureSection({ title, items, accent }: { title: string; items: { label: string; included: boolean }[]; accent: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: accent }}>{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-xs leading-snug" style={{ color: item.included ? "#3D3D4D" : "#C9C2B7" }}>
            {item.included ? <CheckIcon color={accent} /> : <CrossIcon />}
            <span className={item.included ? "font-semibold" : ""}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckedItem({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-sm" style={{ color: dark ? "#E4E1F5" : "#3D3D4D" }}>
      <CheckIcon color={dark ? "#F5B731" : "#16A34A"} />
      <span className="font-semibold">{label}</span>
    </li>
  );
}

function DiffCell({ value, accent }: { value: Cell; accent?: boolean }) {
  if (value === false) {
    return <span className="text-sm" style={{ color: "#D4D2E3" }}>&mdash;</span>;
  }
  if (value === true) {
    return <CheckIcon color={accent ? ACCENT : "#16A34A"} />;
  }
  return <span className="text-sm font-black" style={{ color: TEXT_DARK }}>{value}</span>;
}

function SectionEyebrow({ n, title, subtitle, id }: { n: string; title: string; subtitle: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-3 scroll-mt-28">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm shrink-0 text-white"
        style={{ background: GRADIENT }}
      >
        {n}
      </span>
      <div>
        <h2 className="text-lg font-black leading-tight" style={{ color: TEXT_DARK }}>{title}</h2>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: TEXT_MUTED }}>{subtitle}</p>
      </div>
    </div>
  );
}

export interface GrowthPlansPricingProps {
  pageTitle: string;
  currencyPrefix: string;
  currencySuffix?: string;
  prices: {
    starter: string;
    growth: string;
    leadGen: string;
    coldEmail: string;
    automation: string;
  };
}

export default function GrowthPlansPricing({ pageTitle, currencyPrefix, currencySuffix, prices }: GrowthPlansPricingProps) {
  const titleWords = pageTitle.split(" ");
  const accentWord = titleWords[titleWords.length - 1];
  const leadWords = titleWords.slice(0, -1).join(" ");

  const tiers = [
    { name: "LinkedIn Starter", tagline: "Foundational LinkedIn growth", icon: Rocket, price: prices.starter },
    { name: "LinkedIn Growth", tagline: "Best for maximum pipeline", icon: Zap, price: prices.growth, featured: true },
    { name: "Lead Generation", tagline: "Volume-focused outbound", icon: Target, price: prices.leadGen },
  ];

  return (
    <InnerLayout>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden" style={{ background: "#F8F6F2" }}>
        {/* Soft pastel gradient blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div style={{ position: "absolute", top: "-160px", left: "-120px", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(245,183,49,0.06) 45%, transparent 70%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", top: "-80px", right: "-140px", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.16) 0%, rgba(217,119,6,0.05) 45%, transparent 70%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", top: "420px", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,226,217,0.5) 0%, rgba(232,226,217,0.15) 45%, transparent 70%)", filter: "blur(70px)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto text-center mb-10">
          <h1 className="hero-fade text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: TEXT_DARK }}>
            {leadWords} <em className="not-italic" style={{ fontStyle: "italic", color: ACCENT }}>{accentWord}</em>
          </h1>
          <p className="hero-fade-d1 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
            LinkedIn growth and lead generation, run as a done-for-you system. Every plan shares the same foundation, the difference is how much volume and content sits on top of it.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto space-y-10">
          <FadeIn>
            <SectionEyebrow n="01" title="LinkedIn Growth Plans" subtitle="Done For You" />
          </FadeIn>

          {/* Tier cards */}
          <FadeIn delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
              {tiers.map((tier, i) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.name}
                    className="price-card relative rounded-3xl p-6 sm:p-7 flex flex-col"
                    style={{
                      backgroundColor: CARD_BG,
                      backdropFilter: "blur(14px)",
                      border: tier.featured ? "1.5px solid transparent" : `1px solid ${CARD_BORDER}`,
                      backgroundImage: tier.featured ? `linear-gradient(${CARD_BG}, ${CARD_BG}), ${GRADIENT}` : undefined,
                      backgroundOrigin: tier.featured ? "border-box" : undefined,
                      backgroundClip: tier.featured ? "padding-box, border-box" : undefined,
                      boxShadow: tier.featured ? "0 20px 45px rgba(245,183,49,0.25)" : "0 8px 24px rgba(31,33,51,0.05)",
                      transform: tier.featured ? "translateY(-8px)" : undefined,
                    }}
                  >
                    {tier.featured && (
                      <div className="price-badge-pop absolute -top-3.5 left-1/2 rounded-full px-4 py-1.5 text-center font-black text-[10px] text-white whitespace-nowrap" style={{ background: GRADIENT, zIndex: 10 }}>
                        &#10024; Best value
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4 mt-1">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: tier.featured ? GRADIENT : "rgba(245,183,49,0.12)" }}>
                        <Icon className="w-5 h-5" color={tier.featured ? "#ffffff" : ACCENT} strokeWidth={2.2} />
                      </span>
                      <div>
                        <h3 className="text-base font-black leading-tight" style={{ color: TEXT_DARK }}>{tier.name}</h3>
                        <p className="text-xs font-medium" style={{ color: TEXT_MUTED }}>{tier.tagline}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <span className="text-3xl font-black" style={{ color: tier.featured ? ACCENT : TEXT_DARK }}>{currencyPrefix}{tier.price}</span>
                      {currencySuffix && <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}> {currencySuffix}</span>}
                      <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}> / month</span>
                    </div>

                    <div className="flex-1 space-y-4 mb-5">
                      <PlanFeatureSection
                        title="Content"
                        items={CONTENT_ITEMS.map((c) => ({ label: c.label, included: c.included[i as 0 | 1 | 2] }))}
                        accent={tier.featured ? ACCENT : "#16A34A"}
                      />
                      <PlanFeatureSection
                        title="Lead Generation"
                        items={LEAD_GEN_PER_TIER[i]}
                        accent={tier.featured ? ACCENT : "#16A34A"}
                      />
                      <p className="text-xs leading-snug pt-1" style={{ color: TEXT_MUTED }}>
                        <a href="#included-in-every-plan" className="font-bold underline" style={{ color: ACCENT }}>+ Growth Infrastructure (same on every plan)</a>
                      </p>
                    </div>

                    <a
                      href="/founder-meeting"
                      className={`price-cta inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full ${tier.featured ? "price-cta-solid-dark" : "price-cta-light"}`}
                      style={
                        tier.featured
                          ? { background: GRADIENT, color: "#ffffff" }
                          : { backgroundColor: "#ffffff", color: TEXT_DARK, border: `1.5px solid ${CARD_BORDER}` }
                      }
                    >
                      Get Started
                    </a>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Shared inclusions, shown once */}
          <FadeIn delay={140}>
            <div id="included-in-every-plan" className="rounded-3xl p-6 sm:p-8 scroll-mt-28" style={{ backgroundColor: CARD_BG, backdropFilter: "blur(14px)", border: `1px solid ${CARD_BORDER}` }}>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>Included in every plan</h2>
                <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}>Same on all 3 tiers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {INCLUDED_IN_EVERY_PLAN.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#3D3D4D" }}>
                    <CheckIcon />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Differentiator comparison table */}
          <FadeIn delay={200}>
            <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: CARD_BG, backdropFilter: "blur(14px)", border: `1px solid ${CARD_BORDER}` }}>
              <div className="px-6 py-4" style={{ borderBottom: `1px solid ${CARD_BORDER}` }}>
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>Overview</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ minWidth: 560 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${CARD_BORDER}` }}>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-black uppercase tracking-widest sticky left-0" style={{ color: TEXT_MUTED, backgroundColor: "rgba(255,255,255,0.9)", minWidth: 220 }}>
                        Feature
                      </th>
                      {tiers.map((tier) => (
                        <th
                          key={tier.name}
                          className="px-4 py-3 text-center text-xs font-black"
                          style={{ color: tier.featured ? ACCENT : TEXT_DARK, backgroundColor: tier.featured ? "rgba(245,183,49,0.08)" : "transparent", width: 130 }}
                        >
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_SECTIONS.map((section) => (
                      <Fragment key={section.title}>
                        <tr>
                          <td colSpan={4} className="px-4 sm:px-6 py-2.5 text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT, backgroundColor: "rgba(245,183,49,0.08)" }}>
                            {section.title}
                          </td>
                        </tr>
                        {section.rows.map((row) => (
                          <tr key={row.label} className="price-row" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
                            <td className="px-4 sm:px-6 py-4 text-sm font-semibold sticky left-0" style={{ color: "#3D3D4D", backgroundColor: "rgba(255,255,255,0.9)", minWidth: 220 }}>
                              {row.label}
                            </td>
                            {row.values.map((v, ci) => (
                              <td
                                key={ci}
                                className="px-4 py-4 text-center"
                                style={{ backgroundColor: tiers[ci].featured ? "rgba(245,183,49,0.08)" : "transparent", width: 130 }}
                              >
                                <DiffCell value={v} accent={tiers[ci].featured} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Additional standalone options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <FadeIn>
              <div className="h-full flex flex-col">
                <div className="mb-5">
                  <SectionEyebrow n="02" title="Cold Email Outbound System" subtitle="Done For You" />
                </div>
                <div className="price-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col" style={{ backgroundColor: CARD_BG, backdropFilter: "blur(14px)", border: `1px solid ${CARD_BORDER}` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ backgroundColor: "rgba(245,183,49,0.12)" }}>
                      <Mail className="w-5 h-5" color={ACCENT} strokeWidth={2.2} />
                    </span>
                    <p className="text-xs font-semibold" style={{ color: TEXT_MUTED }}>Fully managed sending infrastructure and outreach</p>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {COLD_EMAIL_FEATURES.map((f) => <CheckedItem key={f} label={f} />)}
                  </ul>
                  <div className="mt-auto pt-6" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black" style={{ color: TEXT_DARK }}>{currencyPrefix}{prices.coldEmail}</span>
                        {currencySuffix && <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> {currencySuffix}</span>}
                        <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> / month</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: ACCENT }}>100% advance for first month</span>
                    </div>
                    <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "rgba(245,183,49,0.08)" }}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: TEXT_MUTED }}>Note</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#4B4B5F" }}>
                        You purchase: domains &amp; email accounts. We cover: all sending &amp; lead sourcing software.
                      </p>
                    </div>
                    <a href="/founder-meeting" className="price-cta price-cta-solid-dark inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full text-white" style={{ background: GRADIENT }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={90}>
              <div className="h-full flex flex-col">
                <div className="mb-5">
                  <SectionEyebrow n="03" title="LinkedIn Automation Tool" subtitle="Do It Yourself" />
                </div>
                <div className="price-card price-card-dark rounded-3xl p-6 sm:p-8 flex-1 flex flex-col" style={{ backgroundColor: DARK_CARD_BG, border: "1px solid rgba(245,183,49,0.35)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ backgroundColor: "rgba(245,183,49,0.15)" }}>
                      <Bot className="w-5 h-5" color="#F5B731" strokeWidth={2.2} />
                    </span>
                    <p className="text-xs font-semibold" style={{ color: "#b8c1bc" }}>Self-serve, you stay in the driver's seat</p>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {LINKEDIN_TOOL_FEATURES.map((f) => <CheckedItem key={f} label={f} dark />)}
                  </ul>
                  <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="mb-6">
                      <span className="text-2xl sm:text-3xl font-black" style={{ color: "#F5B731" }}>{currencyPrefix}{prices.automation}</span>
                      {currencySuffix && <span className="text-sm font-semibold" style={{ color: "#b8c1bc" }}> {currencySuffix}</span>}
                      <span className="text-sm font-semibold" style={{ color: "#b8c1bc" }}> / LinkedIn account / month</span>
                    </div>
                    <a href="/founder-meeting" className="price-cta inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full" style={{ background: GRADIENT, color: "#ffffff" }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Terms & Conditions */}
          <FadeIn delay={60}>
            <div className="rounded-3xl p-6 sm:p-8" style={{ backgroundColor: CARD_BG, backdropFilter: "blur(14px)", border: `1px solid ${CARD_BORDER}` }}>
              <h2 className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: TEXT_DARK }}>Terms &amp; Conditions</h2>
              <ul className="space-y-2.5">
                {[
                  "Prices shown are indicative and exclude any applicable taxes unless stated otherwise.",
                  "Billing is monthly, in advance, on the plan selected.",
                  "The Cold Email Outbound System requires 100% advance payment for the first month; domains and email accounts are purchased separately by the client and are not included in the plan price.",
                  "Plan inclusions, volumes, and deliverables are typical monthly figures and may vary based on scope, ICP, and campaign performance.",
                  "A written service agreement covering contract term, cancellation, and other conditions is shared and signed before onboarding begins.",
                  "This page is indicative pricing for discussion purposes and does not itself constitute a binding offer.",
                ].map((term) => (
                  <li key={term} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#F5B731" }} />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] font-semibold mt-5" style={{ color: "#C9C2B7" }}>Last updated September 25, 2026.</p>
            </div>
          </FadeIn>
        </div>

        <div className="relative max-w-3xl mx-auto text-center mt-14">
          <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            Have questions about which plan fits, or want something custom? Reach out at{" "}
            <a href="mailto:founder@myntmore.com" className="font-bold underline" style={{ color: TEXT_DARK }}>founder@myntmore.com</a>.
          </p>
        </div>
      </section>
    </InnerLayout>
  );
}
