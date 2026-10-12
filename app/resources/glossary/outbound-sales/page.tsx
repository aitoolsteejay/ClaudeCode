import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "outbound-sales";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Outbound Sales";
const DESCRIPTION = "Outbound sales is a sales model in which the seller initiates contact with targeted prospects through channels such as cold email, LinkedIn, and phone, rather than waiting for inbound inquiries.";
const META_DESCRIPTION = "What outbound sales is, how it compares with inbound, and why B2B companies use it to control the pace of pipeline growth.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is outbound sales", "outbound sales definition", "b2b outbound sales", "outbound vs inbound sales"],
  openGraph: {
    title: `${TITLE} | Myntmore Glossary`,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const TERM_SCHEMA = buildDefinedTermSchema({
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inDefinedTermSet: `${SITE_URL}/resources/glossary`,
});

export default function OutboundSalesPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Outreach"
      accent="#A16207"
      title={TITLE}
      tagline="A sales motion where your team picks the target and makes the first move, instead of waiting for leads to arrive."
      definition="A sales model where the seller initiates contact with targeted prospects, through cold email, LinkedIn, or calls, rather than waiting for buyers to come in through marketing."
      body="Outbound's main advantage is control: you choose which companies to pursue and how many conversations to start each week, instead of depending on whoever happens to find you. Its main risk is relevance, since outbound that isn't tightly targeted reads as spam and burns both your sending domain and your reputation."
      sourceLabel="Read: B2B Outbound Sales: What It Is & How It Works"
      sourceHref="/blog/what-is-b2b-outbound-sales"
      furtherLabel="Read the related term: Inbound vs. Outbound"
      furtherHref="/resources/glossary/inbound-vs-outbound"
      articleSchema={TERM_SCHEMA}
    />
  );
}
