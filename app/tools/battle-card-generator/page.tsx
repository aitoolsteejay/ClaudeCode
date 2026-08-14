import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import BattleCardGeneratorClient from "./BattleCardGeneratorClient";

export const metadata: Metadata = {
  title: "Competitor Battle Card Generator",
  description: "Free AI tool that researches a competitor live and builds a sales battle card: what they do, their pricing if public, their real strengths and gaps, and how to position against them.",
  keywords: [
    "competitor battle card generator",
    "free battle card generator",
    "ai battle card generator",
    "sales battle card template",
    "competitor analysis tool for sales",
    "how to build a sales battle card",
    "what is a battle card",
    "competitive positioning tool",
    "competitor research tool free",
    "sales enablement battle card",
    "competitor pricing research tool",
    "win competitor deals sales tool",
    "b2b competitor comparison generator",
    "ai competitor research tool",
    "sales battle card examples",
    "how to position against competitors",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/battle-card-generator" },
};

export default function BattleCardGeneratorPage() {
  return (
    <InnerLayout>
      <BattleCardGeneratorClient />
    </InnerLayout>
  );
}
