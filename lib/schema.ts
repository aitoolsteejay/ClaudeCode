// Structured data (schema.org / JSON-LD) builders.
//
// NOTE on domain: the Organization schema below uses "https://www.myntmore.com"
// per explicit request, but every other canonical URL on this site (root
// layout metadataBase, individual page `alternates.canonical`) uses the
// non-www "https://myntmore.com". Mixing the two in structured data vs.
// canonical tags can send a mixed signal to Google about which host is
// canonical. Confirm whichever is correct (and that the other one 301s to
// it) before this goes live — see SITE_URL below to change it in one place.
export const SITE_URL = "https://www.myntmore.com";

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  founder: { "@type": "Person"; name: string };
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
}

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Myntmore",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Myntmore is Mumbai's leading AI-powered B2B outbound agency. We build and run cold email, LinkedIn outreach, and ABM systems that book qualified meetings. 12K+ meetings booked. $120M+ pipeline generated.",
  email: "growth@myntmore.com",
  founder: { "@type": "Person", name: "Tejas Jhaveri" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "WeWork, 1st floor, 264-265, Dr Annie Besant Rd, Worli Shivaji Nagar, Worli",
    addressLocality: "Mumbai",
    // Inferred from the city (not explicitly provided) — drop this field if undesired.
    addressRegion: "Maharashtra",
    postalCode: "400025",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/myntmore",
    "https://instagram.com/myntmore",
    "https://youtube.com/@TJtheLeadGenExpert",
  ],
};

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string;
}

export function buildServiceSchema({ name, description, serviceType, url, areaServed = "Worldwide" }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    areaServed,
    provider: {
      "@type": "Organization",
      name: "Myntmore",
      url: SITE_URL,
    },
  };
}

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
