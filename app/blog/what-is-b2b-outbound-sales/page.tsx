import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import NewsletterForm from "../../components/NewsletterForm";
import JsonLd from "../../components/JsonLd";
import Faq from "../../lp/Faq";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/what-is-b2b-outbound-sales",
  "https://www.myntmore.com/resources/glossary",
  "https://www.myntmore.com",
];

export const metadata: Metadata = {
  title: "What Is B2B Outbound Sales? A Complete Guide",
  description: "B2B outbound sales explained: what it is, how it differs from inbound, the channels and roles involved, and how to know if it's the right fit for your company.",
  keywords: ["what is b2b outbound sales", "outbound sales definition", "outbound vs inbound sales", "b2b outbound sales explained", "how does outbound sales work", "outbound sales process b2b"],
  alternates: { canonical: "https://www.myntmore.com/blog/what-is-b2b-outbound-sales" },
  openGraph: {
    title: "What Is B2B Outbound Sales? A Complete Guide | Myntmore",
    description: "What outbound sales actually is, the channels and roles behind it, and how to tell if it's right for your company.",
    url: "https://www.myntmore.com/blog/what-is-b2b-outbound-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Is outbound sales dead?",
    answer: "No, but generic outbound is. Broad, unpersonalized blasts get ignored or filtered as spam. Outbound that's targeted at a specific ICP, references something real about the recipient, and runs across more than one channel still reliably books meetings.",
  },
  {
    question: "How is outbound different from inbound?",
    answer: "Inbound attracts prospects who come to you through content, search, or referrals. Outbound proactively reaches prospects who haven't found you yet, through channels like cold email, LinkedIn, or calls. See the full breakdown in our glossary.",
  },
  {
    question: "Do I need outbound if inbound is already working?",
    answer: "Usually yes, once you want predictable, scalable pipeline. Inbound compounds over time but is slow to ramp and hard to aim at a specific account. Outbound is immediate and lets you target exactly the companies you want as customers, rather than waiting for the right ones to find you.",
  },
  {
    question: "Should I hire an in-house SDR or use an outbound agency?",
    answer: "It depends on stage and volume. An agency is typically faster to start, cheaper below a certain scale, and comes with existing infrastructure and playbooks. In-house makes more sense once outbound is a proven, permanent part of the GTM motion and you're running it at real volume. We break down the tradeoffs in detail in our agency vs. in-house guide.",
  },
];

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "What Is B2B Outbound Sales? A Complete Guide",
  description: "B2B outbound sales explained: what it is, how it differs from inbound, the channels and roles involved, and how to know if it's the right fit for your company.",
  url: "https://www.myntmore.com/blog/what-is-b2b-outbound-sales",
  datePublished: "2026-09-24T00:00:00Z",
  dateModified: "2026-09-24T00:00:00Z",
});

const CHANNELS = [
  {
    name: "Cold Email",
    href: "/services/cold-email",
    body: "The highest-volume outbound channel: targeted email sent to a defined ICP, run through properly warmed domains with SPF, DKIM, and DMARC in place so messages actually land in the inbox.",
  },
  {
    name: "LinkedIn Outreach",
    href: "/services/linkedin-outreach",
    body: "Connection requests and DMs sent to prospects on LinkedIn, usually paired with light engagement (likes, comments) beforehand to warm up the relationship before the first message.",
  },
  {
    name: "Account-Based Marketing (ABM)",
    href: "/services/account-based-marketing",
    body: "Outbound aimed at a short list of named target companies rather than a broad list, multi-threading several stakeholders inside each account instead of messaging one contact and hoping.",
  },
];

const SYSTEM_STEPS = [
  { label: "ICP", body: "Define the exact company and buyer profile worth targeting, so effort isn't spent on prospects who were never going to buy.", href: "/resources/glossary/icp" },
  { label: "List building", body: "Compile a list of real companies and contacts matching that ICP, ideally filtered further by live buying signals, not just static firmographic fit.", href: "/resources/glossary/buying-signal" },
  { label: "Messaging", body: "Write outreach that references something specific about the recipient and leads with their problem, not a pitch for your product.", href: null },
  { label: "Sequencing", body: "Space multiple touches, often across more than one channel, since most replies come after several attempts, not the first message.", href: null },
  { label: "Sales ops", body: "An SDR or similar role runs the outreach day to day and hands off booked meetings to whoever closes deals.", href: "/resources/glossary/sdr" },
  { label: "Pipeline", body: "Booked meetings become a tracked pipeline, moving through stages toward closed-won, which is what the whole system exists to fill.", href: "/resources/glossary/sales-pipeline" },
];

