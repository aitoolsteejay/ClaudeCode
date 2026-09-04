import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";
import JsonLd from "../../components/JsonLd";
import AskYourAI from "../../components/AskYourAI";
import Faq from "../../lp/Faq";
import { buildFaqSchema, buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/cold-email-vs-linkedin-outreach",
  "https://www.myntmore.com/services/cold-email",
  "https://www.myntmore.com/services/linkedin-outreach",
];

export const metadata: Metadata = {
  title: "Cold Email vs. LinkedIn Outreach for B2B Pipeline",
  description: "Cold email vs. LinkedIn outreach for B2B: reply rates, cost to scale, and which buyers respond to which channel. Read the comparison.",
  keywords: ["cold email vs linkedin outreach", "b2b outbound channel comparison", "which is better cold email or linkedin", "linkedin outreach vs email outreach", "b2b prospecting channels compared", "cold email reply rate vs linkedin", "multi-channel b2b outbound", "linkedin connection request vs cold email", "best channel for b2b lead generation", "outbound channel strategy b2b", "cold email scalability vs linkedin", "b2b outreach channel mix"],
  alternates: { canonical: "https://www.myntmore.com/blog/cold-email-vs-linkedin-outreach" },
  openGraph: {
    title: "Cold Email vs. LinkedIn Outreach: Which Wins for B2B? | Myntmore",
    description: "Reply rates, scale, cost, and which buyers respond to which channel, no one-sided pitch.",
    url: "https://www.myntmore.com/blog/cold-email-vs-linkedin-outreach",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

interface ComparisonRow {
  factor: string;
  email: string;
  linkedin: string;
}

const COMPARISON: ComparisonRow[] = [
  {
    factor: "Scale ceiling",
    email: "Effectively unlimited once infrastructure is built, volume scales with domains and inboxes, not headcount",
    linkedin: "Bounded by platform connection and messaging limits per seat, scale means adding more seats, not just more sends",
  },
  {
    factor: "Reply rate range we see",
    email: "27–35% blended across ICP-mapped campaigns, see our benchmark report for the full breakdown",
    linkedin: "18–24% blended across connection + follow-up sequences, measured against an already-warmer, connection-accepted audience",
  },
  {
    factor: "Setup overhead",
    email: "Domain warm-up, SPF/DKIM/DMARC, and deliverability monitoring before you send anything close to full volume",
    linkedin: "Account warm-up and daily connection/message caps to avoid platform restrictions, lighter technical lift, similar patience required",
  },
  {
    factor: "Best-fit buyer",
    email: "Any verifiable business email, works even for buyers who aren't personally active on social platforms",
    linkedin: "Buyers who are actually active on LinkedIn, posting, commenting, checking their inbox, which skews toward certain seniority levels and industries",
  },
  {
    factor: "Personalization style",
    email: "Firmographic and intent-data personalization at scale: company size, funding, hiring signals, tech stack",
    linkedin: "Personal and contextual: recent posts, mutual connections, profile activity, feels warmer per message but is harder to template",
  },
  {
    factor: "Compliance surface",
    email: "Governed by CAN-SPAM, GDPR, and similar laws, see our compliance guide for the specifics",
    linkedin: "Governed primarily by LinkedIn's own platform terms (connection/message limits, automation restrictions) rather than email-specific law",
  },
];

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Should I use cold email or LinkedIn outreach for B2B?",
    answer: "Most B2B teams don't have to choose. Cold email wins on scale and works even for buyers who aren't personally active on social platforms; LinkedIn wins on warmth and works best for buyers who are genuinely active there. The two channels reach overlapping but not identical audiences, which is exactly why running them together usually outperforms either alone.",
  },
  {
    question: "Can I run cold email and LinkedIn outreach together?",
    answer: "Yes, and it's the setup we run most often. A common pattern is parallel sequences: a cold email touch and a LinkedIn connection request landing around the same time, so the prospect sees the same name twice, in two different contexts, which raises response rates versus either channel alone.",
  },
  {
    question: "Which channel has a higher reply rate?",
    answer: "Cold email. By our own published benchmarks, its blended reply rate (27–35%) runs higher than LinkedIn's (18–24%), even though LinkedIn messages go to an already-warmer, connection-accepted audience. Combined with a far higher volume ceiling, that's why email is usually the bigger lever for total meetings booked, with LinkedIn adding reach into buyers who are genuinely active there.",
  },
  {
    question: "Is LinkedIn outreach more expensive than cold email?",
    answer: "Usually, yes, per message. LinkedIn is bounded by seats and manual-feeling interaction rather than pure infrastructure, so it costs more to run at the same volume. Per qualified meeting the gap narrows, but cold email generally stays the more cost-efficient channel at scale, which is why it's typically the primary volume driver, with LinkedIn reaching buyers email alone won't.",
  },
];

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Cold Email vs. LinkedIn Outreach: Which Wins for B2B?",
  description: "Cold email vs. LinkedIn outreach for B2B: reply rates, cost to scale, and which buyers respond to which channel. Read the comparison.",
  url: "https://www.myntmore.com/blog/cold-email-vs-linkedin-outreach",
  datePublished: "2026-08-21T00:00:00Z",
  dateModified: "2026-08-21T00:00:00Z",
});

