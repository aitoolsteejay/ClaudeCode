import type { Metadata } from "next";
import ManufacturersExportersClient from "./ManufacturersExportersClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Manufacturers & Exporters",
  description: "Find international buyers without trade fairs. We connect Indian manufacturers and exporters with qualified global buyers through AI-powered outreach, targeting procurement heads, importers, and distributors.",
  keywords: [
    "lead generation for exporters india",
    "b2b outbound for manufacturers",
    "find international buyers for exporters",
    "cold email for indian exporters",
    "lead generation agency for manufacturing companies",
    "how to find overseas buyers without trade fairs",
    "linkedin outreach for procurement heads",
    "b2b lead gen for indian manufacturers",
    "export lead generation agency india",
    "outbound for msme exporters",
    "buyer outreach for manufacturers",
    "lead generation for importers and distributors",
    "alternative to trade fairs for export leads",
    "b2b outbound agency for exporters mumbai",
    "sales outreach for manufacturing exporters",
  ],
  alternates: { canonical: "https://www.myntmore.com/lp/manufacturers-exporters" },
  openGraph: {
    title: "B2B Outbound for Manufacturers & Exporters | Myntmore",
    description: "Find international buyers without trade fairs, through AI-powered outreach.",
    url: "https://www.myntmore.com/lp/manufacturers-exporters",
  },
};

export default function ManufacturersExportersPage() {
  return <ManufacturersExportersClient />;
}
