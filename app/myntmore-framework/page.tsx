import type { Metadata } from "next";
import MyntmoreFrameworkClient from "./MyntmoreFrameworkClient";

export const metadata: Metadata = {
  title: "The Myntmore Framework",
  description: "The automation pipeline behind every Myntmore outbound campaign: ICP targeting, personalized connection notes, a human-behaviour engine that keeps your LinkedIn account safe, and timely automated follow-ups.",
  keywords: ["linkedin outreach automation framework", "b2b outbound automation", "linkedin automation without bans", "personalized connection request automation", "myntmore framework"],
  alternates: { canonical: "https://www.myntmore.com/myntmore-framework" },
  openGraph: {
    title: "The Myntmore Framework | Myntmore",
    description: "The automation pipeline behind every Myntmore outbound campaign, from ICP targeting to human-safe, timely follow-ups.",
    url: "https://www.myntmore.com/myntmore-framework",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

export default function MyntmoreFrameworkPage() {
  return <MyntmoreFrameworkClient />;
}
