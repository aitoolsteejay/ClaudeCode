import type { Metadata } from "next";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import FadeIn from "../components/FadeIn";
import NewsletterForm from "../components/NewsletterForm";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

const URL = `${SITE_URL}/newsletter-subscribe`;
export const metadata: Metadata = {
  title: "Subscribe to The Outbound Operator",
  description: "Join The Outbound Operator for weekly insights on B2B outbound, AI prospecting, cold email, LinkedIn outreach, and pipeline growth.",
  keywords: ["b2b outbound newsletter", "cold email newsletter", "ai outbound insights", "lead generation newsletter", "the outbound operator"],
  alternates: { canonical: URL },
  openGraph: { title: "The Outbound Operator Newsletter | Myntmore", description: "Weekly AI and B2B outbound insights with practical systems you can use.", url: URL },
};
const BREADCRUMBS = buildBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Newsletter", url: URL }]);
const TOPICS = [
  ["01", "Outbound systems", "Practical ways to build a more predictable B2B pipeline."],
  ["02", "AI prospecting", "Workflows, tools, and prompts that make research and outreach sharper."],
  ["03", "Messaging that earns replies", "Cold email and LinkedIn lessons grounded in relevance, not volume."],
  ["04", "Real campaign breakdowns", "What worked, what failed, and what we changed across live campaigns."],
];

export default function NewsletterSubscribePage() {
  return (
    <InnerLayout>
      <JsonLd data={BREADCRUMBS} />
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" className="absolute rounded-full animate-[bubble-float_10s_ease-in-out_infinite]" style={{ top: -180, left: -180, width: 700, height: 700, background: "radial-gradient(circle,rgba(245,183,49,.28),rgba(245,183,49,.08) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div aria-hidden="true" className="absolute rounded-full animate-[bubble-float_12s_ease-in-out_infinite_reverse]" style={{ top: -120, right: -200, width: 640, height: 640, background: "radial-gradient(circle,rgba(59,130,246,.18),rgba(59,130,246,.05) 42%,transparent 70%)", filter: "blur(55px)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Newsletter", href: "/newsletter-subscribe" }]} />
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ backgroundColor: "rgba(245,183,49,.1)", borderColor: "rgba(217,119,6,.3)" }}><span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#D97706" }} /><span className="text-xs font-black uppercase tracking-[.16em]" style={{ color: "#D97706" }}>Free weekly newsletter</span></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.06] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>Become a better<br /><span className="relative inline-block">outbound operator<svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 360 14" preserveAspectRatio="none" aria-hidden="true"><path d="M4 9 Q90 3 180 9 Q270 15 356 7" stroke="#F5B731" strokeWidth="3.5" fill="none" strokeLinecap="round" /></svg></span></h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>The Outbound Operator delivers useful lessons on AI, prospecting, cold email, LinkedIn, and B2B pipeline growth. Built for founders and growth teams who prefer systems over noise.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-sm font-semibold hero-fade-d3" style={{ color: "#6B6B6B" }}><span>✓ Practical and actionable</span><span>✓ One useful email a week</span><span>✓ Unsubscribe anytime</span></div>
            </div>
            <div className="relative rounded-[28px] border p-7 sm:p-9 hero-fade-d2" style={{ backgroundColor: "rgba(255,255,255,.92)", borderColor: "rgba(245,183,49,.32)", boxShadow: "0 22px 65px rgba(55,42,10,.12)" }}>
              <div aria-hidden="true" className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl rotate-6" style={{ background: "linear-gradient(135deg,#F5B731,#D97706)" }} />
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#D97706" }}>The Outbound Operator</span>
              <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-3" style={{ color: "#0a0a0a" }}>Join the operator&apos;s list</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>Enter your work email and the next issue will land in your inbox.</p>
              <NewsletterForm inputId="newsletter-page-email" buttonLabel="Subscribe to the newsletter" />
              <p className="text-[11px] leading-relaxed mt-4 text-center" style={{ color: "#8C8279" }}>By subscribing, you agree to receive marketing emails from Myntmore. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-t" style={{ backgroundColor: "#fff", borderColor: "#E8E2D9" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn><div className="text-center max-w-2xl mx-auto mb-10"><span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: "#D97706" }}>Inside every issue</span><h2 className="text-3xl sm:text-4xl font-black mt-3" style={{ color: "#0a0a0a" }}>Less theory. More useful moves.</h2></div></FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">{TOPICS.map(([number, title, description], index) => <FadeIn key={number} delay={index * 80}><div className="group h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}><div className="flex items-start gap-4"><span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-xs font-black shrink-0 group-hover:rotate-6 transition-transform" style={{ backgroundColor: index % 2 ? "#DBEAFE" : "#FEF3C7", color: index % 2 ? "#2563EB" : "#D97706" }}>{number}</span><div><h3 className="text-lg font-black mb-2" style={{ color: "#0a0a0a" }}>{title}</h3><p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{description}</p></div></div></div></FadeIn>)}</div>
        </div>
      </section>
    </InnerLayout>
  );
}
