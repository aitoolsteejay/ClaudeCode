"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";

// ── Blob parallax ──────────────────────────────────────────────────────────────
function Blobs() {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame: number;
    const tick = (t: number) => {
      const s = t / 1000;
      if (b1.current) { b1.current.style.transform = `translate(${Math.sin(s * 0.4) * 28}px,${Math.cos(s * 0.3) * 22}px)`; }
      if (b2.current) { b2.current.style.transform = `translate(${Math.cos(s * 0.35) * 32}px,${Math.sin(s * 0.45) * 18}px)`; }
      if (b3.current) { b3.current.style.transform = `translate(${Math.sin(s * 0.5) * 20}px,${Math.cos(s * 0.4) * 26}px)`; }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div ref={b1} className="absolute rounded-full blur-3xl opacity-25" style={{ width: 520, height: 520, background: "radial-gradient(circle,#F5B731,transparent 70%)", top: "-120px", right: "-80px" }} />
      <div ref={b2} className="absolute rounded-full blur-3xl opacity-20" style={{ width: 400, height: 400, background: "radial-gradient(circle,#a855f7,transparent 70%)", bottom: "-60px", left: "-60px" }} />
      <div ref={b3} className="absolute rounded-full blur-3xl opacity-15" style={{ width: 320, height: 320, background: "radial-gradient(circle,#3b82f6,transparent 70%)", top: "40%", left: "30%" }} />
    </div>
  );
}

// ── SVG underline ──────────────────────────────────────────────────────────────
function Underline() {
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    if (!pathRef.current) return;
    const l = pathRef.current.getTotalLength();
    setLen(l);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setDrawn(true); io.disconnect(); } }, { threshold: 0.6 });
    io.observe(pathRef.current);
    return () => io.disconnect();
  }, []);
  return (
    <svg viewBox="0 0 340 14" className="absolute -bottom-2 left-0 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path ref={pathRef} d="M4 9 Q85 3 170 9 Q255 15 336 7" stroke="#F5B731" strokeWidth="3.5" strokeLinecap="round"
        strokeDasharray={len || 400} strokeDashoffset={drawn ? 0 : len || 400}
        style={{ transition: drawn ? "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)" : "none" }} />
    </svg>
  );
}