export default function ColdEmailVsLinkedInOutreach() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,119,181,0.18) 0%, rgba(0,119,181,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(22,163,74,0.35)", background: "rgba(22,163,74,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#16a34a" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#16a34a" }}>Comparison · 6 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Cold email vs. LinkedIn outreach: which actually wins for B2B?
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-4" style={{ color: "#52525B" }}>
            Neither one universally beats the other, and picking a single winner misses what each channel is actually good at. Cold email scales further and reaches buyers who aren&apos;t on social platforms; LinkedIn is warmer and lands better with buyers who are genuinely active there.
          </p>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            Here&apos;s the real tradeoff, side by side.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: "#0a0a0a" }}>The tradeoff, side by side</h2>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ backgroundColor: "#ffffff" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #E8E2D9", backgroundColor: "#F8F6F2" }}>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#8C8279" }}>Factor</th>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#16a34a" }}>Cold Email</th>
                      <th className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#0077b5" }}>LinkedIn Outreach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.factor} style={{ borderBottom: i < COMPARISON.length - 1 ? "1px solid #F0EBE3" : "none" }}>
                        <td className="px-5 py-5 font-bold align-top" style={{ color: "#0a0a0a" }}>{row.factor}</td>
                        <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.email}</td>
                        <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.linkedin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: "#8C8279" }}>
              Reply-rate range is Myntmore&apos;s own published benchmark across client engagements (see the 2026 benchmark report). Platform limits and general channel behavior reflect publicly known LinkedIn and email-provider policies, not client-specific data.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* When email wins */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>When cold email is the better lever</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
              <p>You need volume. Once infrastructure is warmed up, email scales with domains and inboxes, not with a person&apos;s daily connection limit.</p>
              <p>Your ICP includes buyers who aren&apos;t especially active on LinkedIn, common in traditional industries, manufacturing, or more senior operational roles who check email far more than their feed.</p>
              <p>You have strong firmographic or intent-data signals (funding, hiring, tech stack) to personalize against at scale, the kind of targeting cold email is built for.</p>
              <p>You&apos;re testing a brand-new ICP or offer and need fast, high-volume signal on what resonates before committing to a slower, relationship-led channel.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* When LinkedIn wins */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>When LinkedIn outreach is the better lever</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
              <p>Your buyers are genuinely active on the platform, posting, commenting, checking their inbox regularly, so a message actually gets seen.</p>
              <p>The sale is relationship-led or complex, where seeing a prospect&apos;s recent posts and mutual connections lets you personalize in a way email data can&apos;t replicate.</p>
              <p>You&apos;re already investing in personal branding or thought-leadership content, LinkedIn outreach compounds with that content rather than competing with it for attention.</p>
              <p>You want the warmth of an accepted connection before the first real message lands, useful for senior, harder-to-reach titles who filter cold email aggressively.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Best practice: run both */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>The honest answer: most teams shouldn&apos;t pick just one</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              In one of our SaaS engagements, running cold email and LinkedIn outreach in parallel, the same prospect seeing both touches within days of each other, produced a 34% reply rate and $1.2M in tracked pipeline over 8 weeks. Neither channel alone was the lever; the overlap between them was. See the full{" "}
              <a href="/case-studies/saas-series-a" className="font-bold underline" style={{ color: "#16a34a" }}>SaaS Series A case study</a>{" "}
              for the details, or read how we approach each channel individually on our{" "}
              <a href="/services/cold-email" className="font-bold underline" style={{ color: "#16a34a" }}>cold email</a>{" "}
              and{" "}
              <a href="/services/linkedin-outreach" className="font-bold underline" style={{ color: "#0077b5" }}>LinkedIn outreach</a>{" "}
              service pages.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Final CTA */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e" }}>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">Let&apos;s figure out the right channel mix for you</h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
              Book a free 30-minute call. We&apos;ll map out whether cold email, LinkedIn, or both make sense for your ICP and stage.
            </p>
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
