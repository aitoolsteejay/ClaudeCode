import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "sales-outreach";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Sales Outreach";
const DESCRIPTION = "Sales outreach is any direct contact a sales team initiates with prospects to start or advance a sales conversation, including cold outreach to new contacts and follow-up with prospects who are already engaged.";
const META_DESCRIPTION = "What sales outreach is, how it differs from cold outreach, and how cold, warm, and hot leads each need a different approach.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is sales outreach", "sales outreach definition", "sales outreach vs cold outreach", "b2b sales outreach"],
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

export default function SalesOutreachPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Outreach"
      accent="#9A3412"
      title={TITLE}
      tagline="Every message a sales team sends to start or move forward a conversation with a prospect, cold or warm."
      definition="Any direct contact a sales team makes with prospects to start or advance a conversation, covering cold outreach to new contacts and follow-ups with people already engaged."
      body="Sales outreach is the broader umbrella: cold outreach is the part aimed at strangers, but outreach also includes following up with warm leads, re-engaging prospects who went quiet, and nurturing existing connections. Each temperature of lead needs a different message, which is why a single template sent to everyone underperforms."
      sourceLabel="Read the related term: Cold Outreach"
      sourceHref="/resources/glossary/cold-outreach"
      furtherLabel="Read the related term: Warm Lead"
      furtherHref="/resources/glossary/warm-lead"
      articleSchema={TERM_SCHEMA}
    />
  );
}
