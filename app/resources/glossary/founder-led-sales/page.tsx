import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "founder-led-sales";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Founder-Led Sales";
const DESCRIPTION = "Founder-led sales is a go-to-market approach where the company's founder personally handles early sales conversations, using their own credibility and direct market feedback before a dedicated sales team is hired.";
const META_DESCRIPTION = "What founder-led sales means, why it matters most in the earliest stage of a company, and when it's time to hand it off.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is founder-led sales", "founder-led sales definition", "should founders sell", "founder led sales vs sales team"],
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

export default function FounderLedSalesPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Personal Branding"
      accent="#DB2777"
      title={TITLE}
      tagline="Why the person who understands the problem best should be the one closing the first deals."
      definition="A go-to-market approach where the founder personally runs early sales conversations, using their own credibility and direct customer feedback before any dedicated sales team exists."
      body="No hired rep can sell the vision with the same conviction, or turn an objection into a product fix as fast, as the person who built the thing. The tradeoff is that it doesn't scale: at some point founder time becomes the bottleneck, which is the exact signal to start building the team out."
      sourceLabel="Read: Why Founders Must Sell Before They Scale"
      sourceHref="/blog/founder-led-sales-before-scaling"
      articleSchema={TERM_SCHEMA}
    />
  );
}
