import type { Metadata } from "next";
import { SITE_URL } from "@/lib/schema";
import DosAndDontsClient from "./DosAndDontsClient";

const PAGE_URL = `${SITE_URL}/dos-and-donts-of-outreach`;
const TITLE = "Pattern Disruption: The Do's and Don'ts of Cold Outreach";
const DESCRIPTION = "Why most outreach gets deleted without being read, how pattern disruption actually works, what to send on LinkedIn vs. cold email, what data enrichment is, and the free tools to build better outreach.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "dos and donts of cold outreach",
    "pattern disruption cold email",
    "what to send on linkedin outreach",
    "cold email vs linkedin messaging",
    "what is data enrichment b2b",
    "b2b enrichment tools",
    "cold outreach best practices",
    "outbound message examples that work",
  ],
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

export default function DosAndDontsOfOutreachPage() {
  return <DosAndDontsClient />;
}
