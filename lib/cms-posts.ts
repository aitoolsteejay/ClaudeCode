import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";

// Server-only: reads content/posts/*.mdoc (the files the Keystatic admin
// writes) at build time. Drafts (published off) are never returned, so they
// cannot leak into the blog index, the sitemap or llms-full.txt.
const reader = createReader(process.cwd(), config);

export interface CmsPostSummary {
  slug: string;
  href: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  // Blog index card
  excerpt: string;
  tags: string[];
  indexOrder: number | null;
}

export async function getCmsPostSummaries(): Promise<CmsPostSummary[]> {
  const all = await reader.collections.posts.all();
  return all
    .filter(({ entry }) => entry.published)
    .map(({ slug, entry }) => ({
      slug,
      href: `/resources/blogs/${slug}`,
      title: entry.title,
      metaTitle: entry.metaTitle || entry.title,
      description: entry.description,
      category: entry.category,
      readTime: `${entry.readTime} min read`,
      datePublished: entry.datePublished ?? "",
      dateModified: entry.dateModified || entry.datePublished || "",
      keywords: [...entry.keywords],
      excerpt: entry.excerpt || entry.description,
      tags: entry.indexTags.length ? [...entry.indexTags] : [entry.category],
      indexOrder: entry.indexOrder ?? null,
    }))
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export async function getCmsPost(slug: string) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry || !entry.published) return null;
  return {
    slug,
    title: entry.title,
    metaTitle: entry.metaTitle || entry.title,
    description: entry.description,
    category: entry.category,
    accent: entry.accent,
    readTime: entry.readTime,
    datePublished: entry.datePublished ?? "",
    dateModified: entry.dateModified || entry.datePublished || "",
    keywords: [...entry.keywords],
    summary: entry.summary,
    schemaHeadline: entry.schemaHeadline,
    schemaDescription: entry.schemaDescription || entry.description,
    ogTitle: entry.ogTitle || entry.metaTitle || entry.title,
    ogDescription: entry.ogDescription || entry.description,
    content: await entry.content(),
    faqs: entry.faqs.map((f) => ({ question: f.question, answer: f.answer })),
    relatedLinks: entry.relatedLinks.map((l) => ({ label: l.label, href: l.href })),
    cta: entry.cta.heading
      ? { heading: entry.cta.heading, body: entry.cta.body, button: entry.cta.button, href: entry.cta.href, button2: entry.cta.button2, href2: entry.cta.href2 }
      : null,
    toolCallouts: entry.toolCallouts.map((t) => ({ name: t.name, href: t.href, blurb: t.blurb })),
  };
}
