"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Target,
  Zap,
  FileText,
  Search,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, animate } from "framer-motion";
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

type AngleKey = "authority" | "problem" | "social";

interface AngleOption {
  key: AngleKey;
  label: string;
  headline: string;
  score: number;
  verdict: string;
  charCount: number;
  checks: Array<{ label: string; note: string }>;
}

const AFTER_ANGLES: Record<AngleKey, AngleOption> = {
  authority: {
    key: "authority",
    label: "Authority Angle",
    headline: "Scaled outbound pipeline past $10M ARR for 40+ B2B SaaS teams. Here is what moves inbound replies.",
    score: 94,
    verdict: "High inbound conversion",
    charCount: 104,
    checks: [
      { label: "Target ICP", note: "B2B SaaS teams" },
      { label: "Problem Verb", note: "Moves inbound replies" },
      { label: "Concrete Metric", note: "Past $10M ARR" },
      { label: "Zero Fluff", note: "Zero empty filler words" },
      { label: "Verifiable Authority", note: "40+ B2B SaaS teams" },
    ],
  },
  problem: {
    key: "problem",
    label: "Problem Solver",
    headline: "Helping Series A-B B2B SaaS founders fix leaking sales funnels and convert cold pipeline into qualified demos.",
    score: 92,
    verdict: "High inbound conversion",
    charCount: 110,
    checks: [
      { label: "Target ICP", note: "Series A-B B2B SaaS founders" },
      { label: "Problem Verb", note: "Fix leaking sales funnels" },
      { label: "Concrete Metric", note: "Qualified demos and pipeline" },
      { label: "Zero Fluff", note: "Action-driven problem vocabulary" },
      { label: "Verifiable Authority", note: "Targeted founder-stage expertise" },
    ],
  },
  social: {
    key: "social",
    label: "Social Proof",
    headline: "Trusted by 40+ SaaS leaders to build repeatable outbound engines. +240% average reply rate lift.",
    score: 96,
    verdict: "High inbound conversion",
    charCount: 102,
    checks: [
      { label: "Target ICP", note: "SaaS leaders and growth teams" },
      { label: "Problem Verb", note: "Build repeatable outbound engines" },
      { label: "Concrete Metric", note: "+240% average reply rate lift" },
      { label: "Zero Fluff", note: "Pure outcome metrics" },
      { label: "Verifiable Authority", note: "Trusted by 40+ SaaS leaders" },
    ],
  },
};

const BEFORE_EXAMPLE = {
  headline: "Marketing Leader | Passionate about growth | Helping brands scale to the next level",
  score: 42,
  verdict: "Needs work",
  charCount: 81,
  checks: [
    { label: "Target ICP", note: "Missing role, industry, or stage" },
    { label: "Problem Verb", note: "\"Helping scale\" is unspecific" },
    { label: "Concrete Metric", note: "No revenue or scale markers" },
    { label: "Zero Fluff", note: "Trips flag on \"passionate\"" },
    { label: "Verifiable Authority", note: "Unverified generic title" },
  ],
};

