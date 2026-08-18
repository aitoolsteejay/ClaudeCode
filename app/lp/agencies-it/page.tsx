import type { Metadata } from "next";
import AgenciesItClient from "./AgenciesItClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Agencies & IT Companies",
  description: "Stop waiting for referrals. We build the outbound engine that fills your agency's pipeline: cold email, LinkedIn & ABM. Book a free audit.",
  keywords: [
    "b2b lead generation for agencies",
    "outbound agency for it companies",
    "lead generation for digital agencies india",
    "linkedin outreach for agencies",
    "cold email agency for it services companies",
    "how to get retainer clients for agency",
    "new client acquisition for marketing agencies",
    "abm for it services companies",
    "b2b outbound for software agencies",
    "lead generation agency for web design agencies",
    "cold email for it consulting firms",
    "client acquisition for creative agencies india",
    "outbound sales for it staffing companies",
    "lead gen agency alternative to referrals",
    "b2b appointment setting for agencies",
    "linkedin lead generation for it companies india",
  ],
  alternates: { canonical: "https://www.myntmore.com/lp/agencies-it" },
  openGraph: {
    title: "B2B Outbound for Agencies & IT Companies | Myntmore",
    description: "Stop waiting for referrals. Start booking retainer clients with AI-powered outbound.",
    url: "https://www.myntmore.com/lp/agencies-it",
  },
};

export default function AgenciesItPage() {
  return <AgenciesItClient />;
}
