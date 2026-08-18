// Structured data (schema.org / JSON-LD) builders.
//
// Domain: myntmore.com (no www) 307-redirects to www.myntmore.com, which is
// where the site actually resolves (confirmed via curl). This schema and
// every canonical/metadataBase/openGraph URL across the site now consistently
// point at the www host to match.
export const SITE_URL = "https://www.myntmore.com";

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  founder: { "@type": "Person"; name: string; sameAs: string[] };
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
  founder: { "@type": "Person", name: "Tejas Jhaveri", sameAs: ["https://linkedin.com/in/tejasjhaveri"] },
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

// Single sitewide declaration -- render this on the homepage only, not on
// every page. Deliberately has no SearchAction: the site has no working
// search-results endpoint (only a static /sitemap page), and Google's
// Sitelinks Search Box requires that action to actually be functional --
// declaring one that doesn't work would be worse than omitting it.
export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Myntmore",
    url: SITE_URL,
  };
}

export interface HowToStepInput {
  name: string;
  text: string;
}

export function buildHowToSchema(name: string, steps: HowToStepInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

// author is deliberately the Organization, not a named Person: none of the
// blog posts display a visible author byline on the page, and structured
// data should reflect what a reader actually sees, not attribute content
// to an individual the page itself doesn't credit.
export function buildArticleSchema({ headline, description, url, datePublished, dateModified, image }: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    image: image ?? `${SITE_URL}/logo.png`,
    author: { "@type": "Organization", name: "Myntmore", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Myntmore",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export interface JobPostingInput {
  title: string;
  description: string;
  url: string;
  datePosted: string;
  validThrough: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "INTERN" | "CONTRACTOR" | "TEMPORARY";
  baseSalary?: { minValue: number; maxValue: number; unitText: "YEAR" | "MONTH"; currency?: string };
  addressLocality?: string;
  addressRegion?: string;
}

// jobLocationType/applicantLocationRequirements aren't set here: every open
// role's own page lists a physical Worli, Mumbai location (not fully
// remote), so this models an on-site/hybrid posting rather than claiming a
// remote arrangement the page doesn't actually describe.
export function buildJobPostingSchema({
  title,
  description,
  url,
  datePosted,
  validThrough,
  employmentType,
  baseSalary,
  addressLocality = "Mumbai",
  addressRegion = "Maharashtra",
}: JobPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    url,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Myntmore",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality,
        addressRegion,
        addressCountry: "IN",
      },
    },
    ...(baseSalary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: baseSalary.currency ?? "INR",
            value: {
              "@type": "QuantitativeValue",
              minValue: baseSalary.minValue,
              maxValue: baseSalary.maxValue,
              unitText: baseSalary.unitText,
            },
          },
        }
      : {}),
  };
}
