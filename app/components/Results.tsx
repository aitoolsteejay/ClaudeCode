"use client";

import { useRef, useEffect } from "react";

const METRICS = [
  {
    target: 12000,
    duration: 2000,
    format: (n: number) => `${Math.round(n).toLocaleString()}+`,
    label: "Meetings Booked",
    sublabel: "Qualified decision-maker conversations",
  },
  {
    target: 120,
    duration: 1800,
    format: (n: number) => `$${Math.round(n)}M+`,
    label: "Pipeline Generated",
    sublabel: "Across all client accounts",
  },
  {
    target: 3.2,
    duration: 1400,
    format: (n: number) => `${n.toFixed(1)}x`,
    label: "Avg. Reply Rate",
    sublabel: "vs. 1–2% industry average",
  },
  {
    target: 92,
    duration: 1400,
    format: (n: number) => `${Math.round(n)}%`,
    label: "Client Retention",
    sublabel: "Because the results speak for themselves",
  },
];

const CASE_STUDIES = [
  {
    company: "Series B SaaS Fintech",
    sector: "SaaS / Fintech",
    result: "47 qualified demos booked in 60 days",
    detail:
      "We built a cold outreach engine targeting VP Finance and CFO personas at mid-market companies. Starting from scratch, we delivered a full pipeline within 8 weeks 47 demos with a 34% show rate.",
  },
  {
    company: "B2B Professional Services",
    sector: "Professional Services",
    result: "$2.3M in pipeline from a single ABM campaign",
    detail:
      "A targeted account list of 120 enterprise companies, multi-touch LinkedIn + email sequences, and intent data signals. One 90-day ABM campaign. Two enterprise contracts already closed.",
  },
];

export default function Results() {
  const gridRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let triggered = false;
    const animIds: number[] = [];

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true;
        METRICS.forEach(({ target, duration, format }, i) => {
          const el = statRefs.current[i];
          if (!el) return;
          let startTime: number | null = null;
          function tick(ts: number) {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el!.textContent = format(eased * target);
            if (progress < 1) animIds.push(requestAnimationFrame(tick));
          }
          animIds.push(requestAnimationFrame(tick));
        });
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -80px 0px" });

    observer.observe(grid);
    return () => { observer.disconnect(); animIds.forEach(cancelAnimationFrame); };
  }, []);

  return (
    <section
      id="results"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="results-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
            style={{ color: "#F5B731", borderColor: "rgba(245,183,49,0.35)", background: "#FEF9EC" }}>
            Results
          </span>
          <h2 id="results-heading" className="text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Numbers That Actually
            <br />
            <span style={{ color: "#F5B731" }}>Move the Needle</span>
          </h2>
          <p className="mt-4 text-[#52525B] text-lg max-w-xl mx-auto font-normal">
            We measure success by one metric: qualified pipeline generated for our clients. Here&rsquo;s what that looks like.
          </p>
        </div>

        {/* Metrics grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {METRICS.map((metric, i) => (
            <div key={metric.label}
              className="flex flex-col px-6 py-8 rounded-2xl border bg-white relative overflow-hidden"
              style={{ borderColor: "#E8E2D9", borderLeftColor: "#F5B731", borderLeftWidth: "4px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
            >
              <span
                ref={el => { statRefs.current[i] = el; }}
                className="text-3xl sm:text-5xl font-bold mb-2 tabular-nums text-[#0a0a0a]"
              >
                {metric.format(0)}
              </span>
              <span className="text-[#0a0a0a] font-medium text-sm mb-1">{metric.label}</span>
              <span className="text-neutral-400 text-xs font-normal">{metric.sublabel}</span>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.company}
              className="rounded-2xl p-6 sm:p-8 flex flex-col bg-white border"
              style={{ borderColor: "#E8E2D9", borderLeftColor: "#F5B731", borderLeftWidth: "4px" }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3 px-2.5 py-1 rounded-full self-start"
                style={{ color: "#F5B731", background: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
                {cs.sector}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] mb-2">
                &ldquo;{cs.result}&rdquo;
              </h3>
              <p className="text-[#52525B] text-sm leading-relaxed font-normal">{cs.detail}</p>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t" style={{ borderColor: "#E8E2D9" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                  style={{ background: "#F5B731" }} aria-hidden="true">
                  {cs.company.charAt(0)}
                </div>
                <span className="text-sm font-medium text-neutral-600">{cs.company}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-8 font-normal">
          Results vary by industry, deal size, and engagement scope. Case studies reflect anonymized real client data.
        </p>
      </div>
    </section>
  );
}