// ── Number ticker ──────────────────────────────────────────────────────────────
function Ticker({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(numeric)) { setDisplay(value); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const step = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const cur = numeric * eased;
        setDisplay((Number.isInteger(numeric) ? Math.round(cur) : cur.toFixed(1)) + suffix);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{display}</span>;
}

// ── Chip marquee ───────────────────────────────────────────────────────────────
const CHIPS = ["AI Lead Generation","Cold Email Infrastructure","LinkedIn Outreach","Personal Branding","Sales Intelligence","GTM Strategy","ICP Mapping","Pipeline Building","Outbound Automation","Multi-Channel Sequences"];
function Marquee() {
  const items = [...CHIPS, ...CHIPS];
  return (
    <div className="overflow-hidden py-4" aria-hidden>
      <div className="flex gap-3 animate-[marquee-left_28s_linear_infinite] w-max">
        {items.map((c, i) => (
          <span key={i} className="whitespace-nowrap text-xs font-semibold px-4 py-2 rounded-full border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#52525B" }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

// ── Stat strip ─────────────────────────────────────────────────────────────────
const STATS = [{ v: "40+", l: "Qualified meetings" }, { v: "34%", l: "Avg reply rate" }, { v: "$1.2M", l: "Pipeline generated" }, { v: "18K", l: "LinkedIn followers added" }, { v: "3x", l: "Inbound lead lift" }];

// ── Case study card ────────────────────────────────────────────────────────────
interface CaseStudy {
  slug: string; tag: string; accent: string; title: string;
  stats: { v: string; l: string }[]; excerpt: string; services: string[];
}
function CaseCard({ cs }: { cs: CaseStudy }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/case-studies/${cs.slug}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="group block rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ backgroundColor: "#ffffff", borderColor: hov ? cs.accent : "#E8E2D9", boxShadow: hov ? `0 12px 40px ${cs.accent}22` : "0 2px 8px rgba(0,0,0,0.04)", transform: hov ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ height: 4, background: `linear-gradient(90deg,${cs.accent},${cs.accent}88)`, opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />
      <div className="p-8">
        <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${cs.accent}12`, color: cs.accent, border: `1px solid ${cs.accent}30` }}>{cs.tag}</span>
        <h2 className="text-2xl font-black mb-3 leading-snug" style={{ color: "#0a0a0a" }}>{cs.title}</h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{cs.excerpt}</p>
        <div className="grid grid-cols-3 gap-6 mb-6 py-6 border-y" style={{ borderColor: "#E8E2D9" }}>
          {cs.stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-black" style={{ color: cs.accent }}><Ticker value={s.v} /></div>
              <div className="text-xs mt-0.5" style={{ color: "#8C8279" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {cs.services.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{s}</span>
            ))}
          </div>
          <span className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" style={{ color: cs.accent }}>
            Read full case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── FadeIn ─────────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease` }}>
      {children}
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────
const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "saas-series-a", tag: "SaaS · Series A", accent: "#3b82f6",
    title: "40 qualified meetings in 8 weeks from a cold start",
    stats: [{ v: "40", l: "Meetings in 8 weeks" }, { v: "34%", l: "Reply rate" }, { v: "$1.2M", l: "Pipeline generated" }],
    excerpt: "A B2B SaaS company entering a new vertical had zero outbound infrastructure. Their AE was spending 60% of their day manually finding leads. We built a multi-channel engine that changed that completely.",
    services: ["AI Lead Generation", "Cold Email Infrastructure", "LinkedIn Outreach"],
  },
  {
    slug: "professional-services-linkedin", tag: "Professional Services · Bootstrapped", accent: "#a855f7",
    title: "LinkedIn brand drove 3x inbound in 90 days",
    stats: [{ v: "3x", l: "Inbound lead volume" }, { v: "18K", l: "New followers" }, { v: "4.8%", l: "Post engagement rate" }],
    excerpt: "A successful consulting founder was entirely dependent on word-of-mouth referrals. Growth was highly volatile month-to-month. We took over their LinkedIn presence and turned it into a predictable inbound engine.",
    services: ["Personal Branding", "LinkedIn Outreach"],
  },
  {
    slug: "ecommerce-conversion-playbook", tag: "eCommerce Tech · Seed", accent: "#10b981",
    title: "Cold email added $400K pipeline for an eCommerce SaaS in 6 weeks",
    stats: [{ v: "28", l: "Meetings booked" }, { v: "41%", l: "Open rate" }, { v: "$400K", l: "Pipeline generated" }],
    excerpt: "An eCommerce SaaS tool had a strong product but no repeatable way to reach DTC brand owners. Manual outreach was inconsistent and burning the team. We built a targeted cold email engine that filled their calendar in 6 weeks.",
    services: ["Cold Email Infrastructure", "AI Lead Generation", "ICP Mapping"],
  },
  {
    slug: "founder-personal-brand-linkedin", tag: "B2B Founder · Bootstrapped", accent: "#f97316",
    title: "Bootstrapped founder went from 0 to 22K followers and 8 inbound deals",
    stats: [{ v: "22K", l: "LinkedIn followers" }, { v: "8", l: "Inbound deals" }, { v: "6.2%", l: "Engagement rate" }],
    excerpt: "A bootstrapped B2B founder had expert-level knowledge but zero online presence. Word of mouth was maxed out. We built their personal brand from scratch on LinkedIn and turned their content into a consistent deal-flow engine.",
    services: ["Personal Branding", "LinkedIn Outreach", "GTM Strategy"],
  },
  {
    slug: "predictable-b2b-lead-gen-engine", tag: "Professional Services · Growth Stage", accent: "#ef4444",
    title: "Built a full outbound engine that books 15+ meetings/month on autopilot",
    stats: [{ v: "15+", l: "Meetings/month" }, { v: "29%", l: "Reply rate" }, { v: "4x", l: "Pipeline vs prior quarter" }],
    excerpt: "A mid-size B2B services firm had tried outbound before and failed — bad lists, generic copy, zero personalisation. We rebuilt everything from ICP mapping to sequence copy to tech stack and turned outbound into their #1 channel.",
    services: ["AI Lead Generation", "Cold Email Infrastructure", "Sales Intelligence"],
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────
export default function CaseStudies() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <Blobs />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Client Results
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Results in the CRM,<br />
            <span className="relative inline-block">
              not the deck.
              <Underline />
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Deep dives into how we built pipelines for SaaS, services, and eCommerce tech. Real numbers, real systems.
          </p>
        </div>
      </section>

      {/* Chip marquee */}
      <div style={{ backgroundColor: "#F0EDE8", borderTop: "1px solid #E8E2D9", borderBottom: "1px solid #E8E2D9" }}>
        <Marquee />
      </div>

      {/* Stat strip */}
      <FadeIn>
        <section className="py-10 px-4" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #E8E2D9" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
            {STATS.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#F5B731" }}><Ticker value={s.v} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Case study cards */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 80}>
              <CaseCard cs={cs} />
            </FadeIn>
          ))}

        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(245,183,49,0.15)", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Want results like these?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">Book a free 30-min audit.</h2>
            <p className="text-base mb-8" style={{ color: "#9ca3af" }}>We&apos;ll map exactly how to replicate these results for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-sm font-bold">Book Free Audit</a>
              <Link href="/case-studies/saas-series-a" className="px-8 py-4 text-sm font-bold rounded-full border transition-all duration-200 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}>Read SaaS case study</Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </InnerLayout>
  );
}
