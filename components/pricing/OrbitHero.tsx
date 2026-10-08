"use client";

import { useEffect, useRef } from "react";

const GOLD = "#F5B731";
const INK = "#0f0f14";

// Planet geometry, in the 600x600 SVG coordinate space.
const CX = 300;
const CY = 300;
const SPHERE_R = 205;
// The gold dot is a small moon on a tilted, invisible orbit.
const ORBIT_RX = 285;
const ORBIT_RY = 118;
const ORBIT_TILT = -20; // degrees

export type PlanetKind = "mars" | "earth" | "neptune";

interface OrbitHeroProps {
  leadWords: string;
  accentWord: string;
  planet?: PlanetKind;
  // Rendered by the parent so the animated price counter stays in one place.
  priceNode: React.ReactNode;
  billingNote: string;
  summary: string;
}

// Surface detail for each planet, drawn tone-on-tone in the page's existing
// lavender, white and gold palette (no new colours). Everything sits inside
// the sphere's clip path, and a soft white wash behind the caption keeps the
// text readable over the surface.
function Surface({ kind }: { kind: PlanetKind }) {
  const dark = "#b29be8"; // deeper lavender
  const mid = "#c7b5f0";
  if (kind === "mars") {
    return (
      <g>
        {/* dusty plains, using the page's gold at low strength */}
        <g filter="url(#planet-rough)">
          <path d="M120 250 C190 215 300 225 380 270 C450 310 470 380 420 440 C340 500 190 470 130 380 C100 335 100 285 120 250 Z" fill={GOLD} opacity="0.13" />
          <path d="M150 300 C170 250 240 235 280 262 C310 282 300 330 262 350 C220 372 160 352 150 300 Z" fill={dark} opacity="0.62" />
          <path d="M318 150 C345 132 398 146 404 178 C408 204 372 214 346 202 C322 190 304 168 318 150 Z" fill={dark} opacity="0.5" />
          <path d="M238 428 C285 405 352 420 346 452 C340 480 276 486 242 462 C228 450 226 436 238 428 Z" fill={dark} opacity="0.55" />
          <path d="M200 160 C230 140 262 150 262 178 C262 200 232 208 210 196 C192 186 188 170 200 160 Z" fill={dark} opacity="0.4" />
        </g>
        {/* canyon system */}
        <path d="M118 334 C190 318 262 340 340 322 C384 312 410 318 440 326" stroke={dark} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M196 328 C224 346 254 348 284 340" stroke={dark} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M300 322 C312 346 330 360 352 366" stroke={dark} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.35" />
        {/* a few craters */}
        {[
          [178, 386, 12],
          [350, 404, 16],
          [276, 468, 9],
        ].map(([x, y, r]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={r} fill={dark} opacity="0.28" />
            <circle cx={x} cy={y} r={r} fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7" strokeDasharray={`${r * 2.2} ${r * 4.2}`} transform={`rotate(200 ${x} ${y})`} />
          </g>
        ))}
        {/* polar ice cap with a defined rim */}
        <ellipse cx="300" cy="104" rx="98" ry="40" fill="#ffffff" opacity="0.98" filter="url(#planet-soft)" />
        <ellipse cx="300" cy="104" rx="98" ry="40" fill="none" stroke={mid} strokeWidth="3" opacity="0.8" />
      </g>
    );
  }
  if (kind === "earth") {
    return (
      <g>
        <g filter="url(#planet-rough)">
          <path d="M150 190 C185 165 235 170 255 200 C270 225 245 245 255 275 C265 305 300 325 285 360 C270 395 235 420 215 400 C195 380 215 340 190 315 C165 290 120 245 150 190 Z" fill={dark} opacity="0.42" />
          <path d="M372 296 C402 282 442 298 440 334 C438 376 406 420 380 406 C358 394 364 352 350 332 C342 316 352 306 372 296 Z" fill={dark} opacity="0.4" />
          <path d="M330 150 C352 140 382 150 380 170 C378 188 350 190 334 178 C324 170 322 158 330 150 Z" fill={dark} opacity="0.3" />
        </g>
        {/* cloud swirls */}
        <path d="M128 262 C188 238 232 276 304 250" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M170 412 C232 388 280 430 350 404" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.65" />
        <path d="M262 150 C300 134 350 142 384 164" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* ice caps */}
        <ellipse cx="300" cy="96" rx="92" ry="28" fill="#ffffff" opacity="0.9" filter="url(#planet-soft)" />
        <ellipse cx="300" cy="506" rx="92" ry="26" fill="#ffffff" opacity="0.9" filter="url(#planet-soft)" />
      </g>
    );
  }
  // neptune: banded atmosphere with a dark storm
  return (
    <g>
      <g filter="url(#planet-rough)">
        {[
          [140, 36, 0.22],
          [214, 28, 0.16],
          [276, 40, 0.24],
          [350, 30, 0.16],
          [414, 44, 0.24],
          [468, 30, 0.18],
        ].map(([y, h, o]) => (
          <rect key={y} x="80" y={y} width="440" height={h} fill={dark} opacity={o} />
        ))}
      </g>
      <ellipse cx="206" cy="352" rx="50" ry="29" fill={dark} opacity="0.55" filter="url(#planet-soft)" />
      <ellipse cx="252" cy="334" rx="32" ry="6" fill="#ffffff" opacity="0.85" transform="rotate(-14 252 334)" filter="url(#planet-soft)" />
    </g>
  );
}

