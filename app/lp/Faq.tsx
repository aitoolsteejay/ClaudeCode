"use client";

import { useRef, useEffect, useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FaqRow({ item, delay, inView }: { item: FaqItem; delay: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderColor: open ? "rgba(245,183,49,0.5)" : "#E8E2D9",
        boxShadow: open ? "0 8px 24px rgba(0,0,0,0.05)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, border-color 0.25s ease, box-shadow 0.25s ease`,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        aria-expanded={open}
      >
        <span className="font-bold text-base" style={{ color: "#0a0a0a" }}>{item.q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: open ? "rgba(245,183,49,0.15)" : "#F8F6F2",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "background-color 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={open ? "#D97706" : "#52525B"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`accordion-content px-6 ${open ? "open" : ""}`}>
        <p className="text-sm leading-relaxed pb-5" style={{ color: "#52525B" }}>{item.a}</p>
      </div>
    </div>
  );
}

export default function Faq({
  badge = "FAQs",
  title,
  items,
}: {
  badge?: string;
  title: string;
  items: FaqItem[];
}) {
  const { ref: titleRef, inView: titleInView } = useInView(0.2);
  const { ref: listRef, inView: listInView } = useInView(0.1);

  return (
    <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>{badge}</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ color: "#0a0a0a" }}>{title}</h2>
        </div>
        <div ref={listRef} className="space-y-4">
          {items.map((item, i) => (
            <FaqRow key={item.q} item={item} delay={i * 80} inView={listInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
