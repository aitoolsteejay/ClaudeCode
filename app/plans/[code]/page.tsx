import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthPlansPricing, { type GrowthPlansPricingProps } from "@/components/pricing/GrowthPlansPricing";

// Private, unlisted pricing pages for direct sharing with prospects,
// distinguished only by an easy-to-say code rather than a region name in
// the URL or on the page. Deliberately not linked from any nav, footer, or
// sitemap, and kept out of search indexing via robots below.
const PLANS: Record<string, Pick<GrowthPlansPricingProps, "currencyPrefix" | "currencySuffix" | "prices">> = {
  mars: {
    currencyPrefix: "$",
    prices: {
      starter: "999",
      growth: "1,799",
      leadGen: "1,499",
      coldEmail: "1,600",
      automation: "199",
    },
  },
  earth: {
    currencyPrefix: "₹",
    currencySuffix: "+ GST",
    prices: {
      starter: "99,999",
      growth: "1,74,999",
      leadGen: "1,44,999",
      coldEmail: "1,54,999",
      automation: "19,499",
    },
  },
};

export const metadata: Metadata = {
  title: "Growth Plans",
  description: "LinkedIn growth and lead generation plans.",
  robots: { index: false, follow: false },
};

export default function PlansPage({ params }: { params: { code: string } }) {
  const plan = PLANS[params.code];
  if (!plan) notFound();

  return <GrowthPlansPricing pageTitle="Growth Plans" {...plan} />;
}
