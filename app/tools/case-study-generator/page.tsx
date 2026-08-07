import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import CaseStudyGeneratorClient from "./CaseStudyGeneratorClient";

export const metadata: Metadata = {
  title: "Case Study & Proposal Generator",
  description: "Free AI tool that turns a finished project into a case study, or a prospect conversation into a proposal draft. No invented numbers, no generic filler.",
  alternates: { canonical: "https://myntmore.com/tools/case-study-generator" },
};

export default function CaseStudyGeneratorPage() {
  return (
    <InnerLayout>
      <CaseStudyGeneratorClient />
    </InnerLayout>
  );
}
