import InnerLayout from "@/app/components/InnerLayout";
import FadeIn from "@/app/components/FadeIn";

// Every one of these is identical across all 3 tiers (8 infrastructure items
// + the first 4 content items), so they're shown once instead of being
// repeated 3x over -- the only real differences live in DIFFERENTIATORS below.
const INCLUDED_IN_EVERY_PLAN = [
  "Dedicated Account Manager",
  "Monthly Check-In with Founder",
  "End-of-Month (EOM) Reports",
  "ICP Definition Template",
  "Value Proposition Template",
  "One-Time Profile Optimisation",
  "One-Time Competitor Analysis",
  "ORM - Comments & Responses",
  "Content Ideation & Strategy",
  "Content Writing",
  "Monthly Video Interview",
  "4 Content Pieces / Month",
];

type Cell = boolean | string;

interface DiffRow {
  label: string;
  values: [Cell, Cell, Cell]; // Starter, Growth, Lead Generation
}

const DIFFERENTIATORS: DiffRow[] = [
  { label: "Connection Requests / Month", values: ["300", "600", "600"] },
  { label: "Follow-Up Messages per Prospect", values: ["2", "4", "4"] },
  { label: "InMails / Month", values: [false, "15", "15"] },
  { label: "Video-Based Posts / Month", values: [false, "2", false] },
  { label: "Cheatsheet / PDF (Lead Magnet)", values: [false, true, false] },
  { label: "Strategic Engagements / Post", values: [false, "5", false] },
];

const COLD_EMAIL_FEATURES = [
  "1,200 emails/day (26,400/month)",
  "10 domains + 40 email accounts",
  "Full DNS setup & IP rotation",
  "ICP-based lead list (8,800 prospects/month)",
  "A/B testing & ongoing campaign optimization",
  "Advanced reporting & real-time tracking",
  "Cold email copywriting & strategy",
  "3-4 follow-ups & lead nurturing",
];

const LINKEDIN_TOOL_FEATURES = [
  "Log in via LinkedIn, full campaign control",
  "AI-suggested messaging & follow-up sequences",
  "Automated connection requests & follow-ups",
  "Full analytics: acceptance, reply rates, lead status",
  "Direct human support, no AI chatbots, no queues",
];

const GOLD = "#F5B731";

function NumberBadge({ n, dark }: { n: string; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm shrink-0"
      style={{ backgroundColor: dark ? "#0a0a0a" : GOLD, color: dark ? GOLD : "#0a0a0a" }}
    >
      {n}
    </span>
  );
}

function CheckedItem({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-sm" style={{ color: dark ? "#e5e5e5" : "#3D3D3D" }}>
      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={dark ? "#4ADE80" : "#16A34A"} strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="font-semibold">{label}</span>
    </li>
  );
}

