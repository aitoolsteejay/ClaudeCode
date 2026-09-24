import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "domain-warmup";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Domain Warm-up";
const DESCRIPTION = "Domain warm-up is the process of gradually increasing the volume of email sent from a new domain or mailbox so inbox providers can build up a positive sending reputation before real outreach begins.";
const META_DESCRIPTION = "What domain warm-up is, why skipping it tanks cold email deliverability, and how long a new sending domain actually takes to warm up.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is domain warm-up", "email warm-up definition", "how to warm up a domain for cold email", "new domain sending limits"],
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

export default function DomainWarmupPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Email"
      accent="#15803D"
      title={TITLE}
      tagline="Why a brand-new sending domain has to earn trust in small steps before it can carry real outreach volume."
      definition="Gradually ramping up the volume sent from a new domain or mailbox so inbox providers build a positive sending reputation before full-scale outreach begins."
      body="Inbox providers treat a new domain with no sending history as a risk. Sending hundreds of cold emails from it on day one reads as spam behaviour and can get the domain blacklisted before a single real prospect sees a message, which is why agencies stagger volume up over several weeks instead."
      sourceLabel="Read: Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)"
      sourceHref="/blog/cold-email-deliverability-guide"
      articleSchema={TERM_SCHEMA}
    />
  );
}
