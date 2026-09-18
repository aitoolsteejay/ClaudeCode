import type { Metadata } from "next";
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
const TITLE = "The Do's and Don'ts of Outreach";
const DESCRIPTION = "Why most outreach gets deleted without being read, how pattern interruption actually works, what to send on LinkedIn vs. cold email, what data enrichment is, and the free tools to build better outreach.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "dos and donts of cold outreach",
    "pattern interruption cold email",
    "what to send on linkedin outreach",
    "cold email vs linkedin messaging",
    "what is data enrichment b2b",
    "b2b enrichment tools",
    "cold outreach best practices",
    "outbound message examples that work",
  ],
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: "2026-09-18T12:00:00+05:30",
  dateModified: "2026-09-18T12:00:00+05:30",
});

const AI_RESOURCES = [PAGE_URL, `${SITE_URL}/services/linkedin-outreach`, `${SITE_URL}/services/cold-email`];

const INTERRUPTS = [
  { title: "Send a relevant meme", body: "Signals you're a person, not a sequence, and it's the fastest way to get a smile before you've asked for anything. This depends entirely on who's on the other side: if their culture is playful it lands well, if it isn't, it can miss completely, so read the room first." },
  { title: "Drop a 20-second voice note", body: "Nobody expects a voice from a stranger, and hearing an actual tone of voice builds trust that text never quite manages." },
  { title: "Send a screenshot of something you noticed", body: "Proves you looked, actually looked, instead of blasting the same message down a list of five hundred names." },
  { title: "Ask one question instead of another pitch", body: "A real question invites a real answer, while a pitch just invites a scroll." },
  { title: "Give a useful resource before asking for their time", body: "No strings, no follow-up demand, just something worth having whether they ever reply or not." },
  { title: "Share a handwritten note", body: "In a world of typed everything, a few lines in actual handwriting feels almost personal in a way no email template ever could." },
];

const CHANNEL_TIPS = [
  {
    channel: "LinkedIn",
    accent: "#0077b5",
    dos: [
      "Warm the prospect up first, a like or a genuine comment before the connection request",
      "Send blank connection requests, a note this early often reads as a pitch",
      "Reference their actual profile, a recent post, role change, or company news",
      "Run it as a sequence over days, not a single message and done",
    ],
    donts: [
      "Open with 'I came across your profile and was impressed'",
      "Attach a pitch deck or calendar link to the first message",
      "Send the identical note to everyone on a list",
    ],
  },
  {
    channel: "Cold Email",
    accent: "#D97706",
    dos: [
      "Write a subject line that reads like a real email, not a broadcast",
      "Keep the first email short enough to read on a phone in five seconds",
      "Lead with one specific observation, then one specific question",
      "Make every follow-up add something new, not just 'bumping this up'",
    ],
    donts: [
      "Open with 'Hope this email finds you well'",
      "List every feature your product has in the first message",
      "Follow up more than two or three times with nothing new to say",
    ],
  },
];

const ENRICHMENT_TOOLS = [
  { name: "Apollo.io", body: "An all-in-one prospecting database with contact details and enrichment built in, useful when you want lists and enrichment from a single place." },
  { name: "Clay", body: "A workflow tool that pulls from multiple data sources at once and lets you build custom enrichment logic per lead, useful for more advanced, waterfall-style enrichment." },
  { name: "Clearbit", body: "Company-level enrichment, firmographics like headcount, funding, and tech stack, appended to a lead record via API." },
  { name: "Hunter.io", body: "Finds and verifies email addresses for a given name and domain, useful specifically for the 'do I have the right email' problem." },
  { name: "ZoomInfo / Lusha", body: "Larger, paid contact and firmographic databases, typically used by teams that need scale and are willing to pay for it." },
];

