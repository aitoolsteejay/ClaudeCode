import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HR and Operations Intern | Myntmore Mumbai | Rs 7,000–15,000/mo",
  description: "Join Myntmore as an HR and Operations Intern in Worli, Mumbai. Build real hiring pipelines, KPI/KRA frameworks, and HR systems directly with the founder. 6-month minimum, PPO based on performance.",
  keywords: ["hr internship mumbai", "hr operations intern jobs", "hr intern jobs worli mumbai", "people operations internship", "hr internship india", "talent acquisition internship mumbai", "hr and ops intern jobs", "startup hr internship", "hr internship with ppo", "chief of staff internship mumbai", "hr generalist internship", "recruitment internship mumbai", "myntmore careers", "hr internship jobs mumbai"],
  alternates: { canonical: "https://www.myntmore.com/careers/hr-operations-intern" },
  openGraph: {
    title: "HR and Operations Intern | Myntmore Careers",
    description: "Build real hiring pipelines and HR systems for a fast-growing agency. Internship, Worli Mumbai.",
    url: "https://www.myntmore.com/careers/hr-operations-intern",
  },
};

const APPLY_SUBJECT = "Application for HR and Operations Intern";
const ACCENT = "#a855f7";

export default function HrOperationsIntern() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Careers", href: "/careers" }, { label: "HR and Operations Intern", href: "/careers/hr-operations-intern" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: ACCENT, border: "1px solid rgba(168,85,247,0.2)" }}>Internship · Work from Office · Worli, Mumbai</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            HR and Operations Intern
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[["Location", "Worli, Mumbai"], ["Hours", "6 hrs, 10 AM–7:30 PM"], ["Commitment", "6 months minimum"], ["Stipend", "Rs 7,000–15,000"]].map(([label, value]) => (
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
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              This is not an HR internship where you sit in a corner and scan resumes. You&apos;ll be inside a fast-growing company that is actively hiring, building culture, and scaling its people systems in real time, working directly with the founder and ops team on live people priorities, the same decisions that shape how Myntmore grows.
            </p>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0a0a0a" }}>What you&apos;ll actually be doing</p>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                Build and manage real hiring pipelines across multiple roles, help define and track KPIs and KRAs for new and existing team members, build the HR systems a rapidly scaling agency actually needs, and see how a founder thinks about team design, accountability, and performance. Not administrative busywork: you&apos;ll be contributing to decisions that determine who joins this team and how they perform.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll do</h2>
            <div className="space-y-4">
              {[
                { title: "Talent Acquisition & Hiring Support", desc: "Manage active hiring pipelines across multiple roles. Source candidates via LinkedIn, job boards, and referrals. Screen applications, coordinate interviews, track candidate status, and draft job descriptions." },
                { title: "KPI & KRA Framework Building", desc: "Help design and document KPIs and KRAs for different roles at Myntmore. Work with the founder and team leads to define what 'great performance' looks like per function, and build simple tracking systems for accountability." },
                { title: "Onboarding & People Operations", desc: "Build a structured onboarding experience for new hires. Coordinate paperwork, tool access, and first-week schedules so new team members ramp up fast." },
                { title: "HR Systems & Process Documentation", desc: "Document repeatable HR workflows into SOPs. Build and maintain HR trackers, offer status, employee records, and onboarding checklists. Identify where manual work can be streamlined using tools or AI." },
                { title: "Culture & Internal Communication", desc: "Support internal communication around policies, benefits, and team updates. Help the team stay informed and aligned as the company scales." },
                { title: "Founder-Level Exposure", desc: "Work directly with the founder on organisation design and people decisions, and support high-priority people projects as they come up." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: ACCENT }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Who you are</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Systems Builder", desc: "You want to build things that work, not just manage tasks. When there's no process, you create one" },
                { label: "Extremely Organised", desc: "You love trackers and checklists, and notice when something's about to fall through the cracks" },
                { label: "People + Process", desc: "You genuinely enjoy working with people, but know good people ops runs on clear systems" },
                { label: "Tool-Comfortable", desc: "You can quickly pick up Notion, Google Sheets, or any HR/ATS tool, and you're curious about AI" },
                { label: "Growth-Minded", desc: "You want real ownership, not guided tasks, and are ready to roll up your sleeves" },
                { label: "Bonus", desc: "Prior HR, recruitment, or people ops work, or experience organising projects, events, or teams" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <p className="text-xs font-black mb-1" style={{ color: ACCENT }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll learn</h2>
            {[
              "How a founder thinks about people: who to hire, how to structure teams, what good performance looks like",
              "How to build an HR function from the ground up, not just maintain an existing one",
              "How KPIs and KRAs actually work, beyond theory: designing and tracking real performance frameworks",
              "How hiring actually happens at speed inside a rapidly scaling company",
              "How to operate in a high-growth environment with shifting priorities and multiple open roles",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
            <p className="text-sm mt-4" style={{ color: "#8C8279" }}>
              This internship will fast-track your career in HR & People Operations, Talent Acquisition, Organisational Design, Startup Ops, or Chief of Staff / founder-track roles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why join Myntmore</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Work directly with the founder, not through layers. Get real exposure to org building and people decisions at a scaling company, on things that actually matter: hiring, performance, culture. Take ownership early, earn a PPO based on performance, and build a foundation for a career in HR, people ops, or startup leadership.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Our values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💡", title: "Innovate with purpose", desc: "Meaningful solutions, not activity for its own sake." },
                { icon: "🎯", title: "Focus on impact", desc: "Results over busyness." },
                { icon: "💪", title: "Hustle with heart", desc: "Work hard, work smart, care about what you're building." },
                { icon: "🔑", title: "Embrace collaboration", desc: "Great outcomes come from working together." },
                { icon: "🙏", title: "Take ownership", desc: "Of your role and the company's success." },
                { icon: "🏆", title: "Excellence is the standard", desc: "We don't settle." },
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
