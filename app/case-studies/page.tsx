import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "B2B Case Studies & Client Results",
  description: "Real results in the CRM, not the deck. See how Myntmore's cold email, LinkedIn outreach, and ABM systems booked meetings and generated pipeline for real B2B clients.",
  alternates: { canonical: "https://www.myntmore.com/case-studies" },
  openGraph: {
    title: "B2B Case Studies & Client Results | Myntmore",
    description: "Real client results from Myntmore's cold email, LinkedIn outreach, and ABM systems.",
    url: "https://www.myntmore.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
