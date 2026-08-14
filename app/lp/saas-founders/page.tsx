import type { Metadata } from "next";
import SaasFoundersClient from "./SaasFoundersClient";

export const metadata: Metadata = {
  title: "B2B Outbound for SaaS Founders",
  description: "Outbound that books demos, not just opens. We build and run a predictable outbound engine for B2B SaaS: ICP mapping, signal-based targeting, cold email and LinkedIn sequences.",
  keywords: [
    "b2b lead generation for saas companies",
    "outbound agency for saas founders",
    "cold email for b2b saas",
    "linkedin outreach for saas founders",
    "demo booking agency for saas",
    "icp mapping for saas companies",
    "signal based outbound for saas",
    "lead generation agency for b2b saas india",
    "outbound sales for saas startups",
    "cold email agency for saas founders",
    "abm for saas companies",
    "how to book more sales demos saas",
    "sales development for early stage saas",
    "b2b outbound engine for saas founders",
    "growth agency for saas founders india",
  ],
  alternates: { canonical: "https://www.myntmore.com/lp/saas-founders" },
  openGraph: {
    title: "B2B Outbound for SaaS Founders | Myntmore",
    description: "Outbound that books demos, not just opens. A predictable outbound engine for B2B SaaS.",
    url: "https://www.myntmore.com/lp/saas-founders",
  },
};

export default function SaasFoundersPage() {
  return <SaasFoundersClient />;
}
