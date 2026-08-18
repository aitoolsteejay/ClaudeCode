import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
  description:
    "AI-powered B2B outbound agency in Mumbai. Cold email, LinkedIn outreach & ABM that books qualified meetings. 12K+ meetings booked, $120M+ pipeline generated.",
  alternates: { canonical: "https://www.myntmore.com" },
  keywords: [
    "b2b lead generation",
    "b2b lead generation agency mumbai",
    "b2b lead generation agency india",
    "cold email agency",
    "cold email infrastructure",
    "linkedin outreach and automation",
    "icp mapping and sales intelligence",
    "ai lead generation agency",
    "account-based marketing agency",
    "b2b appointment setting",
    "outbound sales agency",
    "b2b pipeline generation",
    "personal branding for founders",
    "linkedin ghostwriting",
    "tejas jhaveri",
    "myntmore",
  ],
  openGraph: {
    title: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
    description:
      "We build and run your outbound engine using AI agents and human intelligence. Cold email, LinkedIn outreach, and ABM that books qualified meetings at scale.",
    url: "https://www.myntmore.com",
  },
  verification: {
    other: {
      "msvalidate.01": "8CD18A1DDCF953EACEF706A12D7B62F4",
    },
  },
};
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import WhoWeHelp from "./components/WhoWeHelp";
import Industries from "./components/Industries";
import Services from "./components/Services";
import SystemFlow from "./components/SystemFlow";
import BenefitsMarquee from "./components/BenefitsMarquee";
import Testimonials from "./components/Testimonials";
import Promise from "./components/Promise";
import FAQ from "./components/FAQ";
import AskYourAI from "./components/AskYourAI";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { buildFaqSchema, buildWebsiteSchema } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/faq-data";

const HOME_AI_RESOURCES = [
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
  "https://www.myntmore.com/about-us",
  "https://www.myntmore.com/resources",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
      <JsonLd data={buildWebsiteSchema()} />
      <Navbar />
      <Hero />
      <LogoStrip />
      <WhoWeHelp />
      <Industries />
      <Services />
      <SystemFlow />
      <BenefitsMarquee />
      <Testimonials />
      <Promise />
      <FAQ />
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <AskYourAI resources={HOME_AI_RESOURCES} />
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
