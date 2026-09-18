"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  ChevronDown,
  Gift,
  Linkedin,
  Mail,
  MailCheck,
  MessageCircleQuestion,
  Mic,
  PenLine,
  Play,
  RotateCcw,
  Smile,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import FadeIn from "../components/FadeIn";
import JsonLd from "../components/JsonLd";
import AskYourAI from "../components/AskYourAI";
import NewsletterForm from "../components/NewsletterForm";
import { buildArticleSchema, SITE_URL } from "@/lib/schema";

/* ─── Fonts: sitewide Inter for everything; Caveat only for the founder sign-off ─── */
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

/* ─── Site tokens ─────────────────────────────────────────────── */
const T = {
  bg: "#F8F6F2",
  paper: "#FFFFFF",
  ink: "#0a0a0a",
  ink2: "#3D3D3D",
  muted: "#6B6560",
  hairline: "#E8E2D9",
  gold: "#F5B731",
  purple: "#7C3AED",
  purpleSoft: "rgba(124,58,237,0.08)",
  purpleBorder: "rgba(124,58,237,0.35)",
  amber: "#D97706",
  amberSoft: "#FEF9EC",
  amberBorder: "rgba(245,183,49,0.35)",
  linkedin: "#0077b5",
  green: "#16A34A",
  doText: "#166534",
  doFill: "#15803D",
  doSoft: "rgba(21,128,61,0.10)",
  dontText: "#991B1B",
  dontFill: "#B91C1C",
  dontSoft: "rgba(185,28,28,0.10)",
} as const;

const PAGE_URL = `${SITE_URL}/dos-and-donts-of-outreach`;
const TITLE = "Pattern Disruption: The Do's and Don'ts of Cold Outreach";
const DESCRIPTION = "Why most outreach gets deleted without being read, how pattern disruption actually works, what to send on LinkedIn vs. cold email, what data enrichment is, and the free tools to build better outreach.";

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: "2026-09-18T12:00:00+05:30",
  dateModified: "2026-09-18T12:00:00+05:30",
});

const AI_RESOURCES = [PAGE_URL, `${SITE_URL}/services/linkedin-outreach`, `${SITE_URL}/services/cold-email`];

/* ─── Content ──────────────────────────────────────────────────── */
const GUIDE_INDEX = [
  { href: "#makeover", label: "See a message get fixed" },
  { href: "#interrupts", label: "Six ways to break the pattern" },
  { href: "#channels", label: "LinkedIn vs. cold email" },
  { href: "#enrichment", label: "What enrichment actually is" },
  { href: "#score", label: "Score your last message" },
];

const MAKEOVER = {
  before: {
    label: "Typical",
    text: "Hi Priya, I came across your profile and was really impressed by what you're building at Acme. We help companies like yours scale outbound with AI. Would you be open to a quick 15-minute call this week to explore synergies?",
    tags: ["Generic opener", "Pitch on message one", "Ask for a call"],
    readTime: "11 sec",
  },
  after: {
    label: "Disrupted",
    text: "Priya, your pricing page still says “Coming soon” under the Enterprise tier. Spotted it while looking at how Acme positions the team plan. On purpose, or did it slip?",
    tags: ["Specific observation", "One real question", "Zero pitch"],
    readTime: "4 sec",
  },
};

const INTERRUPTS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Smile, title: "Send a relevant meme", body: "Signals you're a person, not a sequence. Read the room first: playful cultures love it, formal ones can miss completely." },
  { icon: Mic, title: "Drop a 20-second voice note", body: "Nobody expects a voice from a stranger, and an actual tone builds trust text never quite manages." },
  { icon: Camera, title: "Screenshot something you noticed", body: "Proves you actually looked, instead of blasting the same line down a list of five hundred names." },
  { icon: MessageCircleQuestion, title: "Ask one question, not another pitch", body: "A real question invites a real answer. A pitch just invites a scroll." },
  { icon: Gift, title: "Give before you ask", body: "No strings, no follow-up demand, just something worth having whether they ever reply or not." },
  { icon: PenLine, title: "Share a handwritten note", body: "In a world of typed everything, a few real handwritten lines feel almost personal." },
];

