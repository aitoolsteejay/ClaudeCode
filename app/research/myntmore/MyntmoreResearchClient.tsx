"use client";

import ResearchReport, { type ReportConfig } from "@/components/research/ResearchReport";
import { ACCOUNTS, QUESTIONS, SNAPSHOT_LABEL } from "./data";

const INK = "#0a0a0a";

const CONFIG: ReportConfig = {
  preparedFor: "B2B SaaS founders and sales leaders",
  meta: `Sample account research · snapshot ${SNAPSHOT_LABEL}`,
  headline: "Who to contact this month,",
  headlineAccent: "and why now.",
  intro:
    "A sample of Myntmore's account research: ten B2B software companies with recent public signs that they are building a sales motion. Each one is scored from sourced answers, so you can see exactly why it is on the list. Open any company to see the evidence.",
  extraStat: [7, "questions per company"],
  questions: QUESTIONS,
  accounts: ACCOUNTS,
  leadWithLabel: "How Myntmore would open",
  contactLabel: "Who usually owns this",
  footnote: `Tier 1 means a fit of 70 or more and timing of 7 or more. Tier 2 means a fit of 55 or more. Tier 3 is the rest. Fit and timing are calculated from the answers, not typed in (see "How the scores work"). Times such as "5 weeks ago" are counted from the ${SNAPSHOT_LABEL} snapshot. Check any signal at its source before acting on it.`,
  methodHeading: "How this sample was built",
  method: (
    <>
      <p>We started from public funding announcements in B2B software between July and October 2026 where the company said how it would spend the money, then checked each company's own site, careers page and news page. The ten here are a sample chosen for visible signals. They are not a ranking of the market, and a company missing from the list says nothing about it.</p>
      <p>Every answer links to the page it came from. &ldquo;No evidence found&rdquo; means we did not find it, not that it does not exist. &ldquo;Likely&rdquo; means the evidence is indirect or partly confirmed. Some careers pages print no date, so those answers show the day we checked. Contact names are not included; the suggested role is who usually owns the problem at that kind of company.</p>
      <p><strong style={{ color: INK }}>How the scores work.</strong> Fit is out of 100: selling through a sales team 25, stated go-to-market spend 20, hiring sales roles now 20, funding in the last 12 months 15, a new revenue leader 10, a new product or market 10. A &ldquo;yes&rdquo; earns the full points and a &ldquo;likely&rdquo; half. A strong in-house outbound team is a risk and takes off 15 for a yes, 7 for a likely. Timing is out of 10: funding in the last 90 days 3 (older 2), stated go-to-market spend 2, hiring now 2, a new revenue leader 2, a new product or market 1.</p>
      <p>The companies named here have not reviewed or endorsed this research. If anything is wrong or out of date, email growth@myntmore.com and we will correct it.</p>
    </>
  ),
  closing: {
    lead: "Want a list like this for",
    accent: "your market?",
    body: "Myntmore builds account research around your ideal customer, then runs the outreach and brings back booked meetings.",
    button: "Book a call with Myntmore",
    href: "/book-a-call",
  },
  riskLegend: "Strong in-house outbound found",
  csvName: "myntmore-sample-account-research.csv",
  sourcesLine: "Sources: company press releases, TechCrunch, and company careers and news pages, as linked in each answer. Research by Myntmore, October 2026.",
};

export default function MyntmoreResearchClient() {
  return <ResearchReport config={CONFIG} />;
}
