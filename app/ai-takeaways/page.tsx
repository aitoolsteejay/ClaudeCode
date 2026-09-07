import type { Metadata } from "next";
import AiTakeawaysClient from "./AiTakeawaysClient";

export const metadata: Metadata = {
  title: "AI Quick-Start Guide",
  description: "Practical AI tips for parents, educators, and creators.",
  robots: { index: false, follow: false },
};

export default function AiTakeawaysPage() {
  return <AiTakeawaysClient />;
}
