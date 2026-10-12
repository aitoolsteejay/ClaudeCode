import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "buyer-engagement";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Buyer Engagement";
const DESCRIPTION = "Buyer engagement, also called prospect engagement, refers to the measurable interactions a prospect has with a seller's outreach and content, such as replies, clicks, and meetings, used to gauge interest and prioritize follow-up.";
const ALSO_KNOWN_AS = ["Prospect Engagement"];
const META_DESCRIPTION = "What buyer engagement and prospect engagement mean in B2B sales, which signals count, and how teams use them to prioritize follow-up.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is buyer engagement", "prospect engagement definition", "buyer engagement b2b", "prospect engagement"],
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
  alternateName: ALSO_KNOWN_AS,
});

export default function BuyerEngagementPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="GTM Strategy"
      accent="#A21CAF"
      title={TITLE}
      alsoKnownAs={ALSO_KNOWN_AS}
      tagline="How actively a prospect is interacting with you, and the signal that tells sales who to focus on next."
      definition="The measurable ways a prospect interacts with your outreach and content, such as replies, profile views, link clicks, and meetings, used to judge interest and prioritize follow-up."
      body="Not all engagement is equal: a reply or a booked meeting says far more than an email open, which privacy features now make unreliable anyway. Teams feed the stronger signals into lead scoring, so hot prospects get a fast, personal follow-up while lightly engaged ones stay in a nurture sequence."
      sourceLabel="Read the related term: Lead Scoring"
      sourceHref="/resources/glossary/lead-scoring"
      furtherLabel="Read: Outbound Success: Conversations, Not Sends"
      furtherHref="/blog/conversations-not-impressions-outbound"
      articleSchema={TERM_SCHEMA}
    />
  );
}
