import type { Metadata } from "next";
import LinkedinOutreachClient from "./LinkedinOutreachClient";

export const metadata: Metadata = {
  title: "LinkedIn Outreach & Automation Services",
  description: "We build and manage LinkedIn outreach sequences that feel human, stay account-safe, and consistently put you in front of the decision-makers you actually want to reach.",
  alternates: { canonical: "https://www.myntmore.com/services/linkedin-outreach" },
  openGraph: {
    title: "LinkedIn Outreach & Automation Services | Myntmore",
    description: "Conversations happening in your LinkedIn inbox, every week. Account-safe outreach sequences that feel human.",
    url: "https://www.myntmore.com/services/linkedin-outreach",
  },
};

export default function LinkedinOutreachPage() {
  return <LinkedinOutreachClient />;
}
