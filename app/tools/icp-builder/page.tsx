import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import ICPBuilderClient from "./ICPBuilderClient";

export const metadata: Metadata = {
  title: "ICP Builder & Value Proposition Generator",
  description: "Free AI tool that builds deep B2B and D2C Ideal Customer Profiles from your business description, then generates a structured value proposition for each one, including channel partners.",
  alternates: { canonical: "https://myntmore.com/tools/icp-builder" },
};

export default function ICPBuilder() {
  return (
    <InnerLayout>
      <ICPBuilderClient />
    </InnerLayout>
  );
}
