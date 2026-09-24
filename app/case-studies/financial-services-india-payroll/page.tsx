import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/financial-services-india-payroll";

export const metadata: Metadata = {
  title: "Illustrative Example: Building an Outsourced Payroll Pipeline",
  description: "An illustrative example of how Myntmore's outreach builds a pipeline for an Indian outsourced payroll services firm. Not a specific past client engagement.",
  keywords: [
    "payroll services lead generation",
    "outsourced payroll lead generation india",
    "b2b financial services lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Building an Outsourced Payroll Pipeline | Myntmore",
    description: "24 meetings booked · 7 detailed service requirements shared · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Building an Outsourced Payroll Pipeline | Myntmore",
  description: "24 meetings booked · 7 detailed service requirements shared · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function FinancialServicesIndiaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="financial-services-india-payroll"
      tag="Financial Services · India"
      accent="#9333ea"
      title="Building an outsourced payroll pipeline"
      intro="An Indian payroll services firm targeting companies with 100-500 employees depended on referrals and often entered conversations without knowing whether the employer intended to review its payroll arrangements."
      heroStats={[
        { value: "24", label: "Meetings booked" },
        { value: "7", label: "Detailed service requirements shared" },
        { value: "4", label: "Proposals requested" },
      ]}
      challengeTitle="Conversations that started without a real review intent"
      challengeBody={[
        "An Indian payroll services firm targeting companies with 100-500 employees depended on referrals and often entered conversations without knowing whether the employer intended to review its payroll arrangements.",
      ]}
      approachTitle="Establishing review timing before pitching the service"
      approachBody={[
        "Myntmore reached HR heads, finance controllers, and founders at suitable companies. Outreach offered a discussion about payroll operations.",
        "Follow-ups established workforce size, current processes, service gaps, and vendor review timing.",
      ]}
      metrics={[
        { l: "Target companies", v: "180" },
        { l: "Unique decision-makers contacted", v: "320" },
        { l: "Positive replies", v: "40" },
        { l: "Meetings booked", v: "24" },
        { l: "Meetings held", v: "19" },
        { l: "Companies sharing detailed service requirements", v: "7" },
        { l: "Companies requesting proposals", v: "4" },
      ]}
      outcomeTitle="Four proposal opportunities with real operational detail"
      outcomeBody="The firm gained four proposal opportunities with enough operational detail to prepare relevant service scopes."
      roleBody="Identifying buyers, establishing review timing, and booking meetings. The client owned service scoping and proposal delivery."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
