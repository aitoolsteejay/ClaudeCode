import type { Metadata } from "next";
import EducationGuideClient from "./EducationGuideClient";

export const metadata: Metadata = {
  title: "AI Quick-Start Guide",
  description: "Practical AI tips for parents, educators, and creators.",
  robots: { index: false, follow: false },
};

export default function EducationGuidePage() {
  return <EducationGuideClient />;
}
