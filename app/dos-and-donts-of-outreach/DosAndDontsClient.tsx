"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import FadeIn from "../components/FadeIn";
import JsonLd from "../components/JsonLd";
import AskYourAI from "../components/AskYourAI";
import NewsletterForm from "../components/NewsletterForm";
import { buildArticleSchema, SITE_URL } from "@/lib/schema";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

const PAGE_URL = `${SITE_URL}/dos-and-donts-of-outreach`;
const TITLE = "Pattern Interruption: The Do's and Don'ts of Outreach";
const DESCRIPTION = "Why most outreach gets deleted without being read, how pattern interruption actually works, what to send on LinkedIn vs. cold email, what data enrichment is, and the free tools to build better outreach.";

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: "2026-09-18T12:00:00+05:30",
  dateModified: "2026-09-18T12:00:00+05:30",
});

const AI_RESOURCES = [PAGE_URL, `${SITE_URL}/services/linkedin-outreach`, `${SITE_URL}/services/cold-email`];

const INTERRUPTS = [
  { emoji: "😂", title: "Send a relevant meme", body: "Signals you're a person, not a sequence. Read the room first: playful cultures love it, formal ones can miss completely." },
  { emoji: "🎙️", title: "Drop a 20-second voice note", body: "Nobody expects a voice from a stranger, and an actual tone builds trust text never quite manages." },
  { emoji: "📸", title: "Send a screenshot of something you noticed", body: "Proves you actually looked, instead of blasting the same line down a list of five hundred names." },
  { emoji: "❓", title: "Ask one question instead of another pitch", body: "A real question invites a real answer. A pitch just invites a scroll." },
  { emoji: "🎁", title: "Give a useful resource before asking for anything", body: "No strings, no follow-up demand, just something worth having whether they ever reply or not." },
  { emoji: "✍️", title: "Share a handwritten note", body: "In a world of typed everything, a few real handwritten lines feel almost personal." },
];

