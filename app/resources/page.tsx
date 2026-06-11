import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Growth Resources: Blogs, Tools & Case Studies | Myntmore",
  description: "Free B2B lead generation resources from Myntmore — in-depth blogs on cold email, ICP mapping, LinkedIn outreach, and outbound metrics, plus free AI tools and real client case studies.",
  alternates: { canonical: "https://myntmore.com/resources" },
  openGraph: {
    title: "B2B Growth Resources: Blogs, Tools & Case Studies | Myntmore",
    description: "Free playbooks, tools, and real client results for B2B founders who want predictable pipeline.",
    url: "https://myntmore.com/resources",
  },
};

const BLOG_POSTS = [
  {
    href: "/blog/predictable-b2b-lead-gen-engine",
    tag: "Lead Generation",
    title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine",
    excerpt: "The exact framework we use to build a lead generation engine that compounds over time. No guessing, no spraying.",
    readTime: "5 min read",
    accent: "#3b82f6",
  },
  {
    href: "/blog/cold-email-deliverability-guide",
    tag: "Cold Email",
    title: "Cold Email Deliverability: Why Your Emails Land in Spam (And How to Fix It)",
    excerpt: "Deliverability is the silent killer of outbound. Most campaigns fail before a single human ever reads them. Here is how to fix it.",
    readTime: "6 min read",
    accent: "#ef4444",
  },
  {
    href: "/blog/icp-mapping-b2b",
    tag: "ICP & Targeting",
    title: "ICP Mapping for B2B: How to Define the Exact Buyer Who Will Close",
    excerpt: "Stop targeting everyone. The exact ICP mapping process we use to find the buyers most likely to close — and build outreach around them.",
    readTime: "5 min read",
    accent: "#10b981",
  },
  {
    href: "/blog/linkedin-outreach-sequences",
    tag: "LinkedIn Outreach",
    title: "LinkedIn Outreach Sequences That Actually Get Replies",
    excerpt: "The multi-touch LinkedIn sequence structure that warms up prospects and converts connections into conversations — without being spammy.",
    readTime: "6 min read",
    accent: "#a855f7",
  },
  {
    href: "/blog/b2b-lead-gen-metrics",
    tag: "Analytics",
    title: "The 7 B2B Lead Gen Metrics That Actually Matter (And What to Do When They Drop)",
    excerpt: "Most outbound teams track the wrong numbers. These 7 metrics tell you exactly where your pipeline is leaking — and how to fix it.",
    readTime: "7 min read",
    accent: "#f97316",
  },
];

