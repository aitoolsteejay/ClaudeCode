import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/recruitment-usa-tech-recruitment";

export const metadata: Metadata = {
  title: "Illustrative Example: Winning Specialist Technology Recruitment Briefs",
  description: "An illustrative example of how Myntmore's outreach wins data engineering and analytics recruitment briefs for a US-focused recruitment firm. Not a specific past client engagement.",
  keywords: [
    "tech recruitment lead generation",
    "data engineering recruitment agency usa",
    "b2b recruitment lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Winning Specialist Technology Recruitment Briefs | Myntmore",
    description: "20 meetings booked · 7 hiring briefs shared · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Winning Specialist Technology Recruitment Briefs | Myntmore",
  description: "20 meetings booked · 7 hiring briefs shared · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function RecruitmentUsaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="recruitment-usa-tech-recruitment"
      tag="Recruitment & Staffing · United States"
      accent="#059669"
      title="Winning specialist technology recruitment briefs"
      intro="A recruitment firm specializing in data engineering and analytics roles for US businesses had candidate expertise but struggled to identify employers open to external recruitment support."
      heroStats={[
        { value: "20", label: "Meetings booked" },
        { value: "7", label: "Hiring briefs shared" },
        { value: "3", label: "Searches authorized" },
      ]}
      challengeTitle="Strong candidate pipeline, unclear employer demand"
      challengeBody={[
        "A recruitment firm specializing in data engineering and analytics roles for US businesses had candidate expertise but struggled to identify employers open to external recruitment support.",
      ]}
      approachTitle="Targeting live vacancies, not cold employer lists"
      approachBody={[
        "Myntmore identified companies advertising relevant vacancies and contacted talent acquisition leaders and engineering managers.",
        "Outreach introduced the firm's specialization and qualified interest by hiring urgency, role requirements, and agency engagement process.",
      ]}
      metrics={[
        { l: "Target employers", v: "150" },
        { l: "Unique decision-makers contacted", v: "270" },
        { l: "Positive replies", v: "33" },
        { l: "Meetings booked", v: "20" },
        { l: "Meetings held", v: "16" },
        { l: "Employers sharing hiring briefs", v: "7" },
        { l: "Employers authorizing searches", v: "3" },
      ]}
      outcomeTitle="Three authorized searches, no placements assumed"
      outcomeBody="The firm gained three employers with authorized searches. No completed placements or recruitment fees are assumed."
      roleBody="Identifying employers with live vacancies and booking meetings. The client's consultants owned the search and candidate placement."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
