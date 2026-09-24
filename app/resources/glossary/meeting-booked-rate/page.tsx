import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "meeting-booked-rate";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Meeting-Booked Rate";
const DESCRIPTION = "Meeting-booked rate is the percentage of contacted prospects who book a meeting, the metric outbound teams actually optimize for, since replies alone don't fill a pipeline.";
const META_DESCRIPTION = "What meeting-booked rate is, what counts as healthy for cold outreach, and why it matters more than response rate once a campaign is running.";

export const metadata: Metadata = {
  title: `${TITLE} | B2B Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["what is meeting booked rate", "meeting booked rate benchmark", "cold email meetings booked", "good meeting booked rate b2b"],
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

export default function MeetingBookedRatePage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="GTM Strategy"
      accent="#9A3412"
      title={TITLE}
      tagline="The number that actually matters, since a reply that never turns into a meeting never turns into a deal."
      definition="The percentage of contacted prospects who book a meeting, the metric outbound teams actually optimize for, since replies alone don't fill a pipeline."
      body="A campaign can have a strong response rate and a weak meeting-booked rate if the ask is vague or the follow-through is slow, which is why the two are tracked separately rather than as one combined number. A healthy meeting-booked rate for cold outreach is typically in the 4-8% range, though it varies by ICP, offer, and channel."
      sourceLabel="Read: The 2026 B2B Outbound Benchmark Report"
      sourceHref="/blog/b2b-outbound-benchmark-report-2026"
      articleSchema={TERM_SCHEMA}
    />
  );
}
