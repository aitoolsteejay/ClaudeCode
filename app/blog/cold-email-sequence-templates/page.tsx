import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import NewsletterForm from "../../components/NewsletterForm";
import JsonLd from "../../components/JsonLd";
import Faq from "../../lp/Faq";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/cold-email-sequence-templates",
  "https://www.myntmore.com/blog/cold-email-deliverability-guide",
  "https://www.myntmore.com",
];

export const metadata: Metadata = {
  title: "Cold Email Sequence Templates That Get Replies",
  description: "5 cold email templates for a full outbound sequence, from the first touch to the breakup email, with the reasoning behind each one. Read the full guide.",
  keywords: ["cold email sequence templates", "cold email templates b2b", "cold email follow up sequence", "cold email breakup template", "how many cold email follow ups", "b2b cold email examples", "cold outreach sequence structure"],
  alternates: { canonical: "https://www.myntmore.com/blog/cold-email-sequence-templates" },
  openGraph: {
    title: "Cold Email Sequence Templates That Get Replies | Myntmore",
    description: "5 cold email templates for a full outbound sequence, from the first touch to the breakup email.",
    url: "https://www.myntmore.com/blog/cold-email-sequence-templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "How many follow-ups should a cold email sequence have?",
    answer: "4-6 touches over roughly 2-3 weeks tends to be the sweet spot. Fewer than that and you're leaving replies on the table, since most responses come after the second or third touch, not the first. More than that, and reply quality tends to drop while unsubscribe and spam-complaint rates rise.",
  },
  {
    question: "Should every follow-up be a new email or a reply in the same thread?",
    answer: "Reply in the same thread. It keeps context visible for the recipient, avoids re-triggering spam filters the way a fresh subject line can, and signals persistence rather than a disconnected new pitch every few days.",
  },
  {
    question: "Do these templates need to be personalized for each prospect?",
    answer: "The structure and logic stay the same, but the bracketed details need to be genuinely specific to each recipient, their company, their role, a real trigger event, not just a mail-merge first name. A template with only the name swapped in reads as a template. That's what tanks reply rates, not the sequence structure itself.",
  },
  {
    question: "What's the difference between a cold email sequence and a LinkedIn sequence?",
    answer: "The underlying logic (value before ask, multiple touches, a permission step before a direct pitch) is nearly identical. The channel mechanics differ: LinkedIn benefits from warming up via engagement before the first message, while cold email depends more heavily on domain and sender reputation. See our LinkedIn outreach sequence guide for the channel-specific version.",
  },
];

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Cold Email Sequence Templates That Get Replies",
  description: "5 cold email templates for a full outbound sequence, from the first touch to the breakup email, with the reasoning behind each one.",
  url: "https://www.myntmore.com/blog/cold-email-sequence-templates",
  datePublished: "2026-09-24T00:00:00Z",
  dateModified: "2026-09-24T00:00:00Z",
});

const SEQUENCE = [
  {
    day: "Day 1",
    name: "The opener",
    goal: "Earn a reply, not a sale.",
    subject: "Subject: quick one on [specific trigger, e.g. your Q3 hiring push]",
    body: "Hi [First Name],\n\nNoticed [specific, real trigger: a job posting, a funding announcement, a product launch, a LinkedIn post]. Companies in a similar spot usually run into [one specific, recognizable problem] around that stage.\n\nWe've helped teams like [type of company] fix exactly that. Worth a quick look at how?\n\n[Your name]",
  },
  {
    day: "Day 4",
    name: "The value-add",
    goal: "Give something useful before asking for anything.",
    subject: "Subject: re: quick one on [trigger] (same thread)",
    body: "Hi [First Name],\n\nFollowing up with something that might be useful regardless of whether we ever talk: [one specific insight, stat, or short framework relevant to their role].\n\nIf it's relevant, happy to share the fuller version.\n\n[Your name]",
  },
  {
    day: "Day 8",
    name: "The reframe",
    goal: "Approach the same problem from a different angle in case the first framing didn't land.",
    subject: "Subject: re: quick one on [trigger] (same thread)",
    body: "Hi [First Name],\n\nDifferent angle on this: most [role, e.g. VP Sales] we talk to aren't short on leads, they're short on [more specific bottleneck, e.g. qualified meetings on their calendar]. Is that closer to what you're seeing, or is it a different piece of the puzzle for you?\n\n[Your name]",
  },
  {
    day: "Day 13",
    name: "The proof point",
    goal: "Show it's worked for someone comparable, without overclaiming.",
    subject: "Subject: re: quick one on [trigger] (same thread)",
    body: "Hi [First Name],\n\nThought this might resonate: [one-line summary of a relevant, real result or case study], similar situation to what I mentioned earlier.\n\nHere's the full breakdown if useful: [link to a real case study].\n\nOpen to a short call to see if the same approach fits your setup?\n\n[Your name]",
  },
  {
    day: "Day 19",
    name: "The breakup",
    goal: "Close the loop honestly, which often gets more replies than the four emails before it.",
    subject: "Subject: re: quick one on [trigger] (same thread)",
    body: "Hi [First Name],\n\nHaven't heard back, so I'll assume the timing isn't right or this isn't a priority right now. No hard feelings, I'll stop following up here.\n\nIf that changes, my door's open, just reply whenever.\n\n[Your name]",
  },
];

