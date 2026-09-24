import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/agencies-it-usa-conversion-optimization";

export const metadata: Metadata = {
  title: "Illustrative Example: Finding Buyers for a Conversion Optimization Agency",
  description: "An illustrative example of how Myntmore's outreach finds US e-commerce brands for a conversion optimization agency. Not a specific past client engagement.",
  keywords: [
    "conversion optimization agency lead generation",
    "cro agency lead generation usa",
    "b2b agency lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Finding Buyers for a Conversion Optimization Agency | Myntmore",
    description: "20 meetings booked · 6 website assessments requested · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Finding Buyers for a Conversion Optimization Agency | Myntmore",
  description: "20 meetings booked · 6 website assessments requested · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function AgenciesItUsaCroCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="agencies-it-usa-conversion-optimization"
      tag="Agencies & IT · United States"
      accent="#2563eb"
      title="Finding buyers for a conversion optimization agency"
      intro="A conversion optimization agency targeting US e-commerce brands relied on founder referrals and wanted to reach brands interested in improving their existing online stores."
      heroStats={[
        { value: "20", label: "Meetings booked" },
        { value: "6", label: "Website assessments requested" },
        { value: "3", label: "Project proposals requested" },
      ]}
      challengeTitle="Growth capped by the founder's own network"
      challengeBody={[
        "A conversion optimization agency targeting US e-commerce brands relied on founder referrals. It wanted to reach brands interested in improving their existing online stores.",
      ]}
      approachTitle="Opening on the prospect's own conversion priorities"
      approachBody={[
        "Myntmore identified relevant brands and contacted e-commerce heads, marketing directors, and founders.",
        "Outreach introduced the agency's client-approved capabilities and offered a discovery call about the prospect's conversion priorities.",
      ]}
      metrics={[
        { l: "Target companies", v: "160" },
        { l: "Unique decision-makers contacted", v: "280" },
        { l: "Positive replies", v: "34" },
        { l: "Meetings booked", v: "20" },
        { l: "Meetings held", v: "16" },
        { l: "Companies requesting a scoped website assessment", v: "6" },
        { l: "Companies requesting project proposals", v: "3" },
      ]}
      outcomeTitle="Three proposal opportunities with defined objectives"
      outcomeBody="The agency gained three proposal opportunities with defined business objectives and an agreed scope for further discussion."
      roleBody="Identifying buyers, starting conversations, and booking meetings. The client owned the website assessment, scoping, and proposal delivery."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
