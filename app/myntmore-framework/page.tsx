import type { Metadata } from "next";
import MyntmoreFrameworkClient from "./MyntmoreFrameworkClient";

export const metadata: Metadata = {
  title: "Myntmore Framework: How Our Outbound Works",
  description: "How a Myntmore campaign runs: ICP targeting, personalized connection notes, paced sending and timely follow-ups. See the full framework.",
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
