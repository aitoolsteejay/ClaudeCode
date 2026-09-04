import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Free B2B Growth Guides",
  description: "Free step-by-step guides on AI agents, Claude skills, and Vibe Prospecting for B2B founders who want to book more meetings without hiring a bigger team.",
  keywords: [
    "b2b growth guides",
    "ai agents for lead generation",
    "claude skills for founders",
    "vibe prospecting guide",
    "ai prospecting tools",
    "b2b automation guides",
    "linkedin outreach automation",
    "ai lead generation blueprint",
    "claude ai for sales",
    "b2b founder resources",
    "outbound automation guide",
    "n8n lead generation workflow",
    "claude connectors for sales",
  ],
  alternates: { canonical: "https://www.myntmore.com/resources/guides" },
  openGraph: {
    title: "Free B2B Growth Guides | Myntmore",
    description: "Step-by-step AI and outbound guides, built by the team behind 12K+ B2B meetings booked.",
    url: "https://www.myntmore.com/resources/guides",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const GUIDES = [
  {
    href: "/instagram-resources/golden-icp-framework",
    tag: "ICP & Targeting",
    title: "The Golden ICP Framework",
    excerpt: "Build prospect lists around pressure, buying triggers, and real-time context so your cold outreach reaches the right buyers at the right moment.",
    readTime: "7 min read",
    accent: "#D97706",
  },
  {
    href: "/instagram-resources/80-us-meetings-ai-agents",
    tag: "AI Agents",
    title: "80+ US Meetings Booked in 1 Month with AI Agents",
    excerpt: "The exact AI-agent blueprint behind 800 LinkedIn connections, 80+ US B2B meetings, and 4 new clients a month, fully automated with n8n, Apollo/Clay, and AI enrichment.",
    readTime: "8 min read",
    accent: "#F97316",
  },
  {
    href: "/instagram-resources/how-to-set-up-vibe-prospecting",
    tag: "Prospecting",
    title: "How to Set Up Vibe Prospecting on Claude for B2B Leads",
    excerpt: "A step-by-step setup guide for the Vibe Prospecting Claude connector, plus 10 ready-to-copy prompts for pulling verified B2B leads by funding, headcount, tech stack, and hiring signals.",
    readTime: "6 min read",
    accent: "#8b5cf6",
  },
  {
    href: "/instagram-resources/claude-skills-guide",
    tag: "AI & Claude",
    title: "The 6 Claude Skills Guide",
    excerpt: "Six ready-to-use Claude skills for founders and marketers: content distribution, LinkedIn growth, lead generation, competitor research, proposals, and personal brand.",
    readTime: "7 min read",
    accent: "#F5B731",
  },
];

export default function GuidesPage() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(217,119,6,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(124,58,237,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-140px", left: "10%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.18) 0%, rgba(217,119,6,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(249,115,22,0.35)", background: "rgba(249,115,22,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F97316" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F97316" }}>Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Step-by-step,<br />
            <span className="relative inline-block">
              copy-paste ready
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q75 2 150 6 Q225 10 298 5" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Practical AI and outbound setup guides for B2B founders, built from the exact systems we run for our own clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="#guides-grid" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Browse the Guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/resources/blogs" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <section id="guides-grid" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((g) => (
                <Link key={g.href} href={g.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${g.accent},${g.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${g.accent}12`, color: g.accent }}>{g.tag}</span>
                    <h2 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{g.title}</h2>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{g.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8C8279" }}>{g.readTime}</span>
                      <span className="text-xs font-bold" style={{ color: g.accent }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">We&apos;ll build this for your pipeline too</h2>
          <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Book a free 30-minute audit. We&apos;ll map out exactly how to replicate these results for your business.</p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
            Book a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
