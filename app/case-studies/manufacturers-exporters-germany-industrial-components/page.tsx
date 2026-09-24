import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/manufacturers-exporters-germany-industrial-components";

export const metadata: Metadata = {
  title: "Illustrative Example: Finding Overseas Buyers for Industrial Components",
  description: "An illustrative example of how Myntmore's outreach finds German buyers for an Indian precision components manufacturer. Not a specific past client engagement.",
  keywords: [
    "industrial component export lead generation",
    "manufacturer lead generation germany",
    "b2b export lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Finding Overseas Buyers for Industrial Components | Myntmore",
    description: "18 meetings booked · 6 requests for quotation · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Finding Overseas Buyers for Industrial Components | Myntmore",
  description: "18 meetings booked · 6 requests for quotation · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function ManufacturersExportersGermanyCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="manufacturers-exporters-germany-industrial-components"
      tag="Manufacturers & Exporters · Germany"
      accent="#1d4ed8"
      title="Finding overseas buyers for industrial components"
      intro="An Indian precision components manufacturer targeting machinery and industrial equipment companies in Germany depended on existing customers and trade exhibitions for export growth. The company wanted to reach buyers whose component requirements matched its production capabilities."
      heroStats={[
        { value: "18", label: "Meetings booked" },
        { value: "6", label: "Requests for quotation" },
        { value: "3", label: "Sample requests" },
      ]}
      challengeTitle="Export growth dependent on existing customers and exhibitions"
      challengeBody={[
        "An Indian precision components manufacturer targeting machinery and industrial equipment companies in Germany depended on existing customers and trade exhibitions for export growth. The company wanted to reach buyers whose component requirements matched its production capabilities.",
      ]}
      approachTitle="Leading with materials, machining, and capacity"
      approachBody={[
        "Myntmore mapped relevant equipment manufacturers and contacted procurement heads, sourcing managers, and supplier development teams.",
        "Outreach highlighted client-approved information about materials, machining capabilities, and production capacity. Interested buyers were qualified by component requirements, expected volumes, and supplier evaluation timelines.",
      ]}
      metrics={[
        { l: "Target companies", v: "130" },
        { l: "Unique decision-makers contacted", v: "260" },
        { l: "Positive replies", v: "31" },
        { l: "Meetings booked", v: "18" },
        { l: "Meetings held", v: "14" },
        { l: "Companies sharing requests for quotation", v: "6" },
        { l: "Companies requesting samples for evaluation", v: "3" },
      ]}
      outcomeTitle="Six specific quotation opportunities"
      outcomeBody="The manufacturer gained six specific quotation opportunities, with three progressing to sample requests. Its technical and commercial teams owned quotation preparation, sampling, and buyer qualification."
      roleBody="Identifying buyers, starting conversations, and booking meetings. The client owned quotation preparation, sampling, and supplier qualification."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
