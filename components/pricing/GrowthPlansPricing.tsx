"use client";

import { Fragment, useEffect, useRef } from "react";
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
  info?: string;
}

const DIFFERENTIATORS: DiffRow[] = [
  { label: "Connection Requests / Month", values: ["300", "600", "600"], info: "LinkedIn has an 800 connection request monthly limit." },
  { label: "Follow-Up Messages per Prospect", values: ["2", "4", "4"], info: "Most people reply on the 3rd follow-up." },
  { label: "InMails / Month", values: [false, "15", "15"], info: "We use InMails to reach out to your ICPs without having to connect with them first." },
  { label: "Video-Based Posts / Month", values: [false, "2", false], info: "We strongly believe LinkedIn is going to be a video-first platform very soon." },
  { label: "Cheatsheet / PDF (Lead Magnet)", values: [false, true, false], info: "A downloadable resource offered on your profile or in outreach to generate inbound interest." },
  { label: "Strategic Engagements / Post", values: [false, "5", false], info: "Thoughtful, ICP-relevant comments placed on other people's posts to increase your visibility." },
];

// Short clarifications for the less self-explanatory Growth Infrastructure
// and Content rows, keyed by label so they can be attached when building
// TABLE_SECTIONS below without changing the shape of the arrays above.
const ROW_INFO: Record<string, string> = {
  "ICP Definition Template": "A structured worksheet defining exactly who your ideal customer is, used to guide targeting and messaging.",
  "Value Proposition Template": "A framework for articulating why a prospect should choose you, used across your profile, content, and outreach.",
  "One-Time Profile Optimisation": "A single pass to rewrite and restructure your LinkedIn profile for credibility and inbound interest.",
  "One-Time Competitor Analysis": "A one-time review of how competitors position themselves, used to sharpen your own positioning.",
  "ORM - Comments & Responses": "We monitor and respond to comments on your posts to keep engagement active and protect your reputation.",
  "End-of-Month (EOM) Reports": "A monthly summary of what was posted, sent, and booked, so you can see exactly what happened.",
  "Monthly Video Interview": "A monthly video interview with you or your team, edited and repurposed into short-form content.",
  "2 Video-Based Posts / Month": "We strongly believe LinkedIn is going to be a video-first platform very soon.",
  "1 Cheatsheet / PDF (Lead Magnet)": "A downloadable resource offered on your profile or in outreach to generate inbound interest.",
  "5 Strategic Engagements / Post": "Thoughtful, ICP-relevant comments placed on other people's posts to increase your visibility.",
};

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
    rows: INCLUDED_IN_EVERY_PLAN.slice(0, 8).map((label) => ({ label, values: [true, true, true] as [Cell, Cell, Cell], info: ROW_INFO[label] })),
  },
  {
    title: "Content",
    rows: CONTENT_ITEMS.map((c) => ({ label: c.label, values: c.included as [Cell, Cell, Cell], info: ROW_INFO[c.label] })),
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

// Same 3-accent rotation Services.tsx uses for its cards.
const GOLD = "#F5B731";
const BLUE = "#3B82F6";
const PURPLE = "#7C3AED";
const ORANGE = "#F97316";
const TEAL = "#14B8A6";
const GREEN = "#10B981";
const TEXT_DARK = "#0a0a0a";
const TEXT_BODY = "#52525B";
const TEXT_MUTED = "#8C8279";
const BORDER = "#E8E2D9";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PlanFeatureSection({ title, items, accent }: { title: string; items: { label: string; included: boolean }[]; accent: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: accent }}>{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-xs leading-snug" style={{ color: item.included ? "#3D3D3D" : "#B7AFA0" }}>
            {item.included ? <CheckIcon color={accent} /> : <span className="w-4 shrink-0 text-center">&mdash;</span>}
            <span className={item.included ? "font-semibold" : ""}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckedItem({ label, accent }: { label: string; accent: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm" style={{ color: "#3D3D3D" }}>
      <CheckIcon color={accent} />
      <span className="font-semibold">{label}</span>
    </li>
  );
}

function DiffCell({ value, accent }: { value: Cell; accent: string }) {
  if (value === false) {
    return <span className="text-sm" style={{ color: "#C9C2B7" }}>&mdash;</span>;
  }
  if (value === true) {
    return <CheckIcon color={accent} />;
  }
  return <span className="text-sm font-black" style={{ color: TEXT_DARK }}>{value}</span>;
}

function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex items-center ml-1.5 align-middle">
      <span
        tabIndex={0}
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-black cursor-help"
        style={{ backgroundColor: "#EFEBE4", color: TEXT_MUTED }}
        aria-label={text}
      >
        i
      </span>
      <span
        className="pointer-events-none absolute left-1/2 bottom-full mb-2 w-56 -translate-x-1/2 rounded-lg px-3 py-2 text-xs font-normal leading-snug text-left opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 z-20"
        style={{ backgroundColor: TEXT_DARK, color: "#ffffff" }}
      >
        {text}
      </span>
    </span>
  );
}

