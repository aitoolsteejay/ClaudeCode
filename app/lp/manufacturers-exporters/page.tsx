import type { Metadata } from "next";
import LpLayout from "../LpLayout";

export const metadata: Metadata = {
  title: "International Buyer Outreach for Indian Manufacturers & Exporters | Myntmore",
  description: "Myntmore helps Indian manufacturers and exporters find international buyers through AI-powered outbound. LinkedIn, cold email, and ABM targeting global procurement heads.",
  alternates: { canonical: "https://myntmore.com/lp/manufacturers-exporters" },
  robots: { index: false, follow: false },
};

const STATS = [
  { value: "14+", label: "International buyer meetings / quarter (avg)" },
  { value: "38", label: "Countries our clients have closed deals in" },
  { value: "6×", label: "More meetings vs trade show ROI" },
  { value: "$2.4M+", label: "Export pipeline generated" },
];

const CASE_STUDIES = [
  {
    tag: "Auto Parts Exporter · Gujarat",
    headline: "14 qualified international buyer meetings in one quarter",
    body: "An auto components manufacturer with ISO certification was relying solely on trade fairs and B2B portals. We built a prospect list of procurement managers and sourcing heads at Tier-1 auto manufacturers in Europe and Southeast Asia, and ran a targeted cold email + LinkedIn campaign. In one quarter, they booked 14 meetings — 3 led to formal RFQs.",
    results: ["14 international buyer meetings", "3 RFQs initiated", "2 new export markets"],
  },
  {
    tag: "Textile Manufacturer · Surat",
    headline: "Distributor partnerships in 3 new countries within 90 days",
    body: "A Surat-based synthetic textile manufacturer wanted to break into the Middle East and African markets without spending on trade delegations. We mapped importer and distributor profiles across UAE, Kenya, and Nigeria, built personalised outreach referencing their product categories, and ran a consistent campaign. 90 days later: 11 distributor conversations, 3 signed partnership agreements.",
    results: ["11 distributor conversations", "3 partnership agreements", "UAE, Kenya, Nigeria markets"],
  },
  {
    tag: "Industrial Equipment · Pune",
    headline: "₹3.2Cr B2B export pipeline for a capital goods manufacturer",
    body: "A Pune-based capital goods company was selling domestically but struggling to break into international markets. We identified their target buyer — factory operators and procurement VPs at mid-sized industrial companies in ASEAN — and built an ABM campaign with personalised decks and email sequences. Result: 9 meetings with qualified buyers, ₹3.2Cr in active pipeline.",
    results: ["9 qualified buyer meetings", "₹3.2Cr pipeline", "ASEAN market entry"],
  },
];

const PROCESS = [
  { n: "01", title: "Buyer ICP Mapping", body: "We identify the exact buyer profile for your product — industry, country, company size, procurement structure — and build a target account list." },
  { n: "02", title: "Global Prospect Database", body: "Hand-verified contacts of importers, distributors, procurement heads, and sourcing managers in your target markets. No outdated trade directories." },
  { n: "03", title: "Personalised Outreach", body: "Multi-touch email and LinkedIn sequences tailored to each market's tone and buying behaviour. Not a generic template blast." },
  { n: "04", title: "Qualified Meetings", body: "Interested buyers land in your calendar. Your team focuses on relationship-building and closing — we handle the cold outreach." },
];

export default function ManufacturersExportersLP() {
  return (
    <LpLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              For Manufacturers & Exporters
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Find international buyers<br />without trade fairs
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            We connect Indian manufacturers and exporters with qualified global buyers through AI-powered outreach — targeting procurement heads, importers, and distributors in your exact export markets.
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

      {/* Problem */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>The export challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#0a0a0a" }}>
            Trade fairs and portals are not enough
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "✈️", heading: "Trade fairs are expensive and slow", body: "₹8-15L spent per fair. Two leads who ghost you. Six months of follow-up for one deal. The ROI doesn't add up." },
              { icon: "📋", heading: "B2B portals bring wrong enquiries", body: "IndiaMART and Alibaba attract price shoppers. Finding serious buyers among hundreds of low-quality enquiries wastes your sales team's time." },
              { icon: "🌍", heading: "You don't know who to target globally", body: "Finding the right importer or distributor in a new country — with the right product fit and buying capacity — is nearly impossible without local intelligence." },
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
            Your global buyer pipeline, built and managed
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
            What we have built for manufacturers like yours
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
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free export GTM audit</h2>
            <p className="text-base" style={{ color: "#52525B" }}>We will map your target export markets, identify the right buyer profiles, and show you exactly how to start generating international meetings. No cost. No obligation.</p>
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
                  <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Ramesh Patel" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                  <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="MD / Export Head / Owner" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company Name</label>
                  <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Patel Industries Pvt Ltd" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                  <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div>
                <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
                <input id="Email" name="Email" type="text" maxLength={255} placeholder="ramesh@patelindustries.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free Export GTM Audit</button>
              <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>
    </LpLayout>
  );
}
