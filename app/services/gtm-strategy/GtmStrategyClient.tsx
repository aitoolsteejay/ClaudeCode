"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import JsonLd from "../../components/JsonLd";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildServiceSchema, buildHowToSchema, SITE_URL } from "@/lib/schema";

const SERVICE_SCHEMA = buildServiceSchema({
  name: "GTM Strategy",
  description: "We build your go-to-market strategy, ICP, positioning, and channel mix, then execute it across the channels you choose, so the plan doesn't sit in a slide deck.",
  serviceType: "Go-To-Market Strategy and Execution",
  url: `${SITE_URL}/services/gtm-strategy`,
});


/* ─── Data ──────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "GTM Audit & Market Mapping", desc: "We audit your current positioning, ICP, and channel performance, then map the competitive landscape to identify the highest-leverage channels for your specific buyer, not a generic best-practices checklist." },
  { n: "02", title: "ICP & Channel Mix Strategy", desc: "We define your ideal customer profile against real intent signals, then design the exact channel mix, cold email, LinkedIn, ABM, personal branding, and the sequencing that fits your sales motion and stage." },
  { n: "03", title: "Positioning & Messaging Framework", desc: "We build the core narrative, objection handling, and message-market fit framework every channel's copy is built from, so your LinkedIn posts, cold emails, and content all say the same thing." },
  { n: "04", title: "Execution & Monthly Iteration", desc: "We run the plan across the channels you choose, track real reply and booking data, and adjust the strategy monthly based on what's actually converting, not a plan set once in January and forgotten." },
];

const HOWTO_SCHEMA = buildHowToSchema(
  "How GTM Strategy Works",
  STEPS.map((s) => ({ name: s.title, text: s.desc }))
);

const DELIVERABLES = [
  "A documented GTM strategy: ICP, positioning, and channel mix",
  "Competitive landscape and market mapping analysis",
  "A messaging framework used consistently across every channel",
  "Channel prioritisation backed by real intent and reply data",
  "Monthly strategy review and iteration based on results",
  "Direct handoff to execution across cold email, LinkedIn, ABM, or personal branding",
];

const WHO_FOR = [
  { icon: "🚀", title: "Founders Raising or Scaling", desc: "Need a clear, defensible GTM plan before committing budget to any one channel, especially heading into a raise or a growth push." },
  { icon: "🎯", title: "Teams Entering a New ICP or Market", desc: "Expanding into a new vertical, segment, or geography and need the strategy re-mapped, not just more of the same tactics pointed at a new audience." },
  { icon: "📈", title: "Companies with Scattered Outbound", desc: "Already running cold email or LinkedIn in some form, but with no coordinated strategy tying channels, messaging, and ICP together." },
];

const FAQ_ITEMS = [
  {
    q: "What exactly is included in a GTM strategy engagement?",
    a: "ICP definition, competitive and market mapping, a channel mix and sequencing plan, a messaging framework, and a direct handoff to execution across whichever channels fit, cold email, LinkedIn, ABM, or personal branding. It's a plan built to be run, not a deck.",
  },
  {
    q: "Do you also execute the strategy, or just hand over a plan?",
    a: "Both. The same team that builds the GTM strategy runs it across the channels you choose, so there's no handoff gap between \"strategy\" and \"execution\" like there is when a consultant hands a plan to a separate agency and disappears.",
  },
  {
    q: "How is this different from your other services, like Cold Email or LinkedIn Outreach?",
    a: "Those are channel-specific execution services. GTM Strategy is the layer above them: it decides which channels to prioritise, what your ICP and messaging should be, and how they should sequence together, then feeds directly into whichever of those services you need.",
  },
  {
    q: "How long does the initial strategy phase take?",
    a: "Typically 2-3 weeks for the audit, ICP work, and channel mix plan, the same timeline discipline we apply across our outbound engagements, where the average time to a first real result is around 18 days.",
  },
  {
    q: "What if we already have a GTM strategy but it's not working?",
    a: "That's a common starting point, not a blocker. We audit what's already running, channels, messaging, and results, find where the current plan is leaking, and rebuild the parts that need it rather than starting from zero everywhere.",
  },
  {
    q: "Is this only for early-stage startups?",
    a: "No. It fits any B2B company changing its GTM: a new ICP, a new market, a stalled channel, or scaling what's already working. Stage changes the specifics of the plan, not the process we use to build it.",
  },
];

const BENEFITS = [
  "ICP Definition", "Channel Mix Strategy", "Positioning & Messaging", "Competitive Mapping",
  "Launch Sequencing", "Strategy + Execution", "Monthly Iteration", "Buyer Journey Mapping",
  "Cross-Channel Orchestration", "GTM Audit", "Growth Roadmap", "Message-Market Fit",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(8,145,178,0.4)", borderLeftColor: "#0891b2", borderLeftWidth: "3px", backgroundColor: "rgba(8,145,178,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(8,145,178,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? "#0891b2" : "#6B6B6B"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#52525B" }}>{a}</p>
      </div>
    </div>
  );
}

function BenefitChip({ label, i }: { label: string; i: number }) {
  const isTeal = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isTeal ? "linear-gradient(135deg,#fff 0%,#ECFEFF 100%)" : "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)",
        borderColor: isTeal ? "rgba(8,145,178,0.3)" : "rgba(245,183,49,0.35)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isTeal ? "#0891b2" : "#D97706" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function GtmStrategyClient() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const ctaBlob1 = useRef<HTMLDivElement>(null);
  const ctaBlob2 = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Blob parallax: hero */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (blob1.current) {
        blob1.current.style.transform = `translate(${Math.sin(t * 0.7) * 200 + Math.sin(t * 0.3) * 70}px, ${Math.cos(t * 0.5) * 140 + Math.cos(t * 0.2) * 50}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${Math.sin(t * 0.6 + 2) * 200 + Math.cos(t * 0.4) * 70}px, ${Math.cos(t * 0.7 + 1) * 140 + Math.sin(t * 0.3) * 50}px)`;
      }
      if (blob3.current) {
        blob3.current.style.transform = `translate(${Math.sin(t * 0.55 + 4) * 180 + Math.sin(t * 0.35) * 60}px, ${Math.cos(t * 0.65 + 2) * 160 + Math.cos(t * 0.45) * 50}px)`;
      }
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  /* Blob parallax: CTA */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (ctaBlob1.current) {
        ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.8) * 300 + Math.sin(t * 0.3) * 90}px, ${Math.cos(t * 0.6) * 130 + Math.cos(t * 0.25) * 55}px)`;
      }
      if (ctaBlob2.current) {
        ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.7 + 2) * 300 + Math.cos(t * 0.4) * 90}px, ${Math.cos(t * 0.8 + 1) * 130 + Math.sin(t * 0.35) * 55}px)`;
      }
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  /* Draw-in underline */
  useEffect(() => {
    const path = underlineRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    const timer = setTimeout(() => {
      let start: number | null = null;
      const dur = 1200;
      function draw(ts: number) {
        if (!path) return;
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        path.style.strokeDashoffset = String(len * (1 - e));
        if (p < 1) requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const doubled = [...BENEFITS, ...BENEFITS];

  return (
    <InnerLayout>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={HOWTO_SCHEMA} />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, rgba(8,145,178,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "GTM Strategy", href: "/services/gtm-strategy" }]} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(8,145,178,0.35)", background: "rgba(8,145,178,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#0891b2" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0891b2" }}>GTM Strategy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            A GTM strategy that{" "}
            <span className="relative inline-block">
              actually gets executed.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 620 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q150 2 310 6 Q470 10 618 5" stroke="#0891b2" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            We build the plan, ICP, positioning, channel mix, and sequencing, then run it across the channels you choose. Not a slide deck that sits in a drive folder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="/founder-meeting"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Get a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/case-studies" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              See Real Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { init: "300+", label: "B2B companies trust Myntmore" },
            { init: "18 days", label: "Average time to a first real result" },
            { init: "3.2x", label: "Higher reply rate than industry average" },
          ].map((s, i) => (
            <div key={i} className={`${i < 2 ? "sm:border-r" : ""} px-4`} style={{ borderColor: "#E8E2D9" }}>
              <span className="block text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.init}</span>
              <span className="text-sm" style={{ color: "#8C8279" }}>{s.label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-6" style={{ color: "#8C8279" }}>Sitewide figures across our outbound engagements, the same team and system this GTM strategy hands off to.</p>
      </div>

      {/* ── Benefits marquee ─────────────────────────────────── */}
      <div className="py-8 overflow-hidden border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 30s linear infinite" }}>
          {doubled.map((label, i) => <BenefitChip key={i} label={label} i={i} />)}
        </div>
      </div>

      {/* ── The problem ──────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.2)" }}>
                The Problem
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
                Most GTM plans never leave the slide deck
              </h2>
              <div className="space-y-4">
                {[
                  "Generic frameworks copy-pasted from a template, not built around your actual buyer",
                  "Every channel gets a little budget instead of a clear sequencing and priority",
                  "Strategy and execution live with different teams, and the handoff loses everything",
                  "The plan is set once and never revisited, no matter what the data says",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.2)" }}>
                The Myntmore Way
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
                We build the plan and run it, one team, one system
              </h2>
              <div className="space-y-4">
                {[
                  "ICP and channel mix backed by real intent signals, not a best-practices checklist",
                  "One messaging framework every channel's copy is built from, so nothing contradicts",
                  "The same team builds the strategy and executes it, no handoff gap to lose momentum in",
                  "Strategy reviewed and adjusted monthly against real reply and booking data",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(8,145,178,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#0891b2" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.2)" }}>
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>Strategy first. Execution second. Iteration every month after that.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(8,145,178,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(8,145,178,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "rgba(8,145,178,0.1)", color: "#0891b2" }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  </div>
                </div>
                {i % 2 === 0 && i < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#0891b2" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables + Who it's for ───────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.2)" }}>
              What You Get
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(8,145,178,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#0891b2" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Who It&apos;s For
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for teams making a real GTM decision</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(8,145,178,0.35)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{w.icon}</span>
                    <h3 className="text-base font-black" style={{ color: "#0a0a0a" }}>{w.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GTM Strategy in action ────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Client Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>GTM strategy in action</h2>
          </div>
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3D3D3D" }}>
              A bootstrapped B2B founder had deep expertise but no coordinated GTM plan tying their positioning, LinkedIn presence, and outreach together. We built the strategy, ICP, messaging, and channel sequencing, then ran it: a founder personal-brand engine feeding warm inbound alongside targeted LinkedIn outreach.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-6">
              {[{ v: "22K", l: "LinkedIn followers" }, { v: "8", l: "Inbound deals" }, { v: "6.2%", l: "Engagement rate" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black" style={{ color: "#0891b2" }}>{s.v}</div>
                  <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/case-studies/founder-personal-brand-linkedin" className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              style={{ color: "#0891b2" }}>
              Read how a founder went from 0 to 22K followers and 8 deals
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.2)" }}>
              FAQ
            </span>
            <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, rgba(8,145,178,0.09) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Get a GTM strategy<br /><span style={{ color: "#0891b2" }}>built to be run</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            We&apos;ll audit your current GTM, ICP, positioning, and channels, and show you exactly where the plan is leaking, for free.
          </p>

          <a href="/founder-meeting"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book a Free GTM Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>No commitment. We&apos;ll show you the gaps before you decide anything.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["Strategy live in 2-3 weeks", "Same team builds and runs it", "Reviewed and adjusted monthly"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#F5B731" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
