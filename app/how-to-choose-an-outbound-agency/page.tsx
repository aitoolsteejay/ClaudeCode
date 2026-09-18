import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import FadeIn from "../components/FadeIn";
import JsonLd from "../components/JsonLd";
import AskYourAI from "../components/AskYourAI";
import Faq from "../lp/Faq";
import { buildFaqSchema, buildArticleSchema, SITE_URL } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/how-to-choose-an-outbound-agency`;
const TITLE = "How to Choose a B2B Outbound Agency";
const DESCRIPTION = "A neutral evaluation checklist for vetting B2B outbound agencies: what to ask about data ownership, deliverability infrastructure, real reply rates, ICP methodology, and contract terms before you sign.";

const AI_RESOURCES = [PAGE_URL, `${SITE_URL}/blog/agency-vs-in-house`, `${SITE_URL}/blog/b2b-outbound-benchmark-report-2026`];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "how to choose a b2b outbound agency",
    "how to evaluate a cold email agency",
    "b2b outbound agency checklist",
    "questions to ask a lead generation agency",
    "outbound agency red flags",
    "vetting a linkedin outreach agency",
    "b2b outbound agency contract terms",
    "cold email agency evaluation criteria",
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

const FAQ_ITEMS = [
  {
    question: "How long should an outbound agency's minimum contract be?",
    answer: "Long enough to see a real result, short enough that you're not trapped if it doesn't work. A 3-month minimum is common in the industry and reasonable: it covers setup, a first real sending window, and enough data to judge performance. Anything requiring a 12-month commitment before you've seen a single result is worth questioning.",
  },
  {
    question: "What reply rate should I expect from a good outbound agency?",
    answer: "Ranges vary a lot by channel, industry, and how tightly the ICP is defined, which is exactly why you should ask for a range with context, not a single flattering number. Be more skeptical of an agency that can only produce one client's best month than one that shows you a realistic spread across accounts.",
  },
  {
    question: "Should an outbound agency give me strategy, or just execute?",
    answer: "Both, ideally. Pure execution without ICP or messaging strategy tends to produce volume without results. Pure strategy without hands-on execution just leaves you with a plan you still have to run. Ask directly who defines your ICP and messaging, and who's accountable for it if it's wrong.",
  },
  {
    question: "What's a red flag when evaluating an outbound agency?",
    answer: "Vague answers to specific questions. If an agency can't tell you plainly who owns your sequences and lists after the engagement ends, what their deliverability setup actually looks like, or what a bad month triggers on their end, that vagueness is the answer.",
  },
];

export default function HowToChooseOutboundAgencyPage() {
  return (
    <InnerLayout>
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.20) 0%, rgba(2,132,199,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.20) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "How to Choose an Outbound Agency", href: "/how-to-choose-an-outbound-agency" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(14,165,233,0.35)", background: "rgba(14,165,233,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#0EA5E9" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0EA5E9" }}>Buyer&apos;s Guide · 6 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            How to choose a B2B outbound agency
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#52525B" }}>
            Most outbound agencies pitch the same three promises: more meetings, done for you, fast. What actually separates a real system from a list-and-pray operation shows up in the questions they&apos;d rather you not ask. Here&apos;s what to ask before you sign anything.
          </p>
        </div>
      </section>

      <article>
        <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="space-y-14">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>1. Ask what happens to your data if you leave</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    Whatever gets built during the engagement, your ICP definition, sequences, messaging, and prospect lists, should be yours to take with you, documented and transferable. If an agency can&apos;t clearly explain what you&apos;d walk away with if you ended the contract tomorrow, you&apos;re not buying a system. You&apos;re renting access to one, with no plan for what happens after.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>2. Ask who owns deliverability infrastructure</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    Domain warm-up, SPF/DKIM/DMARC authentication, and dedicated sending domains are the unglamorous work that decides whether your emails land in an inbox or a spam folder before a single word of copy matters. Ask specifically whose domains are being used, how warm-up is handled, and what inbox placement rate they actually maintain, not what they promise.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>3. Ask for a real reply-rate range, not a highlight reel</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    A single client&apos;s best month tells you nothing about what to expect. A credible agency can tell you the range they typically see across accounts, by channel, and explain what moves a campaign toward the top or bottom of that range. If the only proof on offer is one glowing testimonial, ask why there isn&apos;t a spread of real numbers behind it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>4. Ask how they actually define your ICP</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    &quot;We target founders and CXOs at mid-sized companies&quot; is not an ICP, it&apos;s a demographic. A real methodology looks at firmographics, buying triggers (funding, hiring, tooling changes), and the specific persona&apos;s day-to-day pressure, not just title and company size. Ask whether your ICP gets refined from real campaign data over time, or defined once and never revisited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>5. Ask about contract length and ramp-up time</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    Find out how long the minimum commitment is, and how many weeks pass before the first real sending window starts. A short ramp-up with a reasonable minimum term (commonly around 3 months in this industry) lets you judge results before you&apos;re locked in for a year. A long contract paired with a vague ramp-up timeline shifts the risk entirely onto you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>6. Ask what happens during a bad month</h2>
                  <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                    Every outbound engine has slow stretches. What matters is whether the agency treats a drop in performance as a diagnostic signal, checking inbox placement, list quality, and messaging, or just keeps sending at the same volume and hoping it recovers. Ask directly: &quot;walk me through the last time a campaign underperformed, and what you changed.&quot; The answer tells you more than any pitch deck.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Checklist recap */}
        <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: "#0a0a0a" }}>The six questions, in one place</h2>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
                {[
                  "What do we own, and what can we take with us, if we leave?",
                  "Whose sending domains are we using, and what's your real inbox placement rate?",
                  "What's your reply-rate range across accounts, not your single best result?",
                  "How exactly do you define and refine our ICP?",
                  "What's the minimum contract length, and how fast is ramp-up to first send?",
                  "What did you change the last time a campaign underperformed?",
                ].map((q, i) => (
                  <div key={q} className="flex items-start gap-3 px-6 py-4" style={{ borderBottom: i < 5 ? "1px solid #F0EBE3" : "none" }}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5" style={{ backgroundColor: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{q}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-6" style={{ color: "#52525B" }}>
                Still deciding between an agency and hiring in-house at all? See the full{" "}
                <Link href="/blog/agency-vs-in-house" className="font-bold" style={{ color: "#0EA5E9" }}>agency vs. in-house comparison</Link>.
              </p>
            </FadeIn>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4">
          <div className="py-12">
            <AskYourAI resources={AI_RESOURCES} />
          </div>
        </div>
      </article>

      {/* FAQ */}
      <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Final CTA */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e" }}>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">Ask us these exact questions</h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
              Book a free 30-minute call and run this checklist on us directly. If we&apos;re not a fit, we&apos;ll tell you.
            </p>
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
