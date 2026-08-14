import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import CaseStudyGeneratorClient from "./CaseStudyGeneratorClient";

export const metadata: Metadata = {
  title: "Case Study & Proposal Generator",
  description: "Free AI tool that turns a finished project into a case study, or a prospect conversation into a proposal draft. No invented numbers, no generic filler.",
  keywords: [
    "free case study generator",
    "ai case study generator",
    "b2b case study generator",
    "case study generator from project details",
    "proposal generator ai",
    "sales proposal generator free",
    "how to write a case study",
    "case study template generator",
    "client success story generator",
    "b2b proposal writing tool",
    "turn project into case study",
    "ai proposal writer",
    "case study writing tool for agencies",
    "generate case study from client results",
    "free proposal draft generator",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/case-study-generator" },
};

export default function CaseStudyGeneratorPage() {
  return (
    <InnerLayout>
      <CaseStudyGeneratorClient />
    </InnerLayout>
  );
}