const LESSONS = [
  {
    n: "01",
    title: "It's not a hack, it's physics",
    summary: "Interrupts work because the brain is built to notice what breaks a pattern.",
    body: "These aren't clever tricks. They interrupt a pattern the brain has learned to ignore. The moment something doesn't fit the shape a prospect skims past, their attention holds for half a second longer. That half second is the whole game.",
  },
  {
    n: "02",
    title: "Attention and replies are two different jobs",
    summary: "Earn attention first. The reply gets ten times easier after that.",
    body: "For years I measured outbound purely on reply rate. A screenshot pointing out a typo on a prospect's pricing page didn't sell anything. It proved I'd actually looked. Once someone believes that, the sales conversation gets ten times easier.",
  },
  {
    n: "03",
    title: "Rare, deliberate, placed with intent",
    summary: "One interrupt per sequence. If every email is a meme, the meme is the new template.",
    body: "We build one deliberate break into almost every sequence we run, a point where the message stops sounding like a sequence. Not every message needs to be an interrupt. If every email is a meme, the meme becomes the new template. It works because it's rare.",
  },
];

const CHANNEL_TIPS: { channel: string; icon: LucideIcon; accent: string; dos: string[]; donts: string[] }[] = [
  {
    channel: "LinkedIn",
    icon: Linkedin,
    accent: "#0077b5",
    dos: [
      "Warm up first, a like or comment before the connection request",
      "Send blank connection requests, a note this early often reads as a pitch",
      "Reference something real, a post, a role change, company news",
      "Run it as a sequence over days, not one message and done",
    ],
    donts: [
      "“I came across your profile and was impressed”",
      "A pitch deck or calendar link on message one",
      "The identical note to everyone on the list",
    ],
  },
  {
    channel: "Cold Email",
    icon: Mail,
    accent: "#D97706",
    dos: [
      "A subject line that reads like a real email, not a broadcast",
      "Short enough to read on a phone in five seconds",
      "One specific observation, then one specific question",
      "Every follow-up adds something new, never just “bumping this”",
    ],
    donts: [
      "“Hope this email finds you well”",
      "Every feature, listed, in message one",
      "More than two or three follow-ups with nothing new to say",
    ],
  },
];

const ENRICHED_FIELDS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Users, label: "Company size", value: "180 employees" },
  { icon: TrendingUp, label: "Funding", value: "Series B, raised 8 months ago" },
  { icon: Wrench, label: "Tech stack", value: "HubSpot, Segment, Intercom" },
  { icon: MailCheck, label: "Verified email", value: "p.shah@acme.example" },
  { icon: Sparkles, label: "Signal", value: "Hiring 3 SDRs this month" },
];

const ENRICHMENT_TOOLS = [
  { name: "Apollo.io", body: "Prospecting database with enrichment built in." },
  { name: "Clay", body: "Waterfall enrichment across many sources at once." },
  { name: "Clearbit", body: "Company firmographics appended via API." },
  { name: "Hunter.io", body: "Finds and verifies email addresses." },
  { name: "ZoomInfo / Lusha", body: "Larger paid databases for teams at scale." },
];

const TOOLS = [
  {
    href: "/tools/icp-builder",
    name: "ICP & Value Proposition Generator",
    accent: "#7C3AED",
    plain: "Tell it what your business does, and it hands you back who to sell to and what to say to them.",
    useCase: "Before writing a single message, so every line is aimed at someone real.",
  },
  {
    href: "/tools/dm-angle-generator",
    name: "DM Angle Generator",
    accent: "#0077b5",
    plain: "Type in your offer, get back five different ways to open a message.",
    useCase: "When your reply rate goes quiet and the opening line is the likely culprit.",
  },
  {
    href: "/tools/roi-calculator",
    name: "ROI Calculator",
    accent: "#16A34A",
    plain: "Plug in sends, replies, and deal value. See what your outreach is actually worth.",
    useCase: "Before committing budget or time, so the return is a number, not a guess.",
  },
  {
    href: "/tools/lead-magnet-ideas",
    name: "Lead Magnet Idea Generator",
    accent: "#D97706",
    plain: "Turns your business and ICP into concrete, specific things you could give away for free.",
    useCase: "When you like the “give before you ask” idea but can't think what to give.",
  },
];

