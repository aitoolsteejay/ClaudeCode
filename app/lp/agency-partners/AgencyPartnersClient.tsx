"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
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

const STATS = [
  { value: 12, suffix: "K+", label: "Meetings booked across Myntmore clients" },
  { value: 120, suffix: "M+", prefix: "$", label: "Pipeline generated across all clients" },
  { value: 25, suffix: "%", label: "Typical partner margin on managed revenue" },
  { value: 3, suffix: " wks", label: "Avg. time from signed partner to first client live" },
];

const CASE_STUDIES = [
  {
    tag: "Marketing Agency Partner · Illustrative example",
    headline: "A new $8K/month revenue line, with zero delivery hires",
    body: "A 10-person performance marketing agency kept getting asked for lead-gen and outbound by existing retainer clients but had no bandwidth to build it. They became a Myntmore partner, we ran cold email and LinkedIn outreach for two of their clients under the agency's own branding, and the agency simply added it as a new managed service line, billed and reported entirely under their name.",
    results: ["2 client accounts launched", "$8K/mo new managed-service revenue", "0 delivery staff hired"],
  },
  {
    tag: "Fractional CMO Practice · Illustrative example",
    headline: "Kept a $60K/year retainer that was about to walk",
    body: "A fractional CMO consultant had a client asking for outbound pipeline generation as part of the engagement, something outside her own skill set. Rather than lose the account to a full-service agency, she brought Myntmore in as her white-label delivery partner. The client only ever interacted with her; Myntmore ran ICP mapping, list building, and outreach behind the scenes.",
    results: ["1 retainer client retained", "$60K/yr engagement kept in-house", "Fully white-labeled delivery"],
  },
  {
    tag: "PR & Branding Studio Partner · Illustrative example",
    headline: "Turned a one-off referral habit into recurring commission",
    body: "A branding studio used to informally refer outbound work to freelancers and never saw a rupee for it. As a Myntmore partner, every referral now runs through a tracked partner agreement: the studio scopes the client, Myntmore executes cold email and ABM under the studio's brand, and the studio earns a recurring margin for as long as the client stays active.",
    results: ["Recurring referral margin", "3 clients referred to date", "Co-branded monthly reporting"],
  },
];

const PROCESS = [
  { n: "01", title: "Partner Onboarding & Brand Setup", body: "We set up your white-label reporting templates, sender domains, and dashboard, all styled and named under your agency's brand, not ours." },
  { n: "02", title: "Client Scoping Call", body: "You introduce Myntmore to your client as your delivery team. We join the call, map their ICP, and scope the engagement together with you." },
  { n: "03", title: "Full White-Label Execution", body: "We run cold email, LinkedIn outreach, and ABM end to end. Every report, email footer, and dashboard your client sees carries your brand, never ours." },
  { n: "04", title: "You Keep the Relationship & Margin", body: "You stay the single point of contact for the client, own the account, and earn your margin every month for as long as the engagement continues." },
];

const FAQ_ITEMS = [
  { q: "How does the white-labeling actually work day to day", a: "We set up sender domains, email signatures, LinkedIn outreach, and every report or dashboard under your agency's name and branding. Your client only ever sees your team's name. Internally, we run the campaigns, and you receive the same branded materials to pass along or present yourself." },
  { q: "Who owns the client relationship", a: "You do, fully. You are the point of contact for scoping, pricing, and any client conversation. We operate as your delivery team behind the scenes and never contact your client directly unless you specifically want us on a call with you." },
  { q: "What do we need to do versus what does Myntmore handle", a: "You bring the client relationship, scope the engagement with our help, and present results. We handle ICP mapping, list building, copywriting, sending infrastructure, deliverability, campaign management, and reporting, so you are not hiring or managing a delivery team." },
  { q: "What does the margin or commission structure look like", a: "Our current partner model is a 25 percent recurring margin on the managed monthly revenue for each client you bring in, paid out for as long as that client stays active. This is our standard starting structure and can be discussed further on a partner call." },
  { q: "Is there a minimum client volume or spend commitment", a: "No fixed minimum. Most partners start with one client engagement to see the model in action, then bring in more once they are comfortable with the reporting and results. There is no lock-in volume you have to hit." },
  { q: "Will our client ever see Myntmore's name anywhere", a: "No. Every report, dashboard, email signature, and outreach touchpoint is branded as yours. We stay fully invisible to your client unless you explicitly choose to introduce us, for example on a joint strategy call." },
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

      {/* Floating partnership signals */}
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "16%", left: "9%", animationDelay: "0.2s", ["--lp-rot" as any]: "-8deg" }}>🤝</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "62%", left: "6%", animationDelay: "1.6s", ["--lp-rot" as any]: "6deg" }}>🏷️</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "20%", right: "8%", animationDelay: "0.9s", ["--lp-rot" as any]: "10deg" }}>📊</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "68%", right: "11%", animationDelay: "2.3s", ["--lp-rot" as any]: "-6deg" }}>🔁</span>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Breadcrumbs items={[{ label: "For Agency & Reseller Partners", href: "/lp/agency-partners" }]} className="justify-center" />
        <div className="mb-6 hero-fade-d1">
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For Agency & Reseller Partners
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Sell outbound. We run it.<br />
          <span className="relative inline-block">
            Under your brand
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 400 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q100 3 200 7 Q300 11 396 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          .
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          Add cold email, LinkedIn outreach, and ABM to your service stack without hiring a single delivery person. We execute end to end, fully white-labeled under your agency's name.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-d3">
          <a href="/founder-meeting"
            className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2">
            Become a Partner
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#get-started" className="px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl border transition-colors" style={{ borderColor: "#D0C9BF", color: "#0a0a0a", backgroundColor: "rgba(255,255,255,0.7)" }}>
            See Partner Terms
          </a>
        </div>
        <p className="mt-5 text-xs hero-fade-d3" style={{ color: "#8C8279" }}>No delivery team to hire. No branding shown to your client unless you want it.</p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-d3" aria-hidden="true">
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(245,183,49,0.6), transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}

