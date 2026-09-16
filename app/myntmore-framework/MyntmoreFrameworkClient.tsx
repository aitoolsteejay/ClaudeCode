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
function IconDocument() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="5" y="3.5" width="14" height="17" rx="2" /><path strokeLinecap="round" d="M8.5 9h7M8.5 13h7M8.5 17h4" /></svg>;
}
function IconBranch() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="6" cy="6" r="2.4" /><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="12" r="2.4" /><path strokeLinecap="round" d="M6 8.4V15.6M8.2 7.2L15.8 10.8M8.2 16.8L15.8 13.2" /></svg>;
}
function IconDatabase() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><ellipse cx="12" cy="6" rx="7.5" ry="2.8" /><path strokeLinecap="round" d="M4.5 6v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6M4.5 12v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-6" /></svg>;
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
function IconHourglass() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M6.5 3h11M6.5 21h11M7.5 3c0 4.5 4.5 5.2 4.5 9s-4.5 4.5-4.5 9M16.5 3c0 4.5-4.5 5.2-4.5 9s4.5 4.5 4.5 9" /></svg>;
}
function IconClock() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function IconChart() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 20V11M11 20V4M18 20v-6M3 20h18" /></svg>;
}
function IconStop() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="6" y="6" width="12" height="12" rx="2.5" /></svg>;
}
function IconGauge() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" d="M4 16a8 8 0 1116 0" /><path strokeLinecap="round" d="M12 16l4-5" /><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" /></svg>;
}
function IconFilter() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16l-6 8v6l-4 2v-8L4 5z" /></svg>;
}
function IconWarning() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l10 18H2L12 3z" /><path strokeLinecap="round" d="M12 9.5v4.5" /><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" /></svg>;
}

/* ─── Node + connector data ───────────────────────────────────── */

const NODE_W = 208;
const NODE_H = 92;
const IF_W = 140;
const END_W = 170;
const END_H = 56;
const CANVAS_W = 4350;
const CANVAS_H = 650;

type Shape = "trigger" | "regular" | "if" | "end";

interface FNode {
  id: string;
  title: string;
  type: string;
  desc?: string;
  meta?: string;
  icon: React.ReactNode;
  accent: string;
  x: number;
  y: number;
  w: number;
  h: number;
  shape: Shape;
  narrative?: boolean; // shown in the "what each node does" breakdown below
}

