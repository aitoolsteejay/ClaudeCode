"use client";

import { useRef, useEffect } from "react";

export default function CTABanner() {
  const yellowRef = useRef<HTMLDivElement>(null);
  const purpleRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // skip blob animation on mobile
    let animId: number;
    const startTime = performance.now();

    function animate() {
      const t = (performance.now() - startTime) / 1000;

      if (yellowRef.current) {
        const x = Math.sin(t * 0.8) * 320 + Math.sin(t * 0.3) * 100;
        const y = Math.cos(t * 0.6) * 140 + Math.cos(t * 0.25) * 60;
        yellowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (purpleRef.current) {
        const x = Math.sin(t * 0.7 + 2) * 320 + Math.cos(t * 0.4) * 100;
        const y = Math.cos(t * 0.8 + 1) * 140 + Math.sin(t * 0.35) * 60;
        purpleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (orangeRef.current) {
        const x = Math.sin(t * 0.9 + 1) * 220 + Math.sin(t * 0.4) * 80;
        const y = Math.sin(t * 0.75) * 160 + Math.cos(t * 0.5) * 60;
        orangeRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="cta-heading"
    >
      {/* Yellow blob */}
      <div
        ref={yellowRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "25%",
          width: "700px",
          height: "700px",
          marginTop: "-350px",
          marginLeft: "-350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,183,49,0.3) 0%, rgba(255,130,0,0.12) 40%, transparent 70%)",
          filter: "blur(65px)",
          opacity: 0.9,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Purple blob */}
      <div
        ref={purpleRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "75%",
          width: "650px",
          height: "650px",
          marginTop: "-325px",
          marginLeft: "-325px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(124,58,237,0.12) 40%, transparent 70%)",
          filter: "blur(65px)",
          opacity: 0.9,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Orange blob */}
      <div
        ref={orangeRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          width: "500px",
          height: "500px",
          marginTop: "-250px",
          marginLeft: "-250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.22) 0%, rgba(220,60,0,0.1) 40%, transparent 65%)",
          filter: "blur(65px)",
          opacity: 0.9,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
          style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>
            Limited spots available
          </span>
        </div>

        <h2
          id="cta-heading"
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0a0a0a] mb-6 leading-[0.95]"
        >
          Let&apos;s Fill
          <br />
          <span style={{ color: "#F5B731" }}>Your Pipeline</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#52525B] max-w-2xl mx-auto mb-10 leading-relaxed">
          Join <span className="text-[#0a0a0a] font-semibold">300+ B2B companies</span> growing
          with Myntmore. Book your free 30-minute strategy call today we&rsquo;ll map out
          exactly how to generate pipeline for your business.
        </p>

        <a
          href="/founder-meeting"
          className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg group btn-dark"
        >
          Book Your Free Strategy Call
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="mt-5 text-sm text-[#6B6B6B]">
          No commitment. No fluff. Just a real conversation about your growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 pt-8 sm:pt-10 border-t" style={{ borderColor: "#E8E2D9" }}>
          {["30-minute call, no sales pressure", "Custom strategy for your ICP", "Results or we make it right"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#F5B731" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-[#52525B]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
