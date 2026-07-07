"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";

function Blobs() {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerWidth < 768) return; // skip blob animation on mobile
    let frame: number;
    const tick = (t: number) => {
      const s = t / 1000;
      if (b1.current) b1.current.style.transform = `translate(${Math.sin(s * 0.38) * 30}px,${Math.cos(s * 0.28) * 24}px)`;
      if (b2.current) b2.current.style.transform = `translate(${Math.cos(s * 0.32) * 34}px,${Math.sin(s * 0.42) * 20}px)`;
      if (b3.current) b3.current.style.transform = `translate(${Math.sin(s * 0.48) * 22}px,${Math.cos(s * 0.36) * 28}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div ref={b1} className="absolute rounded-full blur-3xl opacity-20" style={{ width: 500, height: 500, background: "radial-gradient(circle,#F5B731,transparent 70%)", top: "-100px", right: "-60px" }} />
      <div ref={b2} className="absolute rounded-full blur-3xl opacity-18" style={{ width: 380, height: 380, background: "radial-gradient(circle,#a855f7,transparent 70%)", bottom: "-80px", left: "-40px" }} />
      <div ref={b3} className="absolute rounded-full blur-3xl opacity-14" style={{ width: 300, height: 300, background: "radial-gradient(circle,#3b82f6,transparent 70%)", top: "35%", left: "25%" }} />
    </div>
  );
}

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
    <svg viewBox="0 0 360 14" className="absolute -bottom-2 left-0 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path ref={pathRef} d="M4 9 Q90 3 180 9 Q270 15 356 7" stroke="#F5B731" strokeWidth="3.5" strokeLinecap="round"
        strokeDasharray={len || 400} strokeDashoffset={drawn ? 0 : len || 400}
        style={{ transition: drawn ? "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)" : "none" }} />
    </svg>
  );
}

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

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
    <div ref={ref} className={className} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease` }}>
      {children}
    </div>
  );
}

const CHIPS = ["Remote-first","AI-native team","Fast feedback loops","Outcome over hours","Radical ownership","Learning stipend","Async-friendly","Real equity upside","No bureaucracy","Ship fast"];