// Same count-up technique as Hero.tsx / Services.tsx's stat counters:
// animate a plain digit count on scroll-into-view, then snap to the exact
// pre-formatted price string on completion so region-specific comma
// grouping (e.g. India's 1,74,999 vs the West's 1,799) is never reformatted
// by this component -- it only ever displays strings the caller already
// formatted correctly.
function AnimatedPrice({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (!numericTarget) {
      el.textContent = target;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target;
      return;
    }

    let animId: number;
    const duration = 900;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let startTime: number | null = null;
        function tick(ts: number) {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (el) {
            el.textContent = progress < 1 ? Math.round(eased * numericTarget).toLocaleString("en-US") : target;
          }
          if (progress < 1) animId = requestAnimationFrame(tick);
        }
        animId = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [target]);

  return <span ref={ref}>0</span>;
}

function GhostNumber({ n, accent }: { n: string; accent: string }) {
  return (
    <span className="text-6xl font-black leading-none select-none absolute top-6 right-6" aria-hidden="true" style={{ color: accent, opacity: 0.12 }}>
      {n}
    </span>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="text-2xl font-black leading-tight" style={{ color: TEXT_DARK }}>{title}</h2>
        <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ color: GOLD, backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.35)" }}>{eyebrow}</span>
      </div>
      {/* Always its own line, regardless of title length, so every section
          heading takes up the same height and the cards below line up. */}
      <p className="text-xs font-bold uppercase tracking-widest mt-1.5" style={{ color: TEXT_MUTED }}>{subtitle}</p>
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
    { name: "LinkedIn Starter", tagline: "Foundational LinkedIn growth", icon: Rocket, price: prices.starter, accent: BLUE },
    { name: "LinkedIn Growth", tagline: "Best for maximum pipeline", icon: Zap, price: prices.growth, featured: true, accent: GOLD },
    { name: "Lead Generation", tagline: "Volume-focused outbound", icon: Target, price: prices.leadGen, accent: TEAL },
  ];

  // Same slow ambient drift as Hero.tsx / CTABanner.tsx's background blobs,
  // just with smaller travel since this section is shorter. Skipped on
  // mobile (matching those components) and under prefers-reduced-motion
  // (an addition on top of the homepage's own version).
  const blobGoldRef = useRef<HTMLDivElement>(null);
  const blobPurpleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    const startTime = performance.now();

    function animate() {
      const t = (performance.now() - startTime) / 1000;
      if (blobGoldRef.current) {
        const x = Math.sin(t * 0.7) * 60 + Math.sin(t * 0.3) * 20;
        const y = Math.cos(t * 0.5) * 40 + Math.cos(t * 0.2) * 15;
        blobGoldRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (blobPurpleRef.current) {
        const x = Math.sin(t * 0.6 + 2) * 60 + Math.cos(t * 0.4) * 20;
        const y = Math.cos(t * 0.8 + 1) * 40 + Math.sin(t * 0.35) * 15;
        blobPurpleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <InnerLayout>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        {/* Soft multi-color mesh wash behind the hero, in the site's real
            accent rotation (Industries.tsx's gold/purple/teal/blue) instead
            of a single tint -- fades out via mask before the cards so the
            table/cards below sit back on plain cream. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "820px",
            background:
              "radial-gradient(ellipse 62% 55% at 14% 10%, rgba(245,183,49,0.40) 0%, rgba(245,183,49,0.12) 45%, transparent 72%)," +
              "radial-gradient(ellipse 58% 52% at 86% 6%, rgba(124,58,237,0.36) 0%, rgba(124,58,237,0.10) 45%, transparent 72%)," +
              "radial-gradient(ellipse 55% 50% at 50% 38%, rgba(20,184,166,0.26) 0%, rgba(20,184,166,0.08) 45%, transparent 72%)," +
              "radial-gradient(ellipse 52% 48% at 92% 58%, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.08) 45%, transparent 72%)," +
              "radial-gradient(ellipse 48% 42% at 6% 60%, rgba(249,115,22,0.20) 0%, transparent 70%)," +
              "radial-gradient(ellipse 42% 38% at 55% 4%, rgba(16,185,129,0.16) 0%, transparent 68%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Subtle blobs, same treatment as Services.tsx / CTABanner.tsx, now drifting like Hero.tsx's */}
        <div ref={blobGoldRef} aria-hidden="true" style={{ position: "absolute", top: "-80px", right: "-60px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blobPurpleRef} aria-hidden="true" style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative max-w-3xl mx-auto text-center mb-14">
          <span className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>Pricing</span>
          </span>
          <h1 className="hero-fade-d1 text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: TEXT_DARK }}>
            {leadWords} <span style={{ color: GOLD }}>{accentWord}</span>
          </h1>
          <div className="flex justify-center -mt-2 mb-5" aria-hidden="true">
            <svg viewBox="0 0 420 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200px] sm:w-[260px]">
              <path d="M4 10 C40 4, 80 16, 120 10 S200 4, 240 10 S320 16, 360 10 S400 4, 416 10" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <p className="hero-fade-d2 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: TEXT_BODY }}>
            LinkedIn growth and lead generation, run as a done-for-you system. Every plan shares the same foundation, the difference is how much volume and content sits on top of it.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto space-y-14">
          <div>
            <FadeIn>
              <SectionHeading eyebrow="01" title="LinkedIn Growth Plans" subtitle="Done For You" />
            </FadeIn>

            {/* Tier cards -- each fades in with its own slightly later delay
                so they cascade left-to-right instead of arriving as one block. */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch mt-6">
              {tiers.map((tier, i) => {
                const Icon = tier.icon;
                return (
                  <FadeIn key={tier.name} delay={80 + i * 90}>
                    <article
                      className="price-card group relative flex flex-col rounded-2xl overflow-hidden bg-white"
                      style={{
                        border: `1px solid ${BORDER}`,
                        borderTop: `3px solid ${tier.accent}`,
                        boxShadow: tier.featured ? `0 8px 28px ${tier.accent}30` : "0 2px 10px rgba(0,0,0,0.04)",
                      }}
                    >
                      {tier.featured && (
                        <div className="price-badge-pop absolute top-0 left-1/2 rounded-b-lg px-4 py-1 text-center font-black text-[10px] text-white whitespace-nowrap" style={{ backgroundColor: tier.accent, zIndex: 10 }}>
                          MOST POPULAR
                        </div>
                      )}
                      <div className="p-6 sm:p-7 flex flex-col flex-1 relative">
                        <GhostNumber n={String(i + 1)} accent={tier.accent} />

                        <div className="flex items-center gap-3 mb-5 mt-2">
                          <div className="price-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: `${tier.accent}15`, border: `1.5px solid ${tier.accent}38` }}>
                            <Icon className="w-5 h-5" color={tier.accent} strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-base font-black leading-tight" style={{ color: TEXT_DARK }}>{tier.name}</h3>
                            <p className="text-xs font-medium" style={{ color: TEXT_MUTED }}>{tier.tagline}</p>
                          </div>
                        </div>

                        <div className="mb-5">
                          <span className="text-3xl font-black" style={{ color: TEXT_DARK }}>{currencyPrefix}<AnimatedPrice target={tier.price} /></span>
                          {currencySuffix && <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}> {currencySuffix}</span>}
                          <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}> / month</span>
                        </div>

                        <div className="flex-1 space-y-4 mb-5">
                          <PlanFeatureSection
                            title="Content"
                            items={CONTENT_ITEMS.map((c) => ({ label: c.label, included: c.included[i as 0 | 1 | 2] }))}
                            accent={tier.accent}
                          />
                          <PlanFeatureSection
                            title="Lead Generation"
                            items={LEAD_GEN_PER_TIER[i]}
                            accent={tier.accent}
                          />
                          <p className="text-xs leading-snug pt-1" style={{ color: TEXT_MUTED }}>
                            <a href="#included-in-every-plan" className="font-bold underline" style={{ color: tier.accent }}>+ Growth Infrastructure (same on every plan)</a>
                          </p>
                        </div>

                        <a href="/founder-meeting" className="btn-dark price-cta inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full">
                          Get Started
                        </a>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Shared inclusions, shown once */}
          <FadeIn delay={140}>
            <div id="included-in-every-plan" className="rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white" style={{ border: `1px solid ${BORDER}` }}>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>Included in every plan</h2>
                <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}>Same on all 3 tiers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {INCLUDED_IN_EVERY_PLAN.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#3D3D3D" }}>
                    <CheckIcon color={GREEN} />
                    <span className="font-semibold">{item}</span>
                    {ROW_INFO[item] && <InfoTooltip text={ROW_INFO[item]} />}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Full comparison table */}
          <FadeIn delay={200}>
            <div className="rounded-2xl overflow-hidden bg-white" style={{ border: `1px solid ${BORDER}` }}>
              <div className="px-6 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>Overview</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ minWidth: 560 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-black uppercase tracking-widest sticky left-0 bg-white" style={{ color: TEXT_MUTED, minWidth: 220 }}>
                        Feature
                      </th>
                      {tiers.map((tier) => (
                        <th
                          key={tier.name}
                          className="px-4 py-3 text-center text-xs font-black"
                          style={{ color: tier.accent, backgroundColor: `${tier.accent}0d`, width: 130 }}
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
                          <td colSpan={4} className="px-4 sm:px-6 py-2.5 text-[10px] font-black uppercase tracking-widest" style={{ color: "#B45309", backgroundColor: "#FEF9EC" }}>
                            {section.title}
                          </td>
                        </tr>
                        {section.rows.map((row) => (
                          <tr key={row.label} className="price-row" style={{ borderTop: `1px solid ${BORDER}` }}>
                            <td className="px-4 sm:px-6 py-4 text-sm font-semibold sticky left-0 bg-white" style={{ color: "#3D3D3D", minWidth: 220 }}>
                              {row.label}
                              {row.info && <InfoTooltip text={row.info} />}
                            </td>
                            {row.values.map((v, ci) => (
                              <td
                                key={ci}
                                className="px-4 py-4 text-center"
                                style={{ backgroundColor: `${tiers[ci].accent}0d`, width: 130 }}
                              >
                                <DiffCell value={v} accent={tiers[ci].accent} />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <SectionHeading eyebrow="02" title="Cold Email Outbound System" subtitle="Done For You" />
                </div>
                <article className="price-card group relative flex-1 flex flex-col rounded-2xl overflow-hidden bg-white" style={{ border: `1px solid ${BORDER}`, borderTop: `3px solid ${ORANGE}`, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  <div className="p-6 sm:p-8 flex flex-col flex-1 relative">
                    <GhostNumber n="02" accent={ORANGE} />
                    <div className="flex items-center gap-3 mb-5 mt-2">
                      <div className="price-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: `${ORANGE}15`, border: `1.5px solid ${ORANGE}38` }}>
                        <Mail className="w-5 h-5" color={ORANGE} strokeWidth={2} />
                      </div>
                      <p className="text-sm font-semibold" style={{ color: TEXT_BODY }}>Fully managed sending infrastructure and outreach</p>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {COLD_EMAIL_FEATURES.map((f) => <CheckedItem key={f} label={f} accent={ORANGE} />)}
                    </ul>
                    <div className="pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
                      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
                        <div>
                          <span className="text-2xl sm:text-3xl font-black" style={{ color: TEXT_DARK }}>{currencyPrefix}<AnimatedPrice target={prices.coldEmail} /></span>
                          {currencySuffix && <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> {currencySuffix}</span>}
                          <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> / month</span>
                        </div>
                        <span className="text-xs font-bold" style={{ color: ORANGE }}>100% advance for first month</span>
                      </div>
                      <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "#F8F6F2" }}>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: TEXT_MUTED }}>Note</p>
                        <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>
                          You purchase: domains &amp; email accounts. We cover: all sending &amp; lead sourcing software.
                        </p>
                      </div>
                      <a href="/founder-meeting" className="btn-dark price-cta inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full">
                        Get Started
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </FadeIn>

            <FadeIn delay={90}>
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <SectionHeading eyebrow="03" title="LinkedIn Automation Tool" subtitle="Do It Yourself" />
                </div>
                <article className="price-card group relative flex-1 flex flex-col rounded-2xl overflow-hidden bg-white" style={{ border: `1px solid ${BORDER}`, borderTop: `3px solid ${PURPLE}`, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  <div className="p-6 sm:p-8 flex flex-col flex-1 relative">
                    <GhostNumber n="03" accent={PURPLE} />
                    <div className="flex items-center gap-3 mb-5 mt-2">
                      <div className="price-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: `${PURPLE}15`, border: `1.5px solid ${PURPLE}38` }}>
                        <Bot className="w-5 h-5" color={PURPLE} strokeWidth={2} />
                      </div>
                      <p className="text-sm font-semibold" style={{ color: TEXT_BODY }}>Self-serve, you stay in the driver&apos;s seat</p>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {LINKEDIN_TOOL_FEATURES.map((f) => <CheckedItem key={f} label={f} accent={PURPLE} />)}
                    </ul>
                    <div className="pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
                      <div className="mb-6">
                        <span className="text-2xl sm:text-3xl font-black" style={{ color: TEXT_DARK }}>{currencyPrefix}<AnimatedPrice target={prices.automation} /></span>
                        {currencySuffix && <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> {currencySuffix}</span>}
                        <span className="text-sm font-semibold" style={{ color: TEXT_MUTED }}> / LinkedIn account / month</span>
                      </div>
                      <a href="/founder-meeting" className="btn-dark price-cta inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full">
                        Get Started
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </FadeIn>
          </div>

          {/* Terms & Conditions */}
          <FadeIn delay={60}>
            <div className="rounded-2xl p-6 sm:p-8 bg-white" style={{ border: `1px solid ${BORDER}` }}>
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
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
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
