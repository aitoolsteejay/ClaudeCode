"use client";

import { useRef, useEffect } from "react";

export interface FlowStep {
  n: string;
  icon: string;
  title: string;
  body: string;
  color: string; // icon bg color
}

export interface ParallelTrack {
  label: string;
  items: { icon: string; title: string; body: string }[];
}

function useScrollFade(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function ArrowRight() {
  return (
    <div className="hidden sm:flex items-center justify-center flex-shrink-0 w-8">
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <path d="M0 8 L26 8 M20 2 L28 8 L20 14" stroke="#D0C9BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ConnectorDot() {
  return (
    <div className="flex justify-center my-1" aria-hidden="true">
      <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, #E8E2D9, #D0C9BF)" }} />
    </div>
  );
}

function StepCard({ step, fade }: { step: FlowStep; fade: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={fade} className="flex-1 min-w-0 rounded-2xl border p-6 transition-shadow hover:shadow-md" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: step.color }}>
          {step.icon}
        </div>
        <span className="text-xs font-black tracking-widest" style={{ color: "#B8B0A7" }}>{step.n}</span>
      </div>
      <h3 className="font-black text-base mb-2" style={{ color: "#0a0a0a" }}>{step.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{step.body}</p>
    </div>
  );
}

export default function FlowDiagram({
  badge,
  title,
  topSteps,
  parallel,
  bottomSteps,
}: {
  badge: string;
  title: string;
  topSteps: FlowStep[];
  parallel: ParallelTrack;
  bottomSteps: FlowStep[];
}) {
  const titleFade = useScrollFade(0);
  const t1 = useScrollFade(0);
  const t2 = useScrollFade(80);
  const t3 = useScrollFade(160);
  const parallelFade = useScrollFade(100);
  const b1 = useScrollFade(0);
  const b2 = useScrollFade(80);
  const b3 = useScrollFade(160);

  const topRefs = [t1, t2, t3];
  const bottomRefs = [b1, b2, b3];

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleFade} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>{badge}</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight" style={{ color: "#0a0a0a" }}>{title}</h2>
        </div>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0 sm:gap-0">
          {topSteps.map((step, i) => (
            <div key={step.n} className="flex flex-col sm:flex-row items-stretch flex-1 min-w-0">
              <StepCard step={step} fade={topRefs[i]} />
              {i < topSteps.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>

        {/* Connector */}
        <ConnectorDot />

        {/* Parallel band */}
        <div ref={parallelFade} className="rounded-2xl border p-6" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.35)" }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(245,183,49,0.2)", color: "#D97706", border: "1px solid rgba(245,183,49,0.4)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ backgroundColor: "#22c55e" }} />
              Running in parallel
            </span>
            <span className="text-xs font-semibold" style={{ color: "#8C8279" }}>Active throughout</span>
          </div>
          <p className="font-black text-base mb-5" style={{ color: "#0a0a0a" }}>{parallel.label}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {parallel.items.map((item) => (
              <div key={item.title} className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.7)", border: "1px solid rgba(245,183,49,0.2)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-black" style={{ color: "#0a0a0a" }}>{item.title}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <ConnectorDot />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0 sm:gap-0">
          {bottomSteps.map((step, i) => (
            <div key={step.n} className="flex flex-col sm:flex-row items-stretch flex-1 min-w-0">
              <StepCard step={step} fade={bottomRefs[i]} />
              {i < bottomSteps.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
