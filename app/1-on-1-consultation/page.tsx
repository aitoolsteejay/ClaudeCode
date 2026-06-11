import type { Metadata } from "next";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "1-on-1 B2B Growth Consultation | Free GTM Audit | Myntmore",
  description: "Book a 1-on-1 consultation with Tejas Jhaveri, B2B growth expert. Free 30-minute GTM audit: outreach review, ICP mapping, pipeline bottleneck diagnosis. No pitch, no pressure.",
  alternates: { canonical: "https://myntmore.com/1-on-1-consultation" },
  keywords: ["1 to 1 consultation", "b2b growth consultation", "gtm audit", "outreach consultation", "tejas jhaveri"],
  openGraph: {
    title: "1-on-1 B2B Growth Consultation | Myntmore",
    description: "Free 30-minute GTM audit with Tejas Jhaveri. No pitch, no pressure.",
    url: "https://myntmore.com/1-on-1-consultation",
  },
};

export default function OneOnOneConsultation() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              1-on-1 Consultation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Get clarity on your pipeline.<br />In 30 minutes.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            Book a free 1-on-1 strategy call with Tejas Jhaveri. We&apos;ll audit your company&apos;s outreach, map your ICP, and tell you exactly what is holding your pipeline back. No pitch, no pressure.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <FadeIn><div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Choose your session</h2>
            <div className="space-y-6">
              <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "rgba(245,183,49,0.4)", boxShadow: "0 4px 16px rgba(245,183,49,0.1)" }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: "#FEF9EC", color: "#F5B731" }}>Most Popular</span>
                    <h3 className="text-lg font-black" style={{ color: "#0a0a0a" }}>Free 30-min GTM Audit</h3>
                  </div>
                  <span className="text-lg font-black" style={{ color: "#F5B731" }}>Free</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Outreach system review", "ICP clarity session", "Pipeline bottleneck diagnosis", "Custom action plan delivered after"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#52525B" }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-dark w-full py-3 text-sm font-bold text-center block">
                  Book Free 30-Min Audit
                </a>
              </div>

              <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-black" style={{ color: "#0a0a0a" }}>Extended 1-Hour Strategy Session</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Full GTM strategy workshop", "ICP + messaging deep dive", "Channel prioritisation", "90-day pipeline roadmap", "Full recording provided"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#52525B" }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full py-3 text-sm font-bold text-center block">
                  Book 1-Hour Session
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <h3 className="text-base font-black mb-4" style={{ color: "#0a0a0a" }}>What you get from the call</h3>
              {["A clear picture of where your pipeline is leaking", "An honest assessment of your ICP and messaging", "Specific recommendations on the highest-leverage changes", "A custom action plan sent within 24 hours after the call"].map((item, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                  <p className="text-sm" style={{ color: "#52525B" }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <blockquote className="text-base font-semibold leading-relaxed mb-3" style={{ color: "#0a0a0a" }}>
                &ldquo;Stop treating outbound like an art form. Build it like a software product.&rdquo;
              </blockquote>
              <cite className="text-sm not-italic" style={{ color: "#8C8279" }}>- Tejas Jhaveri, Founder · TEDx Speaker · IIT/IIM Educator</cite>
            </div>

            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>300+ B2B companies helped</h3>
              <p className="text-sm" style={{ color: "#52525B" }}>12K+ meetings booked · $120M+ pipeline generated across clients · 38% average reply rate</p>
            </div>
          </div>
        </div></FadeIn>
      </section>
    </InnerLayout>
  );
}
