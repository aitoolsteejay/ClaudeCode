import type { Metadata } from "next";
import VisitingCard from "../components/VisitingCard";
import JsonLd from "../components/JsonLd";
import { WhatsAppIcon, LinkedInIcon, InstagramIcon } from "../components/ContactIcons";
import { SITE_URL } from "@/lib/schema";

const WHATSAPP_URL = "https://wa.me/919867180379";
const LINKEDIN_URL = "https://www.linkedin.com/in/tejasjhaveri/";
const INSTAGRAM_URL = "https://www.instagram.com/tejas_jhaveri?stkn=MTZjOGlndmw2dzIxeA==";

export const metadata: Metadata = {
  title: "Tejas Jhaveri",
  description: "Tejas Jhaveri, Founder of Myntmore. Connect on WhatsApp, LinkedIn, or Instagram.",
  alternates: { canonical: `${SITE_URL}/tejasjhaveri` },
  openGraph: {
    title: "Tejas Jhaveri | Founder, Myntmore",
    description: "Tejas Jhaveri, Founder of Myntmore. Connect on WhatsApp, LinkedIn, or Instagram.",
    url: `${SITE_URL}/tejasjhaveri`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tejas Jhaveri",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "Myntmore", url: SITE_URL },
  url: `${SITE_URL}/tejasjhaveri`,
  sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
};

export default function TejasJhaveriCard() {
  return (
    <>
      <JsonLd data={PERSON_SCHEMA} />
      <VisitingCard
        path="/tejasjhaveri"
        name="Tejas Jhaveri"
        title="Founder, Myntmore · TEDx Speaker · Angel Investor"
        photoSrc="/tejas-2.png"
        photoAlt="Tejas Jhaveri, Founder of Myntmore"
        contacts={[
          { label: "WhatsApp", cta: "Reach out to me on WhatsApp", href: WHATSAPP_URL, icon: <WhatsAppIcon />, bg: "#25D366" },
          { label: "LinkedIn", cta: "Connect with me on LinkedIn", href: LINKEDIN_URL, icon: <LinkedInIcon />, bg: "#0A66C2" },
          { label: "Instagram", cta: "Follow me on Instagram", href: INSTAGRAM_URL, icon: <InstagramIcon />, bg: "#C13584" },
        ]}
      />
    </>
  );
}
