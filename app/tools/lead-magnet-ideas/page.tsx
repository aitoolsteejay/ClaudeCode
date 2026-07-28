import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import LeadMagnetIdeasClient from "./LeadMagnetIdeasClient";

export const metadata: Metadata = {
  title: "Lead Magnet Idea Generator",
  description: "Free AI tool that turns your business, ICP, and industry into concrete lead magnet ideas you can use in cold email and LinkedIn outreach.",
  alternates: { canonical: "https://myntmore.com/tools/lead-magnet-ideas" },
};

export default function LeadMagnetIdeas() {
  return (
    <InnerLayout>
      <LeadMagnetIdeasClient />
    </InnerLayout>
  );
}
