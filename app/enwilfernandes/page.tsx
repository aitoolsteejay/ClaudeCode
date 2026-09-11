import type { Metadata } from "next";
import VisitingCard from "../components/VisitingCard";
import JsonLd from "../components/JsonLd";
import { WhatsAppIcon, EmailIcon, PhoneIcon } from "../components/ContactIcons";
import { SITE_URL } from "@/lib/schema";

const PHONE = "+918169318951";
const WHATSAPP_URL = "https://wa.me/918169318951";
const EMAIL = "enwil@myntmore.com";

export const metadata: Metadata = {
  title: "Enwil Fernandes",
  description: "Enwil Fernandes, Senior Sales Head at Myntmore. Connect on WhatsApp, call, or email.",
  alternates: { canonical: `${SITE_URL}/enwilfernandes` },
  openGraph: {
    title: "Enwil Fernandes | Senior Sales Head, Myntmore",
    description: "Enwil Fernandes, Senior Sales Head at Myntmore. Connect on WhatsApp, call, or email.",
    url: `${SITE_URL}/enwilfernandes`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enwil Fernandes",
  jobTitle: "Senior Sales Head",
  worksFor: { "@type": "Organization", name: "Myntmore", url: SITE_URL },
  url: `${SITE_URL}/enwilfernandes`,
  email: EMAIL,
  telephone: PHONE,
};

export default function EnwilFernandesCard() {
  return (
    <>
      <JsonLd data={PERSON_SCHEMA} />
      <VisitingCard
        path="/enwilfernandes"
        name="Enwil Fernandes"
        title="Senior Sales Head, Myntmore"
        photoSrc="/enwil.png"
        photoAlt="Enwil Fernandes, Senior Sales Head at Myntmore"
        contacts={[
          { label: "WhatsApp", cta: "Reach out to me on WhatsApp", href: WHATSAPP_URL, icon: <WhatsAppIcon />, bg: "#25D366" },
          { label: "Call", cta: "Call me", href: `tel:${PHONE}`, icon: <PhoneIcon />, bg: "#F5B731" },
          { label: "Email", cta: "Email me", href: `mailto:${EMAIL}`, icon: <EmailIcon />, bg: "#0A66C2" },
        ]}
      />
    </>
  );
}
