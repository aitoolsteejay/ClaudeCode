import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import StatTicker from "../components/StatTicker";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI-Powered B2B Lead Generation Services",
  description: "Six productized B2B growth services: LinkedIn Outreach, Cold Email, ICP Mapping, AI Lead Gen, ABM, and Personal Branding. Book a free audit.",
  alternates: { canonical: "https://www.myntmore.com/services" },
  keywords: ["b2b lead generation agency", "b2b lead generation services", "outbound marketing agency", "b2b lead generation agency mumbai", "ai lead generation company", "linkedin outreach and cold email agency", "account based marketing agency", "icp mapping and lead scoring services", "b2b growth agency", "b2b demand generation agency", "outbound sales agency for saas", "lead generation agency vs in-house sdr team", "how to generate b2b leads without cold calling", "b2b sales pipeline agency", "personal branding and linkedin ghostwriting agency", "productized b2b lead generation services"],
  openGraph: {
    title: "B2B Lead Generation Services | AI-Powered Outbound | Myntmore",
    description: "Six productized B2B growth services. We build the architecture, you close the deals.",
    url: "https://www.myntmore.com/services",
  },
};

const SERVICES = [
  { number: "01", title: "LinkedIn Outreach & Automation", tagline: "Conversations happening in your LinkedIn inbox. Every week.", desc: "Multi-touch sequences that mimic human behaviour and generate replies from the right people. We manage everything from profile audit to reply handoff.", href: "/services/linkedin-outreach", hoverClass: "card-hover-linkedin", accentColor: "#0077b5", stats: [{ v: "48%", l: "Avg acceptance rate" }, { v: "21%", l: "Avg reply rate" }] },
  { number: "02", title: "Cold Email Infrastructure", tagline: "Cold email that actually lands in the inbox.", desc: "The full technical stack built and managed for you. Domain setup, warmup, deliverability, AI-personalised sequences. 98.5% inbox rate target.", href: "/services/cold-email", hoverClass: "card-hover-green", accentColor: "#16a34a", stats: [{ v: "98.5%", l: "Inbox rate" }, { v: "<0.2%", l: "Spam rate" }] },
  { number: "03", title: "ICP Mapping & Lead Scoring", tagline: "Know exactly who is ready to buy. Before your competitors do.", desc: "We map your ideal customer profile against 40+ real-world intent signals. Trigger-based lists updated daily. You stop wasting reps on bad-fit prospects.", href: "/services/sales-intelligence", hoverClass: "card-hover-purple", accentColor: "#a855f7", stats: [{ v: "40+", l: "Intent signals" }, { v: "Daily", l: "List refresh" }] },
  { number: "04", title: "AI Lead Generation", tagline: "Your pipeline shouldn't depend on how much time your team has.", desc: "Custom AI agents research, qualify, and prioritise leads at scale. 80% reduction in manual research time. 300–1500 scored, research-enriched leads per month.", href: "/services/ai-lead-generation", hoverClass: "card-hover-blue", accentColor: "#3b82f6", stats: [{ v: "80%", l: "Less manual research" }, { v: "38%", l: "Avg reply rate" }] },
  { number: "05", title: "Account-Based Marketing", tagline: "Stop marketing to everyone. Go all-in on the accounts that matter.", desc: "Coordinated multi-channel campaigns across email and LinkedIn engage the entire buying committee at your highest-value target accounts, so your AE isn't the first name they've seen.", href: "/services/account-based-marketing", hoverClass: "card-hover-indigo", accentColor: "#6366f1", stats: [{ v: "6.4x", l: "Higher deal size" }, { v: "3+", l: "Channels orchestrated" }] },
  { number: "06", title: "Personal Branding", tagline: "Your buyers are on LinkedIn every day. Are they seeing you?", desc: "We ghostwrite content that positions you as the authority in your space. 4–8 posts/month from monthly voice interviews. Inbound finds you instead of you chasing it.", href: "/services/personal-branding", hoverClass: "card-hover-warm", accentColor: "#D97706", stats: [{ v: "10x", l: "Profile visit increase" }, { v: "2x", l: "Reply rate boost" }] },
];

const FAQ = [
  { q: "What B2B lead generation services do you offer?", a: "We offer six core services: LinkedIn Outreach and Automation, Cold Email Infrastructure, ICP Mapping and Lead Scoring, AI-Led Lead Generation, Account-Based Marketing, and Personal Branding. Each service is productized and runs on proven systems." },
  { q: "How is AI used in your lead generation services?", a: "Our AI agents research, qualify, and prioritize leads at scale, cutting manual research time by 80%. We also use AI for personalization in cold email and LinkedIn sequences, ensuring every outreach feels human and relevant." },
  { q: "Do you work with B2B companies outside Mumbai?", a: "Yes. While we are based in Mumbai, we serve B2B companies across India and Southeast Asia. Our systems work remotely and integrate with your existing tools." },
];

export default function Services() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              B2B Lead Generation Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Six systems<br />One growth engine
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            Every service is productized, scoped, and runs on proven infrastructure, not promises. We build the architecture, you close the deals.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className={`group block rounded-2xl border p-8 ${s.hoverClass}`} style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-black" style={{ color: s.accentColor }}>{s.number}</span>
                    <h2 className="text-xl font-black" style={{ color: "#0a0a0a" }}>{s.title}</h2>
                  </div>
                  <p className="text-sm font-semibold mb-3" style={{ color: s.accentColor }}>{s.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  <div className="flex gap-6 mt-4">
                    {s.stats.map((st) => (
                      <div key={st.l}>
                        <StatTicker value={st.v} className="text-xl font-black" style={{ color: "#0a0a0a" }} />
                        <span className="block text-xs" style={{ color: "#8C8279" }}>{st.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: "#B8B0A7" }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "#0a0a0a" }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm />
    </InnerLayout>
  );
}
