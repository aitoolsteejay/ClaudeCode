import type { Metadata } from "next";
import FinancialServicesClient from "./FinancialServicesClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Financial Services Firms",
  description: "Stop relying on referrals. We build the compliance-safe outbound engine that earns CFO trust for NBFCs and lenders. Book a free audit.",
  keywords: [
    "b2b lead generation for nbfcs",
    "lead generation agency for financial services india",
    "outbound for business loan companies",
    "cold email for equipment financing companies",
    "linkedin outreach for nbfc sales teams",
    "lead generation for corporate treasury solutions",
    "compliance safe cold email for financial services",
    "b2b lead gen for business lenders",
    "cfo outreach agency india",
    "lead generation for working capital lenders",
    "abm for financial services companies",
    "outbound agency for fintech lenders",
    "how to generate leads for nbfc",
    "b2b outbound for corporate finance firms",
    "sales outreach for business financing companies",
  ],
  alternates: { canonical: "https://www.myntmore.com/lp/financial-services" },
  openGraph: {
    title: "B2B Outbound for Financial Services Firms | Myntmore",
    description: "Stop relying on referrals alone. Build a credible pipeline of business borrowers and clients with AI-powered, compliance-safe outbound.",
    url: "https://www.myntmore.com/lp/financial-services",
  },
};

export default function FinancialServicesPage() {
  return <FinancialServicesClient />;
}
