import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "buying-signal";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Buying Signal";
const DESCRIPTION = "A buying signal is an observable event, such as a company hiring for a relevant role or raising funding, that indicates it may be ready to buy a product like yours right now.";
const META_DESCRIPTION = "What buying signals are in B2B sales, common examples, and how they're used to time outbound outreach instead of guessing.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is a buying signal", "buying signals b2b sales", "intent data buying signals", "examples of buying signals"],
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

export default function BuyingSignalPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Targeting"
      accent="#0D9488"
      title={TITLE}
      tagline="The difference between messaging a company that fits, and messaging one that fits and is actually ready."
      definition="An observable event, like a new relevant hire, a funding round, or a leadership change, that suggests a company may be ready to buy right now rather than at some undefined future point."
      body="Fit alone (matching an ICP) tells you a company could be a customer eventually. A buying signal tells you the timing might actually be right, which is why the strongest outbound lists combine ICP fit with recent signals rather than treating a static list as evergreen."
      sourceLabel="See the service: Sales Intelligence"
      sourceHref="/services/sales-intelligence"
      articleSchema={TERM_SCHEMA}
    />
  );
}
