"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import JsonLd from "../../components/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

const SERVICE_SCHEMA = buildServiceSchema({
  name: "Personal Branding",
  description: "We ghostwrite LinkedIn content that positions you as the authority in your space, 4–8 posts a month from a single monthly voice interview, so inbound finds you instead of you chasing it.",
  serviceType: "B2B Personal Branding and LinkedIn Content Ghostwriting",
  url: `${SITE_URL}/services/personal-branding`,
});

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/services` },
  { name: "Personal Branding", url: `${SITE_URL}/services/personal-branding` },
]);

/* ─── Data ──────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "Voice & Positioning Interview", desc: "A focused 45-minute call to capture how you actually think, the stories only you can tell, and the angle that makes you distinct from every other founder posting generic advice." },
  { n: "02", title: "Content Calendar & Ghostwriting", desc: "From that single interview, we write 4–8 LinkedIn posts a month in your voice, not a template, built around the angles that build authority with your specific buyers." },
  { n: "03", title: "Review & Publish", desc: "You review and approve every post before it goes out. Once approved, we handle scheduling and publishing so nothing slips or gets forgotten in a busy week." },
  { n: "04", title: "Engagement & Inbound Tracking", desc: "We track who's viewing your profile, engaging with your posts, and reaching out, and flag warm inbound signals so you know exactly who's paying attention." },
];

const DELIVERABLES = [
  "One monthly voice interview to capture your authentic perspective",
  "4–8 ghostwritten LinkedIn posts a month, written in your voice",
  "Full review and approval before anything goes live",
  "Content calendar and scheduling handled end to end",
  "Monthly profile visit and engagement reporting",
  "Inbound lead flagging from engaged followers and profile views",
];

const WHO_FOR = [
  { icon: "💼", title: "Founders & Executives", desc: "Leaders who know their buyers are watching but don't have the time, or the desire, to write and post consistently themselves." },
  { icon: "🎯", title: "Consultants & Advisors", desc: "Professionals whose credibility is their product, who need visible proof of expertise before a prospect ever books a call." },
  { icon: "📈", title: "Sales & GTM Leaders", desc: "Leaders who want inbound interest doing work outbound alone can't, so warm conversations start before the first cold touch." },
];

const TESTIMONIALS = [
  {
    quote: "I used to spend Sunday nights trying to write a LinkedIn post that didn't sound like everyone else's. Myntmore's interview process pulled out stories I wouldn't have thought to share myself, and my profile views are up 9x in two months.",
    name: "Founder & CEO",
    co: "B2B SaaS · Series A",
    color: "#D97706",
  },
  {
    quote: "The best part isn't the posts, it's the DMs. Prospects reference something I wrote before they've even had a call with our team. That never happened when we were relying on outbound alone.",
    name: "Managing Partner",
    co: "Professional Services",
    color: "#0077b5",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I have to write anything myself?",
    a: "No. You give us one voice interview a month, about 45 minutes, and we write everything from there. You review and approve every post before it's published, so it always sounds like you, but you're not staring at a blank cursor.",
  },
  {
    q: "How is this different from just posting more often?",
    a: "Posting more without a strategy usually means posting generic advice that blends in. We build your positioning first, what makes you specifically worth following, then write content that reinforces that angle every time, so followers build a consistent picture of who you are.",
  },
  {
    q: "How many posts do I actually get?",
    a: "4 to 8 fully ghostwritten LinkedIn posts a month, depending on the plan. Each one goes through your review and approval before it's scheduled.",
  },
  {
    q: "Can this work alongside outbound, cold email or LinkedIn outreach?",
    a: "It's one of the strongest combinations we run. A prospect who's already seen your name and content reacts very differently to a cold email or connection request than someone who's never heard of you. Personal branding warms up the exact people your outbound is trying to reach.",
  },
  {
    q: "How long before I see real results?",
    a: "Profile visits and engagement usually climb within the first month. Inbound messages referencing your content typically start by month two to three, since authority builds with consistency, not a single viral post.",
  },
];

const BENEFITS = [
  "10x profile visits", "Ghostwritten content", "Your voice, not ours", "4–8 posts/month",
  "Full review & approval", "Inbound tracking", "Authority positioning", "One interview/month",
  "No blank page", "Consistent presence", "2x reply rate", "Built for LinkedIn",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(217,119,6,0.4)", borderLeftColor: "#D97706", borderLeftWidth: "3px", backgroundColor: "rgba(217,119,6,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(217,119,6,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? "#D97706" : "#6B6B6B"} strokeWidth={2.5}>
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
  const isAmber = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isAmber ? "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)" : "linear-gradient(135deg,#fff 0%,#EFF6FF 100%)",
        borderColor: isAmber ? "rgba(217,119,6,0.3)" : "rgba(0,119,181,0.3)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isAmber ? "#D97706" : "#0077b5" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function PersonalBranding() {
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
        blob1.current.style.transform = `translate(${Math.sin(t * 0.65) * 210 + Math.sin(t * 0.28) * 75}px, ${Math.cos(t * 0.5) * 145 + Math.cos(t * 0.2) * 55}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${Math.sin(t * 0.55 + 2) * 210 + Math.cos(t * 0.38) * 72}px, ${Math.cos(t * 0.72 + 1) * 145 + Math.sin(t * 0.32) * 52}px)`;
      }
      if (blob3.current) {
        blob3.current.style.transform = `translate(${Math.sin(t * 0.5 + 4) * 185 + Math.sin(t * 0.33) * 62}px, ${Math.cos(t * 0.62 + 2) * 165 + Math.cos(t * 0.43) * 52}px)`;
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
        ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.75) * 310 + Math.sin(t * 0.28) * 92}px, ${Math.cos(t * 0.58) * 135 + Math.cos(t * 0.22) * 58}px)`;
      }
      if (ctaBlob2.current) {
        ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.68 + 2) * 310 + Math.cos(t * 0.38) * 92}px, ${Math.cos(t * 0.78 + 1) * 135 + Math.sin(t * 0.33) * 58}px)`;
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
          { ref: stat1Ref, end: 10, suffix: "x" },
          { ref: stat2Ref, end: 2, suffix: "x" },
          { ref: stat3Ref, end: 6, suffix: "/mo" },
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
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={BREADCRUMB_SCHEMA} />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(217,119,6,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,119,181,0.16) 0%, rgba(0,119,181,0.06) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-xs font-semibold" style={{ color: "#8C8279" }}>Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Personal Branding</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(217,119,6,0.35)", background: "rgba(217,119,6,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#D97706" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>Personal Branding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Your buyers are on LinkedIn every day.{" "}
            <span className="relative inline-block">
              Most founders are invisible to them.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 460 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q115 2 230 6 Q345 10 458 5" stroke="#D97706" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            We ghostwrite LinkedIn content that positions you as the authority in your space, 4–8 posts a month from a single monthly voice interview, so inbound finds you instead of you chasing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="/founder-meeting"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Get a Free Content Audit
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
            { ref: stat1Ref, init: "10x", label: "Average increase in profile visits" },
            { ref: stat2Ref, init: "2x", label: "Boost in inbound reply rate" },
            { ref: stat3Ref, init: "6/mo", label: "Avg. ghostwritten posts, one interview" },
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
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 32s linear infinite" }}>
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
                You know content matters. You still don&apos;t post
              </h2>
              <div className="space-y-4">
                {[
                  "Staring at a blank cursor every week, then giving up and doing nothing",
                  "Posting generic advice that sounds like every other founder's feed",
                  "No system means content happens in bursts, then disappears for months",
                  "Prospects Google you before a call and find nothing that builds trust",
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
                style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>
                The Myntmore Way
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
                One conversation a month. Your voice, every week
              </h2>
              <div className="space-y-4">
                {[
                  "A single 45-minute interview replaces hours of writing every week",
                  "Every post written in your actual voice, not a generic template",
                  "You review and approve before anything goes live, always",
                  "10x profile visits means prospects find real proof before the call",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(217,119,6,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}>
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
              style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>One interview a month. A full content calendar in your voice, out the other side.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(217,119,6,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(217,119,6,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706" }}>
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
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={2.5}>
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
              style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>
              What You Get
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(217,119,6,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}>
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
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for people whose credibility is the product</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(217,119,6,0.35)"; }}
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
              style={{ color: "#D97706" }}>
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
              style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>
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
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.25) 0%, rgba(217,119,6,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,119,181,0.2) 0%, rgba(0,119,181,0.08) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Let&apos;s make your buyers<br /><span style={{ color: "#D97706" }}>see you as the authority</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Book a free content audit and we&apos;ll show you exactly what&apos;s missing from your current LinkedIn presence, and what a consistent one could look like.
          </p>

          <a href="/founder-meeting"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book a Free Content Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>No commitment. Just a real look at what&apos;s possible for your presence.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["Live in 2–3 weeks", "One interview a month", "Results or we make it right"].map((item) => (
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
