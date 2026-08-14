"use client";

import { useRef, useEffect } from "react";
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

function useCountUp(target: number, duration = 1800, format: (n: number) => string) {
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

const CASE_STUDIES = [
  {
    tag: "B2B SaaS · HR Tech · Series A",
    headline: "0 to 28 qualified demos per month in 60 days",
    body: "An HR-tech startup had great product-market fit within their network but couldn't scale beyond warm intros. We mapped their ICP to CHROs and HR Heads at companies with 200-1000 employees scaling through a hiring spike, and built a cold email + LinkedIn sequence referencing hiring triggers. In 60 days, their AE calendar was fully booked with 28 demos/month, 7 converted to paid.",
    results: ["28 demos/month", "7 paid conversions", "60-day ramp"],
  },
  {
    tag: "PropTech SaaS · Seed Stage · Mumbai",
    headline: "Sales calendar filled in 45 days, ₹48L in new ARR",
    body: "A PropTech SaaS founder was spending 20 hours a week on manual LinkedIn outreach with no system. We rebuilt their outbound from scratch: ICP mapping to real estate developers and property management companies, automated personalisation based on their portfolio size and recent projects, and a 4-touch sequence. 45 days later: 19 demos, ₹48L ARR in new contracts.",
    results: ["19 qualified demos", "₹48L new ARR", "45-day turnaround"],
  },
  {
    tag: "Fintech SaaS · Pre-Series A · Bengaluru",
    headline: "3 enterprise pilots closed from cold outreach in one quarter",
    body: "A B2B fintech startup targeting CFOs at mid-market companies was struggling to get past gatekeepers. We built a hyper-targeted ABM campaign (personalised research notes for each account, multi-touch sequences mixing email and LinkedIn) and coached them on objection handling. In one quarter: 22 meetings, 3 enterprise pilots closed, 2 expanding.",
    results: ["22 meetings booked", "3 enterprise pilots", "2 expansion deals"],
  },
];

const PROCESS = [
  { n: "01", title: "ICP & Buyer Map", body: "We define exactly who your buyer is: title, company stage, industry, tech stack, and the trigger signals that make them ready to buy. No guessing." },
  { n: "02", title: "Signal-Based Targeting", body: "We build prospect lists using buying signals (funding rounds, hiring sprees, new leadership hires, tech adoption), not just job titles." },
  { n: "03", title: "Multi-Channel Sequences", body: "Cold email and LinkedIn combined, with copy personalised to each prospect's context. Not a generic template everyone ignores." },
  { n: "04", title: "Demo-Ready Handoffs", body: "Only qualified prospects (right ICP, right pain, right authority) hit your calendar. You demo and close. We keep the pipeline flowing." },
];

const FAQ_ITEMS = [
  { q: "How is this different from tools like Apollo or Clay that we already use?", a: "Those tools give you data. We give you a fully managed system, ICP mapping, signal based targeting, copywriting, sequencing, and deliverability, run by a team that adjusts it every week based on what is working." },
  { q: "Will this work if we are still pre-product-market fit?", a: "Outbound works best once you have a handful of paying customers and a clear picture of who gets value fastest. If you are very early, we will tell you honestly and suggest starting with a smaller pilot." },
  { q: "How do you avoid spam filters and protect our sender reputation?", a: "We set up dedicated sending infrastructure, warm it up properly, and follow strict sending limits and personalisation practices, so your core domain reputation stays protected." },
  { q: "Do you integrate with our CRM, like HubSpot or Salesforce?", a: "Yes. Every qualified reply and booked demo is logged in the CRM your team already uses, with full context from the conversation." },
  { q: "What does pricing and commitment look like?", a: "We work on a monthly retainer with no long term lock in, so you can review pipeline results every 30 days." },
  { q: "We already tried outbound once and it did not work. Why would this be different?", a: "Most failed outbound comes down to generic targeting and copy that reads like everyone else's. We rebuild it around specific buying signals and messaging tailored to your product, and iterate weekly instead of setting it and walking away." },
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
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.58) * 175 + Math.sin(t * 0.23) * 68}px, ${Math.cos(t * 0.44) * 128 + Math.cos(t * 0.19) * 49}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.5 + 2) * 158 + Math.cos(t * 0.34) * 60}px, ${Math.cos(t * 0.62 + 1) * 138 + Math.sin(t * 0.27) * 49}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.54 + 4) * 138 + Math.sin(t * 0.29) * 49}px, ${Math.cos(t * 0.49 + 2) * 118 + Math.cos(t * 0.39) * 39}px)`;
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
        path!.style.strokeDashoffset = String(length * Math.pow(1 - p, 3));
        if (p < 1) animId = requestAnimationFrame(draw);
      }
      animId = requestAnimationFrame(draw);
    }, 400);
    return () => { clearTimeout(timer); cancelAnimationFrame(animId); };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-24 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div ref={blob1} aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.32) 0%, rgba(255,160,0,0.12) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob2} aria-hidden="true" style={{ position: "absolute", bottom: "-60px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,200,50,0.08) 45%, transparent 68%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob3} aria-hidden="true" style={{ position: "absolute", top: "30%", right: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.12) 0%, transparent 65%)", filter: "blur(45px)", pointerEvents: "none", willChange: "transform" }} />

      {/* Floating signal icons */}
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "16%", left: "9%", animationDelay: "0.2s", ["--lp-rot" as any]: "-8deg" }}>📊</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "62%", left: "7%", animationDelay: "1.5s", ["--lp-rot" as any]: "8deg" }}>⚡</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "20%", right: "8%", animationDelay: "0.9s", ["--lp-rot" as any]: "-10deg" }}>🎯</span>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 hero-fade-d1 relative inline-block">
          {/* Radar ping: "ready to buy" signal detection */}
          <span className="lp-radar-ring" aria-hidden="true" />
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full relative" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For B2B SaaS Founders
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Outbound that{" "}
          <span className="relative inline-block">
            books demos
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 380 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q95 3 190 7 Q285 11 376 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span><br />not just opens
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          We build and run a predictable outbound engine for B2B SaaS: ICP mapping, signal-based targeting, cold email and LinkedIn sequences that put qualified prospects in your calendar every week.
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-d3" aria-hidden="true">
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(245,183,49,0.6), transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}

function StatsSection() {
  const r0 = useCountUp(28, 1600, (n) => `${Math.round(n)}+`);
  const r1 = useCountUp(52, 1400, (n) => `${Math.round(n)}%`);
  const r2 = useCountUp(60, 1500, (n) => `${Math.round(n)} days`);
  const r3 = useCountUp(120, 1800, (n) => `$${Math.round(n)}M+`);
  const refs = [r0, r1, r2, r3];
  const labels = ["Qualified demos booked / month (avg)", "Reply rate on best-performing sequences", "To first qualified pipeline", "Pipeline generated across SaaS clients"];
  const initials = ["0+", "0%", "0 days", "$0M+"];
  const icons = ["📅", "📬", "⏱️", "💰"];
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
  const c1 = useScrollFade(0); const c2 = useScrollFade(80); const c3 = useScrollFade(160);
  const cards = [c1, c2, c3];
  const pain = [
    { icon: "📭", heading: "Cold outreach getting ignored", body: "Generic sequences, same openers as every other SaaS tool. Your emails land, nobody replies. You wonder if cold outreach even works." },
    { icon: "🎯", heading: "Wrong ICP, wrong pain", body: "Booking demos with companies who are not ready, not right-sized, or not the actual buyer. AE time wasted on bad-fit prospects." },
    { icon: "🔄", heading: "Founder doing outbound manually", body: "You spend half your week on LinkedIn and email instead of product and customers. It doesn't scale and it burns you out." },
  ];
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Warm intros only take you so far</h2>
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
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>A full outbound engine built for SaaS</h2>
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
  const c1 = useScrollFade(0); const c2 = useScrollFade(80); const c3 = useScrollFade(160);
  const cRefs = [c1, c2, c3];
  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Client results</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>What we have built for SaaS companies like yours</h2>
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
          Let&apos;s fill your demo calendar
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute outbound audit. We will review your ICP, outreach copy, and pipeline, and hand you a custom action plan. Free, no strings attached.
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
          <h2 className="text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free outbound audit</h2>
          <p className="text-base" style={{ color: "#52525B" }}>We will audit your ICP, outreach copy, and pipeline, and hand you a custom action plan. Free, no strings attached.</p>
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
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Arjun Sharma" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / CEO / Head of Growth" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company / Product Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Acme SaaS" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
              <input id="Email" name="Email" type="text" maxLength={255} placeholder="arjun@acmesaas.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free Outbound Audit</button>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function SaasFoundersClient() {
  return (
    <LpLayout>
      <HeroSection />
      <StatsSection />
      <PainSection />
      <FlowDiagram
        badge="Our system"
        title={"From cold list to full demo calendar\nEvery single time"}
        topSteps={[
          { n: "01", icon: "🎯", title: "ICP & Signal Mapping", body: "Define your exact buyer: title, company stage, tech stack, and the trigger signals that mean they are ready to buy right now.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "⚡", title: "Signal-Based Prospect Lists", body: "Prospects filtered by funding rounds, hiring sprees, leadership changes, and tool adoption, not just job titles.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📝", title: "Demo Assets & Sequences", body: "Cold email copy, LinkedIn scripts, ROI frameworks, and objection handling prep built around your product's core value.", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Founder LinkedIn Brand Building",
          items: [
            { icon: "💡", title: "Thought Leadership", body: "Product insights, industry takes, and ICP-facing content that warms prospects before your cold email lands." },
            { icon: "📊", title: "Social Proof Posts", body: "Customer wins, product milestones, and use-case content that builds credibility with your exact buyer." },
            { icon: "🔗", title: "Profile Optimisation", body: "Headline and about section written to convert profile visitors from your ICP into inbound conversations." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "🚀", title: "Launch Outbound Sequences", body: "Multi-touch cold email + LinkedIn sequences go live with personalised copy based on each prospect's buying signals.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Nurture & Follow Up", body: "Persistent follow-ups sharing product demos, case studies, and ROI data until qualified prospects respond.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "📅", title: "Book Qualified Demos", body: "Only ICP-fit prospects with real pain and buying authority hit your AE calendar. You demo and close.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <Faq title="Common questions from SaaS founders" items={FAQ_ITEMS} />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
