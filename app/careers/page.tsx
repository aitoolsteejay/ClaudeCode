import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Myntmore",
  description: "Join the team that builds pipelines, not decks. Open roles in sales, lead generation, and GTM strategy at Myntmore, Mumbai's AI-powered B2B outbound agency.",
  alternates: { canonical: "https://www.myntmore.com/careers" },
  openGraph: {
    title: "Careers at Myntmore",
    description: "Open roles in sales, lead generation, and GTM strategy at Myntmore.",
    url: "https://www.myntmore.com/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
