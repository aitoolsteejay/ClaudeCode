import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import ProfileOptimizerClient from "./ProfileOptimizerClient";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimizer",
  description: "Free AI-powered LinkedIn profile audit and rewrite. Get a profile optimised to convert visitors into high-intent inbound replies.",
  keywords: [
    "linkedin profile optimizer",
    "free linkedin profile optimizer",
    "ai linkedin profile audit",
    "linkedin headline generator",
    "linkedin about section generator",
    "linkedin profile rewrite tool",
    "how to optimize linkedin profile",
    "linkedin profile checker free",
    "linkedin profile score tool",
    "linkedin headline ideas generator",
    "linkedin profile audit tool",
    "linkedin profile for lead generation",
    "linkedin authority positioning generator",
    "linkedin profile improvement tool",
    "ai linkedin headline generator",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/linkedin-optimizer" },
};

export default function LinkedInOptimizer() {
  return (
    <InnerLayout>
      <ProfileOptimizerClient />
    </InnerLayout>
  );
}
