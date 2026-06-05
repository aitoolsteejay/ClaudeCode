"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

/* ─── Data ──────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "ICP & Signal Mapping", desc: "We map your Ideal Customer Profile in precise detail, then identify the 40+ intent signals that indicate an account is actively in-market — funding rounds, hiring patterns, tech stack changes, leadership moves, and more." },
  { n: "02", title: "Daily List Building & Enrichment", desc: "Our system monitors signal sources daily and surfaces accounts matching your ICP the moment they enter buying mode. Every account is enriched with company data, tech stack, headcount, and decision-maker contacts." },
  { n: "03", title: "Account Scoring & Prioritisation", desc: "Accounts are scored by signal strength, ICP fit, and engagement indicators. Your team sees a prioritised view — the 10% of accounts worth focusing on this week, not a raw list of thousands to triage manually." },
  { n: "04", title: "CRM Export & Signal Dashboard", desc: "Scored accounts push to your CRM daily with full signal context attached. The signal dashboard shows you what triggered each account, so your outreach opens with the exact insight that makes it relevant." },
];

const DELIVERABLES = [
  "40+ intent signal monitoring across your target market",
  "Daily list refresh with trigger-based account surfacing",
  "Account scoring by fit, intent, and signal strength",
  "CRM-ready exports with full signal context attached",
  "ICP mapping and scoring model calibration",
  "Signal dashboard showing real-time in-market accounts",
];

const WHO_FOR = [
  { icon: "🎯", title: "ABM & Outbound Teams", desc: "Teams running account-based campaigns who need to know which accounts to prioritise this week, not which ones fit the ICP in theory." },
  { icon: "⚡", title: "High-Velocity Sales Teams", desc: "Sales organisations processing large account universes who need a system that surfaces the right 200 accounts from a TAM of 10,000." },
  { icon: "🔬", title: "Revenue Operations Leaders", desc: "RevOps professionals building a signal-led pipeline infrastructure that replaces bought lists with continuously refreshed, context-rich account intelligence." },
];

const TESTIMONIALS = [
  {
    quote: "We used to buy lists and pray. Myntmore's signal intelligence showed us accounts that had just hired a VP of Sales, raised a round, and switched off a competitor's tool — all in the same week. We called them first. Our pipeline conversion went up 4x.",
    name: "Head of Revenue",
    co: "Series B SaaS · HR Tech",
    color: "#a855f7",
  },
  {
    quote: "The signal dashboard changed how we think about outbound entirely. Instead of asking 'who should we target?' we now ask 'who is signalling right now?' That shift alone has been worth more than anything else we've invested in for GTM.",
    name: "Founder & CEO",
    co: "B2B FinTech · Series A",
    color: "#D97706",
  },
];

const FAQ_ITEMS = [
  {
    q: "What kinds of signals do you track?",
    a: "We track 40+ signal types across five categories: funding events, hiring activity, technology changes, competitive displacement, and behavioural triggers like content engagement and job posting language. The signals we prioritise for each client depend on what has historically correlated with a buying decision in your specific market.",
  },
  {
    q: "How is this different from a bought list?",
    a: "A bought list gives you names and job titles — no context, no timing, no indication of intent. Signal-led intelligence gives you accounts that are actively showing buying behaviour right now. You know why they're on the list, what triggered them, and exactly what to say in your first message to make it land.",
  },
  {
    q: "How often is the data refreshed?",
    a: "The signal feed refreshes daily. Accounts that hit your trigger criteria this week appear in your CRM or dashboard by the next morning. This is the core advantage over static lists — you're always working with the freshest possible view of who is in-market.",
  },
  {
    q: "Which CRMs do you export to?",
    a: "HubSpot, Salesforce, Pipedrive, Zoho, and Notion databases are all supported natively. If you use something else, we export a clean CSV mapped to your existing fields with signal context columns included. No manual reformatting required.",
  },
  {
    q: "What's the typical pipeline impact?",
    a: "Clients who switch from bought lists to signal-led outreach typically see 3–5x improvement in pipeline conversion within 90 days. The exact number depends on how well-defined your ICP is and how quickly your team adopts signal-triggered outreach. We build in a calibration period of 30 days to tune the scoring model to your market.",
  },
];

const BENEFITS = [
  "40+ intent signals", "Daily list refresh", "Trigger-based leads", "Funding signals",
  "Hiring patterns", "Tech stack changes", "CRM-ready exports", "Account scoring",
  "ICP mapping", "Signal dashboard", "Competitive intel", "Real-time data",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(168,85,247,0.4)", borderLeftColor: "#a855f7", borderLeftWidth: "3px", backgroundColor: "rgba(168,85,247,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(168,85,247,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? "#a855f7" : "#6B6B6B"} strokeWidth={2.5}>
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
  const isPurple = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isPurple ? "linear-gradient(135deg,#fff 0%,#FAF5FF 100%)" : "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)",
        borderColor: isPurple ? "rgba(168,85,247,0.3)" : "rgba(245,183,49,0.35)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isPurple ? "#a855f7" : "#D97706" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function SalesIntelligence() {
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

  /* Blob parallax — hero */
  useEffect(() => {
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

  /* Blob parallax — CTA */
  useEffect(() => {
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
          { ref: stat1Ref, end: 40, suffix: "+" },
          { ref: stat2Ref, end: 42, suffix: "x", decimals: 1 },
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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-xs font-semibold" style={{ color: "#8C8279" }}>Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Sales Intelligence</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#a855f7" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#a855f7" }}>Sales Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Know exactly who is{" "}
            <span className="relative inline-block">
              ready to buy.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 330 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q82 2 165 6 Q248 10 328 5" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <br />Before your competitors do.
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            We monitor 40+ buying signals daily — funding rounds, hiring surges, tech stack changes — so you reach in-market accounts the moment they enter the buying window.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              See Who&apos;s In-Market Now
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
            { ref: stat1Ref, init: "40+", label: "Intent signals tracked across your market" },
            { ref: stat2Ref, init: "4.2x", label: "Average pipeline lift vs bought lists" },
            { ref: stat3Ref, init: "12K+", label: "Meetings booked for clients via signal intelligence" },
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
                Bought lists are cold names with no context.
              </h2>
              <div className="space-y-4">
                {[
                  "Static lists go stale — accounts that were in-market 6 months ago aren't today",
                  "No signal context means every outreach starts from zero trust",
                  "You're competing with 10 other vendors all working the same outdated list",
                  "Your team wastes hours triaging thousands of accounts with no way to prioritise",
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
                style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>
                The Myntmore Way
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
                Signal-led lists — accounts ready to buy now.
              </h2>
              <div className="space-y-4">
                {[
                  "Daily signal refresh means you always see who just entered the buying window",
                  "40+ triggers give your reps a reason to reach out that lands every time",
                  "You reach accounts before competitors because you see the signals first",
                  "Prioritised scoring means your team focuses on the 10% worth acting on now",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(168,85,247,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={3}>
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
              style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>Signal mapping first. Daily intelligence feed second. Your reps armed with context from day one.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(168,85,247,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "rgba(168,85,247,0.1)", color: "#a855f7" }}>
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
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2.5}>
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
              style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>
              What You Get
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(168,85,247,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={3}>
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
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for teams tired of guessing who to call</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.35)"; }}
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
              style={{ color: "#a855f7" }}>
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
              style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>
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
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Ready to see who&apos;s<br /><span style={{ color: "#a855f7" }}>in-market right now?</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Book a free session and we&apos;ll show you the signals firing in your target market today — accounts your competitors don&apos;t know are in the buying window yet.
          </p>

          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            See Your In-Market Accounts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5
          text-sm" style={{ color: "#6B6B6B" }}>No commitment. Just a live look at the signal data for your market.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["Daily signal refresh", "40+ intent triggers", "Results or we make it right"].map((item) => (
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