function DiffCell({ value }: { value: Cell }) {
  if (value === false) {
    return <span className="text-sm" style={{ color: "#C9C2B7" }}>&mdash;</span>;
  }
  if (value === true) {
    return (
      <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  return <span className="text-sm font-black" style={{ color: "#0a0a0a" }}>{value}</span>;
}

export interface GrowthPlansPricingProps {
  pageTitle: string;
  currencyPrefix: string;
  currencySuffix?: string;
  prices: {
    starter: string;
    growth: string;
    leadGen: string;
    coldEmail: string;
    automation: string;
  };
}

export default function GrowthPlansPricing({ pageTitle, currencyPrefix, currencySuffix, prices }: GrowthPlansPricingProps) {
  const tiers = [
    { name: "LinkedIn Starter", price: prices.starter },
    { name: "LinkedIn Growth", price: prices.growth, featured: true },
    { name: "Lead Generation", price: prices.leadGen },
  ];

  return (
    <InnerLayout>
      <section className="pt-32 pb-24 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="relative max-w-3xl mx-auto text-center mb-14 overflow-visible">
          <div aria-hidden="true" style={{ position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)", width: 560, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.16) 0%, rgba(245,183,49,0.05) 45%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: "#0a0a0a" }}>
              {pageTitle}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#52525B" }}>
              LinkedIn growth and lead generation, run as a done-for-you system. Every plan shares the same foundation, the difference is how much volume and content sits on top of it.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <FadeIn>
            <div className="flex items-center gap-3">
              <NumberBadge n="01" />
              <div>
                <h2 className="text-lg font-black leading-tight" style={{ color: "#0a0a0a" }}>LinkedIn Growth Plans</h2>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>Done For You</p>
              </div>
            </div>
          </FadeIn>

          {/* Shared inclusions, shown once */}
          <FadeIn>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: "#0a0a0a" }}>Included in every plan</h2>
                <span className="text-xs font-semibold" style={{ color: "#8C8279" }}>Same on all 3 tiers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {INCLUDED_IN_EVERY_PLAN.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#3D3D3D" }}>
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Tier headers: name, price, CTA */}
          <FadeIn>
            <div className="grid grid-cols-3 rounded-2xl border" style={{ borderColor: "#E8E2D9" }}>
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`relative px-4 sm:px-6 py-8 text-center ${i === 0 ? "rounded-l-2xl" : ""} ${i === tiers.length - 1 ? "rounded-r-2xl" : ""}`}
                  style={{
                    backgroundColor: tier.featured ? "rgba(245,183,49,0.07)" : "#ffffff",
                    borderLeft: i > 0 ? "1px solid #E8E2D9" : "none",
                  }}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-2 sm:px-4 py-1.5 text-center font-black whitespace-nowrap" style={{ backgroundColor: GOLD, color: "#0a0a0a", fontSize: "9px", zIndex: 10 }}>
                      <span className="hidden sm:inline">For highest impact &#128640;</span>
                      <span className="sm:hidden">Best value &#128640;</span>
                    </div>
                  )}
                  <h3 className="text-base sm:text-xl font-black mb-3 mt-2" style={{ color: "#0a0a0a" }}>{tier.name}</h3>
                  <div className="mb-5">
                    <span className="text-xl sm:text-4xl font-black" style={{ color: tier.featured ? "#B45309" : "#0a0a0a" }}>{currencyPrefix}{tier.price}</span>
                    {currencySuffix && <span className="text-xs sm:text-sm font-semibold" style={{ color: "#8C8279" }}> {currencySuffix}</span>}
                    <span className="text-xs sm:text-sm font-semibold block sm:inline" style={{ color: "#8C8279" }}> / month</span>
                  </div>
                  <a
                    href="/founder-meeting"
                    className="inline-block w-full px-2 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-full transition-colors"
                    style={
                      tier.featured
                        ? { backgroundColor: "#0a0a0a", color: "#ffffff" }
                        : { backgroundColor: "#ffffff", color: "#0a0a0a", border: "1.5px solid #0a0a0a" }
                    }
                  >
                    Book a Call
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Differentiator comparison table */}
          <FadeIn>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#F8F6F2", borderBottom: "1px solid #E8E2D9" }}>
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: "#0a0a0a" }}>Where the plans differ</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ minWidth: 560 }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #E8E2D9" }}>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-black uppercase tracking-widest sticky left-0" style={{ color: "#8C8279", backgroundColor: "#ffffff", minWidth: 220 }}>
                        Feature
                      </th>
                      {tiers.map((tier) => (
                        <th
                          key={tier.name}
                          className="px-4 py-3 text-center text-xs font-black"
                          style={{ color: tier.featured ? "#B45309" : "#0a0a0a", backgroundColor: tier.featured ? "rgba(245,183,49,0.06)" : "#ffffff", width: 130 }}
                        >
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DIFFERENTIATORS.map((row, i) => (
                      <tr key={row.label} style={{ borderTop: i > 0 ? "1px solid #E8E2D9" : "none" }}>
                        <td className="px-4 sm:px-6 py-4 text-sm font-semibold sticky left-0" style={{ color: "#3D3D3D", backgroundColor: "#ffffff", minWidth: 220 }}>
                          {row.label}
                        </td>
                        {row.values.map((v, ci) => (
                          <td
                            key={ci}
                            className="px-4 py-4 text-center"
                            style={{ backgroundColor: tiers[ci].featured ? "rgba(245,183,49,0.06)" : "#ffffff", width: 130 }}
                          >
                            <DiffCell value={v} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Additional standalone options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <FadeIn>
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <NumberBadge n="02" />
                  <div>
                    <h2 className="text-lg font-black leading-tight" style={{ color: "#0a0a0a" }}>Cold Email Outbound System</h2>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>Done For You</p>
                  </div>
                </div>
                <div className="rounded-2xl border p-6 sm:p-8 flex-1 flex flex-col" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <ul className="space-y-2.5 mb-6">
                    {COLD_EMAIL_FEATURES.map((f) => <CheckedItem key={f} label={f} />)}
                  </ul>
                  <div className="mt-auto pt-6" style={{ borderTop: "1px solid #E8E2D9" }}>
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black" style={{ color: "#0a0a0a" }}>{currencyPrefix}{prices.coldEmail}</span>
                        {currencySuffix && <span className="text-sm font-semibold" style={{ color: "#8C8279" }}> {currencySuffix}</span>}
                        <span className="text-sm font-semibold" style={{ color: "#8C8279" }}> / month</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "#B45309" }}>100% advance for first month</span>
                    </div>
                    <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "#F8F6F2" }}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: "#8C8279" }}>Note</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>
                        You purchase: domains &amp; email accounts. We cover: all sending &amp; lead sourcing software.
                      </p>
                    </div>
                    <a href="/founder-meeting" className="inline-block w-full text-center px-6 py-3 text-sm font-bold rounded-full" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <NumberBadge n="03" dark />
                  <div>
                    <h2 className="text-lg font-black leading-tight" style={{ color: "#0a0a0a" }}>LinkedIn Automation Tool</h2>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>Do It Yourself</p>
                  </div>
                </div>
                <div className="rounded-2xl border p-6 sm:p-8 flex-1 flex flex-col" style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(245,183,49,0.35)" }}>
                  <ul className="space-y-2.5 mb-6">
                    {LINKEDIN_TOOL_FEATURES.map((f) => <CheckedItem key={f} label={f} dark />)}
                  </ul>
                  <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="mb-6">
                      <span className="text-2xl sm:text-3xl font-black" style={{ color: GOLD }}>{currencyPrefix}{prices.automation}</span>
                      {currencySuffix && <span className="text-sm font-semibold" style={{ color: "#b8c1bc" }}> {currencySuffix}</span>}
                      <span className="text-sm font-semibold" style={{ color: "#b8c1bc" }}> / LinkedIn account / month</span>
                    </div>
                    <a href="/founder-meeting" className="btn-dark inline-block w-full text-center px-6 py-3 text-sm font-bold">
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <p className="text-sm leading-relaxed" style={{ color: "#8C8279" }}>
            Have questions about which plan fits, or want something custom? Reach out at{" "}
            <a href="mailto:founder@myntmore.com" className="font-bold underline" style={{ color: "#0a0a0a" }}>founder@myntmore.com</a>.
          </p>
        </div>
      </section>
    </InnerLayout>
  );
}
