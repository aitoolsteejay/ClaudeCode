import type { Metadata } from "next";
import AgencyPartnersClient from "./AgencyPartnersClient";

export const metadata: Metadata = {
  title: "White-Label B2B Outbound Partner Program",
  description: "Sell B2B outbound, we run it under your brand. Cold email, LinkedIn & ABM delivered as your own service, no delivery team to hire. Book a call.",
  keywords: [
    "white label lead generation agency",
    "white label cold email service",
    "reseller program for b2b lead generation",
    "white label linkedin outreach service",
    "outsource outbound for agency clients",
    "white label abm service provider",
    "b2b outbound fulfillment partner",
    "agency partner program india",
    "white label sales development service",
    "outsourced sdr service for agencies",
    "private label lead generation",
    "become a lead generation reseller",
    "white label outbound agency india",
    "subcontract cold email services",
    "b2b lead gen white label partner mumbai",
  ],
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
