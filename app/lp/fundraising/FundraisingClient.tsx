"use client";

import { useRef, useEffect } from "react";
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

// Real, sitewide-published track record (same figures used on /1-on-1-consultation,
// /marketing-automation, and the services index) describing our general B2B
// outbound capability -- not investor-outreach-specific results, since this is
// a new offering with no track record of its own yet. Deliberately not
// inventing a "X investor meetings booked" figure to fill this section.
const TRACK_RECORD = [
  { icon: "📬", stat: "12K+", label: "Meetings booked for clients across all outbound campaigns" },
  { icon: "📈", stat: "38%", label: "Average reply rate across campaigns" },
  { icon: "💰", stat: "$120M+", label: "Pipeline generated for clients" },
  { icon: "⏱️", stat: "18", label: "Average days to a campaign's first booked meeting" },
];

const PROCESS = [
  { n: "01", title: "Investor ICP & Thesis Mapping", body: "We define exactly which investors are a fit: stage focus, check size, sector thesis, geography, and portfolio overlap to avoid. Not a blast to every VC with a Twitter account." },
  { n: "02", title: "Verified, Targeted Investor Lists", body: "Real partner and associate contacts at funds (plus relevant angels and family offices) who are actively writing checks at your stage and sector, not a stale scraped database." },
  { n: "03", title: "Personalised Multi-Channel Outreach", body: "Cold email and LinkedIn sequences that reference the fund's actual thesis and recent portfolio, not a copy-pasted \"quick intro\" template every associate ignores." },
  { n: "04", title: "Meetings on Your Calendar", body: "Only investors who genuinely fit your raise land on your calendar. You run the pitch, we keep the pipeline moving and follow up on your behalf." },
];

const FAQ_ITEMS = [
  { q: "Do you get us warm intros, or is this cold outreach?", a: "It's targeted, personalised outreach, not a guaranteed warm-intro service through mutual connections. What makes it feel warmer than a generic cold email is the specificity: we reference the fund's actual thesis, stage focus, and recent portfolio in every message, so it reads as informed outreach, not spray-and-pray." },
  { q: "How is this different from buying a Crunchbase or PitchBook list myself?", a: "A raw database gives you names and firms. It doesn't tell you which partner is actively deploying right now, whether your check size and stage actually fit their fund, or how to personalise the first message so it doesn't read like every other founder's cold email. We build the filtered list and run the full outreach system around it." },
  { q: "Do you help with the pitch deck or the fundraising narrative?", a: "No. Our focus is investor targeting and outreach, getting the right conversations booked, not deck design or narrative coaching. Bring a raise-ready story and we'll get it in front of the right investors." },
  { q: "What if I don't know exactly which investors are the right fit yet?", a: "That's the first step, not a prerequisite. We build your investor ICP with you, based on stage, sector, geography, and check size, before any outreach goes out." },
  { q: "Is this only for a specific funding stage?", a: "We've built this to flex from pre-seed and seed through Series A and B. The investor targeting criteria change with your stage; the underlying system doesn't." },
  { q: "How fast can this be live?", a: "Similar to our B2B outbound engagements: typically live within days once your investor ICP and lists are locked, not weeks. Fundraising timelines move fast and the outreach needs to keep up." },
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
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-32 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div ref={blob1} aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.32) 0%, rgba(255,160,0,0.12) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob2} aria-hidden="true" style={{ position: "absolute", bottom: "-60px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,200,50,0.08) 45%, transparent 68%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
      <div ref={blob3} aria-hidden="true" style={{ position: "absolute", top: "30%", right: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.12) 0%, transparent 65%)", filter: "blur(45px)", pointerEvents: "none", willChange: "transform" }} />

      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "16%", left: "9%", animationDelay: "0.2s", ["--lp-rot" as any]: "-8deg" }}>💼</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "62%", left: "7%", animationDelay: "1.5s", ["--lp-rot" as any]: "8deg" }}>📈</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "20%", right: "8%", animationDelay: "0.9s", ["--lp-rot" as any]: "-10deg" }}>🎯</span>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Breadcrumbs items={[{ label: "For Founders Raising Capital", href: "/lp/fundraising" }]} className="justify-center" />
        <div className="mb-6 hero-fade-d1 relative inline-block">
          <span className="lp-radar-ring" aria-hidden="true" />
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full relative" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For Founders Raising Capital
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Investor outreach that{" "}
          <span className="relative inline-block">
            books calls
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 380 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q95 3 190 7 Q285 11 376 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span><br />not just cold DMs
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          Stop cold-emailing VCs yourself between board decks and product work. We build a targeted, verified investor list matched to your stage and sector, then run the personalised outreach that gets meetings on your calendar, not just opens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-d3">
          <a href="/founder-meeting"
            className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2">
            Book Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#get-started" className="px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl border transition-colors" style={{ borderColor: "#D0C9BF", color: "#0a0a0a", backgroundColor: "rgba(255,255,255,0.7)" }}>
            Get a Custom Plan
          </a>
        </div>
        <p className="mt-5 text-xs hero-fade-d3" style={{ color: "#8C8279" }}>No deck review, no pressure. Just a 30-minute strategy call.</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-d3" aria-hidden="true">
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(245,183,49,0.6), transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}

