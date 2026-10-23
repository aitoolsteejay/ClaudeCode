"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JsonLd from "@/app/components/JsonLd";
import { buildHowToSchema } from "@/lib/schema";
import { RelatedTools } from "@/components/tools/shared/RelatedTools";
import { GOLD_TEXT } from "@/lib/colors";

const HOWTO_SCHEMA = buildHowToSchema("How the LinkedIn Profile Optimizer Works", [
  { name: "Paste your headline and About section", text: "Quick and easy input of your current profile details." },
  { name: "Get your free clarity audit in seconds", text: "Our AI engine processes your positioning against high-performing benchmarks." },
  { name: "Implement changes and watch your pipeline grow", text: "Apply the specific suggestions and start seeing better engagement." },
]);

// Real scoring criteria mirrored directly from calculateClarityScore in ProfileOptimizerClient
const SCORE_CHECKS = [
  {
    id: "icp",
    label: "References target ICP",
    detail: "Explicitly names who you help (role, industry, or company stage) rather than an ambiguous audience.",
    icon: Target,
  },
  {
    id: "problem",
    label: "States a concrete problem verb",
    detail: "Uses decisive problem verbs like help, solve, fix, reduce, or streamline to clarify real business pain.",
    icon: Zap,
  },
  {
    id: "metric",
    label: "Backs positioning with metrics",
    detail: "Includes verifiable numbers, revenue figures, scale markers, or percentages to establish concrete proof.",
    icon: BarChart3,
  },
  {
    id: "fluff",
    label: "Eliminates empty buzzwords",
    detail: "Purges filler words like passionate, excited, journey, or mission-driven that dilute executive authority.",
    icon: ShieldCheck,
  },
  {
    id: "authority",
    label: "Proves verified authority",
    detail: "Demonstrates verifiable track records, executive seniority, client volume, or domain achievements.",
    icon: Sparkles,
  },
];

type DemoTabKey = "before" | "authority" | "problem" | "social";

interface DemoScenario {
  key: DemoTabKey;
  tabLabel: string;
  badge: string;
  headline: string;
  score: number;
  verdict: string;
  verdictTone: "warning" | "success";
  verdictDesc: string;
  checkResults: Record<string, { passed: boolean; note: string }>;
}

