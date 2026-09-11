import type { Metadata } from "next";
import DoItYourselfClient from "./DoItYourselfClient";

export const metadata: Metadata = {
  title: "Do It Yourself LinkedIn Outreach Tool",
  description: "A self-serve LinkedIn outreach tool. Log in with your own LinkedIn account, build a campaign, upload your leads, and let it send connection requests and follow-ups for you, with a full metrics dashboard.",
  keywords: ["self serve linkedin outreach tool", "linkedin automation software", "linkedin outreach tool for founders", "linkedin connection request automation tool", "linkedin campaign builder", "diy linkedin outreach"],
  alternates: { canonical: "https://www.myntmore.com/services/do-it-yourself" },
  openGraph: {
    title: "Do It Yourself LinkedIn Outreach Tool | Myntmore",
    description: "Log in with your own LinkedIn account, build a campaign, and let our tool send connection requests and follow-ups for you.",
    url: "https://www.myntmore.com/services/do-it-yourself",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

export default function DoItYourselfPage() {
  return <DoItYourselfClient />;
}
