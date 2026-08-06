"use client";

import { useRef, useEffect, useState } from "react";

export default function Underline({ color = "#F5B731" }: { color?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!pathRef.current) return;
    const l = pathRef.current.getTotalLength();
    setLen(l);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(pathRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <svg viewBox="0 0 360 14" className="absolute -bottom-2 left-0 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        ref={pathRef}
        d="M4 9 Q90 3 180 9 Q270 15 356 7"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={len || 400}
        strokeDashoffset={drawn ? 0 : len || 400}
        style={{ transition: drawn ? "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)" : "none" }}
      />
    </svg>
  );
}
