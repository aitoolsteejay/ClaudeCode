import type { Metadata } from "next";
import PersonalBrandingClient from "./PersonalBrandingClient";

export const metadata: Metadata = {
  title: "Personal Branding & LinkedIn Ghostwriting Services",
  description: "We ghostwrite LinkedIn content that positions you as the authority in your space, 4–8 posts a month from a single monthly voice interview, so inbound finds you instead of you chasing it.",
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
