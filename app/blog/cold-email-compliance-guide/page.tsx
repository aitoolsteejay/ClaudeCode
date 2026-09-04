import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import Faq from "../../lp/Faq";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/cold-email-compliance-guide",
  "https://www.myntmore.com/blog/cold-email-deliverability-guide",
  "https://www.myntmore.com",
];

export const metadata: Metadata = {
  title: "Cold Email Compliance: CAN-SPAM, GDPR & DPDP Act Guide",
  description: "Is cold email legal? A plain-English guide to CAN-SPAM, GDPR, India's DPDP Act, and CASL for B2B outbound. Read the full guide.",
  keywords: ["cold email compliance", "is cold email legal", "can-spam act cold email", "gdpr cold email b2b", "cold email legal requirements", "dpdp act cold email india", "casl cold email canada", "b2b cold email consent rules", "cold email opt out requirements", "legitimate interest gdpr cold email", "cold email regulations by country", "is cold outreach spam", "cold email unsubscribe law", "b2b email marketing compliance"],
  alternates: { canonical: "https://www.myntmore.com/blog/cold-email-compliance-guide" },
  openGraph: {
    title: "Is Cold Email Legal? CAN-SPAM, GDPR & DPDP Act Explained | Myntmore",
    description: "A plain-English compliance guide for B2B cold email across the US, EU/UK, India, and Canada.",
    url: "https://www.myntmore.com/blog/cold-email-compliance-guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Is cold email legal?",
    answer: "Yes, in most jurisdictions B2B cold email is legal when it follows the applicable rules: accurate sender information, no deceptive subject lines, a working opt-out mechanism, and prompt honoring of unsubscribe requests. What's illegal is deceptive or non-consensual bulk spam, not targeted, honest business outreach.",
  },
  {
    question: "Do I need consent before sending a cold email under GDPR?",
    answer: "Not always. GDPR allows \"legitimate interest\" as a lawful basis for B2B outreach in many cases, provided you can justify the interest, keep the message relevant to the recipient's professional role, and offer a clear, immediate opt-out. It's a narrower path than consent-based marketing, and it requires a documented balancing test, not blanket permission to email anyone.",
  },
  {
    question: "Does India's DPDP Act affect B2B cold email?",
    answer: "Yes, though the rules are still rolling out. India's DPDP Act, 2023 centers on notice and consent for processing personal data. Professional email addresses used for business outreach carry lower risk than consumer data, but given how recent the law is, get a specific legal check before running large-scale campaigns into India.",
  },
  {
    question: "What happens if my cold email isn't compliant?",
    answer: "Consequences range from spam complaints and blacklisting (a deliverability problem) to regulatory fines under laws like CAN-SPAM or GDPR (a legal problem) in more serious or repeated cases. Most compliance failures we see are unforced errors, missing opt-out links, no physical address, ignored unsubscribe requests, not deliberate violations, and they're straightforward to fix.",
  },
];

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Cold Email Compliance: CAN-SPAM, GDPR & DPDP Act Guide",
  description: "Is cold email legal? A plain-English guide to CAN-SPAM, GDPR, India's DPDP Act, and CASL for B2B outbound. Read the full guide.",
  url: "https://www.myntmore.com/blog/cold-email-compliance-guide",
  datePublished: "2026-08-21T00:00:00Z",
  dateModified: "2026-08-21T00:00:00Z",
});

const LAWS = [
  {
    region: "United States",
    law: "CAN-SPAM Act",
    basis: "Opt-out, not opt-in",
    body: "CAN-SPAM doesn't require consent before you email a business prospect. What it requires: accurate From/Reply-To/subject lines that don't mislead the recipient about the message's content or origin, a valid physical postal address in every email, and a clear, working opt-out mechanism that you honor within 10 business days. There's no cap on cold volume and no requirement to label B2B outreach as an \"advertisement.\"",
  },
  {
    region: "EU & UK",
    law: "GDPR",
    basis: "Legitimate interest (with limits)",
    body: "GDPR is stricter than CAN-SPAM but doesn't ban B2B cold email outright. \"Legitimate interest\" can serve as a lawful basis when the outreach is relevant to the recipient's professional role, you can justify why the interest doesn't override their rights, and you provide an easy, immediate way to opt out. It requires more documentation and judgment than the US opt-out model, and it does not extend to buying scraped consumer lists or unrelated targeting.",
  },
  {
    region: "India",
    law: "DPDP Act, 2023",
    basis: "Notice & consent (still evolving)",
    body: "India's Digital Personal Data Protection Act is newer than CAN-SPAM or GDPR, and the implementing rules and enforcement guidance are still being finalized. Its core principle is notice-and-consent for processing personal data. Professional/business email outreach generally carries a different risk profile than consumer marketing, but because the law is this recent, it's worth confirming specifics with counsel before scaling a campaign targeting India, rather than assuming a US or EU playbook maps directly.",
  },
  {
    region: "Canada",
    law: "CASL",
    basis: "Implied consent for existing relationships",
    body: "Canada's Anti-Spam Legislation is one of the stricter regimes. It allows \"implied consent\" for a limited window, commonly cited as up to two years, based on an existing business relationship, but cold outreach to a contact with no prior relationship generally needs express consent. Every commercial message needs clear sender identification and a functioning unsubscribe mechanism honored within 10 business days.",
  },
];

