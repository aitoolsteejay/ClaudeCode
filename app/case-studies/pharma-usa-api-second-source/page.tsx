import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/pharma-usa-api-second-source";

export const metadata: Metadata = {
  title: "Illustrative Example: US Buyers Evaluating a Second API Supplier",
  description: "An illustrative example of how Myntmore's pharma outreach finds US buyers evaluating a second API source. Not a specific past client engagement.",
  keywords: [
    "api lead generation usa",
    "pharma ingredient supplier outreach",
    "b2b pharma lead generation",
    "second source api outreach",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: US Buyers Evaluating a Second API Supplier | Myntmore",
    description: "16 sourcing meetings held · 5 technical evaluation requests · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: US Buyers Evaluating a Second API Supplier | Myntmore",
  description: "16 sourcing meetings held · 5 technical evaluation requests · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function PharmaUsaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="pharma-usa-api-second-source"
      tag="Pharma · United States"
      accent="#eab308"
      title="Finding US buyers evaluating a second API supplier"
      intro="An Indian API manufacturer wanted to develop new relationships with US formulation companies. Its sales team had a broad prospect list but struggled to identify which companies had a relevant sourcing requirement right now."
      heroStats={[
        { value: "16", label: "Sourcing meetings held" },
        { value: "5", label: "Technical evaluation requests" },
        { value: "39", label: "Positive replies" },
      ]}
      challengeTitle="A broad list, but no way to find the live need"
      challengeBody={[
        "An Indian API manufacturer wanted to develop new relationships with US formulation companies. Its sales team had a broad prospect list but struggled to identify which companies had a relevant sourcing requirement.",
        "The campaign focused on two selected APIs and buyers willing to discuss an additional supply source.",
      ]}
      approachTitle="A direct question a sourcing head can say yes to"
      approachBody={[
        "Myntmore mapped companies with relevant product portfolios and identified procurement, strategic sourcing, and supply chain leaders.",
        "Outreach opened with a specific question about second-source evaluation. Messages used only the manufacturing and documentation claims approved by the client.",
        "Follow-ups offered a technical conversation with the client's team. Before handover, interested contacts were asked about the API required, the evaluation timeline, and the next step in their supplier review.",
      ]}
      metrics={[
        { l: "Target companies", v: "150" },
        { l: "Unique decision-makers contacted", v: "300" },
        { l: "Positive replies", v: "39" },
        { l: "Meetings booked", v: "21" },
        { l: "Meetings held", v: "16" },
        { l: "Companies requesting technical evaluation", v: "5" },
        { l: "Companies requesting commercial quotations", v: "3" },
      ]}
      outcomeTitle="A focused set of sourcing discussions"
      outcomeBody="Five companies requested a deeper technical evaluation, and three of those also requested quotations. The client gained a focused set of sourcing discussions for its technical and commercial teams to advance."
      roleBody="Creating access to relevant buyers. Supplier qualification and purchasing decisions remained with the buyer and client."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
