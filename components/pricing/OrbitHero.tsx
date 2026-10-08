"use client";

import { useEffect, useRef } from "react";

const GOLD = "#F5B731";
const INK = "#0f0f14";

// Planet geometry, in the 600x600 SVG coordinate space.
const CX = 300;
const CY = 300;
const RING_RX = 285;
const RING_RY = 118;
const RING_TILT = -20; // degrees
const SPHERE_R = 205;

interface OrbitHeroProps {
  leadWords: string;
  accentWord: string;
  // Rendered by the parent so the animated price counter stays in one place.
  priceNode: React.ReactNode;
  billingNote: string;
  summary: string;
}

// Hero for the private pricing pages: bold two-line title, a planet with an
// orbiting dot, and a price card. Decorative parts are aria-hidden; the dot's
// motion is skipped under prefers-reduced-motion.
export default function OrbitHero({ leadWords, accentWord, priceNode, billingNote, summary }: OrbitHeroProps) {
  const dotRef = useRef<SVGCircleElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;
    const place = (theta: number) => {
      const phi = (RING_TILT * Math.PI) / 180;
      const ex = RING_RX * Math.cos(theta);
      const ey = RING_RY * Math.sin(theta);
      const x = CX + ex * Math.cos(phi) - ey * Math.sin(phi);
      const y = CY + ex * Math.sin(phi) + ey * Math.cos(phi);
      for (const el of [dot, glow]) {
        el.setAttribute("cx", x.toFixed(1));
        el.setAttribute("cy", y.toFixed(1));
      }
    };
    // Resting position matches the reference: upper left of the planet.
    place(Math.PI * 1.12);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: number;
    const start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      place(Math.PI * 1.12 + t * 0.22);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const top = `M ${-RING_RX} 0 A ${RING_RX} ${RING_RY} 0 0 1 ${RING_RX} 0`;
  const bottom = `M ${RING_RX} 0 A ${RING_RX} ${RING_RY} 0 0 1 ${-RING_RX} 0`;
  const innerTop = `M ${-(RING_RX - 22)} 0 A ${RING_RX - 22} ${RING_RY - 16} 0 0 1 ${RING_RX - 22} 0`;
  const innerBottom = `M ${RING_RX - 22} 0 A ${RING_RX - 22} ${RING_RY - 16} 0 0 1 ${-(RING_RX - 22)} 0`;
  const frame = `translate(${CX} ${CY}) rotate(${RING_TILT})`;

  return (
    <div className="relative max-w-6xl mx-auto mb-14">
      <div className="hero-fade flex flex-wrap items-center justify-between gap-3 mb-8">
        <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border bg-white/70" style={{ borderColor: "rgba(245,183,49,0.45)" }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: INK }}>Service plans</span>
        </span>
        <span className="hidden md:inline-flex items-center gap-4 px-7 py-3 rounded-full bg-white/70 text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: INK }}>
          People <span style={{ color: GOLD }}>×</span> Content <span style={{ color: GOLD }}>×</span> Opportunities
        </span>
      </div>

      <div className="grid md:grid-cols-[1.15fr_1fr] gap-6 items-center">
        <div>
          <h1
            className="hero-fade-d1 font-black"
            style={{ color: INK, fontSize: "clamp(3.4rem, 9.5vw, 7.4rem)", lineHeight: 0.94, letterSpacing: "-0.045em" }}
          >
            {leadWords}
            <br />
            <span className="italic" style={{ color: "#23232b" }}>
              {accentWord}
              <span style={{ color: GOLD }}>.</span>
            </span>
          </h1>
          <svg viewBox="0 0 460 22" fill="none" className="hero-fade-d1 mt-3 w-[min(78vw,400px)]" aria-hidden="true">
            <path d="M4 14 C60 6, 150 18, 240 11 S400 8, 456 12" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
          </svg>
          <p className="hero-fade-d2 mt-9 font-medium" style={{ color: "#1d1d24", fontSize: "clamp(1.25rem, 2.6vw, 1.9rem)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            Build your presence. Create consistency.
            <br className="hidden sm:block" /> Start generating opportunities.
          </p>
        </div>

        {/* Planet */}
        <div className="hero-fade-d2 relative hidden md:block w-full max-w-[560px] justify-self-end aspect-square" aria-hidden="true">
          <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full overflow-visible">
            <defs>
              <radialGradient id="orbit-sphere" cx="34%" cy="28%" r="85%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="42%" stopColor="#f7f2ff" />
                <stop offset="78%" stopColor="#e5d9fb" />
                <stop offset="100%" stopColor="#d3bff6" />
              </radialGradient>
              <radialGradient id="orbit-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={GOLD} stopOpacity="0.55" />
                <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
              </radialGradient>
              <filter id="orbit-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="26" />
              </filter>
            </defs>

            {/* back half of the rings */}
            <g transform={frame} fill="none">
              <path d={top} stroke="#b9b1c8" strokeWidth="1.6" opacity="0.7" />
              <path d={innerTop} stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
            </g>

            {/* soft planet shadow, then the sphere */}
            <circle cx={CX + 18} cy={CY + 52} r={SPHERE_R - 14} fill="#a78bfa" opacity="0.28" filter="url(#orbit-shadow)" />
            <circle cx={CX} cy={CY} r={SPHERE_R} fill="url(#orbit-sphere)" />

            {/* front half of the rings */}
            <g transform={frame} fill="none">
              <path d={bottom} stroke="#b9b1c8" strokeWidth="1.8" />
              <path d={innerBottom} stroke={GOLD} strokeWidth="1.3" opacity="0.7" />
            </g>

            {/* orbiting dot */}
            <circle ref={glowRef} cx="120" cy="170" r="30" fill="url(#orbit-glow)" />
            <circle ref={dotRef} cx="120" cy="170" r="13" fill={GOLD} />
          </svg>

          <div className="absolute" style={{ left: "46%", top: "38%", width: "50%" }}>
            <p className="text-[11px] font-bold uppercase leading-[1.9] tracking-[0.3em]" style={{ color: INK }}>
              LinkedIn GTM
              <br />
              Growth ecosystem
            </p>
            <div className="my-3.5 h-[3px] w-12 rounded-full" style={{ backgroundColor: GOLD }} />
            <p className="text-[11px] font-semibold uppercase leading-[1.9] tracking-[0.26em]" style={{ color: "#4a4a55" }}>
              Consistent presence.
              <br />
              Real opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Price card */}
      <div className="hero-fade-d2 mt-10 rounded-[28px] border bg-white/80 backdrop-blur-sm px-6 py-6 sm:px-10 sm:py-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center" style={{ borderColor: "#EDE7DD", boxShadow: "0 20px 60px rgba(124,58,237,0.08)" }}>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "#3b3b45" }}>
          {summary}
        </p>
        <div className="sm:pl-10 sm:border-l sm:text-right" style={{ borderColor: "#E8E2D9" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-1" style={{ color: "#8C8279" }}>Plans start at</p>
          <div className="font-black leading-none" style={{ color: INK, fontSize: "clamp(2.6rem, 6vw, 4.2rem)", letterSpacing: "-0.04em" }}>{priceNode}</div>
          <p className="mt-2 text-sm font-medium" style={{ color: "#3b3b45" }}>{billingNote}</p>
        </div>
      </div>
    </div>
  );
}
