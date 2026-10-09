import type { Metadata } from "next";
import ColdEmailingPackage from "@/components/cold-emailing/ColdEmailingPackage";

// Private, unlisted. Same page as /cold-emailing-package-mars, priced in INR
// (Indian digit grouping, GST on top, matching /plans/earth). Deliberately
// not linked from any nav, footer or sitemap, and kept out of search indexing
// via robots below.
export const metadata: Metadata = {
  title: "Cold Emailing",
  description: "How Myntmore runs cold email for B2B teams: targeting, deliverability, copy and optimisation.",
  robots: { index: false, follow: false },
};

export default function ColdEmailingPackageEarthPage() {
  return <ColdEmailingPackage price="INR 1,54,999" priceNote="+ GST / month" />;
}
