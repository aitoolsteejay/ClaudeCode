import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/agencies-it-uae-managed-it";

export const metadata: Metadata = {
  title: "Illustrative Example: Opening Managed IT Service Conversations",
  description: "An illustrative example of how Myntmore's outreach opens managed IT conversations with UAE professional services firms. Not a specific past client engagement.",
  keywords: [
    "managed it services lead generation",
    "it services lead generation uae",
    "b2b it lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Opening Managed IT Service Conversations | Myntmore",
    description: "16 meetings booked · 5 service assessments requested · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Opening Managed IT Service Conversations | Myntmore",
  description: "16 meetings booked · 5 service assessments requested · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function AgenciesItUaeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="agencies-it-uae-managed-it"
      tag="Agencies & IT · UAE"
      accent="#0369a1"
      title="Opening managed IT service conversations"
      intro="An IT services provider targeting UAE professional services firms with multiple offices had a sales team that struggled to reach companies actively considering changes to their IT support arrangements."
      heroStats={[
        { value: "16", label: "Meetings booked" },
        { value: "5", label: "Service assessments requested" },
        { value: "3", label: "Managed IT proposals requested" },
      ]}
      challengeTitle="Hard to reach companies at the right moment"
      challengeBody={[
        "An IT services provider targeting UAE professional services firms with multiple offices had a sales team that struggled to reach companies actively considering changes to their IT support arrangements.",
      ]}
      approachTitle="Qualifying by contract timing, not just interest"
      approachBody={[
        "Myntmore contacted IT managers, operations directors, and managing partners. Messages focused on support coverage, office expansion, and vendor review needs.",
        "Interested prospects were qualified by their current setup, contract timing, and service requirements.",
      ]}
      metrics={[
        { l: "Target companies", v: "120" },
        { l: "Unique decision-makers contacted", v: "210" },
        { l: "Positive replies", v: "27" },
        { l: "Meetings booked", v: "16" },
        { l: "Meetings held", v: "13" },
        { l: "Companies requesting service assessments", v: "5" },
        { l: "Companies requesting managed IT proposals", v: "3" },
      ]}
      outcomeTitle="Three proposal opportunities tied to real timing"
      outcomeBody="The provider developed three proposal opportunities informed by each prospect's support requirements and purchasing timeline."
      roleBody="Identifying buyers, qualifying timing, and booking meetings. The client owned the service assessment and proposal delivery."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
