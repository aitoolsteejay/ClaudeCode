import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Eye,
  FlaskConical,
  Inbox,
  Layers,
  Mail,
  PenLine,
  Repeat,
  Send,
  Server,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  Handshake,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import InnerLayout from "@/app/components/InnerLayout";
import FadeIn from "@/app/components/FadeIn";
import Faq from "@/app/lp/Faq";
import Underline from "@/app/instagram-resources/how-to-set-up-vibe-prospecting/Underline";
import FlowVisual from "./FlowVisual";
import ProcessExplorer from "./ProcessExplorer";

// Private, unlisted overview of the done-for-you cold email package, for
// sharing directly with prospects. One design, two routes
// (/cold-emailing-package-mars and /cold-emailing-package-earth) that differ
// only in the retainer. Each route's page.tsx declares its own noindex
// metadata (the site audit reads it from there), so any new clone must too.

const ORANGE = "#EA580C";
const GOLD = "#F5B731";
const INK = "#0f0f14";
const CREAM = "#F8F6F2";
const CALENDLY = "https://calendly.com/founder-myntmore/30min";

const STATS = [
  { value: "1,200", label: "emails a day" },
  { value: "40", label: "inboxes on 10 domains" },
  { value: "5,000", label: "fresh prospects a month" },
  { value: "18", label: "days to launch" },
];

const TARGETS = ["90%+ email health", "1%+ reply rate", "20%+ positive replies"];

const PILLARS: { icon: LucideIcon; title: string; line: string }[] = [
  { icon: Inbox, title: "High deliverability", line: "Land in the inbox, not in spam." },
  { icon: Target, title: "Smart targeting", line: "A laser-sharp ICP list. The right people only." },
  { icon: PenLine, title: "Effective copy", line: "Soft-sell messages that start real conversations." },
];

const RESULTS: { icon: LucideIcon; label: string }[] = [
  { icon: MessagesSquare, label: "Real engagement" },
  { icon: Handshake, label: "More meetings" },
  { icon: TrendingUp, label: "Higher conversions" },
  { icon: FlaskConical, label: "Always optimising" },
];

const PACKAGE: { icon: LucideIcon; label: string }[] = [
  { icon: Server, label: "10 domains + 40 inboxes" },
  { icon: ShieldCheck, label: "DNS setup & IP rotation" },
  { icon: Mail, label: "1,200 emails a day" },
  { icon: Users, label: "5,000 prospects a month" },
  { icon: PenLine, label: "Copy & strategy" },
  { icon: Repeat, label: "3-4 follow-ups & nurturing" },
  { icon: FlaskConical, label: "A/B testing & optimisation" },
  { icon: BarChart3, label: "Real-time reporting" },
  { icon: Layers, label: "Complete backend setup" },
  { icon: Send, label: "Sending tool included" },
];

const WHY: { icon: LucideIcon; title: string; line: string }[] = [
  { icon: Inbox, title: "Inbox-first", line: "No spam. No bounces." },
  { icon: Target, title: "Hyper-targeted", line: "Every prospect handpicked." },
  { icon: BadgeCheck, title: "Proven", line: "Thousands of meetings booked." },
  { icon: Eye, title: "Transparent", line: "Full campaign visibility." },
];

const FOUNDER_STATS = ["4x entrepreneur", "Flintstop: $6M a year", "120+ B2B companies", "12K+ meetings booked", "$120M+ pipeline", "TEDx speaker"];

const FAQS = [
  { q: "How does this work?", a: "We define your audience, craft the messaging and set up automated campaigns, then handle optimisation, nurturing and booking meetings." },
  { q: "How do we measure success?", a: "Deliverability, reply rates, meetings booked and conversions, with real-time tracking and reports." },
  { q: "What's the timeline?", a: "Campaigns go live within 18 days of onboarding, including domain setup, inbox warm-up, the lead list and the copy." },
  { q: "Who sees the best results?", a: "B2B businesses, service providers, SaaS companies, agencies and consultants." },
  { q: "How many leads can I expect?", a: "Clients typically see 1-3% reply rates, with steady meetings from Week 2. Some campaigns convert at 4x the industry average." },
];

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: light ? GOLD : ORANGE }}>
      {children}
    </p>
  );
}

const h2Style = { letterSpacing: "-0.035em", lineHeight: 1.04 } as const;

export type ColdEmailingPackageProps = {
  /** Headline retainer, currency code first: "USD 1,600", "INR 1,54,999". */
  price: string;
  /** Line under the price: "per month", "+ GST / month". */
  priceNote: string;
};

