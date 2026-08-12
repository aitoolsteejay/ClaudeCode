import type { Metadata } from "next";
import AiLeadGenerationClient from "./AiLeadGenerationClient";

export const metadata: Metadata = {
  title: "AI Lead Generation Services for B2B",
  description: "Custom AI agents research, qualify, and prioritise leads at scale, so your sales team only talks to people worth their time. 80% less manual research.",
  alternates: { canonical: "https://www.myntmore.com/services/ai-lead-generation" },
  openGraph: {
    title: "AI Lead Generation Services for B2B | Myntmore",
    description: "Your pipeline shouldn't depend on how much time your team has. Custom AI agents that research, qualify, and prioritise leads at scale.",
    url: "https://www.myntmore.com/services/ai-lead-generation",
  },
};

export default function AiLeadGenerationPage() {
  return <AiLeadGenerationClient />;
}
