import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "B2B Lead Generation Strategist Job | Myntmore Mumbai | Rs 4–7 LPA",
  description: "Join Myntmore as a B2B Lead Generation Strategist in Worli, Mumbai. Build multi-channel outbound systems using LinkedIn, cold email, and AI tools. Rs 4–7 LPA + incentives.",
  alternates: { canonical: "https://myntmore.com/careers/lead-gen-strategist" },
  openGraph: {
    title: "B2B Lead Generation Strategist | Myntmore Careers",
    description: "Build predictable B2B pipelines across multiple industries. Full-time, Worli Mumbai.",
    url: "https://myntmore.com/careers/lead-gen-strategist",
  },
};

const APPLY_SUBJECT = "Application for B2B Lead Generation Strategist";
const ACCENT = "#3b82f6";

export default function LeadGenStrategist() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/careers" className="link-subtle text-xs font-semibold">Careers</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>B2B Lead Gen Strategist</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: ACCENT, border: "1px solid rgba(59,130,246,0.2)" }}>Full-Time · Worli, Mumbai</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            B2B Lead Generation Strategist
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[["Location", "Worli, Mumbai"], ["Type", "Full-Time"], ["CTC", "Rs 4–7 LPA + incentives"], ["Office", "WeWork, Worli"]].map(([label, value]) => (
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
              We&apos;re looking for a sharp, strategic, and execution-obsessed B2B Lead Generation Strategist who understands how to build pipelines across LinkedIn, cold email, newsletters, SEO content, communities, and outbound workflows. This is not a &apos;spray and pray&apos; lead gen role. It&apos;s a precision marketing and growth strategy role.
            </p>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0a0a0a" }}>What makes this role different</p>
              <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                At Myntmore, you won&apos;t work on just one company. You&apos;ll work across multiple founders, industries, and business models at the same time: one day solving for a SaaS founder, the next for a B2B company, then a consultant or agency. You&apos;ll get a crash course in how companies actually grow, faster than most people do in years.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-2" style={{ color: "#0a0a0a" }}>Primary goal</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Generate predictable, high-quality B2B pipeline every single week, for Myntmore and for our clients. Everything else supports this outcome: working across 5&ndash;10+ businesses at a time, understanding how different industries buy and scale, and building a skillset valuable across any business, not just one niche.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll do</h2>
            <div className="space-y-4">
              {[
                { title: "Lead Generation (Core)", desc: "Build and execute multi-channel lead gen systems (LinkedIn + cold email + content-led inbound + communities). Generate qualified leads, nurture them, and move them to booked calls." },
                { title: "ICP + Messaging", desc: "Create target lists, ICPs, buyer triggers, and value propositions. Write personalised outbound messages that actually convert." },
                { title: "LinkedIn + Cold Email", desc: "Run outreach via AI agents and enrichment tools. Manage domain health, deliverability, sequencing, and outreach volume using Apollo, Clay, Instantly, Waalaxy, Snov, SalesQL, and similar tools." },
                { title: "Content-Led Demand Gen", desc: "Support in creating inbound content angles that drive lead enquiries. Sync with the content team so outbound and content push the same audience." },
                { title: "Analytics & Optimisation", desc: "Track leads generated, reply rates, booking rates, and channel performance. Optimise messaging, targeting, and campaign strategy to keep increasing lead volume." },
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
                { label: "Mindset", desc: "Excited by variety, working on multiple businesses instead of just one energises you" },
                { label: "Funnel Knowledge", desc: "Clear understanding of outbound funnels and buyer psychology" },
                { label: "Technical", desc: "Skilled with LinkedIn, cold email, data enrichment, and automation tools" },
                { label: "Ownership", desc: "Comfortable owning a weekly lead target" },
                { label: "Analytical", desc: "Organised, structured, and fast-moving" },
                { label: "Quality-Focused", desc: "Obsessed with lead quality, not just activity" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <p className="text-xs font-black mb-1" style={{ color: ACCENT }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Skills &amp; mindset we value</h2>
            {["Outcome-Obsessed: leads over everything", "Channel Fluent: LinkedIn + Email + Communities", "Research-Driven: ICP clarity means better leads", "AI-Friendly: we run AI-led systems", "Fast Learner + High Ownership"].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll learn</h2>
            {["How to build predictable B2B pipelines from scratch", "How founders think about sales, positioning, and growth", "How different industries approach selling and scaling", "How to combine content + outbound for maximum conversion", "How to use AI + automation to scale outreach systems"].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why join Myntmore</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Work directly on real founder pipelines, get exposure to multiple industries and global markets, and learn AI-led growth systems that very few agencies in India truly understand. Work from WeWork Worli with a young, hungry team, with high growth potential and incentives tied to lead performance.
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