const CHECKLIST = [
  "Accurate, non-deceptive From name, Reply-To address, and subject line",
  "A real physical business address somewhere in the email",
  "A one-click (or one-reply) way to opt out, honored immediately, not just \"within policy\"",
  "Unsubscribe requests processed and suppressed across every future send, not just the current campaign",
  "Outreach targeted to a professional's business role, not scraped personal/consumer data",
  "A documented reason the outreach is relevant to the recipient (the \"legitimate interest\" test, useful even outside the EU)",
  "No purchased or scraped lists with no verifiable business context",
];

export default function ColdEmailComplianceGuide() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}>Cold Email · 7 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Is Cold Email Legal? A Compliance Guide for B2B Outbound
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            The short answer: yes, in most places, when it's done right. Cold email and illegal spam aren&apos;t the same thing, but the line between them is defined by real, jurisdiction-specific rules, not a gut feeling. Here&apos;s what those rules actually say across the four regimes most B2B teams run into.
          </p>
        </div>
      </section>

      <div className="px-4 pb-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto rounded-xl border p-4 text-xs leading-relaxed" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#8C8279" }}>
          This is general information for B2B teams running outbound, not legal advice. Rules vary by jurisdiction and change over time, especially for newer laws like India&apos;s DPDP Act. Confirm specifics with qualified counsel before scaling a campaign into a new market.
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Cold email vs. spam: the actual distinction</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Every cold-email law draws roughly the same line: honest, targeted, professional outreach with a real opt-out is treated differently from deceptive bulk email sent without any way to stop it. None of the four regimes below ban cold outreach outright. They regulate <em>how</em> it&apos;s done: who you can email, what the message has to disclose, and how fast you have to stop when someone asks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Four regimes, four different bars to clear</h2>
              <div className="space-y-4">
                {LAWS.map((l) => (
                  <div key={l.region} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className="text-lg font-black" style={{ color: "#0a0a0a" }}>{l.region}</h3>
                      <span className="text-sm font-bold" style={{ color: "#6366f1" }}>{l.law}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ backgroundColor: "#ffffff", color: "#3D3D3D", border: "1px solid #E8E2D9" }}>{l.basis}</span>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{l.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>A practical compliance checklist</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Most compliance failures we see in outbound audits are unforced errors, not deliberate rule-breaking. This covers you across all four regimes above:
              </p>
              <ul className="space-y-4">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "rgba(99,102,241,0.1)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.25)" }}>{i + 1}</span>
                    <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The compliance and deliverability overlap</h2>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Compliance and inbox placement aren&apos;t separate problems, they reinforce each other. A real unsubscribe link, honest sender identity, and prompt suppression aren&apos;t just legal requirements, they&apos;re exactly the signals email providers use to decide whether your domain is legitimate. Get the legal basics right and your deliverability tends to improve alongside it. For the technical side of that, see our{" "}
                <a href="/blog/cold-email-deliverability-guide" className="font-bold underline" style={{ color: "#6366f1" }}>cold email deliverability guide</a>.
              </p>
            </div>
          </div>

          <Faq badge="FAQ" title="Common questions" items={FAQ_ITEMS.map((f) => ({ q: f.question, a: f.answer }))} />

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want your outbound checked for compliance and deliverability?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We&apos;ll review your sending setup, opt-out handling, and targeting against the rules that apply to your market, and flag anything worth fixing before you scale.
            </p>
            <a href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
