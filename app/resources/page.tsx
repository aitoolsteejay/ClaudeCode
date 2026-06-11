import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "B2B Growth Playbooks, Tools & Newsletter | Myntmore Resources",
  description: "Free playbooks, lead gen tools, and weekly outbound insights for B2B founders. The 6-Week Pipeline Blueprint, LinkedIn Profile Optimizer, DM Angle Generator, and more.",
  alternates: { canonical: "https://myntmore.com/resources" },
  openGraph: {
    title: "B2B Growth Playbooks, Tools & Newsletter | Myntmore",
    description: "Learn the system. Then let us run it.",
    url: "https://myntmore.com/resources",
  },
};

const BLOG_POSTS = [
  { href: "/blog/predictable-b2b-lead-gen-engine", tag: "Lead Generation", title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine", excerpt: "Most B2B outbound fails because it has no system. Here is the exact framework we use to build a lead generation engine that compounds over time.", readTime: "5 min read", hoverClass: "card-hover-blue" },
  { href: "/blog/ecommerce-conversion-playbook", tag: "Conversion", title: "The eCommerce Conversion Playbook: Turning Browsers into Buyers", excerpt: "Traffic without conversion is just expensive noise. Here is a practical playbook for eCommerce brands that want more buyers, not just more visitors.", readTime: "5 min read", hoverClass: "card-hover-green" },
  { href: "/blog/founder-personal-brand-linkedin", tag: "Personal Branding", title: "The Founder's Edge: Why You Are Your Company's Best Marketing Asset", excerpt: "Founders who build a LinkedIn presence close deals faster, attract better talent, and generate inbound without ad spend. Here is how to start.", readTime: "5 min read", hoverClass: "card-hover-purple" },
];

const FREE_TOOLS = [
  { title: "LinkedIn Profile Optimizer", desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies.", href: "https://myntmore-linkedin-profile-optimizer.lovable.app", icon: "🔗" },
  { title: "DM Angle Generator", desc: "Generate hyper-personalised outreach opening angles based on prospect triggers and activity.", href: "https://mynt-more-angles.lovable.app", icon: "⚡" },
];

export default function Resources() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Learn the system.<br />Then let us run it.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Free playbooks, tools, and weekly insights for B2B founders who want predictable pipeline.
          </p>
        </div>
      </section>

      {/* Featured Playbook */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Featured Playbook</h2>
          <div className="rounded-2xl overflow-hidden border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Free Download</span>
                <h3 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>The 6-Week Pipeline Blueprint</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>
                  The exact system we use to go from zero to 20+ meetings/month for B2B companies. Full framework, 40+ pages of templates. Absolutely free.
                </p>
                <a href="mailto:growth@myntmore.com?subject=6-Week Pipeline Blueprint" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                  Download Blueprint PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <p className="mt-2 text-xs" style={{ color: "#8C8279" }}>Free with email sign-up. No spam.</p>
              </div>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                <p className="text-sm font-semibold mb-4" style={{ color: "#3D3D3D" }}>What&apos;s inside:</p>
                {["ICP definition framework", "Intent signal tracking system", "Cold email sequence templates", "LinkedIn outreach playbook", "6-week build calendar", "40+ pages of templates"].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter + Masterclass */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
            <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706" }}>Weekly Newsletter</span>
            <h2 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>The Outbound Operator</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>Weekly breakdowns of outbound systems, AI tools, and GTM plays that are working right now. No fluff.</p>
            <form
              method="POST"
              action="https://tsop-zgfl.maillist-manage.com/weboptin.zc"
              target="_blank"
              className="flex gap-2"
            >
              <input type="text" name="CONTACT_EMAIL" placeholder="Your email" required
                className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ backgroundColor: "#ffffff", borderColor: "rgba(245,183,49,0.4)", color: "#0a0a0a" }} />
              <button type="submit"
                className="px-4 py-2 rounded-lg text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}>
                Join
              </button>
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
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
            <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6" }}>On-Demand Video</span>
            <h2 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>B2B Lead Gen Masterclass</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>The workshop from IIT Madras and TiE Chennai for 100+ founders and GTM leaders, now on demand. 45 minutes.</p>
            <a href="https://youtube.com/@TJtheLeadGenExpert" target="_blank" rel="noopener noreferrer" className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-1.5">
              Watch 45min Video <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Free Tools</h2>
          <FadeIn delay={80}><div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FREE_TOOLS.map((t) => (
              <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border p-6 card-hover-warm" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <div className="text-2xl mb-3">{t.icon}</div>
                <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{t.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>{t.desc}</p>
                <span className="text-xs font-bold" style={{ color: "#F5B731" }}>Try free →</span>
              </a>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>From the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className={`group block rounded-2xl border overflow-hidden ${p.hoverClass}`} style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="p-6">
                  <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706" }}>{p.tag}</span>
                  <h3 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                    <span className="text-xs font-bold" style={{ color: "#F5B731" }}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
