import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  DoorOpen,
  Eye,
  KeyRound,
  MessagesSquare,
  PenLine,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Handshake,
  Zap,
  type LucideIcon,
} from "lucide-react";
import InnerLayout from "@/app/components/InnerLayout";
import FadeIn from "@/app/components/FadeIn";
import StatTicker from "@/app/components/StatTicker";
import Faq from "@/app/lp/Faq";
import JsonLd from "@/app/components/JsonLd";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Underline from "@/app/resources/guides/how-to-set-up-vibe-prospecting/Underline";
import { buildFaqSchema, buildServiceSchema, SITE_URL } from "@/lib/schema";
import LinkedinFlowVisual from "./LinkedinFlowVisual";
import AgentExplorer from "./AgentExplorer";
import InView from "./InView";
import { BLUE, BLUE_LIGHT, BLUE_PALE, BODY, CREAM, GOLD, INK, MUTED, SOFT_LINE } from "./theme";

// LinkedIn outreach service page: the same design language as the cold email
// page, with LinkedIn blue as the accent. It carries no pricing or plans.

const CALENDAR = "/founder-meeting";

const STATS = [
  { value: "45%", label: "of a company's market value ties back to leadership reputation" },
  { value: "561%", label: "more reach for personal brands than company pages" },
  { value: "13.57x", label: "more paid to people buyers see as experts" },
  { value: "90 min", label: "of your time a month. We handle the rest." },
];

const PILLS = ["Account-safe execution", "AI agent-led prospecting", "Messages that sound like you"];

const COMPARE: { label: string; others: boolean }[] = [
  { label: "Profile optimisation", others: true },
  { label: "Content creation", others: true },
  { label: "Monthly reporting", others: true },
  { label: "ICP research & positioning", others: false },
  { label: "Lead generation (LinkedIn + InMail)", others: false },
  { label: "Multi-channel outreach sequences", others: false },
  { label: "Personalised connection requests", others: false },
  { label: "Competitor & buyer intelligence", others: false },
  { label: "AI agent-led prospecting", others: false },
  { label: "Weekly pipeline updates", others: false },
  { label: "Monthly strategy reviews", others: false },
];

const INCLUDED: { icon: LucideIcon; label: string; text: string }[] = [
  { icon: Users, label: "Dedicated growth team", text: "A lead gen expert, content writer and account manager" },
  { icon: Target, label: "ICP & value-prop frameworks", text: "Define your audience and sharpen your message" },
  { icon: CalendarClock, label: "Weekly check-ins with Tejas", text: "Strategy and positioning, every single week" },
  { icon: UserCheck, label: "LinkedIn makeover", text: "Profile optimisation plus competitor analysis" },
  { icon: PenLine, label: "Authority-building content", text: "Monthly strategy, writing and a video interview" },
  { icon: Send, label: "Lead generation, done for you", text: "Connection requests, follow-ups, InMails and daily engagement" },
  { icon: MessagesSquare, label: "Reputation management", text: "Thoughtful replies to every comment on your posts" },
  { icon: BarChart3, label: "Monthly growth reports", text: "Content, audience growth and pipeline movement" },
];

const STEPS = [
  { n: "01", title: "Position", text: "ICP and value-proposition frameworks define who you serve and why they should care." },
  { n: "02", title: "Build authority", text: "A LinkedIn makeover and a monthly content engine make you credible at a glance." },
  { n: "03", title: "Start conversations", text: "AI agents and our team run personalised outreach to the right buyers." },
  { n: "04", title: "Review and refine", text: "Weekly check-ins and monthly reports keep every campaign sharper." },
];

const NOTES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Your account is safe", text: "Everything stays within LinkedIn's limits. No bans, no risks, just smarter execution." },
  { icon: Sparkles, title: "AI agents are our unfair advantage", text: "From finding your ICP to writing follow-ups that feel personal, they work quietly behind the scenes." },
  { icon: RefreshCw, title: "Your ICP isn't set in stone", text: "Your business evolves, and so does your ideal customer. We adjust targeting as you grow." },
  { icon: Building2, title: "Company pages grow differently", text: "They serve a different purpose. We keep yours sharp, but real traction happens on your personal profile." },
  { icon: TrendingUp, title: "Sustainable, high-impact growth", text: "No fake followers, no gimmicks. Just real, strategic positioning that gets results." },
];

