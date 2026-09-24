import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/manufacturers-exporters-uae-kitchen-equipment";

export const metadata: Metadata = {
  title: "Illustrative Example: Building a Distributor Shortlist in the UAE",
  description: "An illustrative example of how Myntmore's outreach builds a UAE distributor shortlist for a commercial kitchen equipment manufacturer. Not a specific past client engagement.",
  keywords: [
    "commercial kitchen equipment lead generation",
    "distributor outreach uae manufacturer",
    "b2b export lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Building a Distributor Shortlist in the UAE | Myntmore",
    description: "14 meetings booked · 4 distributors shortlisted · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Building a Distributor Shortlist in the UAE | Myntmore",
  description: "14 meetings booked · 4 distributors shortlisted · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function ManufacturersExportersUaeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="manufacturers-exporters-uae-kitchen-equipment"
      tag="Manufacturers & Exporters · UAE"
      accent="#1e40af"
      title="Building a distributor shortlist for commercial kitchen equipment"
      intro="An Indian commercial kitchen equipment manufacturer seeking UAE distribution partners had previous inquiries come from businesses with varying customer coverage and technical service capabilities, making partner selection difficult."
      heroStats={[
        { value: "14", label: "Meetings booked" },
        { value: "4", label: "Distributors shortlisted" },
        { value: "2", label: "Progressed to commercial discussions" },
      ]}
      challengeTitle="Inbound interest, but no way to compare partner fit"
      challengeBody={[
        "An Indian commercial kitchen equipment manufacturer seeking UAE distribution partners had previous inquiries come from businesses with varying customer coverage and technical service capabilities, making partner selection difficult.",
      ]}
      approachTitle="Qualifying on installation and after-sales support, not just interest"
      approachBody={[
        "Myntmore identified equipment distributors and project suppliers, then contacted owners and commercial heads.",
        "Follow-ups explored product fit, customer segments, installation support, and after-sales capabilities.",
      ]}
      metrics={[
        { l: "Target companies", v: "65" },
        { l: "Unique decision-makers contacted", v: "110" },
        { l: "Positive replies", v: "22" },
        { l: "Meetings booked", v: "14" },
        { l: "Meetings held", v: "11" },
        { l: "Companies shortlisted for due diligence", v: "4" },
        { l: "Companies progressing to commercial discussions", v: "2" },
      ]}
      outcomeTitle="A focused partner shortlist"
      outcomeBody="The manufacturer developed a focused partner shortlist, with two companies discussing commercial terms and support responsibilities."
      roleBody="Identifying distributors, qualifying fit, and booking meetings. The client owned due diligence and commercial terms."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
