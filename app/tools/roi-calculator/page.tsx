import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import RoiCalculatorClient from "./RoiCalculatorClient";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Free ROI calculator for B2B outbound. Estimate the pipeline and revenue you could generate from cold email and LinkedIn outreach.",
  keywords: [
    "roi calculator for cold outreach",
    "b2b outbound roi calculator",
    "cold email roi calculator",
    "linkedin outreach roi calculator",
    "free roi calculator",
    "sales pipeline calculator",
    "how to calculate lead generation roi",
    "outbound sales revenue calculator",
    "cold email revenue calculator",
    "b2b lead generation roi tool",
    "meetings booked calculator",
    "sales funnel calculator free",
    "cold outreach revenue projection tool",
    "linkedin lead gen roi estimator",
    "pipeline forecast calculator b2b",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/roi-calculator" },
};

export default function RoiCalculator() {
  return (
    <InnerLayout>
      <div className="pt-32 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Free Tools", href: "/resources/tools" }, { label: "ROI Calculator", href: "/tools/roi-calculator" }]} />
        </div>
      </div>
      <RoiCalculatorClient />
    </InnerLayout>
  );
}
