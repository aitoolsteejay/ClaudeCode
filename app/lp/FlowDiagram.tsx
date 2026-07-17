"use client";

import { useRef, useEffect, useState } from "react";

export interface FlowStep {
  n: string;
  icon: string;
  title: string;
  body: string;
  color: string;
}

export interface ParallelTrack {
  label: string;
  items: { icon: string; title: string; body: string }[];
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useFadeUp(delay = 0) {
  const { ref, inView } = useInView();
  return {
    ref,
    style: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    },
  };
}

function AnimatedArrow() {
  const { ref, inView } = useInView(0.3);
  return (
    <div ref={ref} className="hidden sm:flex items-center justify-center flex-shrink-0 w-10">
      <svg width="36" height="16" viewBox="0 0 36 16" fill="none" overflow="visible">
        <line
          x1="0" y1="8" x2="28" y2="8"
          stroke="#D0C9BF" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="28"
          strokeDashoffset={inView ? 0 : 28}
          style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s" }}
        />
        <polyline
          points="22,2 30,8 22,14"
          fill="none" stroke="#D0C9BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="20"
          strokeDashoffset={inView ? 0 : 20}
          style={{ transition: "stroke-dashoffset 0.4s cubic-bezier(0.22,1,0.36,1) 0.4s" }}
        />
      </svg>
    </div>
  );
}

function AnimatedConnector() {
  const { ref, inView } = useInView(0.3);
  return (
    <div ref={ref} className="flex justify-center my-1" aria-hidden="true">
      <div
        style={{
          width: 1,
          height: 28,
          background: "linear-gradient(to bottom, #E8E2D9, #D0C9BF)",
          transform: inView ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{
          backgroundColor: "#22c55e",
          animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
        }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#22c55e" }} />
      <style>{`@keyframes ping { 75%,100% { transform: scale(2); opacity: 0; } }`}</style>
    </span>
  );
}

function StepCard({ step, delay }: { step: FlowStep; delay: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-1 min-w-0 rounded-2xl border p-6"
      style={{
        backgroundColor: "#ffffff",
        borderColor: hovered ? "rgba(245,183,49,0.5)" : "#E8E2D9",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.08)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, box-shadow 0.25s ease, border-color 0.25s ease`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{
            backgroundColor: step.color,
            transform: inView ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-15deg)",
            transition: `transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay + 100}ms`,
          }}
        >
          {step.icon}
        </div>
        <span
          className="text-xs font-black tracking-widest"
          style={{
            color: "#B8B0A7",
            opacity: inView ? 1 : 0,
            transition: `opacity 0.4s ease ${delay + 200}ms`,
          }}
        >
          {step.n}
        </span>
      </div>
      <h3 className="font-black text-base mb-2" style={{ color: "#0a0a0a" }}>{step.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{step.body}</p>
    </div>
  );
}

function ParallelItem({ item, delay }: { item: { icon: string; title: string; body: string }; delay: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-4"
      style={{
        backgroundColor: hovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
        border: "1px solid rgba(245,183,49,0.2)",
        boxShadow: hovered ? "0 4px 16px rgba(245,183,49,0.12)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}ms, background-color 0.2s ease, box-shadow 0.2s ease`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-base"
          style={{
            display: "inline-block",
            transform: inView ? "scale(1)" : "scale(0)",
            transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay + 120}ms`,
          }}
        >
          {item.icon}
        </span>
        <span className="text-sm font-black" style={{ color: "#0a0a0a" }}>{item.title}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{item.body}</p>
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
  const titleFade = useFadeUp(0);
  const { ref: parallelRef, inView: parallelInView } = useInView(0.1);

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div ref={titleFade.ref} style={titleFade.style} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>{badge}</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight" style={{ color: "#0a0a0a" }}>{title}</h2>
        </div>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-stretch">
          {topSteps.map((step, i) => (
            <div key={step.n} className="flex flex-col sm:flex-row items-stretch flex-1 min-w-0">
              <StepCard step={step} delay={i * 100} />
              {i < topSteps.length - 1 && <AnimatedArrow />}
            </div>
          ))}
        </div>

        <AnimatedConnector />

        {/* Parallel band */}
        <div
          ref={parallelRef}
          className="rounded-2xl border p-6"
          style={{
            backgroundColor: "#FEF9EC",
            borderColor: "rgba(245,183,49,0.35)",
            opacity: parallelInView ? 1 : 0,
            transform: parallelInView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(245,183,49,0.2)", color: "#D97706", border: "1px solid rgba(245,183,49,0.4)" }}
            >
              <PulsingDot />
              Running in parallel
            </span>
            <span className="text-xs font-semibold" style={{ color: "#8C8279" }}>Active throughout</span>
          </div>
          <p className="font-black text-base mb-5" style={{ color: "#0a0a0a" }}>{parallel.label}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {parallel.items.map((item, i) => (
              <ParallelItem key={item.title} item={item} delay={parallelInView ? i * 100 + 150 : 0} />
            ))}
          </div>
        </div>

        <AnimatedConnector />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-stretch">
          {bottomSteps.map((step, i) => (
            <div key={step.n} className="flex flex-col sm:flex-row items-stretch flex-1 min-w-0">
              <StepCard step={step} delay={i * 100} />
              {i < bottomSteps.length - 1 && <AnimatedArrow />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
