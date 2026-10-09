export const CASE_STUDY_FILTERS = [
  { label: "All", slug: "all" },
  { label: "Pharma", slug: "pharma" },
  { label: "SaaS", slug: "saas" },
  { label: "Professional Services", slug: "professional-services" },
  { label: "eCommerce Tech", slug: "ecommerce-tech" },
  { label: "B2B Founder", slug: "b2b-founder" },
  { label: "Agencies & IT", slug: "agencies-it" },
  { label: "Financial Services", slug: "financial-services" },
  { label: "Insurance", slug: "insurance" },
  { label: "Manufacturers & Exporters", slug: "manufacturers-exporters" },
  { label: "Recruitment & Staffing", slug: "recruitment-staffing" },
] as const;

export function caseStudyFilterFromSlug(slug?: string) {
  if (!slug || slug === "all") return "All";
  return CASE_STUDY_FILTERS.find((filter) => filter.slug === slug)?.label ?? null;
}

export function caseStudyFilterSlug(label: string) {
  return CASE_STUDY_FILTERS.find((filter) => filter.label === label)?.slug ?? "all";
}