const TOOLS = [
  {
    href: "/tools/icp-builder",
    name: "ICP & Value Proposition Generator",
    accent: "#7C3AED",
    plain: "Tell it what your business does, and it hands you back a clear description of who to sell to and what to say to them, instead of you guessing.",
    useCase: "Use it before you write a single outreach message: get your ICP and value proposition sorted first, so every message afterward is aimed at someone real.",
  },
  {
    href: "/tools/dm-angle-generator",
    name: "DM Angle Generator",
    accent: "#0077b5",
    plain: "You type in your offer, and it gives you 5 different ways to open a message, so you're not stuck staring at a blank box trying to sound clever.",
    useCase: "Use it whenever your reply rate has gone quiet and you suspect your opening line is the problem, not your offer.",
  },
  {
    href: "/tools/roi-calculator",
    name: "ROI Calculator",
    accent: "#16A34A",
    plain: "Plug in your numbers, how many messages you send, how many reply, how much a deal is worth, and it shows you what your outreach is actually worth in rupees or dollars.",
    useCase: "Use it before you commit budget or time to outreach, so you know what a realistic return actually looks like, not a guess.",
  },
  {
    href: "/tools/lead-magnet-ideas",
    name: "Lead Magnet Idea Generator",
    accent: "#D97706",
    plain: "It turns your business and your ideal customer into a list of concrete, specific things you could offer for free, that people would actually want.",
    useCase: "Use it when you want to try the 'give something before asking for anything' approach but can't think of what to give.",
  },
];

const DONTS = [
  "Long messages that take more than 10 seconds to read",
  "Salesy language, 'game-changing', 'revolutionary', 'synergy'",
  "Copy that obviously sounds AI-written",
  "Text-only messages, every single time, forever",
  "Generic openers like 'Hope this finds you well'",
  "More than one ask in a single message",
  "Following up repeatedly with nothing new to say",
];

const DOS = [
  "Crisp, short enough to read at a glance",
  "No beating around the bush, say the point in line one",
  "Voice notes, when it fits the relationship",
  "Videos, a face is harder to ignore than text",
  "Loom videos, especially for anything that needs a quick walkthrough",
  "Reference something specific and real about them",
  "One clear, low-friction next step",
  "Give something before you ask for something",
];