export default function ColdEmailingPackage({ price, priceNote }: ColdEmailingPackageProps) {
  // The longer rupee figure ("INR 1,54,999") would wrap inside the card at the
  // size the shorter dollar one ("USD 1,600") uses, so step it down a little.
  const priceFontSize = price.length > 10 ? "clamp(2.4rem, 5.6vw, 3.8rem)" : "clamp(3.2rem, 7vw, 4.8rem)";
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-28 pt-32 sm:pb-32" style={{ backgroundColor: CREAM }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-160px", left: "-180px", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle,rgba(234,88,12,0.18),rgba(234,88,12,0.06) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-180px", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle,rgba(167,139,250,0.2),rgba(245,183,49,0.07) 45%,transparent 70%)", filter: "blur(55px)" }} />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="hero-fade mb-7 inline-flex items-center gap-2.5 rounded-full border bg-white/70 px-5 py-2 backdrop-blur" style={{ borderColor: "rgba(234,88,12,0.35)" }}>
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: ORANGE }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: INK }}>Cold emailing · Done for you</span>
            </div>
            <h1 className="hero-fade-d1 font-black" style={{ color: INK, fontSize: "clamp(2.9rem, 7.4vw, 5.2rem)", lineHeight: 0.96, letterSpacing: "-0.045em" }}>
              Cold email,
              <br />
              <span className="relative inline-block whitespace-nowrap italic" style={{ color: "#23232b" }}>
                done for you<span style={{ color: GOLD }}>.</span>
                <Underline color={GOLD} />
              </span>
            </h1>
            <p className="hero-fade-d2 mt-7 max-w-md text-lg font-medium sm:text-xl" style={{ color: "#3b3b45", lineHeight: 1.35 }}>
              Targeting, deliverability, copy and optimisation, run end to end to book you calls.
            </p>
            <div className="hero-fade-d2 mt-9 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-dark inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold">
                Book a consultation call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors hover:border-[#EA580C]" style={{ borderColor: "#E8E2D9", color: INK }}>
                See how it works
              </a>
            </div>
          </div>
          <FlowVisual />
        </div>
      </section>

      {/* Numbers */}
      <section className="relative z-20 -mt-14 px-4 sm:-mt-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border md:grid-cols-4" style={{ borderColor: "#EDE7DD", backgroundColor: "#F0EADF", boxShadow: "0 30px 80px rgba(15,15,20,0.09)" }}>
              {STATS.map((s) => (
                <div key={s.label} className="bg-white px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-5xl font-black tabular-nums md:text-[2.6rem] lg:text-6xl" style={{ color: INK, letterSpacing: "-0.045em" }}>{s.value}</p>
                  <p className="mt-1 text-sm font-semibold" style={{ color: "#6b655e" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <span className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: "#8C8279" }}>Our targets</span>
              {TARGETS.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-bold" style={{ borderColor: "#EDE7DD", color: INK }}>
                  <BadgeCheck className="h-4 w-4" style={{ color: ORANGE }} aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>Why it works</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Three pillars. <span className="italic" style={{ color: ORANGE }}>One system.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 90} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-[26px] border bg-white p-8 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: "#EDE7DD", boxShadow: "0 18px 50px rgba(15,15,20,0.05)" }}>
                    <span aria-hidden="true" className="pointer-events-none absolute right-7 top-6 select-none text-[4.5rem] font-black leading-none" style={{ color: "rgba(234,88,12,0.11)", letterSpacing: "-0.06em" }}>
                      {`0${i + 1}`}
                    </span>
                    <span className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${ORANGE}, ${GOLD})`, boxShadow: "0 14px 30px rgba(234,88,12,0.28)" }}>
                      <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="relative text-xl font-black" style={{ color: INK, letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <p className="relative mt-2 text-base leading-relaxed" style={{ color: "#52525B" }}>{p.line}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {RESULTS.map((r) => {
                const Icon = r.icon;
                return (
                  <span key={r.label} className="inline-flex items-center gap-2.5 rounded-full border bg-white px-5 py-3 text-sm font-bold" style={{ borderColor: "#EDE7DD", color: INK }}>
                    <Icon className="h-4 w-4" style={{ color: ORANGE }} strokeWidth={2.4} aria-hidden="true" />
                    {r.label}
                  </span>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Package */}
      <section className="border-y px-4 py-24" style={{ backgroundColor: "#ffffff", borderColor: "#EDE7DD" }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>The package</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Fully <span className="italic" style={{ color: ORANGE }}>done for you.</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: "#52525B" }}>A hands-off system that runs end to end.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {PACKAGE.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.label} delay={(i % 5) * 60} className="h-full">
                  <div className="flex h-full min-h-[148px] flex-col justify-between rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#EA580C]" style={{ borderColor: "#EDE7DD", backgroundColor: "#FCFBF8" }}>
                    <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ backgroundColor: "rgba(234,88,12,0.1)", color: ORANGE }}>
                      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-sm font-black leading-snug" style={{ color: INK }}>{item.label}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <div className="mt-6 grid overflow-hidden rounded-[30px] border md:grid-cols-[0.9fr_1.1fr]" style={{ borderColor: "#EDE7DD", boxShadow: "0 30px 80px rgba(15,15,20,0.08)" }}>
              <div className="relative overflow-hidden p-8 sm:p-10" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#241a14 100%)" }}>
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,183,49,0.35), transparent 70%)", filter: "blur(30px)" }} />
                <p className="relative text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: GOLD }}>Monthly retainer</p>
                <p className="relative mt-4 font-black text-white" style={{ fontSize: priceFontSize, lineHeight: 1, letterSpacing: "-0.045em" }}>{price}</p>
                <p className="relative mt-2 text-sm font-semibold" style={{ color: "#c9bfb8" }}>{priceNote}</p>
              </div>
              <div className="space-y-5 bg-white p-8 sm:p-10">
                {[
                  { icon: Server, label: "You provide", value: "Domains & inbox accounts" },
                  { icon: Zap, label: "We cover", value: "All sending & lead-sourcing software" },
                  { icon: Wrench, label: "We handle", value: "Setup, sourcing, copy, optimisation, reporting" },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: "rgba(234,88,12,0.1)", color: ORANGE }}>
                        <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: "#8C8279" }}>{row.label}</p>
                        <p className="text-base font-bold" style={{ color: INK }}>{row.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <Eyebrow>The process</Eyebrow>
              <h2 className="text-4xl font-black sm:text-5xl" style={{ color: INK, ...h2Style }}>
                Ten steps. <span className="italic" style={{ color: ORANGE }}>One system.</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: "#52525B" }}>Tap a step to see what happens.</p>
            </div>
          </FadeIn>
          <ProcessExplorer />
        </div>
      </section>

      {/* Why Myntmore */}
      <section className="relative overflow-hidden px-4 py-24" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1d1612 100%)" }}>
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(234,88,12,0.28), transparent 70%)", filter: "blur(50px)" }} />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn>
            <Eyebrow light>Why Myntmore</Eyebrow>
            <h2 className="max-w-xl text-4xl font-black text-white sm:text-5xl" style={h2Style}>
              Built for the <span className="italic" style={{ color: GOLD }}>inbox.</span>
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {WHY.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="p-8" style={{ backgroundColor: "#15110e" }}>
                    <span className="mb-6 grid h-12 w-12 place-items-center rounded-full border" style={{ borderColor: "rgba(245,183,49,0.4)", color: GOLD }}>
                      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-black text-white" style={{ letterSpacing: "-0.02em" }}>{w.title}</h3>
                    <p className="mt-1.5 text-sm" style={{ color: "#c9bfb8" }}>{w.line}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <Faq badge="FAQ" title="Questions, answered" items={FAQS} />

      {/* Founder + CTA */}
      <section className="px-4 py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-5xl space-y-10">
          <FadeIn>
            <div className="grid items-center gap-6 rounded-[28px] border bg-white p-6 sm:p-8 md:grid-cols-[auto_1fr]" style={{ borderColor: "#EDE7DD", boxShadow: "0 24px 70px rgba(15,15,20,0.06)" }}>
              <Image src="/tejas.png" alt="Tejas Jhaveri, Founder of Myntmore" width={128} height={128} className="h-28 w-28 rounded-3xl object-cover sm:h-32 sm:w-32" />
              <div>
                <Eyebrow>Meet the founder</Eyebrow>
                <h3 className="text-2xl font-black" style={{ color: INK, letterSpacing: "-0.03em" }}>
                  <a href="https://linkedin.com/in/tejasjhaveri" target="_blank" rel="noopener noreferrer" className="hover:underline">Tejas Jhaveri</a>
                </h3>
                <p className="text-sm font-medium" style={{ color: "#6b655e" }}>Founder, Myntmore</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {FOUNDER_STATS.map((s) => (
                    <span key={s} className="rounded-full border px-3.5 py-1.5 text-xs font-bold" style={{ borderColor: "#EDE7DD", backgroundColor: "#FCFBF8", color: INK }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative overflow-hidden rounded-[32px] border p-10 text-center sm:p-14" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#241a14 100%)", borderColor: "#3a2a1f" }}>
              <div aria-hidden="true" className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,183,49,0.3), transparent 70%)", filter: "blur(40px)" }} />
              <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.28), transparent 70%)", filter: "blur(40px)" }} />
              <div className="relative">
                <Eyebrow light>You&apos;re in the right place</Eyebrow>
                <h2 className="mx-auto max-w-2xl text-4xl font-black text-white sm:text-5xl" style={h2Style}>
                  Let&apos;s turn cold emails into <span className="italic" style={{ color: GOLD }}>booked calls.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-md text-base" style={{ color: "#c9bfb8" }}>You&apos;ve got the business. We&apos;ve got the system.</p>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5" style={{ backgroundColor: GOLD, color: INK }}>
                    Book a consultation call <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link href="/services/cold-email" className="rounded-full border px-8 py-4 text-sm font-bold transition-colors hover:bg-white/10" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                    Explore cold email services
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
