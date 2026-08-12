// Plain data module (no "use client") so both the client-side FAQ accordion
// component and server-side pages building FAQPage JSON-LD can import the
// exact same array. Exporting this from FAQ.tsx directly doesn't work: a
// "use client" file's exports become opaque client references when consumed
// from a server component, so a server component can't actually read the
// array's contents (Next.js throws "Attempted to call map() from the server
// but map is on the client").
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can we expect results?",
    answer:
      "Most clients start seeing qualified meetings booked within 3–4 weeks of campaign launch. The first two weeks are focused on ICP finalization, copy development, and infrastructure setup. By week 3, sequences are live. By week 4, you're typically seeing replies and booked calls. Full momentum consistent meeting volume usually hits by week 6–8 as we optimize based on real response data.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work primarily with B2B companies SaaS, fintech, professional services, HR tech, martech, and enterprise software. We've run campaigns for companies selling to SMBs, mid-market, and enterprise buyers. If your target audience is a business buyer (founder, executive, or department head) and your deal size justifies outbound, we can build a program that works.",
  },
  {
    question: "Do you handle copywriting and strategy?",
    answer:
      "Yes completely. We own the entire outbound function from strategy through execution. That includes ICP research, campaign architecture, sequence copywriting, LinkedIn messaging, A/B testing, and performance reporting. Your team's only job is to show up to the calls we book. We do require a 1–2 hour onboarding call to absorb your positioning and customer intelligence, but from there we take it off your plate.",
  },
  {
    question: "What's the minimum engagement?",
    answer:
      "Our minimum engagement is a 3-month retainer. Outbound is a compounding channel the data you gather in month one makes month two better, and month two makes month three stronger. We don't do one-off campaigns because they don't generate the results we stand behind. After month three, engagements move to month-to-month with 30-day notice.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We report on a clear set of metrics every week: emails sent, open rates, reply rates (positive, neutral, negative), meetings booked, and show rates. At the account level, we track pipeline generated and closed-won attribution where your CRM allows it. We set upfront targets in your first campaign brief and hold ourselves accountable to them if we're not hitting benchmarks, we tell you why and what we're doing about it.",
  },
  {
    question: "Do you integrate with our CRM?",
    answer:
      "Yes. We support HubSpot, Salesforce, Pipedrive, and most other major CRMs. When a meeting is booked, we log the contact, the touchpoint history, and notes from the conversation directly into your CRM so your AE has full context before the call. We can also sync campaign activity for attribution reporting. Setup is part of your onboarding process.",
  },
];
