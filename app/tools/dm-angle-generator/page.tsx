import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import DmAngleGeneratorClient from "./DmAngleGeneratorClient";

export const metadata: Metadata = {
  title: "DM Angle Generator",
  description: "Free AI tool that generates 5 psychology-aligned DM opening angles for your outreach, tailored to your industry, ICP role, and offer.",
  alternates: { canonical: "https://myntmore.com/tools/dm-angle-generator" },
};

export default function DmAngleGenerator() {
  return (
    <InnerLayout>
      <DmAngleGeneratorClient />
    </InnerLayout>
  );
}
