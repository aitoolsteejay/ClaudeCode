import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/5-second-hero-section-test",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/icp-builder",
];

export const metadata: Metadata = {
  title: "The 5-Second Homepage Test for B2B Leads",
  description: "Most B2B websites don't have a traffic problem, they have a clarity problem. Two brutal tests to fix your homepage hero section and stop losing leads.",
  alternates: { canonical: "https://www.myntmore.com/blog/5-second-hero-section-test" },
  keywords: [
    "b2b homepage hero section test",
    "website clarity for b2b leads",
    "above the fold trust signals b2b",
    "b2b landing page positioning test",
    "hero section copywriting b2b",
    "5 second website test",
    "b2b homepage conversion tips",
    "social proof placement b2b website",
  ],
  openGraph: {
    title: "The 5-Second Test: Why Your Website's Hero Section Is Halting Your B2B Leads",
    description: "Most B2B websites don't have a traffic problem, they have a clarity problem. Here's how to fix your hero section before it costs you another lead.",
    url: "https://www.myntmore.com/blog/5-second-hero-section-test",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "The 5-Second Test: Why Your Website's Hero Section Is Halting Your B2B Leads",
  description: "Most B2B websites don't have a traffic problem, they have a clarity problem. Two brutal tests to fix your homepage hero section and stop losing leads.",
  url: "https://www.myntmore.com/blog/5-second-hero-section-test",
  datePublished: "2026-09-04T12:00:00+05:30",
  dateModified: "2026-09-04T12:00:00+05:30",
});

const SECTIONS = [
  {
    heading: "Founders Fall in Love With Complexity",
    body: "When building a business, it's incredibly easy for founders to fall in love with their product's complexity. They write elaborate homepages full of technical jargon, hoping to impress visitors. But the most critical bottleneck in your B2B lead generation pipeline often sits right at the top of your homepage: the hero section. When a prospect lands on your site, they don't read with patience, they skim like skeptics. If your hero section is vague, you are actively draining your pipeline.",
  },
  {
    heading: "The Non-Expert Test",
    body: "Show your homepage to someone completely outside your industry and give them exactly 5 seconds to look at it. Then ask them what your company actually does. If they hesitate, stumble, or guess wrong, you need to redo it. True B2B positioning has to be simple and robust enough to survive a non-expert's first glance.",
  },
  {
    heading: "The Above-The-Fold Trust Test",
    body: "B2B buyers run on trust. Yet many founders make the critical mistake of hiding their strongest conversion asset, their proof of claim, deep below the fold or tucked away on a separate case studies page. If your strongest testimonials, client logos, or metrics are buried, you're forcing the prospect to work too hard to trust you. Move your social proof directly into the hero section, where it can establish credibility immediately.",
  },
  {
    heading: "Stop Trying to Sound Clever, Start Trying to Be Clear",
    body: "If a prospect can't understand your value and verify your credibility within 5 seconds of landing on your site, they won't scroll. They'll bounce. Run both tests this week: the non-expert test on your positioning, and the trust test on your proof. Fix whichever one fails first.",
  },
];

export default function FiveSecondHeroSectionTest() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(234,179,8,0.08)", color: "#eab308", border: "1px solid rgba(234,179,8,0.2)" }}>Copywriting · 4 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The 5-Second Test: Why Your Website&apos;s Hero Section Is Halting Your B2B Leads
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Most B2B websites don&apos;t suffer from a lack of traffic. They suffer from a clarity problem, and it usually starts right at the top of the homepage.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Build a value proposition that survives the 5-second test</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Our free ICP & Value Proposition Generator turns your offer into a sharp, testable positioning statement built around exactly who you serve and the outcome you deliver, so it holds up the moment a stranger lands on your homepage.
            </p>
            <a href="/tools/icp-builder" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Try the Free ICP & Value Proposition Builder
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
