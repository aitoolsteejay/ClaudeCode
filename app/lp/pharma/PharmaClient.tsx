"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import LpLayout from "../LpLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import SubmitButton from "../../components/SubmitButton";
import { buildFaqSchema } from "@/lib/schema";
import FlowDiagram from "../FlowDiagram";
import Faq from "../Faq";

function useScrollFade(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fadeTimer = setTimeout(() => {
          el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, [delay]);
  return ref;
}

function useCountUp(target: number, duration = 1800, format: (n: number) => string) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId: number | null = null;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start: number | null = null;
      function tick(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3);
        if (el) el.textContent = format(e * target);
        if (p < 1) rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [target, duration, format]);
  return ref;
}

// Real, sitewide-published track record (same figures used on /1-on-1-consultation,
// /marketing-automation, and the services index). We do have a real, verified
// pharma case study (see the link below) -- deliberately not inventing
// additional per-client examples on top of it.
const TRACK_RECORD = [
  { icon: "📬", stat: "12K+", label: "Meetings booked for clients across all outbound campaigns" },
  { icon: "📈", stat: "38%", label: "Average reply rate across campaigns" },
  { icon: "💰", stat: "$120M+", label: "Pipeline generated for clients" },
  { icon: "⏱️", stat: "18", label: "Average days to a campaign's first booked meeting" },
];

const PROCESS = [
  { n: "01", title: "ICP & Geography Mapping", body: "We map your ideal buyer by therapeutic category, certification profile, and target geography, domestic institutional or export and contract-manufacturing, before any outreach starts." },
  { n: "02", title: "Verified Buyer Lists", body: "Hand-verified contacts of procurement heads, regulatory affairs contacts, import/export managers, and hospital purchase committee members. No recycled trade directories." },
  { n: "03", title: "Compliance-Aware Outreach", body: "Messaging that references your certifications and manufacturing capability factually, building credibility without making regulatory claims on your behalf." },
  { n: "04", title: "Qualified Meeting Handoff", body: "Interested buyers land directly in your calendar with full context. Your regulatory, quality, and commercial teams take it from there." },
];

