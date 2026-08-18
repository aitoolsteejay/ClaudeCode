import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/cold-email-deliverability-guide",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "Cold Email Deliverability: Why Emails Land in Spam",
  description: "A technical guide to cold email deliverability: domain setup, warming, sending limits, and why most cold email campaigns fail before a single human ever reads them.",
  alternates: { canonical: "https://www.myntmore.com/blog/cold-email-deliverability-guide" },
  keywords: ["cold email deliverability", "how to improve cold email deliverability", "why cold emails go to spam", "email warm up process", "spf dkim dmarc setup", "cold email sending domains", "domain warm up for cold email", "cold email sending limits", "inbox placement test", "cold email spam checker", "how many cold emails per day per inbox", "bounce rate for cold email", "separate sending domain for cold outreach", "email authentication for outbound", "cold email deliverability checklist", "fixing low inbox placement rate"],
  openGraph: {
    title: "Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)",
    description: "The technical guide to getting cold emails into the inbox, not the spam folder.",
    url: "https://www.myntmore.com/blog/cold-email-deliverability-guide",
  },
};

export default function ColdEmailDeliverability() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Cold Email · 6 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            You can write the best cold email in the world and it will not matter if it never reaches the inbox. Deliverability is the silent killer of outbound, and most founders don&apos;t even know it is happening to them.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "21%", source: "of all cold emails never reach the inbox", cite: "Validity Report" },
            { stat: "45 days", source: "minimum domain warm-up period before full volume", cite: "Instantly.ai Data" },
            { stat: "3x", source: "inbox rate improvement from proper DNS setup", cite: "Lemlist Research" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>Source: {s.cite}</p>
            </div>
          ))}
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {[
              {
                heading: "The deliverability problem no one talks about",
                body: "When a cold email campaign underperforms, most people blame the copy. They rewrite the subject line, try a new CTA, and send again. But the real problem is often invisible: their emails are going to spam before a single human sees them. Google and Outlook use dozens of signals to decide whether your email is legitimate outreach or bulk spam. Get those signals wrong and you are blacklisted, sometimes permanently.",
              },
              {
                heading: "The three DNS records you must have",
                body: null,
                list: [
                  "SPF (Sender Policy Framework): This tells email providers which servers are authorised to send emails from your domain. Without it, any server can claim to send email as you, which is a major spam signal. Set this up before you send a single email.",
                  "DKIM (DomainKeys Identified Mail): This adds a digital signature to your emails that proves they haven't been tampered with in transit. ESPs like Google and Outlook heavily weight DKIM when deciding inbox vs spam.",
                  "DMARC (Domain-based Message Authentication): This is the policy layer on top of SPF and DKIM. It tells receiving servers what to do with emails that fail authentication: reject, quarantine, or pass. At minimum, set it to p=none to start collecting data on your domain's email traffic.",
                ],
              },
              {
                heading: "Why you need separate sending domains",
                body: "Never send cold email from your primary domain. Ever. If your primary domain gets flagged or blacklisted, you lose your business email. Instead, set up two to three lookalike domains: variations of your main domain like getmyntmore.com or trymyntmore.com. Buy them, set up the DNS records, and warm them up separately. If one gets burned, you still have others running.",
              },
              {
                heading: "Domain warm-up: the step most people skip",
                body: "A brand-new domain sending 500 emails on day one is a massive spam signal. Email providers expect new domains to ramp up slowly. The warm-up process means starting with 5–10 emails per day per inbox, sending to real addresses with positive engagement, and increasing volume by 10–20% every few days. Tools like Instantly, Lemwarm, and Mailreach automate this. Plan for 4–6 weeks before you hit full volume.",
              },
              {
                heading: "Sending limits that keep you safe",
                body: null,
                numbered: [
                  "Per inbox limit: Keep it under 30–40 emails per day per inbox. Going above this is a deliverability risk regardless of how well-warmed the domain is.",
                  "Reply rate monitoring: If your reply rate drops below 1%, stop and diagnose. Either your list quality has dropped or you are hitting spam traps.",
                  "Bounce rate cap: Keep hard bounces under 2%. High bounce rates tell providers your list is unverified and are a fast track to being flagged.",
                  "Unsubscribe handling: Always honour unsubscribes immediately. Include a plain-text unsubscribe option in every email. Not just for compliance: it is a deliverability signal too.",
                ],
              },
              {
                heading: "The inbox placement test",
                body: "Before running any campaign, run a seed list test using a tool like GlockApps or Mail-Tester. These tools show you exactly where your emails are landing: primary inbox, promotions tab, or spam, across Gmail, Outlook, and Yahoo. If you are below 85% inbox placement, fix your infrastructure before spending any more time on copy.",
              },
              {
                heading: "The write-once, compound-forever mindset",
                body: "Good deliverability infrastructure is built once and maintained. Spend the two weeks upfront to get it right: domains, DNS, warm-up, limits, and you will have a stable outbound channel for years. Skip it and you will be constantly wondering why your open rates are collapsing.",
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                {section.body && <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>}
                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.numbered && (
                  <ol className="space-y-4">
                    {section.numbered.map((item, i) => (
                      <li key={i} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to audit your cold email infrastructure?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We&apos;ll review your domains, DNS setup, warm-up status, and sending limits, and tell you exactly what to fix to improve inbox placement.
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
