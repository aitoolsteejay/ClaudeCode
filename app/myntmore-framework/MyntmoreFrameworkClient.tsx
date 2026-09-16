"use client";

import { useState } from "react";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { buildHowToSchema, SITE_URL } from "@/lib/schema";

/* ─── Icons (technical/glyph style, not emoji) ────────────────── */

function IconTarget() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>;
}
function IconSearch() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.3-4.3" /></svg>;
}
function IconUser() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="8" r="3.6" /><path strokeLinecap="round" d="M4.5 20c0-4.1 3.4-6.6 7.5-6.6s7.5 2.5 7.5 6.6" /></svg>;
}
function IconSparkle() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /></svg>;
}
function IconShield() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6l7-3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>;
}
function IconSend() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
}
function IconClock() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

/* ─── Node + connector data ───────────────────────────────────── */

const NODE_W = 208;
const NODE_H = 84;
const CANVAS_W = 1760;
const CANVAS_H = 620;

interface FNode {
  id: string;
  title: string;
  type: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  x: number;
  y: number;
  trigger?: boolean;
}

const NODES: FNode[] = [
  { id: "icp", title: "Define ICP & Criteria", type: "icp.define", accent: "#F5B731", icon: <IconTarget />, x: 20, y: 258, trigger: true,
    desc: "Every campaign starts by defining exactly who you're targeting: industry, seniority, company size, and the buying signals that matter." },
  { id: "prospects", title: "Find Matching Prospects", type: "prospect.search", accent: "#3b82f6", icon: <IconSearch />, x: 320, y: 258,
    desc: "The automation searches LinkedIn against those ICP criteria and builds a live list of prospects who actually match." },
  { id: "analyze", title: "Analyze Prospect Profile", type: "profile.analyze", accent: "#6366f1", icon: <IconUser />, x: 620, y: 258,
    desc: "Each prospect's profile is read and analyzed, so the outreach that follows is built around who they actually are, not a generic template." },
  { id: "personalize", title: "Generate Personalized Note", type: "ai.personalize", accent: "#7C3AED", icon: <IconSparkle />, x: 920, y: 258,
    desc: "A personalized connection request note is generated for each individual prospect, based on their profile, not copy-pasted across the list." },
  { id: "safety", title: "Human Behaviour Engine", type: "safety.humanize", accent: "#16A34A", icon: <IconShield />, x: 920, y: 470,
    desc: "Every send, every delay, every pause is run through this layer so sending behaviour mimics a real human, keeping the LinkedIn account safe from bans." },
  { id: "connect", title: "Send Connection Request", type: "linkedin.connect", accent: "#0A66C2", icon: <IconSend />, x: 1220, y: 258,
    desc: "The personalized note is sent as a connection request, on a schedule and pace set by the Human Behaviour Engine." },
  { id: "followup", title: "Send Follow-Up (Timed)", type: "linkedin.followUp", accent: "#D97706", icon: <IconClock />, x: 1520, y: 258,
    desc: "Follow-up messages go out in a timely manner, on the same human-safe schedule, so no warm prospect gets forgotten." },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));

interface FConn { from: string; to: string; kind: "line" | "branch"; }
const CONNECTIONS: FConn[] = [
  { from: "icp", to: "prospects", kind: "line" },
  { from: "prospects", to: "analyze", kind: "line" },
  { from: "analyze", to: "personalize", kind: "line" },
  { from: "personalize", to: "connect", kind: "line" },
  { from: "connect", to: "followup", kind: "line" },
  { from: "safety", to: "connect", kind: "branch" },
  { from: "safety", to: "followup", kind: "branch" },
];

function connPath(c: FConn): { d: string; from: [number, number]; to: [number, number] } {
  const a = NODE_MAP[c.from];
  const b = NODE_MAP[c.to];
  if (c.kind === "line") {
    const x1 = a.x + NODE_W, y1 = a.y + NODE_H / 2;
    const x2 = b.x, y2 = b.y + NODE_H / 2;
    return { d: `M${x1} ${y1} L${x2} ${y2}`, from: [x1, y1], to: [x2, y2] };
  }
  // branch: from top-ish of the safety node, curving up into the bottom of the target
  const x1 = a.x + NODE_W / 2 + (c.to === "followup" ? 30 : -30);
  const y1 = a.y;
  const x2 = b.x + NODE_W / 2;
  const y2 = b.y + NODE_H;
  const midY = y1 - (y1 - y2) * 0.55;
  return { d: `M${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`, from: [x1, y1], to: [x2, y2] };
}

const HOWTO_SCHEMA = buildHowToSchema(
  "The Myntmore Framework",
  NODES.map((n) => ({ name: n.title, text: n.desc }))
);

/* ─── Page ──────────────────────────────────────────────────── */

