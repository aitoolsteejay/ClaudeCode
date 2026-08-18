"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import JsonLd from "../../components/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema, buildHowToSchema, SITE_URL } from "@/lib/schema";

const SERVICE_SCHEMA = buildServiceSchema({
  name: "Account-Based Marketing",
  description: "Coordinated multi-channel campaigns across email and LinkedIn that engage the entire buying committee at your highest-value target accounts, so your AE isn't the first name they've seen.",
  serviceType: "Account-Based Marketing",
  url: `${SITE_URL}/services/account-based-marketing`,
});

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/services` },
  { name: "Account-Based Marketing", url: `${SITE_URL}/services/account-based-marketing` },
]);

/* ─── Data ──────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "Target Account Selection", desc: "We build a tiered list of your highest-value target accounts, scored against your ICP, deal size, and buying-intent signals. Tier 1 gets the most coordinated attention; Tier 3 stays on a lighter-touch cadence." },
  { n: "02", title: "Multi-Channel Campaign Design", desc: "LinkedIn outreach, email sequences, and (where relevant) retargeting are planned around the same account list, timed to reinforce each other instead of running as separate, uncoordinated efforts." },
  { n: "03", title: "Buying Committee Engagement", desc: "We identify and message multiple stakeholders per account, not just one contact, so by the time your AE reaches out, several people at the account already recognise your name." },
  { n: "04", title: "Sales Handoff & Reporting", desc: "Engagement data (who opened, replied, clicked, or accepted) rolls up into account-level reporting and pushes to your CRM, so your sales team walks into every conversation with full context." },
];

const HOWTO_SCHEMA = buildHowToSchema(
  "How Account-Based Marketing Works",
  STEPS.map((s) => ({ name: s.title, text: s.desc }))
);

const DELIVERABLES = [
  "Tiered target account list built from your ICP and deal-size criteria",
  "Coordinated LinkedIn + email campaigns run against the same account list",
  "Multi-threaded messaging to reach multiple stakeholders per account",
  "Account-level engagement reporting and attribution",
  "Structured sales handoff so your AEs open with full context",
  "Monthly account tiering review and list refresh",
];

const WHO_FOR = [
  { icon: "🏢", title: "Enterprise & Complex-Sale Teams", desc: "Long sales cycles with multiple stakeholders per deal, where reaching one contact isn't enough to move an account forward." },
  { icon: "🎯", title: "Finite Target-Account Teams", desc: "A defined universe of accounts worth going deep on, not a broad-market volume play. Quality of engagement per account matters more than raw contact count." },
  { icon: "🤝", title: "RevOps & Marketing Leaders", desc: "Teams that want sales and marketing coordinated around the same named accounts, instead of running two disconnected motions that never reinforce each other." },
];

const TESTIMONIALS = [
  {
    quote: "We had a list of 80 target accounts and no real plan for reaching more than one person at each. Myntmore built the tiering and the multi-channel sequencing, and within a quarter we had multiple stakeholders engaged at our top accounts before a single AE call happened.",
    name: "VP Marketing",
    co: "B2B SaaS · Series B",
    color: "#6366f1",
  },
  {
    quote: "The account-level reporting alone changed how our sales and marketing teams talk to each other. Everyone can see exactly who's been touched, on which channel, and what they engaged with, before the first sales call is even booked.",
    name: "Head of RevOps",
    co: "Enterprise Software",
    color: "#D97706",
  },
];

const FAQ_ITEMS = [
  {
    q: "How is this different from your other lead generation services?",
    a: "Our other services (cold email, LinkedIn outreach, AI lead gen) are built to generate volume across a broad ICP. ABM flips that: you give us a defined, finite list of named accounts you specifically want to win, and we run coordinated campaigns to engage multiple people inside each one, not just cast a wide net.",
  },
  {
    q: "How many accounts can this realistically cover?",
    a: "Most engagements run 50 to 250 named accounts, tiered by priority. Tier 1 accounts (your highest-value targets) get the most coordinated, multi-stakeholder attention; lower tiers run on a lighter cadence. The right number depends on your team's capacity to follow up once accounts start engaging.",
  },
  {
    q: "Which channels are included?",
    a: "LinkedIn outreach and email are the core channels, run in a coordinated sequence against the same account list rather than as separate campaigns. Where it fits your budget and audience, we can layer in LinkedIn ad retargeting for additional account-level visibility.",
  },
  {
    q: "How does the handoff to our sales team actually work?",
    a: "Every account gets an engagement record: who was contacted, on which channel, what they opened or replied to, and how engaged the account is overall. That rolls into your CRM so your AE walks into the first conversation already knowing which stakeholders are warm and why.",
  },
  {
    q: "What size company or deal size is this built for?",
    a: "ABM makes the most sense once your average deal size and sales cycle justify a multi-touch, multi-stakeholder approach, typically mid-market and enterprise B2B deals with several decision-makers involved. For simpler, single-stakeholder sales motions, our LinkedIn outreach or cold email services are usually a better fit.",
  },
];

const BENEFITS = [
  "Tiered account lists", "Multi-channel campaigns", "Buying committee reach", "Account-level reporting",
  "Sales handoff", "LinkedIn + email", "Intent-based targeting", "Named account focus",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(99,102,241,0.4)", borderLeftColor: "#6366f1", borderLeftWidth: "3px", backgroundColor: "rgba(99,102,241,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(99,102,241,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? "#6366f1" : "#6B6B6B"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "300px" : "0px" }}>
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#52525B" }}>{a}</p>
      </div>
    </div>
  );
}

function BenefitChip({ label, i }: { label: string; i: number }) {
  const isIndigo = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isIndigo ? "linear-gradient(135deg,#fff 0%,#EEF2FF 100%)" : "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)",
        borderColor: isIndigo ? "rgba(99,102,241,0.3)" : "rgba(245,183,49,0.35)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isIndigo ? "#6366f1" : "#D97706" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function AccountBasedMarketingClient() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const ctaBlob1 = useRef<HTMLDivElement>(null);
  const ctaBlob2 = useRef<HTMLDivElement>(null);

  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  /* Blob parallax: hero */
  useEffect(() => {
    if (window.innerWidth < 768) return; // skip blob animation on mobile
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
    if (window.innerWidth < 768) return; // skip blob animation on mobile
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

  /* Number tickers */
  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsTriggered) {
        setStatsTriggered(true);
        [
          { ref: stat1Ref, end: 64, suffix: "x", decimals: 1 },
          { ref: stat2Ref, end: 3, suffix: "+" },
          { ref: stat3Ref, end: 12, suffix: "K+" },
        ].forEach(({ ref, end, suffix, decimals }) => {
          let s: number | null = null;
          const dur = 1800;
          function tick(ts: number) {
            if (!s) s = ts;
            const p = Math.min((ts - s) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            if (ref.current) {
              if (decimals === 1) {
                ref.current.textContent = (e * end / 10).toFixed(1) + suffix;
              } else {
                ref.current.textContent = Math.round(e * end) + suffix;
              }
            }
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [statsTriggered]);

  const doubled = [...BENEFITS, ...BENEFITS];

  return (
    <InnerLayout>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={BREADCRUMB_SCHEMA} />
      <JsonLd data={HOWTO_SCHEMA} />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(79,70,229,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-xs font-semibold" style={{ color: "#8C8279" }}>Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Account-Based Marketing</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#6366f1" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#6366f1" }}>Account-Based Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Stop marketing to{" "}
            <span className="relative inline-block">
              everyone.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 330 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q82 2 165 6 Q248 10 328 5" stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <br />Go all-in on the accounts that matter.
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Coordinated multi-channel campaigns across email and LinkedIn engage the entire buying committee at your highest-value target accounts, so your AE isn&apos;t the first name they&apos;ve seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="/founder-meeting"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Build Your Target Account List
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/case-studies" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              See Real Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div ref={statsContainerRef} className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { ref: stat1Ref, init: "6.4x", label: "Higher average deal size on engaged accounts" },
            { ref: stat2Ref, init: "3+", label: "Channels orchestrated per account" },
            { ref: stat3Ref, init: "12K+", label: "Meetings booked for clients across all services" },
          ].map((s, i) => (
            <div key={i} className={`${i < 2 ? "sm:border-r" : ""} px-4`} style={{ borderColor: "#E8E2D9" }}>
              <span ref={s.ref} className="block text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.init}</span>
              <span className="text-sm" style={{ color: "#8C8279" }}>{s.label}</span>
            </div>
          ))}
        </div>
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
                One contact at an account isn&apos;t a strategy
              </h2>
              <div className="space-y-4">
                {[
                  "Your best-fit accounts have 5-8 stakeholders in the buying decision, not one",
                  "Broad-market outreach treats a $500K enterprise deal the same as a $2K self-serve signup",
                  "Sales and marketing run separate motions on the same accounts with no shared context",
                  "By the time an AE calls, the account has never heard of you, or worse, only heard from a bot",
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
                style={{ backgroundColor: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}>
                The Myntmore Way
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
                Coordinated campaigns, built around named accounts
              </h2>
              <div className="space-y-4">
                {[
                  "Every target account gets a tier, and a plan matched to how much it's worth winning",
                  "LinkedIn and email work together against the same account, not as separate campaigns",
                  "Multiple stakeholders per account see consistent messaging before your AE ever calls",
                  "Sales sees exactly who's engaged and why, before the first conversation happens",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(99,102,241,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth={3}>
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
              style={{ backgroundColor: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}>
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>Account tiering first. Coordinated multi-channel campaigns second. Your sales team armed with full context by the first call.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(99,102,241,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "rgba(99,102,241,0.1)", color: "#6366f1" }}>
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
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth={2.5}>
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
              style={{ backgroundColor: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}>
              What You Get
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(99,102,241,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth={3}>
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
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for teams going deep on a defined list</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)"; }}
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

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Client Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>What clients say</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border p-8 relative" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="absolute top-6 right-6 text-5xl font-black leading-none select-none" style={{ color: t.color, opacity: 0.15 }}>&ldquo;</div>
                <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "#3D3D3D" }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{ backgroundColor: `${t.color}15`, color: t.color }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#0a0a0a" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#8C8279" }}>{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              style={{ color: "#6366f1" }}>
              Read the full case studies
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
              style={{ backgroundColor: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}>
              FAQ
            </span>
            <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(79,70,229,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Go deep on the<br /><span style={{ color: "#6366f1" }}>accounts that matter</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Book a free session and we&apos;ll map out how a target-account campaign would run against your actual highest-value accounts.
          </p>

          <a href="/founder-meeting"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Map Your Target Accounts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>No commitment. Just a live look at what a coordinated campaign looks like for your accounts.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["Tiered account targeting", "Multi-channel coordination", "Results or we make it right"].map((item) => (
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
