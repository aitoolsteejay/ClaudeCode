import type { Metadata } from "next";
import GrowthPlansPricing from "@/components/pricing/GrowthPlansPricing";

// Private, unlisted pricing page for direct sharing with Indian
// prospects. Deliberately not linked from any nav, footer, or sitemap, and
// kept out of search indexing via robots below.
export const metadata: Metadata = {
  title: "Indian Growth Plans",
  description: "LinkedIn growth and lead generation plans for Indian clients.",
  robots: { index: false, follow: false },
};

export default function IndianPricingPage() {
  return (
    <GrowthPlansPricing
      pageTitle="Indian Growth Plans"
      currencyPrefix="₹"
      currencySuffix="+ GST"
      prices={{
        starter: "99,999",
        growth: "1,74,999",
        leadGen: "1,44,999",
        coldEmail: "1,54,999",
        automation: "19,499",
      }}
    />
  );
}
