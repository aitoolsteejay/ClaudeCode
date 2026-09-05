import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/founder-led-sales-before-scaling",
  "https://www.myntmore.com",
  "https://www.myntmore.com/services/gtm-strategy",
];

export const metadata: Metadata = {
  title: "Why Founders Must Sell Before They Scale",
  description: "You can't delegate a sales process you haven't personally proven. Why founder-led sales, not a hired team, has to come first for an early-stage B2B business.",
  alternates: { canonical: "https://www.myntmore.com/blog/founder-led-sales-before-scaling" },
  keywords: [
    "founder led sales b2b",
    "founder led growth b2b",
    "when to hire your first salesperson",
    "startup founder sales tips",
    "b2b sales playbook for founders",
    "founder market fit b2b",
    "early stage b2b sales strategy",
    "delegating your sales process",
  ],
  openGraph: {
    title: "The Founder's Pipeline: Why You Must Sell the Product Before You Scale the System",
    description: "You can't delegate a sales process you haven't personally proven works. Why founder-led sales has to come first, not a hired team or an outsourced agency.",
    url: "https://www.myntmore.com/blog/founder-led-sales-before-scaling",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "The Founder's Pipeline: Why You Must Sell the Product Before You Scale the System",
  description: "You can't delegate a sales process you haven't personally proven. Why founder-led sales, not a hired team, has to come first for an early-stage B2B business.",
  url: "https://www.myntmore.com/blog/founder-led-sales-before-scaling",
  datePublished: "2026-09-04T12:00:00+05:30",
  dateModified: "2026-09-04T12:00:00+05:30",
});

const SECTIONS = [
  {
    heading: "The Founder-Market Fit Illusion",
    body: "In the early stages of launching a B2B startup or agency, founders often face a tempting illusion: if I spend my time perfecting the product, writing clean code, or hiring an outsourced sales agency, the customers will find us automatically. That mindset is a dangerous trap. In the early stages of building a business, you cannot afford to separate yourself from the market. You have to focus intensely on selling the product yourself.",
  },
  {
    heading: "You Carry Context No Hire Can Replicate",
    body: "A hired salesperson or an outsourced agency cannot replicate the raw passion, the why, and the deep problem-solving context of the person who built the business from scratch. That context is exactly what turns a skeptical prospect into a believer, and no playbook can hand it to someone else on day one.",
  },
  {
    heading: "The Feedback Loop Only Works If You're on the Calls",
    body: "When you're the one on the sales calls, hearing the prospect's objections, watching where their eyes light up, and noting what makes them hesitate, you get immediate product-market data. That raw feedback is what lets you refine your positioning, adjust your messaging, and sharpen your offer in real time.",
  },
  {
    heading: "Build the Playbook Before You Delegate It",
    body: "True leverage comes from delegation: the faster you delegate repeatable tasks, the faster you can scale and grow. But you can't delegate a process you haven't personally proven works. If you try to scale a sales engine before you've cracked the outreach angles and closed the first batch of clients yourself, you're not scaling a system. You're scaling chaos.",
  },
  {
    heading: "Prove the Math Before You Hand Off the Wheel",
    body: "Don't hide behind product development or your administrative checklist. Get on the frontline, run your own lead generation campaigns, close the first deals, and build a validated sales playbook. Only once you've personally proven the math of your funnel should you hand the reins to a growing team.",
  },
];

export default function FounderLedSalesBeforeScaling() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#f97316", border: "1px solid rgba(249,115,22,0.2)" }}>Sales Strategy · 4 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The Founder&apos;s Pipeline: Why You Must Sell the Product Before You Scale the System
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            In the early stages of a B2B startup, it&apos;s tempting to believe customers will find you automatically. They won&apos;t, and hiring your way out of that problem too early only scales chaos.
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

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
