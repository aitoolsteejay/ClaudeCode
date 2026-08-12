import type { Metadata } from "next";
import ColdEmailClient from "./ColdEmailClient";

export const metadata: Metadata = {
  title: "Cold Email Infrastructure & Deliverability Services",
  description: "We build the deliverability infrastructure, write the sequences, and manage replies, so your emails reach the primary inbox and your pipeline fills consistently. 98.5% inbox rate.",
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
