import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import ICPBuilderClient from "./ICPBuilderClient";

export const metadata: Metadata = {
  title: "ICP Builder & Lead Scoring Rubric",
  description: "Free AI tool that turns your best and worst customers into a written ICP: firmographics, buyer personas, buying triggers, disqualifiers, and a scoring rubric you can use to grade every inbound lead.",
  alternates: { canonical: "https://myntmore.com/tools/icp-builder" },
};

export default function ICPBuilder() {
  return (
    <InnerLayout>
      <ICPBuilderClient />
    </InnerLayout>
  );
}
