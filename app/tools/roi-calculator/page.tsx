import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import RoiCalculatorClient from "./RoiCalculatorClient";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Free ROI calculator for B2B outbound. Estimate the pipeline and revenue you could generate from cold email and LinkedIn outreach.",
  alternates: { canonical: "https://www.myntmore.com/tools/roi-calculator" },
};

export default function RoiCalculator() {
  return (
    <InnerLayout>
      <RoiCalculatorClient />
    </InnerLayout>
  );
}
