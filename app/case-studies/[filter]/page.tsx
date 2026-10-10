import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudiesClient from "../CaseStudiesClient";
import { CASE_STUDY_FILTERS, caseStudyFilterFromSlug } from "@/lib/case-study-filters";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return CASE_STUDY_FILTERS.filter(({ slug }) => slug !== "all").map(({ slug }) => ({ filter: slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const filter = caseStudyFilterFromSlug(params.filter);
  if (!filter || filter === "All") return {};
  const title = `${filter} Case Studies`;
  const description = `Explore ${filter} case studies and clearly labelled campaign examples from Myntmore.`;
  const url = `https://www.myntmore.com/case-studies/${params.filter}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Myntmore`, description, url, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore case studies" }] },
  };
}

export default function FilteredCaseStudiesPage({ params }: Props) {
  const filter = caseStudyFilterFromSlug(params.filter);
  if (!filter || filter === "All") notFound();
  return <CaseStudiesClient initialFilter={filter} />;
}
