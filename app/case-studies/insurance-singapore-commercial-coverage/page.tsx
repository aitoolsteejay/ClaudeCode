import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/insurance-singapore-commercial-coverage";

export const metadata: Metadata = {
  title: "Illustrative Example: Reaching Businesses Reviewing Commercial Coverage",
  description: "An illustrative example of how Myntmore's outreach reaches Singapore logistics and warehousing businesses reviewing commercial insurance. Not a specific past client engagement.",
  keywords: [
    "commercial insurance lead generation",
    "insurance broker lead generation singapore",
    "b2b insurance lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Reaching Businesses Reviewing Commercial Coverage | Myntmore",
    description: "14 meetings booked · 5 adviser-led reviews agreed · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Reaching Businesses Reviewing Commercial Coverage | Myntmore",
  description: "14 meetings booked · 5 adviser-led reviews agreed · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function InsuranceSingaporeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="insurance-singapore-commercial-coverage"
      tag="Insurance · Singapore"
      accent="#ca8a04"
      title="Reaching businesses reviewing commercial coverage"
      intro="A Singapore-based insurance brokerage targeting logistics and warehousing businesses needed more conversations with companies planning to review their business insurance arrangements."
      heroStats={[
        { value: "14", label: "Meetings booked" },
        { value: "5", label: "Adviser-led reviews agreed" },
        { value: "3", label: "Quotations requested" },
      ]}
      challengeTitle="Too few conversations with businesses actually reviewing coverage"
      challengeBody={[
        "A Singapore-based insurance brokerage targeting logistics and warehousing businesses needed more conversations with companies planning to review their business insurance arrangements. Its advisers needed a steadier source of relevant conversations.",
      ]}
      approachTitle="Asking about review timing, not selling a policy"
      approachBody={[
        "Myntmore identified suitable businesses and contacted finance directors, operations heads, and owners.",
        "Client-approved outreach asked about review timing and offered an introductory meeting. The brokerage's advisers handled coverage assessment and recommendations.",
      ]}
      metrics={[
        { l: "Target companies", v: "100" },
        { l: "Unique decision-makers contacted", v: "180" },
        { l: "Positive replies", v: "23" },
        { l: "Meetings booked", v: "14" },
        { l: "Meetings held", v: "11" },
        { l: "Companies agreeing to an adviser-led review", v: "5" },
        { l: "Companies requesting quotations", v: "3" },
      ]}
      outcomeTitle="Five review opportunities, no policy assumed"
      outcomeBody="The brokerage gained five review opportunities, including three quotation requests. No policy purchases or premium revenue are assumed."
      roleBody="Establishing review timing, finding businesses, and booking meetings. The brokerage's advisers owned coverage assessment and recommendations."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