function TrackRecordSection() {
  const r0 = useCountUp(12, 1600, (n) => `${Math.round(n)}K+`);
  const r1 = useCountUp(38, 1400, (n) => `${Math.round(n)}%`);
  const r2 = useCountUp(120, 1800, (n) => `$${Math.round(n)}M+`);
  const r3 = useCountUp(18, 1500, (n) => `${Math.round(n)} days`);
  const refs = [r0, r1, r2, r3];
  const labels = TRACK_RECORD.map((t) => t.label);
  const initials = ["0K+", "0%", "$0M+", "0 days"];
  const icons = TRACK_RECORD.map((t) => t.icon);
  const fade = useScrollFade();
  return (
    <section className="py-14 px-4 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div ref={fade} className="max-w-5xl mx-auto">
        <p className="text-center text-xs mb-8" style={{ color: "#8C8279" }}>
          Our track record in B2B outbound, the same infrastructure and process we&apos;re applying to investor outreach
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}

function PainSection() {
  const titleFade = useScrollFade(0);
  const c1 = useScrollFade(0); const c2 = useScrollFade(80); const c3 = useScrollFade(160);
  const cards = [c1, c2, c3];
  const pain = [
    { icon: "🕸️", heading: "Warm intros only take you so far", body: "Your network gets you the first 5-10 conversations. The other 40 firms who'd actually fit your raise, you have no path to." },
    { icon: "😮‍💨", heading: "Cold-DMing partners yourself", body: "Hours spent finding the right partner, writing a pitch that gets ignored, and following up manually, time you don't have mid-raise." },
    { icon: "📇", heading: "A generic scraped investor list", body: "A Crunchbase export gives you names, not fit. No idea who's actively deploying, at what check size, or how to open the conversation." },
  ];
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Your network isn&apos;t the whole cap table</h2>
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
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>An investor outreach engine, built for your raise</h2>
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

function WhyThisWorksSection() {
  const titleFade = useScrollFade(0);
  const c1 = useScrollFade(0); const c2 = useScrollFade(80); const c3 = useScrollFade(160);
  const cRefs = [c1, c2, c3];
  const points = [
    { icon: "🎯", title: "ICP discipline, applied to investors", body: "The same rigor we use to define a B2B buyer, title, stage, trigger signals, applies directly to investor targeting: fund stage, check size, sector thesis, and portfolio overlap." },
    { icon: "🛡️", title: "Deliverability infrastructure that protects your name", body: "Dedicated sending domains, proper warm-up, and strict sending limits, the same setup that keeps our clients' outreach out of spam, protects your reputation with investors too." },
    { icon: "🔁", title: "Follow-up cadence, not a one-off blast", body: "Most replies come from the 2nd or 3rd touch, not the first. We run the same persistent, multi-touch cadence on investor outreach that we run for B2B pipeline." },
  ];
  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Why this works</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>The same system that&apos;s booked 12K+ B2B meetings</h2>
          <p className="text-base mt-4 max-w-2xl" style={{ color: "#52525B" }}>
            Investor outreach is a new focus for us, we&apos;re upfront about that. What isn&apos;t new is the underlying discipline: targeted lists, personalised multi-channel sequences, and relentless follow-up, the exact system behind our B2B outbound track record, now pointed at your cap table instead of your customer base.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={p.title} ref={cRefs[i]} className="lp-card rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-4xl mb-4 lp-icon-bob" style={{ animationDelay: `${i * 0.3}s` }}>{p.icon}</div>
              <h3 className="font-black text-lg mb-2" style={{ color: "#0a0a0a" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
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
          Let&apos;s build your investor pipeline
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute call. We&apos;ll map your investor ICP and show you exactly how the outreach system would run for your raise. Free, no strings attached.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/founder-meeting"
            className="px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>
            Book Free Strategy Call
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
          <h2 className="text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free investor outreach plan</h2>
          <p className="text-base" style={{ color: "#52525B" }}>We&apos;ll map your investor ICP and hand you a custom outreach plan for your raise. Free, no strings attached.</p>
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
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Arjun Sharma" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / CEO / Co-founder" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Acme Inc" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email *</label>
              <input id="Email" name="Email" type="email" required maxLength={255} placeholder="arjun@acme.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <SubmitButton>Get My Free Investor Outreach Plan</SubmitButton>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function FundraisingClient() {
  return (
    <LpLayout>
      <JsonLd data={buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })))} />
      <HeroSection />
      <TrackRecordSection />
      <PainSection />
      <FlowDiagram
        badge="Our system"
        title={"From investor list to booked calls\nEvery single round"}
        topSteps={[
          { n: "01", icon: "🎯", title: "Investor ICP & Thesis Mapping", body: "Define exactly which investors fit: stage focus, check size, sector thesis, geography, and portfolio overlap to avoid.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "🔍", title: "Verified Investor Lists", body: "Real partner and associate contacts at funds actively deploying at your stage and sector, not a scraped database dump.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📝", title: "Personalised Outreach Copy", body: "Cold email and LinkedIn copy referencing each fund's actual thesis and recent portfolio, not a generic \"quick intro\".", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Founder Visibility Building",
          items: [
            { icon: "💡", title: "Momentum Updates", body: "LinkedIn posts sharing real traction and milestones, so a cold email doesn't look cold when an investor checks your profile." },
            { icon: "📊", title: "Thought Leadership", body: "Content that positions you as the founder who's already thinking two steps ahead, not just asking for money." },
            { icon: "🔗", title: "Profile Optimisation", body: "A headline and about section written to hold up to investor due diligence at first glance." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "🚀", title: "Launch Multi-Channel Sequences", body: "Cold email + LinkedIn sequences go live in parallel, personalised to each fund's context.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Follow-Up & Meeting Scheduling", body: "Persistent, multi-touch follow-up until investors respond, with meetings booked directly onto your calendar.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "📋", title: "Investor Pipeline Tracking", body: "Every conversation tracked from contacted through term sheet, so nothing falls through the cracks mid-raise.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <WhyThisWorksSection />
      <Faq title="Common questions from founders raising capital" items={FAQ_ITEMS} />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
