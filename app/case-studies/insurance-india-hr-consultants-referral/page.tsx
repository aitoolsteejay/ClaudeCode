import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/insurance-india-hr-consultants-referral";

export const metadata: Metadata = {
  title: "Illustrative Example: Developing Referral Relationships With HR Consultants",
  description: "An illustrative example of how Myntmore's outreach develops referral relationships between an Indian benefits brokerage and HR consulting firms. Not a specific past client engagement.",
  keywords: [
    "employee benefits broker lead generation",
    "hr consultancy referral partnership india",
    "b2b insurance lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Developing Referral Relationships With HR Consultants | Myntmore",
    description: "15 meetings booked · 5 partnership discussions · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Developing Referral Relationships With HR Consultants | Myntmore",
  description: "15 meetings booked · 5 partnership discussions · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function InsuranceIndiaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="insurance-india-hr-consultants-referral"
      tag="Insurance · India"
      accent="#92400e"
      title="Developing referral relationships with HR consultants"
      intro="An Indian employee benefits insurance brokerage seeking relationships with HR consulting firms wanted to supplement direct employer outreach with partners already serving relevant business clients."
      heroStats={[
        { value: "15", label: "Meetings booked" },
        { value: "5", label: "Partnership discussions" },
        { value: "2", label: "Referral processes agreed" },
      ]}
      challengeTitle="Direct outreach alone wasn't enough"
      challengeBody={[
        "An Indian employee benefits insurance brokerage seeking relationships with HR consulting firms wanted to supplement direct employer outreach with partners serving relevant business clients.",
      ]}
      approachTitle="Proposing a complementary relationship, not a hard sell"
      approachBody={[
        "Myntmore identified HR consultancies with suitable client profiles and approached founders and practice heads.",
        "Messages proposed an introductory discussion about complementary services. The brokerage handled the assessment and approval of any referral arrangement.",
      ]}
      metrics={[
        { l: "Target consultancies", v: "90" },
        { l: "Unique decision-makers contacted", v: "140" },
        { l: "Positive replies", v: "24" },
        { l: "Meetings booked", v: "15" },
        { l: "Meetings held", v: "12" },
        { l: "Consultancies entering detailed partnership discussions", v: "5" },
        { l: "Consultancies agreeing to a defined referral process", v: "2" },
      ]}
      outcomeTitle="Two referral relationships, no revenue assumed yet"
      outcomeBody="The brokerage established two referral relationships. No employer introductions, policies, or revenue are assumed within the campaign period."
      roleBody="Identifying consultancies, opening conversations, and booking meetings. The brokerage owned assessment and approval of any referral arrangement."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
        { name: "Cold Email Infrastructure", href: "/services/cold-email" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
