import type { Metadata } from "next";
import CareersAndJobGuideClient from "./CareersAndJobGuideClient";

export const metadata: Metadata = {
  title: "Career Jumpstart Toolkit",
  description: "A practical playbook for landing internships, jobs, and your first break: LinkedIn fixes, an outreach playbook, and a curated job-search tool directory.",
  robots: { index: false, follow: false },
};

export default function CareersAndJobGuidePage() {
  return <CareersAndJobGuideClient />;
}