function Marquee() {
  const items = [...CHIPS, ...CHIPS];
  return (
    <div className="overflow-hidden py-4" aria-hidden>
      <div className="flex gap-3 animate-[marquee-left_26s_linear_infinite] w-max">
        {items.map((c, i) => (
          <span key={i} className="whitespace-nowrap text-xs font-semibold px-4 py-2 rounded-full border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#52525B" }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

const ROLES = [
  {
    slug: "content-strategist", accent: "#F5B731", tag: "Content & LinkedIn",
    title: "Content Strategist & LinkedIn Ghostwriter",
    type: "Full-time · Remote", location: "India",
    desc: "You'll own the content engine for multiple B2B founders — writing posts, threads, and newsletters that drive real pipeline.",
    bullets: ["3+ years B2B LinkedIn content", "Strong ghostwriting portfolio", "Understands ICP-led messaging"],
  },
  {
    slug: "lead-gen-strategist", accent: "#a855f7", tag: "Outbound & GTM",
    title: "Lead Generation Strategist",
    type: "Full-time · Remote", location: "India",
    desc: "You'll build and run outbound systems: Clay workflows, cold email sequences, LinkedIn outreach — end to end.",
    bullets: ["2+ years outbound experience", "Hands-on with Clay or Apollo", "Data-driven and systems-minded"],
  },
];

const VALUES = [
  { icon: "⚡", title: "Ship fast", desc: "We move in days, not quarters. If it can be tested, it gets tested this week." },
  { icon: "🎯", title: "Outcome over hours", desc: "We don't track time. We track results. Own your output, own your schedule." },
  { icon: "🧠", title: "AI-native by default", desc: "Every workflow starts with: how do we use AI here? Not as a buzzword — as leverage." },
  { icon: "📈", title: "Learn out loud", desc: "Share what's working. Share what failed. The whole team gets smarter together." },
];

export default function Careers() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <Blobs />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              We&apos;re Hiring
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Join the team that{" "}
            <span className="relative inline-block">
              builds pipelines.
              <Underline />
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            We&apos;re a small, high-output team obsessed with B2B growth. If you want to own real outcomes — not slide decks — you&apos;re our kind of person.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ backgroundColor: "#F0EDE8", borderTop: "1px solid #E8E2D9", borderBottom: "1px solid #E8E2D9" }}>
        <Marquee />
      </div>

      {/* Stats */}
      <FadeIn>
        <section className="py-10 px-4" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #E8E2D9" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
            {[{ v: "2", l: "Open roles" }, { v: "10+", l: "Clients served" }, { v: "3", l: "Countries reached" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#F5B731" }}><Ticker value={s.v} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Open roles */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Open roles</h2>
          </FadeIn>
          <div className="space-y-6">
            {ROLES.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 80}>
                <RoleCard role={r} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>How we work</span>
              <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Built for builders</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 60}>
                <div className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: "#52525B" }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process + location */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <h3 className="text-xl font-black mb-6" style={{ color: "#0a0a0a" }}>How we hire</h3>
              {[
                { step: "01", title: "Apply", desc: "Send us your CV and a short note on why this role." },
                { step: "02", title: "Async task", desc: "Small take-home task (under 2 hours) so we see your thinking." },
                { step: "03", title: "30-min call", desc: "Meet the founder. No gotcha questions — just a real conversation." },
                { step: "04", title: "Offer", desc: "Fast decisions. We don&apos;t ghost candidates." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 mb-5 last:mb-0">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{item.step}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "#0a0a0a" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "#52525B" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={80} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>Our office</h3>
                <p className="text-sm" style={{ color: "#52525B" }}>
                  WeWork, 1st floor, 264-265,<br />
                  Dr Annie Besant Rd,<br />
                  Worli Shivaji Nagar,<br />
                  Worli, Mumbai 400025
                </p>
              </div>
              <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>Not seeing your role?</h3>
                <p className="text-sm mb-4" style={{ color: "#52525B" }}>We hire for attitude and skill. Send us a note anyway.</p>
                <a href="mailto:growth@myntmore.com" className="text-sm font-bold" style={{ color: "#F5B731" }}>growth@myntmore.com →</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(245,183,49,0.15)", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Ready to build?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">Let&apos;s work together</h2>
            <p className="text-base mb-8" style={{ color: "#9ca3af" }}>Apply for an open role or send a cold email. We respect both.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:growth@myntmore.com" className="btn-dark px-8 py-4 text-sm font-bold">Email us directly</a>
              <Link href="/contact-us" className="px-8 py-4 text-sm font-bold rounded-full border transition-all duration-200" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#ffffff", backgroundColor: "transparent" }}>Book a call instead</Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </InnerLayout>
  );
}

function RoleCard({ role }: { role: typeof ROLES[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/careers/${role.slug}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="group block rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ backgroundColor: "#ffffff", borderColor: hov ? role.accent : "#E8E2D9", boxShadow: hov ? `0 12px 40px ${role.accent}22` : "0 2px 8px rgba(0,0,0,0.04)", transform: hov ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ height: 4, background: `linear-gradient(90deg,${role.accent},${role.accent}88)`, opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${role.accent}12`, color: role.accent, border: `1px solid ${role.accent}30` }}>{role.tag}</span>
          <div className="text-right">
            <p className="text-xs font-semibold" style={{ color: "#8C8279" }}>{role.type}</p>
            <p className="text-xs" style={{ color: "#8C8279" }}>{role.location}</p>
          </div>
        </div>
        <h3 className="text-xl font-black mb-2" style={{ color: "#0a0a0a" }}>{role.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>{role.desc}</p>
        <ul className="space-y-1.5 mb-4">
          {role.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "#52525B" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: role.accent }} />
              {b}
            </li>
          ))}
        </ul>
        <span className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" style={{ color: role.accent }}>
          View role
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </span>
      </div>
    </Link>
  );
}
