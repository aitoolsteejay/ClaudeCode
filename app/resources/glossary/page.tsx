import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Outbound Glossary",
  description: "Plain-English definitions of the terms and frameworks that come up across Myntmore's outbound systems, from industry basics like SPF/DKIM/DMARC and ICP to Myntmore's own frameworks like Total Conversional Market.",
  keywords: [
    "b2b outbound glossary",
    "total conversional market definition",
    "signal-heavy structuring",
    "3-second rule cold outreach",
    "b2b outbound terminology",
    "cold outreach frameworks explained",
    "what is icp",
    "what is abm",
    "spf dkim dmarc explained",
  ],
  alternates: { canonical: "https://www.myntmore.com/resources/glossary" },
  openGraph: {
    title: "B2B Outbound Glossary | Myntmore",
    description: "Plain-English definitions of the terms and frameworks behind Myntmore's outbound systems.",
    url: "https://www.myntmore.com/resources/glossary",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const TERMS = [
  {
    href: "/resources/glossary/total-conversional-market",
    tag: "Targeting",
    title: "Total Conversional Market (TCM)",
    excerpt: "The highly specific, highly motivated subset of prospects actively feeling your problem today, versus the broad, theoretical TAM.",
    accent: "#D97706",
  },
  {
    href: "/resources/glossary/signal-heavy-structuring",
    tag: "Content Strategy",
    title: "Signal-Heavy Structuring",
    excerpt: "A framework for building content that includes a concrete, usable asset, not generic branding copy, so it earns a reply on its own.",
    accent: "#7C3AED",
  },
  {
    href: "/resources/glossary/3-second-rule",
    tag: "Cold Outreach",
    title: "The 3-Second Rule",
    excerpt: "You have roughly 3 seconds to earn a prospect's curiosity before an outbound message gets ignored, and pitching in that window loses it.",
    accent: "#F97316",
  },
  {
    href: "/resources/glossary/spf-dkim-dmarc",
    tag: "Cold Email",
    title: "SPF, DKIM & DMARC",
    excerpt: "The three DNS records that prove a cold email actually came from your domain, and decide whether it lands in the inbox or spam.",
    accent: "#16A34A",
  },
  {
    href: "/resources/glossary/icp",
    tag: "Targeting",
    title: "ICP (Ideal Customer Profile)",
    excerpt: "The exact type of company and buyer most likely to want your product, used to decide who's worth messaging before outreach starts.",
    accent: "#0891B2",
  },
  {
    href: "/resources/glossary/abm",
    tag: "GTM Strategy",
    title: "ABM (Account-Based Marketing)",
    excerpt: "Targeting a short list of named companies directly, instead of messaging a broad, generic list.",
    accent: "#2563EB",
  },
  {
    href: "/resources/glossary/cold-email",
    tag: "Cold Outreach",
    title: "Cold Email",
    excerpt: "Outbound email to a prospect with no prior relationship, written to open a real conversation, not blast a list.",
    accent: "#EA580C",
  },
  {
    href: "/resources/glossary/domain-warmup",
    tag: "Cold Email",
    title: "Domain Warm-up",
    excerpt: "Gradually ramping up email volume from a new domain so inbox providers build a positive sending reputation.",
    accent: "#15803D",
  },
  {
    href: "/resources/glossary/sender-reputation",
    tag: "Cold Email",
    title: "Sender Reputation",
    excerpt: "The ongoing score inbox providers assign a domain based on past behaviour, deciding inbox or spam.",
    accent: "#059669",
  },
  {
    href: "/resources/glossary/can-spam-act",
    tag: "Compliance",
    title: "CAN-SPAM Act",
    excerpt: "The US law setting the rules for commercial email: accurate sender info, honest subject lines, a working opt-out.",
    accent: "#DC2626",
  },
  {
    href: "/resources/glossary/gdpr-cold-outreach",
    tag: "Compliance",
    title: "GDPR for Cold Outreach",
    excerpt: "The EU law governing outreach to prospects in Europe, and what \"legitimate interest\" actually allows.",
    accent: "#BE123C",
  },
  {
    href: "/resources/glossary/buyer-persona",
    tag: "Targeting",
    title: "Buyer Persona",
    excerpt: "A profile of a job role's goals and objections, used to shape messaging rather than decide who to target.",
    accent: "#C2410C",
  },
  {
    href: "/resources/glossary/buying-signal",
    tag: "Targeting",
    title: "Buying Signal",
    excerpt: "An observable event, like a new hire or funding round, suggesting a company may be ready to buy now.",
    accent: "#0D9488",
  },
  {
    href: "/resources/glossary/sdr",
    tag: "Sales Ops",
    title: "SDR (Sales Development Rep)",
    excerpt: "The role responsible for prospecting and qualifying leads, booking meetings for account executives.",
    accent: "#475569",
  },
  {
    href: "/resources/glossary/multi-threading",
    tag: "GTM Strategy",
    title: "Multi-Threading",
    excerpt: "Engaging several stakeholders inside one account at once, instead of relying on a single champion.",
    accent: "#1D4ED8",
  },
  {
    href: "/resources/glossary/lead-magnet",
    tag: "Content Strategy",
    title: "Lead Magnet",
    excerpt: "A free, specific piece of value offered upfront to earn a reply, before any pitch is made.",
    accent: "#9333EA",
  },
  {
    href: "/resources/glossary/founder-led-sales",
    tag: "Personal Branding",
    title: "Founder-Led Sales",
    excerpt: "The founder personally running early sales conversations, before a dedicated sales team exists.",
    accent: "#DB2777",
  },
  {
    href: "/resources/glossary/vanity-metrics",
    tag: "Personal Branding",
    title: "Vanity Metrics",
    excerpt: "Likes, follower counts, and impressions that look impressive but don't reliably predict pipeline.",
    accent: "#E11D48",
  },
  {
    href: "/resources/glossary/sales-pipeline",
    tag: "GTM Strategy",
    title: "Sales Pipeline",
    excerpt: "Every active deal moving through defined stages, from first contact to closed-won.",
    accent: "#3B82F6",
  },
  {
    href: "/resources/glossary/inbound-vs-outbound",
    tag: "Cold Outreach",
    title: "Inbound vs. Outbound",
    excerpt: "Waiting for the right people to find you, versus proactively reaching out to find them.",
    accent: "#F59E0B",
  },
  {
    href: "/resources/glossary/aha-moment",
    tag: "GTM Strategy",
    title: "Aha Moment",
    excerpt: "The point where a prospect recognizes their own problem in your message, and outreach stops feeling like a pitch.",
    accent: "#CA8A04",
  },
  {
    href: "/resources/glossary/existing-connection-nurturing",
    tag: "GTM Strategy",
    title: "Existing Connection Nurturing",
    excerpt: "Keeping light, ongoing engagement with people already in your network, so a future message lands as familiar.",
    accent: "#6D28D9",
  },
  {
    href: "/resources/glossary/hot-lead",
    tag: "GTM Strategy",
    title: "Hot Lead",
    excerpt: "A prospect showing clear, immediate buying intent, who should be followed up with within hours, not days.",
    accent: "#B91C1C",
  },
  {
    href: "/resources/glossary/warm-lead",
    tag: "GTM Strategy",
    title: "Warm Lead",
    excerpt: "A prospect who's engaged but hasn't shown clear buying intent yet, worth nurturing rather than a hard pitch.",
    accent: "#B45309",
  },
  {
    href: "/resources/glossary/cold-lead",
    tag: "GTM Strategy",
    title: "Cold Lead",
    excerpt: "A prospect matching your ICP who hasn't engaged yet, the starting point of a sequence, not a dead end.",
    accent: "#64748B",
  },
  {
    href: "/resources/glossary/lead-scoring",
    tag: "GTM Strategy",
    title: "Lead Scoring",
    excerpt: "Ranking leads by fit and engagement so sales effort goes to the prospects most likely to convert first.",
    accent: "#0EA5E9",
  },
  {
    href: "/resources/glossary/value-proposition",
    tag: "GTM Strategy",
    title: "Value Proposition",
    excerpt: "The specific result a buyer gets and why that matters more coming from you than from any alternative.",
    accent: "#0F766E",
  },
  {
    href: "/resources/glossary/response-rate",
    tag: "GTM Strategy",
    title: "Response Rate",
    excerpt: "The percentage of prospects who reply, the earliest signal that targeting and messaging are working.",
    accent: "#047857",
  },
  {
    href: "/resources/glossary/meeting-booked-rate",
    tag: "GTM Strategy",
    title: "Meeting-Booked Rate",
    excerpt: "The percentage of contacted prospects who book a meeting, the metric outbound teams actually optimize for.",
    accent: "#9A3412",
  },
  {
    href: "/resources/glossary/re-engagement-campaign",
    tag: "GTM Strategy",
    title: "Re-engagement Campaign",
    excerpt: "A sequence aimed at prospects who went quiet, existing connections, or non-responders, not a cold audience.",
    accent: "#BE185D",
  },
];

export default function GlossaryPage() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.18) 0%, rgba(255,160,0,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Glossary", href: "/resources/glossary" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7C3AED" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#7C3AED" }}>Glossary</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The terms behind the system
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            The terms and frameworks that come up repeatedly across Myntmore&apos;s own content and campaigns, from industry basics to a few ideas we coined ourselves. Here&apos;s exactly what each one means, in one place.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TERMS.map((t) => (
                <Link key={t.href} href={t.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${t.accent},${t.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${t.accent}12`, color: t.accent }}>{t.tag}</span>
                    <h2 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{t.title}</h2>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{t.excerpt}</p>
                    <span className="text-xs font-bold" style={{ color: t.accent }}>Read the definition &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
