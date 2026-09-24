import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/financial-services-singapore-outsourced-cfo";

export const metadata: Metadata = {
  title: "Illustrative Example: Finding Businesses That Need Outsourced Finance Support",
  description: "An illustrative example of how Myntmore's outreach finds Singapore businesses that need outsourced CFO and accounting support. Not a specific past client engagement.",
  keywords: [
    "outsourced cfo lead generation",
    "accounting firm lead generation singapore",
    "b2b financial services lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Finding Businesses That Need Outsourced Finance Support | Myntmore",
    description: "19 meetings booked · 6 needs assessments requested · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Finding Businesses That Need Outsourced Finance Support | Myntmore",
  description: "19 meetings booked · 6 needs assessments requested · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function FinancialServicesSingaporeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="financial-services-singapore-outsourced-cfo"
      tag="Financial Services · Singapore"
      accent="#7c3aed"
      title="Finding businesses that need outsourced finance support"
      intro="A Singapore-based outsourced CFO and accounting firm targeting growing businesses relied mostly on accountants and founder referrals and wanted to reach businesses needing better cash-flow visibility, management reporting, and financial planning."
      heroStats={[
        { value: "19", label: "Meetings booked" },
        { value: "6", label: "Needs assessments requested" },
        { value: "3", label: "Proposals requested" },
      ]}
      challengeTitle="New clients almost entirely through referrals"
      challengeBody={[
        "A Singapore-based outsourced CFO and accounting firm targeting growing businesses in Singapore found most new clients came through accountants and founder referrals. The firm wanted to reach businesses needing better cash-flow visibility, management reporting, and financial planning.",
      ]}
      approachTitle="Opening on a specific operational need, not a service pitch"
      approachBody={[
        "Myntmore identified businesses matching the firm's preferred size and service requirements, then contacted founders, managing directors, and finance leaders.",
        "Outreach focused on specific operational needs, such as preparing monthly management reports or adding senior finance support. Interested contacts were qualified by their current finance setup and the support they wanted.",
      ]}
      metrics={[
        { l: "Target companies", v: "140" },
        { l: "Unique decision-makers contacted", v: "250" },
        { l: "Positive replies", v: "32" },
        { l: "Meetings booked", v: "19" },
        { l: "Meetings held", v: "15" },
        { l: "Companies requesting a detailed needs assessment", v: "6" },
        { l: "Companies requesting service proposals", v: "3" },
      ]}
      outcomeTitle="Three proposal opportunities with clear requirements"
      outcomeBody="The firm gained three proposal opportunities for recurring finance support, supported by a clearer understanding of each prospect's requirements."
      roleBody="Identifying buyers, starting conversations, and booking meetings. The client owned needs assessment, scoping, and proposal delivery."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