const DEMO_SCENARIOS: Record<DemoTabKey, DemoScenario> = {
  before: {
    key: "before",
    tabLabel: "Current (Generic)",
    badge: "Generic Positioning",
    headline: "Marketing Leader | Passionate about growth | Helping brands scale to the next level",
    score: 42,
    verdict: "Needs immediate work",
    verdictTone: "warning",
    verdictDesc: "No defined ICP, unproven metrics, and generic buzzwords cause prospects to scroll past.",
    checkResults: {
      icp: { passed: false, note: "Missing target role or industry" },
      problem: { passed: false, note: "Vague phrasing without a specific pain point" },
      metric: { passed: false, note: "Zero revenue, scale, or percentage metrics" },
      fluff: { passed: false, note: "Trips flag on filler words (passionate)" },
      authority: { passed: false, note: "Unverified generic title without track record" },
    },
  },
  authority: {
    key: "authority",
    tabLabel: "Authority Angle",
    badge: "Optimized Rewrite",
    headline: "Scaled outbound pipeline past $10M ARR for 40+ B2B SaaS teams. Here is what moves inbound replies.",
    score: 94,
    verdict: "High inbound conversion",
    verdictTone: "success",
    verdictDesc: "Clear ICP, verifiable revenue metrics, and proven executive track record that invites inbound replies.",
    checkResults: {
      icp: { passed: true, note: "Direct focus on B2B SaaS teams" },
      problem: { passed: true, note: "Moves inbound replies and pipeline conversion" },
      metric: { passed: true, note: "Concrete $10M ARR scale metric" },
      fluff: { passed: true, note: "Zero fluff words or corporate jargon" },
      authority: { passed: true, note: "Verifiable proof with 40+ enterprise clients" },
    },
  },
  problem: {
    key: "problem",
    tabLabel: "Problem Solver",
    badge: "Optimized Rewrite",
    headline: "Helping Series A-B B2B SaaS founders fix leaking sales funnels and convert cold pipeline into qualified demos.",
    score: 92,
    verdict: "High inbound conversion",
    verdictTone: "success",
    verdictDesc: "Names exact buyer persona, diagnoses acute funnel pain points, and promises clear business outcomes.",
    checkResults: {
      icp: { passed: true, note: "Specific to Series A-B B2B SaaS founders" },
      problem: { passed: true, note: "Fix leaking sales funnels" },
      metric: { passed: true, note: "Qualified demos and cold pipeline conversion" },
      fluff: { passed: true, note: "Clear, problem-first diagnostic vocabulary" },
      authority: { passed: true, note: "Tailored to high-growth startup stage" },
    },
  },
  social: {
    key: "social",
    tabLabel: "Social Proof",
    badge: "Optimized Rewrite",
    headline: "Trusted by 40+ SaaS leaders to build repeatable outbound engines. +240% average reply rate lift.",
    score: 96,
    verdict: "High inbound conversion",
    verdictTone: "success",
    verdictDesc: "Leads with peer validation and hard quantifiable lift percentages to eliminate buyer skepticism.",
    checkResults: {
      icp: { passed: true, note: "Targeted to SaaS leaders and revenue teams" },
      problem: { passed: true, note: "Build repeatable outbound sales engines" },
      metric: { passed: true, note: "+240% average reply rate lift" },
      fluff: { passed: true, note: "Zero buzzwords, pure outcome metrics" },
      authority: { passed: true, note: "Endorsed and trusted by 40+ leaders" },
    },
  },
};

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  const [activeTab, setActiveTab] = useState<DemoTabKey>("authority");
  const shouldReduceMotion = useReducedMotion();
  const scenario = DEMO_SCENARIOS[activeTab];

  // Critically damped spring configuration for fluid response without bounce
  const fluidSpring = {
    type: "spring" as const,
    stiffness: 420,
    damping: 32,
  };

  return (
    <div className="flex flex-col w-full selection:bg-[#F5B731]/30">
      <JsonLd data={HOWTO_SCHEMA} />

      {/* Hero Section */}
      <section
        className="pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 relative overflow-hidden"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        {/* Soft atmospheric ambient light */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-[580px] h-[580px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.07) 42%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,183,49,0.16) 0%, rgba(245,183,49,0.04) 42%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Frosted status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E2D9] mb-6 backdrop-blur-xl bg-white/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B731] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B731]" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#0A0A0A]">
              Free AI Profile Clarity Audit
            </span>
          </div>

          {/* Optical typography heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-[-0.035em] leading-[1.08] text-[#0A0A0A] text-balance">
            Your headline is the first line of your pitch.
          </h1>

          <div className="flex justify-center -mt-1 mb-6" aria-hidden="true">
            <svg viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200px] sm:w-[250px]">
              <path
                d="M3 8 C30 3, 58 12, 86 8 S142 3, 170 8 S226 12, 254 8 S284 3, 297 8"
                stroke="#F5B731"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-[#52525B] tracking-[-0.01em]">
            Most LinkedIn profiles read like passive job titles, not reasons to reply. Test the live interactive preview below to see how positioning transforms inbound conversion.
          </p>

          {/* Apple-style Interactive Prototype Device Card */}
          <div className="max-w-3xl mx-auto text-left relative">
            {/* Segmented Control Bar */}
            <div className="flex justify-center mb-5">
              <div
                role="tablist"
                aria-label="Before and after positioning examples"
                className="inline-flex p-1 rounded-full border border-[#E0D9CE] backdrop-blur-xl bg-white/75 shadow-sm max-w-full overflow-x-auto scrollbar-none"
              >
                {(Object.keys(DEMO_SCENARIOS) as DemoTabKey[]).map((tabKey) => {
                  const isSelected = activeTab === tabKey;
                  const item = DEMO_SCENARIOS[tabKey];
                  return (
                    <button
                      key={tabKey}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveTab(tabKey)}
                      className="relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#F5B731] active:scale-[0.97]"
                      style={{
                        color: isSelected ? "#0A0A0A" : "#71675E",
                      }}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId={shouldReduceMotion ? undefined : "activeSegmentHighlight"}
                          className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#E8E2D9]"
                          transition={fluidSpring}
                        />
                      )}
                      <span className="relative z-10 whitespace-nowrap">
                        {item.tabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Showcase Card with Materials & Depth */}
            <div
              className="relative rounded-2xl p-6 sm:p-8 backdrop-blur-2xl bg-white/90 border border-[#E8E2D9] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenario.key}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Card Header: Badge & Score Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#F0EBE1]">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: scenario.verdictTone === "success" ? "rgba(245,183,49,0.14)" : "rgba(113,103,94,0.12)",
                          color: scenario.verdictTone === "success" ? "#A14A08" : "#71675E",
                        }}
                      >
                        {scenario.badge}
                      </span>
                      <span className="text-xs text-[#71675E] font-medium hidden sm:inline">
                        {scenario.tabLabel}
                      </span>
                    </div>

                    {/* Live Score Dial */}
                    <div className="flex items-center gap-2.5">
                      <div className="text-right">
                        <div className="text-xs font-semibold text-[#71675E]">Clarity Score</div>
                        <div
                          className="text-xs font-bold"
                          style={{ color: scenario.verdictTone === "success" ? "#047857" : "#B45309" }}
                        >
                          {scenario.verdict}
                        </div>
                      </div>
                      <div
                        className="h-10 px-3 rounded-xl flex items-center justify-center font-black text-lg tabular-nums border"
                        style={{
                          backgroundColor: scenario.verdictTone === "success" ? "#ECFDF5" : "#FFFBEB",
                          borderColor: scenario.verdictTone === "success" ? "#A7F3D0" : "#FDE68A",
                          color: scenario.verdictTone === "success" ? "#065F46" : "#92400E",
                        }}
                      >
                        {scenario.score}
                        <span className="text-xs font-bold opacity-60 ml-0.5">/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Headline Preview Box */}
                  <div
                    className="p-5 sm:p-6 rounded-xl border relative"
                    style={{
                      backgroundColor: scenario.verdictTone === "success" ? "#FAFAF8" : "#F8F6F2",
                      borderColor: scenario.verdictTone === "success" ? "#F5B731" : "#E8E2D9",
                      boxShadow: scenario.verdictTone === "success" ? "0 4px 20px rgba(245,183,49,0.12)" : "none",
                    }}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#71675E] mb-2 flex items-center justify-between">
                      <span>LinkedIn Headline Preview</span>
                      <span className="font-mono text-[10px] text-[#A14A08] font-semibold">
                        {scenario.headline.length} characters
                      </span>
                    </div>
                    <p
                      className="text-base sm:text-lg font-bold leading-snug tracking-[-0.015em]"
                      style={{ color: scenario.verdictTone === "success" ? "#0A0A0A" : "#71675E" }}
                    >
                      &ldquo;{scenario.headline}&rdquo;
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#71675E]">
                      {scenario.verdictDesc}
                    </p>
                  </div>

                  {/* Live 5-Point Diagnostic Breakdown */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#71675E] mb-3">
                      Audit Diagnostic Breakdown
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SCORE_CHECKS.map((check) => {
                        const res = scenario.checkResults[check.id];
                        const isPassed = res?.passed;
                        return (
                          <div
                            key={check.id}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg border text-xs"
                            style={{
                              backgroundColor: isPassed ? "rgba(236,253,245,0.6)" : "rgba(255,251,235,0.6)",
                              borderColor: isPassed ? "#D1FAE5" : "#FEF3C7",
                            }}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {isPassed ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-amber-600" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-bold text-[#0A0A0A] block truncate">
                                {check.label}
                              </span>
                              <span className="text-[#52525B] leading-tight text-[11px]">
                                {res?.note}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Instant-response Hero CTA */}
            <div className="text-center mt-10">
              <Button
                onClick={onStart}
                variant="hero"
                size="xl"
                className="rounded-full shadow-2xl active:scale-[0.97] transition-all duration-150 ease-out cursor-pointer"
              >
                Audit My Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-3 text-xs text-[#71675E] font-medium">
                Takes 2 minutes · No sign-up required · 100% Free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the audit actually checks */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              What the audit actually checks
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Five algorithmic checks evaluated directly against your headline and About section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCORE_CHECKS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 border border-[#E8E2D9] bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] transition-all duration-200 active:scale-[0.99] flex flex-col justify-between"
                  style={{
                    gridColumn: index === SCORE_CHECKS.length - 1 ? "1 / -1" : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center border border-[#F5B731]/40"
                      style={{ backgroundColor: "rgba(245,183,49,0.12)" }}
                    >
                      <Icon className="h-5 w-5 text-[#A14A08]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#A14A08]">
                          0{index + 1}
                        </span>
                        <h3 className="text-base font-bold text-[#0A0A0A]">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#52525B]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              How it works
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Three straightforward steps designed for busy founders and operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Paste your existing text",
                desc: "No password or profile scraping required. Simply paste your current headline and About section.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Run real-time clarity audit",
                desc: "Scored against the five core positioning checks on your exact wording within seconds.",
                icon: BarChart3,
              },
              {
                step: "03",
                title: "Pick your angle and paste",
                desc: "Receive three high-converting headline rewrites, keyword gaps, and an optimized About script.",
                icon: Sparkles,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E8E2D9] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black mb-4 tabular-nums" style={{ color: GOLD_TEXT }}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0A0A0A]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#52525B]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get free */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              What you get, 100% free
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Comprehensive positioning diagnostics and copy-paste assets ready for deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "A definitive clarity score",
                desc: "See exactly where your profile ranks against high-converting benchmarks, plus the specific elements dragging it down.",
                icon: BarChart3,
              },
              {
                title: "Three rewritten headlines",
                desc: "Authority, problem-solver, and social-proof variations tailored to match your authentic voice and buyer stage.",
                icon: Sparkles,
              },
              {
                title: "A ready-to-paste About section",
                desc: "Custom-scripted around your specific target audience and value proposition, avoiding generic template clichés.",
                icon: FileText,
              },
              {
                title: "High-intent keyword gaps",
                desc: "Identify the critical industry terms your ICP actively searches for that your profile currently lacks.",
                icon: Search,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 border border-[#E8E2D9] bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-colors"
                >
                  <div
                    className="h-9 w-9 rounded-lg flex items-center justify-center mb-3 border border-[#F5B731]/30"
                    style={{ backgroundColor: "rgba(245,183,49,0.12)" }}
                  >
                    <Icon className="h-4 w-4 text-[#A14A08]" />
                  </div>
                  <h3 className="text-base font-bold mb-1.5 text-[#0A0A0A]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#71675E]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust line */}
      <section
        className="py-16 px-4 sm:px-6 border-y border-[#E8E2D9]"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg leading-relaxed text-[#3D3D3D]">
            Built by the same team that has scripted the outbound and positioning funnels behind{" "}
            <span className="font-bold text-[#0A0A0A]">12K+ B2B meetings booked</span> for high-growth companies.
          </p>
        </div>
      </section>

      {/* Final closing CTA */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FEF9EC 0%, #FFFFFF 100%)",
          borderTop: "1px solid rgba(245,183,49,0.35)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-[-0.03em] leading-tight text-[#0A0A0A]">
            Stop guessing what your profile says about you.
          </h2>
          <p className="text-base text-[#52525B] mb-8 leading-relaxed">
            Get your instant clarity score, diagnostic deductions, and three copy-paste headline rewrites in under two minutes.
          </p>
          <Button
            onClick={onStart}
            variant="hero"
            size="xl"
            className="rounded-full shadow-2xl active:scale-[0.97] transition-all duration-150 ease-out cursor-pointer"
          >
            Audit My Profile
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <RelatedTools currentSlug="linkedin-optimizer" />
    </div>
  );
};

export default LandingPage;
