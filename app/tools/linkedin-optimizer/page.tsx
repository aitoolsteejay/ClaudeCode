import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import ProfileOptimizerClient from "./ProfileOptimizerClient";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimizer",
  description: "Free AI-powered LinkedIn profile audit and rewrite. Get a profile optimised to convert visitors into high-intent inbound replies.",
  alternates: { canonical: "https://www.myntmore.com/tools/linkedin-optimizer" },
};

export default function LinkedInOptimizer() {
  return (
    <InnerLayout>
      <ProfileOptimizerClient />
    </InnerLayout>
  );
}