const DONTS = [
  "Long messages that take more than 10 seconds to read",
  "Salesy language: “game-changing”, “revolutionary”, “synergy”",
  "Copy that obviously sounds AI-written",
  "Text-only, every single time, forever",
  "Generic openers like “Hope this finds you well”",
  "More than one ask in a single message",
  "Following up repeatedly with nothing new to say",
];

const DOS = [
  "Crisp, short enough to read at a glance",
  "No beating around the bush, the point in line one",
  "Voice notes, when it fits the relationship",
  "Videos, a face is harder to ignore than text",
  "Loom videos, especially for a quick walkthrough",
  "Reference something specific and real about them",
  "One clear, low-friction next step",
  "Give something before you ask for something",
];

/* ─── Reading progress bar (sits just above the fixed navbar) ──── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none" style={{ backgroundColor: "transparent" }}>
      <div className="h-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${T.purple}, ${T.gold})`, transition: "width 120ms linear" }} />
    </div>
  );
}

/* ─── Section header with per-section accent ───────────────────── */
function SectionHeader({ n, eyebrow, title, lede, accent = T.purple }: { n: string; eyebrow: string; title: React.ReactNode; lede?: string; accent?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-black tabular-nums" style={{ color: accent }}>{n}</span>
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: accent }} />
        <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight" style={{ color: T.ink }}>{title}</h2>
      {lede && <p className="text-base sm:text-lg leading-relaxed mt-4 max-w-2xl" style={{ color: T.muted }}>{lede}</p>}
    </div>
  );
}

function Mark({ kind }: { kind: "do" | "dont" }) {
  const isDo = kind === "do";
  const Icon = isDo ? Check : X;
  return (
    <span aria-hidden="true" className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: isDo ? T.doSoft : T.dontSoft, color: isDo ? T.doFill : T.dontFill }}>
      <Icon className="w-3 h-3" strokeWidth={3} />
    </span>
  );
}

/* ─── Interactive: before / after message makeover ─────────────── */
function MessageMakeover() {
  const [fixed, setFixed] = useState(false);
  const m = fixed ? MAKEOVER.after : MAKEOVER.before;
  const accent = fixed ? T.green : T.dontFill;

  return (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 sm:px-8 pt-6">
        <div role="group" aria-label="Message version" className="inline-flex p-1 rounded-full self-start" style={{ backgroundColor: T.bg, border: `1px solid ${T.hairline}` }}>
          {[MAKEOVER.before, MAKEOVER.after].map((v, i) => {
            const on = (i === 1) === fixed;
            return (
              <button
                key={v.label}
                type="button"
                aria-pressed={on}
                onClick={() => setFixed(i === 1)}
                className="px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: on ? T.ink : "transparent", color: on ? "#ffffff" : T.ink2 }}
              >
                {v.label}
              </button>
            );
          })}
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: T.muted }}>
          Read time <span className="tabular-nums" style={{ color: accent }}>{m.readTime}</span>
        </p>
      </div>

      <div className="px-6 sm:px-8 py-6">
        <div key={m.label} className="card-fade-up">
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black" style={{ backgroundColor: T.purpleSoft, color: T.purple }}>You</span>
            <div className="relative rounded-2xl rounded-tl-md px-5 py-4 max-w-xl" style={{ backgroundColor: T.bg, border: `1px solid ${T.hairline}` }}>
              <p className="text-[15px] leading-relaxed" style={{ color: T.ink }}>{m.text}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2 mt-5 pl-12">
            {m.tags.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: fixed ? T.doSoft : T.dontSoft, color: fixed ? T.doText : T.dontText }}>
                {fixed ? <Check className="w-3 h-3" strokeWidth={3} /> : <X className="w-3 h-3" strokeWidth={3} />}
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{ borderColor: T.hairline, backgroundColor: T.bg }}>
        <p className="text-sm" style={{ color: T.muted }}>Same prospect, same product. Only the shape of the message changed.</p>
        <button
          type="button"
          onClick={() => setFixed((f) => !f)}
          className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2 self-start sm:self-auto"
        >
          {fixed ? "Show the typical one" : "Fix this message"}
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

