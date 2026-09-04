import type { Metadata } from "next";
import ColdEmailClient from "./ColdEmailClient";

export const metadata: Metadata = {
  title: "Cold Email Infrastructure & Deliverability",
  description: "We build deliverability infrastructure, write sequences, and manage replies for a 98.5% inbox rate. Book a free cold email audit.",
  keywords: ["cold email agency", "cold email deliverability services", "b2b cold email infrastructure", "cold email domain warmup service", "cold email inbox placement agency", "cold email vs linkedin outreach for b2b", "cold email agency mumbai", "ai personalised cold email sequences", "cold email setup for saas companies", "avoid spam folder cold email", "cold email infrastructure agency india", "outbound cold email management service", "cold email domain setup and dns", "cold email agency vs in-house sdr", "b2b cold outreach agency"],
  alternates: { canonical: "https://www.myntmore.com/services/cold-email" },
  openGraph: {
    title: "Cold Email Infrastructure & Deliverability Services | Myntmore",
    description: "Cold email that actually lands in the inbox. Domain setup, warmup, deliverability, and AI-personalised sequences.",
    url: "https://www.myntmore.com/services/cold-email",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

export default function ColdEmailPage() {
  return <ColdEmailClient />;
}
