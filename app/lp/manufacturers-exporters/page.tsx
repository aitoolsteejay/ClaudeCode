import type { Metadata } from "next";
import ManufacturersExportersClient from "./ManufacturersExportersClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Manufacturers & Exporters",
  description: "Find international buyers without trade fairs. We connect Indian manufacturers and exporters with qualified global buyers through AI-powered outreach, targeting procurement heads, importers, and distributors.",
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
