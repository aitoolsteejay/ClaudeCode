import type { Metadata } from "next";
import AgenciesItClient from "./AgenciesItClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Agencies & IT Companies",
  description: "Stop waiting for referrals. We build and run the outbound engine that fills your agency's pipeline: AI-powered cold email, LinkedIn outreach, and ABM targeting the exact clients you want.",
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
