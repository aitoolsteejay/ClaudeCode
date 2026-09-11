"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";
import InnerLayout from "../../components/InnerLayout";
import JsonLd from "../../components/JsonLd";
import Breadcrumbs from "../../components/Breadcrumbs";
import { LinkedInIcon } from "../../components/ContactIcons";
import { buildServiceSchema, buildHowToSchema, buildFaqSchema, SITE_URL } from "@/lib/schema";

// Scoped here rather than site-wide (same reasoning as the homepage Hero):
// only the two decorative doodle sections below use this handwritten font.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

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

/* ─── Interactive demo data ───────────────────────────────────── */

const DEMO_LEADS = [
  "Priya Sharma · VP Sales, Finstack",
  "Rohan Mehta · Founder, Kwikcart",
  "Alex Chen · Head of Growth, Helio",
  "Meera Iyer · CRO, Vaultline",
  "Tom Walsh · VP Marketing, Nexbridge",
];

const DEMO_CAMPAIGN_NAME = "Q1 SaaS Founders Outreach";

const DEFAULT_NOTE = "Hi {{firstName}}, I help B2B teams build predictable outbound pipelines. Would love to connect and swap notes on what's working for you.";

type LeadStatus = "queued" | "invited" | "connected" | "replied";

const STATUS_STYLE: Record<LeadStatus, { label: string; bg: string; color: string }> = {
  queued: { label: "Queued", bg: "#F1F5F9", color: "#64748B" },
  invited: { label: "Invited", bg: "#FEF9EC", color: "#D97706" },
  connected: { label: "Connected", bg: "#EFF6FF", color: "#0A66C2" },
  replied: { label: "Replied", bg: "#F0FDF4", color: "#16A34A" },
};

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

