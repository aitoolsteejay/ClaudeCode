import type { Metadata } from "next";
import PharmaClient from "./PharmaClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Pharmaceutical Companies",
  description: "Get in front of pharma buyers before your next exhibition. We build and run the outbound engine that connects formulation manufacturers, API manufacturers, and CDMOs with qualified domestic and global buyers through AI-powered cold email, LinkedIn outreach, and ABM.",
  keywords: [
    "b2b lead generation for pharma companies",
    "lead generation agency for pharmaceutical companies india",
    "cold email for api manufacturers",
    "outbound for cdmo companies",
    "lead generation for formulation manufacturers",
    "linkedin outreach for pharma buyers",
    "how to generate leads for pharma exports",
    "b2b outbound for pharmaceutical exporters",
    "find pharma buyers without exhibitions",
    "abm for pharma companies",
    "cold email agency for cdmo",
    "lead generation for generic drug manufacturers",
    "outbound agency for pharma companies mumbai",
    "global buyer outreach for pharma manufacturers",
    "b2b lead gen for contract manufacturing pharma",
  ],
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
