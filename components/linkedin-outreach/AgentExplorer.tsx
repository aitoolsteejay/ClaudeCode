"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { Check, Crosshair, Layers, ListOrdered, MessageCircle, Radar, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";
import { BLUE, BLUE_LIGHT, BLUE_PALE, GOLD, INK, MUTED } from "./theme";

const AUTO_MS = 7000;
const EDGE = "#DCE8F5";

// ---- Small illustrations, one per agent. Decorative (the text beside them
// says the same thing), so they are hidden from assistive tech.

const DOTS = Array.from({ length: 32 }, (_, i) => ({ x: 17 + (i % 8) * 29.4, y: 15 + Math.floor(i / 8) * 29.3 }));
const PICKED = [2, 9, 13, 20, 26, 29];

function VisualTargeting() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 p-6">
      <div className="flex flex-wrap justify-center gap-2">
        {["Firmographic", "Psychographic", "Behavioural"].map((c, i) => (
          <span key={c} className="ax-chip rounded-full border bg-white px-3 py-1 text-[11px] font-black" style={{ borderColor: EDGE, color: BLUE, animationDelay: `${0.15 + i * 0.45}s` }}>
            {c}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 240 118" className="w-full max-w-[300px]">
        {DOTS.map((d, i) => {
          const k = PICKED.indexOf(i);
          return <circle key={i} cx={d.x} cy={d.y} r="7" className={`ax-dot ${k >= 0 ? "ax-dot-pick" : "ax-dot-fade"}`} style={{ animationDelay: k >= 0 ? `${1.6 + k * 0.2}s` : "1.6s" }} />;
        })}
      </svg>
      <p className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: MUTED }}>Best-fit buyers light up</p>
    </div>
  );
}

