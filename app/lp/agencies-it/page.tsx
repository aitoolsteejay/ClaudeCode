import type { Metadata } from "next";
import LpLayout from "../LpLayout";

export const metadata: Metadata = {
  title: "B2B Lead Generation for Agencies & IT Companies | Myntmore",
  description: "Myntmore helps digital agencies and IT services firms book qualified retainer clients through AI-powered outbound. 12K+ meetings booked. $120M+ pipeline generated.",
  alternates: { canonical: "https://myntmore.com/lp/agencies-it" },
  robots: { index: false, follow: false },
};

const STATS = [
  { value: "23+", label: "Qualified meetings / month (avg)" },
  { value: "68%", label: "Open rate on cold email campaigns" },
  { value: "4.2×", label: "ROI in the first 90 days" },
  { value: "₹2.4Cr+", label: "Pipeline generated for agency clients" },
];

const CASE_STUDIES = [
  {
    tag: "Digital Marketing Agency · Mumbai",
    headline: "0 to 23 qualified retainer conversations in 60 days",
    body: "A 14-person performance marketing agency was relying entirely on referrals. We mapped their ICP to funded D2C and e-commerce brands, built a 3-touch cold email sequence, and layered LinkedIn DMs targeting CMOs and Growth Leads. Within 60 days they had 23 qualified conversations booked — 6 converted to retainers in the first quarter.",
    results: ["23 meetings booked", "6 retainer clients won", "₹78L new ARR"],
  },
  {
    tag: "IT Services & Staffing · Pune",
    headline: "₹1.2Cr pipeline built for an IT staffing firm in 45 days",
    body: "An IT staffing company was burning budget on job boards with zero outbound motion. We built an ABM list of 400 engineering-heavy companies raising Series A/B, crafted hyper-personalised emails referencing their job postings, and ran a LinkedIn outreach sequence to HR Heads and CTOs. Result: 18 meetings, 4 commercial proposals sent, ₹1.2Cr pipeline created.",
    results: ["18 meetings booked", "4 proposals sent", "₹1.2Cr pipeline"],
  },
  {
    tag: "Web & App Development Agency · Bengaluru",
    headline: "Consistent 15 demos/month for a dev shop with no sales team",
    body: "A 30-person product development agency had great delivery but no repeatable lead generation. We identified their sweet spot — funded fintech and healthtech startups needing a tech partner — and built a full outbound engine with automated personalisation at scale. They now run 15 qualified demos every month with one part-time SDR.",
    results: ["15 demos/month (ongoing)", "₹60L avg deal size", "1 SDR, fully handled"],
  },
];

const PROCESS = [
  { n: "01", title: "ICP Mapping", body: "We identify your best-fit client profile by vertical, company size, funding stage, and buying signals — not generic firmographics." },
  { n: "02", title: "List Building", body: "Hand-verified prospect lists of decision-makers at companies actively looking for agency partners. No recycled databases." },
  { n: "03", title: "Outreach Engine", body: "Multi-channel sequences — cold email + LinkedIn — with hyper-personalised copy based on each prospect's recent activity." },
  { n: "04", title: "Meeting Handoff", body: "Qualified meetings land directly in your calendar. You close; we fill the top of funnel, consistently." },
];

export default function AgenciesItLP() {
  return (
    <LpLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              For Agencies & IT Companies
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Stop waiting for referrals<br />Start booking retainer clients
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            We build and run the outbound engine that fills your agency's pipeline — AI-powered cold email, LinkedIn outreach, and ABM targeting the exact clients you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2">
              Book Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#get-started" className="px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl border" style={{ borderColor: "#E8E2D9", color: "#0a0a0a", backgroundColor: "#ffffff" }}>
              Get a Custom Plan
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "#8C8279" }}>No commitment. No pitch deck. 30-minute strategy call.</p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 px-4 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.value}</div>
              <div className="text-xs" style={{ color: "#52525B" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#0a0a0a" }}>
            The referral ceiling is real
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "😤", heading: "Feast or famine", body: "Great month followed by three slow ones. No predictability, no pipeline visibility, no way to plan hiring or capacity." },
              { icon: "📞", heading: "Wrong leads wasting time", body: "Inbound inquiries from micro-businesses with tiny budgets. Your team pitches and loses hours. Again." },
              { icon: "🕰️", heading: "No time for outbound", body: "You're busy delivering for existing clients. Nobody owns new business development and it shows." },
            ].map((p) => (
              <div key={p.heading} className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-black text-base mb-2" style={{ color: "#0a0a0a" }}>{p.heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>How it works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#0a0a0a" }}>
            Your outbound engine, fully managed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROCESS.map((p) => (
              <div key={p.n} className="flex gap-4 rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <span className="text-2xl font-black flex-shrink-0" style={{ color: "#F5B731" }}>{p.n}</span>
                <div>
                  <h3 className="font-black text-base mb-1" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Client results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#0a0a0a" }}>
            What we have built for agencies like yours
          </h2>
          <div className="space-y-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.tag} className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>{cs.tag}</span>
                <h3 className="text-xl font-black mt-2 mb-3" style={{ color: "#0a0a0a" }}>{cs.headline}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#52525B" }}>{cs.body}</p>
                <div className="flex flex-wrap gap-3">
                  {cs.results.map((r) => (
                    <span key={r} className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="get-started" className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free GTM audit</h2>
            <p className="text-base" style={{ color: "#52525B" }}>We will audit your current outreach, map your ICP, and tell you exactly what is holding your pipeline back. No pitch. No pressure.</p>
          </div>
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
            <form className="space-y-4"
              action="https://forms.zohopublic.com/flintstop/form/MyntmoreWebsiteform/formperma/3F8IpEgLtb2RnoXcr_yUsp56_-WdQdO2-sM6eaCOKi0/htmlRecords/submit"
              name="form" id="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="SingleLine" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Full Name *</label>
                  <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Tejas Jhaveri" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                  <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / Head of Sales" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company / Agency Name</label>
                  <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Acme Agency" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                  <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div>
                <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
                <input id="Email" name="Email" type="text" maxLength={255} placeholder="tejas@agency.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free GTM Audit</button>
              <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>
    </LpLayout>
  );
}
