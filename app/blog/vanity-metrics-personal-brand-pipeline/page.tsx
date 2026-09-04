import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/vanity-metrics-personal-brand-pipeline",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/founder-presence-analyzer",
];

export const metadata: Metadata = {
  title: "Founder Personal Branding: Pipeline, Not Likes",
  description: "Chasing likes and views on LinkedIn won't fill your pipeline. Learn why a founder's personal brand should be built for revenue, not vanity metrics.",
  alternates: { canonical: "https://www.myntmore.com/blog/vanity-metrics-personal-brand-pipeline" },
  keywords: [
    "linkedin vanity metrics vs revenue",
    "founder linkedin presence score",
    "linkedin profile positioning gap",
    "linkedin likes vs leads",
    "why linkedin engagement doesn't equal revenue",
    "benchmarking linkedin against competitors",
    "linkedin icp messaging for founders",
    "founder personal brand pipeline",
    "linkedin featured section for b2b",
    "how to measure linkedin roi",
    "conversion ready linkedin profile",
  ],
  openGraph: {
    title: "Visibility vs. Value: Optimising the Founder's Personal Brand for Pipeline, Not Likes",
    description: "A single LinkedIn message once turned into a ₹3.5 crore order. Here's why vanity metrics won't repeat it.",
    url: "https://www.myntmore.com/blog/vanity-metrics-personal-brand-pipeline",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "Visibility vs. Value: Optimising the Founder's Personal Brand for Pipeline, Not Likes",
  description: "Chasing likes and views on LinkedIn won't fill your pipeline. Learn why a founder's personal brand should be built for revenue, not vanity metrics.",
  url: "https://www.myntmore.com/blog/vanity-metrics-personal-brand-pipeline",
  datePublished: "2026-08-31T11:00:00+05:30",
  dateModified: "2026-08-31T11:00:00+05:30",
});

const SECTIONS = [
  {
    heading: "A ₹3.5 Crore Order From a Cold LinkedIn Message",
    body: "In 2013, Tejas Jhaveri, founder of Myntmore, launched Flintstop with a small loan from his father. Eight years later, the company was acquired, and a major catalyst for that growth was a single, unexpected ₹3.5 crore order that came from a client who randomly found Tejas's personal LinkedIn profile. That single transaction proved that a founder's online presence is not a luxury; it is a direct pipeline driver.",
  },
  {
    heading: "The Vanity Metrics Trap",
    body: "However, many founders who try to build a personal brand fall into a massive trap: they chase vanity metrics. They focus on views, likes, and impressions, forgetting a fundamental truth: more visibility does not mean more money. If you are posting daily but your inbox remains completely quiet, your content is likely suffering from a positioning gap.",
  },
  {
    heading: "Your Profile Is Your Landing Page",
    body: "Your LinkedIn profile acts as your business's ultimate landing page. If your headline, banner, and featured section are too vague, or focus entirely on your origin story rather than the specific outcome you deliver to your Ideal Customer Profile (ICP), your profile will underperform. Great personal branding isn't about being loud; it is about building a conversion-ready channel that quietly transforms reader interest into booked sales calls.",
  },
  {
    heading: "Benchmark Your Authority Against the Market",
    body: "How does your LinkedIn presence actually stack up against the competitors who are competing for your clients' attention? Instead of guessing, use our Founder Presence Analyzer to get an objective benchmark. By analysing your LinkedIn posting frequency, engagement rates, and positioning angles over the past 30 days alongside up to five of your direct competitors, the tool calculates a comparative Presence Score. It diagnoses precisely where your profile is losing traction, whether that's copy clarity, posting consistency, or audience engagement, and provides actionable headline rewrites and content suggestions to turn your views into real revenue.",
  },
];

export default function VanityMetricsPersonalBrandPipeline() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(0,119,181,0.08)", color: "#0077b5", border: "1px solid rgba(0,119,181,0.2)" }}>Personal Branding · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Visibility vs. Value: Optimising the Founder&apos;s Personal Brand for Pipeline, Not Likes
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            A single LinkedIn message once turned into a ₹3.5 crore order. But chasing likes and views won&apos;t get you there: more visibility does not mean more money.
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
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>See exactly how your LinkedIn presence compares</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Our free Founder Presence Analyzer benchmarks your posting frequency, engagement rate, and positioning against up to five direct competitors from the last 30 days, then hands you a comparative Presence Score plus headline rewrites and content suggestions built to convert views into booked calls.
            </p>
            <a href="/tools/founder-presence-analyzer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Analyse Your LinkedIn Founder Presence Now
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
