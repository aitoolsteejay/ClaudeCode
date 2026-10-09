import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";
import Faq from "../lp/Faq";
import Underline from "../instagram-resources/how-to-set-up-vibe-prospecting/Underline";

// Private, unlisted overview of the done-for-you cold email package, for
// sharing directly with prospects. Deliberately not linked from any nav,
// footer or sitemap, and kept out of search indexing via robots below.
export const metadata: Metadata = {
  title: "Cold Emailing",
  description: "How Myntmore runs cold email for B2B teams: targeting, deliverability, copy and optimisation.",
  robots: { index: false, follow: false },
};

const ACCENT = "#EA580C";
const GOLD = "#F5B731";

const PILLARS = [
  { icon: "📥", title: "High Deliverability", body: "Say goodbye to spam filters and hello to inboxes. Your emails will land where they belong, right in front of your leads." },
  { icon: "🎯", title: "Smart Targeting", body: "We help you build a laser-targeted ICP (Ideal Customer Profile) list to ensure you're emailing the right people, not just anyone." },
  { icon: "📝", title: "Effective Copywriting", body: "A soft-sell approach that speaks to your leads' needs and creates real conversations. No pushy sales pitch here." },
];

const RESULTS = [
  { icon: "💬", title: "Real Engagement", body: "We don't just send emails; we create personalized, compelling content that sparks responses with your target audience." },
  { icon: "🤝", title: "More Meetings", body: "Every cold email is optimized for one thing: booking discovery calls that turn into lasting business relationships." },
  { icon: "📈", title: "Increased Conversions", body: "Our approach is designed to guide leads down the funnel and convert them into loyal clients." },
  { icon: "🔧", title: "Data-Driven Optimization", body: "We monitor, tweak, and optimize campaigns continuously to ensure peak performance." },
];

const INCLUDED = [
  { title: "1,200 emails/day (26,400/month)", note: "Scalable outreach without compromising deliverability." },
  { title: "10 domains + 40 email accounts", note: "Maximize reach and maintain a strong sender reputation." },
  { title: "Full DNS setup & IP rotation", note: "Ensures high deliverability and keeps emails out of spam." },
  { title: "Cold email copywriting & strategy", note: "Professionally written sequences designed to convert." },
  { title: "ICP-based lead list (5,000 prospects/month)", note: "Pre-vetted, high-intent leads." },
  { title: "3-4 situation-based follow-ups and active lead nurturing", note: "Keep conversations alive with strategic outreach." },
  { title: "A/B testing & ongoing campaign optimization", note: "Data-driven improvements for better results." },
  { title: "Advanced reporting & real-time tracking", note: "Full visibility into campaign performance." },
  { title: "Complete backend email infrastructure setup", note: "Everything handled for you, from start to scale." },
  { title: "Subscription to email sending tool", note: "Fully included." },
];

const METRICS = [
  { icon: "📩", label: "Emails Sent", value: "Up to 1,200/day", sub: "or 26,400/month" },
  { icon: "💌", label: "Reply Rate", value: "Aiming for 1%+", sub: "Above industry average" },
  { icon: "📬", label: "Email Health Score", value: "Maintained at 90%+", sub: "" },
  { icon: "📊", label: "Fresh Prospects Contacted", value: "5,000/month", sub: "" },
  { icon: "⏳", label: "Time to Launch", value: "18 days", sub: "from onboarding" },
  { icon: "❇️", label: "Positive Reply Rate", value: "Aiming for above 20%", sub: "" },
];

const WHY = [
  { title: "Inbox-First Approach", body: "No spam. No bounces. Just high-quality deliverability." },
  { title: "Hyper-Targeted Lists", body: "Every prospect is handpicked for your ideal audience." },
  { title: "Proven Success", body: "We have booked thousands of meetings and helped brands scale." },
  { title: "Transparent Tracking", body: "Get full visibility into your campaign performance." },
];

interface Step {
  title: string;
  icon: string;
  lead: string;
  points: { label: string; text: string }[];
  result: string;
}