const FAQ_ITEMS = [
  { q: "Does Myntmore handle regulatory approvals or compliance for us?", a: "No. Myntmore is a B2B outbound lead generation partner, we find and book meetings with the right buyers. Regulatory approvals, WHO-GMP or USFDA certification processes, and import-export compliance are handled entirely by your own regulatory, quality, and compliance team. We do not advise on or claim expertise in these areas." },
  { q: "How does outreach differ for domestic buyers versus export and global buyers?", a: "Domestic outreach targets hospital purchase committees, distributors, and chemist chains, with messaging built around tender cycles and regional buying patterns. Export and contract-manufacturing outreach targets importers, sourcing heads, and procurement teams abroad, with messaging built around therapeutic category fit and manufacturing capacity. We run both as separate, tailored tracks." },
  { q: "How do you handle compliance-sensitive messaging in outreach?", a: "We reference certifications and manufacturing capability factually, what you hold and what your facility supports, without making regulatory claims on your behalf. Any compliance-specific questions a buyer raises are flagged and routed straight to your team." },
  { q: "Which buyer titles and roles do you typically target?", a: "Procurement Heads, Regulatory Affairs contacts, Import/Export Managers, hospital Purchase Committee members, and Distribution Partners, depending on whether the target account is domestic or export focused." },
  { q: "How fast will we start seeing meetings?", a: "Most pharma clients see their first qualified buyer conversations within 3 to 5 weeks, once ICP mapping, list building, and outreach sequences are in place." },
  { q: "What does pricing and commitment look like?", a: "We work on a monthly retainer with no long term lock in. You can review meetings and pipeline every 30 days and decide whether to continue." },
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
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-32 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Blobs */}
      <div ref={blob1} aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.32) 0%, rgba(255,160,0,0.12) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob2} aria-hidden="true" style={{ position: "absolute", bottom: "-60px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,200,50,0.08) 45%, transparent 68%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob3} aria-hidden="true" style={{ position: "absolute", top: "30%", right: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.12) 0%, transparent 65%)", filter: "blur(45px)", pointerEvents: "none", willChange: "transform" }} />

      {/* Floating pharma signals */}
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "16%", left: "9%", animationDelay: "0.2s", ["--lp-rot" as any]: "-8deg" }}>💊</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "62%", left: "6%", animationDelay: "1.6s", ["--lp-rot" as any]: "6deg" }}>🌍</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "20%", right: "8%", animationDelay: "0.9s", ["--lp-rot" as any]: "10deg" }}>🔬</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "68%", right: "11%", animationDelay: "2.3s", ["--lp-rot" as any]: "-6deg" }}>📦</span>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Breadcrumbs items={[{ label: "For Pharmaceutical Companies", href: "/lp/pharma" }]} className="justify-center" />
        <div className="mb-6 hero-fade-d1">
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For Pharmaceutical Companies
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Get in front of pharma buyers<br />
          <span className="relative inline-block">
            before
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 300 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q75 3 150 7 Q225 11 296 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}your next exhibition
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          We build and run the outbound engine that gets your formulations, APIs, or contract-manufacturing capability in front of the buyers who matter, global importers and distributors, and domestic hospitals, distributors, and chemist chains, through AI-powered cold email, LinkedIn outreach, and ABM.
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
        <p className="mt-5 text-xs hero-fade-d3" style={{ color: "#8C8279" }}>No commitment, no pitch deck, just a focused 30-minute call.</p>
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
  const ref2 = useCountUp(3.6, 1500, (n) => `${n.toFixed(1)}×`);
  const ref3 = useCountUp(3.1, 1800, (n) => `₹${n.toFixed(1)}Cr+`);
  const refs = [ref0, ref1, ref2, ref3];
  const labels = [
    "Qualified buyer meetings / quarter (avg)",
    "Open rate on cold email campaigns",
    "ROI vs trade show spend",
    "Buyer pipeline generated (domestic + export)",
  ];
  const icons = ["🤝", "📬", "🚀", "💰"];
  const initials = ["0+", "0%", "0×", "₹0Cr+"];
  const fade = useScrollFade();

  return (
    <section className="py-14 px-4 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div ref={fade} className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {refs.map((ref, i) => (
          <div key={i} className="lp-stat text-center">
            <div className="text-xl mb-1 lp-icon-bob" style={{ animationDelay: `${i * 0.25}s` }} aria-hidden="true">{icons[i]}</div>
            <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: "#0a0a0a" }}>
              <span ref={ref}>{initials[i]}</span>
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
    { icon: "🎪", heading: "Exhibitions are your only channel", body: "CPHI, a domestic pharma expo once or twice a year, ₹10-20L a booth, a handful of business cards, and months of cold follow-up for a maybe. There is no steady buyer-discovery motion in between." },
    { icon: "🔒", heading: "Procurement and regulatory are gatekept", body: "Purchase committees, import/export managers, and regulatory contacts are buried behind receptionists and generic inquiry forms. Reaching the actual decision-maker directly is the hard part." },
    { icon: "🏅", heading: "Certifications go unseen", body: "WHO-GMP, USFDA, and plant capability are real credibility, but there is no systematic way to get that in front of the right buyer early, so it never does the selling it should." },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Trade shows alone won&apos;t fill your pipeline</h2>
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
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Your buyer pipeline, fully managed</h2>
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
  const r0 = useCountUp(12, 1600, (n) => `${Math.round(n)}K+`);
  const r1 = useCountUp(38, 1400, (n) => `${Math.round(n)}%`);
  const r2 = useCountUp(120, 1800, (n) => `$${Math.round(n)}M+`);
  const r3 = useCountUp(18, 1500, (n) => `${Math.round(n)} days`);
  const refs = [r0, r1, r2, r3];
  const initials = ["0K+", "0%", "$0M+", "0 days"];

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Client results</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Our track record in B2B outbound, the same system we&apos;re applying for pharma</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {TRACK_RECORD.map((t, i) => (
            <div key={t.label} className="lp-card rounded-2xl border p-8 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-xl mb-2" aria-hidden="true">{t.icon}</div>
              <div className="text-3xl sm:text-4xl font-black mb-2" style={{ color: "#0a0a0a" }}>
                <span ref={refs[i]}>{initials[i]}</span>
              </div>
              <div className="text-xs leading-snug" style={{ color: "#52525B" }}>{t.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/case-studies/uk-pharma-qualified-meetings" className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            style={{ color: "#D97706" }}>
            Read how a UK pharma company grew to 20+ qualified meetings a month
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Hypothetical, clearly-labeled scenarios (same "Illustrative example" convention
// used on /lp/agency-partners) showing what each real service angle from the
// pharma playbook looks like in a specific market. Not real client claims --
// we don't have verified per-country pharma results to publish yet.
const MARKET_SCENARIOS = [
  {
    tag: "Formulation manufacturer entering Nigeria · Illustrative example",
    headline: "Finding the distributor who already sells to the chemists you can't reach",
    body: "An Indian formulation maker wants to sell in Nigeria but has no one on the ground. Rather than cold-emailing hospitals directly, outreach targets owners and BD heads at established pharma importers and distributors already selling to that market; local partners who know the registration process, the stockists, and which chemist chains matter. The win isn't a single sale, it's a partner who keeps bringing business after the first container lands.",
  },
  {
    tag: "API maker sourcing backup buyers in the UAE · Illustrative example",
    headline: "Reaching purchase heads who need a second source, not a new vendor pitch",
    body: "Formulation companies in the Middle East often want a backup API supplier so one shipment delay doesn't stop their plant. Outreach here isn't a generic sales pitch, it names the specific API and the approvals behind it, and asks a purchase or sourcing head a direct question: do you have a second source for this. Short, specific, and easy to say yes to a 20-minute call.",
  },
  {
    tag: "Contract manufacturer filling capacity in Vietnam · Illustrative example",
    headline: "Turning empty plant lines into conversations with brand owners who need one",
    body: "A contract manufacturer with spare capacity loses money on every idle line. Outreach targets brand owners and sourcing heads at Southeast Asian pharma companies who don't run their own plant, positioning the dosage form and the approval the facility already holds. The goal is a short list of real conversations with buyers who need exactly that capacity, not a mass blast to every company in the region.",
  },
];

function MarketScenariosSection() {
  const titleFade = useScrollFade(0);
  const c1 = useScrollFade(0);
  const c2 = useScrollFade(80);
  const c3 = useScrollFade(160);
  const cRefs = [c1, c2, c3];

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Illustrative scenarios</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>What this looks like, market by market</h2>
          <p className="text-sm mt-3 max-w-2xl" style={{ color: "#8C8279" }}>
            Hypothetical examples built from the real angles we run, not claims about a specific past client.
          </p>
        </div>
        <div className="space-y-6">
          {MARKET_SCENARIOS.map((cs, i) => (
            <div key={cs.tag} ref={cRefs[i]} className="lp-card rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>{cs.tag}</span>
              <h3 className="text-2xl font-black mt-2 mb-4" style={{ color: "#0a0a0a" }}>{cs.headline}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{cs.body}</p>
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
          Let&apos;s get you in front of the right buyers
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute GTM audit. We will map your buyer profile across domestic and export markets and hand you a custom action plan, no pitch, no pressure.
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
          <p className="text-base" style={{ color: "#52525B" }}>We will map your buyer profile across domestic and export markets and tell you exactly what is holding your pipeline back. No pitch. No pressure.</p>
        </div>
        <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
          <form className="space-y-4"
            action="https://forms.zohopublic.com/flintstop/form/MyntmoreWebsiteform/formperma/3F8IpEgLtb2RnoXcr_yUsp56_-WdQdO2-sM6eaCOKi0/htmlRecords/submit"
            name="form" id="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="https://www.myntmore.com/thank-you" />
            <input type="hidden" name="zc_gad" value="" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Full Name *</label>
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Anil Deshmukh" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Director / Export Manager / Owner" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Deshmukh Pharmaceuticals Pvt Ltd" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email *</label>
              <input id="Email" name="Email" type="email" required maxLength={255} placeholder="anil@deshmukhpharma.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <SubmitButton>Get My Free GTM Audit</SubmitButton>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function PharmaClient() {
  return (
    <LpLayout>
      <JsonLd data={buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })))} />
      <HeroSection />
      <StatsSection />
      <PainSection />
      <FlowDiagram
        badge="Our system"
        title={"From certified manufacturer to booked buyer meeting\nEvery single time"}
        topSteps={[
          { n: "01", icon: "🗺️", title: "ICP & Geography Mapping", body: "Define your target buyer by therapeutic category, certification profile, and geography, domestic institutional or export and contract-manufacturing.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "👥", title: "Verified Buyer Lists", body: "Hand-verified contacts of procurement heads, regulatory affairs contacts, import/export managers, and hospital purchase committee members.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📄", title: "Credibility-Led Messaging", body: "Outreach copy that references your certifications and manufacturing capability factually, building trust without making regulatory claims.", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Certification & Credibility Positioning",
          items: [
            { icon: "🏅", title: "Certification Showcase", body: "WHO-GMP, USFDA, and plant capability credentials presented clearly and factually across outreach and LinkedIn." },
            { icon: "🏭", title: "Capability Profile", body: "Capacity, therapeutic categories, and quality systems packaged into a clear one-pager buyers can act on." },
            { icon: "📢", title: "LinkedIn Presence", body: "Consistent posting that builds recognition with procurement and regulatory audiences before outreach lands." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "✉️", title: "Launch Outreach", body: "Cold email and LinkedIn sequences go live targeting procurement, regulatory, and purchase-committee contacts, domestically and globally.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Follow Up & Qualify", body: "Persistent multi-touch follow-ups sharing certification info and capability sheets until the right buyer responds.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "📅", title: "Book Qualified Meetings", body: "Qualified conversations land in your calendar with full buyer context. Your regulatory and quality team takes it from there.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <MarketScenariosSection />
      <Faq title="Common questions from pharma manufacturers" items={FAQ_ITEMS} />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
