import type { Metadata } from "next";
import GrowthPlansPricing from "@/components/pricing/GrowthPlansPricing";

// Private, unlisted pricing page for direct sharing with international
// prospects. Deliberately not linked from any nav, footer, or sitemap, and
// kept out of search indexing via robots below.
export const metadata: Metadata = {
  title: "International Growth Plans",
  description: "LinkedIn growth and lead generation plans for international clients.",
  robots: { index: false, follow: false },
};

export default function InternationalPricingPage() {
  return (
    <GrowthPlansPricing
      pageTitle="International Growth Plans"
      currencyPrefix="$"
      prices={{
        starter: "999",
        growth: "1,799",
        leadGen: "1,499",
        coldEmail: "1,600",
        automation: "199",
      }}
    />
  );
}
