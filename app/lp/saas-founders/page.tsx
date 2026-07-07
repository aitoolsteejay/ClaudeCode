import type { Metadata } from "next";
import LpLayout from "../LpLayout";

export const metadata: Metadata = {
  title: "Outbound Sales for B2B SaaS Founders | Myntmore",
  description: "Myntmore helps B2B SaaS founders book qualified demos through AI-powered cold outreach. ICP mapping, cold email, LinkedIn sequences, and pipeline building — fully managed.",
  alternates: { canonical: "https://myntmore.com/lp/saas-founders" },
  robots: { index: false, follow: false },
};

const STATS = [
  { value: "28+", label: "Qualified demos booked / month (avg)" },
  { value: "52%", label: "Reply rate on best-performing sequences" },
  { value: "60 days", label: "To first qualified pipeline" },
  { value: "$120M+", label: "Pipeline generated across SaaS clients" },
];

const CASE_STUDIES = [
  {
    tag: "B2B SaaS · HR Tech · Series A",
    headline: "0 to 28 qualified demos per month in 60 days",
    body: "An HR-tech startup had great product-market fit within their network but couldn't scale beyond warm intros. We mapped their ICP to CHROs and HR Heads at companies with 200-1000 employees scaling through a hiring spike, and built a cold email + LinkedIn sequence referencing hiring triggers. In 60 days, their AE calendar was fully booked with 28 demos/month — 7 converted to paid.",
    results: ["28 demos/month", "7 paid conversions", "60-day ramp"],
  },
  {
    tag: "PropTech SaaS · Seed Stage · Mumbai",
    headline: "Sales calendar filled in 45 days, ₹48L in new ARR",
    body: "A PropTech SaaS founder was spending 20 hours a week on manual LinkedIn outreach with no system. We rebuilt their outbound from scratch — ICP mapping to real estate developers and property management companies, automated personalisation based on their portfolio size and recent projects, and a 4-touch sequence. 45 days later: 19 demos, ₹48L ARR in new contracts.",
    results: ["19 qualified demos", "₹48L new ARR", "45-day turnaround"],
  },
  {
    tag: "Fintech SaaS · Pre-Series A · Bengaluru",
    headline: "3 enterprise pilots closed from cold outreach in one quarter",
    body: "A B2B fintech startup targeting CFOs at mid-market companies was struggling to get past gatekeepers. We built a hyper-targeted ABM campaign — personalised research notes for each account, multi-touch sequences mixing email and LinkedIn — and coached them on objection handling. In one quarter: 22 meetings, 3 enterprise pilots closed, 2 expanding.",
    results: ["22 meetings booked", "3 enterprise pilots", "2 expansion deals"],
  },
];

const PROCESS = [
  { n: "01", title: "ICP & Buyer Map", body: "We define exactly who your buyer is — title, company stage, industry, tech stack, and the trigger signals that make them ready to buy. No guessing." },
  { n: "02", title: "Signal-Based Targeting", body: "We build prospect lists using buying signals — funding rounds, hiring sprees, new leadership hires, tech adoption — not just job titles." },
  { n: "03", title: "Multi-Channel Sequences", body: "Cold email and LinkedIn combined, with copy personalised to each prospect's context. Not a generic template everyone ignores." },
  { n: "04", title: "Demo-Ready Handoffs", body: "Only qualified prospects — right ICP, right pain, right authority — hit your calendar. You demo and close. We keep the pipeline flowing." },
];

export default function SaasFoundersLP() {
  return (
    <LpLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              For B2B SaaS Founders
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Outbound that books demos<br />not just opens
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            We build and run a predictable outbound engine for B2B SaaS — ICP mapping, signal-based targeting, cold email and LinkedIn sequences that put qualified prospects in your calendar every week.
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
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Sound familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#0a0a0a" }}>
            Warm intros only take you so far
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "📭", heading: "Cold outreach getting ignored", body: "Generic sequences, same openers as every other SaaS tool. Your emails land, nobody replies. You wonder if cold outreach even works." },
              { icon: "🎯", heading: "Wrong ICP, wrong pain", body: "Booking demos with companies who are not ready, not right-sized, or not the actual buyer. AE time wasted on bad-fit prospects." },
              { icon: "🔄", heading: "Founder doing outbound manually", body: "You spend half your week on LinkedIn and email instead of product and customers. It doesn't scale and it burns you out." },
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
            A full outbound engine built for SaaS
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
            What we have built for SaaS companies like yours
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
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#0a0a0a" }}>Get your free outbound audit</h2>
            <p className="text-base" style={{ color: "#52525B" }}>We will audit your ICP, outreach copy, and pipeline — and hand you a custom action plan. Free, no strings attached.</p>
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
                  <input id="SingleLine" name="SingleLine" type="text" required maxLength={255} placeholder="Arjun Sharma" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="SingleLine2" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation *</label>
                  <input id="SingleLine2" name="SingleLine2" type="text" required maxLength={255} placeholder="Founder / CEO / Head of Growth" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="SingleLine3" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company / Product Name</label>
                  <input id="SingleLine3" name="SingleLine3" type="text" maxLength={255} placeholder="Acme SaaS" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
                <div>
                  <label htmlFor="PhoneNumber_countrycode" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                  <input id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" type="tel" maxLength={20} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
                </div>
              </div>
              <div>
                <label htmlFor="Email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Work Email</label>
                <input id="Email" name="Email" type="text" maxLength={255} placeholder="arjun@acmesaas.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }} />
              </div>
              <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">Get My Free Outbound Audit</button>
              <p className="text-center text-xs" style={{ color: "#8C8279" }}>We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>
    </LpLayout>
  );
}