const STEPS: Step[] = [
  {
    icon: "🔭",
    title: "Understand Your Business & ICP",
    lead: "At the heart of every successful cold email campaign is a laser-focused target audience. Before we send a single email, we need to understand who your perfect leads are.",
    points: [
      { label: "ICP Mapping", text: "We create a detailed Ideal Customer Profile (ICP) to help us pinpoint the most relevant leads." },
      { label: "Research", text: "We dive deep into understanding the nuances of your business and industry." },
    ],
    result: "No more wasted emails! Every email we send goes to someone who's already a great fit for your services.",
  },
  {
    icon: "🔍",
    title: "Build a Quality Lead List",
    lead: "The first rule of cold emailing: quality over quantity. After we've defined your ICP, we build your targeted lead list with prospects most likely to convert into quality leads.",
    points: [
      { label: "Smart Lead Generation Tools", text: "We use cold emailing tools and other intelligent features to pull the freshest leads possible." },
      { label: "Segmentation", text: "We group prospects into highly specific lists, allowing for personalized email outreach." },
    ],
    result: "Your emails aren't getting lost in inboxes; each one is reaching someone who has the potential to respond.",
  },
  {
    icon: "✍️",
    title: "Craft Compelling Email Copy",
    lead: "Crafting the perfect cold email is like writing a love letter, but for business. It has to be personal, relevant, and clear. We don't believe in generic, pushy sales messages.",
    points: [
      { label: "Engaging Subject Lines", text: "We create subject lines that grab attention." },
      { label: "Value-First Approach", text: "The email body offers something valuable, whether it's insights, solutions, or a personalized message." },
      { label: "CTA (Call to Action)", text: "We close with a clear CTA that encourages the recipient to take action, whether it's scheduling a call or replying to the email." },
    ],
    result: "Expect better open rates, engagement, and conversions.",
  },
  {
    icon: "📥",
    title: "Deliverability: Make Sure Your Emails Land in the Inbox",
    lead: "If your email doesn't land in the inbox, it's not even seen. We set up a robust email system to ensure that your emails avoid spam folders and consistently reach the inbox.",
    points: [
      { label: "DNS Setup", text: "We configure your domains and email accounts for high deliverability." },
      { label: "IP Rotation", text: "We rotate IPs to prevent blacklisting and ensure email health." },
      { label: "Monitoring", text: "We use tools to track the health of your email campaigns and fix any issues that may arise." },
    ],
    result: "Your emails get seen, and your message is delivered consistently.",
  },
  {
    icon: "🚀",
    title: "Launch the Campaign",
    lead: "Once everything is set, it's time to hit Send. Your emails are optimized and the lead list is ready, so we launch your campaign and begin tracking its performance.",
    points: [
      { label: "Monitor", text: "We closely monitor the campaign's progress, including deliverability, open rates, and initial responses." },
      { label: "Optimize", text: "We make adjustments based on what's working and what's not. If something isn't resonating, we refine it." },
    ],
    result: "Your cold email campaign starts working right away, and you start seeing leads and appointments come in.",
  },
  {
    icon: "🤝",
    title: "Active Lead Nurturing",
    lead: "Once we start getting responses, the real magic begins. Cold emails are just the beginning. To turn interested leads into meetings, we actively nurture the conversations.",
    points: [
      { label: "Follow-Ups", text: "We send follow-ups that feel personal and relevant, continuing the conversation." },
      { label: "Lead Scoring", text: "We prioritize the most promising leads and focus follow-up efforts where they'll have the greatest impact." },
    ],
    result: "More meetings, higher conversion rates, and long-term relationships.",
  },
  {
    icon: "🛠",
    title: "A/B Testing & Continuous Optimization",
    lead: "There's always room for improvement. With every campaign, we continuously A/B test different subject lines, email copy, and CTAs to identify the highest-performing strategies.",
    points: [
      { label: "A/B Testing", text: "We test various aspects of your cold emails to optimize for the best results." },
      { label: "Performance Metrics", text: "We track metrics like reply rates, meetings booked, and conversion rates to ensure that the campaign stays on track." },
    ],
    result: "Your cold email campaigns keep improving over time, delivering better results with each iteration.",
  },
  {
    icon: "📊",
    title: "Reporting & Analytics",
    lead: "What gets measured gets improved. Once the campaign is running, we keep you informed with real-time metrics and detailed performance reports.",
    points: [
      { label: "Campaign Performance", text: "Open rates, reply rates, and meetings booked." },
      { label: "Lead Engagement", text: "How your leads are interacting with the emails." },
      { label: "Campaign Insights", text: "Key takeaways for the future to improve results." },
    ],
    result: "You get full transparency into how the campaign is performing and how we're driving results.",
  },
  {
    icon: "📈",
    title: "Scaling & Expansion",
    lead: "Cold emailing isn't just for one-off campaigns. Once we find the winning formula, we scale up and keep nurturing leads to fill your sales pipeline on an ongoing basis.",
    points: [
      { label: "Email Volume Increase", text: "We scale up to 1,200 emails/day, ensuring more outreach." },
      { label: "New Markets & Verticals", text: "We help you tap into new markets and niches to expand your reach." },
    ],
    result: "Your cold email strategy grows with your business and continues to generate more leads and sales opportunities.",
  },
  {
    icon: "🎉",
    title: "Celebrate Success",
    lead: "Once the campaign is a hit, we celebrate. The results speak for themselves, but we also take the time to reflect on what worked so we can repeat it. It's all part of the continuous improvement cycle that fuels our cold email campaigns.",
    points: [],
    result: "You get more leads, more meetings, and more business opportunities.",
  },
];

