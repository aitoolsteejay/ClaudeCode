import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/agencies-it-usa-software-development";

export const metadata: Metadata = {
  title: "Illustrative Example: Finding a Software Development Partner Fit",
  description: "An illustrative example of how Myntmore's outreach finds US companies that need a custom software development partner. Not a specific past client engagement.",
  keywords: [
    "software development agency lead generation",
    "it services lead generation usa",
    "b2b agency lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Finding a Software Development Partner Fit | Myntmore",
    description: "24 meetings booked · 7 shared project requirements · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Finding a Software Development Partner Fit | Myntmore",
  description: "24 meetings booked · 7 shared project requirements · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function AgenciesItUsaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="agencies-it-usa-software-development"
      tag="Agencies & IT · United States"
      accent="#0891b2"
      title="Reaching companies that need a software development partner"
      intro="An Indian software development firm targeting mid-sized retail and logistics companies in the USA relied on referrals and project marketplaces and wanted more direct conversations with companies needing custom software, integrations, or modernization work."
      heroStats={[
        { value: "24", label: "Meetings booked" },
        { value: "7", label: "Shared project requirements" },
        { value: "4", label: "Proposals requested" },
      ]}
      challengeTitle="Referrals and marketplaces, but no direct pipeline"
      challengeBody={[
        "An Indian software development firm targeting mid-sized retail and logistics companies in the USA relied on referrals and project marketplaces. Its founders wanted more direct conversations with companies needing custom software, integrations, or modernization work.",
      ]}
      approachTitle="Segmented outreach by capability and business context"
      approachBody={[
        "Myntmore built a focused prospect list and identified CTOs, engineering heads, and operations leaders. Outreach was segmented by the client's relevant capabilities and each prospect's business context.",
        "LinkedIn and email messages introduced a specific service and invited a short discovery call. Interested prospects were qualified by project scope, timeline, and decision-making responsibility.",
      ]}
      metrics={[
        { l: "Target companies", v: "180" },
        { l: "Unique decision-makers contacted", v: "360" },
        { l: "Positive replies", v: "43" },
        { l: "Meetings booked", v: "24" },
        { l: "Meetings held", v: "19" },
        { l: "Companies sharing defined project requirements", v: "7" },
        { l: "Companies requesting proposals", v: "4" },
      ]}
      outcomeTitle="A focused set of proposal opportunities"
      outcomeBody="The firm developed four proposal opportunities with clearer scope and timelines, giving its founders a focused set of potential projects to pursue."
      roleBody="Identifying buyers, starting conversations, and booking meetings. The client owned scoping, pricing, and proposal delivery."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
