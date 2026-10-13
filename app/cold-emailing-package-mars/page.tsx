import type { Metadata } from "next";
import ColdEmailingPackage from "@/components/cold-emailing/ColdEmailingPackage";

// Private, unlisted. Same page as /cold-emailing-package-earth, priced in USD.
// Deliberately not linked from any nav, footer or sitemap, and kept out of
// search indexing via robots below.
export const metadata: Metadata = {
  title: "Cold Emailing",
  description: "How Myntmore runs cold email for B2B teams: targeting, deliverability, copy and optimisation.",
  robots: { index: false, follow: false },
};

export default function ColdEmailingPackageMarsPage() {
  return <ColdEmailingPackage price="USD 1,600" priceNote="per month" />;
}
