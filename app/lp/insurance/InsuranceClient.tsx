"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LpLayout from "../LpLayout";
import FlowDiagram from "../FlowDiagram";
import Faq from "../Faq";

function useScrollFade(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function useCountUp(target: number, duration = 1800, format: (n: number) => string = (n) => String(Math.round(n))) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start: number | null = null;
      function tick(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3);
        if (el) el.textContent = format(e * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, format]);
  return ref;
}

const STATS = [
  { value: 19, suffix: "+", label: "Qualified meetings / month (avg)" },
  { value: 64, suffix: "%", label: "Open rate on cold email campaigns" },
  { value: 3.8, suffix: "×", label: "ROI in first 90 days", decimal: true },
  { value: 1.8, suffix: "Cr+", prefix: "₹", label: "Pipeline generated for broker clients", decimal: true },
];

const CASE_STUDIES = [
  {
    tag: "Group Health Insurance Broker · Mumbai",
    headline: "0 to 17 qualified corporate conversations in 60 days",
    body: "A group health insurance brokerage was entirely dependent on referrals from existing clients. We mapped their ICP to 150-800 employee companies across IT and manufacturing, built verified HR Head and CFO contact lists timed to each company's renewal month, and ran a credibility-led email plus LinkedIn sequence. In 60 days they had 17 qualified conversations booked, with 5 converting into new corporate accounts.",
    results: ["17 meetings booked", "5 new corporate accounts", "60-day ramp"],
  },
  {
    tag: "Commercial & Property Insurance Agency · Bengaluru",
    headline: "22 decision-maker meetings booked in one quarter",
    body: "A commercial property and liability insurance agency had a strong book of business but no outbound motion of its own. We built a target list of asset-heavy businesses, manufacturing units, warehouses, and multi-site retail chains, approaching Admin Heads and CFOs roughly 90 days ahead of their renewal dates. The agency booked 22 qualified meetings in the quarter and added 6 new commercial accounts.",
    results: ["22 meetings booked", "6 new accounts", "90-day renewal targeting"],
  },
  {
    tag: "Keyman & Corporate Liability Specialist · Mumbai",
    headline: "A steady stream of CFO conversations, replacing word-of-mouth",
    body: "A boutique broker specialising in keyman insurance and corporate liability cover for mid-size companies relied entirely on founder relationships for new business. We built an ICP around funded companies with recent leadership hires, ran LinkedIn credibility content alongside targeted outreach to CFOs and Finance Heads, and stood up a repeatable meeting pipeline. They now book 8 to 10 qualified conversations every month without a single referral ask.",
    results: ["8-10 meetings/month (ongoing)", "Zero referral dependency", "Consistent CFO pipeline"],
  },
];

const PROCESS = [
  { n: "01", title: "ICP & Renewal Mapping", body: "We map your ideal corporate accounts by company size, industry, and renewal-cycle timing, so outreach lands exactly when companies are evaluating a new broker." },
  { n: "02", title: "Decision-Maker List Building", body: "Hand-verified lists of HR Heads, CFOs, Admin Heads, and Finance Heads at target companies, the people who actually own the group insurance decision." },
  { n: "03", title: "Timed, Credibility-Led Outreach", body: "Multi-channel sequences across cold email and LinkedIn, sequenced around each account's renewal window and backed by credibility-building content." },
  { n: "04", title: "Qualified Meeting Handoff", body: "Qualified conversations with real decision-makers land directly on your calendar. You advise and close; we keep the pipeline full." },
];

