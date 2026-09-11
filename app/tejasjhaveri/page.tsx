import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
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

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.484 1.34 5.001L2 22l5.13-1.346a9.968 9.968 0 004.874 1.242h.004c5.513 0 9.997-4.483 9.997-9.997C22 6.483 17.517 2 12.004 2zm0 18.16h-.003a8.163 8.163 0 01-4.16-1.14l-.298-.177-3.045.799.813-2.968-.194-.305a8.15 8.15 0 01-1.253-4.372c0-4.508 3.67-8.176 8.181-8.176 2.185 0 4.24.852 5.785 2.398a8.13 8.13 0 012.396 5.785c0 4.508-3.669 8.176-8.176 8.176z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  { label: "WhatsApp", href: WHATSAPP_URL, icon: <WhatsAppIcon />, bg: "#25D366" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: <LinkedInIcon />, bg: "#0A66C2" },
  { label: "Instagram", href: INSTAGRAM_URL, icon: <InstagramIcon />, bg: "#C13584" },
];

export default function TejasJhaveriCard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: "#F8F6F2" }}>
      <JsonLd data={PERSON_SCHEMA} />
      <div className="w-full max-w-sm rounded-3xl border p-8 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
        <Link href="/" className="inline-flex items-center justify-center mb-6" aria-label="Myntmore home">
          <Image src="/logo.png" alt="Myntmore" width={140} height={40} className="h-8 w-auto object-contain" />
        </Link>

        <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-2" style={{ backgroundColor: "#EDE9E4", borderColor: "#F5B731" }}>
          <Image src="/tejas-2.png" alt="Tejas Jhaveri, Founder of Myntmore" fill className="object-cover object-top" priority />
        </div>

        <h1 className="text-2xl font-black mb-1" style={{ color: "#0a0a0a" }}>Tejas Jhaveri</h1>
        <p className="text-sm mb-8" style={{ color: "#8C8279" }}>Founder, Myntmore &middot; TEDx Speaker &middot; Angel Investor</p>

        <div className="flex items-center justify-center gap-4 mb-8">
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.label}
              className="flex items-center justify-center h-14 w-14 rounded-full text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: c.bg }}
            >
              {c.icon}
            </a>
          ))}
        </div>

        <a href="/founder-meeting" className="btn-dark w-full py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2">
          Book a Call
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>

        <p className="mt-6 text-xs" style={{ color: "#8C8279" }}>myntmore.com</p>
      </div>
    </div>
  );
}
