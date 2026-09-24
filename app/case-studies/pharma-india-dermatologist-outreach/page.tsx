import type { Metadata } from "next";
import IllustrativeCaseStudy from "@/components/case-studies/IllustrativeCaseStudy";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/case-studies/pharma-india-dermatologist-outreach";

export const metadata: Metadata = {
  title: "Illustrative Example: Reaching Dermatologists Beyond Field Coverage",
  description: "An illustrative example of how Myntmore's pharma outreach reaches specialist doctors beyond a field team's coverage, for a product launch across India. Not a specific past client engagement.",
  keywords: [
    "pharma doctor outreach india",
    "dermatologist outreach campaign",
    "pharma cme webinar outreach",
    "b2b pharma lead generation",
  ],
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Illustrative Example: Reaching Dermatologists Beyond Field Coverage | Myntmore",
    description: "72 webinar attendees · 24 medical-team discussions · illustrative example, not a real client result",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Illustrative Example: Reaching Dermatologists Beyond Field Coverage | Myntmore",
  description: "72 webinar attendees · 24 medical-team discussions · illustrative example, not a real client result",
  url: URL,
  datePublished: "2026-09-24T10:00:00+05:30",
  dateModified: "2026-09-24T10:00:00+05:30",
});

export default function PharmaIndiaCaseStudy() {
  return (
    <IllustrativeCaseStudy
      slug="pharma-india-dermatologist-outreach"
      tag="Pharma · India"
      accent="#6366f1"
      title="Reaching dermatologists beyond the field team's coverage"
      intro="An Indian dermatology company wanted to support a product launch across eight cities where its medical representatives had limited coverage."
      heroStats={[
        { value: "72", label: "Webinar attendees" },
        { value: "24", label: "Medical-team discussions" },
        { value: "18", label: "Field visits agreed" },
      ]}
      challengeTitle="A launch across cities the field team couldn't fully cover"
      challengeBody={[
        "An Indian dermatology company wanted to support a product launch across eight cities where its medical representatives had limited coverage.",
        "Its medical team had prepared educational material and a specialist webinar, but the company needed help reaching relevant dermatologists and coordinating follow-up.",
      ]}
      approachTitle="Measuring participation, not assuming prescriptions"
      approachBody={[
        "Myntmore developed a city-wise list of dermatologists aligned with the client's specialty focus.",
        "The campaign used medical-team-approved invitations, coordinated reminders, and offered interested doctors a follow-up discussion. Each handover included the doctor's city, area of interest, and requested next step.",
        "The campaign measured participation and requested follow-up rather than assuming that engagement would translate into prescriptions.",
      ]}
      metrics={[
        { l: "Target cities", v: "8" },
        { l: "Unique dermatologists contacted", v: "400" },
        { l: "Webinar registrations", v: "110" },
        { l: "Webinar attendees", v: "72" },
        { l: "Attendees requesting a medical-team discussion", v: "30" },
        { l: "Medical-team discussions completed", v: "24" },
        { l: "Doctors agreeing to a subsequent field-team visit", v: "18" },
      ]}
      outcomeTitle="Warmer first visits for the field team"
      outcomeBody="The medical team completed 24 discussions, and the field team received 18 agreed follow-up visits. Those visits could begin with the doctor's expressed interests and questions."
      roleBody="Specialist outreach, registration follow-up, and meeting coordination. The client's medical team owned the content and medical discussions."
      services={[
        { name: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
        { name: "LinkedIn Outreach", href: "/services/linkedin-outreach" },
        { name: "AI Lead Generation", href: "/services/ai-lead-generation" },
      ]}
      articleSchema={ARTICLE_SCHEMA}
    />
  );
}
