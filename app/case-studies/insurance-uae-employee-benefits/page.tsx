import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/insurance-uae-employee-benefits";

export const metadata: Metadata = {
  title: "Illustrative Example: Opening Employee Benefits Conversations Before Renewal",
  description: "An illustrative example of how Myntmore's outreach opens employee benefits conversations with UAE employers ahead of renewal. Not a specific past client engagement.",
  keywords: [
    "insurance broker lead generation uae",
    "employee benefits lead generation",
    "b2b insurance lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Opening Employee Benefits Conversations Before Renewal | Myntmore",
    description: "20 meetings booked · 7 benefits reviews agreed · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Opening Employee Benefits Conversations Before Renewal | Myntmore",
  description: "20 meetings booked · 7 benefits reviews agreed · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function InsuranceUaeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="insurance-uae-employee-benefits"
      tag="Insurance · UAE"
      accent="#b45309"
      title="Opening employee benefits conversations before renewal"
      intro="A UAE-based insurance brokerage targeting employers with 50-500 employees often reached companies after their employee benefits renewal decisions were already underway. Its advisers needed earlier access to relevant HR and finance teams."
      heroStats={[
        { value: "20", label: "Meetings booked" },
        { value: "7", label: "Benefits reviews agreed" },
        { value: "4", label: "Quotation exercises requested" },
      ]}
      challengeTitle="Reaching employers after the decision was already underway"
      challengeBody={[
        "A UAE-based insurance brokerage targeting employers with 50-500 employees often reached companies after their employee benefits renewal decisions were already underway. Its advisers needed earlier access to relevant HR and finance teams.",
      ]}
      approachTitle="Establishing renewal timing before the advisory conversation"
      approachBody={[
        "Myntmore built a list of suitable employers and contacted HR directors, finance heads, and business owners.",
        "Client-approved messages offered an introductory discussion about the employer's benefits review process. Follow-ups established renewal timing and interest in a broker-led review. Insurance advice and policy discussions were handled by the client's advisers.",
      ]}
      metrics={[
        { l: "Target employers", v: "160" },
        { l: "Unique decision-makers contacted", v: "280" },
        { l: "Positive replies", v: "35" },
        { l: "Meetings booked", v: "20" },
        { l: "Meetings held", v: "16" },
        { l: "Employers agreeing to a benefits review", v: "7" },
        { l: "Employers requesting quotation exercises", v: "4" },
      ]}
      outcomeTitle="Seven review opportunities ahead of renewal"
      outcomeBody="The brokerage developed seven benefits review opportunities, including four that progressed to quotation requests. The campaign did not assume that quotations would convert into policies."
      roleBody="Finding employers, establishing renewal timing, and booking meetings. The client's advisers owned coverage assessment, recommendations, and any policy discussion."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