const FREE_TOOLS = [
  { title: "LinkedIn Profile Optimizer", desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies.", href: "https://myntmore-linkedin-profile-optimizer.lovable.app", icon: "🔗" },
  { title: "DM Angle Generator", desc: "Generate hyper-personalised outreach opening angles based on prospect triggers and activity.", href: "https://mynt-more-angles.lovable.app", icon: "⚡" },
];

const CASE_STUDIES = [
  {
    href: "/case-studies/saas-series-a",
    tag: "SaaS · Series A",
    title: "40 qualified meetings in 8 weeks from a cold start",
    stats: ["40 meetings", "34% reply rate", "$1.2M pipeline"],
    accent: "#3b82f6",
  },
  {
    href: "/case-studies/professional-services-linkedin",
    tag: "Professional Services",
    title: "LinkedIn brand drove 3x inbound in 90 days",
    stats: ["3x inbound", "18K new followers", "4.8% engagement"],
    accent: "#a855f7",
  },
  {
    href: "/case-studies/ecommerce-conversion-playbook",
    tag: "eCommerce Tech",
    title: "Cold email added $400K pipeline in 6 weeks",
    stats: ["28 meetings", "41% open rate", "$400K pipeline"],
    accent: "#10b981",
  },
  {
    href: "/case-studies/founder-personal-brand-linkedin",
    tag: "B2B Founder",
    title: "Bootstrapped founder: 0 to 22K followers and 8 inbound deals",
    stats: ["22K followers", "8 inbound deals", "6.2% engagement"],
    accent: "#f97316",
  },
  {
    href: "/case-studies/predictable-b2b-lead-gen-engine",
    tag: "Professional Services",
    title: "Full outbound engine books 15+ meetings/month on autopilot",
    stats: ["15+ meetings/mo", "29% reply rate", "4x pipeline"],
    accent: "#ef4444",
  },
];

export default function Resources() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Learn the system.<br />Then let us run it.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2 mb-10" style={{ color: "#52525B" }}>
            Free playbooks, tools, and weekly insights for B2B founders who want predictable pipeline.
          </p>
          {/* Section nav */}
          <div className="flex flex-wrap gap-3 hero-fade-d2">
            {[
              { label: "Blogs", href: "#blogs" },
              { label: "Tools", href: "#tools" },
              { label: "Case Studies", href: "#case-studies" },
              { label: "Newsletter", href: "#newsletter" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-bold px-5 py-2 rounded-full border transition-all duration-200 hover:border-yellow-400 hover:text-black" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#3D3D3D" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blogs ── */}
      <section id="blogs" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>Blog</span>
              <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>In-depth guides & playbooks</h2>
            </div>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((p) => (
                <Link key={p.href} href={p.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${p.accent},${p.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${p.accent}12`, color: p.accent }}>{p.tag}</span>
                    <h3 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{p.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                      <span className="text-xs font-bold" style={{ color: p.accent }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tools ── */}
      <section id="tools" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Free Tools</span>
            <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>AI-powered tools, free to use</h2>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FREE_TOOLS.map((t) => (
                <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <div className="text-2xl mb-3">{t.icon}</div>
                  <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>{t.desc}</p>
                  <span className="text-xs font-bold" style={{ color: "#F5B731" }}>Try free →</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(16,185,129,0.08)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>Case Studies</span>
              <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>Real results, real numbers</h2>
            </div>
            <Link href="/case-studies" className="text-sm font-bold hidden sm:inline-flex items-center gap-1" style={{ color: "#F5B731" }}>
              View all <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((cs) => (
                <Link key={cs.href} href={cs.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${cs.accent},${cs.accent}66)` }} />
                  <div className="p-6">
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${cs.accent}12`, color: cs.accent }}>{cs.tag}</span>
                    <h3 className="text-sm font-black mb-4 leading-snug" style={{ color: "#0a0a0a" }}>{cs.title}</h3>
                    <div className="space-y-1 mb-4">
                      {cs.stats.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={cs.accent} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold" style={{ color: cs.accent }}>Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 sm:hidden text-center">
              <Link href="/case-studies" className="text-sm font-bold" style={{ color: "#F5B731" }}>View all case studies →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Newsletter + Masterclass ── */}
      <section id="newsletter" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Stay Sharp</span>
            <h2 className="text-2xl font-black" style={{ color: "#0a0a0a" }}>Weekly insights & on-demand learning</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706" }}>Weekly Newsletter</span>
              <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>The Outbound Operator</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>Weekly breakdowns of outbound systems, AI tools, and GTM plays that are working right now. No fluff.</p>
              <form method="POST" action="https://tsop-zgfl.maillist-manage.com/weboptin.zc" target="_blank" className="flex gap-2">
                <input type="text" name="CONTACT_EMAIL" placeholder="Your email" required className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm outline-none border" style={{ backgroundColor: "#F8F6F2", borderColor: "rgba(245,183,49,0.4)", color: "#0a0a0a" }} />
                <button type="submit" className="px-4 py-2 rounded-lg text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>Join</button>
                <input type="hidden" name="submitType" value="optinCustomView" />
                <input type="hidden" name="formType" value="QuickForm" />
                <input type="hidden" name="zx" value="136d6a7e5" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" value="" />
                <input type="hidden" name="mode" value="OptinCreateView" />
                <input type="hidden" name="zcld" value="" />
                <input type="hidden" name="zctd" value="" />
                <input type="hidden" name="document_domain" value="" />
                <input type="hidden" name="zc_Url" value="flin-zgpm.maillist-manage.com" />
                <input type="hidden" name="new_optin_response_in" value="0" />
                <input type="hidden" name="duplicate_optin_response_in" value="0" />
                <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
                <input type="hidden" name="zc_formIx" value="3z9fc5e049897874918c8ec61408434d90ec1e3c29e2f0e6cf2784215521d683ff" />
                <input type="hidden" name="viewFrom" value="URL_ACTION" />
                <input type="hidden" name="emailReportId" value="" />
              </form>
            </div>
            <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6" }}>On-Demand Video</span>
              <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>B2B Lead Gen Masterclass</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>The workshop from IIT Madras and TiE Chennai for 100+ founders and GTM leaders, now on demand. 45 minutes.</p>
              <a href="https://youtube.com/@TJtheLeadGenExpert" target="_blank" rel="noopener noreferrer" className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-1.5">
                Watch 45min Video
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
