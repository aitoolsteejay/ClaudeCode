import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Free ROI calculator for B2B outbound. Estimate the pipeline and revenue you could generate from cold email and LinkedIn outreach.",
  alternates: { canonical: "https://myntmore.com/tools/roi-calculator" },
};

export default function RoiCalculator() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="https://roi-calculator-zeta-lime.vercel.app/"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write"
        title="ROI Calculator"
      />
    </div>
  );
}
