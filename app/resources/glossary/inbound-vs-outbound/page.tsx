import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "inbound-vs-outbound";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Inbound vs. Outbound";
const DESCRIPTION = "Inbound marketing attracts prospects who come to you through content, search, or referrals, while outbound marketing proactively reaches out to prospects who haven't found you yet, such as through cold email or LinkedIn.";
const META_DESCRIPTION = "The real difference between inbound and outbound B2B marketing, and why most growing companies need both rather than picking one.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["inbound vs outbound marketing", "inbound vs outbound sales", "difference between inbound and outbound", "b2b inbound outbound"],
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

export default function InboundVsOutboundPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Outreach"
      accent="#F59E0B"
      title={TITLE}
      tagline="Waiting for the right people to find you, versus going and finding them yourself."
      definition="Inbound attracts prospects who come to you through content, search, or referrals; outbound proactively reaches prospects who haven't found you yet, through channels like cold email or LinkedIn."
      body="Inbound compounds over time but is slow to start and hard to aim at a specific account. Outbound is immediate and precisely targetable but takes ongoing effort to sustain. Most companies past their earliest stage run both together rather than treating it as a choice between the two."
      sourceLabel="See all services"
      sourceHref="/services"
      articleSchema={TERM_SCHEMA}
    />
  );
}
