import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "sdr";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "SDR (Sales Development Representative)";
const DESCRIPTION = "A Sales Development Representative (SDR) is the role responsible for prospecting and qualifying leads through outbound outreach, booking meetings for account executives rather than closing deals directly.";
const META_DESCRIPTION = "What a Sales Development Representative (SDR) does, how the role differs from an account executive, and why teams outsource it to agencies.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is an sdr", "sdr meaning sales", "sdr vs account executive", "sales development representative definition"],
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

export default function SdrPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Sales Ops"
      accent="#475569"
      title={TITLE}
      tagline="The role that finds and opens conversations, so the rest of the sales team can focus on closing them."
      definition="The role responsible for prospecting and qualifying leads through outbound outreach, handing off booked meetings to account executives rather than closing deals directly."
      body="Because the job is largely about volume, consistency, and list quality rather than relationship-building, it's one of the easiest sales functions to outsource, which is why many growing teams run it through an agency before hiring it in-house."
      sourceLabel="Read: Agency vs. In-House SDR for B2B Outbound"
      sourceHref="/blog/agency-vs-in-house"
      articleSchema={TERM_SCHEMA}
    />
  );
}
