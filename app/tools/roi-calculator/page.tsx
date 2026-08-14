import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
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
      <RoiCalculatorClient />
    </InnerLayout>
  );
}
