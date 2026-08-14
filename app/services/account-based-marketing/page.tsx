import type { Metadata } from "next";
import AccountBasedMarketingClient from "./AccountBasedMarketingClient";

export const metadata: Metadata = {
  title: "Account-Based Marketing Services for B2B",
  description: "Coordinated multi-channel campaigns across email and LinkedIn that engage the entire buying committee at your highest-value target accounts, so your AE isn't the first name they've seen.",
  alternates: { canonical: "https://www.myntmore.com/services/account-based-marketing" },
  keywords: ["account-based marketing agency", "b2b abm services", "abm agency india", "account based marketing for b2b saas", "target account marketing strategy", "buying committee engagement", "multi-channel abm campaigns", "abm vs demand generation", "how to run account-based marketing for enterprise accounts", "abm agency mumbai", "coordinated email and linkedin campaigns", "target account selection framework", "abm for high-value accounts", "account-based marketing vs inbound marketing", "b2b abm agency for saas companies", "increase average deal size b2b"],
  openGraph: {
    title: "Account-Based Marketing Services for B2B | Myntmore",
    description: "Stop marketing to everyone. Go all-in on the accounts that actually move revenue.",
    url: "https://www.myntmore.com/services/account-based-marketing",
  },
};

export default function AccountBasedMarketingPage() {
  return <AccountBasedMarketingClient />;
}