export default function MyntmoreFrameworkClient() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <InnerLayout>
      <JsonLd data={HOWTO_SCHEMA} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-14 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.18) 0%, rgba(255,160,0,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "The Myntmore Framework", href: "/myntmore-framework" }]} />

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(124,58,237,0.08)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7C3AED" }} />
            The Myntmore Framework
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The engine behind every campaign we run
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed" style={{ color: "#52525B" }}>
            We identify your ICP and find real prospects, generate a personalized connection note for each one, send everything through a human-behaviour engine that keeps the account safe, then follow up right on schedule.
          </p>
        </div>
      </section>

      {/* ── Workflow canvas ───────────────────────────────────── */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#2A2E37", boxShadow: "0 30px 70px rgba(10,10,20,0.25)" }}>
            {/* Window chrome */}
            <div className="flex flex-wrap items-center gap-3 px-5 py-3.5" style={{ backgroundColor: "#1B1E27", borderBottom: "1px solid #2A2E37" }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
              <span className="ml-2 text-xs font-mono font-bold" style={{ color: "#D7D9E0" }}>myntmore-outbound-engine.workflow</span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#4ADE80" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#4ADE80" }} />
                Active
              </span>
            </div>

            {/* Canvas */}
            <div className="overflow-x-auto" style={{ backgroundColor: "#F4F5F8" }}>
              <div
                className="relative"
                style={{
                  width: CANVAS_W,
                  height: CANVAS_H,
                  backgroundImage: "radial-gradient(circle, rgba(30,34,48,0.14) 1.4px, transparent 1.4px)",
                  backgroundSize: "26px 26px",
                }}
              >
                <svg width={CANVAS_W} height={CANVAS_H} className="absolute inset-0" style={{ pointerEvents: "none" }}>
                  <defs>
                    <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                      <path d="M0 0 L9 4.5 L0 9 Z" fill="#9CA3AF" />
                    </marker>
                  </defs>
                  {CONNECTIONS.map((c, i) => {
                    const { d } = connPath(c);
                    const isHighlighted = active === c.from || active === c.to;
                    return (
                      <g key={i}>
                        <path d={d} fill="none" stroke={isHighlighted ? NODE_MAP[c.from].accent : "#C7CBD4"} strokeWidth={isHighlighted ? 2.5 : 2} markerEnd="url(#arrow)" style={{ transition: "stroke 0.2s ease" }} />
                        <circle r="3.2" fill={NODE_MAP[c.from].accent}>
                          <animateMotion dur="2.6s" begin={`${i * 0.35}s`} repeatCount="indefinite" path={d} />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {NODES.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setActive((v) => (v === n.id ? null : n.id))}
                      className="absolute text-left rounded-xl border-2 transition-all duration-200"
                      style={{
                        left: n.x, top: n.y, width: NODE_W, height: NODE_H,
                        backgroundColor: "#ffffff",
                        borderColor: isActive ? n.accent : "#DDE0E7",
                        boxShadow: isActive ? `0 0 0 4px ${n.accent}22, 0 10px 24px rgba(0,0,0,0.12)` : "0 2px 6px rgba(0,0,0,0.05)",
                        borderRadius: n.trigger ? "9999px 14px 14px 9999px" : undefined,
                      }}
                    >
                      <div className="flex items-start gap-2.5 p-3.5 h-full">
                        <span className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${n.accent}18`, color: n.accent }}>
                          {n.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[13px] font-black leading-tight truncate" style={{ color: "#0a0a0a" }}>{n.title}</p>
                          <p className="text-[10.5px] font-mono mt-0.5 truncate" style={{ color: "#9199A8" }}>{n.type}</p>
                        </div>
                        <span className="ml-auto flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#22C55E" }}>
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom bar: zoom controls */}
            <div className="flex items-center justify-between px-5 py-2.5" style={{ backgroundColor: "#1B1E27" }}>
              <span className="text-[10px] font-mono" style={{ color: "#6B7280" }}>7 nodes &middot; 7 connections</span>
              <div className="flex items-center gap-1.5">
                <span className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#2A2E37", color: "#D7D9E0" }}>&minus;</span>
                <span className="text-[10px] font-mono px-1.5" style={{ color: "#9199A8" }}>100%</span>
                <span className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#2A2E37", color: "#D7D9E0" }}>+</span>
              </div>
            </div>
          </div>
          <p className="text-center text-xs mt-4 sm:hidden" style={{ color: "#8C8279" }}>&larr; Scroll to explore the full workflow &rarr;</p>
          <p className="text-center text-sm mt-4" style={{ color: "#8C8279" }}>Tap a node to see what it does &darr;</p>
        </div>
      </section>

      {/* ── Node breakdown ────────────────────────────────────── */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(124,58,237,0.08)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.2)" }}>
              How Every Step Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>What each node actually does</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {NODES.map((n) => (
              <div
                key={n.id}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                className="rounded-2xl border p-6 transition-all duration-200"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: active === n.id ? n.accent : "#E8E2D9",
                  boxShadow: active === n.id ? `0 8px 24px ${n.accent}22` : "none",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${n.accent}18`, color: n.accent }}>
                    {n.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-black leading-tight" style={{ color: "#0a0a0a" }}>{n.title}</h3>
                    <p className="text-[11px] font-mono" style={{ color: "#8C8279" }}>{n.type}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t text-center" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#0a0a0a" }}>See it run on your own pipeline</h2>
          <p className="text-base mb-8" style={{ color: "#52525B" }}>Book a call and we&apos;ll walk you through the framework live, against your own ICP.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/services/linkedin-outreach" className="btn-ghost px-8 py-4 text-base font-bold">
              See the Full Service
            </Link>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
