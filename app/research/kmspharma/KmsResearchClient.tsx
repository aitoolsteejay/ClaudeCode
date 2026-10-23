"use client";

import ResearchReport, { type ReportConfig } from "@/components/research/ResearchReport";
import { ACCOUNTS, QUESTIONS, WINDOWS } from "./data";

const INK = "#0a0a0a";

const CONFIG: ReportConfig = {
  preparedFor: "KMS Pharma",
  meta: "KMS Health Center, Chennai \u00b7 research snapshot 20 October 2026",
  headline: "Who should license KMS's next dossier,",
  headlineAccent: "and why now.",
  intro: "Ten generic and specialty pharma companies whose recent moves suggest they are looking for products to license, acquire or co-develop. Each one is scored against KMS's current pipeline. Open any company to see the evidence and sources behind every answer.",
  extraStat: [68, "KMS products matched"],
  questions: QUESTIONS,
  accounts: ACCOUNTS,
  leadWithLabel: "What KMS should lead with",
  contactLabel: "Who to contact",
  footnote: "Tier 1 means contact now. Tier 2 is high priority. Tier 3 is worth nurturing. Fit is out of 100; timing is out of 10. Times such as \u201c6 days ago\u201d are counted from the 20 October 2026 snapshot. Contact names are not included; the suggested role is who usually owns in-licensing at that type of company.",
  windows: {
    heading: "Market windows for KMS products",
    intro: "Product-level changes found during the research. These affect which KMS product to lead with, whichever account you approach.",
    items: WINDOWS,
  },
  methodHeading: "How this list was built",
  method: (
    <>
            <p>We started from KMS&apos;s published portfolio: 21 generic dossiers, 17 niche reformulations, 5 injectables and 25 nutraceuticals, offered through dossier development, compilation, co-development, technology transfer and commercial supply. We then looked for companies that commercialise products developed by others, sell in KMS&apos;s filing markets, and have done something in the last 12 to 18 months that points to active buying.</p>
            <p>Every answer links to its public source. &ldquo;Likely&rdquo; means the evidence is older, indirect, or not fully confirmed. Before outreach, check that no account already holds rights to the product being pitched, especially where KMS has signed exclusivity (ivermectin cream in the Nordics, UK products).</p>
            <p><strong style={{ color: INK }}>Excluded as existing KMS clients:</strong> Sun Pharma, Cipla, Mankind, MSN, Shilpa, Eywa Pharma, Atnahs, JAMP Pharma, Bionpharma, Nivagen, Xepa-Soul Pattinson, Remedica, Celltrion, Acino, Biopharm, Changzhou Pharmaceutical Factory, Developharma and Neo Health. These are also the reference profile for finding lookalikes.</p>
    </>
  ),
  closing: {
    lead: "Want us to take this to",
    accent: "first conversations?",
    body: "Myntmore can run the outreach for the Tier 1 and Tier 2 accounts and bring back booked calls.",
    button: "Book a call with Myntmore",
    href: "/book-a-call",
  },
  riskLegend: "Build risk confirmed",
  csvName: "kms-pharma-partner-accounts.csv",
  sourcesLine: "Sources: company websites, SEC filings, press releases and trade press, as linked in each answer. Research by Myntmore, October 2026.",
};

export default function KmsResearchClient() {
  return <ResearchReport config={CONFIG} />;
}
