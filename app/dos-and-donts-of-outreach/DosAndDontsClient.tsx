"use client";

import { useState } from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Gift,
  Linkedin,
  Mail,
  MessageCircleQuestion,
  Mic,
  PenLine,
  Play,
  RotateCcw,
  Smile,
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

/* ─── Tokens (kept local: this page is an editorial one-off) ───── */
const T = {
  bg: "#F8F6F2",
  paper: "#FFFFFF",
  ink: "#0a0a0a",
  ink2: "#3D3D3D",
  muted: "#6B6560",
  hairline: "#E8E2D9",
  gold: "#F5B731",
  goldText: "#7C3AED",
  goldSoft: "rgba(124,58,237,0.08)",
  purple: "#7C3AED",
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
  { href: "#interrupts", label: "Six ways to break the pattern" },
  { href: "#channels", label: "LinkedIn vs. cold email" },
  { href: "#enrichment", label: "What enrichment actually is" },
  { href: "#score", label: "Score your last message" },
];

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
    body: "These aren't clever tricks. They work for one boring reason: they interrupt a pattern the brain has learned to ignore. The moment something doesn't fit the shape a prospect skims past, their attention holds for half a second longer. That half second is the whole game.",
  },
  {
    n: "02",
    title: "The day I stopped chasing replies",
    body: "For years I measured outbound purely on reply rate. What I missed: earning attention and earning a reply are two different jobs. A screenshot pointing out a typo on a prospect's pricing page didn't sell anything. It proved I'd actually looked. Once someone believes that, the sales conversation gets ten times easier.",
  },
  {
    n: "03",
    title: "Where this lives in our sequences",
    body: "We build a version of this into almost every sequence we run, as a deliberate break where the message stops sounding like a sequence. Not every message needs to be an interrupt, though. If every email is a meme, the meme becomes the new template. It works because it's rare and placed with intent.",
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

const ENRICHMENT_TOOLS = [
  { name: "Apollo.io", body: "All-in-one prospecting database with contact details and enrichment built in. Lists and enrichment from one place." },
  { name: "Clay", body: "Pulls from multiple data sources at once. Built for advanced, waterfall-style enrichment." },
  { name: "Clearbit", body: "Company-level firmographics, headcount, funding, tech stack, appended to a lead via API." },
  { name: "Hunter.io", body: "Finds and verifies email addresses for a given name and domain." },
  { name: "ZoomInfo / Lusha", body: "Larger, paid contact and firmographic databases for teams that need scale." },
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

/* ─── Small editorial primitives ───────────────────────────────── */
function SectionHeader({ n, eyebrow, title, lede, align = "left", accent = T.purple }: { n: string; eyebrow: string; title: React.ReactNode; lede?: string; align?: "left" | "center"; accent?: string }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-sm font-black tabular-nums" style={{ color: accent }}>{n}</span>
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: accent }} />
        <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1] tracking-tight" style={{ color: T.ink }}>
        {title}
      </h2>
      {lede && (
        <p className={`text-base sm:text-lg leading-relaxed mt-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`} style={{ color: T.muted }}>{lede}</p>
      )}
    </div>
  );
}