export default function ColdEmailSequenceTemplates() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(234,88,12,0.08)", color: "#EA580C", border: "1px solid rgba(234,88,12,0.2)" }}>Cold Email · 7 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Cold Email Sequence Templates That Get Replies
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            A single cold email rarely does the work. Here&apos;s the 5-touch sequence structure we use, with a template for each email and the reasoning behind why it's placed where it is.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "4–8%", source: "is a healthy meeting-booked rate from cold outreach", cite: "Myntmore Benchmark Report", href: "/blog/b2b-outbound-benchmark-report-2026" },
            { stat: "8 touches", source: "average number needed before a prospect engages", cite: "RAIN Group" },
            { stat: "45 days", source: "minimum domain warm-up period before full send volume", cite: "Instantly.ai Data" },
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
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why a single email isn&apos;t a strategy</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Most prospects don&apos;t reply to the first email, not because the offer is bad, but because timing, attention, and inbox noise are all working against a single message. A sequence spreads the same core idea across several touches, each with a different job, so a prospect who wasn&apos;t ready on day 1 still has four more chances to engage when the timing is better.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The 5-touch sequence, email by email</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Every touch below replies in the same email thread, not a new one, which keeps context visible and avoids re-triggering spam filters with a fresh subject line each time.
              </p>
              <div className="space-y-5">
                {SEQUENCE.map((email) => (
                  <div key={email.day} className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <div className="px-6 pt-5 pb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#EA580C" }}>{email.day}</span>
                      <h3 className="text-lg font-black" style={{ color: "#0a0a0a" }}>{email.name}</h3>
                    </div>
                    <p className="px-6 text-sm italic mb-4" style={{ color: "#8C8279" }}>Goal: {email.goal}</p>
                    <div className="mx-6 mb-6 rounded-xl p-5 whitespace-pre-line text-sm leading-relaxed" style={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9", color: "#3D3D3D" }}>
                      <p className="font-bold mb-2" style={{ color: "#0a0a0a" }}>{email.subject}</p>
                      {email.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>What makes a subject line work here</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Lowercase, specific, and undramatic beats clever every time. &quot;quick one on [trigger]&quot; outperforms a punchy hook because it reads like a message from a person, not a campaign. Once the thread is established, every follow-up keeps the same subject line with &quot;re:&quot; in front, which is exactly what a real ongoing conversation looks like in an inbox.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Knowing when to stop</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Five touches over about three weeks is enough to know. Beyond that, additional emails to a non-responder mostly generate spam complaints and unsubscribes rather than replies. If someone hasn&apos;t engaged by the breakup email, the honest move is to close the loop, remove them from the active sequence, and revisit in a future quarter rather than continuing to push.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Pairing this with LinkedIn</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                The same five-touch logic runs in parallel on LinkedIn, and running both channels together consistently outperforms either alone, since a prospect who ignores an email might still accept a connection request, or vice versa. For the LinkedIn-specific version of this sequence, see{" "}
                <a href="/blog/linkedin-outreach-sequences" className="font-bold underline" style={{ color: "#EA580C" }}>LinkedIn Outreach Sequences That Actually Get Replies</a>. And before sending any of this at volume, make sure the sending domain is actually warmed up, covered in our{" "}
                <a href="/blog/cold-email-deliverability-guide" className="font-bold underline" style={{ color: "#EA580C" }}>cold email deliverability guide</a>.
              </p>
            </div>
          </div>

          <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to build and run your sequence?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We write, send, and iterate on cold email sequences for B2B companies every day. Book a free audit and we&apos;ll map out what a sequence looks like for your ICP.
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