const OUTCOMES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Zap, title: "Consistent pipeline", text: "A steady flow of replies and qualified meetings, every week." },
  { icon: Eye, title: "Visibility that converts", text: "Prospects recognise your name before you ever reach out." },
  { icon: Target, title: "Sharper positioning", text: "Messaging your ideal buyers can't ignore." },
  { icon: Handshake, title: "Effortless execution", text: "A full team running content and outreach, even on your busiest days." },
  { icon: BadgeCheck, title: "High-quality leads", text: "High-intent, high-relevance prospects only. No noise." },
  { icon: TrendingUp, title: "Real business outcomes", text: "More conversations and deals, without hours on LinkedIn every day." },
];

const FAQS = [
  { q: "Why do I need to build a personal brand?", a: "People buy from people they recognise and trust. A strong personal brand puts you in front of buyers before your first message, makes your outreach credible and gives you pricing power: 45% of a company's market value ties back to leadership reputation, and buyers pay 13.57x more to those they see as experts." },
  { q: "Why LinkedIn?", a: "LinkedIn is where you can reach named decision-makers directly, and personal profiles get 561% more reach than company pages. Content builds the trust, outreach starts the conversations, and both happen in the same place." },
  { q: "What's in it for me?", a: "A steady pipeline of conversations and qualified meetings, a profile and content that make your outreach credible, and a calendar that fills consistently, all for about 90 minutes of your time a month." },
  { q: "How do AI agents fit into the process?", a: "They work like a silent growth team, 24/7. They break down your ICP, rank who is most likely to engage, enrich every lead with context, track your competitors, and draft comments, replies and follow-ups that sound like you." },
  { q: "What makes AI agents so effective for LinkedIn?", a: "LinkedIn rewards relevance. Agents work from real-time data, so every connection request, InMail and follow-up reaches the right person with the right context, at a volume no human team can match, while we keep the voice yours." },
  { q: "How much time do I need to spend as a founder?", a: "About 90 minutes a month. We handle the research, content, outreach, replies and reporting around that input." },
  { q: "How does Myntmore help me stand out from the competition?", a: "We track how often your competitors post, what works for them and where they fall short, then position you one step ahead with sharper messaging and content that gets you seen by the right people." },
  { q: "What makes Myntmore different from other agencies?", a: "Most agencies stop at profile optimisation, content and reporting. We also do ICP research, LinkedIn and InMail lead generation, multi-channel sequences, personalised connection requests, competitor and buyer intelligence, AI agent-led prospecting, weekly pipeline updates and monthly strategy reviews." },
  { q: "How soon will I see results?", a: "You won't get an explosion of leads on day one. The first weeks go into the right setup, the right audience and consistent content that builds trust. Traction builds from there as your content and outreach start working together." },
  { q: "I might not have enough content to share. How will you generate that?", a: "That is our job. We run a monthly content strategy, write the posts and use a short video interview with you to capture your ideas, so you never need a backlog of content." },
];

const FOUNDER_STATS = ["4x entrepreneur", "Scaled Flintstop to $6M ARR", "TEDx speaker", "Growth marketing professor", "300+ clients"];

const FAQ_SCHEMA = buildFaqSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a })));
const SERVICE_SCHEMA = buildServiceSchema({
  name: "LinkedIn Outreach & Automation",
  description: "AI-agent-led LinkedIn personal branding and lead generation for founders, CXOs and B2B teams.",
  serviceType: "LinkedIn Outreach and Personal Branding",
  url: `${SITE_URL}/services/linkedin-outreach`,
});

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: light ? GOLD : BLUE }}>
      {children}
    </p>
  );
}

const h2Style = { letterSpacing: "-0.035em", lineHeight: 1.04 } as const;

