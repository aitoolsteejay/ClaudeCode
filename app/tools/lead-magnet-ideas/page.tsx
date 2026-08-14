import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import LeadMagnetIdeasClient from "./LeadMagnetIdeasClient";

export const metadata: Metadata = {
  title: "Lead Magnet Idea Generator",
  description: "Free AI tool that turns your business, ICP, and industry into concrete lead magnet ideas you can use in cold email and LinkedIn outreach.",
  keywords: [
    "lead magnet idea generator",
    "free lead magnet ideas tool",
    "b2b lead magnet generator",
    "cold email lead magnet ideas",
    "linkedin lead magnet ideas",
    "ai lead magnet generator",
    "lead magnet ideas for agencies",
    "lead magnet ideas for financial services",
    "lead magnet ideas for healthcare",
    "lead magnet ideas for recruitment",
    "what is a good lead magnet",
    "content ideas for lead generation",
    "free tool to generate lead magnet ideas",
    "lead magnet brainstorming tool",
    "how to create a lead magnet",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/lead-magnet-ideas" },
};

export default function LeadMagnetIdeas() {
  return (
    <InnerLayout>
      <LeadMagnetIdeasClient />
    </InnerLayout>
  );
}