function StatsSection() {
  const ref0 = useCountUp(12, 1600, (n) => `${Math.round(n)}K+`);
  const ref1 = useCountUp(120, 1400, (n) => `$${Math.round(n)}M+`);
  const ref2 = useCountUp(25, 1500, (n) => `${Math.round(n)}%`);
  const ref3 = useCountUp(3, 1800, (n) => `${Math.round(n)} wks`);
  const refs = [ref0, ref1, ref2, ref3];
  const labels = STATS.map(s => s.label);
  const icons = ["📅", "💰", "🤝", "🚀"];
  const fade = useScrollFade();

  return (
    <section className="py-14 px-4 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div ref={fade} className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {refs.map((ref, i) => (
          <div key={i} className="lp-stat text-center">
            <div className="text-xl mb-1 lp-icon-bob" style={{ animationDelay: `${i * 0.25}s` }} aria-hidden="true">{icons[i]}</div>
            <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: "#0a0a0a" }}>
              <span ref={ref}>{i === 1 ? "$0M+" : i === 2 ? "0%" : i === 3 ? "0 wks" : "0K+"}</span>
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
    { icon: "🙋", heading: "Clients keep asking, you keep stalling", body: "Every quarter another client asks for lead-gen or outbound. Building that delivery capability in-house is slow, expensive, and pulls focus from what you already do well." },
    { icon: "🎲", heading: "Bad outsourcing burns your name", body: "Handing outbound off to an unreliable freelancer or overseas shop means sloppy emails and spam complaints land under your agency's reputation, not theirs." },
    { icon: "🚪", heading: "The whole account walks", body: "A competitor who already offers outbound as part of their stack picks up the account you couldn't fully serve, and you lose the entire client, not just one service line." },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>The outbound gap in your service stack</h2>
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
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>How the partnership works</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>A new revenue line, none of the delivery risk</h2>
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
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Partner scenarios</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>What this looks like for partners like you</h2>
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
          Let&apos;s build your partner program
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute partner call. We will walk through white-label reporting, margin structure, and how a client engagement would actually run under your brand, no pitch, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/founder-meeting"
            className="px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>
            Become a Partner
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
          <h2 className="text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Apply to become a partner</h2>
          <p className="text-base" style={{ color: "#52525B" }}>Tell us about your agency and we will set up a call to walk through white-label reporting, margin structure, and onboarding your first client engagement. No pitch. No pressure.</p>
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
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Marco Rossi" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / Partnerships Lead" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company / Agency Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Rossi Digital" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+1 646 555 0198" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email *</label>
              <input id="Email" name="Email" type="email" required maxLength={255} placeholder="marco@rossidigital.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <div>
              <label htmlFor="agencyWebsite" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Agency Name / Website (optional)</label>
              <input id="agencyWebsite" name="agencyWebsite" type="text" maxLength={255} placeholder="rossidigital.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <SubmitButton>Apply to Become a Partner</SubmitButton>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. Final margin and terms are confirmed on your partner onboarding call.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function AgencyPartnersClient() {
  return (
    <LpLayout>
      <JsonLd data={buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })))} />
      <HeroSection />
      <StatsSection />
      <PainSection />
      <FlowDiagram
        badge="Behind the scenes"
        title={"Your client sees your brand\nWe run everything behind it"}
        topSteps={[
          { n: "01", icon: "🎯", title: "ICP & Outreach Strategy", body: "We map your client's ideal customer profile and outbound strategy together with you, before a single email or message goes out.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "👥", title: "Build & Enrich Lists", body: "Hand-verified prospect lists of decision-makers, sourced from LinkedIn and enrichment tools, matched to your client's ICP.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📦", title: "Prepare White-Label Assets", body: "Sequences, sender domains, and reporting templates set up under your agency's name, never Myntmore's.", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Partner Enablement (running throughout every engagement)",
          items: [
            { icon: "📊", title: "Co-Branded Reporting", body: "Weekly and monthly performance dashboards, formatted and named as your agency's own reporting." },
            { icon: "💬", title: "Dedicated Slack Channel", body: "Direct line to your account manager for updates, questions, or client-specific requests, no ticket queue." },
            { icon: "🗂️", title: "Partner Portal", body: "One dashboard to track every active client engagement, campaign status, and margin owed across your book." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "🚀", title: "Launch Outreach", body: "Cold email, LinkedIn, and ABM sequences go live under your client's targeting, with full deliverability infrastructure handled by us.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Follow Up & Nurture", body: "Persistent, multi-touch follow-ups keep prospects warm until they reply, all still running under your brand.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "📅", title: "Book & Hand Off Calls", body: "Qualified meetings land on your client's calendar, credited entirely to your agency. You keep the relationship and the margin.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <Faq title="Common questions from partner agencies" items={FAQ_ITEMS} />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
