import type { Metadata } from "next";
import AccountBasedMarketingClient from "./AccountBasedMarketingClient";

export const metadata: Metadata = {
  title: "Account-Based Marketing Services for B2B",
  description: "Coordinated multi-channel campaigns across email and LinkedIn that engage the entire buying committee at your highest-value target accounts, so your AE isn't the first name they've seen.",
  alternates: { canonical: "https://www.myntmore.com/services/account-based-marketing" },
  keywords: ["account-based marketing", "abm agency", "b2b abm", "target account marketing", "buying committee engagement"],
  openGraph: {
    title: "Account-Based Marketing Services for B2B | Myntmore",
    description: "Stop marketing to everyone. Go all-in on the accounts that actually move revenue.",
    url: "https://www.myntmore.com/services/account-based-marketing",
  },
};

export default function AccountBasedMarketingPage() {
  return <AccountBasedMarketingClient />;
}
