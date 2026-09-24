import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "can-spam-act";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "CAN-SPAM Act";
const DESCRIPTION = "The CAN-SPAM Act is a US law that sets the rules for commercial email, requiring accurate sender information, a working unsubscribe mechanism, and honest subject lines, with penalties for violations.";
const META_DESCRIPTION = "What the CAN-SPAM Act requires for commercial email, who it applies to, and what B2B cold email needs to stay compliant with it.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is can-spam act", "can-spam compliance", "can-spam act cold email", "can-spam requirements"],
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

export default function CanSpamActPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Compliance"
      accent="#DC2626"
      title={TITLE}
      tagline="The US law that decides what a compliant cold email actually has to include."
      definition="A US federal law governing commercial email, requiring accurate sender details, a clear physical address, a working unsubscribe link, and non-deceptive subject lines."
      body="Unlike some other regions, the US doesn't require prior opt-in for B2B cold email, which is what makes cold outreach legally viable there in the first place. But every message still needs an honest 'From' line and a real way to opt out, and violations carry real financial penalties per email."
      sourceLabel="Read: Cold Email Compliance: CAN-SPAM, GDPR & DPDP"
      sourceHref="/blog/cold-email-compliance-guide"
      articleSchema={TERM_SCHEMA}
    />
  );
}
