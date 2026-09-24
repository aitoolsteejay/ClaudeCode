import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "hot-lead";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Hot Lead";
const DESCRIPTION = "A hot lead is a prospect showing clear, immediate buying intent, replying with interest, asking pricing questions, requesting a call, who should be followed up with within hours, not days.";
const META_DESCRIPTION = "What counts as a hot lead in B2B outbound, how it differs from a warm lead, and why response speed matters more here than anywhere else in the funnel.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is a hot lead", "hot lead definition b2b", "hot vs warm lead", "hot lead follow up time"],
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

export default function HotLeadPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="GTM Strategy"
      accent="#B91C1C"
      title={TITLE}
      tagline="The lead where speed matters more than polish, because someone else's slower reply is the actual competition."
      definition="A prospect showing clear, immediate buying intent, replying with interest, asking pricing questions, requesting a call, who should be followed up with within hours, not days."
      body="A hot lead isn't defined by fit alone, plenty of well-fitted ICP matches never engage. It's defined by an explicit signal that they're actively evaluating right now, which is exactly why response time on a hot lead matters more than on any other stage of the pipeline: the interest is real but perishable."
      sourceLabel="Read the related term: Buying Signal"
      sourceHref="/resources/glossary/buying-signal"
      articleSchema={TERM_SCHEMA}
    />
  );
}