export default function DosAndDontsOfOutreachPage() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "Do's and Don'ts of Outreach", href: "/dos-and-donts-of-outreach" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7C3AED" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#7C3AED" }}>Guide &middot; 9 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The Do&apos;s and Don&apos;ts of Outreach
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "#52525B" }}>
            Every prospect&apos;s inbox has already trained them to skim past your message before they&apos;ve read a word of it. This is what actually gets a message read, on LinkedIn, on email, and everywhere in between.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="prose-custom space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>The Two Seconds of Silence</h2>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                  I was DJing a set last year and dropped a song completely out of genre, just to see what would happen. The floor went quiet for two seconds, then louder than before. That&apos;s the whole trick. Not better, just unexpected.
                </p>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                  I&apos;ve been thinking about that moment a lot lately, because it&apos;s basically the entire problem with outbound right now.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>Ten Other People Sent This Exact Line Today</h3>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                  Open any inbox and you already know what&apos;s coming. &ldquo;Thanks for connecting.&rdquo; &ldquo;Just following up.&rdquo; &ldquo;Would love to show you.&rdquo; Every prospect has read these lines so many times they don&apos;t even register as words anymore, they register as noise, and noise gets deleted without guilt. It&apos;s the same thing as playing the expected next song: technically correct, completely forgettable.
                </p>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                  So sometimes the smartest move isn&apos;t a better version of the message everyone else is sending. It&apos;s a different kind of message entirely.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Interrupt tactics */}
          <FadeIn>
            <div className="mt-10 space-y-4">
              {INTERRUPTS.map((item, i) => (
                <div key={item.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5" style={{ backgroundColor: "rgba(124,58,237,0.1)", color: "#7C3AED" }}>{i + 1}</span>
                    <div>
                      <h4 className="text-base font-black mb-1.5" style={{ color: "#0a0a0a" }}>{item.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-base leading-relaxed mt-8" style={{ color: "#3D3D3D" }}>
              None of these is a hack. They just refuse to look like everything else sitting in that inbox.
            </p>
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
            <div className="mt-12 rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#0a0a0a", borderColor: "#2a2a3e" }}>
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

          <div className="prose-custom space-y-8 mt-12">
            <FadeIn>
              <div>
                <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>This Isn&apos;t a Hack, It&apos;s Just Physics</h3>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                  I used to think these moves were clever tricks, something you&apos;d find in a growth hacker&apos;s Notion doc. They&apos;re not. They work for one boring, reliable reason: they interrupt a pattern the brain has already learned to ignore.
                </p>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                  Think about that dance floor. Nobody was thinking about the music until the pattern broke. The two seconds of silence weren&apos;t a mistake, they were attention being earned in real time. Your prospect&apos;s inbox works exactly the same way. The moment something doesn&apos;t fit the shape they&apos;ve trained themselves to skim past, their brain pays attention for half a second longer. That half second is the whole game.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>The Day I Stopped Chasing Replies</h3>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                  For years I measured outbound purely on reply rate. Send the message, count the replies, optimise the line. What I missed is that earning attention and earning a reply are two different jobs, and I was only ever doing the second one.
                </p>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                  A prospect once told me she almost didn&apos;t reply to a screenshot I sent pointing out a typo on her own pricing page, until she realised nobody else had noticed it either. It didn&apos;t sell anything. It didn&apos;t even try. It just proved I&apos;d actually looked at her business instead of blasting a list. Once someone believes you&apos;ve paid attention, the sales conversation gets ten times easier, because you&apos;ve already answered the one question every prospect is silently asking: is this message about them, or about you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>Where This Lives in Our Sequences Today</h3>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                  At{" "}
                  <a href="https://zcu.ge/M0W" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: "#7C3AED" }}>Myntmore</a>{" "}
                  we now build a version of this into almost every sequence we run for clients, not as a gimmick step three, but as a deliberate break somewhere in the sequence where the message stops sounding like a sequence. Sometimes it&apos;s a founder recording a fifteen second video instead of email four. Sometimes it&apos;s a genuinely useful teardown sent with zero ask attached. The channel changes, the principle doesn&apos;t. Break the pattern before you try to earn the reply.
                </p>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3D3D3D" }}>
                  Not every message needs to be an interrupt. If every email is a meme, the meme becomes the new template and you&apos;re back where you started, and if every set is out of genre, there&apos;s no floor left to bring back. The interrupt works because it&apos;s rare, deliberate, and placed with intent.
                </p>
              </div>

              <p className={`${caveat.className} text-2xl leading-snug`} style={{ color: "#7C3AED" }}>
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
            <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>The pattern-interrupt principle is the same everywhere. What counts as an interrupt is different on each channel.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHANNEL_TIPS.map((c) => (
                <div key={c.channel} className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${c.accent},${c.accent}66)` }} />
                  <div className="p-6">
                    <h3 className="text-lg font-black mb-4" style={{ color: c.accent }}>{c.channel}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#16A34A" }}>Do</p>
                    <ul className="space-y-2 mb-5">
                      {c.dos.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#16A34A" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#DC2626" }}>Don&apos;t</p>
                    <ul className="space-y-2">
                      {c.donts.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#DC2626" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
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
            <p className="text-base leading-relaxed mb-4" style={{ color: "#3D3D3D" }}>
              A raw list of names and companies isn&apos;t enough to write the kind of message this guide is describing. <strong>Enrichment</strong> is the process of adding real, useful details to a lead, company size, funding, tech stack, recent hires, verified email, so the message you send can actually reference something specific instead of guessing.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#3D3D3D" }}>
              Without it, personalisation is just a merge field with someone&apos;s first name in it. With it, you can write the exact kind of &ldquo;I noticed something specific about you&rdquo; message that this whole guide is built around.
            </p>
            <div className="space-y-4">
              {ENRICHMENT_TOOLS.map((t) => (
                <div key={t.name} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-base font-black mb-1.5" style={{ color: "#0a0a0a" }}>{t.name}</h3>
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
            <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>No jargon, just what each one actually does and when to reach for it.</p>

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

      {/* Do's and don'ts recap */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black mb-8" style={{ color: "#0a0a0a" }}>The whole list, in one place</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border p-7" style={{ backgroundColor: "#F0FDF4", borderColor: "rgba(22,163,74,0.25)" }}>
                <h3 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: "#16A34A" }}>Do</h3>
                <ul className="space-y-3">
                  {DOS.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: "rgba(22,163,74,0.15)" }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "#14532D" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border p-7" style={{ backgroundColor: "#FEF2F2", borderColor: "rgba(220,38,38,0.2)" }}>
                <h3 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: "#DC2626" }}>Don&apos;t</h3>
                <ul className="space-y-3">
                  {DONTS.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: "rgba(220,38,38,0.12)" }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "#7F1D1D" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
