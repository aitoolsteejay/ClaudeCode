"use client";

import { useRef, useEffect } from "react";
import LpLayout from "../LpLayout";
import FlowDiagram from "../FlowDiagram";

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
    tag: "Auto Parts Exporter · Gujarat",
    headline: "14 qualified international buyer meetings in one quarter",
    body: "An auto components manufacturer with ISO certification was relying solely on trade fairs and B2B portals. We built a prospect list of procurement managers and sourcing heads at Tier-1 auto manufacturers in Europe and Southeast Asia, and ran a targeted cold email + LinkedIn campaign. In one quarter, they booked 14 meetings — 3 led to formal RFQs.",
    results: ["14 international buyer meetings", "3 RFQs initiated", "2 new export markets"],
  },
  {
    tag: "Textile Manufacturer · Surat",
    headline: "Distributor partnerships in 3 new countries within 90 days",
    body: "A Surat-based synthetic textile manufacturer wanted to break into the Middle East and African markets without spending on trade delegations. We mapped importer and distributor profiles across UAE, Kenya, and Nigeria, built personalised outreach referencing their product categories, and ran a consistent campaign. 90 days later: 11 distributor conversations, 3 signed partnership agreements.",
    results: ["11 distributor conversations", "3 partnership agreements", "UAE, Kenya, Nigeria markets"],
  },
  {
    tag: "Industrial Equipment · Pune",
    headline: "₹3.2Cr B2B export pipeline for a capital goods manufacturer",
    body: "A Pune-based capital goods company was selling domestically but struggling to break into international markets. We identified their target buyer — factory operators and procurement VPs at mid-sized industrial companies in ASEAN — and built an ABM campaign with personalised decks and email sequences. Result: 9 meetings with qualified buyers, ₹3.2Cr in active pipeline.",
    results: ["9 qualified buyer meetings", "₹3.2Cr pipeline", "ASEAN market entry"],
  },
];