const FAQ_ITEMS = [
  { q: "How is this different from cold calling or relying on referrals?", a: "Cold calling is unstructured and low-conversion; referrals are unpredictable and capped by who you already know. We build a systematic, targeted outreach engine, verified decision-maker lists, credibility-led messaging, and renewal-timed sequencing, so new corporate conversations happen every month, not just when someone happens to refer you." },
  { q: "How do you handle renewal-cycle timing?", a: "We map each target company's likely renewal window and sequence outreach to land 60 to 90 days ahead of it, when they are actually evaluating alternatives. Outreach outside that window is deprioritised so we are not wasting your time on companies who are not listening yet." },
  { q: "Does this work for group health insurance as well as commercial or property lines?", a: "Yes. The system adapts to your specific book, group health, commercial property and liability, or keyman and corporate liability cover, by adjusting the ICP, the decision-makers we target, and the messaging to match how that line is actually bought." },
  { q: "We already have a BD or relationship management team. Will this overlap?", a: "No. We focus purely on generating net-new outbound conversations with companies you do not already have a relationship with. Your BD and RM teams keep managing existing accounts and referral relationships; we add a new, always-on channel for fresh corporate business." },
  { q: "How soon can we expect our first meetings?", a: "Most brokerage clients see their first qualified conversations within 3 to 4 weeks, once ICP mapping, decision-maker list building, and renewal-timed sequencing are in place." },
  { q: "What does pricing and commitment look like?", a: "We work on a monthly retainer with no long-term lock-in. You review results every 30 days and decide whether to continue. To be clear, we generate qualified buyer conversations only, we do not advise on policy structuring, underwriting, or claims." },
];

function HeroSection() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    let animId: number;
    const start = performance.now();
    function animate() {
      const t = (performance.now() - start) / 1000;
      if (blob1.current) {
        blob1.current.style.transform = `translate(${Math.sin(t * 0.6) * 180 + Math.sin(t * 0.25) * 70}px, ${Math.cos(t * 0.45) * 130 + Math.cos(t * 0.18) * 50}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${Math.sin(t * 0.5 + 2) * 160 + Math.cos(t * 0.35) * 60}px, ${Math.cos(t * 0.6 + 1) * 140 + Math.sin(t * 0.28) * 50}px)`;
      }
      if (blob3.current) {
        blob3.current.style.transform = `translate(${Math.sin(t * 0.55 + 4) * 140 + Math.sin(t * 0.3) * 50}px, ${Math.cos(t * 0.5 + 2) * 120 + Math.cos(t * 0.4) * 40}px)`;
      }
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const path = underlineRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    let animId: number;
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      function draw(ts: number) {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / 1200, 1);
        const e = 1 - Math.pow(1 - p, 3);
        path!.style.strokeDashoffset = String(length * (1 - e));
        if (p < 1) animId = requestAnimationFrame(draw);
      }
      animId = requestAnimationFrame(draw);
    }, 400);
    return () => { clearTimeout(timer); cancelAnimationFrame(animId); };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-24 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Blobs */}
      <div ref={blob1} aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.32) 0%, rgba(255,160,0,0.12) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob2} aria-hidden="true" style={{ position: "absolute", bottom: "-60px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,200,50,0.08) 45%, transparent 68%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob3} aria-hidden="true" style={{ position: "absolute", top: "30%", right: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.12) 0%, transparent 65%)", filter: "blur(45px)", pointerEvents: "none", willChange: "transform" }} />

      {/* Floating insurance signals */}
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "16%", left: "9%", animationDelay: "0.2s", ["--lp-rot" as any]: "-8deg" }}>🛡️</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "62%", left: "6%", animationDelay: "1.6s", ["--lp-rot" as any]: "6deg" }}>📋</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "20%", right: "8%", animationDelay: "0.9s", ["--lp-rot" as any]: "10deg" }}>🏢</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "68%", right: "11%", animationDelay: "2.3s", ["--lp-rot" as any]: "-6deg" }}>🤝</span>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 hero-fade-d1">
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For Insurance Brokers & Agencies
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Stop waiting on referrals<br />
          <span className="relative inline-block">
            Start winning
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 400 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q100 3 200 7 Q300 11 396 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}corporate accounts
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          We build and run the outbound engine that puts your brokerage in front of the HR Heads, CFOs, and Admin Heads deciding on group health and commercial insurance, timed to when they're actually open to a new broker.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-d3">
          <a href="/founder-meeting"
            className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2">
            Book Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#get-started" className="px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl border transition-colors" style={{ borderColor: "#D0C9BF", color: "#0a0a0a", backgroundColor: "rgba(255,255,255,0.7)" }}>
            Get a Custom Plan
          </a>
        </div>
        <p className="mt-5 text-xs hero-fade-d3" style={{ color: "#8C8279" }}>No commitment. No pitch deck. 30-minute strategy call.</p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-d3" aria-hidden="true">
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(245,183,49,0.6), transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}

