import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { DocumentRenderer, type DocumentRendererProps } from "@keystatic/core/renderer";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import NewsletterForm from "../../components/NewsletterForm";
import JsonLd from "../../components/JsonLd";
import ArticleMeta from "@/app/components/ArticleMeta";
import { buildArticleSchema, buildFaqSchema, SITE_URL } from "@/lib/schema";
import { getCmsPost, getCmsPostSummaries } from "@/lib/cms-posts";

// Posts written in the Keystatic admin (content/posts/*.mdoc). The older posts
// are hand-built pages in sibling folders and always take precedence over this
// route. Anything that is not a published CMS post is a 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getCmsPostSummaries();
  return posts.map((p) => ({ slug: p.slug }));
}

const iso = (date: string) => (date ? `${date}T09:00:00+05:30` : "");

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getCmsPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
    },
  };
}

const TEXT = "#52525B";
const INK = "#0a0a0a";

// Keystatic's renderer types come from a second copy of @types/react nested
// under its UI package, so the typed props are declared here and the object is
// cast once at the boundary.
type Cell = { children: ReactNode; colSpan?: number; rowSpan?: number };

const RENDERERS = {
  inline: {
    link: ({ href, children }: { href: string; children: ReactNode }) => (
      <a href={href} className="underline underline-offset-2 font-semibold" style={{ color: "#9A3412" }}>
        {children}
      </a>
    ),
  },
  block: {
    heading: ({ level, children }: { level: number; children: ReactNode }) => {
      if (level <= 2) return <h2 className="text-2xl font-black mt-10 mb-4" style={{ color: INK }}>{children}</h2>;
      if (level === 3) return <h3 className="text-xl font-black mt-8 mb-3" style={{ color: INK }}>{children}</h3>;
      return <h4 className="text-lg font-bold mt-6 mb-2" style={{ color: INK }}>{children}</h4>;
    },
    paragraph: ({ children }: { children: ReactNode }) => (
      <p className="text-base leading-relaxed" style={{ color: TEXT }}>{children}</p>
    ),
    list: ({ type, children }: { type: string; children: ReactNode[] }) => {
      const items = children.map((child, i) => (
        <li key={i} className="text-base leading-relaxed" style={{ color: TEXT }}>{child}</li>
      ));
      return type === "ordered" ? (
        <ol className="list-decimal pl-6 space-y-2">{items}</ol>
      ) : (
        <ul className="list-disc pl-6 space-y-2">{items}</ul>
      );
    },
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 pl-5 italic" style={{ borderColor: "#F5B731", color: TEXT }}>{children}</blockquote>
    ),
    divider: () => <hr style={{ borderColor: "#E8E2D9" }} />,
    code: ({ children }: { children: string }) => (
      <pre className="rounded-xl border p-4 overflow-x-auto text-sm" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", color: INK }}>
        <code>{children}</code>
      </pre>
    ),
    image: ({ src, alt }: { src: string; alt: string }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} loading="lazy" className="rounded-xl border w-full h-auto" style={{ borderColor: "#E8E2D9" }} />
    ),
    table: ({ head, body }: { head?: Cell[]; body: Cell[][] }) => (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          {head && (
            <thead>
              <tr>
                {head.map((c, i) => (
                  <th key={i} colSpan={c.colSpan} rowSpan={c.rowSpan} className="text-left font-bold p-3 border-b" style={{ borderColor: "#E8E2D9", color: INK }}>
                    {c.children}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {body.map((row, r) => (
              <tr key={r}>
                {row.map((c, i) => (
                  <td key={i} colSpan={c.colSpan} rowSpan={c.rowSpan} className="p-3 border-b" style={{ borderColor: "#E8E2D9", color: TEXT }}>
                    {c.children}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
} as unknown as DocumentRendererProps["renderers"];


export default async function CmsBlogPost({ params }: { params: { slug: string } }) {
  const post = await getCmsPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.description,
    url,
    datePublished: iso(post.datePublished),
    dateModified: iso(post.dateModified),
  });
  const aiResources = [url, SITE_URL, ...post.relatedLinks.map((l) => `${SITE_URL}${l.href}`)].slice(0, 4);

  return (
    <InnerLayout>
      <JsonLd data={articleSchema} />
      {post.faqs.length > 0 && <JsonLd data={buildFaqSchema(post.faqs)} />}

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span
            className="fredoka-pill inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(234,88,12,0.08)", color: "#9A3412", border: "1px solid rgba(234,88,12,0.2)" }}
          >
            {post.category} · {post.readTime} min read
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: INK }}>
            {post.title}
          </h1>
          <ArticleMeta schema={articleSchema} />
          <p className="speakable-summary text-lg leading-relaxed" style={{ color: TEXT }}>
            {post.summary}
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-6">
            <DocumentRenderer
              document={post.content}
              renderers={RENDERERS}
            />
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-14" aria-labelledby="post-faqs">
              <h2 id="post-faqs" className="text-2xl font-black mb-6" style={{ color: INK }}>Frequently asked questions</h2>
              <div className="space-y-4">
                {post.faqs.map((f) => (
                  <div key={f.question} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                    <h3 className="text-base font-bold mb-2" style={{ color: INK }}>{f.question}</h3>
                    <p className="text-base leading-relaxed" style={{ color: TEXT }}>{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.relatedLinks.length > 0 && (
            <section className="mt-12" aria-labelledby="post-related">
              <h2 id="post-related" className="text-lg font-black mb-3" style={{ color: INK }}>Related reading</h2>
              <ul className="space-y-2">
                {post.relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="underline underline-offset-2 font-semibold text-sm" style={{ color: "#9A3412" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-8">
            <AskYourAI resources={aiResources} />
          </div>

          <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#A14A08" }}>The Outbound Operator</p>
            <h3 className="text-base font-black mb-2" style={{ color: INK }}>One practical growth playbook, every week</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT }}>
              Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
            </p>
            <NewsletterForm inputId="blog-newsletter-email" compact />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