function Mark({ kind }: { kind: "do" | "dont" }) {
  const isDo = kind === "do";
  const Icon = isDo ? Check : X;
  return (
    <span
      aria-hidden="true"
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ backgroundColor: isDo ? T.doSoft : T.dontSoft, color: isDo ? T.doFill : T.dontFill }}
    >
      <Icon className="w-3 h-3" strokeWidth={3} />
    </span>
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
    if (dontScore === 0 && doScore >= 6) verdict = "You're already pattern-interrupting. Most outbound isn't.";
    else if (dontScore >= 4) verdict = "This reads exactly like the outbound your prospects are trained to delete.";
    else verdict = "Partway there. A few small changes will do a lot.";
  }

  const columns: { kind: "do" | "dont"; heading: string; hint: string; items: string[]; picked: Set<number>; set: (s: Set<number>) => void }[] = [
    { kind: "do", heading: "Do", hint: "What your last message actually did", items: DOS, picked: dos, set: setDos },
    { kind: "dont", heading: "Don't", hint: "What your last message was guilty of", items: DONTS, picked: donts, set: setDonts },
  ];

  return (
    <div>
      {/* Verdict strip */}
      <div className="rounded-3xl p-6 sm:p-7 mb-6 flex flex-col sm:flex-row sm:items-center gap-5" style={{ backgroundColor: T.ink, color: "#ffffff" }}>
        <div className="flex items-baseline gap-2 flex-shrink-0">
          <span className="text-5xl font-black leading-none tabular-nums" style={{ color: T.gold }}>{doScore}</span>
          <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>of {DOS.length} habits</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold leading-snug">{verdict}</p>
          <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.14)" }}>
            <div
              className="h-full rounded-full transition-[width] duration-300 ease-out"
              style={{ width: `${Math.min(100, (doScore / DOS.length) * 100)}%`, backgroundColor: dontScore > doScore ? T.dontFill : T.gold }}
            />
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
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-200"
                        style={{ backgroundColor: on ? (col.kind === "do" ? T.doFill : T.dontFill) : "transparent", border: on ? "none" : `1.5px solid ${T.hairline}` }}
                      >
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: T.bg }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "Pattern Disruption", href: "/dos-and-donts-of-outreach" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: T.purple }} />
                <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: T.purple }}>Guide &middot; 6 min read</span>
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
                <span aria-hidden="true">&middot;</span>
                <span>6 min read</span>
              </div>
            </div>

            <nav aria-label="In this guide" className="hero-fade-d3 lg:col-span-5 rounded-3xl p-2" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] px-5 pt-4 pb-2" style={{ color: T.muted }}>In this guide</p>
              <ol>
                {GUIDE_INDEX.map((item, i) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-colors duration-200 hover:bg-[#F8F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                    >
                      <span className="text-sm font-black tabular-nums w-6" style={{ color: T.goldText }}>{String(i + 1).padStart(2, "0")}</span>
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

      {/* Opening story */}
      <article className="py-20 px-4 border-t" style={{ borderColor: T.hairline, backgroundColor: T.paper }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-8" style={{ color: T.ink }}>The two seconds of silence</h2>
            <p className="text-lg leading-[1.75]" style={{ color: T.ink2 }}>
              I was DJing a set last year and dropped a song completely out of genre, just to see what would happen. The floor went quiet for two seconds, then louder than before. Not better, just unexpected. That&apos;s basically the entire problem with outbound right now.
            </p>
            <p className="text-lg leading-[1.75] mt-6" style={{ color: T.ink2 }}>
              Open any inbox and you already know what&apos;s coming: &ldquo;Thanks for connecting.&rdquo; &ldquo;Just following up.&rdquo; Read a thousand times, these lines stop registering as words. They register as noise, and noise gets deleted without guilt.
            </p>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn>
            <figure className="relative my-14 rounded-3xl border p-8 sm:p-10 overflow-hidden text-center" style={{ backgroundColor: T.amberSoft, borderColor: T.amberBorder }}>
              <span aria-hidden="true" className="absolute -top-6 right-6 text-9xl font-bold opacity-10 select-none" style={{ color: T.amber }}>&ldquo;</span>
              <blockquote className="text-3xl sm:text-[2.6rem] font-black leading-[1.15] tracking-tight" style={{ color: T.ink }}>
                &ldquo;Not better, just unexpected.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: T.amber }}>The smartest move isn&apos;t a better version of the same message</figcaption>
            </figure>
          </FadeIn>

          {/* Loom video */}
          <FadeIn>
            <div className="rounded-3xl p-3 sm:p-4" style={{ backgroundColor: T.ink }}>
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
            <SectionHeader n="01" eyebrow="Pattern disruption" title={<>Six ways to break the pattern</>} lede="Each one works for the same reason: it doesn't fit the shape a prospect has learned to skim past." />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERRUPTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 60}>
                  <div className="group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
                    <div className="flex items-start justify-between mb-6">
                      <span className="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#7C3AED] group-hover:text-white" style={{ backgroundColor: "rgba(124,58,237,0.08)", color: T.purple }}>
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </span>
                      <span className="text-sm font-black tabular-nums" style={{ color: T.goldText }}>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mb-2" style={{ color: T.ink }}>{item.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: T.muted }}>{item.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Three lessons, editorial columns */}
          <FadeIn>
            <div className="mt-16 rounded-3xl p-8 sm:p-10 lg:p-12" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 lg:divide-x lg:divide-[#E8E2D9]">
                {LESSONS.map((l) => (
                  <div key={l.n} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                    <span className="block text-4xl font-black mb-4 tabular-nums" style={{ color: T.purple }}>{l.n}</span>
                    <h3 className="text-lg font-bold leading-snug mb-3" style={{ color: T.ink }}>{l.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: T.ink2 }}>{l.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t" style={{ borderColor: T.hairline }}>
                <p className="text-sm" style={{ color: T.muted }}>
                  This is how we run it at{" "}
                  <a href="https://zcu.ge/M0W" target="_blank" rel="noopener noreferrer" className="font-bold underline-offset-4 hover:underline" style={{ color: T.purple }}>Myntmore</a>.
                </p>
                <p className={`${caveat.className} text-3xl leading-none`} style={{ color: T.goldText }}>Respectfully, Teejay</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionHeader n="03" eyebrow="The unglamorous part" accent={T.amber} title={<>What is enrichment, and why does it matter?</>} />
                <p className="text-base leading-relaxed -mt-4" style={{ color: T.ink2 }}>
                  A raw list of names isn&apos;t enough to write the kind of message this guide describes. <strong style={{ color: T.ink }}>Enrichment</strong> adds real details to a lead, company size, funding, tech stack, verified email, so a message can reference something specific instead of guessing.
                </p>
                <p className="text-xl font-black leading-snug mt-6 pl-5 border-l-2" style={{ color: T.ink, borderColor: T.amber }}>
                  Without it, personalisation is a merge field with a first name in it.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: T.paper, border: `1px solid ${T.hairline}` }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] px-7 pt-6 pb-4" style={{ color: T.muted }}>Tools worth knowing</p>
                  <ul className="divide-y" style={{ borderColor: T.hairline }}>
                    {ENRICHMENT_TOOLS.map((t) => (
                      <li key={t.name} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 px-7 py-5" style={{ borderColor: T.hairline }}>
                        <span className="text-[15px] font-bold" style={{ color: T.ink }}>{t.name}</span>
                        <span className="text-[15px] leading-relaxed" style={{ color: T.muted }}>{t.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Free tools */}
      <section className="py-20 px-4 border-t" style={{ borderColor: T.hairline, backgroundColor: T.paper }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader n="04" eyebrow="Free tools" accent={T.green} title={<>Tools that do some of this for you</>} lede="No jargon, just what each one does and when to reach for it." />
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
                    <h3 className="text-lg font-bold leading-snug" style={{ color: T.ink }}>{t.name}</h3>
                    <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:text-white" style={{ backgroundColor: `${t.accent}14`, color: t.accent }}>
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
            <SectionHeader n="05" eyebrow="Self-audit" title={<>Score your last message</>} />
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
            <h2 className="text-3xl sm:text-5xl font-black leading-[1.08] tracking-tight mb-5" style={{ color: T.ink }}>
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
