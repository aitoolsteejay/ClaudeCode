import type { Metadata } from "next";
import SaasFoundersClient from "./SaasFoundersClient";

export const metadata: Metadata = {
  title: "B2B Outbound for SaaS Founders",
  description: "Outbound that books demos, not just opens. We build and run a predictable outbound engine for B2B SaaS: ICP mapping, signal-based targeting, cold email and LinkedIn sequences.",
  keywords: [
    "b2b lead generation for saas companies",
    "outbound agency for saas founders",
    "multi-channel outbound for saas companies",
    "combined linkedin and cold email outbound for saas",
    "demo booking agency for saas",
    "target account outbound for saas companies",
    "signal based outbound for saas",
    "lead generation agency for b2b saas india",
    "outbound sales for saas startups",
    "outbound agency for plg to sales-led saas",
    "full-funnel outbound engine for saas",
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
