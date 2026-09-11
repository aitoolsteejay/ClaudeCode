"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import JsonLd from "../../components/JsonLd";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildServiceSchema, buildHowToSchema, buildFaqSchema, SITE_URL } from "@/lib/schema";

const ACCENT = "#7C3AED";

const SERVICE_SCHEMA = buildServiceSchema({
  name: "Do It Yourself LinkedIn Outreach Tool",
  description: "A self-serve LinkedIn outreach tool. Log in with your own LinkedIn account, build a campaign, upload your leads, and let it send connection requests and follow-ups on your behalf, with human-like sending behaviour and a full metrics dashboard.",
  serviceType: "Self-Serve LinkedIn Outreach Software",
  url: `${SITE_URL}/services/do-it-yourself`,
});

/* ─── Data ──────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "Connect Your LinkedIn", desc: "Log in with your own LinkedIn account. It stays yours: the tool runs your outreach from your profile, nothing is handed over to us." },
  { n: "02", title: "Create a Campaign", desc: "Start a new campaign for whichever list or segment you're targeting next. Every campaign runs independently, with its own leads, message, and schedule." },
  { n: "03", title: "Upload Your Leads", desc: "Upload the list of leads you want to reach for this campaign." },
  { n: "04", title: "Write Your Connection Note", desc: "Set the connection request note that goes out with your invite." },
  { n: "05", title: "Configure Your Follow-Ups", desc: "Decide how many follow-up messages to send, what each one says, and the time delay before each one goes out." },
  { n: "06", title: "Launch the Campaign", desc: "Hit launch. The tool mimics human behaviour to send out connection requests and follow-ups on your configured schedule." },
];

const HOWTO_SCHEMA = buildHowToSchema(
  "How the Do It Yourself LinkedIn Outreach Tool Works",
  STEPS.map((s) => ({ name: s.title, text: s.desc }))
);

const FEATURES = [
  { icon: "🔐", title: "Runs On Your LinkedIn", desc: "You log in with your own account and stay in control of it. We don't manage or touch your profile, the tool just automates the sending." },
  { icon: "🧩", title: "Full Campaign Builder", desc: "Upload leads, write your connection note, and build a follow-up sequence, with as many campaigns running as you need." },
  { icon: "🤖", title: "Human-Like Sending", desc: "Connection requests and follow-ups go out mimicking human behaviour, on the schedule and delays you configure." },
  { icon: "📊", title: "A Dashboard For Every Lead", desc: "See campaign-level and lifetime metrics, acceptance rate, reply rate, and the live status of every single lead." },
];

const DELIVERABLES = [
  "A campaign builder for leads, connection notes, and follow-up sequences",
  "Configurable number of follow-ups, message content, and time delay for each",
  "Human-mimicking send behaviour for connection requests and follow-ups",
  "A live dashboard with per-campaign metrics and lifetime metrics",
  "Acceptance rate and reply rate tracking",
  "Status tracking for every individual lead in every campaign",
];

const WHO_FOR = [
  { icon: "🚀", title: "Founders & Small Teams", desc: "Run your own LinkedIn outreach without hiring an agency or an SDR, from a dashboard built for exactly this job." },
  { icon: "🧑‍💻", title: "Sales Reps Who Want Control", desc: "Set up your own campaigns, write your own notes and follow-ups, and keep full visibility into every lead yourself." },
  { icon: "🤝", title: "Agencies & Consultants", desc: "Run outreach across your own or your clients' LinkedIn accounts, with a separate campaign and dashboard for each." },
];

const FAQ_ITEMS = [
  { q: "How is this different from your Done-for-You LinkedIn Outreach service?", a: "Done-for-You means our team builds and manages your entire LinkedIn outreach strategy, copy, and execution for you. Do It Yourself is the same underlying automation, but you're in the driver's seat: you log in with your own LinkedIn account, build your own campaigns, write your own notes and follow-ups, and run it yourself from your own dashboard." },
  { q: "Whose LinkedIn account does this run on?", a: "Yours. You log in with your own LinkedIn account, and every campaign you build runs from that account. Nothing is handed over to us." },
  { q: "Can I run more than one campaign?", a: "Yes. Each campaign has its own list of leads, connection note, and follow-up sequence, so you can run as many as you need at once, for different segments, offers, or lists." },
  { q: "What can I configure for my follow-ups?", a: "For every campaign, you set how many follow-up messages go out, what each one says, and the time delay before each one is sent." },
  { q: "What do I see on my dashboard?", a: "Both campaign-level and lifetime metrics: acceptance rate, reply rate, and the live status of every lead in every campaign." },
  { q: "How do I get access?", a: "Book a call with our team and we'll get you set up." },
];

const FAQ_SCHEMA = buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })));

const CAPABILITY_CHIPS = [
  "Your Own LinkedIn Login", "Custom Connection Notes", "Configurable Follow-Ups",
  "Human-Like Sending", "Lead-by-Lead Status", "Acceptance Rate Tracking",
  "Reply Rate Tracking", "Lifetime Metrics", "Multiple Campaigns", "Full Dashboard Access",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open
        ? { borderColor: "rgba(124,58,237,0.4)", borderLeftColor: ACCENT, borderLeftWidth: "3px", backgroundColor: "rgba(124,58,237,0.04)" }
        : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "rgba(124,58,237,0.12)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke={open ? ACCENT : "#6B6B6B"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#52525B" }}>{a}</p>
      </div>
    </div>
  );
}

function CapabilityChip({ label, i }: { label: string; i: number }) {
  const isPurple = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isPurple ? "linear-gradient(135deg,#fff 0%,#F5F3FF 100%)" : "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)",
        borderColor: isPurple ? "rgba(124,58,237,0.3)" : "rgba(245,183,49,0.35)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isPurple ? ACCENT : "#D97706" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function DoItYourselfClient() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const ctaBlob1 = useRef<HTMLDivElement>(null);
  const ctaBlob2 = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.65) * 210 + Math.sin(t * 0.28) * 75}px, ${Math.cos(t * 0.5) * 145 + Math.cos(t * 0.2) * 55}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.55 + 2) * 210 + Math.cos(t * 0.38) * 72}px, ${Math.cos(t * 0.72 + 1) * 145 + Math.sin(t * 0.32) * 52}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.5 + 4) * 185 + Math.sin(t * 0.33) * 62}px, ${Math.cos(t * 0.62 + 2) * 165 + Math.cos(t * 0.43) * 52}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (ctaBlob1.current) ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.75) * 310 + Math.sin(t * 0.28) * 92}px, ${Math.cos(t * 0.58) * 135 + Math.cos(t * 0.22) * 58}px)`;
      if (ctaBlob2.current) ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.68 + 2) * 310 + Math.cos(t * 0.38) * 92}px, ${Math.cos(t * 0.78 + 1) * 135 + Math.sin(t * 0.33) * 58}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  const doubled = [...CAPABILITY_CHIPS, ...CAPABILITY_CHIPS];

  return (
    <InnerLayout>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={HOWTO_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Do It Yourself", href: "/services/do-it-yourself" }]} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>Do It Yourself</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Run your own LinkedIn outreach.{" "}
            <span style={{ color: ACCENT }}>On your account.</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Log in with your own LinkedIn account, build a campaign, upload your leads, and set your connection note and follow-ups. Our tool sends it all out with human-like behaviour, while your dashboard tracks every lead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/services/linkedin-outreach" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              See the Done-for-You Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Capability marquee ───────────────────────────────── */}
      <div className="py-8 overflow-hidden border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 32s linear infinite" }}>
          {doubled.map((label, i) => <CapabilityChip key={i} label={label} i={i} />)}
        </div>
      </div>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
              Built for Self-Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Everything you need to run it yourself</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border p-7 transition-all duration-200"
                style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-base font-black" style={{ color: "#0a0a0a" }}>{f.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>Six steps from your LinkedIn login to a launched campaign.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124,58,237,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "rgba(124,58,237,0.1)", color: ACCENT }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  </div>
                </div>
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
              style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
              What You Get
            </span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every campaign includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(124,58,237,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={3}>
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
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for people who&apos;d rather run it themselves</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.35)"; }}
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

      {/* ── Dashboard ─────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
            Your Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#0a0a0a" }}>See every campaign, every lead</h2>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Once a campaign is live, your dashboard tracks it in real time, at the campaign level and across your account.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Acceptance Rate", desc: "Per campaign and lifetime, across your account." },
              { title: "Reply Rate", desc: "How many of your accepted connections reply." },
              { title: "Lead Status", desc: "Where every single lead stands, at a glance." },
            ].map((d) => (
              <div key={d.title} className="rounded-2xl border p-6 text-left" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-black mb-2" style={{ color: ACCENT }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
              FAQ
            </span>
            <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Run outreach on<br /><span style={{ color: ACCENT }}>your own terms</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Book a demo and we&apos;ll walk you through building your first campaign.
          </p>

          <a href="/founder-meeting" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book a Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>Prefer we run it for you? <Link href="/services/linkedin-outreach" className="font-semibold underline" style={{ color: ACCENT }}>See the Done-for-You service</Link>.</p>
        </div>
      </section>
    </InnerLayout>
  );
}
