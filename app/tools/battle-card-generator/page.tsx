import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import BattleCardGeneratorClient from "./BattleCardGeneratorClient";

export const metadata: Metadata = {
  title: "Competitor Battle Card Generator",
  description: "Free AI tool that researches a competitor live and builds a sales battle card: what they do, their pricing if public, their real strengths and gaps, and how to position against them.",
  alternates: { canonical: "https://myntmore.com/tools/battle-card-generator" },
};

export default function BattleCardGeneratorPage() {
  return (
    <InnerLayout>
      <BattleCardGeneratorClient />
    </InnerLayout>
  );
}
