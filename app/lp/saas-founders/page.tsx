import type { Metadata } from "next";
import SaasFoundersClient from "./SaasFoundersClient";

export const metadata: Metadata = {
  title: "B2B Outbound for SaaS Founders",
  description: "Outbound that books demos, not just opens. We build and run a predictable outbound engine for B2B SaaS: ICP mapping, signal-based targeting, cold email and LinkedIn sequences.",
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
