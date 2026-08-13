import type { Metadata } from "next";
import SalesIntelligenceClient from "./SalesIntelligenceClient";

export const metadata: Metadata = {
  title: "ICP Mapping & Lead Scoring Services",
  description: "We monitor 40+ buying signals daily (funding rounds, hiring surges, tech stack changes) so you reach in-market accounts the moment they enter the buying window.",
  alternates: { canonical: "https://www.myntmore.com/services/sales-intelligence" },
  openGraph: {
    title: "ICP Mapping & Lead Scoring Services | Myntmore",
    description: "Know exactly who is ready to buy, before your competitors do. 40+ buying signals monitored daily.",
    url: "https://www.myntmore.com/services/sales-intelligence",
  },
};

export default function SalesIntelligencePage() {
  return <SalesIntelligenceClient />;
}
