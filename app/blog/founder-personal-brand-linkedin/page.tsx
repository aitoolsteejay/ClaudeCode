import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";
import JsonLd from "../../components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/founder-personal-brand-linkedin",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "The Founder's Edge: Your Best Marketing Asset",
  description: "Founders who build a LinkedIn presence close deals faster, attract better talent, and generate inbound without ad spend. Learn the exact content strategy that works.",
  alternates: { canonical: "https://www.myntmore.com/blog/founder-personal-brand-linkedin" },
  keywords: ["founder personal brand", "linkedin personal branding for founders", "why founders should post on linkedin", "founder linkedin content strategy", "building a personal brand on linkedin", "linkedin content ideas for founders", "b2b personal branding", "how to generate inbound leads from linkedin", "founder as company's best marketing asset", "linkedin ghostwriting for founders", "content types that work on linkedin", "common linkedin mistakes founders make", "how to post consistently on linkedin with no time", "turning cold outreach warm with personal brand", "linkedin thought leadership for b2b"],
  openGraph: {
    title: "The Founder's Edge: Why You Are Your Company's Best Marketing Asset",
    description: "Founders with strong LinkedIn presence close deals faster and generate inbound without ad spend.",
    url: "https://www.myntmore.com/blog/founder-personal-brand-linkedin",
  },
};

const CONTENT_TYPES = [
  { n: "01", title: "Share your opinions", desc: "What is wrong with your industry? What is a common belief that you think is total nonsense? Opinionated content is the best way to attract your ideal clients and repel the people who are not a good fit." },
  { n: "02", title: "Share your experiences", desc: "People love stories. Tell them about a mistake you made and what you learned from it. Tell them about a win you had with a client. Use real numbers and real details." },
  { n: "03", title: "Provide education", desc: "Teach your audience how to solve a small part of their problem. Give away your 'secrets' for free. If you show people that you can help them by actually helping them, they will come to you when they are ready to solve the bigger problem." },
];

const MISTAKES = [
  { title: "Being too professional", desc: "Most founders write like they are submitting a legal brief. They use jargon, passive voice, and avoid sharing any personality. This makes you forgettable. Write like you speak." },
  { title: "Inconsistency", desc: "Many founders post three times in one week and then disappear for a month. LinkedIn is a game of momentum. You are better off posting once a week, every week, than posting every day for a week and then stopping." },
  { title: "Too product-focused", desc: "Your LinkedIn feed should not be a series of feature updates and press releases. Talk about their problems 90% of the time, and only talk about your product when it is genuinely relevant to the solution." },
];

const ARTICLE_SCHEMA = buildArticleSchema({
  headline: "The Founder's Edge: Your Best Marketing Asset",
  description: "Founders who build a LinkedIn presence close deals faster, attract better talent, and generate inbound without ad spend. Learn the exact content strategy that works.",
  url: "https://www.myntmore.com/blog/founder-personal-brand-linkedin",
  datePublished: "2026-05-29T18:55:36+05:30",
  dateModified: "2026-08-18T10:23:29+05:30",
});

export default function FounderPersonalBrandLinkedIn() {
  return (
    <InnerLayout>
      <JsonLd data={ARTICLE_SCHEMA} />
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>Personal Branding · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The Founder&apos;s Edge: Why You Are Your Company&apos;s Best Marketing Asset
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Founders who build a LinkedIn presence close deals faster, attract better talent, and generate inbound without ad spend. Here is how to start.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "561%", source: "more reach for content from people vs brands", cite: "MSLGroup" },
            { stat: "82%", source: "of buyers trust companies with active founders on social", cite: "Brandfog" },
            { stat: "50%", source: "lower cost per lead for founders with strong brands", cite: "LinkedIn Data" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>Source: {s.cite}</p>
            </div>
          ))}
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The trust fatigue problem</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              In B2B, buyers are suffering from trust fatigue. Every day, they are bombarded with cold emails, LinkedIn requests, and sponsored posts from companies they have never heard of. People do not buy from logos anymore. They buy from people they trust.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>What a founder brand actually does</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              A founder brand is not about being &apos;LinkedIn famous.&apos; It is about building a trust layer that makes everything else in your business work better. It makes your outbound convert at a higher rate, makes your recruiting easier, and makes your inbound predictable.
            </p>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <p className="text-base font-semibold" style={{ color: "#0a0a0a" }}>
                &ldquo;In a crowded market, your personal brand is the only thing that your competitors cannot copy.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Cold to warm conversion</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Think about what happens when you send a cold message to a prospect. The very first thing they do is click on your profile. If they see a consistent history of insightful, helpful content, their perception of you changes. You are no longer just another salesperson. You are an expert in your field who has provided value before even asking for a meeting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>3 types of content that work</h2>
            <div className="space-y-4">
              {CONTENT_TYPES.map((ct) => (
                <div key={ct.n} className="flex gap-4 rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }}>{ct.n}</span>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{ct.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{ct.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>3 mistakes founders make on LinkedIn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {MISTAKES.map((m) => (
                <div key={m.title} className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{m.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>How to start with no time</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              The secret is to document, not create. Instead of trying to think of new ideas, just look at your calendar. What questions did a client ask you today? If you really do not have time to write, use a voice note. Record a two-minute thought on your phone while walking or driving. That is enough raw material for 4 LinkedIn posts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The long game</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Your company might change. Your product might pivot. But your personal brand and your reputation stay with you forever. In the modern B2B landscape, being invisible is a choice, and it is a very expensive one. Your name is the highest leverage asset your company has. It is time you started using it.
            </p>
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to build your personal brand for you?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We ghostwrite LinkedIn content for founders that sounds exactly like you. 4–8 posts/month from monthly voice interviews. Book a free call to see if it&apos;s a fit.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                Book a Free Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <Link href="/services/personal-branding" className="btn-ghost px-6 py-3 text-sm font-bold">
                Learn about the service
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
