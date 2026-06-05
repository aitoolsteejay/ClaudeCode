"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

const STEPS = [
  { n: "01", title: "ICP & Agent Setup", desc: "We map your Ideal Customer Profile in detail, then configure custom AI agents with your specific qualification criteria, triggers, and scoring weights." },
  { n: "02", title: "Data Sourcing & Enrichment", desc: "Agents pull from LinkedIn, company websites, news signals, and financial reports to build a full intelligence picture on every account." },
  { n: "03", title: "Lead Scoring & Prioritisation", desc: "Leads are ranked by fit and intent. Your team only ever sees the top tier — accounts worth their time, not raw lists." },
  { n: "04", title: "CRM Export & Handoff", desc: "Scored leads push automatically to your CRM with full research summaries attached. No manual reformatting. No lost context." },
];

const DELIVERABLES = [
  "AI-scored lead lists with deep qualification",
  "Research summaries on every prospect",
  "CRM-ready exports mapped to your fields",
  "Weekly pipeline health and volume reports",
  "Automated lead routing and prioritisation",
  "Custom AI agent infrastructure for your team",
];

const WHO_FOR = [
  { icon: "⚡", title: "High Volume GTM Teams", desc: "Teams processing thousands of accounts per month who can't sacrifice quality or personalisation for speed." },
  { icon: "🚀", title: "Growth Stage Companies", desc: "Businesses moving from founder-led sales to a repeatable system that runs without constant manual input." },
  { icon: "🎯", title: "ABM Teams", desc: "Account-based teams that need deep account-level research at scale to power high-impact outbound campaigns." },
];

const TESTIMONIALS = [
  {
    quote: "We went from spending 4 hours a day manually qualifying leads to getting 400 scored, research-enriched prospects in our CRM every week. Our AE now walks into every call knowing exactly what the company does and why they're a fit.",
    name: "Head of Sales",
    co: "Series A SaaS · Fintech",
    color: "#3b82f6",
  },
  {
    quote: "Myntmore's AI agents found buying signals we never would have caught manually. A news article about a funding round, a job posting for a VP of Sales — these became conversation starters that got us replies from accounts we'd been cold-calling for months.",
    name: "Founder & CEO",
    co: "B2B HR Tech",
    color: "#7C3AED",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does the AI actually do versus your human team?",
    a: "The AI handles research, enrichment, and scoring at scale — pulling data from multiple sources, cross-referencing signals, and ranking leads by fit and intent. Our human team configures the agents, audits output for quality, writes the strategic layer, and makes sure nothing reaches your sales team without being genuinely useful.",
  },
  {
    q: "How accurate is the lead scoring?",
    a: "With a well-defined ICP, our scoring model runs at roughly 85–90% relevance on the top tier. We build in a feedback loop — your team flags false positives and the model adjusts over time. Accuracy compounds month over month.",
  },
  {
    q: "Which CRMs do you export to?",
    a: "HubSpot, Salesforce, Pipedrive, Zoho, and Notion databases are all supported natively. If you use something else, we export a clean CSV mapped to your existing fields. No manual reformatting on your end.",
  },
  {
    q: "How many leads can you generate per month?",
    a: "For most B2B clients with a defined ICP we deliver 300 to 1,500 scored, research-enriched leads per month. Volume is never the goal — relevance is. 200 right-fit leads beat 2,000 cold ones every time.",
  },
  {
    q: "Will this work for a niche industry with a small TAM?",
    a: "Often better than broad markets. A smaller TAM means we go deeper on each account, track more specific signals, and personalise outreach at a level generic tools can't. Some of our best results come from clients with a TAM under 5,000 accounts.",
  },
];

const BENEFITS = [
  "AI-scored leads", "24/7 agent operation", "Research summaries", "CRM-ready exports",
  "Intent signal tracking", "Account enrichment", "ICP refinement", "Pipeline velocity",
  "No manual research", "Qualify at scale", "Reduce cost per lead", "Boost reply rates",
];

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(59,130,246,0.4)", borderLeftColor: "#3b82f6", borderLeftWidth: "3px", backgroundColor: "rgba(59,130,246,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(59,130,246,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? "#3b82f6" : "#6B6B6B"} strokeWidth={2.5}>
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
  const isBlue = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isBlue ? "linear-gradient(135deg,#fff 0%,#EFF6FF 100%)" : "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)",
        borderColor: isBlue ? "rgba(59,130,246,0.3)" : "rgba(245,183,49,0.35)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isBlue ? "#3b82f6" : "#D97706" }} />
      {label}
    </span>
  );
}