const CHANNEL_TIPS = [
  {
    channel: "LinkedIn",
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
  { name: "Apollo.io", body: "An all-in-one prospecting database with contact details and enrichment built in, useful when you want lists and enrichment from a single place." },
  { name: "Clay", body: "A workflow tool that pulls from multiple data sources at once, useful for more advanced, waterfall-style enrichment." },
  { name: "Clearbit", body: "Company-level enrichment, firmographics like headcount, funding, and tech stack, appended to a lead via API." },
  { name: "Hunter.io", body: "Finds and verifies email addresses for a given name and domain." },
  { name: "ZoomInfo / Lusha", body: "Larger, paid contact and firmographic databases, for teams that need scale." },
];

const TOOLS = [
  {
    href: "/tools/icp-builder",
    name: "ICP & Value Proposition Generator",
    accent: "#7C3AED",
    plain: "Tell it what your business does, and it hands you back who to sell to and what to say to them, instead of you guessing.",
    useCase: "Use it before writing a single message: get your ICP sorted first, so every message is aimed at someone real.",
  },
  {
    href: "/tools/dm-angle-generator",
    name: "DM Angle Generator",
    accent: "#0077b5",
    plain: "Type in your offer, get back 5 different ways to open a message, instead of staring at a blank box.",
    useCase: "Use it when your reply rate goes quiet and the opening line is the likely culprit.",
  },
  {
    href: "/tools/roi-calculator",
    name: "ROI Calculator",
    accent: "#16A34A",
    plain: "Plug in your numbers, sends, replies, deal value, and see what your outreach is actually worth.",
    useCase: "Use it before committing budget or time, so the return is a number, not a guess.",
  },
  {
    href: "/tools/lead-magnet-ideas",
    name: "Lead Magnet Idea Generator",
    accent: "#D97706",
    plain: "Turns your business and ICP into concrete, specific things you could give away for free.",
    useCase: "Use it when you like the “give before you ask” idea but can't think what to give.",
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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── Interactive: pick-a-pattern-interrupt shuffler ───────────── */
function InterruptShuffler() {
  const [deck, setDeck] = useState<number[]>(INTERRUPTS.map((_, i) => i));
  const [pos, setPos] = useState(0);

  useEffect(() => {
    setDeck((d) => shuffle(d));
  }, []);

  function next() {
    setPos((p) => {
      const np = p + 1;
      if (np >= deck.length) {
        setDeck((d) => shuffle(d));
        return 0;
      }
      return np;
    });
  }

  const current = INTERRUPTS[deck[pos]];

  return (
    <div className="rounded-2xl border p-7 sm:p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>Pick a pattern interrupt</span>
        <div className="flex items-center gap-1.5">
          {INTERRUPTS.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full transition-colors" style={{ backgroundColor: i === pos ? "#7C3AED" : "#DDE0E7" }} />
          ))}
        </div>
      </div>
      <div key={deck[pos]} className="card-fade-up">
        <div className="flex items-start gap-4 mb-5">
          <span className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9" }}>{current.emoji}</span>
          <div>
            <h4 className="text-lg font-black leading-snug" style={{ color: "#0a0a0a" }}>{current.title}</h4>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{current.body}</p>
      </div>
      <button
        type="button"
        onClick={next}
        className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2"
      >
        Show me another
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a9 9 0 0114.13-5.36M20 15a9 9 0 01-14.13 5.36" /></svg>
      </button>
    </div>
  );
}

/* ─── Interactive: LinkedIn vs Cold Email tabs ─────────────────── */
function ChannelTabs() {
  const [active, setActive] = useState(0);
  const c = CHANNEL_TIPS[active];

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {CHANNEL_TIPS.map((tab, i) => (
          <button
            key={tab.channel}
            type="button"
            onClick={() => setActive(i)}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all"
            style={
              active === i
                ? { backgroundColor: tab.accent, color: "#ffffff" }
                : { backgroundColor: "#ffffff", color: "#3D3D3D", border: "1px solid #E8E2D9" }
            }
          >
            {tab.channel}
          </button>
        ))}
      </div>
      <div key={active} className="rounded-2xl border overflow-hidden card-fade-up" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
        <div className="h-1" style={{ background: `linear-gradient(90deg,${c.accent},${c.accent}66)` }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#16A34A" }}>Do</p>
            <ul className="space-y-2.5">
              {c.dos.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#16A34A" }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#DC2626" }}>Don&apos;t</p>
            <ul className="space-y-2.5">
              {c.donts.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#DC2626" }} />
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

  let verdict = "Click through the list below, honestly, and see where your last outreach message actually lands.";
  if (total > 0) {
    if (dontScore === 0 && doScore >= 6) verdict = "You're already pattern-interrupting. Most outbound isn't.";
    else if (dontScore >= 4) verdict = "This reads exactly like the outbound your prospects are trained to delete.";
    else verdict = "Partway there. A few small changes will do a lot.";
  }

  return (
    <div>
      <div className="rounded-2xl border p-5 mb-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>Quick self-audit</span>
          {total > 0 && (
            <button type="button" onClick={() => { setDos(new Set()); setDonts(new Set()); }} className="text-xs font-bold" style={{ color: "#8C8279" }}>
              Reset
            </button>
          )}
        </div>
        <p className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>{verdict}</p>
        {total > 0 && (
          <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#E8E2D9" }}>
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.min(100, (doScore / DOS.length) * 100)}%`,
                backgroundColor: dontScore > doScore ? "#DC2626" : "#16A34A",
              }}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-7" style={{ backgroundColor: "#F0FDF4", borderColor: "rgba(22,163,74,0.25)" }}>
          <h3 className="text-sm font-black uppercase tracking-widest mb-1" style={{ color: "#16A34A" }}>Do</h3>
          <p className="text-xs mb-4" style={{ color: "#166534" }}>Tap what your last message actually did</p>
          <ul className="space-y-2">
            {DOS.map((d, i) => {
              const on = dos.has(i);
              return (
                <li key={d}>
                  <button
                    type="button"
                    onClick={() => toggle(dos, setDos, i)}
                    className="w-full flex items-start gap-2.5 text-left rounded-lg px-2 py-1.5 -mx-2 transition-colors"
                    style={{ backgroundColor: on ? "rgba(22,163,74,0.1)" : "transparent" }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: on ? "#16A34A" : "rgba(22,163,74,0.12)" }}>
                      {on && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#14532D" }}>{d}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rounded-2xl border p-7" style={{ backgroundColor: "#FEF2F2", borderColor: "rgba(220,38,38,0.2)" }}>
          <h3 className="text-sm font-black uppercase tracking-widest mb-1" style={{ color: "#DC2626" }}>Don&apos;t</h3>
          <p className="text-xs mb-4" style={{ color: "#991B1B" }}>Tap what your last message was guilty of</p>
          <ul className="space-y-2">
            {DONTS.map((d, i) => {
              const on = donts.has(i);
              return (
                <li key={d}>
                  <button
                    type="button"
                    onClick={() => toggle(donts, setDonts, i)}
                    className="w-full flex items-start gap-2.5 text-left rounded-lg px-2 py-1.5 -mx-2 transition-colors"
                    style={{ backgroundColor: on ? "rgba(220,38,38,0.1)" : "transparent" }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: on ? "#DC2626" : "rgba(220,38,38,0.1)" }}>
                      {on && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#7F1D1D" }}>{d}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DosAndDontsClient() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "Pattern Interruption", href: "/dos-and-donts-of-outreach" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7C3AED" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#7C3AED" }}>Guide &middot; 6 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            <span style={{ color: "#7C3AED" }}>Pattern Interruption</span>
            <br />
            The Do&apos;s and Don&apos;ts of Outreach
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "#52525B" }}>
            Every prospect&apos;s inbox has trained them to skim past your message before they&apos;ve read a word of it. Here&apos;s what actually gets one read.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="prose-custom">
              <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>The Two Seconds of Silence</h2>
              <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                I was DJing a set last year and dropped a song completely out of genre, just to see what would happen. The floor went quiet for two seconds, then louder than before. Not better, just unexpected. That&apos;s basically the entire problem with outbound right now.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                Open any inbox and you already know what&apos;s coming: &ldquo;Thanks for connecting.&rdquo; &ldquo;Just following up.&rdquo; Read a thousand times, these lines stop registering as words. They register as noise, and noise gets deleted without guilt.
              </p>
              <p className="text-base leading-relaxed mt-4 font-semibold" style={{ color: "#0a0a0a" }}>
                So sometimes the smartest move isn&apos;t a better version of the same message. It&apos;s a different kind of message entirely.
              </p>
            </div>
          </FadeIn>

          {/* Interactive tactic shuffler */}
          <FadeIn>
            <div className="mt-10">
              <InterruptShuffler />
            </div>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn>
            <blockquote className="relative rounded-2xl border p-7 sm:p-8 mt-10 text-xl sm:text-2xl font-black leading-relaxed overflow-hidden" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.35)", color: "#0a0a0a" }}>
              <span aria-hidden="true" className="absolute -top-5 right-4 text-8xl font-black opacity-10" style={{ color: "#D97706" }}>&ldquo;</span>
              Not better, just unexpected.
              <footer className="mt-3 text-sm font-normal" style={{ color: "#8C8279" }}>Tejas Jhaveri, Founder of Myntmore</footer>
            </blockquote>
          </FadeIn>

          {/* Loom video */}
          <FadeIn>
            <div className="mt-10 rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#0a0a0a", borderColor: "#2a2a3e" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F5B731" }}>Watch Tejas Break This Down</p>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "12px", overflow: "hidden" }}>
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

          <div className="prose-custom mt-10">
            <FadeIn>
              <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>It&apos;s Not a Hack, It&apos;s Physics</h3>
              <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                These aren&apos;t clever tricks. They work for one boring reason: they interrupt a pattern the brain has learned to ignore. Nobody was thinking about the music until it broke. Your prospect&apos;s inbox works the same way, the moment something doesn&apos;t fit the shape they skim past, their brain pays attention for half a second longer. That half second is the whole game.
              </p>

              <h3 className="text-xl font-black mb-3 mt-8" style={{ color: "#0a0a0a" }}>The Day I Stopped Chasing Replies</h3>
              <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                For years I measured outbound purely on reply rate. What I missed: earning attention and earning a reply are two different jobs. A prospect once almost didn&apos;t reply to a screenshot pointing out a typo on her own pricing page, until she realised nobody else had noticed it either. It didn&apos;t sell anything, it just proved I&apos;d actually looked. Once someone believes that, the sales conversation gets ten times easier.
              </p>

              <h3 className="text-xl font-black mb-3 mt-8" style={{ color: "#0a0a0a" }}>Where This Lives in Our Sequences Today</h3>
              <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                At{" "}
                <a href="https://zcu.ge/M0W" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: "#7C3AED" }}>Myntmore</a>{" "}
                we build a version of this into almost every sequence we run, not as a gimmick, but as a deliberate break where the message stops sounding like a sequence. Sometimes that&apos;s a founder recording a fifteen-second video instead of email four. Sometimes it&apos;s a useful teardown sent with zero ask attached.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                Not every message needs to be an interrupt, though. If every email is a meme, the meme becomes the new template, and there&apos;s no floor left to bring back. It works because it&apos;s rare, deliberate, and placed with intent.
              </p>

              <p className={`${caveat.className} text-2xl leading-snug mt-8`} style={{ color: "#7C3AED" }}>
                &mdash; Respectfully, Teejay
              </p>
            </FadeIn>
          </div>
        </div>
      </article>

      {/* What works per channel */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(0,119,181,0.08)", color: "#0077b5", border: "1px solid rgba(0,119,181,0.2)" }}>
              By Channel
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>What actually works, LinkedIn vs. cold email</h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>Same principle, different channel. Tap one to see it.</p>
            <ChannelTabs />
          </FadeIn>
        </div>
      </section>

      {/* Enrichment */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>
              The Unglamorous Part
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#0a0a0a" }}>What is enrichment, and why does it matter?</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#3D3D3D" }}>
              A raw list of names isn&apos;t enough to write the kind of message this guide is describing. <strong>Enrichment</strong> adds real details to a lead, company size, funding, tech stack, verified email, so a message can reference something specific instead of guessing. Without it, personalisation is a merge field with a first name in it.
            </p>
            <div className="space-y-3">
              {ENRICHMENT_TOOLS.map((t) => (
                <div key={t.name} className="rounded-2xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-base font-black mb-1" style={{ color: "#0a0a0a" }}>{t.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{t.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Free tools */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(22,163,74,0.08)", color: "#16A34A", border: "1px solid rgba(22,163,74,0.2)" }}>
              Free Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Tools that do some of this for you</h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>No jargon, just what each one does and when to reach for it.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TOOLS.map((t) => (
                <div key={t.href} className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${t.accent},${t.accent}66)` }} />
                  <div className="p-6">
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{t.name}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#52525B" }}>{t.plain}</p>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#8C8279" }}><strong>Use it when:</strong> {t.useCase}</p>
                    <Link href={t.href} className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: t.accent }}>
                      Try it free
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive self-audit */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Score your last message</h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>Think of the last cold message you sent. Tap everything that applies.</p>
            <SelfAudit />
          </FadeIn>

          <div className="mt-10">
            <AskYourAI resources={AI_RESOURCES} />
          </div>

          <FadeIn>
            <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>The Outbound Operator</p>
              <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>One practical growth playbook, every week</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
                Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
              </p>
              <NewsletterForm inputId="dos-donts-newsletter-email" compact />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 border-t text-center" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>Want this built into your own sequences?</h2>
          <p className="text-base mb-8" style={{ color: "#52525B" }}>We bake pattern interruption into the outbound systems we build for clients. Let&apos;s talk about yours.</p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Book a Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
