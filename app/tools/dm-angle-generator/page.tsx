import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import DmAngleGeneratorClient from "./DmAngleGeneratorClient";

export const metadata: Metadata = {
  title: "DM Angle Generator",
  description: "Free AI tool that generates 5 psychology-aligned DM opening angles for your outreach, tailored to your industry, ICP role, and offer.",
  keywords: [
    "dm angle generator",
    "cold dm opener generator",
    "linkedin dm opening lines generator",
    "free ai dm generator",
    "cold outreach message generator",
    "linkedin cold message generator",
    "dm opening line ideas",
    "b2b outreach message generator",
    "psychology based dm openers",
    "how to write a cold dm",
    "linkedin outreach script generator",
    "cold email opening line generator",
    "ai generated dm angles",
    "outreach messaging generator for sales",
    "dm hook generator",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/dm-angle-generator" },
};

export default function DmAngleGenerator() {
  return (
    <InnerLayout>
      <DmAngleGeneratorClient />
    </InnerLayout>
  );
}
