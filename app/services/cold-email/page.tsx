import type { Metadata } from "next";
import ColdEmailClient from "./ColdEmailClient";

export const metadata: Metadata = {
  title: "Cold Email Infrastructure & Deliverability Services",
  description: "We build the deliverability infrastructure, write the sequences, and manage replies, so your emails reach the primary inbox and your pipeline fills consistently. 98.5% inbox rate.",
  keywords: ["cold email agency", "cold email deliverability services", "b2b cold email infrastructure", "cold email domain warmup service", "cold email inbox placement agency", "cold email vs linkedin outreach for b2b", "cold email agency mumbai", "ai personalised cold email sequences", "cold email setup for saas companies", "avoid spam folder cold email", "cold email infrastructure agency india", "outbound cold email management service", "cold email domain setup and dns", "cold email agency vs in-house sdr", "b2b cold outreach agency"],
  alternates: { canonical: "https://www.myntmore.com/services/cold-email" },
  openGraph: {
    title: "Cold Email Infrastructure & Deliverability Services | Myntmore",
    description: "Cold email that actually lands in the inbox. Domain setup, warmup, deliverability, and AI-personalised sequences.",
    url: "https://www.myntmore.com/services/cold-email",
  },
};

export default function ColdEmailPage() {
  return <ColdEmailClient />;
}
