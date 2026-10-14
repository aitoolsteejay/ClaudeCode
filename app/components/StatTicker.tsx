"use client";

import { useRef, useEffect, type CSSProperties } from "react";

interface Props {
  value: string;
  className?: string;
  style?: CSSProperties;
  duration?: number;
}

function parse(value: string) {
  const m = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const num = parseFloat(m[2]);
  if (isNaN(num)) return null;
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { prefix: m[1], num, suffix: m[3], decimals };
}

export default function StatTicker({ value, className = "", style, duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parse(value);
    if (!parsed) return;
    // Reduced motion: keep the final value that is already rendered.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId = 0;
    let startTime: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const tick = (ts: number) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * parsed!.num;
            const formatted =
              parsed!.decimals > 0
                ? current.toFixed(parsed!.decimals)
                : Math.round(current).toString();
            if (el) el.textContent = `${parsed!.prefix}${formatted}${parsed!.suffix}`;
            if (progress < 1) animId = requestAnimationFrame(tick);
          };
          animId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}
