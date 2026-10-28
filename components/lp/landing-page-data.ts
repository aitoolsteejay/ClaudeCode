// The shape of one ICP landing page: content/landing-pages/<slug>.json, edited in
// the Keystatic admin ("Landing pages"). Layout, styling, animations, the Zoho form
// wiring and the flow-diagram colours are fixed in components/lp/LandingPage.tsx.
export interface LandingPageData {
  slug: string;
  // Search and sharing
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  // Hero
  breadcrumbLabel: string;
  badge: string;
  h1Line1: string;
  h1Before: string;
  h1Underlined: string;
  h1After: string;
  heroSubheading: string;
  primaryCta: string;
  secondaryCta: string;
  heroNote: string;
  floatingIcons: string[];
  // Sections
  stats: { icon: string; prefix: string; target: number; decimals: number; suffix: string; label: string }[];
  painTitle: string;
  pain: { icon: string; heading: string; body: string }[];
  flowTitle: string;
  flowTop: { icon: string; title: string; body: string }[];
  flowParallelLabel: string;
  flowParallel: { icon: string; title: string; body: string }[];
  flowBottom: { icon: string; title: string; body: string }[];
  processTitle: string;
  process: { title: string; body: string }[];
  trackTitle: string;
  track: { icon: string; prefix: string; target: number; suffix: string; label: string }[];
  faqTitle: string;
  ctaHeading: string;
  ctaBody: string;
  formHeading: string;
  formBody: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailPlaceholder: string;
  submitLabel: string;
  formNote: string;
}
