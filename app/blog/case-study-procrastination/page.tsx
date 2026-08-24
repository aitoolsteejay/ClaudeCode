import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const URL = "https://www.myntmore.com/blog/case-study-procrastination";

const BLOG_AI_RESOURCES = [
  URL,
  "https://www.myntmore.com/tools/case-study-generator",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "Case Study Procrastination: Document Your Best Proof",
  description: "Your strongest B2B proof may still be buried in Slack. Learn why case studies get delayed and how to turn fresh wins into credible sales assets.",
  keywords: [
    "b2b case study generator",
    "how to write a b2b case study",
    "customer proof b2b",
    "case study procrastination",
    "sales case study template",
    "proposal generator",
    "b2b social proof",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Case Study Procrastination: Why Your Best Proof Is Still Undocumented | Myntmore",
    description: "Stop letting your strongest customer wins disappear into Slack threads and scratchpads.",
    url: URL,
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Case Study Procrastination: Why Your Best Proof Is Still Undocumented",
  description: "Why B2B teams delay documenting customer wins, and how to turn real outcomes into clear, credible case studies while the details are fresh.",
  url: URL,
  datePublished: "2026-08-24T00:00:00+05:30",
  dateModified: "2026-08-24T00:00:00+05:30",
});

export default function CaseStudyProcrastinationBlogPost() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.20) 0%, rgba(13,148,136,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(20,184,166,0.35)", background: "rgba(20,184,166,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#14b8a6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0f766e" }}>Content Strategy · 4 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Case Study Procrastination: Why Your Best Proof Is Still Undocumented
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Most B2B websites do not have a traffic problem. They have a clarity and trust problem. The strongest answer is often a real customer outcome, yet too many wins stay buried in Slack threads, call notes, and scratchpads.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
          <div className="space-y-10 text-base leading-relaxed" style={{ color: "#52525B" }}>
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Your strongest conversion asset is probably hidden</h2>
              <p>When we audit websites at Myntmore, we frequently see founders hide their strongest conversion assets: real-world outcomes, case studies, and client logos. They bury them below the fold or, worse, leave them undocumented in messy Slack threads and random scratchpads.</p>
            </section>

            <blockquote className="relative rounded-2xl border p-7 sm:p-8 text-xl sm:text-2xl font-black leading-relaxed overflow-hidden" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.35)", color: "#0a0a0a" }}>
              <span aria-hidden="true" className="absolute -top-5 right-4 text-8xl font-black opacity-10" style={{ color: "#D97706" }}>“</span>
              “People believe other people more than your headline.”
              <footer className="mt-3 text-sm font-normal" style={{ color: "#8C8279" }}>Tejas Jhaveri, Founder of Myntmore</footer>
            </blockquote>

            <p>In a noisy B2B environment, prospects are constantly asking two questions: “Do I trust them?” and “Is this actually for me?” Concrete, data-backed proof answers both questions faster than another polished claim ever could.</p>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why strong wins never become case studies</h2>
              <p>The problem is rarely a lack of results. Starting from a blank page is tedious, so the write-up gets pushed to next week. The details grow fuzzy, the customer moves on to a new priority, and the momentum dies.</p>
              <p className="mt-4">When teams finally draft the story, they often overcorrect with jargon. A simple customer journey becomes abstract fluff about “transforming digital ecosystems globally.” The result sounds impressive but proves very little.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Write your wins before they cool off</h2>
              <p>Document the problem, the work, and the measurable result while the project is still fresh. Keep the customer at the center of the story, use the exact language they use, and make every number traceable to a real source.</p>
            </section>
          </div>
          </FadeIn>

          <FadeIn delay={100}>
          <div className="mt-12 rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#172120 100%)", border: "1px solid #243331" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F5B731" }}>Free Myntmore Tool</span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">Turn rough notes into a publishable customer story</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-7 max-w-xl mx-auto" style={{ color: "#b7c2c0" }}>
              The free Case Study &amp; Proposal Generator turns completed projects into polished case studies and raw prospect notes into structured proposal drafts. Choose a mode, add the core problem, your execution, and the real metrics. Its no-hallucination safeguard works only with the facts and numbers you provide, so it will not invent statistics or inflate your claims.
            </p>
            <Link href="/tools/case-study-generator" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
              Try the Case Study &amp; Proposal Generator
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          </FadeIn>

          <div className="mt-8"><AskYourAI resources={BLOG_AI_RESOURCES} /></div>
        </div>
      </article>
    </InnerLayout>
  );
}