const NODES: FNode[] = [
  { id: "icp", title: "Define ICP & Criteria", type: "icp.define", accent: "#F5B731", icon: <IconTarget />, x: 20, y: 220, w: NODE_W, h: NODE_H, shape: "trigger", narrative: true,
    desc: "Every campaign starts by defining exactly who you're targeting: industry, seniority, company size, and the buying signals that matter." },
  { id: "ratelimit", title: "Check Rate Limit", type: "api.rateLimit", accent: "#0891B2", icon: <IconGauge />, x: 318, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    meta: "Quota: 1,000 req/day",
    desc: "Before anything runs, the pipeline checks it's within LinkedIn's API and usage limits, so it never pushes past what's safe." },
  { id: "search", title: "Search LinkedIn", type: "linkedin.search", accent: "#3b82f6", icon: <IconSearch />, x: 616, y: 220, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    meta: "Query: title + industry + headcount",
    desc: "The automation searches LinkedIn against those ICP criteria and builds a live list of prospects who actually match." },
  { id: "scrape", title: "Scrape Prospect List", type: "prospect.scrape", accent: "#3b82f6", icon: <IconDocument />, x: 914, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    desc: "Matching profiles are pulled into a structured list: name, title, company, and profile URL for every prospect found." },
  { id: "normalize", title: "Normalize Prospect Data", type: "prospect.normalize", accent: "#0891B2", icon: <IconFilter />, x: 1212, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    desc: "Every field is cleaned and standardised, names, titles, company formats, before it's checked against the ICP." },
  { id: "iffilter", title: "Matches ICP?", type: "icp.filter", accent: "#F59E0B", icon: <IconBranch />, x: 1510, y: 220, w: IF_W, h: NODE_H, shape: "if",
    desc: "A check runs on every prospect against the ICP criteria before anything is sent." },
  { id: "discard", title: "Discard Lead", type: "icp.discard", accent: "#9199A8", icon: <IconStop />, x: 1495, y: 440, w: END_W, h: END_H, shape: "end" },
  { id: "enrich", title: "Enrich Prospect Data", type: "prospect.enrich", accent: "#0EA5E9", icon: <IconDatabase />, x: 1740, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    desc: "Extra signal is pulled in on each remaining prospect, recent activity, mutual connections, so personalization has more to work with." },
  { id: "analyze", title: "Analyze Prospect Profile", type: "profile.analyze", accent: "#6366f1", icon: <IconUser />, x: 2038, y: 220, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    desc: "Each prospect's profile is read and analyzed, so the outreach that follows is built around who they actually are, not a generic template." },
  { id: "personalize", title: "Generate Personalized Note", type: "ai.personalize", accent: "#7C3AED", icon: <IconSparkle />, x: 2336, y: 220, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    desc: "A personalized connection request note is generated for each individual prospect, based on their profile, not copy-pasted across the list." },
  { id: "connect", title: "Send Connection Request", type: "linkedin.connect", accent: "#0A66C2", icon: <IconSend />, x: 2634, y: 220, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    desc: "The personalized note is sent as a connection request, on a schedule and pace set by the Human Behaviour Engine." },
  { id: "senderror", title: "Log Send Error", type: "error.log", accent: "#DC2626", icon: <IconWarning />, x: 2653, y: 440, w: END_W, h: END_H, shape: "end" },
  { id: "wait", title: "Wait For Response", type: "linkedin.wait", accent: "#0A66C2", icon: <IconHourglass />, x: 2932, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    meta: "Delay: 1–4 days",
    desc: "The workflow waits and watches for a response before deciding what happens next, never firing off the next step blindly." },
  { id: "ifaccepted", title: "Connection Accepted?", type: "linkedin.checkStatus", accent: "#F59E0B", icon: <IconBranch />, x: 3230, y: 220, w: IF_W, h: NODE_H, shape: "if",
    desc: "A check runs on whether the connection was actually accepted before any follow-up goes out." },
  { id: "archive", title: "Archive Lead", type: "lead.archive", accent: "#9199A8", icon: <IconStop />, x: 3215, y: 440, w: END_W, h: END_H, shape: "end" },
  { id: "followup1", title: "Send Follow-Up #1", type: "linkedin.followUp1", accent: "#D97706", icon: <IconClock />, x: 3460, y: 220, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    desc: "Follow-up messages go out in a timely manner, on the same human-safe schedule, so no warm prospect gets forgotten." },
  { id: "followup2", title: "Send Follow-Up #2", type: "linkedin.followUp2", accent: "#D97706", icon: <IconClock />, x: 3758, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    meta: "If no reply to #1",
    desc: "A second, later follow-up for prospects who haven't replied yet, still on the same human-safe timing." },
  { id: "log", title: "Log to Dashboard", type: "dashboard.log", accent: "#16A34A", icon: <IconChart />, x: 4056, y: 220, w: NODE_W, h: NODE_H, shape: "regular",
    desc: "Every request, reply, and acceptance is logged, so campaign and lifetime metrics stay accurate in real time." },
  { id: "safety", title: "Human Behaviour Engine", type: "safety.humanize", accent: "#16A34A", icon: <IconShield />, x: 2950, y: 480, w: NODE_W, h: NODE_H, shape: "regular", narrative: true,
    meta: "45–180s jitter · daily cap 20–35",
    desc: "Every send, every delay, every pause is run through this layer so sending behaviour mimics a real human, keeping the LinkedIn account safe from bans." },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));
const NARRATIVE_NODES = NODES.filter((n) => n.narrative);

interface FConn { from: string; to: string; kind: "line" | "branch" | "true" | "false" | "error"; }
const CONNECTIONS: FConn[] = [
  { from: "icp", to: "ratelimit", kind: "line" },
  { from: "ratelimit", to: "search", kind: "line" },
  { from: "search", to: "scrape", kind: "line" },
  { from: "scrape", to: "normalize", kind: "line" },
  { from: "normalize", to: "iffilter", kind: "line" },
  { from: "iffilter", to: "enrich", kind: "true" },
  { from: "iffilter", to: "discard", kind: "false" },
  { from: "enrich", to: "analyze", kind: "line" },
  { from: "analyze", to: "personalize", kind: "line" },
  { from: "personalize", to: "connect", kind: "line" },
  { from: "connect", to: "senderror", kind: "error" },
  { from: "connect", to: "wait", kind: "line" },
  { from: "wait", to: "ifaccepted", kind: "line" },
  { from: "ifaccepted", to: "followup1", kind: "true" },
  { from: "ifaccepted", to: "archive", kind: "false" },
  { from: "followup1", to: "followup2", kind: "line" },
  { from: "followup2", to: "log", kind: "line" },
  { from: "safety", to: "connect", kind: "branch" },
  { from: "safety", to: "followup1", kind: "branch" },
];

