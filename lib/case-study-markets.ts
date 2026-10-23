// The country each case study is about, taken from the "Industry · Country" tag on its card and the
// market named in its slug and title. Cities are not recorded for any case study, so there are no city
// tags. A market gets its own page under /case-studies/markets/ only when it has two or more case studies.

export const CASE_STUDY_MARKETS = [
  { label: "UAE", slug: "uae", phrase: "the UAE" },
  { label: "United States", slug: "united-states", phrase: "the United States" },
  { label: "United Kingdom", slug: "united-kingdom", phrase: "the United Kingdom" },
  { label: "Singapore", slug: "singapore", phrase: "Singapore" },
  { label: "France", slug: "france", phrase: "France" },
  { label: "India", slug: "india", phrase: "India" },
] as const;

export type MarketSlug = (typeof CASE_STUDY_MARKETS)[number]["slug"];

export const MARKET_OF_SLUG: Record<string, MarketSlug> = {
  "agencies-it-uae-managed-it": "uae",
  "insurance-uae-employee-benefits": "uae",
  "manufacturers-exporters-uae-kitchen-equipment": "uae",
  "pharma-uae-distribution-partners": "uae",
  "agencies-it-usa-conversion-optimization": "united-states",
  "agencies-it-usa-software-development": "united-states",
  "pharma-usa-api-second-source": "united-states",
  "recruitment-usa-tech-recruitment": "united-states",
  "financial-services-uk-bookkeeping": "united-kingdom",
  "recruitment-uk-engineering-staffing": "united-kingdom",
  "uk-pharma-qualified-meetings": "united-kingdom",
  "financial-services-singapore-outsourced-cfo": "singapore",
  "insurance-singapore-commercial-coverage": "singapore",
  "pharma-singapore-product-licensing": "singapore",
  "recruitment-singapore-contract-staffing": "singapore",
  "manufacturers-exporters-france-packaging": "france",
  "pharma-france-contract-manufacturing": "france",
  "financial-services-india-payroll": "india",
  "insurance-india-hr-consultants-referral": "india",
  "pharma-india-dermatologist-outreach": "india",
};

export function marketFromSlug(slug?: string) {
  return CASE_STUDY_MARKETS.find((m) => m.slug === slug) ?? null;
}

export function marketOfCaseStudy(caseStudySlug: string) {
  return marketFromSlug(MARKET_OF_SLUG[caseStudySlug]);
}

export function caseStudiesInMarket(slug: MarketSlug) {
  return Object.entries(MARKET_OF_SLUG).filter(([, m]) => m === slug).map(([s]) => s);
}
