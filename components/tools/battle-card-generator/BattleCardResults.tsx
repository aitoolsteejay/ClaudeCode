"use client";

import { ShieldAlert } from "lucide-react";
import { CopyButton } from "./CopyButton";
import type { BattleCardOutput } from "./types";

const ACCENT = "#ef4444";

function buildFullText(result: BattleCardOutput): string {
  return [
    `Battle Card: ${result.competitorName}`,
    "",
    "What they do",
    result.whatTheyDo,
    "",
    "Pricing",
    result.pricingModel,
    "",
    "Their strengths",
    ...result.strengths.map((s) => `- ${s}`),
    "",
    "Their gaps",
    ...result.gaps.map((g) => `- ${g}`),
    "",
    "How to position against them",
    result.howToPosition,
    "",
    "Objection responses",
    ...result.objectionResponses.map((o) => `Q: ${o.objection}\nA: ${o.response}`),
    "",
    result.researchNote,
  ].join("\n");
}

export function BattleCardResults({ result, onReset }: { result: BattleCardOutput; onReset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: ACCENT, border: `1px solid ${ACCENT}30` }}>
          Battle Card
        </span>
        <CopyButton text={buildFullText(result)} accent={ACCENT} label="Copy all" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: "#0a0a0a" }}>{result.competitorName}</h1>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-black" style={{ color: "#0a0a0a" }}>What They Do</h2>
          <CopyButton text={result.whatTheyDo} accent={ACCENT} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>{result.whatTheyDo}</p>
      </div>

      <div className="rounded-xl p-5" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8C8279" }}>Pricing</p>
        <p className="text-sm font-medium" style={{ color: "#3D3D3D" }}>{result.pricingModel}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h3 className="text-sm font-black mb-3" style={{ color: "#16a34a" }}>Their Strengths</h3>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3D3D3D" }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#16a34a" }} />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h3 className="text-sm font-black mb-3" style={{ color: ACCENT }}>Their Gaps</h3>
          <ul className="space-y-2">
            {result.gaps.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3D3D3D" }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "rgba(239,68,68,0.06)", border: `1px solid ${ACCENT}30` }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>How To Position Against Them</p>
        <p className="text-base leading-relaxed font-medium" style={{ color: "#0a0a0a" }}>{result.howToPosition}</p>
      </div>

      <div>
        <h2 className="text-lg font-black mb-4" style={{ color: "#0a0a0a" }}>Objection Responses</h2>
        <div className="space-y-3">
          {result.objectionResponses.map((o, i) => (
            <div key={i} className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "#8C8279" }}>&quot;{o.objection}&quot;</p>
              <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{o.response}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-4 flex items-start gap-3" style={{ backgroundColor: "#FEF3EC", border: "1px solid rgba(249,115,22,0.3)" }}>
        <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
        <p className="text-xs leading-relaxed" style={{ color: "#3D3D3D" }}>{result.researchNote}</p>
      </div>

      <button
        onClick={onReset}
        className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
        style={{ backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }}
      >
        Research Another Competitor
      </button>
    </div>
  );
}
