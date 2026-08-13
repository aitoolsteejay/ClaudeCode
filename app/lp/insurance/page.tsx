import type { Metadata } from "next";
import InsuranceClient from "./InsuranceClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Insurance Brokers & Agencies",
  description: "Stop waiting on referrals. We build the outbound engine that gets your brokerage in front of HR Heads, CFOs, and Admin Heads evaluating group health and commercial insurance, timed to their renewal window.",
  alternates: { canonical: "https://www.myntmore.com/lp/insurance" },
  openGraph: {
    title: "B2B Outbound for Insurance Brokers & Agencies | Myntmore",
    description: "Stop waiting on referrals. Start winning corporate accounts with renewal-timed outbound.",
    url: "https://www.myntmore.com/lp/insurance",
  },
};

export default function InsurancePage() {
  return <InsuranceClient />;
}