const PRIORITY = [
  { w: 94, tag: "Top pick", bg: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` },
  { w: 72, tag: "Warm", bg: "linear-gradient(135deg, #F5B731, #f59e0b)" },
  { w: 48, tag: "Warming", bg: "linear-gradient(135deg, #a78bfa, #7c3aed)" },
  { w: 26, tag: "Later", bg: "linear-gradient(135deg, #94a3b8, #64748b)" },
];

function VisualPriority() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      {PRIORITY.map((r, i) => (
        <div key={r.tag} className="ax-chip flex items-center gap-3 rounded-2xl border bg-white p-3" style={{ borderColor: EDGE, animationDelay: `${i * 0.15}s` }}>
          <span className="h-9 w-9 shrink-0 rounded-full" style={{ background: r.bg }} />
          <div className="min-w-0 flex-1">
            <div className="h-2 w-24 rounded-full bg-zinc-200" />
            <div className="mt-2 h-2 rounded-full" style={{ backgroundColor: "#E6EEF7" }}>
              <div className="ax-bar h-2 rounded-full" style={{ width: `${r.w}%`, background: i === 0 ? `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` : "#B9C6D4", animationDelay: `${0.4 + i * 0.2}s` }} />
            </div>
          </div>
          <span className="rounded-full px-2.5 py-1 text-[10px] font-black" style={i === 0 ? { backgroundColor: BLUE, color: "#fff" } : { backgroundColor: "#EEF2F6", color: "#64748b" }}>
            {r.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

const FIELDS = [
  { label: "Name", w: 58 },
  { label: "Designation", w: 76 },
  { label: "Company URL", w: 68 },
  { label: "Insight", w: 92 },
];

function VisualProspecting() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-[340px] rounded-2xl border bg-white p-5" style={{ borderColor: EDGE, boxShadow: "0 18px 40px rgba(10,102,194,0.10)" }}>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-11 w-11 rounded-full" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }} />
          <div className="flex-1 space-y-2">
            <div className="h-2.5 w-28 rounded-full bg-zinc-300" />
            <div className="h-2 w-20 rounded-full bg-zinc-200" />
          </div>
        </div>
        <div className="space-y-3">
          {FIELDS.map((f, i) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="w-[92px] shrink-0 text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: MUTED }}>{f.label}</span>
              <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#E6EEF7" }}>
                <div className="ax-bar h-2 rounded-full" style={{ width: `${f.w}%`, backgroundColor: BLUE_LIGHT, animationDelay: `${0.3 + i * 0.5}s` }} />
              </div>
              <span className="ax-chip grid h-4 w-4 place-items-center rounded-full" style={{ backgroundColor: BLUE, color: "#fff", animationDelay: `${0.9 + i * 0.5}s` }}>
                <Check className="h-2.5 w-2.5" strokeWidth={4} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const RIVALS = [
  { label: "Rival A", h: 52, color: "#C3CFDC" },
  { label: "Rival B", h: 38, color: "#C3CFDC" },
  { label: "You", h: 86, color: BLUE },
];

function VisualCompetitors() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <div className="flex h-[150px] items-end gap-7">
        {RIVALS.map((r, i) => (
          <div key={r.label} className="flex h-full flex-col items-center justify-end gap-2">
            <div className="ax-col w-12 rounded-t-xl" style={{ height: `${r.h}%`, backgroundColor: r.color, animationDelay: `${0.2 + i * 0.25}s` }} />
            <span className="text-[11px] font-black" style={{ color: r.label === "You" ? BLUE : MUTED }}>{r.label}</span>
          </div>
        ))}
      </div>
      <span className="ax-chip inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-[11px] font-black" style={{ borderColor: EDGE, color: INK, animationDelay: "1.3s" }}>
        <Radar className="h-3.5 w-3.5" style={{ color: BLUE }} strokeWidth={2.4} />
        One step ahead
      </span>
    </div>
  );
}

function VisualEngagement() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-[340px] space-y-3">
        <div className="rounded-2xl border bg-white p-4" style={{ borderColor: EDGE }}>
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-full" style={{ background: "linear-gradient(135deg, #F5B731, #f59e0b)" }} />
            <div className="space-y-1.5">
              <div className="h-2.5 w-24 rounded-full bg-zinc-300" />
              <div className="h-2 w-16 rounded-full bg-zinc-200" />
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-2 w-full rounded-full bg-zinc-200" />
            <div className="h-2 w-4/5 rounded-full bg-zinc-200" />
          </div>
        </div>
        <div className="relative rounded-2xl p-4" style={{ backgroundColor: BLUE_PALE }}>
          <div className="ax-typing absolute left-4 top-4 flex items-center gap-1.5 py-1.5">
            {[0, 1, 2].map((d) => (
              <span key={d} className="ax-tdot h-2 w-2 rounded-full" style={{ backgroundColor: BLUE, animationDelay: `${d * 0.16}s` }} />
            ))}
          </div>
          <div className="ax-reply">
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded-full" style={{ backgroundColor: "#BBD5F0" }} />
              <div className="h-2 w-11/12 rounded-full" style={{ backgroundColor: "#BBD5F0" }} />
              <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: "#BBD5F0" }} />
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-black" style={{ color: BLUE }}>
              <Sparkles className="h-3 w-3" strokeWidth={2.6} />
              Drafted in your voice
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const TOKENS = ["first name", "company", "recent post"];

function VisualScale() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="relative h-[190px] w-full max-w-[330px]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="ax-msg absolute left-0 right-0 rounded-2xl border bg-white p-4"
            style={{ top: i * 30, zIndex: i, borderColor: EDGE, boxShadow: "0 14px 30px rgba(10,102,194,0.10)", animationDelay: `${i * 0.25}s`, "--r": `${(i - 1) * 2}deg` } as CSSProperties}
          >
            {i === 2 ? (
              <>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: MUTED }}>Hi</span>
                  {TOKENS.map((t, k) => (
                    <span key={t} className="ax-token rounded-md px-2 py-0.5 text-[11px] font-black" style={{ color: INK, animationDelay: `${k * 0.6}s` }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-2 w-full rounded-full bg-zinc-200" />
                  <div className="h-2 w-3/4 rounded-full bg-zinc-200" />
                </div>
              </>
            ) : (
              <div className="space-y-1.5">
                <div className="h-2.5 w-24 rounded-full bg-zinc-300" />
                <div className="h-2 w-full rounded-full bg-zinc-200" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- The six agents.

interface Agent {
  short: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  points: string[];
  result: string;
  Visual: () => ReactNode;
}

const AGENTS: Agent[] = [
  {
    short: "Targeting",
    title: "Smarter targeting",
    icon: Crosshair,
    summary: "They break down your ideal customer profile using firmographic, psychographic and behavioural signals.",
    points: ["Firmographic signals", "Psychographic signals", "Behavioural signals"],
    result: "We know exactly who to go after.",
    Visual: VisualTargeting,
  },
  {
    short: "Prioritising",
    title: "Prioritised outreach",
    icon: ListOrdered,
    summary: "Based on real-time LinkedIn data, they rank who is most likely to engage. No random shots.",
    points: ["Real-time LinkedIn data", "Ranked by likelihood to engage"],
    result: "Only the right people, in the right order.",
    Visual: VisualPriority,
  },
  {
    short: "Prospecting",
    title: "Data-rich prospecting",
    icon: ScanSearch,
    summary: "They crawl LinkedIn for names, designations and company URLs, then enrich each lead with relevant insight.",
    points: ["Names, designations, company URLs", "Enriched with context"],
    result: "Context before we ever connect.",
    Visual: VisualProspecting,
  },
  {
    short: "Competitors",
    title: "Competitor intelligence",
    icon: Radar,
    summary: "They track how often your competitors post, what works for them and where they fall short.",
    points: ["Posting cadence tracked", "What works, and what doesn't"],
    result: "Your brand stays one step ahead.",
    Visual: VisualCompetitors,
  },
  {
    short: "Engagement",
    title: "Human-sounding engagement",
    icon: MessageCircle,
    summary: "With a deep understanding of context, they draft thoughtful comments, replies and follow-ups that sound like you.",
    points: ["Comments and replies", "Relevant follow-ups"],
    result: "Sounds like you, not a bot.",
    Visual: VisualEngagement,
  },
  {
    short: "At scale",
    title: "Personalised at scale",
    icon: Layers,
    summary: "Connection requests, InMails and nurture messages are customised to the individual, at a volume no human team can match.",
    points: ["Connection requests", "InMails and nurture messages"],
    result: "Personal to each person, at team-level volume.",
    Visual: VisualScale,
  },
];

export default function AgentExplorer() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const firstRun = useRef(true);
  const last = AGENTS.length - 1;
  const agent = AGENTS[active];
  const Icon = agent.icon;
  const Visual = agent.Visual;

  // Auto-play is an enhancement: it only starts for visitors who have not asked
  // for reduced motion, only while the explorer is on screen, and it stops for
  // good the moment someone picks an agent themselves.
  useEffect(() => {
    setAuto(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // On narrow screens the agent list scrolls sideways: keep the active one centred.
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const scroller = scrollerRef.current;
    const tab = tabRefs.current[active];
    if (!scroller || !tab || scroller.scrollWidth <= scroller.clientWidth) return;
    const s = scroller.getBoundingClientRect();
    const t = tab.getBoundingClientRect();
    scroller.scrollBy({ left: t.left + t.width / 2 - (s.left + s.width / 2), behavior: "smooth" });
  }, [active]);

  const go = (i: number, focus = false) => {
    const next = Math.max(0, Math.min(last, i));
    setAuto(false);
    setActive(next);
    if (focus) tabRefs.current[next]?.focus({ preventScroll: true });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1, true);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      go(last, true);
    }
  };

  const running = auto && visible && !hovered;

  return (
    <div ref={rootRef} className="grid gap-5 lg:grid-cols-[290px_1fr]" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={() => setHovered(false)}>
      <style>{`
        @keyframes ax-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .ax-in { animation: ax-in .4s ease both; }
        @keyframes ax-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes ax-chip { from { opacity: 0; transform: translateY(6px) scale(.94); } to { opacity: 1; transform: none; } }
        .ax-chip { animation: ax-chip .45s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ax-pick { from { fill: #D4D4D8; transform: scale(1); } to { fill: ${BLUE}; transform: scale(1.4); } }
        .ax-dot { fill: #D4D4D8; transform-box: fill-box; transform-origin: center; }
        .ax-dot-pick { animation: ax-pick .5s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ax-fade { to { opacity: .18; } }
        .ax-dot-fade { animation: ax-fade .6s ease both; }
        @keyframes ax-grow-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .ax-bar { transform-origin: left; animation: ax-grow-x .9s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ax-grow-y { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .ax-col { transform-origin: bottom; animation: ax-grow-y .9s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ax-dots { 0%, 80%, 100% { transform: translateY(0); opacity: .35; } 40% { transform: translateY(-4px); opacity: 1; } }
        .ax-tdot { animation: ax-dots 1s ease-in-out infinite; }
        @keyframes ax-hide { to { opacity: 0; visibility: hidden; } }
        .ax-typing { animation: ax-hide .3s ease 1.7s both; }
        @keyframes ax-reveal { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        .ax-reply { animation: ax-reveal .5s ease 1.9s both; }
        @keyframes ax-slide { from { opacity: 0; transform: translateX(-24px) rotate(var(--r, 0deg)); } to { opacity: 1; transform: translateX(0) rotate(var(--r, 0deg)); } }
        .ax-msg { animation: ax-slide .6s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ax-token { 0%, 100% { background-color: rgba(245,183,49,.2); } 50% { background-color: rgba(245,183,49,.65); } }
        .ax-token { animation: ax-token 2.4s ease-in-out infinite; }
        .ax-track::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .ax-in, .ax-chip, .ax-dot-pick, .ax-dot-fade, .ax-bar, .ax-col, .ax-tdot, .ax-typing, .ax-reply, .ax-msg, .ax-token { animation: none !important; }
          .ax-dot-pick { fill: ${BLUE}; transform: scale(1.4); }
          .ax-dot-fade { opacity: .18; }
          .ax-typing { display: none; }
          .ax-token { background-color: rgba(245,183,49,.4); }
        }
      `}</style>

      {/* Agent list */}
      <div
        ref={scrollerRef}
        role="tablist"
        aria-label="AI agents"
        onKeyDown={onKeyDown}
        className="ax-track -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        style={{ scrollbarWidth: "none" }}
      >
        {AGENTS.map((a, i) => {
          const isActive = i === active;
          const TabIcon = a.icon;
          return (
            <button
              key={a.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`ax-tab-${i}`}
              aria-selected={isActive}
              aria-controls="ax-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => go(i)}
              className="relative flex min-w-[215px] shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2] lg:min-w-0"
              style={isActive ? { backgroundColor: "#fff", borderColor: BLUE, boxShadow: "0 16px 36px rgba(10,102,194,0.14)" } : { backgroundColor: "rgba(255,255,255,0.6)", borderColor: "#E8E2D9" }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300" style={isActive ? { background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`, color: "#fff" } : { backgroundColor: BLUE_PALE, color: BLUE }}>
                <TabIcon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: isActive ? BLUE : MUTED }}>{`Agent ${i + 1}`}</span>
                <span className="block text-sm font-black leading-tight" style={{ color: INK }}>{a.title}</span>
              </span>
              {isActive && auto && (
                <span
                  key={`bar-${active}`}
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-full"
                  style={{
                    transformOrigin: "left",
                    background: `linear-gradient(90deg, ${BLUE}, ${GOLD})`,
                    animation: `ax-progress ${AUTO_MS}ms linear forwards`,
                    animationPlayState: running ? "running" : "paused",
                  }}
                  onAnimationEnd={() => setActive((cur) => (cur + 1) % AGENTS.length)}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active agent */}
      <div key={active} id="ax-panel" role="tabpanel" aria-labelledby={`ax-tab-${active}`} className="ax-in overflow-hidden rounded-[28px] border bg-white" style={{ borderColor: EDGE, boxShadow: "0 24px 70px rgba(10,102,194,0.10)" }}>
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden" style={{ background: "linear-gradient(135deg, #EEF5FC 0%, #FFF8E6 100%)" }}>
            <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-6 select-none text-[8.5rem] font-black leading-none" style={{ color: "rgba(10,102,194,0.07)", letterSpacing: "-0.06em" }}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <div className="relative h-full" aria-hidden="true">
              <Visual />
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`, boxShadow: "0 14px 30px rgba(10,102,194,0.28)" }}>
              <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-[11px] font-black uppercase tracking-[0.28em]" style={{ color: BLUE }}>{`Agent ${active + 1} of ${AGENTS.length}`}</p>
            <h3 className="mt-2 text-2xl font-black leading-tight" style={{ color: INK, letterSpacing: "-0.03em" }}>{agent.title}</h3>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "#52525B" }}>{agent.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {agent.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-bold" style={{ color: INK }}>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ backgroundColor: BLUE_PALE, color: BLUE }}>
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #FEF3D6, #FDE7BE)" }}>
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ backgroundColor: INK, color: GOLD }}>
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
              </span>
              <p className="text-sm font-black" style={{ color: "#7c3a06" }}>
                The result
                <span className="block font-semibold" style={{ color: "#3D2B14" }}>{agent.result}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
