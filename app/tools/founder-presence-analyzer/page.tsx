import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import FounderPresenceClient from "./FounderPresenceClient";

export const metadata: Metadata = {
  title: "Founder Presence Analyzer",
  description: "Free AI tool that benchmarks your LinkedIn presence against competitors and gives you positioning recommendations and headline suggestions.",
  alternates: { canonical: "https://myntmore.com/tools/founder-presence-analyzer" },
};

export default function FounderPresenceAnalyzer() {
  return (
    <InnerLayout>
      <FounderPresenceClient />
    </InnerLayout>
  );
}
