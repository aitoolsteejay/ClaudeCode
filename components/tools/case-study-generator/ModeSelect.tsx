"use client";

import { FileText, Handshake } from "lucide-react";
import type { GeneratorMode } from "./types";

const ACCENT = "#6366f1";

interface ModeSelectProps {
  onSelect: (mode: GeneratorMode) => void;
}

export function ModeSelect({ onSelect }: ModeSelectProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-black mb-2 text-center" style={{ color: "#0a0a0a" }}>What do you want to draft?</h1>
      <p className="text-sm sm:text-base text-center mb-10" style={{ color: "#8C8279" }}>Pick one, you can always come back and do the other.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onSelect("case_study")}
          className="rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:-translate-y-1"
          style={{ backgroundColor: "#ffffff", border: `1.5px solid #E8E2D9` }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(99,102,241,0.1)" }}>
            <FileText className="w-6 h-6" style={{ color: ACCENT }} />
          </div>
          <h3 className="text-lg font-black mb-2" style={{ color: "#0a0a0a" }}>Turn a project into a case study</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
            You finished a project and got a real result. Turn it into a case study you can put on your site or send to prospects.
          </p>
        </button>

        <button
          type="button"
          onClick={() => onSelect("proposal")}
          className="rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:-translate-y-1"
          style={{ backgroundColor: "#ffffff", border: `1.5px solid #E8E2D9` }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(99,102,241,0.1)" }}>
            <Handshake className="w-6 h-6" style={{ color: ACCENT }} />
          </div>
          <h3 className="text-lg font-black mb-2" style={{ color: "#0a0a0a" }}>Draft a new proposal</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
            You have a prospect and a problem they described. Get a structured proposal draft you can send today.
          </p>
        </button>
      </div>
    </div>
  );
}