function AnimatedScore({ value, startFromZero = false }: { value: number; startFromZero?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(startFromZero ? 0 : value);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }
    const controls = animate(displayValue, value, {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, shouldReduceMotion]);

  return <>{displayValue}</>;
}

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  const [activeAngle, setActiveAngle] = useState<AngleKey>("authority");
  const shouldReduceMotion = useReducedMotion();
  const currentAfter = AFTER_ANGLES[activeAngle];

  // Apple-style critically damped spring physics: smooth, instantaneous feel, zero unwanted overshoot
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
        {/* Atmospheric ambient lighting with subtle continuous breath */}
        <motion.div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-[580px] h-[580px] rounded-full pointer-events-none"
          animate={shouldReduceMotion ? undefined : {
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.07) 42%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          animate={shouldReduceMotion ? undefined : {
            scale: [1, 1.06, 1],
            opacity: [0.75, 0.95, 0.75],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            background: "radial-gradient(circle, rgba(245,183,49,0.16) 0%, rgba(245,183,49,0.04) 42%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated frosted brand pill badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.75)",
              borderColor: "rgba(245,183,49,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-[#0A0A0A]">
              Free AI Profile Clarity Audit
            </span>
          </motion.div>

          {/* Optical typography heading */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-[-0.035em] leading-[1.08] text-[#0A0A0A] text-balance"
          >
            Your headline is the first line of your pitch.
          </motion.h1>

          {/* Animated SVG Squiggle Draw */}
          <div className="flex justify-center -mt-1 mb-6" aria-hidden="true">
            <svg viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200px] sm:w-[250px]">
              <motion.path
                d="M3 8 C30 3, 58 12, 86 8 S142 3, 170 8 S226 12, 254 8 S284 3, 297 8"
                stroke="#F5B731"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              />
            </svg>
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-[#52525B] tracking-[-0.01em]"
          >
            Most LinkedIn profiles read like passive job titles, not reasons to reply. Compare the generic baseline with our AI-optimized angles side by side.
          </motion.p>

          {/* Side-by-side Before and After Showcase with Staggered Spring Reveal */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 28, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-left max-w-5xl mx-auto items-stretch"
          >
            {/* Left Card: Before (Generic) */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.15 } }}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-[#E8E2D9] shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EBE1]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#71675E] bg-[#F4EFE6] px-2.5 py-1 rounded-md">
                    Before · Generic Profile
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#71675E]">Score:</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#F8F6F2] text-[#A14A08] border border-[#E8E2D9] tabular-nums">
                      <AnimatedScore value={BEFORE_EXAMPLE.score} startFromZero /> / 100
                    </span>
                  </div>
                </div>

                {/* Headline Box */}
                <div className="p-4 rounded-xl bg-[#F8F6F2] border border-[#E8E2D9] mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#71675E] mb-1.5 flex justify-between">
                    <span>Current Headline</span>
                    <span className="font-mono text-[10px] text-[#71675E]">{BEFORE_EXAMPLE.charCount} chars</span>
                  </div>
                  <p className="text-base font-semibold leading-snug text-[#71675E]">
                    &ldquo;{BEFORE_EXAMPLE.headline}&rdquo;
                  </p>
                </div>

                {/* 5 Deductions Breakdown */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#71675E] mb-2.5">
                    Clarity Deductions Found
                  </div>
                  <div className="space-y-2">
                    {BEFORE_EXAMPLE.checks.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={shouldReduceMotion ? undefined : { opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.05, duration: 0.2 }}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D9] text-xs"
                      >
                        <span className="font-semibold text-[#0A0A0A] flex items-center gap-2">
                          <X className="h-3.5 w-3.5 text-[#A14A08] flex-shrink-0" strokeWidth={2.5} />
                          {item.label}
                        </span>
                        <span className="text-[#71675E] text-[11px] text-right truncate ml-2">
                          {item.note}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0EBE1] text-xs text-[#71675E] italic">
                Prospect verdict: Vague proposition leads to passive scrolling.
              </div>
            </motion.div>

            {/* Right Card: After (AI Optimized) */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.15 } }}
              className="rounded-2xl p-6 sm:p-7 bg-white relative flex flex-col justify-between overflow-hidden"
              style={{
                border: "2px solid #F5B731",
                boxShadow: "0 10px 32px rgba(245,183,49,0.16)",
              }}
            >
              {/* Subtle light-catching top edge highlight */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5B731]/60 to-transparent pointer-events-none"
              />

              <div>
                {/* Header with High Score */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EBE1]">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: "rgba(245,183,49,0.18)", color: "#A14A08" }}
                  >
                    After · AI Optimized
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#A14A08]">Clarity Score:</span>
                    <span
                      className="text-xs font-black px-2.5 py-0.5 rounded border tabular-nums"
                      style={{
                        backgroundColor: "rgba(245,183,49,0.12)",
                        borderColor: "rgba(245,183,49,0.5)",
                        color: "#0A0A0A",
                      }}
                    >
                      <AnimatedScore value={currentAfter.score} startFromZero /> / 100
                    </span>
                  </div>
                </div>

                {/* Apple-style Angle Segmented Control */}
                <div className="mb-4">
                  <div
                    role="tablist"
                    aria-label="Optimized headline angles"
                    className="flex p-1 rounded-full border border-[#E8E2D9] bg-[#F8F6F2] relative"
                  >
                    {(Object.keys(AFTER_ANGLES) as AngleKey[]).map((key) => {
                      const isSelected = activeAngle === key;
                      const angle = AFTER_ANGLES[key];
                      return (
                        <button
                          key={key}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setActiveAngle(key)}
                          className="relative flex-1 py-1.5 text-xs font-bold rounded-full transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#F5B731] active:scale-[0.97] cursor-pointer"
                          style={{
                            color: isSelected ? "#0A0A0A" : "#71675E",
                          }}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId={shouldReduceMotion ? undefined : "activeAfterAngleHighlight"}
                              className="absolute inset-0 rounded-full bg-white shadow-sm border border-[#E0D9CE]"
                              transition={fluidSpring}
                            />
                          )}
                          <span className="relative z-10 whitespace-nowrap">
                            {angle.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animated Headline Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAfter.key}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    className="p-4 rounded-xl border relative mb-5"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(245,183,49,0.6)",
                      boxShadow: "0 2px 12px rgba(245,183,49,0.10)",
                    }}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#A14A08] mb-1.5 flex justify-between">
                      <span>Optimized Headline</span>
                      <span className="font-mono text-[10px] text-[#A14A08] font-bold">
                        {currentAfter.charCount} chars
                      </span>
                    </div>
                    <p className="text-base font-bold leading-snug text-[#0A0A0A]">
                      &ldquo;{currentAfter.headline}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* 5 Passing Checks */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#71675E] mb-2.5">
                    Positioning Benchmarks Passed
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAfter.key}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2"
                    >
                      {currentAfter.checks.map((item, idx) => (
                        <motion.div
                          key={item.label}
                          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04, duration: 0.2 }}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg border text-xs"
                          style={{
                            backgroundColor: "rgba(245,183,49,0.06)",
                            borderColor: "rgba(245,183,49,0.25)",
                          }}
                        >
                          <span className="font-bold text-[#0A0A0A] flex items-center gap-2">
                            <span
                              className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: "#F5B731" }}
                            >
                              <Check className="h-2.5 w-2.5 text-[#0A0A0A]" strokeWidth={3} />
                            </span>
                            {item.label}
                          </span>
                          <span className="text-[#0A0A0A] font-medium text-[11px] text-right truncate ml-2">
                            {item.note}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0EBE1] text-xs font-semibold text-[#A14A08] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B731]" />
                Prospect verdict: High differentiation and verifiable authority drive inbound replies.
              </div>
            </motion.div>
          </motion.div>

          {/* Primary Action Button with Tactile Motion Feedback */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.45 }}
            className="text-center mt-10"
          >
            <Button
              onClick={onStart}
              variant="hero"
              size="xl"
              className="rounded-full shadow-2xl group active:scale-[0.97] hover:scale-[1.02] transition-transform duration-150 ease-out cursor-pointer"
            >
              Audit My Profile
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
            </Button>
            <p className="mt-3 text-xs text-[#71675E] font-medium">
              Takes 2 minutes · No sign-up required · 100% Free
            </p>
          </motion.div>
        </div>
      </section>

      {/* What the audit actually checks with Staggered Scroll Reveal */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              What the audit actually checks
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Five algorithmic checks evaluated directly against your headline and About section.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCORE_CHECKS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ type: "spring", stiffness: 350, damping: 28, delay: index * 0.08 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.15 } }}
                  className="rounded-2xl p-6 border border-[#E8E2D9] bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] transition-colors duration-200 active:scale-[0.99] flex flex-col justify-between group"
                  style={{
                    gridColumn: index === SCORE_CHECKS.length - 1 ? "1 / -1" : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center border border-[#F5B731]/40"
                      style={{ backgroundColor: "rgba(245,183,49,0.12)" }}
                    >
                      <Icon className="h-5 w-5 text-[#A14A08]" />
                    </motion.div>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works with Staggered Scroll Reveal */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              How it works
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Three straightforward steps designed for busy founders and operators.
            </p>
          </motion.div>

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
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ type: "spring", stiffness: 350, damping: 28, delay: index * 0.12 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.15 } }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get free with Staggered Scroll Reveal */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-3">
              What you get, 100% free
            </h2>
            <p className="text-base text-[#71675E] leading-relaxed">
              Comprehensive positioning diagnostics and copy-paste assets ready for deployment.
            </p>
          </motion.div>

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
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ type: "spring", stiffness: 350, damping: 28, delay: index * 0.08 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.15 } }}
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
                </motion.div>
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
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-base sm:text-lg leading-relaxed text-[#3D3D3D]">
            Built by the same team that has scripted the outbound and positioning funnels behind{" "}
            <span className="font-bold text-[#0A0A0A]">12K+ B2B meetings booked</span> for high-growth companies.
          </p>
        </motion.div>
      </section>

      {/* Final closing CTA */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FEF9EC 0%, #FFFFFF 100%)",
          borderTop: "1px solid rgba(245,183,49,0.35)",
        }}
      >
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
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
            className="rounded-full shadow-2xl group active:scale-[0.97] hover:scale-[1.02] transition-transform duration-150 ease-out cursor-pointer"
          >
            Audit My Profile
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
          </Button>
        </motion.div>
      </section>

      <RelatedTools currentSlug="linkedin-optimizer" />
    </div>
  );
};

export default LandingPage;