const FAQS = [
  { q: "How does this work?", a: "We'll work with you to define your target audience, craft the right messaging, and set up automated campaigns. Once live, we'll handle optimization, nurturing, and booking meetings." },
  { q: "How do we measure success?", a: "We track key metrics like email deliverability, reply rates, meeting bookings, and conversions. You'll receive real-time tracking and reports so you always know what's working." },
  { q: "What's the timeline for getting started?", a: "Our campaigns go live within 18 days of onboarding. This includes setting up domains, warming up inboxes, building the lead list, and crafting optimized emails." },
  { q: "What kind of businesses see the best results?", a: "Our cold email strategy works best for B2B businesses, service providers, SaaS companies, agencies, and consultants looking to generate high-value leads and booked calls." },
  { q: "How many leads can I expect?", a: "While results vary, our clients typically see 1-3% reply rates with steady meetings booked from Week 2 onwards. Some campaigns convert at 4x the industry average." },
];

export default function ColdEmailingPackage() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-160px", left: "-180px", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle,rgba(234,88,12,0.18),rgba(234,88,12,0.06) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-180px", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,183,49,0.19),rgba(245,183,49,0.06) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(234,88,12,0.3)", backgroundColor: "rgba(234,88,12,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>Cold Emailing · Done For You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Wondering if cold emailing can{" "}
            <span className="relative inline-block">skyrocket your leads?<Underline color={GOLD} /></span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed hero-fade-d2" style={{ color: "#52525B" }}>
            Let&apos;s face it, sending cold emails isn&apos;t as simple as hitting Send. If you&apos;ve been struggling with low engagement or poor deliverability, you&apos;re in the right place. We turn your cold emailing game into a well-oiled machine that actually converts.
          </p>
        </div>
      </section>

      <article className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto space-y-20">
          <FadeIn>
            <section>
              <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>Why cold emailing is the secret sauce you need</h2>
              <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "#52525B" }}>
                Cold emailing is more than just a numbers game. When done right, it&apos;s a conversion powerhouse that fuels your pipeline, warms up leads, and generates quality meetings. At Myntmore, we&apos;ve cracked the code with a simple three-pillar approach:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PILLARS.map((p) => (
                  <div key={p.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                    <div className="text-2xl mb-3" aria-hidden="true">{p.icon}</div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>What we do and the results you&apos;ll see</h2>
              <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "#52525B" }}>When you partner with us, this is what you can expect from your cold email campaigns:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RESULTS.map((r) => (
                  <div key={r.title} className="rounded-2xl border p-6 flex gap-4" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                    <div className="text-2xl shrink-0" aria-hidden="true">{r.icon}</div>
                    <div>
                      <h3 className="text-base font-black mb-1" style={{ color: "#0a0a0a" }}>{r.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: ACCENT }}>Our cold email package</span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 mb-2" style={{ color: "#0a0a0a" }}>Fully Done-For-You pipeline building system</h2>
              <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "#52525B" }}>Ideal for businesses that want a complete, hands-off cold email system that runs seamlessly.</p>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9" }}>
                {INCLUDED.map((row, i) => (
                  <div key={row.title} className="flex items-start gap-4 px-5 py-4" style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#FCFBF8", borderBottom: i < INCLUDED.length - 1 ? "1px solid #E8E2D9" : "none" }}>
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#059669" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <p className="text-sm font-black" style={{ color: "#0a0a0a" }}>{row.title}</p>
                      <p className="text-sm" style={{ color: "#52525B" }}>{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.35)" }}>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#B45309" }}>Monthly retainer</p>
                <p className="text-3xl font-black mb-5" style={{ color: "#0a0a0a" }}>USD 1,600</p>
                <div className="grid sm:grid-cols-2 gap-5 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                  <p><strong style={{ color: "#0a0a0a" }}>What you purchase separately:</strong> The domains and associated email accounts.</p>
                  <p><strong style={{ color: "#0a0a0a" }}>What we cover:</strong> All email sending and lead sourcing software required to run the campaigns.</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>
                  <strong style={{ color: "#0a0a0a" }}>Everything else is handled by us</strong>, from infrastructure setup and lead sourcing to copywriting, execution, optimization, and reporting.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Key metrics we track</h2>
              <p className="text-base mb-8" style={{ color: "#52525B" }}>We measure what matters, so you always know what&apos;s working.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-2xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                    <div className="text-xl mb-2" aria-hidden="true">{m.icon}</div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8C8279" }}>{m.label}</p>
                    <p className="text-lg font-black leading-snug" style={{ color: "#0a0a0a" }}>{m.value}</p>
                    {m.sub && <p className="text-xs mt-0.5" style={{ color: "#52525B" }}>{m.sub}</p>}
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Why choose Myntmore?</h2>
              <p className="text-base mb-8" style={{ color: "#52525B" }}>We&apos;ve built high-performing cold email systems that drive real results.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY.map((w) => (
                  <div key={w.title} className="flex gap-3 rounded-2xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}><strong style={{ color: "#0a0a0a" }}>{w.title}.</strong> {w.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <section>
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>The process</h2>
              <p className="text-base mb-8" style={{ color: "#52525B" }}>Ten steps, from understanding your business to scaling what works.</p>
            </FadeIn>
            <ol className="space-y-5">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <FadeIn>
                    <div className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                      <div className="flex items-start gap-4">
                        <span className="w-10 h-10 rounded-full inline-flex items-center justify-center text-sm font-black shrink-0" style={{ backgroundColor: "rgba(234,88,12,0.1)", color: ACCENT, border: "1px solid rgba(234,88,12,0.25)" }}>{i + 1}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Step {i + 1}</p>
                          <h3 className="text-lg sm:text-xl font-black mb-3" style={{ color: "#0a0a0a" }}><span aria-hidden="true">{s.icon} </span>{s.title}</h3>
                          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#52525B" }}>{s.lead}</p>
                          {s.points.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {s.points.map((p) => (
                                <li key={p.label} className="text-sm leading-relaxed flex gap-2" style={{ color: "#52525B" }}>
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                                  <span><strong style={{ color: "#0a0a0a" }}>{p.label}:</strong> {p.text}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <p className="mt-4 text-sm leading-relaxed rounded-xl px-4 py-3" style={{ backgroundColor: "#FEF9EC", color: "#3D3D3D" }}>
                            <strong style={{ color: "#B45309" }}>Result:</strong> {s.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ol>
          </section>

          <FadeIn>
            <Faq badge="FAQ" title="Frequently asked questions" items={FAQS} />
          </FadeIn>

          <FadeIn>
            <section className="rounded-2xl border p-6 sm:p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <Image src="/tejas.png" alt="Tejas Jhaveri, Founder of Myntmore" width={128} height={128} className="rounded-2xl object-cover" />
              <div>
                <h2 className="text-xl font-black mb-2" style={{ color: "#0a0a0a" }}>About the founder</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                  <a href="https://linkedin.com/in/tejasjhaveri" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: "#0a0a0a" }}>Tejas Jhaveri</a> is a 4x entrepreneur who built Flintstop, a D2C eCommerce brand, into a $6M-a-year machine, shipping out 8,000 orders a day before selling the business in 2020. At Myntmore, his B2B outbound agency, he&apos;s helped 120+ B2B companies book 12K+ meetings and generate $120M+ in pipeline. He&apos;s a TEDx speaker, angel investor, and has taught B2B growth methodologies at IIT and IIM.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <h2 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>About the company</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                <strong style={{ color: "#0a0a0a" }}>Myntmore</strong> is a B2B lead generation and outbound growth agency built for founders, CXOs, and high-velocity teams who want predictable pipeline without hiring large internal teams. We build lead generation systems across LinkedIn, cold email, and AI-led workflows, combining ICP clarity, sharp messaging, and intelligent automation to deliver pipeline you can trust.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="rounded-2xl p-8 sm:p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#241a14 100%)", borderColor: "#3a2a1f" }}>
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: GOLD }}>You&apos;re in the right place</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4">Let&apos;s turn cold emails into warm leads and booked calls.</h2>
              <p className="text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#c9bfb8" }}>
                You&apos;ve got the business. We&apos;ve got the system to fuel its growth. With Myntmore&apos;s cold emailing expertise, you&apos;re investing in precision, strategy, and outreach that drives real results. Ready to set this up?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/founder-myntmore/30min" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-sm font-bold">Book a Consultation Call</a>
                <Link href="/services/cold-email" className="px-8 py-4 text-sm font-bold rounded-full border transition-colors hover:bg-white/10" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>Explore Cold Email Services</Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </article>
    </InnerLayout>
  );
}