function StatsSection() {
  const ref0 = useCountUp(19, 1600, (n) => `${Math.round(n)}+`);
  const ref1 = useCountUp(64, 1400, (n) => `${Math.round(n)}%`);
  const ref2 = useCountUp(3.8, 1500, (n) => `${n.toFixed(1)}×`);
  const ref3 = useCountUp(1.8, 1800, (n) => `₹${n.toFixed(1)}Cr+`);
  const refs = [ref0, ref1, ref2, ref3];
  const labels = STATS.map(s => s.label);
  const icons = ["📅", "📬", "🚀", "💰"];
  const fade = useScrollFade();

  return (
    <section className="py-14 px-4 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div ref={fade} className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {refs.map((ref, i) => (
          <div key={i} className="lp-stat text-center">
            <div className="text-xl mb-1 lp-icon-bob" style={{ animationDelay: `${i * 0.25}s` }} aria-hidden="true">{icons[i]}</div>
            <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: "#0a0a0a" }}>
              <span ref={ref}>{i === 2 ? "0×" : i === 3 ? "₹0Cr+" : i === 1 ? "0%" : "0+"}</span>
            </div>
            <div className="text-xs leading-snug" style={{ color: "#52525B" }}>{labels[i]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainSection() {
  const titleFade = useScrollFade(0);
  const card1 = useScrollFade(0);
  const card2 = useScrollFade(80);
  const card3 = useScrollFade(160);
  const cards = [card1, card2, card3];
  const pain = [
    { icon: "🔒", heading: "Everyone already has a broker", body: "Group health and commercial cover is a trust-driven, commoditized sale. Most companies you approach are already covered by an incumbent broker, and getting a foot in the door on cold outreach alone rarely works." },
    { icon: "⏳", heading: "You're pitching outside the window", body: "Companies only seriously entertain a new broker in the 60 to 90 days before their policy renews. Outreach that ignores this timing lands with prospects who have no reason to listen yet." },
    { icon: "🎲", heading: "Growth capped by referrals", body: "New corporate business comes from whoever happens to refer you next. There's no repeatable system generating fresh conversations, so growth stalls whenever the referral well runs dry." },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Winning corporate accounts feels like luck, not a system</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pain.map((p, i) => (
            <div key={p.heading} ref={cards[i]} className="lp-card rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-4xl mb-4 lp-icon-bob" style={{ animationDelay: `${i * 0.3}s` }}>{p.icon}</div>
              <h3 className="font-black text-lg mb-2" style={{ color: "#0a0a0a" }}>{p.heading}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const titleFade = useScrollFade(0);
  const p0 = useScrollFade(0); const p1 = useScrollFade(100); const p2 = useScrollFade(200); const p3 = useScrollFade(300);
  const delays = [p0, p1, p2, p3];
  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>How it works</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Your corporate outbound engine, fully managed</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROCESS.map((p, i) => (
            <div key={p.n} ref={delays[i]} className="lp-card flex gap-5 rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              <span className="lp-card-number text-3xl font-black flex-shrink-0 leading-none mt-1" style={{ color: "#F5B731" }}>{p.n}</span>
              <div>
                <h3 className="font-black text-lg mb-2" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const titleFade = useScrollFade(0);
  const c1 = useScrollFade(0);
  const c2 = useScrollFade(80);
  const c3 = useScrollFade(160);
  const cRefs = [c1, c2, c3];

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Client results</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>What we have built for brokers like yours</h2>
        </div>
        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.tag} ref={cRefs[i]} className="lp-card rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>{cs.tag}</span>
              <h3 className="text-2xl font-black mt-2 mb-4" style={{ color: "#0a0a0a" }}>{cs.headline}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{cs.body}</p>
              <div className="flex flex-wrap gap-3">
                {cs.results.map((r) => (
                  <span key={r} className="lp-pill text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DarkCTASection() {
  const fade = useScrollFade(0);
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "30%", width: "600px", height: "400px", marginTop: "-200px", marginLeft: "-300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,183,49,0.15) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div ref={fade} className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: "#ffffff" }}>
          Let&apos;s fill your corporate pipeline
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute GTM audit. We will review your outreach, map your ICP against upcoming renewal windows, and hand you a custom action plan, no pitch, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/founder-meeting"
            className="px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>
            Book Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#get-started" className="px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2 border" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}>
            Fill out the form below
          </a>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  const fade = useScrollFade(0);
  return (
    <section id="get-started" className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-2xl mx-auto">
        <div ref={fade} className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free GTM audit</h2>
          <p className="text-base" style={{ color: "#52525B" }}>We will audit your current outreach, map your ICP against renewal timing, and tell you exactly what is holding your corporate pipeline back. No pitch. No pressure.</p>
        </div>
        <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
          <form className="space-y-4"
            action="https://forms.zohopublic.com/flintstop/form/MyntmoreWebsiteform/formperma/3F8IpEgLtb2RnoXcr_yUsp56_-WdQdO2-sM6eaCOKi0/htmlRecords/submit"
            name="form" id="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Full Name *</label>
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Marco Rossi" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / Head of Sales" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company / Brokerage Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Rossi Insurance Brokers" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+1 646 555 0198" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
              <input id="Email" name="Email" type="text" maxLength={255} placeholder="marco@rossiinsurance.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free GTM Audit</button>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function InsuranceClient() {
  return (
    <LpLayout>
      <HeroSection />
      <StatsSection />
      <PainSection />
      <FlowDiagram
        badge="Our system"
        title={"From cold list to corporate account\nEvery single time"}
        topSteps={[
          { n: "01", icon: "🎯", title: "ICP & Renewal-Cycle Mapping", body: "Define your ideal corporate account: industry, company size, and where each target sits in its renewal cycle, so we approach at the moment they're actually open to a new broker.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "👥", title: "Build Decision-Maker Lists", body: "Verified HR Heads, CFOs, Admin Heads, and Finance Heads at target companies, enriched with renewal-window and buying signals.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📦", title: "Prepare Credibility Assets", body: "Case studies, comparison content, and a cold email and LinkedIn sequence built to establish trust before the pitch ever lands.", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Broker LinkedIn Credibility Building",
          items: [
            { icon: "🔗", title: "Profile Optimisation", body: "Headline, banner, and about section repositioned to read as a trusted corporate insurance advisor, not a policy seller." },
            { icon: "✍️", title: "Content Creation", body: "Posts on renewal timing, risk trends, and coverage stories that build familiarity with HR and Finance leaders before outreach starts." },
            { icon: "🏆", title: "Thought Leadership", body: "Positions your brokerage as the credible alternative to the incumbent, so cold outreach lands like a warm introduction." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "🚀", title: "Launch Timed Outreach", body: "Cold email and LinkedIn sequences go live, sequenced to reach each account inside its 60 to 90 day renewal window.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Follow Up & Nurture", body: "Persistent, credibility-led follow-ups keep your brokerage top of mind until the account is ready to talk.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "📅", title: "Book Qualified Meetings", body: "Warm replies convert into meetings with the actual HR, Finance, or Admin decision-maker, fully briefed and ready for you to take over.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <Faq title="Common questions from insurance brokers" items={FAQ_ITEMS} />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
