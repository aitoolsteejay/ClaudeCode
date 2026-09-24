import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/recruitment-singapore-contract-staffing";

export const metadata: Metadata = {
  title: "Illustrative Example: Developing Contract Staffing Opportunities",
  description: "An illustrative example of how Myntmore's outreach develops contract staffing opportunities for a Singapore-based temporary staffing firm. Not a specific past client engagement.",
  keywords: [
    "contract staffing lead generation",
    "temporary staffing firm lead generation singapore",
    "b2b recruitment lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Developing Contract Staffing Opportunities | Myntmore",
    description: "17 meetings booked · 6 staffing requirements shared · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Developing Contract Staffing Opportunities | Myntmore",
  description: "17 meetings booked · 6 staffing requirements shared · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function RecruitmentSingaporeCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="recruitment-singapore-contract-staffing"
      tag="Recruitment & Staffing · Singapore"
      accent="#15803d"
      title="Developing contract staffing opportunities"
      intro="A Singapore-based staffing firm providing temporary finance and administrative personnel had uneven demand, and its sales team needed earlier visibility into employers' project and temporary coverage requirements."
      heroStats={[
        { value: "17", label: "Meetings booked" },
        { value: "6", label: "Staffing requirements shared" },
        { value: "3", label: "Candidate submissions approved" },
      ]}
      challengeTitle="Uneven demand, late visibility into employer needs"
      challengeBody={[
        "A Singapore-based staffing firm providing temporary finance and administrative personnel had uneven demand, and its sales team needed earlier visibility into employers' project and temporary coverage requirements.",
      ]}
      approachTitle="Qualifying by role, duration, and start date"
      approachBody={[
        "Myntmore contacted HR directors, finance heads, and operations leaders at relevant employers. Messages asked about upcoming temporary staffing needs.",
        "Interested prospects were qualified by role, assignment duration, start date, and purchasing process.",
      ]}
      metrics={[
        { l: "Target employers", v: "130" },
        { l: "Unique decision-makers contacted", v: "230" },
        { l: "Positive replies", v: "29" },
        { l: "Meetings booked", v: "17" },
        { l: "Meetings held", v: "13" },
        { l: "Employers sharing staffing requirements", v: "6" },
        { l: "Employers approving terms and requesting submissions", v: "3" },
      ]}
      outcomeTitle="Three opportunities ready for candidate submissions"
      outcomeBody="The staffing firm gained three opportunities ready for candidate submissions, with defined roles and assignment timelines. No staff starts or billing are assumed."
      roleBody="Identifying employers with live staffing needs and booking meetings. The client's team owned candidate submission and placement."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
