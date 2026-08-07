"use client";

import { CopyButton } from "./CopyButton";
import type { ProposalOutput } from "./types";

const ACCENT = "#6366f1";

function buildFullText(result: ProposalOutput): string {
  return [
    "Executive Summary",
    result.executiveSummary,
    "",
    "Understanding Your Challenge",
    result.understandingChallenge,
    "",
    "Our Approach",
    ...result.approachPhases.map((p, i) => `${i + 1}. ${p.title}: ${p.description}`),
    "",
    "Why Us",
    ...result.whyUs.map((w) => `- ${w}`),
    "",
    "Investment",
    result.investment,
    "",
    "Next Step",
    result.nextStep,
  ].join("\n");
}

export function ProposalResults({ result, onReset }: { result: ProposalOutput; onReset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(99,102,241,0.08)", color: ACCENT, border: `1px solid ${ACCENT}30` }}>
          Proposal Draft
        </span>
        <CopyButton text={buildFullText(result)} accent={ACCENT} label="Copy all" />
      </div>

      {result.positioning && (
        <div className="rounded-2xl p-6 sm:p-8 text-center" style={{ backgroundColor: "rgba(99,102,241,0.06)", border: `1px solid ${ACCENT}30` }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Positioning</p>
          <p className="text-lg font-bold leading-relaxed" style={{ color: "#0a0a0a" }}>&quot;{result.positioning}&quot;</p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-black" style={{ color: "#0a0a0a" }}>Executive Summary</h2>
          <CopyButton text={result.executiveSummary} accent={ACCENT} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>{result.executiveSummary}</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-black" style={{ color: "#0a0a0a" }}>Understanding Your Challenge</h2>
          <CopyButton text={result.understandingChallenge} accent={ACCENT} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>{result.understandingChallenge}</p>
      </div>

      <div>
        <h2 className="text-lg font-black mb-4" style={{ color: "#0a0a0a" }}>Our Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {result.approachPhases.map((phase, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
              <p className="text-xs font-black text-gray-400 mb-2">PHASE {i + 1}</p>
              <p className="font-bold text-sm mb-2" style={{ color: "#0a0a0a" }}>{phase.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
        <h3 className="text-sm font-black mb-3" style={{ color: "#0a0a0a" }}>Why Us</h3>
        <ul className="space-y-2.5">
          {result.whyUs.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "#3D3D3D" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl p-5" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8C8279" }}>Investment</p>
          <p className="text-sm font-medium" style={{ color: "#3D3D3D" }}>{result.investment}</p>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(99,102,241,0.06)", border: `1px solid ${ACCENT}30` }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Next Step</p>
          <p className="text-sm font-medium" style={{ color: "#0a0a0a" }}>{result.nextStep}</p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
        style={{ backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }}
      >
        Start Over
      </button>
    </div>
  );
}