function StatusPill({ status }: { status: LeadStatus }) {
  const s = STATUS_STYLE[status];
  return (
    <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full" style={{ backgroundColor: s.bg, color: s.color }}>
      {s.label}
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

  /* Interactive campaign-builder demo */
  const [demoStep, setDemoStep] = useState(1);
  const [linkedinConnected, setLinkedinConnected] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [leadsUploaded, setLeadsUploaded] = useState(false);
  const [note, setNote] = useState(DEFAULT_NOTE);
  const [followUps, setFollowUps] = useState([{ id: 1, day: 3 }, { id: 2, day: 7 }]);
  const [launched, setLaunched] = useState(false);
  const [leadStatuses, setLeadStatuses] = useState<LeadStatus[]>(Array(DEMO_LEADS.length).fill("queued"));
  const [autoPlay, setAutoPlay] = useState(true);

  function stopAutoPlay() {
    setAutoPlay(false);
  }

  /* Drives the demo forward on its own, step by step, until someone touches it */
  useEffect(() => {
    if (!autoPlay) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (demoStep === 1) {
      if (!linkedinConnected) timers.push(setTimeout(() => setLinkedinConnected(true), 1100));
      else timers.push(setTimeout(() => setDemoStep(2), 1100));
    } else if (demoStep === 2) {
      if (campaignName.length < DEMO_CAMPAIGN_NAME.length) {
        timers.push(setTimeout(() => setCampaignName(DEMO_CAMPAIGN_NAME.slice(0, campaignName.length + 1)), 45));
      } else {
        timers.push(setTimeout(() => setDemoStep(3), 1400));
      }
    } else if (demoStep === 3) {
      if (!leadsUploaded) timers.push(setTimeout(() => setLeadsUploaded(true), 900));
      else timers.push(setTimeout(() => setDemoStep(4), 1600));
    } else if (demoStep === 4) {
      timers.push(setTimeout(() => setDemoStep(5), 2600));
    } else if (demoStep === 5) {
      timers.push(setTimeout(() => setDemoStep(6), 2600));
    } else if (demoStep === 6) {
      if (!launched) timers.push(setTimeout(() => setLaunched(true), 1200));
      else timers.push(setTimeout(() => resetDemo(), 6200));
    }

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, demoStep, linkedinConnected, campaignName, leadsUploaded, launched]);

  useEffect(() => {
    if (!launched) return;
    let ticks = 0;
    const interval = setInterval(() => {
      ticks += 1;
      setLeadStatuses((prev) => prev.map((s) => {
        if (s === "queued" && Math.random() < 0.9) return "invited";
        if (s === "invited" && Math.random() < 0.7) return "connected";
        if (s === "connected" && Math.random() < 0.45) return "replied";
        return s;
      }));
      if (ticks >= 6) clearInterval(interval);
    }, 850);
    return () => clearInterval(interval);
  }, [launched]);

  function addFollowUp() {
    stopAutoPlay();
    setFollowUps((prev) => (prev.length >= 4 ? prev : [...prev, { id: Date.now(), day: (prev[prev.length - 1]?.day ?? 0) + 4 }]));
  }
  function removeFollowUp(id: number) {
    stopAutoPlay();
    setFollowUps((prev) => (prev.length <= 1 ? prev : prev.filter((f) => f.id !== id)));
  }
  function adjustDelay(id: number, delta: number) {
    stopAutoPlay();
    setFollowUps((prev) => prev.map((f) => (f.id === id ? { ...f, day: Math.max(1, Math.min(30, f.day + delta)) } : f)));
  }
  function resetDemo() {
    setDemoStep(1);
    setLinkedinConnected(false);
    setCampaignName("");
    setLeadsUploaded(false);
    setNote(DEFAULT_NOTE);
    setFollowUps([{ id: 1, day: 3 }, { id: 2, day: 7 }]);
    setLaunched(false);
    setLeadStatuses(Array(DEMO_LEADS.length).fill("queued"));
    setAutoPlay(true);
  }

  const invitedOrFurther = leadStatuses.filter((s) => s !== "queued").length;
  const acceptedOrFurther = leadStatuses.filter((s) => s === "connected" || s === "replied").length;
  const repliedCount = leadStatuses.filter((s) => s === "replied").length;
  const acceptanceRate = invitedOrFurther ? Math.round((acceptedOrFurther / invitedOrFurther) * 100) : 0;
  const replyRate = acceptedOrFurther ? Math.round((repliedCount / acceptedOrFurther) * 100) : 0;

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
      <section className={`relative pt-32 pb-20 px-4 overflow-hidden ${caveat.variable}`} style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(255,130,0,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        {/* Floating doodle emoji */}
        <span className="hidden sm:block lp-float-icon" aria-hidden="true" style={{ top: "26%", left: "6%", fontSize: "28px", "--lp-rot": "-8deg" } as React.CSSProperties}>🔗</span>
        <span className="hidden sm:block lp-float-icon" aria-hidden="true" style={{ top: "22%", right: "9%", fontSize: "26px", "--lp-rot": "10deg", animationDelay: "0.8s" } as React.CSSProperties}>🎯</span>
        <span className="hidden sm:block lp-float-icon" aria-hidden="true" style={{ bottom: "10%", left: "15%", fontSize: "24px", "--lp-rot": "6deg", animationDelay: "1.6s" } as React.CSSProperties}>🚀</span>

        {/* Handwritten annotation right side */}
        <div aria-hidden="true" className="hidden lg:flex flex-col items-center gap-1 absolute z-20" style={{ right: "2%", top: "30%", animation: "handwrite-float-r 5.5s ease-in-out 2.5s infinite" }}>
          <div className="card-fade-up flex flex-col items-center text-center leading-snug" style={{ fontFamily: "var(--font-caveat)", fontSize: "20px", fontWeight: 700, color: ACCENT, lineHeight: 1.25, animationDelay: "1s" }}>
            <span>100% yours.</span>
            <span style={{ fontSize: "13px", letterSpacing: "0.08em", fontWeight: 600, color: "#a855f7" }}>no hand-holding</span>
          </div>
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" style={{ transform: "scaleX(-1) rotate(-15deg)", marginBottom: "-4px", alignSelf: "flex-end", marginRight: "6px" }}>
            <path d="M4 6 C10 8, 26 2, 40 16 C46 22, 46 28, 42 34" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" fill="none" strokeDasharray="90" strokeDashoffset="90" style={{ animation: "doodle-draw 0.6s ease forwards 1.6s" }} />
            <path d="M36 32 L42 34 L40 28" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="30" strokeDashoffset="30" style={{ animation: "doodle-draw 0.3s ease forwards 2.2s" }} />
          </svg>
        </div>

        {/* Handwritten annotation left side */}
        <div aria-hidden="true" className="hidden lg:flex flex-col items-start gap-1 absolute z-20" style={{ left: "1%", top: "60%", animation: "handwrite-float-l 7s ease-in-out 3s infinite" }}>
          <div className="card-fade-up flex flex-col leading-snug" style={{ fontFamily: "var(--font-caveat)", fontSize: "19px", fontWeight: 700, color: "#D97706", lineHeight: 1.3, animationDelay: "1.3s" }}>
            <span>⚡ 5 minutes</span>
            <span>to your first campaign</span>
          </div>
          <svg width="46" height="28" viewBox="0 0 46 28" fill="none" style={{ marginTop: "2px", alignSelf: "flex-end" }}>
            <path d="M4 5 C13 3, 30 7, 40 18" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" fill="none" strokeDasharray="60" strokeDashoffset="60" style={{ animation: "doodle-draw 0.55s ease forwards 1.9s" }} />
            <path d="M34 16 L40 18 L38 24" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="26" strokeDashoffset="26" style={{ animation: "doodle-draw 0.28s ease forwards 2.45s" }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Do It Yourself", href: "/services/do-it-yourself" }]} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>Do It Yourself</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Run your own LinkedIn outreach.{" "}
            <span className="relative inline-block" style={{ color: ACCENT }}>
              On your account.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 260 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 Q60 2 120 5 Q180 9 258 4" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300" style={{ animation: "doodle-draw 0.9s ease forwards 0.9s" }} />
              </svg>
            </span>
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

      {/* ── How it works: interactive demo ───────────────────── */}
      <section className={`relative py-20 px-4 border-t ${caveat.variable}`} style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        {/* Handwritten callout pointing at the live demo */}
        <div aria-hidden="true" className="hidden lg:block absolute z-20" style={{ top: "3%", right: "6%", animation: "handwrite-float-l 6.5s ease-in-out 1s infinite" }}>
          <div className="card-fade-up" style={{ fontFamily: "var(--font-caveat)", fontSize: "21px", fontWeight: 700, color: ACCENT, transform: "rotate(-5deg)", animationDelay: "0.4s" }}>
            it&apos;s actually clickable! 👇
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(124,58,237,0.08)", color: ACCENT, border: "1px solid rgba(124,58,237,0.2)" }}>
              Try It Yourself
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Build a campaign, right here</h2>
            <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: "#52525B" }}>Click through the six steps. Every field actually works, this is exactly what your dashboard looks like.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Step list */}
            <div className="space-y-3">
              {STEPS.map((s, i) => {
                const active = demoStep === i + 1;
                return (
                  <button
                    key={s.n}
                    onClick={() => { stopAutoPlay(); setDemoStep(i + 1); }}
                    className="w-full text-left rounded-2xl border p-5 transition-all duration-300"
                    style={active
                      ? { borderColor: ACCENT, backgroundColor: "rgba(124,58,237,0.05)", boxShadow: "0 4px 20px rgba(124,58,237,0.12)" }
                      : { borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-colors duration-300"
                        style={active ? { backgroundColor: ACCENT, color: "#fff" } : { backgroundColor: "rgba(124,58,237,0.1)", color: ACCENT }}>
                        {s.n}
                      </div>
                      <div>
                        <h3 className="text-base font-black mb-1" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live mockup */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border-2 overflow-hidden" style={{ borderColor: "rgba(124,58,237,0.25)", boxShadow: "0 20px 50px rgba(124,58,237,0.15)" }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
                  <span className="ml-3 text-xs font-bold truncate" style={{ color: "#8C8279" }}>Myntmore Outreach &middot; Campaign Builder</span>
                  {autoPlay && (
                    <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
                      Playing
                    </span>
                  )}
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5 px-5 pt-4">
                  {STEPS.map((s, i) => (
                    <span key={s.n} className="h-1 flex-1 rounded-full transition-colors duration-300" style={{ backgroundColor: demoStep > i ? ACCENT : "#E8E2D9" }} />
                  ))}
                </div>

                <div className="p-6 sm:p-7 min-h-[340px] flex flex-col" style={{ backgroundColor: "#ffffff" }}>
                  {/* Step 1: Connect LinkedIn */}
                  {demoStep === 1 && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: "#0A66C2" }}>
                        <LinkedInIcon />
                      </div>
                      {!linkedinConnected ? (
                        <>
                          <p className="text-sm max-w-xs" style={{ color: "#52525B" }}>Log in with your own LinkedIn account. Nothing is handed over to us.</p>
                          <button onClick={() => { stopAutoPlay(); setLinkedinConnected(true); }} className="btn-dark px-6 py-3 text-sm font-bold">Connect LinkedIn</button>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center gap-2 text-sm font-black" style={{ color: "#16A34A" }}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            Connected
                          </span>
                          <p className="text-xs" style={{ color: "#8C8279" }}>Nice. Let&apos;s set up your first campaign &rarr;</p>
                        </>
                      )}
                    </div>
                  )}

                  {/* Step 2: Campaign name */}
                  {demoStep === 2 && (
                    <div className="flex-1">
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: ACCENT }}>Campaign Name</label>
                      <input
                        value={campaignName}
                        onChange={(e) => { stopAutoPlay(); setCampaignName(e.target.value.slice(0, 60)); }}
                        placeholder="Q1 SaaS Founders Outreach"
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                        style={{ borderColor: "#E8E2D9", color: "#0a0a0a" }}
                      />
                      <p className="text-xs mt-4" style={{ color: "#8C8279" }}>
                        Preview: <span className="font-bold" style={{ color: "#0a0a0a" }}>{campaignName || "Untitled Campaign"}</span>
                      </p>
                    </div>
                  )}

                  {/* Step 3: Upload leads */}
                  {demoStep === 3 && (
                    <div className="flex-1">
                      {!leadsUploaded ? (
                        <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                          <p className="text-sm max-w-xs" style={{ color: "#52525B" }}>Upload the list of leads you want to reach for this campaign.</p>
                          <button onClick={() => { stopAutoPlay(); setLeadsUploaded(true); }} className="btn-dark px-6 py-3 text-sm font-bold">Upload Leads (CSV)</button>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-black mb-3" style={{ color: "#16A34A" }}>&#10003; {DEMO_LEADS.length} leads uploaded</p>
                          <ul className="space-y-2">
                            {DEMO_LEADS.map((l, i) => (
                              <li key={l} className="card-fade-up text-xs rounded-lg px-3 py-2" style={{ color: "#3D3D3D", backgroundColor: "#F8F6F2", animationDelay: `${i * 80}ms` }}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Connection note */}
                  {demoStep === 4 && (
                    <div className="flex-1">
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: ACCENT }}>Connection Note</label>
                      <textarea
                        value={note}
                        onChange={(e) => { stopAutoPlay(); setNote(e.target.value.slice(0, 300)); }}
                        rows={5}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none resize-none"
                        style={{ borderColor: "#E8E2D9", color: "#0a0a0a" }}
                      />
                      <p className="text-xs mt-2 text-right" style={{ color: note.length > 280 ? "#dc2626" : "#8C8279" }}>{note.length}/300</p>
                    </div>
                  )}

                  {/* Step 5: Follow-ups */}
                  {demoStep === 5 && (
                    <div className="flex-1">
                      <div className="space-y-3 mb-4">
                        {followUps.map((f, i) => (
                          <div key={f.id} className="flex items-center justify-between rounded-xl border px-4 py-3" style={{ borderColor: "#E8E2D9" }}>
                            <span className="text-sm font-bold" style={{ color: "#0a0a0a" }}>Follow-up {i + 1}</span>
                            <div className="flex items-center gap-3">
                              <button onClick={() => adjustDelay(f.id, -1)} aria-label="Decrease delay" className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-black" style={{ backgroundColor: "#F8F6F2", color: ACCENT }}>&minus;</button>
                              <span className="text-xs font-bold w-14 text-center" style={{ color: "#52525B" }}>Day {f.day}</span>
                              <button onClick={() => adjustDelay(f.id, 1)} aria-label="Increase delay" className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-black" style={{ backgroundColor: "#F8F6F2", color: ACCENT }}>+</button>
                              {followUps.length > 1 && (
                                <button onClick={() => removeFollowUp(f.id)} aria-label="Remove follow-up" className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ color: "#dc2626" }}>&#10005;</button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {followUps.length < 4 && (
                        <button onClick={addFollowUp} className="text-xs font-bold" style={{ color: ACCENT }}>+ Add another follow-up</button>
                      )}
                    </div>
                  )}

                  {/* Step 6: Launch */}
                  {demoStep === 6 && (
                    <div className="flex-1">
                      {!launched ? (
                        <div className="flex flex-col items-center justify-center text-center gap-4 py-6">
                          <p className="text-sm max-w-xs" style={{ color: "#52525B" }}>
                            &ldquo;{campaignName || "Untitled Campaign"}&rdquo; is ready with {DEMO_LEADS.length} leads and {followUps.length} follow-up{followUps.length > 1 ? "s" : ""}.
                          </p>
                          <button onClick={() => { stopAutoPlay(); setLaunched(true); }} className="btn-dark px-8 py-4 text-base font-black">Launch Campaign &#128640;</button>
                        </div>
                      ) : (
                        <div>
                          <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#F5F3FF" }}>
                              <div className="text-2xl font-black" style={{ color: ACCENT }}>{acceptanceRate}%</div>
                              <div className="text-xs" style={{ color: "#8C8279" }}>Acceptance Rate</div>
                            </div>
                            <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#FEF9EC" }}>
                              <div className="text-2xl font-black" style={{ color: "#D97706" }}>{replyRate}%</div>
                              <div className="text-xs" style={{ color: "#8C8279" }}>Reply Rate</div>
                            </div>
                          </div>
                          <ul className="space-y-2 mb-4">
                            {DEMO_LEADS.map((l, i) => (
                              <li key={l} className="flex items-center justify-between gap-3 text-xs" style={{ color: "#3D3D3D" }}>
                                <span className="truncate">{l}</span>
                                <StatusPill status={leadStatuses[i]} />
                              </li>
                            ))}
                          </ul>
                          <p className="text-[11px] mb-3" style={{ color: "#8C8279" }}>Simulated preview for this demo, not real send data.</p>
                          <button onClick={resetDemo} className="text-xs font-bold underline" style={{ color: ACCENT }}>Restart demo</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Prev / Next nav */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <button
                  onClick={() => { stopAutoPlay(); setDemoStep((s) => Math.max(1, s - 1)); }}
                  disabled={demoStep === 1}
                  className="px-5 py-2.5 rounded-full text-sm font-bold border transition-opacity disabled:opacity-30"
                  style={{ borderColor: "#E8E2D9", color: "#3D3D3D" }}
                >
                  &larr; Back
                </button>
                <button
                  onClick={() => { stopAutoPlay(); setDemoStep((s) => Math.min(6, s + 1)); }}
                  disabled={demoStep === 6}
                  className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity disabled:opacity-30"
                  style={{ backgroundColor: ACCENT }}
                >
                  Next step &rarr;
                </button>
              </div>
            </div>
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
