import CaseStudyLayout from "./CaseStudyLayout";
import { buildArticleSchema } from "@/lib/schema";
import { libraryCase, libraryMetaDescription, libraryPageProps } from "@/lib/case-study-library";

// One page of the industry case study library. The page file under app/case-studies/<slug>
// is generated (scripts/generate-case-study-pages.mjs) and only passes its slug; the content
// comes from lib/case-study-library.json and the layout from CaseStudyLayout, so these pages cannot drift apart.
export default function LibraryCaseStudy({ slug }: { slug: string }) {
  const c = libraryCase(slug);
  const articleSchema = buildArticleSchema({
    headline: `${c.title} | Myntmore`,
    description: libraryMetaDescription(c),
    url: `https://www.myntmore.com/case-studies/${c.slug}`,
    datePublished: "2026-10-15T10:00:00+05:30",
    dateModified: "2026-10-15T10:00:00+05:30",
  });
  return <CaseStudyLayout {...libraryPageProps(slug)} articleSchema={articleSchema} />;
}
