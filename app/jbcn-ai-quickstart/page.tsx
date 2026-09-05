import type { Metadata } from "next";
import JBCNClient from "./JBCNClient";

export const metadata: Metadata = {
  title: "AI Quick-Start Guide",
  description: "Practical AI tips for parents, educators, and creators, built for JBCN International School.",
  robots: { index: false, follow: false },
};

export default function JBCNAIQuickstartPage() {
  return <JBCNClient />;
}
