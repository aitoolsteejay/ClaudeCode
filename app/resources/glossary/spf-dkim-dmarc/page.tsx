import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "spf-dkim-dmarc";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "SPF, DKIM & DMARC";
const DESCRIPTION = "SPF, DKIM, and DMARC are three DNS-based email authentication records. SPF lists which servers may send for a domain, DKIM cryptographically signs each message to prove it wasn't altered, and DMARC tells receiving inboxes what to do if either check fails.";
const META_DESCRIPTION = "SPF, DKIM, and DMARC explained in plain English: the DNS records that prove a cold email actually came from your domain, and why they decide inbox placement.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is spf dkim dmarc", "email authentication explained", "cold email dns records", "dmarc for cold email"],
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

export default function SpfDkimDmarcPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Email"
      accent="#16A34A"
      title={TITLE}
      tagline="The three DNS records that decide whether a cold email lands in the inbox or the spam folder."
      definition="Three DNS records that prove a cold email actually came from your domain and wasn't altered in transit, and tell inboxes what to do if that check fails."
      body="Without them, a receiving mail server has no way to confirm a message is genuine, so it defaults to suspicion, which is why cold email without proper authentication so often lands in spam regardless of how good the copy is."
      sourceLabel="Read: Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)"
      sourceHref="/blog/cold-email-deliverability-guide"
      articleSchema={TERM_SCHEMA}
    />
  );
}