export default function WhatIsB2bOutboundSales() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", border: "1px solid rgba(217,119,6,0.2)" }}>GTM Strategy · 8 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            What Is B2B Outbound Sales? A Complete Guide
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Outbound sales is the practice of proactively reaching out to prospects who haven&apos;t found you yet, instead of waiting for them to come to you. Here&apos;s what that actually means in practice: the channels, the roles, and how the whole system fits together.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "4–8%", source: "is a healthy meeting-booked rate from cold outreach", cite: "Myntmore Benchmark Report", href: "/blog/b2b-outbound-benchmark-report-2026" },
            { stat: "8 touches", source: "average number needed before a prospect engages", cite: "RAIN Group" },
            { stat: "49%", source: "of B2B buyers research vendors on LinkedIn before responding", cite: "LinkedIn Research" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>
                Source: {s.href ? <a href={s.href} className="underline">{s.cite}</a> : s.cite}
              </p>
            </div>
          ))}
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The definition, in one sentence</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                B2B outbound sales is the process of a company identifying prospects that fit its ideal customer profile and initiating contact with them directly, rather than relying on those prospects to discover the company on their own. It&apos;s the opposite motion of inbound, which attracts prospects through content, search rankings, or word of mouth. See the full breakdown in our{" "}
                <Link href="/resources/glossary/inbound-vs-outbound" className="font-bold underline" style={{ color: "#D97706" }}>Inbound vs. Outbound glossary entry</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The three main channels</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Outbound isn&apos;t one channel, it&apos;s a set of them, usually run together rather than in isolation:
              </p>
              <div className="space-y-4">
                {CHANNELS.map((c) => (
                  <div key={c.name} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <h3 className="text-lg font-black mb-2" style={{ color: "#0a0a0a" }}>{c.name}</h3>
                    <p className="text-base leading-relaxed mb-3" style={{ color: "#52525B" }}>{c.body}</p>
                    <Link href={c.href} className="text-sm font-bold" style={{ color: "#D97706" }}>See the service &rarr;</Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The anatomy of an outbound system</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Whatever the channel, a working outbound system moves through the same six stages:
              </p>
              <ol className="space-y-4">
                {SYSTEM_STEPS.map((step, i) => (
                  <li key={step.label} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                      <div>
                        <span className="font-bold" style={{ color: "#0a0a0a" }}>{step.label}. </span>
                        <span className="text-base leading-relaxed" style={{ color: "#52525B" }}>{step.body}</span>
                        {step.href && (
                          <>
                            {" "}
                            <Link href={step.href} className="text-sm font-bold" style={{ color: "#D97706" }}>Learn more &rarr;</Link>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Building it in-house vs. outsourcing it</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Most companies eventually face this decision directly: hire an SDR (or a small team) and build the infrastructure internally, or run outbound through an agency that already has the domains, tooling, and playbooks in place. There&apos;s no universally right answer, it comes down to stage, volume, and how proven the motion already is inside your company. We cover the actual tradeoffs, cost, speed, and control, in{" "}
                <a href="/blog/agency-vs-in-house" className="font-bold underline" style={{ color: "#D97706" }}>Agency vs. In-House SDR for B2B Outbound</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>How to know if outbound is worth it for you</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Outbound tends to pay off fastest for companies that already know their ICP with some precision, sell something with a clear, explainable value proposition, and need pipeline on a predictable schedule rather than whenever inbound happens to convert. It tends to underperform when the ICP is still genuinely unclear, since no amount of sequencing or channel choice fixes a targeting problem. If that&apos;s where you are, start with{" "}
                <Link href="/resources/glossary/icp" className="font-bold underline" style={{ color: "#D97706" }}>defining the ICP</Link>{" "}
                before building any outreach on top of it.
              </p>
            </div>
          </div>

          <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to build your outbound system end to end?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We run ICP mapping, cold email, LinkedIn outreach, and ABM as one connected system, not disconnected tactics. Book a free audit and we&apos;ll map out what it looks like for your company.
            </p>
            <a href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>

          <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>The Outbound Operator</p>
            <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>One practical growth playbook, every week</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
            </p>
            <NewsletterForm inputId="blog-newsletter-email" compact />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