export default function AILeadGeneration() {
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

  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.7) * 200 + Math.sin(t * 0.3) * 70}px, ${Math.cos(t * 0.5) * 140 + Math.cos(t * 0.2) * 50}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.6 + 2) * 200 + Math.cos(t * 0.4) * 70}px, ${Math.cos(t * 0.7 + 1) * 140 + Math.sin(t * 0.3) * 50}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.55 + 4) * 180 + Math.sin(t * 0.35) * 60}px, ${Math.cos(t * 0.65 + 2) * 160 + Math.cos(t * 0.45) * 50}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (ctaBlob1.current) ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.8) * 300 + Math.sin(t * 0.3) * 90}px, ${Math.cos(t * 0.6) * 130 + Math.cos(t * 0.25) * 55}px)`;
      if (ctaBlob2.current) ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.7 + 2) * 300 + Math.cos(t * 0.4) * 90}px, ${Math.cos(t * 0.8 + 1) * 130 + Math.sin(t * 0.35) * 55}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

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

  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsTriggered) {
        setStatsTriggered(true);
        [
          { ref: stat1Ref, end: 1500, suffix: "+" },
          { ref: stat2Ref, end: 80, suffix: "%" },
          { ref: stat3Ref, end: 38, suffix: "%" },
        ].forEach(({ ref, end, suffix }) => {
          let s: number | null = null;
          const dur = 1800;
          function tick(ts: number) {
            if (!s) s = ts;
            const p = Math.min((ts - s) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            if (ref.current) ref.current.textContent = Math.round(e * end) + suffix;
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-xs font-semibold" style={{ color: "#8C8279" }}>Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>AI Lead Generation</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#3b82f6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#3b82f6" }}>AI Lead Generation</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Your pipeline shouldn&apos;t depend<br />
            <span className="relative inline-block">
              on how much time
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 400 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q100 2 200 6 Q300 10 398 5" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            your team has.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>Custom AI agents research, qualify, and prioritise leads at scale — so your sales team only talks to people worth their time.</p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Get a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/case-studies" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">See Real Results</Link>
          </div>
        </div>
      </section>

      <div ref={statsContainerRef} className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { ref: stat1Ref, init: "1500+", label: "Scored leads delivered per month" },
            { ref: stat2Ref, init: "80%", label: "Reduction in manual research time" },
            { ref: stat3Ref, init: "38%", label: "Average reply rate across accounts" },
          ].map((s, i) => (
            <div key={i} className={`${i < 2 ? "sm:border-r" : ""} px-4`} style={{ borderColor: "#E8E2D9" }}>
              <span ref={s.ref} className="block text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.init}</span>
              <span className="text-sm" style={{ color: "#8C8279" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 overflow-hidden border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 30s linear infinite" }}>
          {doubled.map((label, i) => <BenefitChip key={i} label={label} i={i} />)}
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.2)" }}>The Problem</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>Traditional lead gen is a time tax on your best people.</h2>
              <div className="space-y-4">
                {["Your AE spends 3–4 hours a day manually searching LinkedIn","Lists are stale by the time they get to outreach","No context means cold, generic messages that get ignored","You scale headcount instead of output"].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>The Myntmore Way</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>AI agents handle the intelligence layer. Your team handles the deals.</h2>
              <div className="space-y-4">
                {["Custom agents research and enrich 1,000+ accounts per month","Real-time signals: funding news, hiring patterns, job posts","Every lead arrives with a full research summary attached","Scale output without scaling headcount"].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(59,130,246,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>The Process</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(59,130,246,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black" style={{ backgroundColor: "rgba(59,130,246,0.1)", color: "#3b82f6" }}>{s.n}</div>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  </div>
                </div>
                {i % 2 === 0 && i < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>What You Get</span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(59,130,246,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Who It&apos;s For</span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for teams like yours</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.35)"; }}
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

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Client Results</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>What clients say</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border p-8 relative" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="absolute top-6 right-6 text-5xl font-black leading-none select-none" style={{ color: t.color, opacity: 0.15 }}>&ldquo;</div>
                <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "#3D3D3D" }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor: `${t.color}15`, color: t.color }}>{t.name[0]}</div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#0a0a0a" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#8C8279" }}>{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: "#3b82f6" }}>
              Read the full case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>FAQ</span>
            <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8" style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Ready to let AI<br /><span style={{ color: "#3b82f6" }}>fill your pipeline?</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>We&apos;ll configure a custom AI lead generation setup for your ICP in <span className="font-semibold" style={{ color: "#0a0a0a" }}>7 days</span>. No generic lists. No wasted budget.</p>
          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book Your Free GTM Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>No commitment. No fluff. Just a real conversation about your growth.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["Setup in 7 days", "Custom AI agents for your ICP", "Results or we make it right"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#F5B731" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
