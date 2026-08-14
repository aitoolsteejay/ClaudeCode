import type { Metadata } from "next";
import PersonalBrandingClient from "./PersonalBrandingClient";

export const metadata: Metadata = {
  title: "Personal Branding & LinkedIn Ghostwriting Services",
  description: "We ghostwrite LinkedIn content that positions you as the authority in your space, 4–8 posts a month from a single monthly voice interview, so inbound finds you instead of you chasing it.",
  keywords: ["linkedin ghostwriting services", "personal branding agency for founders", "linkedin content writing for executives", "ghostwriting for b2b founders", "linkedin personal branding agency", "founder led marketing on linkedin", "linkedin thought leadership content agency", "how to build a personal brand on linkedin", "linkedin ghostwriter for ceos", "personal branding vs company page marketing", "linkedin content strategy for b2b founders", "inbound leads through linkedin personal brand", "linkedin ghostwriting agency mumbai", "executive personal branding services", "linkedin post writing service for founders"],
  alternates: { canonical: "https://www.myntmore.com/services/personal-branding" },
  openGraph: {
    title: "Personal Branding & LinkedIn Ghostwriting Services | Myntmore",
    description: "Your buyers are on LinkedIn every day. Most founders are invisible to them. Ghostwritten content that builds authority.",
    url: "https://www.myntmore.com/services/personal-branding",
  },
};

export default function PersonalBrandingPage() {
  return <PersonalBrandingClient />;
}
