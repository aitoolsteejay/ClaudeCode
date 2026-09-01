"use client";

import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import FadeIn from "../../components/FadeIn";

const ACCENT = "#E1306C";
const PROFILE_URL = "https://www.instagram.com/tejas_jhaveri/";

export default function FeedClient() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,48,108,0.18) 0%, rgba(193,53,132,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(217,119,6,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "The Feed", href: "/resources/feed" }]} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(225,48,108,0.35)", background: "rgba(225,48,108,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>The Feed</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            The playbooks,<br />
            <span className="relative inline-block">
              in under 60 seconds
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 380 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q95 2 190 6 Q285 10 378 5" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Short, practical Reels on B2B outbound, LinkedIn, and AI-powered lead generation, straight from our Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="#feed-grid" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Watch The Feed
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="feed-grid" className="py-16 px-4 border-t scroll-mt-24" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl p-10 sm:p-14 text-center border overflow-hidden" style={{ borderColor: "rgba(225,48,108,0.22)", background: "linear-gradient(135deg, rgba(225,48,108,0.06) 0%, rgba(245,183,49,0.06) 100%)" }}>
              <div aria-hidden="true" style={{ position: "absolute", top: "-80px", right: "-80px", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,48,108,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #E1306C 0%, #F5B731 100%)" }}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>The Feed lives on Instagram</h2>
                <p className="text-sm sm:text-base mb-8 max-w-sm mx-auto" style={{ color: "#52525B" }}>
                  Every reel, drop, and behind-the-scenes post lands first on Instagram. Follow along for the latest.
                </p>
                <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
                  View the Feed on Instagram
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center border" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", borderColor: "#2a2a3e" }}>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">We&apos;ll build this for your pipeline too</h2>
          <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Book a free 30-minute audit. We&apos;ll map out exactly how to replicate these results for your business.</p>
          <a href="/founder-meeting" className="btn-dark px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
            Book a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
