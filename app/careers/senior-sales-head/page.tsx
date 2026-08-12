import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "Senior Sales Head Job | Myntmore Mumbai | Rs 5–16 LPA",
  description: "Join Myntmore as Senior Sales Head in Worli, Mumbai. Own outbound sales, client relationships, and CRM for a fast-growing B2B growth agency. Rs 5–16 LPA + incentives.",
  alternates: { canonical: "https://www.myntmore.com/careers/senior-sales-head" },
  openGraph: {
    title: "Senior Sales Head | Myntmore Careers",
    description: "Own Myntmore's outbound sales engine: prospecting, closing, and CRM. Full-time, Worli Mumbai.",
    url: "https://www.myntmore.com/careers/senior-sales-head",
  },
};

const APPLY_SUBJECT = "Application for Senior Sales Head";

export default function SeniorSalesHead() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/careers" className="link-subtle text-xs font-semibold">Careers</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Senior Sales Head</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(245,183,49,0.08)", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Full-Time · Worli, Mumbai</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Senior Sales Head
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[["Location", "Worli, Mumbai"], ["Type", "Full-Time"], ["Experience", "2–5 years B2B sales"], ["CTC", "Rs 5–16 LPA + incentives"]].map(([label, value]) => (
              <div key={label} className="rounded-xl border p-4" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <p className="text-xs mb-1" style={{ color: "#8C8279" }}>{label}</p>
                <p className="text-sm font-bold" style={{ color: "#0a0a0a" }}>{value}</p>
              </div>
            ))}
          </div>

          <a href={`mailto:growth@myntmore.com?subject=${encodeURIComponent(APPLY_SUBJECT)}`} className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Apply Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="mt-3 text-xs" style={{ color: "#8C8279" }}>Send to growth@myntmore.com and founder@myntmore.com with subject: {APPLY_SUBJECT}</p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>About the role</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              We&apos;re looking for a hungry, driven, and results-oriented sales lead to join our growing team. You&apos;ll play a hands-on role in building Myntmore&apos;s client base, managing outbound sales, and contributing directly to our revenue growth, connecting with founders, executives, and senior stakeholders to help them understand the power of personal branding and AI-led growth systems. This is a high-impact role for someone who thrives in a fast-paced environment and loves hunting for opportunities, closing deals, and building relationships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll do</h2>
            <div className="space-y-4">
              {[
                { title: "Lead Generation & Outreach", desc: "Own LinkedIn prospecting, identify decision-makers, and convert connections into warm leads. Run cold email campaigns and multi-channel outreach across email, LinkedIn, and calls, using Apollo, Slack communities, and other platforms." },
                { title: "Sales & Client Engagement", desc: "Lead sales calls and meetings with founders, CXOs, doctors, lawyers, and other high-value prospects. Build strong client relationships, understand their business goals, handle objections, negotiate, and close deals." },
                { title: "Business Development & Partnerships", desc: "Explore corporate tie-ups, channel partners, and strategic partnerships to expand Myntmore's reach. Drive cold calling campaigns and outreach sequences to create new business opportunities." },
                { title: "CRM & Sales Operations", desc: "Take full ownership of the CRM (Zoho or similar), keeping it organised and up to date. Track leads, follow-ups, and conversions meticulously, and analyse CRM data to optimise sales strategies." },
                { title: "Collaboration & Strategy", desc: "Collaborate with the founding team and GTM team on sales strategy, messaging, and outreach campaigns. Suggest improvements to sales processes, funnels, and client engagement methods." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#F5B731" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Who you are</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Outbound Skills", desc: "Skilled in cold calling, cold emailing, and outbound lead generation" },
                { label: "Client-Facing", desc: "Comfortable leading sales calls and client-facing conversations" },
                { label: "CRM Savvy", desc: "Experience with Zoho or willingness to learn and manage a CRM efficiently" },
                { label: "Communicator", desc: "Confident, persuasive communicator and negotiator" },
                { label: "Self-Driven", desc: "Highly organised, able to multitask in a fast-paced environment" },
                { label: "Team Player", desc: "Values collaboration but can also operate independently" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <p className="text-xs font-black mb-1" style={{ color: "#F5B731" }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Skills &amp; mindset we value</h2>
            {["Sales Hunter Mentality: relentless in pursuing and converting leads", "Data-Driven Thinking: track metrics, iterate on strategies, optimise outreach", "Tech-Savvy & Automation-Friendly: sales tools and AI-led workflows a plus", "Relationship Builder: able to foster long-term client partnerships", "Adaptable & Fast-Learner: thrives in a growing, evolving agency environment"].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why join Myntmore</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Hands-on experience with cutting-edge growth marketing and AI tools, exposure to high-net-worth clients, startup founders, and senior executives, and mentorship from founders and GTM experts. You&apos;ll help build sales processes and strategy from scratch, earn a competitive salary plus performance-based incentives, and work in a hybrid setup from WeWork Worli or remotely, with real room to grow within Myntmore.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Our values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💡", title: "Innovate with purpose", desc: "We push boundaries with meaningful, innovative solutions that help businesses scale and grow." },
                { icon: "🎯", title: "Focus on impact", desc: "We value results over busyness. Every action is aimed at measurable impact." },
                { icon: "💪", title: "Hustle with heart", desc: "Working hard, working smart, and making things happen with real passion." },
                { icon: "🔑", title: "Embrace collaboration", desc: "Great ideas come from working together and valuing diversity of thought." },
                { icon: "🙏", title: "Take ownership", desc: "Accountability and responsibility, for your role and the company's success." },
                { icon: "🏆", title: "Excellence is the standard", desc: "We don't settle for anything less than our best, in everything we do." },
              ].map((v) => (
                <div key={v.title} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <div className="text-xl mb-2">{v.icon}</div>
                  <p className="text-sm font-black mb-1" style={{ color: "#0a0a0a" }}>{v.title}</p>
                  <p className="text-sm" style={{ color: "#52525B" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-4" style={{ color: "#0a0a0a" }}>Ready to apply?</h3>
            <div className="space-y-2 mb-6">
              <a href={`mailto:growth@myntmore.com?subject=${encodeURIComponent(APPLY_SUBJECT)}`} className="block text-sm font-semibold" style={{ color: "#F5B731" }}>growth@myntmore.com</a>
              <a href={`mailto:founder@myntmore.com?subject=${encodeURIComponent(APPLY_SUBJECT)}`} className="block text-sm font-semibold" style={{ color: "#F5B731" }}>founder@myntmore.com</a>
            </div>
            <a href={`mailto:growth@myntmore.com?subject=${encodeURIComponent(APPLY_SUBJECT)}`} className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
