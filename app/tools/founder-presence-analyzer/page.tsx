import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import FounderPresenceClient from "./FounderPresenceClient";

export const metadata: Metadata = {
  title: "Founder Presence Analyzer",
  description: "Free AI tool that benchmarks your LinkedIn presence against competitors and gives you positioning recommendations and headline suggestions.",
  keywords: [
    "founder presence analyzer",
    "linkedin presence audit tool",
    "personal brand analyzer linkedin",
    "linkedin competitor benchmarking tool",
    "free linkedin audit tool",
    "founder personal brand score",
    "linkedin content gap analysis",
    "how strong is my linkedin presence",
    "linkedin positioning analyzer",
    "ceo linkedin presence checker",
    "linkedin content strategy analyzer",
    "compare linkedin profile to competitors",
    "founder branding tool free",
    "linkedin thought leadership analyzer",
    "ai linkedin presence checker",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/founder-presence-analyzer" },
};

export default function FounderPresenceAnalyzer() {
  return (
    <InnerLayout>
      <FounderPresenceClient />
    </InnerLayout>
  );
}
