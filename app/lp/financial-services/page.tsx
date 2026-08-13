import type { Metadata } from "next";
import FinancialServicesClient from "./FinancialServicesClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Financial Services Firms",
  description: "Stop relying on referrals alone. We build and run the compliance-safe outbound engine that earns CFO trust and books qualified meetings for NBFCs, business lenders, equipment financing, and corporate treasury firms.",
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
