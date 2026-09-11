import type { Metadata } from "next";
import VisitingCard from "../components/VisitingCard";
import JsonLd from "../components/JsonLd";
import { WhatsAppIcon, EmailIcon, PhoneIcon } from "../components/ContactIcons";
import { SITE_URL } from "@/lib/schema";

const PHONE = "+919821008589";
const WHATSAPP_URL = "https://wa.me/919821008589";
const EMAIL = "growth@myntmore.com";

export const metadata: Metadata = {
  title: "Jahnvi Jhaveri",
  description: "Jahnvi Jhaveri, Growth Manager at Myntmore. Connect on WhatsApp, call, or email.",
  alternates: { canonical: `${SITE_URL}/jahnvijhaveri` },
  openGraph: {
    title: "Jahnvi Jhaveri | Growth Manager, Myntmore",
    description: "Jahnvi Jhaveri, Growth Manager at Myntmore. Connect on WhatsApp, call, or email.",
    url: `${SITE_URL}/jahnvijhaveri`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jahnvi Jhaveri",
  jobTitle: "Growth Manager",
  worksFor: { "@type": "Organization", name: "Myntmore", url: SITE_URL },
  url: `${SITE_URL}/jahnvijhaveri`,
  email: EMAIL,
  telephone: PHONE,
};

export default function JahnviJhaveriCard() {
  return (
    <>
      <JsonLd data={PERSON_SCHEMA} />
      <VisitingCard
        path="/jahnvijhaveri"
        name="Jahnvi Jhaveri"
        title="Growth Manager, Myntmore"
        photoSrc="/jahnvi.png"
        photoAlt="Jahnvi Jhaveri, Growth Manager at Myntmore"
        contacts={[
          { label: "WhatsApp", cta: "Reach out to me on WhatsApp", href: WHATSAPP_URL, icon: <WhatsAppIcon />, bg: "#25D366" },
          { label: "Call", cta: "Call me", href: `tel:${PHONE}`, icon: <PhoneIcon />, bg: "#F5B731" },
          { label: "Email", cta: "Email me", href: `mailto:${EMAIL}`, icon: <EmailIcon />, bg: "#0A66C2" },
        ]}
      />
    </>
  );
}
