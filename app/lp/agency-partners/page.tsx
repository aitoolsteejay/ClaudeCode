import type { Metadata } from "next";
import AgencyPartnersClient from "./AgencyPartnersClient";

export const metadata: Metadata = {
  title: "Partner Program for Agencies | White-Label B2B Outbound",
  description: "Sell B2B outbound, we run it under your brand. Join Myntmore's white-label partner program: cold email, LinkedIn outreach, and ABM delivered as your own service, with no delivery team to hire.",
  alternates: { canonical: "https://www.myntmore.com/lp/agency-partners" },
  openGraph: {
    title: "Partner Program for Agencies | White-Label B2B Outbound | Myntmore",
    description: "Sell outbound. We run it. Under your brand.",
    url: "https://www.myntmore.com/lp/agency-partners",
  },
};

export default function AgencyPartnersPage() {
  return <AgencyPartnersClient />;
}
