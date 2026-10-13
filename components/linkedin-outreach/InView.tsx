"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

// Flags itself once it has scrolled into view (data-inview="true"), so plain
// CSS in the surrounding component can run a transition: a line drawing, a
// bar filling, a badge lighting up. Server components can use it without
// becoming client components themselves.
export default function InView({ children, className = "", style, threshold = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} style={style} data-inview={seen ? "true" : "false"}>
      {children}
    </div>
  );
}
