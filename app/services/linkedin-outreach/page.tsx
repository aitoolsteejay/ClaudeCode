import type { Metadata } from "next";
import LinkedinOutreachClient from "./LinkedinOutreachClient";

export const metadata: Metadata = {
  title: "LinkedIn Outreach & Automation Services",
  description: "We build and manage account-safe LinkedIn outreach sequences that feel human and reach the decision-makers you want. Book a free strategy call.",
  keywords: ["linkedin outreach agency", "linkedin automation services for b2b", "linkedin outreach agency mumbai", "account-safe linkedin automation", "linkedin lead generation agency", "linkedin outreach sequences for b2b sales", "linkedin connection request automation", "how to automate linkedin outreach safely", "linkedin outreach vs cold email", "b2b linkedin prospecting agency", "linkedin outreach for decision makers", "linkedin automation without getting banned", "linkedin outreach agency for saas founders", "multi-touch linkedin sequences", "linkedin profile audit and outreach service"],
  alternates: { canonical: "https://www.myntmore.com/services/linkedin-outreach" },
  openGraph: {
    title: "LinkedIn Outreach & Automation Services | Myntmore",
    description: "Conversations happening in your LinkedIn inbox, every week. Account-safe outreach sequences that feel human.",
    url: "https://www.myntmore.com/services/linkedin-outreach",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

export default function LinkedinOutreachPage() {
  return <LinkedinOutreachClient />;
}