/* ─── Interactive: tap-to-reveal tactic cards ──────────────────── */
function InterruptCards() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {INTERRUPTS.map((item, i) => {
        const Icon = item.icon;
        const on = open === i;
        return (
          <FadeIn key={item.title} delay={i * 60}>
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
              className="group w-full h-full text-left rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: T.paper, border: `1px solid ${on ? T.purpleBorder : T.hairline}` }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: on ? T.purple : T.purpleSoft, color: on ? "#ffffff" : T.purple }}>
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-black tabular-nums" style={{ color: T.purple }}>{String(i + 1).padStart(2, "0")}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{ color: T.muted, transform: on ? "rotate(180deg)" : "none" }} strokeWidth={2} />
                </span>
              </div>
              <span className="block text-lg font-black leading-snug mt-5" style={{ color: T.ink }}>{item.title}</span>
              <span className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr" }}>
                <span className="block overflow-hidden">
                  <span className="block text-[15px] leading-relaxed pt-3" style={{ color: T.muted }}>{item.body}</span>
                </span>
              </span>
            </button>
          </FadeIn>
        );
      })}
    </div>
  );
}

/* ─── Interactive: three-lesson stepper ────────────────────────── */
function LessonStepper() {
  const [i, setI] = useState(0);
  const l = LESSONS[i];
  return (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div role="tablist" aria-label="Lessons" aria-orientation="vertical" className="lg:col-span-5 p-3 lg:border-r border-b lg:border-b-0" style={{ borderColor: T.hairline }}>
          {LESSONS.map((item, idx) => {
            const on = idx === i;
            return (
              <button
                key={item.n}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setI(idx)}
                className="w-full flex items-start gap-4 text-left rounded-2xl px-4 py-4 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                style={{ backgroundColor: on ? T.purpleSoft : "transparent" }}
              >
                <span className="text-sm font-black tabular-nums mt-0.5" style={{ color: on ? T.purple : T.muted }}>{item.n}</span>
                <span>
                  <span className="block text-[15px] font-black leading-snug" style={{ color: T.ink }}>{item.title}</span>
                  <span className="block text-sm leading-relaxed mt-1" style={{ color: T.muted }}>{item.summary}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col">
          <div key={l.n} className="card-fade-up flex-1">
            <span className="text-5xl font-black tabular-nums" style={{ color: T.purple }}>{l.n}</span>
            <h3 className="text-2xl font-black leading-tight mt-3 mb-4" style={{ color: T.ink }}>{l.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: T.ink2 }}>{l.body}</p>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: T.hairline }}>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {LESSONS.map((_, idx) => (
                <span key={idx} className="h-1.5 rounded-full transition-all duration-300" style={{ width: idx === i ? 20 : 6, backgroundColor: idx === i ? T.purple : T.hairline }} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setI((i + 1) % LESSONS.length)}
              className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-4 py-2 transition-colors duration-200 cursor-pointer hover:bg-[#F8F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
              style={{ color: T.ink, border: `1px solid ${T.hairline}` }}
            >
              {i === LESSONS.length - 1 ? "Start over" : "Next lesson"}
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Interactive: LinkedIn vs Cold Email ──────────────────────── */
function ChannelTabs() {
  const [active, setActive] = useState(0);
  const c = CHANNEL_TIPS[active];

  return (
    <div>
      <div role="tablist" aria-label="Channel" className="inline-flex p-1 rounded-full mb-8" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
        {CHANNEL_TIPS.map((tab, i) => {
          const Icon = tab.icon;
          const on = active === i;
          return (
            <button
              key={tab.channel}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: on ? tab.accent : "transparent", color: on ? "#ffffff" : T.ink2 }}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              {tab.channel}
            </button>
          );
        })}
      </div>

      <div key={active} role="tabpanel" className="rounded-3xl card-fade-up overflow-hidden" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
        <div className="h-1" style={{ background: `linear-gradient(90deg,${c.accent},${c.accent}66)` }} />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-7 sm:p-9 md:border-r" style={{ borderColor: T.hairline }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: T.doText }}>Do</p>
            <ul className="space-y-4">
              {c.dos.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: T.ink2 }}>
                  <Mark kind="do" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 sm:p-9 border-t md:border-t-0" style={{ borderColor: T.hairline }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: T.dontText }}>Don&apos;t</p>
            <ul className="space-y-4">
              {c.donts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: T.ink2 }}>
                  <Mark kind="dont" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Interactive: enrich-a-lead demo ──────────────────────────── */
function EnrichDemo() {
  const [shown, setShown] = useState(0);
  const [running, setRunning] = useState(false);
  const done = shown >= ENRICHED_FIELDS.length;

  useEffect(() => {
    if (!running || done) return;
    const t = setTimeout(() => setShown((n) => n + 1), 260);
    return () => clearTimeout(t);
  }, [running, shown, done]);

  function start() {
    setShown(0);
    setRunning(true);
  }
  function reset() {
    setRunning(false);
    setShown(0);
  }

  return (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
      <div className="h-1" style={{ background: `linear-gradient(90deg,${T.amber},${T.amber}66)` }} />
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: T.muted }}>Example lead</p>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full transition-colors duration-300" style={{ backgroundColor: done ? T.doSoft : T.amberSoft, color: done ? T.doText : T.amber, border: `1px solid ${done ? "rgba(21,128,61,0.2)" : T.amberBorder}` }}>
            {done ? "Enriched" : running ? "Enriching" : "Raw"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: T.bg, border: `1px solid ${T.hairline}`, color: T.ink }}>
            <Building2 className="w-5 h-5" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-base font-black" style={{ color: T.ink }}>Priya Shah</p>
            <p className="text-sm" style={{ color: T.muted }}>Head of Revenue, Acme (example)</p>
          </div>
        </div>

        <ul className="mt-6 space-y-2" aria-live="polite">
          {ENRICHED_FIELDS.map((f, i) => {
            const Icon = f.icon;
            const visible = i < shown;
            return (
              <li key={f.label} className="grid grid-cols-[1.75rem_7.5rem_1fr] items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: visible ? T.bg : "transparent", border: `1px dashed ${visible ? "transparent" : T.hairline}` }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: visible ? T.amberSoft : "transparent", color: visible ? T.amber : T.hairline }}>
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: visible ? T.muted : T.hairline }}>{f.label}</span>
                {visible ? (
                  <span className="card-fade-up text-sm font-semibold truncate" style={{ color: T.ink }}>{f.value}</span>
                ) : (
                  <span aria-hidden="true" className="h-2.5 w-2/3 rounded-full" style={{ backgroundColor: T.hairline }} />
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
          {!done ? (
            <button type="button" onClick={start} disabled={running} className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-wait">
              <Sparkles className="w-4 h-4" strokeWidth={2.5} />
              {running ? "Enriching" : "Enrich this lead"}
            </button>
          ) : (
            <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-4 py-2.5 transition-colors duration-200 cursor-pointer hover:bg-[#F8F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1" style={{ color: T.ink, border: `1px solid ${T.hairline}` }}>
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={2.5} />
              Reset
            </button>
          )}
          <p className="text-sm card-fade-up" style={{ color: T.muted, visibility: done ? "visible" : "hidden" }}>
            Now the first line can be about the SDR hiring, not “Hope this finds you well”.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Interactive: click-through self-audit ────────────────────── */
function SelfAudit() {
  const [dos, setDos] = useState<Set<number>>(new Set());
  const [donts, setDonts] = useState<Set<number>>(new Set());

  function toggle(set: Set<number>, setter: (s: Set<number>) => void, i: number) {
    const next = new Set(set);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setter(next);
  }

  const doScore = dos.size;
  const dontScore = donts.size;
  const total = doScore + dontScore;

  let verdict = "Think of the last cold message you sent. Tap everything that applies.";
  if (total > 0) {
    if (dontScore === 0 && doScore >= 6) verdict = "You're already pattern-disrupting. Most outbound isn't.";
    else if (dontScore >= 4) verdict = "This reads exactly like the outbound your prospects are trained to delete.";
    else verdict = "Partway there. A few small changes will do a lot.";
  }

  const columns: { kind: "do" | "dont"; heading: string; hint: string; items: string[]; picked: Set<number>; set: (s: Set<number>) => void }[] = [
    { kind: "do", heading: "Do", hint: "What your last message actually did", items: DOS, picked: dos, set: setDos },
    { kind: "dont", heading: "Don't", hint: "What your last message was guilty of", items: DONTS, picked: donts, set: setDonts },
  ];

  return (
    <div>
      <div className="rounded-3xl p-6 sm:p-7 mb-6 flex flex-col sm:flex-row sm:items-center gap-5" style={{ backgroundColor: T.ink, color: "#ffffff" }}>
        <div className="flex items-baseline gap-2 flex-shrink-0">
          <span className="text-5xl font-black leading-none tabular-nums" style={{ color: T.gold }}>{doScore}</span>
          <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>of {DOS.length} habits</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold leading-snug">{verdict}</p>
          <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.14)" }}>
            <div className="h-full rounded-full transition-[width] duration-300 ease-out" style={{ width: `${Math.min(100, (doScore / DOS.length) * 100)}%`, backgroundColor: dontScore > doScore ? T.dontFill : T.gold }} />
          </div>
        </div>
        {total > 0 && (
          <button
            type="button"
            onClick={() => { setDos(new Set()); setDonts(new Set()); }}
            className="inline-flex items-center gap-1.5 text-xs font-bold self-start sm:self-auto rounded-full px-3 py-1.5 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            style={{ color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <RotateCcw className="w-3.5 h-3.5" strokeWidth={2.5} />
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {columns.map((col) => (
          <div key={col.kind} className="rounded-3xl p-6 sm:p-7" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: col.kind === "do" ? T.doText : T.dontText }}>{col.heading}</h3>
              <span className="text-xs" style={{ color: T.muted }}>{col.hint}</span>
            </div>
            <ul className="space-y-1">
              {col.items.map((d, i) => {
                const on = col.picked.has(i);
                return (
                  <li key={d}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(col.picked, col.set, i)}
                      className="w-full flex items-start gap-3 text-left rounded-xl px-3 py-2.5 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                      style={{ backgroundColor: on ? (col.kind === "do" ? T.doSoft : T.dontSoft) : "transparent" }}
                    >
                      <span aria-hidden="true" className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-200" style={{ backgroundColor: on ? (col.kind === "do" ? T.doFill : T.dontFill) : "transparent", border: on ? "none" : `1.5px solid ${T.hairline}` }}>
                        {on && (col.kind === "do" ? <Check className="w-3 h-3" stroke="#fff" strokeWidth={3} /> : <X className="w-3 h-3" stroke="#fff" strokeWidth={3} />)}
                      </span>
                      <span className="text-[15px] leading-relaxed" style={{ color: on ? T.ink : T.ink2 }}>{d}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function DosAndDontsClient() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: T.bg }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "Pattern Disruption", href: "/dos-and-donts-of-outreach" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: T.purpleBorder, background: "rgba(124,58,237,0.07)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: T.purple }} />
                <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: T.purple }}>Interactive guide &middot; 6 min</span>
              </div>
              <h1 className="hero-fade-d1 text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: T.ink }}>
                <span style={{ color: T.purple }}>Pattern Disruption</span>
                <br />
                The Do&apos;s and Don&apos;ts of Cold Outreach
              </h1>
              <p className="hero-fade-d2 text-lg sm:text-xl leading-relaxed max-w-xl" style={{ color: T.muted }}>
                Every prospect&apos;s inbox has trained them to skim past your message before they&apos;ve read a word of it. Here&apos;s what actually gets one read.
              </p>
              <div className="hero-fade-d3 flex items-center gap-3 mt-8 text-sm" style={{ color: T.muted }}>
                <span aria-hidden="true" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black" style={{ backgroundColor: T.purple, color: "#ffffff" }}>TJ</span>
                <span><span className="font-semibold" style={{ color: T.ink }}>Tejas Jhaveri</span>, Founder of Myntmore</span>
              </div>
            </div>

            <nav aria-label="In this guide" className="hero-fade-d3 lg:col-span-5 rounded-3xl p-2" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] px-5 pt-4 pb-2" style={{ color: T.muted }}>In this guide</p>
              <ol>
                {GUIDE_INDEX.map((item, i) => (
                  <li key={item.href}>
                    <a href={item.href} className="group flex items-center gap-4 px-5 py-3 rounded-2xl transition-colors duration-200 hover:bg-[#F8F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1">
                      <span className="text-sm font-black tabular-nums w-6" style={{ color: T.purple }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-[15px] font-semibold" style={{ color: T.ink }}>{item.label}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} style={{ color: T.muted }} />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Opening story + makeover */}
      <article id="makeover" className="py-20 px-4 border-t scroll-mt-24" style={{ borderColor: T.hairline, backgroundColor: T.paper }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-6" style={{ color: T.ink }}>The two seconds of silence</h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: T.ink2 }}>
                  I was DJing a set last year and dropped a song completely out of genre, just to see what would happen. The floor went quiet for two seconds, then louder than before. Not better, just unexpected.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4" style={{ color: T.ink2 }}>
                  Open any inbox and you already know what&apos;s coming. &ldquo;Thanks for connecting.&rdquo; &ldquo;Just following up.&rdquo; Read a thousand times, those lines stop registering as words. They register as noise, and noise gets deleted without guilt.
                </p>
                <figure className="relative mt-8 rounded-3xl border p-6 sm:p-7 overflow-hidden" style={{ backgroundColor: T.amberSoft, borderColor: T.amberBorder }}>
                  <span aria-hidden="true" className="absolute -top-5 right-5 text-8xl font-black opacity-10 select-none" style={{ color: T.amber }}>&ldquo;</span>
                  <blockquote className="text-2xl sm:text-3xl font-black leading-tight tracking-tight" style={{ color: T.ink }}>
                    Not better, just unexpected.
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: T.amber }}>Tejas Jhaveri, Founder of Myntmore</figcaption>
                </figure>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={120}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: T.purple }}>Try it: fix a message</p>
                <MessageMakeover />
              </FadeIn>
            </div>
          </div>

          {/* Loom video */}
          <FadeIn>
            <div className="mt-14 max-w-3xl mx-auto rounded-3xl p-3 sm:p-4" style={{ backgroundColor: T.ink }}>
              <div className="flex items-center gap-2 px-3 pt-2 pb-4">
                <Play className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: T.gold }} fill={T.gold} />
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: T.gold }}>Watch Tejas break this down</p>
              </div>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "16px", overflow: "hidden" }}>
                <iframe
                  src="https://www.loom.com/embed/143c7b6ae41242bbbad797539987d214"
                  title="Tejas Jhaveri on pattern disruption in outbound"
                  allow="fullscreen"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* 01 · Pattern interrupts */}
      <section id="interrupts" className="py-20 px-4 border-t scroll-mt-24" style={{ borderColor: T.hairline, backgroundColor: T.bg }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader n="01" eyebrow="Pattern disruption" title="Six ways to break the pattern" lede="Tap a card. Each one works for the same reason: it doesn't fit the shape a prospect has learned to skim past." />
          </FadeIn>
          <InterruptCards />

          <FadeIn>
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: T.purple }}>Three things I learned the hard way</span>
              </div>
              <LessonStepper />
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <p className="text-sm" style={{ color: T.muted }}>
                  This is how we run it at{" "}
                  <a href="https://zcu.ge/M0W" target="_blank" rel="noopener noreferrer" className="font-bold underline-offset-4 hover:underline" style={{ color: T.purple }}>Myntmore</a>.
                </p>
                <p className={`${caveat.className} text-3xl leading-none`} style={{ color: T.purple }}>Respectfully, Teejay</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 02 · By channel */}
      <section id="channels" className="py-20 px-4 border-t scroll-mt-24" style={{ borderColor: T.hairline, backgroundColor: T.paper }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader n="02" eyebrow="By channel" accent={T.linkedin} title={<>Same principle, <span style={{ color: T.linkedin }}>different channel</span></>} lede="What works on LinkedIn reads as a pitch in email, and vice versa. Pick one." />
            <ChannelTabs />
          </FadeIn>
        </div>
      </section>

      {/* 03 · Enrichment */}
      <section id="enrichment" className="py-20 px-4 border-t scroll-mt-24" style={{ borderColor: T.hairline, backgroundColor: T.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionHeader n="03" eyebrow="The unglamorous part" accent={T.amber} title="What is enrichment?" />
                <p className="text-base leading-relaxed -mt-4" style={{ color: T.ink2 }}>
                  A raw list of names isn&apos;t enough to write the kind of message this guide describes. <strong style={{ color: T.ink }}>Enrichment</strong> adds real details to a lead, so a message can reference something specific instead of guessing.
                </p>
                <p className="text-xl font-black leading-snug mt-6 pl-5 border-l-2" style={{ color: T.ink, borderColor: T.amber }}>
                  Without it, personalisation is a merge field with a first name in it.
                </p>
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: T.muted }}>Tools worth knowing</p>
                  <ul className="flex flex-wrap gap-2">
                    {ENRICHMENT_TOOLS.map((t) => (
                      <li key={t.name} className="group relative">
                        <span className="inline-flex text-sm font-bold px-3.5 py-2 rounded-full cursor-default transition-colors duration-200 group-hover:border-[#0a0a0a]" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}`, color: T.ink }} tabIndex={0} aria-describedby={`tool-${t.name.replace(/[^a-z]/gi, "")}`}>
                          {t.name}
                        </span>
                        <span id={`tool-${t.name.replace(/[^a-z]/gi, "")}`} role="tooltip" className="pointer-events-none absolute left-0 top-full mt-2 w-56 rounded-xl px-3 py-2 text-xs leading-relaxed opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 z-10" style={{ backgroundColor: T.ink, color: "#ffffff" }}>
                          {t.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={120}>
                <EnrichDemo />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Free tools */}
      <section className="py-20 px-4 border-t" style={{ borderColor: T.hairline, backgroundColor: T.paper }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader n="04" eyebrow="Free tools" accent={T.green} title="Tools that do some of this for you" lede="No jargon, just what each one does and when to reach for it." />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOOLS.map((t, i) => (
              <FadeIn key={t.href} delay={i * 60}>
                <Link
                  href={t.href}
                  className="group flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}
                >
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${t.accent},${t.accent}66)` }} />
                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-black leading-snug" style={{ color: T.ink }}>{t.name}</h3>
                      <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ backgroundColor: `${t.accent}14`, color: t.accent }}>
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed mb-5" style={{ color: T.ink2 }}>{t.plain}</p>
                    <p className="text-sm leading-relaxed mt-auto pt-4 border-t" style={{ color: T.muted, borderColor: T.hairline }}>
                      <span className="font-bold" style={{ color: T.ink }}>Use it when: </span>{t.useCase}
                    </p>
                    <span className="mt-4 text-sm font-bold inline-flex items-center gap-1.5" style={{ color: t.accent }}>Try it free <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · Self-audit */}
      <section id="score" className="py-20 px-4 border-t scroll-mt-24" style={{ borderColor: T.hairline, backgroundColor: T.bg }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader n="05" eyebrow="Self-audit" title="Score your last message" />
            <SelfAudit />
          </FadeIn>

          <div className="mt-10">
            <AskYourAI resources={AI_RESOURCES} />
          </div>

          <FadeIn>
            <div className="mt-6 rounded-3xl p-7 sm:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:items-center" style={{ backgroundColor: T.amberSoft, border: `1px solid ${T.amberBorder}` }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: T.amber }}>The Outbound Operator</p>
                <h3 className="text-2xl font-black leading-tight mb-2" style={{ color: T.ink }}>One practical growth playbook, every week</h3>
                <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                  Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
                </p>
              </div>
              <div className="md:min-w-[20rem]">
                <NewsletterForm inputId="dos-donts-newsletter-email" compact />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center border-t" style={{ borderColor: T.hairline, backgroundColor: T.bg }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <span aria-hidden="true" className="block h-px w-12 mx-auto mb-8" style={{ backgroundColor: T.purple }} />
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-5" style={{ color: T.ink }}>
              Want this built into your own sequences?
            </h2>
            <p className="text-base sm:text-lg mb-10" style={{ color: T.muted }}>We bake pattern disruption into the outbound systems we build for clients. Let&apos;s talk about yours.</p>
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