const PROCESS = [
  { n: "01", title: "Buyer ICP Mapping", body: "We identify the exact buyer profile for your product — industry, country, company size, procurement structure — and build a target account list." },
  { n: "02", title: "Global Prospect Database", body: "Hand-verified contacts of importers, distributors, procurement heads, and sourcing managers in your target markets. No outdated trade directories." },
  { n: "03", title: "Personalised Outreach", body: "Multi-touch email and LinkedIn sequences tailored to each market's tone and buying behaviour. Not a generic template blast." },
  { n: "04", title: "Qualified Meetings", body: "Interested buyers land in your calendar. Your team focuses on relationship-building and closing — we handle the cold outreach." },
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
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.55) * 170 + Math.sin(t * 0.22) * 65}px, ${Math.cos(t * 0.42) * 125 + Math.cos(t * 0.17) * 48}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.48 + 2) * 155 + Math.cos(t * 0.32) * 58}px, ${Math.cos(t * 0.58 + 1) * 135 + Math.sin(t * 0.26) * 48}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.52 + 4) * 135 + Math.sin(t * 0.28) * 48}px, ${Math.cos(t * 0.48 + 2) * 115 + Math.cos(t * 0.38) * 38}px)`;
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

      {/* Floating export signals */}
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "18%", left: "8%", animationDelay: "0.2s", ["--lp-rot" as any]: "-6deg" }}>🌍</span>
      <span className="lp-float-icon hidden sm:block text-3xl lp-pop-in" aria-hidden="true" style={{ top: "64%", left: "10%", animationDelay: "1.4s", ["--lp-rot" as any]: "8deg" }}>📦</span>
      <span className="lp-float-icon hidden sm:block text-4xl lp-pop-in" aria-hidden="true" style={{ top: "22%", right: "9%", animationDelay: "0.7s", ["--lp-rot" as any]: "-10deg" }}>🚢</span>

      {/* Trade route: a shipment travelling from origin to destination */}
      <svg aria-hidden="true" className="hidden sm:block" style={{ position: "absolute", top: "58%", right: "6%", width: "220px", height: "90px", pointerEvents: "none" }} viewBox="0 0 220 90">
        <path id="trade-route-path" d="M6 78 Q70 8 214 20" stroke="rgba(245,183,49,0.35)" strokeWidth="2" strokeDasharray="5 6" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="78" r="4" fill="#D97706" opacity="0.5" />
        <circle cx="214" cy="20" r="4" fill="#D97706" opacity="0.5" />
        <text x="0" y="20" fontSize="16">✈️
          <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#trade-route-path" />
          </animateMotion>
        </text>
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 hero-fade-d1">
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
            For Manufacturers & Exporters
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] hero-fade-d2" style={{ color: "#0a0a0a" }}>
          Find international buyers<br />
          <span className="relative inline-block">
            without
            <svg aria-hidden="true" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 300 12" preserveAspectRatio="none">
              <path ref={underlineRef} d="M4 8 Q75 3 150 7 Q225 11 296 6" stroke="#F5B731" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}trade fairs
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 hero-fade-d3" style={{ color: "#52525B" }}>
          We connect Indian manufacturers and exporters with qualified global buyers through AI-powered outreach — targeting procurement heads, importers, and distributors in your exact export markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-d3">
          <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer"
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
  const r0 = useCountUp(14, 1400, (n) => `${Math.round(n)}+`);
  const r1 = useCountUp(38, 1600, (n) => `${Math.round(n)}`);
  const r2 = useCountUp(6, 1400, (n) => `${Math.round(n)}×`);
  const r3 = useCountUp(2.4, 1800, (n) => `$${n.toFixed(1)}M+`);
  const refs = [r0, r1, r2, r3];
  const labels = ["Intl buyer meetings / quarter (avg)", "Countries our clients have closed deals in", "More meetings vs trade show ROI", "Export pipeline generated"];
  const initials = ["0+", "0", "0×", "$0M+"];
  const icons = ["🤝", "🌐", "📈", "💰"];
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
    { icon: "✈️", heading: "Trade fairs are expensive and slow", body: "₹8-15L spent per fair. Two leads who ghost you. Six months of follow-up for one deal. The ROI doesn't add up." },
    { icon: "📋", heading: "B2B portals bring wrong enquiries", body: "IndiaMART and Alibaba attract price shoppers. Finding serious buyers among hundreds of low-quality enquiries wastes your sales team's time." },
    { icon: "🌍", heading: "You don't know who to target globally", body: "Finding the right importer or distributor in a new country — with the right product fit and buying capacity — is nearly impossible without local intelligence." },
  ];
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>The export challenge</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Trade fairs and portals are not enough</h2>
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
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>Your global buyer pipeline, built and managed</h2>
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
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>What we have built for manufacturers like yours</h2>
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
          Ready to reach global buyers?
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 30-minute export GTM audit. We will map your target markets, identify the right buyer profiles, and tell you exactly how to generate international meetings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer"
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
          <h2 className="text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free export GTM audit</h2>
          <p className="text-base" style={{ color: "#52525B" }}>We will map your target export markets, identify the right buyer profiles, and show you exactly how to start generating international meetings. No cost. No obligation.</p>
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
                <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Ramesh Patel" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="MD / Export Head / Owner" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company Name</label>
                <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Patel Industries Pvt Ltd" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <div>
                <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
              <input id="Email" name="Email" type="text" maxLength={255} placeholder="ramesh@patelindustries.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
            </div>
            <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free Export GTM Audit</button>
            <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function ManufacturersExportersLP() {
  return (
    <LpLayout>
      <HeroSection />
      <StatsSection />
      <PainSection />
      <FlowDiagram
        badge="Our system"
        title={"From Indian factory to global buyer\nEvery single time"}
        topSteps={[
          { n: "01", icon: "🗺️", title: "Buyer Profile Mapping", body: "Define your target market: product category, buyer type (importer, distributor, OEM), country, and procurement structure.", color: "rgba(139,92,246,0.12)" },
          { n: "02", icon: "🌍", title: "Global Prospect Database", body: "Hand-verified contacts of procurement heads, sourcing managers, and importers in your exact export markets. No outdated directories.", color: "rgba(59,130,246,0.12)" },
          { n: "03", icon: "📄", title: "Localised Outreach Assets", body: "Capability decks, product brochures, and cold email copy tailored to each target market's tone and buying behaviour.", color: "rgba(245,183,49,0.15)" },
        ]}
        parallel={{
          label: "Export Credibility Building",
          items: [
            { icon: "🏅", title: "Certifications Showcase", body: "ISO, quality, and compliance credentials positioned front and centre to build immediate buyer trust." },
            { icon: "🤝", title: "Buyer Testimonials", body: "Social proof from existing international clients formatted for LinkedIn and outreach sequences." },
            { icon: "📢", title: "LinkedIn Presence", body: "Consistent content targeting procurement and sourcing communities in your export markets." },
          ],
        }}
        bottomSteps={[
          { n: "04", icon: "✉️", title: "Launch International Outreach", body: "Cold email + LinkedIn sequences targeting procurement heads and importers globally with personalised messaging.", color: "rgba(239,68,68,0.12)" },
          { n: "05", icon: "🔄", title: "Qualify & Follow Up", body: "Persistent follow-ups with product samples, spec sheets, and buyer testimonials until serious buyers respond.", color: "rgba(16,185,129,0.12)" },
          { n: "06", icon: "🤝", title: "Book Buyer Meetings", body: "Qualified importers and distributors land in your calendar. Your team focuses on relationship-building and closing.", color: "rgba(245,183,49,0.15)" },
        ]}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <DarkCTASection />
      <FormSection />
    </LpLayout>
  );
}
