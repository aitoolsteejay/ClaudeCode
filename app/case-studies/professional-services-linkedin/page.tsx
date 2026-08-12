import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "LinkedIn Brand Drove 3x Inbound in 90 Days | Professional Services Case Study",
  description: "How Myntmore's personal branding service transformed a referral-dependent consulting founder into a predictable inbound engine, 3x inbound, 18K new followers, 4.8% engagement rate.",
  alternates: { canonical: "https://www.myntmore.com/case-studies/professional-services-linkedin" },
  openGraph: {
    title: "LinkedIn Brand → 3x Inbound in 90 Days | Myntmore",
    description: "3x inbound · 18K new followers · 4.8% engagement rate",
    url: "https://www.myntmore.com/case-studies/professional-services-linkedin",
  },
};

export default function ProfessionalServicesLinkedIn() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="link-subtle text-xs font-semibold">Case Studies</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Professional Services</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>Professional Services · Bootstrapped</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            LinkedIn brand drove 3x inbound in 90 days
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#52525B" }}>
            A successful consulting founder was entirely dependent on word-of-mouth referrals. Growth was highly volatile month-to-month with no predictable inbound funnel.
          </p>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            {[{ v: "3x", l: "Inbound lead volume" }, { v: "18K", l: "New followers" }, { v: "4.8%", l: "Post engagement rate" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The problem</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              A successful consulting founder had built a strong business entirely on word-of-mouth referrals. The work was excellent, but the pipeline was completely unpredictable. Some months would be overflowing with enquiries, others would be silent. There was no system for generating inbound.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The solution</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              We took over the founder&apos;s LinkedIn presence completely. Through weekly 30-minute interviews, we extracted their expertise and ghostwrote 3–4 native posts per week discussing highly technical teardowns of their industry. We rewrote their profile to act as an inbound conversion page.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Voice Extraction", desc: "Monthly 30-min interviews capturing unique opinions, client experiences, and industry insights" },
                { title: "Content Strategy", desc: "Strategic mix of opinion posts, industry teardowns, and client success stories published 3–4x per week" },
                { title: "Profile Optimisation", desc: "Complete profile rewrite positioning the founder as the go-to authority in their niche" },
                { title: "Engagement Strategy", desc: "Targeted engagement with ideal prospects to expand reach into the right audience" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The results</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              Within 90 days, the founder&apos;s inbound enquiry volume tripled. DMs from ideal prospects became a daily occurrence. The follower base grew by 18K with a highly engaged audience of the exact buyers they wanted to work with.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              {[{ v: "3x", l: "Inbound lead volume", sub: "In 90 days" }, { v: "18K", l: "New LinkedIn followers", sub: "Target ICP audience" }, { v: "4.8%", l: "Post engagement rate", sub: "vs ~1% platform average" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.v}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#3D3D3D" }}>{s.l}</div>
                  <div className="text-xs" style={{ color: "#8C8279" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>Services used in this engagement</h3>
            <div className="flex flex-wrap gap-2">
              {["Personal Branding", "LinkedIn Outreach & Automation"].map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "#F8F6F2", color: "#3D3D3D", border: "1px solid #E8E2D9" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>Get predictable inbound from LinkedIn</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Book a free call and we&apos;ll show you exactly how to build the same system for your business.
          </p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      <LeadCaptureForm />
    </InnerLayout>
  );
}
