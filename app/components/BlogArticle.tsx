import InnerLayout from "./InnerLayout";
import Breadcrumbs from "./Breadcrumbs";
import AskYourAI from "./AskYourAI";
import NewsletterForm from "./NewsletterForm";
import JsonLd from "./JsonLd";
import ArticleMeta from "./ArticleMeta";
import Faq from "../lp/Faq";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";

export interface BlogSection {
  heading: string;
  // Opening paragraph(s) before any list.
  paragraphs?: string[];
  // Numbered list; `lead` is rendered bold ahead of `text`.
  items?: { lead: string; text: string }[];
  // Paragraph(s) after the list.
  after?: string[];
}

// Optional side-by-side table (comparison and decision posts). One row per factor,
// one column per option.
export interface BlogComparison {
  heading: string;
  columns: [string, string];
  rows: { factor: string; a: string; b: string }[];
  // Small print under the table: where the figures come from, what is a judgement.
  note?: string;
}

export interface BlogArticleProps {
  url: string;
  tag: string; // pill label, e.g. "Cold Email"
  readTime: string; // e.g. "5 min read"
  accent: string; // hex, used for the pill and list markers
  title: string; // visible h1
  intro: string;
  sections: BlogSection[];
  // Rendered after `sections`, before the FAQ.
  comparison?: BlogComparison;
  // Sections that come after the comparison table, e.g. "which to choose".
  closingSections?: BlogSection[];
  faq: { question: string; answer: string }[];
  articleSchema: { headline: string; description: string; datePublished: string; dateModified: string };
  related: { label: string; href: string }[];
  cta: { heading: string; body: string; button: string; href: string };
  aiResources: string[];
}

// Shared layout for the text-led blog posts that follow the standard
// structure: pill + h1 + lede, prose sections (optionally with a numbered
// list), FAQ (also emitted as FAQPage schema), related reading, CTA,
// AskYourAI and the newsletter block. Mirrors the markup of the existing
// per-page posts so they look identical.
export default function BlogArticle({ url, tag, readTime, accent, title, intro, sections, comparison, closingSections, faq, articleSchema, related, cta, aiResources }: BlogArticleProps) {
  const article = buildArticleSchema({ ...articleSchema, url });

  const renderSection = (section: BlogSection) => (
    <div key={section.heading}>
      <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
      {section.paragraphs?.map((p) => (
        <p key={p} className="text-base leading-relaxed" style={{ color: "#52525B" }}>{p}</p>
      ))}
      {section.items && (
        <ol className="space-y-4 mt-4">
          {section.items.map((item, i) => (
            <li key={item.lead} className="flex gap-3">
              <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: `${accent}1a`, color: accent, border: `1px solid ${accent}4d` }}>{i + 1}</span>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                <strong style={{ color: "#0a0a0a" }}>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ol>
      )}
      {section.after?.map((p) => (
        <p key={p} className="text-base leading-relaxed mt-4" style={{ color: "#52525B" }}>{p}</p>
      ))}
    </div>
  );

  return (
    <InnerLayout>
      <JsonLd data={article} />
      <JsonLd data={buildFaqSchema(faq)} />

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="fredoka-pill inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${accent}14`, color: accent, border: `1px solid ${accent}33` }}>{tag} · {readTime}</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>{title}</h1>
          <ArticleMeta schema={article} />
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>{intro}</p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {sections.map(renderSection)}
          </div>

          {comparison && (
            <div className="mt-12">
              <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>{comparison.heading}</h2>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ backgroundColor: "#ffffff", minWidth: 560 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E8E2D9", backgroundColor: "#F8F6F2" }}>
                        <th scope="col" className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#8C8279" }}>Factor</th>
                        <th scope="col" className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: accent }}>{comparison.columns[0]}</th>
                        <th scope="col" className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest" style={{ color: "#0a0a0a" }}>{comparison.columns[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.rows.map((row, i) => (
                        <tr key={row.factor} style={{ borderBottom: i < comparison.rows.length - 1 ? "1px solid #F0EBE3" : "none" }}>
                          <th scope="row" className="text-left px-5 py-5 font-bold align-top" style={{ color: "#0a0a0a" }}>{row.factor}</th>
                          <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.a}</td>
                          <td className="px-5 py-5 leading-relaxed align-top" style={{ color: "#3D3D3D" }}>{row.b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {comparison.note && (
                <p className="text-xs mt-4 leading-relaxed" style={{ color: "#8C8279" }}>{comparison.note}</p>
              )}
            </div>
          )}

          {closingSections && closingSections.length > 0 && (
            <div className="prose-custom space-y-8 mt-12">
              {closingSections.map(renderSection)}
            </div>
          )}

          <Faq badge="FAQ" title="Common questions" items={faq.map((f) => ({ q: f.question, a: f.answer }))} />

          <div className="mt-12">
            <h2 className="text-xl font-black mb-4" style={{ color: "#0a0a0a" }}>Keep reading</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.href}>
                  <a href={r.href} className="text-base font-bold underline" style={{ color: accent }}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>{cta.heading}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>{cta.body}</p>
            <a href={cta.href} className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              {cta.button}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={aiResources} />
          </div>

          <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>The Outbound Operator</p>
            <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>One practical growth playbook, every week</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Outbound systems, AI prospecting, cold email, and LinkedIn tactics, built from real campaigns, not recycled theory.
            </p>
            <NewsletterForm inputId="blog-newsletter-email" compact />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