function connPath(c: FConn): string {
  const a = NODE_MAP[c.from];
  const b = NODE_MAP[c.to];

  if (c.kind === "line" || c.kind === "true") {
    const x1 = a.x + a.w, y1 = a.y + a.h / 2;
    const x2 = b.x, y2 = b.y + b.h / 2;
    if (Math.abs(y1 - y2) < 1) return `M${x1} ${y1} L${x2} ${y2}`;
    const midX = x1 + (x2 - x1) * 0.5;
    return `M${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
  }

  if (c.kind === "false" || c.kind === "error") {
    const x1 = a.x + a.w / 2, y1 = a.y + a.h;
    const x2 = b.x + b.w / 2, y2 = b.y;
    return `M${x1} ${y1} C ${x1 - 20} ${y1 + 60}, ${x2 + 20} ${y2 - 60}, ${x2} ${y2}`;
  }

  // branch: from the safety node curving up into the bottom of the target
  const x1 = a.x + a.w / 2 + (c.to === "followup1" ? 30 : -30);
  const y1 = a.y;
  const x2 = b.x + b.w / 2;
  const y2 = b.y + b.h;
  const midY = y1 - (y1 - y2) * 0.55;
  return `M${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

const STICKIES = [
  { x: 1380, y: 30, w: 260, rot: -2, text: "Only prospects that actually match the ICP move forward. Everyone else is filtered out right here." },
  { x: 2360, y: 350, w: 250, rot: -2, text: "A failed send is logged, not retried blindly. No risk of flooding the account." },
  { x: 3100, y: 30, w: 270, rot: 2, text: "We wait for a real acceptance before following up, never spam a pending request." },
];

const HOWTO_SCHEMA = buildHowToSchema(
  "The Myntmore Framework",
  NARRATIVE_NODES.map((n) => ({ name: n.title, text: n.desc ?? "" }))
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
          <div className="relative rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#2A2E37", boxShadow: "0 30px 70px rgba(10,10,20,0.25)" }}>
            {/* Window chrome */}
            <div className="flex flex-wrap items-center gap-3 px-5 py-3.5" style={{ backgroundColor: "#1B1E27", borderBottom: "1px solid #2A2E37" }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
              <span className="ml-2 text-xs font-mono font-bold" style={{ color: "#D7D9E0" }}>myntmore-outbound-engine.workflow</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ backgroundColor: "#2A2E37", color: "#6B7280" }}>v2.3.1</span>
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
                    const d = connPath(c);
                    const isHighlighted = active === c.from || active === c.to;
                    const branchColor = c.kind === "true" ? "#16A34A" : c.kind === "false" || c.kind === "error" ? "#DC2626" : NODE_MAP[c.from].accent;
                    return (
                      <g key={i}>
                        <path d={d} fill="none" stroke={isHighlighted ? branchColor : "#C7CBD4"} strokeWidth={isHighlighted ? 2.5 : 2} strokeDasharray={c.kind === "false" || c.kind === "error" ? "5 4" : undefined} markerEnd="url(#arrow)" style={{ transition: "stroke 0.2s ease" }} />
                        <circle r="3.2" fill={branchColor}>
                          <animateMotion dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" path={d} />
                        </circle>
                      </g>
                    );
                  })}
                  {/* true/false branch labels */}
                  <g className="font-mono" style={{ fontSize: 10, fontWeight: 700 }}>
                    <text x={NODE_MAP.iffilter.x + NODE_MAP.iffilter.w + 14} y={NODE_MAP.iffilter.y + NODE_MAP.iffilter.h / 2 - 8} fill="#16A34A">true</text>
                    <text x={NODE_MAP.iffilter.x + NODE_MAP.iffilter.w / 2 - 14} y={NODE_MAP.iffilter.y + NODE_MAP.iffilter.h + 34} fill="#DC2626">false</text>
                    <text x={NODE_MAP.ifaccepted.x + NODE_MAP.ifaccepted.w + 14} y={NODE_MAP.ifaccepted.y + NODE_MAP.ifaccepted.h / 2 - 8} fill="#16A34A">true</text>
                    <text x={NODE_MAP.ifaccepted.x + NODE_MAP.ifaccepted.w / 2 - 14} y={NODE_MAP.ifaccepted.y + NODE_MAP.ifaccepted.h + 34} fill="#DC2626">false</text>
                    <text x={NODE_MAP.connect.x + NODE_MAP.connect.w / 2 + 16} y={NODE_MAP.connect.y + NODE_MAP.connect.h + 34} fill="#DC2626">on error</text>
                  </g>
                </svg>

                {/* Sticky notes */}
                {STICKIES.map((s, i) => (
                  <div key={i} className="absolute rounded-lg p-3.5 text-[12px] leading-snug font-semibold"
                    style={{ left: s.x, top: s.y, width: s.w, backgroundColor: "#FEF3C7", color: "#78350F", transform: `rotate(${s.rot}deg)`, boxShadow: "0 6px 16px rgba(0,0,0,0.1)" }}>
                    <span className="block w-2.5 h-2.5 rounded-full mb-1.5" style={{ backgroundColor: "#F59E0B" }} />
                    {s.text}
                  </div>
                ))}

                {NODES.map((n) => {
                  const isActive = active === n.id;
                  if (n.shape === "end") {
                    return (
                      <button
                        key={n.id}
                        onClick={() => setActive((v) => (v === n.id ? null : n.id))}
                        className="absolute rounded-full border-2 transition-all duration-200 flex items-center justify-center gap-2"
                        style={{
                          left: n.x, top: n.y, width: n.w, height: n.h,
                          backgroundColor: "#F1F2F5",
                          borderColor: isActive ? n.accent : "#DDE0E7",
                          color: "#5A6272",
                        }}
                      >
                        {n.icon}
                        <span className="text-xs font-bold">{n.title}</span>
                      </button>
                    );
                  }
                  return (
                    <button
                      key={n.id}
                      onClick={() => setActive((v) => (v === n.id ? null : n.id))}
                      className="absolute text-left rounded-xl border-2 transition-all duration-200"
                      style={{
                        left: n.x, top: n.y, width: n.w, height: n.h,
                        backgroundColor: "#ffffff",
                        borderColor: isActive ? n.accent : "#DDE0E7",
                        boxShadow: isActive ? `0 0 0 4px ${n.accent}22, 0 10px 24px rgba(0,0,0,0.12)` : "0 2px 6px rgba(0,0,0,0.05)",
                        borderRadius: n.shape === "trigger" ? "9999px 14px 14px 9999px" : n.shape === "if" ? "18px" : undefined,
                      }}
                    >
                      {n.shape === "if" ? (
                        <div className="flex flex-col items-center justify-center h-full p-2 text-center gap-1">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${n.accent}18`, color: n.accent }}>
                            {n.icon}
                          </span>
                          <p className="text-[11.5px] font-black leading-tight" style={{ color: "#0a0a0a" }}>{n.title}</p>
                          <p className="text-[9.5px] font-mono truncate max-w-full" style={{ color: "#9199A8" }}>{n.type}</p>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2.5 p-3.5 h-full">
                          <span className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${n.accent}18`, color: n.accent }}>
                            {n.icon}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[13px] font-black leading-tight truncate" style={{ color: "#0a0a0a" }}>{n.title}</p>
                            <p className="text-[10.5px] font-mono mt-0.5 truncate" style={{ color: "#9199A8" }}>{n.type}</p>
                            {n.meta && <p className="text-[9.5px] mt-1 truncate" style={{ color: "#B3B9C4" }}>{n.meta}</p>}
                          </div>
                          <span className="ml-auto flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#22C55E" }}>
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Minimap (fixed to the window frame, independent of canvas scroll) */}
            <div className="hidden sm:block absolute rounded-lg border overflow-hidden" style={{ right: 16, bottom: 48, width: 160, height: 84, backgroundColor: "rgba(27,30,39,0.92)", borderColor: "#3A3F4C", backdropFilter: "blur(4px)" }}>
              <div className="flex items-center h-full px-2 gap-1">
                {NODES.filter((n) => n.shape !== "end").map((n) => (
                  <span key={n.id} className="flex-shrink-0 rounded-sm" style={{ width: n.shape === "if" ? 4 : 7, height: n.y > 400 ? 6 : 10, backgroundColor: n.accent, opacity: 0.75, marginTop: n.y > 400 ? 6 : 0 }} />
                ))}
              </div>
              <div className="absolute inset-y-0 left-0" style={{ width: "26%", backgroundColor: "rgba(255,255,255,0.12)", borderRight: "1px solid rgba(255,255,255,0.35)" }} />
            </div>

            {/* Bottom bar: zoom controls */}
            <div className="flex items-center justify-between px-5 py-2.5" style={{ backgroundColor: "#1B1E27" }}>
              <span className="text-[10px] font-mono" style={{ color: "#6B7280" }}>{NODES.length} nodes &middot; {CONNECTIONS.length} connections</span>
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
            {NARRATIVE_NODES.map((n) => (
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
