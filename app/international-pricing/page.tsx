import type { Metadata } from "next";
import InnerLayout from "../components/InnerLayout";

// Private, unlisted pricing page for direct sharing with international
// prospects. Deliberately not linked from any nav, footer, or sitemap, and
// kept out of search indexing via robots below.
export const metadata: Metadata = {
  title: "International Growth Plans",
  description: "LinkedIn growth and lead generation plans for international clients.",
  robots: { index: false, follow: false },
};

interface FeatureRow {
  label: string;
  included: boolean;
}

interface Tier {
  name: string;
  price: string;
  featured?: boolean;
  badge?: string;
  content: FeatureRow[];
  leadGen: FeatureRow[];
}

const GROWTH_INFRASTRUCTURE = [
  "Dedicated Account Manager",
  "Monthly Check-In with Founder",
  "End-of-Month (EOM) Reports",
  "ICP Definition Template",
  "Value Proposition Template",
  "One-Time Profile Optimisation",
  "One-Time Competitor Analysis",
  "ORM - Comments & Responses",
];

const TIERS: Tier[] = [
  {
    name: "LinkedIn Starter",
    price: "999",
    content: [
      { label: "Content Ideation & Strategy", included: true },
      { label: "Content Writing", included: true },
      { label: "Monthly Video Interview", included: true },
      { label: "4 Content Pieces / Month", included: true },
      { label: "2 Video-Based Posts / Month", included: false },
      { label: "1 Cheatsheet / PDF (Lead Magnet)", included: false },
      { label: "5 Strategic Engagements / Post", included: false },
    ],
    leadGen: [
      { label: "300 Connection Requests / Month", included: true },
      { label: "2 Follow-Up Messages per Prospect", included: true },
      { label: "15 InMails / Month", included: false },
    ],
  },
  {
    name: "LinkedIn Growth",
    price: "1,799",
    featured: true,
    badge: "For highest impact \u{1F680}",
    content: [
      { label: "Content Ideation & Strategy", included: true },
      { label: "Content Writing", included: true },
      { label: "Monthly Video Interview", included: true },
      { label: "4 Content Pieces / Month", included: true },
      { label: "2 Video-Based Posts / Month", included: true },
      { label: "1 Cheatsheet / PDF (Lead Magnet)", included: true },
      { label: "5 Strategic Engagements / Post", included: true },
    ],
    leadGen: [
      { label: "600 Connection Requests / Month", included: true },
      { label: "4 Follow-Up Messages per Prospect", included: true },
      { label: "15 InMails / Month", included: true },
    ],
  },
  {
    name: "Lead Generation",
    price: "1,499",
    content: [
      { label: "Content Ideation & Strategy", included: true },
      { label: "Content Writing", included: true },
      { label: "Monthly Video Interview", included: true },
      { label: "4 Content Pieces / Month", included: true },
      { label: "2 Video-Based Posts / Month", included: false },
      { label: "1 Cheatsheet / PDF (Lead Magnet)", included: false },
      { label: "5 Strategic Engagements / Post", included: false },
    ],
    leadGen: [
      { label: "600 Connection Requests / Month", included: true },
      { label: "4 Follow-Up Messages per Prospect", included: true },
      { label: "15 InMails / Month", included: true },
    ],
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function FeatureList({ rows, dark }: { rows: FeatureRow[]; dark: boolean }) {
  const textColor = dark ? "#e5e5e5" : "#3D3D3D";
  const mutedColor = dark ? "#7a8079" : "#9CA3AF";
  return (
    <ul className="space-y-2.5">
      {rows.map((r) => (
        <li key={r.label} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: r.included ? textColor : mutedColor }}>
          {r.included ? <CheckIcon color={dark ? "#4ADE80" : "#16A34A"} /> : <CrossIcon color={dark ? "#f87171" : "#DC2626"} />}
          <span className={r.included ? "font-semibold" : ""}>{r.label}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ children, accent }: { children: string; accent: string }) {
  return (
    <h3 className="text-xs font-black uppercase tracking-widest mb-3 pb-2 border-b" style={{ color: accent, borderColor: accent === "#F5B731" ? "rgba(245,183,49,0.35)" : "#E8E2D9" }}>
      {children}
    </h3>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  const dark = !!tier.featured;
  return (
    <div
      className="relative rounded-3xl border p-8 flex flex-col"
      style={{
        backgroundColor: dark ? "#0a0a0a" : "#ffffff",
        borderColor: dark ? "#0a0a0a" : "#E8E2D9",
        boxShadow: dark ? "0 20px 50px rgba(0,0,0,0.25)" : "none",
      }}
    >
      {tier.badge && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-2.5 text-center font-black text-sm whitespace-nowrap" style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>
          {tier.badge}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-black mb-3 pb-4 border-b" style={{ color: dark ? "#ffffff" : "#0a0a0a", borderColor: dark ? "rgba(255,255,255,0.15)" : "#E8E2D9" }}>
        {tier.name}
      </h2>

      <div className="space-y-6 flex-1">
        <div>
          <SectionHeading accent={dark ? "#F5B731" : "#0a0a0a"}>Growth Infrastructure</SectionHeading>
          <FeatureList rows={GROWTH_INFRASTRUCTURE.map((label) => ({ label, included: true }))} dark={dark} />
        </div>

        <div>
          <SectionHeading accent={dark ? "#F5B731" : "#0a0a0a"}>Content Engine</SectionHeading>
          <FeatureList rows={tier.content} dark={dark} />
        </div>

        <div>
          <SectionHeading accent={dark ? "#F5B731" : "#0a0a0a"}>Lead Generation System</SectionHeading>
          <FeatureList rows={tier.leadGen} dark={dark} />
        </div>
      </div>

      <div className="mt-8 pt-6 text-center" style={{ borderTop: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E8E2D9" }}>
        <div className="mb-6">
          <span className="text-4xl sm:text-5xl font-black" style={{ color: dark ? "#F5B731" : "#0a0a0a" }}>${tier.price}</span>
          <span className="text-base font-semibold" style={{ color: dark ? "#b8c1bc" : "#8C8279" }}> / month</span>
        </div>
        <a
          href="/founder-meeting"
          className={
            dark
              ? "btn-dark px-6 py-3.5 text-sm font-bold w-full inline-block text-center"
              : "px-6 py-3.5 text-sm font-bold w-full inline-block text-center rounded-full transition-colors"
          }
          style={dark ? undefined : { backgroundColor: "#0a0a0a", color: "#ffffff" }}
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}

export default function InternationalPricingPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: "#0a0a0a" }}>
            International Growth Plans
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            LinkedIn growth and lead generation, run as a done-for-you system. Pick the plan that matches how much pipeline you need.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 pt-6">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-sm leading-relaxed" style={{ color: "#8C8279" }}>
            Have questions about which plan fits, or want something custom? Reach out at{" "}
            <a href="mailto:founder@myntmore.com" className="font-bold underline" style={{ color: "#0a0a0a" }}>founder@myntmore.com</a>.
          </p>
        </div>
      </section>
    </InnerLayout>
  );
}