// Hero for the private pricing pages: bold two-line title, a planet that
// matches the page (Mars, Earth or Neptune) with an orbiting moon, and a price
// card. Decorative parts are aria-hidden; the moon's motion is skipped under
// prefers-reduced-motion.
export default function OrbitHero({ leadWords, accentWord, planet = "mars", priceNode, billingNote, summary }: OrbitHeroProps) {
  const frontRef = useRef<SVGCircleElement>(null);
  const backRef = useRef<SVGCircleElement>(null);
  const glowFrontRef = useRef<SVGCircleElement>(null);
  const glowBackRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const els = [frontRef.current, backRef.current, glowFrontRef.current, glowBackRef.current];
    if (els.some((e) => !e)) return;
    const [front, back, glowFront, glowBack] = els as SVGCircleElement[];
    const place = (theta: number) => {
      const phi = (ORBIT_TILT * Math.PI) / 180;
      const ex = ORBIT_RX * Math.cos(theta);
      const ey = ORBIT_RY * Math.sin(theta);
      const x = CX + ex * Math.cos(phi) - ey * Math.sin(phi);
      const y = CY + ex * Math.sin(phi) + ey * Math.cos(phi);
      // The lower half of the orbit is in front of the planet, the upper half behind it.
      const inFront = Math.sin(theta) > 0;
      for (const [el, show] of [[front, inFront], [glowFront, inFront], [back, !inFront], [glowBack, !inFront]] as [SVGCircleElement, boolean][]) {
        el.setAttribute("cx", x.toFixed(1));
        el.setAttribute("cy", y.toFixed(1));
        el.style.visibility = show ? "visible" : "hidden";
      }
    };
    place(Math.PI * 1.12); // resting position: upper left of the planet
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: number;
    const start = performance.now();
    const tick = () => {
      place(Math.PI * 1.12 + ((performance.now() - start) / 1000) * 0.22);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

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
              {/* light falling across the surface: bright upper left, shaded lower right */}
              <radialGradient id="orbit-shade" cx="34%" cy="28%" r="85%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#8b6fd8" stopOpacity="0.28" />
              </radialGradient>
              {/* soft white wash behind the caption so it stays readable */}
              <radialGradient id="orbit-caption" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="orbit-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={GOLD} stopOpacity="0.55" />
                <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
              </radialGradient>
              <clipPath id="orbit-clip">
                <circle cx={CX} cy={CY} r={SPHERE_R} />
              </clipPath>
              <filter id="orbit-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="26" />
              </filter>
              <filter id="planet-soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
              {/* organic, uneven edges for surface patches and bands */}
              <filter id="planet-rough" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" />
                <feGaussianBlur stdDeviation="1.4" />
              </filter>
            </defs>

            {/* moon while it is behind the planet */}
            <circle ref={glowBackRef} cx="120" cy="170" r="30" fill="url(#orbit-glow)" style={{ visibility: "hidden" }} />
            <circle ref={backRef} cx="120" cy="170" r="13" fill={GOLD} style={{ visibility: "hidden" }} />

            {/* soft planet shadow, then the sphere with its surface */}
            <circle cx={CX + 18} cy={CY + 52} r={SPHERE_R - 14} fill="#a78bfa" opacity="0.28" filter="url(#orbit-shadow)" />
            <circle cx={CX} cy={CY} r={SPHERE_R} fill="url(#orbit-sphere)" />
            <g clipPath="url(#orbit-clip)">
              <Surface kind={planet} />
              <circle cx="410" cy="330" r="140" fill="url(#orbit-caption)" />
              <circle cx={CX} cy={CY} r={SPHERE_R} fill="url(#orbit-shade)" />
            </g>

            {/* moon while it is in front of the planet */}
            <circle ref={glowFrontRef} cx="120" cy="170" r="30" fill="url(#orbit-glow)" />
            <circle ref={frontRef} cx="120" cy="170" r="13" fill={GOLD} />
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
