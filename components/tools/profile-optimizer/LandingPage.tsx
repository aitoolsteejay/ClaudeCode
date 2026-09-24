"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd from "@/app/components/JsonLd";
import { buildHowToSchema } from "@/lib/schema";
import { RelatedTools } from "@/components/tools/shared/RelatedTools";

const HOWTO_SCHEMA = buildHowToSchema("How the LinkedIn Profile Optimizer Works", [
  { name: "Paste your headline and About section", text: "Quick and easy input of your current profile details." },
  { name: "Get your free clarity audit in seconds", text: "Our AI engine processes your positioning against high-performing benchmarks." },
  { name: "Implement changes and watch your pipeline grow", text: "Apply the specific suggestions and start seeing better engagement." },
]);

// What calculateClarityScore in ProfileOptimizerClient actually checks —
// the hero example below is written to trip these same five deductions,
// so the demo matches what the real scoring engine does, not a promise.
const SCORE_CHECKS = [
  { label: "References your target audience", detail: "Names who you help, like a role, an industry, or a company size, not just what you do." },
  { label: "States a clear problem you solve", detail: "One of help, solve, fix, reduce, streamline, or a similar problem-statement verb." },
  { label: "Backs it with a number or outcome", detail: "A revenue figure, a percentage, a scale marker: something concrete to remember you by." },
  { label: "Skips vague filler language", detail: "No “passionate,” “excited,” “journey,” or “mission-driven” standing in for substance." },
  { label: "Shows authority or credibility", detail: "A title, years of experience, or a track record a reader can verify." },
];

const VAGUE_BEFORE = "Marketing Leader | Passionate about growth | Helping brands scale";
const AUTHORITY_AFTER = "Scaled outbound pipeline past $10M ARR for 40+ B2B SaaS teams. Here's what moves inbound replies.";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="flex flex-col w-full">
      <JsonLd data={HOWTO_SCHEMA} />

      {/* Hero */}
      <section className="pt-16 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(10,102,194,0.14) 0%, rgba(10,102,194,0.05) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 animate-fade-in">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(255,255,255,0.7)", borderColor: "rgba(245,183,49,0.4)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F5B731" }} aria-hidden="true" />
            <span className="text-sm font-semibold" style={{ color: "#0A0A0A" }}>Free AI Profile Audit</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-[1.05]" style={{ color: "#0A0A0A" }}>
            Your headline is the first line of your pitch.
          </h1>

          <div className="flex justify-center -mt-1 mb-6" aria-hidden="true">
            <svg viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[220px] sm:w-[260px]">
              <path d="M3 8 C30 3, 58 12, 86 8 S142 3, 170 8 S226 12, 254 8 S284 3, 297 8" stroke="#F5B731" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Most read like a job title, not a reason to reply. Here&apos;s the same profile before and after our audit.
          </p>
        </div>

        {/* Before/after demo — the tool's own Authority-angle output, not a generic promise */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center">
            <div className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #E8E2D9" }}>
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8C8279" }}>Before</span>
              <p className="mt-2 text-base leading-snug" style={{ color: "#6B6B6B" }}>{VAGUE_BEFORE}</p>
            </div>
            <div className="flex justify-center" aria-hidden="true">
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" style={{ color: "#D97706" }} />
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #F5B731", boxShadow: "0 8px 28px rgba(245,183,49,0.15)" }}>
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#B45309" }}>After &middot; Authority angle</span>
              <p className="mt-2 text-base font-semibold leading-snug" style={{ color: "#0A0A0A" }}>{AUTHORITY_AFTER}</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button onClick={onStart} variant="hero" size="xl" className="rounded-full shadow-2xl">
              Audit My Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What the audit actually checks — the real five deductions calculateClarityScore runs, not an abstracted list */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-center" style={{ color: "#0A0A0A" }}>
            What the audit actually checks
          </h2>
          <p className="text-center mb-12" style={{ color: "#6B6B6B" }}>
            Five checks, run against your exact headline and About section.
          </p>
          <div>
            {SCORE_CHECKS.map((item, i) => (
              <div
                key={item.label}
                className="flex gap-4 py-5"
                style={{ borderTop: i === 0 ? "none" : "1px solid #E8E2D9" }}
              >
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "rgba(245,183,49,0.15)" }}
                  aria-hidden="true"
                >
                  <Check className="h-4 w-4" style={{ color: "#B45309" }} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-base font-bold mb-1" style={{ color: "#0A0A0A" }}>{item.label}</p>
                  <p className="leading-relaxed" style={{ color: "#52525B" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — a genuine 3-step sequence, numbering earns its place here */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-14" style={{ color: "#0A0A0A" }}>How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Paste your headline and About section", desc: "No profile URL scraping, just the text you already have." },
              { step: "02", title: "Get your clarity score in seconds", desc: "Scored against the same five checks above, on your exact wording." },
              { step: "03", title: "Copy in the rewrite", desc: "Three headline angles, a rewritten About section, ready to paste." },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-black mb-3" style={{ color: "rgba(245,183,49,0.55)" }}>{item.step}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0A0A0A" }}>{item.title}</h3>
                <p style={{ color: "#52525B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get — the real output shape of the tool, named the way a user would understand it */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-10 text-center" style={{ color: "#0A0A0A" }}>What you get, free</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "A clarity score", desc: "Where your current profile stands, and exactly what's pulling it down." },
              { title: "Three rewritten headlines", desc: "Authority, problem-solver, and social-proof angles, so you can pick what fits your voice." },
              { title: "A ready-to-paste About section", desc: "Written around your actual role and target audience, not a generic template." },
              { title: "Your keyword gaps", desc: "The terms your ICP searches for that your profile is currently missing." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#F8F6F2" }}>
                <p className="text-base font-bold mb-1.5" style={{ color: "#0A0A0A" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust line — real, sitewide-consistent, no invented testimonial */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F2", borderTop: "1px solid #E8E2D9", borderBottom: "1px solid #E8E2D9" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed" style={{ color: "#3D3D3D" }}>
            Built by the same team that&apos;s written the LinkedIn and cold email sequences behind{" "}
            <span className="font-bold" style={{ color: "#0A0A0A" }}>12K+ B2B meetings booked</span> for our clients.
          </p>
        </div>
      </section>

      {/* Final CTA — matches the site's dark closing-panel convention */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black mb-8 text-white">Stop guessing what your profile says about you.</h2>
          <Button onClick={onStart} variant="hero" size="xl" className="rounded-full shadow-2xl">
            Audit My Profile
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <RelatedTools currentSlug="linkedin-optimizer" />
    </div>
  );
};

export default LandingPage;
