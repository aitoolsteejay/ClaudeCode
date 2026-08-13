import type { Metadata } from "next";
import PharmaClient from "./PharmaClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Pharmaceutical Companies",
  description: "Get in front of pharma buyers before your next exhibition. We build and run the outbound engine that connects formulation manufacturers, API manufacturers, and CDMOs with qualified domestic and global buyers through AI-powered cold email, LinkedIn outreach, and ABM.",
  alternates: { canonical: "https://www.myntmore.com/lp/pharma" },
  openGraph: {
    title: "B2B Outbound for Pharmaceutical Companies | Myntmore",
    description: "Get in front of pharma buyers before your next exhibition, domestic and global, with AI-powered outbound.",
    url: "https://www.myntmore.com/lp/pharma",
  },
};

export default function PharmaPage() {
  return <PharmaClient />;
}
