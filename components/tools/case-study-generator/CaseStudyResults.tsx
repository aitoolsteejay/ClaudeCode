"use client";

import { Quote } from "lucide-react";
import { CopyButton } from "./CopyButton";
import type { CaseStudyOutput } from "./types";

const ACCENT = "#6366f1";

function buildFullText(result: CaseStudyOutput): string {
  const parts = [
    result.headline,
    "",
    "The problem",
    result.problemParagraph,
    "",
    "The approach",
    ...result.approachSteps.map((s, i) => `${i + 1}. ${s.title}: ${s.description}`),
    "",
    "The results",
    result.resultsParagraph,
  ];
  if (result.pullQuote) parts.push("", `"${result.pullQuote}"`);
  if (result.servicesUsed.length) parts.push("", `Services used: ${result.servicesUsed.join(", ")}`);
  return parts.join("\n");
}

export function CaseStudyResults({ result, onReset }: { result: CaseStudyOutput; onReset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(99,102,241,0.08)", color: ACCENT, border: `1px solid ${ACCENT}30` }}>
          Case Study Draft
        </span>
        <CopyButton text={buildFullText(result)} accent={ACCENT} label="Copy all" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: "#0a0a0a" }}>{result.headline}</h1>

      {result.stats.length > 0 && (
        <div
          className={`grid gap-6 p-6 sm:p-8 rounded-2xl grid-cols-1 ${result.stats.length >= 2 ? "sm:grid-cols-2" : ""} ${result.stats.length >= 3 ? "sm:grid-cols-3" : ""}`}
          style={{ backgroundColor: "rgba(99,102,241,0.06)", border: `1px solid ${ACCENT}30` }}
        >
          {result.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.value}</div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: "#52525B" }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-black" style={{ color: "#0a0a0a" }}>The Problem</h2>
          <CopyButton text={result.problemParagraph} accent={ACCENT} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>{result.problemParagraph}</p>
      </div>

      <div>
        <h2 className="text-lg font-black mb-4" style={{ color: "#0a0a0a" }}>The Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {result.approachSteps.map((step, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
              <p className="text-xs font-black text-gray-400 mb-2">STEP {i + 1}</p>
              <p className="font-bold text-sm mb-2" style={{ color: "#0a0a0a" }}>{step.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-black" style={{ color: "#0a0a0a" }}>The Results</h2>
          <CopyButton text={result.resultsParagraph} accent={ACCENT} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>{result.resultsParagraph}</p>
      </div>

      {result.pullQuote && (
        <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "#0a0a0a" }}>
          <Quote className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
          <p className="text-lg font-medium leading-relaxed text-white">&quot;{result.pullQuote}&quot;</p>
        </div>
      )}

      {result.servicesUsed.length > 0 && (
        <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <h3 className="text-sm font-black mb-3" style={{ color: "#0a0a0a" }}>Services used in this engagement</h3>
          <div className="flex flex-wrap gap-2">
            {result.servicesUsed.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "#F8F6F2", color: "#3D3D3D", border: "1px solid #E8E2D9" }}>{s}</span>
            ))}
          </div>
        </div>
      )}

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