function Tick({ muted }: { muted?: boolean }) {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full" style={muted ? { backgroundColor: "#EEF0F2", color: "#9AA3AD" } : { background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`, color: "#fff", boxShadow: "0 6px 14px rgba(10,102,194,0.3)" }}>
      <Check className="h-4 w-4" strokeWidth={3.2} aria-hidden="true" />
      <span className="sr-only">{muted ? "Included" : "Included by Myntmore"}</span>
    </span>
  );
}

function Cross() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full" style={{ backgroundColor: "#FDECEC", color: "#DC2626" }}>
      <X className="h-4 w-4" strokeWidth={3.2} aria-hidden="true" />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export default function LinkedinOutreachPage() {
  return (
    <InnerLayout>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <style>{`
        .li-tl-line { transform-origin: left center; transform: scaleX(0); transition: transform 1.7s cubic-bezier(.4,0,.2,1) .2s; }
        [data-inview=true] .li-tl-line { transform: scaleX(1); }
        .li-tl-badge { background: #fff; color: ${MUTED}; border: 2px solid #DCE3EA; transform: scale(.82); transition: transform .55s cubic-bezier(.22,1,.36,1), background .4s ease, color .4s ease, border-color .4s ease, box-shadow .4s ease; transition-delay: calc(var(--i) * .38s + .35s); }
        [data-inview=true] .li-tl-badge { background: linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT}); color: #fff; border-color: transparent; transform: scale(1); box-shadow: 0 12px 26px rgba(10,102,194,.32); }
        .li-bar-fill { transform-origin: left center; transform: scaleX(0); transition: transform 1.5s cubic-bezier(.4,0,.2,1) .5s; }
        [data-inview=true] .li-bar-fill { transform: scaleX(1); }
        @keyframes li-ping { 0% { transform: scale(1); opacity: .5; } 75%, 100% { transform: scale(1.9); opacity: 0; } }
        .li-ping { animation: li-ping 2.4s cubic-bezier(0, 0, .2, 1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .li-tl-line, .li-bar-fill { transition: none; transform: none; }
          .li-tl-badge { transition: none; transform: none; background: linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT}); color: #fff; border-color: transparent; }
          .li-ping { animation: none; display: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-28 pt-32 sm:pb-32" style={{ backgroundColor: CREAM }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-160px", left: "-180px", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle,rgba(10,102,194,0.2),rgba(10,102,194,0.06) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-180px", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,183,49,0.24),rgba(167,139,250,0.08) 45%,transparent 70%)", filter: "blur(55px)" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="hero-fade">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "LinkedIn Outreach", href: "/services/linkedin-outreach" }]} />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="hero-fade mb-7 inline-flex items-center gap-2.5 rounded-full border bg-white/70 px-5 py-2 backdrop-blur" style={{ borderColor: "rgba(10,102,194,0.35)" }}>
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: BLUE }} />
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.3em]" style={{ color: INK }}>LinkedIn outreach · AI agent-led</span>
              </div>
              <h1 className="hero-fade-d1 font-black" style={{ color: INK, fontSize: "clamp(2.5rem, 6.1vw, 4.3rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}>
                Your personal brand matters,
                <br className="hidden sm:block" /> but your{" "}
                <span className="relative inline-block italic" style={{ color: BLUE }}>
                  pipeline
                  <Underline color={GOLD} />
                </span>{" "}
                matters more<span style={{ color: GOLD }}>.</span>
              </h1>
              <p className="hero-fade-d2 mt-7 max-w-lg text-lg font-medium sm:text-xl" style={{ color: "#3b3b45", lineHeight: 1.4 }}>
                Custom-trained AI agents power LinkedIn outreach that starts real conversations, so the right buyers find you and your calendar fills with qualified B2B meetings.
              </p>
              <div className="hero-fade-d2 mt-9 flex flex-wrap gap-3">
                <Link href={CALENDAR} className="btn-dark inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold">
                  Book a free strategy call <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="#agents" className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors hover:border-[#0A66C2]" style={{ borderColor: "#E8E2D9", color: INK }}>
                  Meet the AI agents
                </a>
              </div>
            </div>
            <LinkedinFlowVisual />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative z-20 -mt-14 px-4 sm:-mt-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border md:grid-cols-4" style={{ borderColor: SOFT_LINE, backgroundColor: "#E6EDF5", boxShadow: "0 30px 80px rgba(15,15,20,0.09)" }}>
              {STATS.map((s) => (
                <div key={s.label} className="bg-white px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-4xl font-black md:text-[2.3rem] lg:text-5xl" style={{ color: INK, letterSpacing: "-0.045em" }}>
                    <StatTicker value={s.value} />
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug" style={{ color: "#6b655e" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {PILLS.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-bold" style={{ borderColor: SOFT_LINE, color: INK }}>
                  <BadgeCheck className="h-4 w-4" style={{ color: BLUE }} aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reputation + pipeline */}
      <section className="px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>An unfair advantage</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                A strong brand opens the door. <span className="italic" style={{ color: BLUE }}>A strong pipeline takes you inside.</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: BODY }}>We help you build both.</p>
            </div>
          </FadeIn>
          <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            <FadeIn className="h-full">
              <div className="relative h-full overflow-hidden rounded-[26px] border bg-white p-8" style={{ borderColor: SOFT_LINE, boxShadow: "0 18px 50px rgba(15,15,20,0.05)" }}>
                <span aria-hidden="true" className="pointer-events-none absolute right-7 top-6 select-none text-[4.5rem] font-black leading-none" style={{ color: "rgba(10,102,194,0.1)", letterSpacing: "-0.06em" }}>01</span>
                <span className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`, boxShadow: "0 14px 30px rgba(10,102,194,0.28)" }}>
                  <DoorOpen className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="relative text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: BLUE }}>Reputation</p>
                <h3 className="relative mt-1 text-2xl font-black" style={{ color: INK, letterSpacing: "-0.03em" }}>Opens the door</h3>
                <p className="relative mt-2 text-base leading-relaxed" style={{ color: BODY }}>Credibility fuels conversion. Buyers pay more to the people they see as experts.</p>
              </div>
            </FadeIn>
            <div className="hidden items-center justify-center md:flex" aria-hidden="true">
              <span className="relative grid h-14 w-14 place-items-center rounded-full text-white" style={{ background: INK }}>
                <span className="li-ping absolute inset-0 rounded-full" style={{ backgroundColor: BLUE }} />
                <ArrowRight className="relative h-6 w-6" strokeWidth={2.4} />
              </span>
            </div>
            <FadeIn delay={120} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[26px] border bg-white p-8" style={{ borderColor: SOFT_LINE, boxShadow: "0 18px 50px rgba(15,15,20,0.05)" }}>
                <span aria-hidden="true" className="pointer-events-none absolute right-7 top-6 select-none text-[4.5rem] font-black leading-none" style={{ color: "rgba(245,183,49,0.2)", letterSpacing: "-0.06em" }}>02</span>
                <span className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `linear-gradient(135deg, ${GOLD}, #f59e0b)`, color: INK, boxShadow: "0 14px 30px rgba(245,183,49,0.35)" }}>
                  <KeyRound className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="relative text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: "#B7791F" }}>Pipeline</p>
                <h3 className="relative mt-1 text-2xl font-black" style={{ color: INK, letterSpacing: "-0.03em" }}>Takes you inside</h3>
                <p className="relative mt-2 text-base leading-relaxed" style={{ color: BODY }}>Outreach that starts real conversations and fills your calendar with qualified meetings.</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="mt-12 text-center text-xl font-black sm:text-2xl" style={{ color: INK, letterSpacing: "-0.02em" }}>
              We don&apos;t just make you look credible. <span className="italic" style={{ color: BLUE }}>We make your calendar busier.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y px-4 py-24" style={{ backgroundColor: "#ffffff", borderColor: SOFT_LINE }}>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <Eyebrow>Why Myntmore</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Others stop at the profile. <span className="italic" style={{ color: BLUE }}>We build the pipeline.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="overflow-hidden rounded-[28px] border" style={{ borderColor: SOFT_LINE, boxShadow: "0 24px 70px rgba(15,15,20,0.06)" }}>
              <div className="grid grid-cols-[1fr_84px_84px] items-center sm:grid-cols-[1fr_150px_150px]" style={{ backgroundColor: "#FAF8F4" }}>
                <p className="px-4 py-4 text-[11px] font-black uppercase tracking-[0.22em] sm:px-6" style={{ color: MUTED }}>What you get</p>
                <div className="flex justify-center py-3" style={{ backgroundColor: "rgba(10,102,194,0.08)" }}>
                  <span className="rounded-full px-3 py-1 text-xs font-black text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }}>Myntmore</span>
                </div>
                <p className="px-1 py-4 text-center text-[11px] font-black uppercase leading-tight tracking-[0.12em]" style={{ color: MUTED }}>Other agencies</p>
              </div>
              {COMPARE.map((row, i) => (
                <div key={row.label}>
                  {(i === 0 || i === 3) && (
                    <div className="border-t px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] sm:px-6" style={{ backgroundColor: i === 0 ? "#fff" : BLUE_PALE, borderColor: SOFT_LINE, color: i === 0 ? MUTED : BLUE }}>
                      {i === 0 ? "The basics" : "What most agencies skip"}
                    </div>
                  )}
                  <FadeIn delay={(i % 8) * 40}>
                    <div className="grid grid-cols-[1fr_84px_84px] items-center border-t sm:grid-cols-[1fr_150px_150px]" style={{ borderColor: SOFT_LINE }}>
                      <p className="px-4 py-4 text-sm font-bold sm:px-6" style={{ color: INK }}>{row.label}</p>
                      <div className="flex justify-center self-stretch py-4" style={{ backgroundColor: "rgba(10,102,194,0.05)" }}>
                        <Tick />
                      </div>
                      <div className="flex justify-center py-4">{row.others ? <Tick muted /> : <Cross />}</div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI agents */}
      <section id="agents" className="scroll-mt-20 px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <Eyebrow>Powered by AI agents</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Your 24/7 <span className="italic" style={{ color: BLUE }}>outbound team.</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: BODY }}>These aren&apos;t tools. They&apos;re a silent growth team that analyses, identifies and acts with precision.</p>
            </div>
          </FadeIn>
          <AgentExplorer />
          <FadeIn>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border bg-white px-6 py-5 sm:flex-row sm:items-center" style={{ borderColor: SOFT_LINE }}>
              <p className="max-w-xl text-sm font-semibold leading-relaxed" style={{ color: BODY }}>
                The result: faster execution, razor-sharp accuracy, and positioning that feels personal but performs like a machine.
              </p>
              <Link href="/myntmore-framework" className="inline-flex shrink-0 items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4 transition-colors hover:text-[#0A66C2]" style={{ color: INK, textDecorationColor: GOLD }}>
                See the agents in action <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y px-4 py-24" style={{ backgroundColor: "#ffffff", borderColor: SOFT_LINE }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Your whole growth team, <span className="italic" style={{ color: BLUE }}>included.</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: BODY }}>Everything runs for you, from the first profile tweak to the monthly report.</p>
            </div>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.label} delay={(i % 4) * 70} className="h-full">
                  <div className="group flex h-full min-h-[176px] flex-col justify-between rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]" style={{ borderColor: SOFT_LINE, backgroundColor: "#FBFCFE" }}>
                    <span className="grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: BLUE_PALE, color: BLUE }}>
                      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <div className="mt-6">
                      <p className="text-base font-black leading-snug" style={{ color: INK, letterSpacing: "-0.01em" }}>{item.label}</p>
                      <p className="mt-1.5 text-sm leading-snug" style={{ color: BODY }}>{item.text}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we run it */}
      <section className="px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-14 max-w-2xl">
              <Eyebrow>How we run it</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Four moves. <span className="italic" style={{ color: BLUE }}>One engine.</span>
              </h2>
            </div>
          </FadeIn>
          <InView className="relative">
            <div aria-hidden="true" className="li-tl-line absolute left-[12.5%] right-[12.5%] top-[27px] hidden h-[3px] rounded-full md:block" style={{ background: `linear-gradient(90deg, ${BLUE}, ${GOLD})` }} />
            <ol className="grid gap-6 md:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.n} className="relative flex flex-col items-center text-center">
                  <span className="li-tl-badge relative z-10 grid h-14 w-14 place-items-center rounded-full text-base font-black" style={{ "--i": i } as CSSProperties}>
                    {s.n}
                  </span>
                  <div className="mt-5 h-full w-full rounded-[22px] border bg-white p-6" style={{ borderColor: SOFT_LINE, boxShadow: "0 18px 50px rgba(15,15,20,0.05)" }}>
                    <h3 className="text-lg font-black" style={{ color: INK, letterSpacing: "-0.02em" }}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: BODY }}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </InView>
          <FadeIn>
            <p className="mt-10 text-center text-sm font-semibold" style={{ color: BODY }}>
              Want the playbook behind it?{" "}
              <Link href="/resources/guides/58-meetings-600-linkedin-connections" className="font-black underline decoration-2 underline-offset-4 transition-colors hover:text-[#0A66C2]" style={{ color: INK, textDecorationColor: GOLD }}>
                Read the free 5-step framework behind 58 meetings from 600 connections
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Before we start */}
      <section className="relative overflow-hidden px-4 py-24" style={{ background: "linear-gradient(135deg,#07121c 0%,#0b2335 100%)" }}>
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(55,143,233,0.3), transparent 70%)", filter: "blur(50px)" }} />
        <div aria-hidden="true" className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,183,49,0.16), transparent 70%)", filter: "blur(50px)" }} />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn>
            <Eyebrow light>Before we start</Eyebrow>
            <h2 className="max-w-xl text-4xl font-black text-white sm:text-5xl" style={h2Style}>
              A few things <span className="italic" style={{ color: GOLD }}>to know.</span>
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {NOTES.map((n) => {
                const Icon = n.icon;
                return (
                  <div key={n.title} className="p-8" style={{ backgroundColor: "#0b1a27" }}>
                    <span className="mb-6 grid h-12 w-12 place-items-center rounded-full border" style={{ borderColor: "rgba(245,183,49,0.4)", color: GOLD }}>
                      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-black text-white" style={{ letterSpacing: "-0.02em" }}>{n.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#b9c8d6" }}>{n.text}</p>
                  </div>
                );
              })}
              <InView className="flex flex-col justify-between p-8" style={{ background: `linear-gradient(135deg, ${GOLD}, #f59e0b)` }}>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: "rgba(15,15,20,0.65)" }}>Your part</p>
                  <p className="mt-3 text-6xl font-black" style={{ color: INK, letterSpacing: "-0.05em" }}>
                    <StatTicker value="90" />
                    <span className="ml-2 text-2xl tracking-normal">min</span>
                  </p>
                  <p className="mt-1 text-sm font-bold" style={{ color: INK }}>of your time in a month. That&apos;s all we need.</p>
                </div>
                <div className="mt-7">
                  <div className="h-3 overflow-hidden rounded-full" style={{ backgroundColor: "rgba(15,15,20,0.16)" }}>
                    <div className="li-bar-fill h-3 w-[9%] rounded-full" style={{ backgroundColor: INK }} />
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4 text-[11px] font-black leading-tight" style={{ color: INK }}>
                    <span>You</span>
                    <span className="text-right">Us: research, content, outreach, replies and reporting</span>
                  </div>
                </div>
              </InView>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 pt-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border bg-white p-8 sm:p-10 md:flex-row md:items-center" style={{ borderColor: SOFT_LINE, boxShadow: "0 24px 70px rgba(15,15,20,0.06)" }}>
              <div className="max-w-xl">
                <Eyebrow>See the proof</Eyebrow>
                <h2 className="text-3xl font-black sm:text-4xl" style={{ color: INK, ...h2Style }}>Want to see the results before you decide?</h2>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  Due to NDAs and confidentiality agreements, we can&apos;t reveal client names or show their LinkedIn accounts. All results and data in our case studies are real and come from clients across the industries we&apos;ve worked with.
                </p>
              </div>
              <Link href="/case-studies" className="btn-dark inline-flex shrink-0 items-center gap-2 px-7 py-3.5 text-sm font-bold">
                See case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mt-24">
        <Faq badge="FAQ" title="Questions, answered" items={FAQS} />
      </div>

      {/* Outcomes, founder + CTA */}
      <section className="px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>What changes</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Let us run your <span className="italic" style={{ color: BLUE }}>growth engine.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o, i) => {
              const Icon = o.icon;
              return (
                <FadeIn key={o.title} delay={(i % 3) * 90} className="h-full">
                  <div className="h-full rounded-[24px] border bg-white p-7 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: SOFT_LINE, boxShadow: "0 18px 50px rgba(15,15,20,0.05)" }}>
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`, boxShadow: "0 12px 26px rgba(10,102,194,0.26)" }}>
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-black" style={{ color: INK, letterSpacing: "-0.02em" }}>{o.title}</h3>
                    <p className="mt-1.5 text-base leading-snug" style={{ color: BODY }}>{o.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mx-auto mt-20 max-w-5xl space-y-10">
            <FadeIn>
              <div className="grid items-center gap-6 rounded-[28px] border bg-white p-6 sm:p-8 md:grid-cols-[auto_1fr]" style={{ borderColor: SOFT_LINE, boxShadow: "0 24px 70px rgba(15,15,20,0.06)" }}>
                <Image src="/tejas.png" alt="Tejas Jhaveri, Founder of Myntmore" width={128} height={128} className="h-28 w-28 rounded-3xl object-cover sm:h-32 sm:w-32" />
                <div>
                  <Eyebrow>Meet the founder</Eyebrow>
                  <h3 className="text-2xl font-black" style={{ color: INK, letterSpacing: "-0.03em" }}>
                    <a href="https://linkedin.com/in/tejasjhaveri" target="_blank" rel="noopener noreferrer" className="hover:underline">Tejas Jhaveri</a>
                  </h3>
                  <p className="text-sm font-medium" style={{ color: "#6b655e" }}>Founder, Myntmore</p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: BODY }}>
                    Tejas has built outbound engines for founders, CXOs and B2B teams, combining AI agents, competitive intelligence, personalisation and multi-channel outreach to generate qualified pipeline.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {FOUNDER_STATS.map((s) => (
                      <span key={s} className="rounded-full border px-3.5 py-1.5 text-xs font-bold" style={{ borderColor: SOFT_LINE, backgroundColor: "#FBFCFE", color: INK }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative overflow-hidden rounded-[32px] border p-10 text-center sm:p-14" style={{ background: "linear-gradient(135deg,#07121c 0%,#0e2a40 100%)", borderColor: "#173a55" }}>
                <div aria-hidden="true" className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,183,49,0.28), transparent 70%)", filter: "blur(40px)" }} />
                <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(55,143,233,0.34), transparent 70%)", filter: "blur(40px)" }} />
                <div className="relative">
                  <Eyebrow light>Try before you commit</Eyebrow>
                  <h2 className="mx-auto max-w-2xl text-4xl font-black text-white sm:text-5xl" style={h2Style}>
                    Ready to turn LinkedIn into <span className="italic" style={{ color: GOLD }}>booked meetings?</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-md text-base" style={{ color: "#b9c8d6" }}>Book a call, or send us your details and we&apos;ll take it from here.</p>
                  <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href={CALENDAR} className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5" style={{ backgroundColor: GOLD, color: INK }}>
                      Book a free strategy call <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link href="/contact-us" className="rounded-full border px-8 py-4 text-sm font-bold transition-colors hover:bg-white/10" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                      Send us your details
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
