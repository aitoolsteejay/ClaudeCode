"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { ProposalInput } from "./types";

const ACCENT = "#6366f1";

const EMPTY: ProposalInput = {
  prospectCompany: "",
  prospectIndustry: "",
  problemShared: "",
  decisionMakerRole: "",
  budgetIndication: "",
  howWeMet: "",
  pastWins: "",
};

const HOW_WE_MET_OPTIONS: ProposalInput["howWeMet"][] = ["Referral", "Inbound", "Outbound"];

function Field({
  label,
  hint,
  required,
  value,
  onChange,
  placeholder,
  rows,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  rows?: number;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
        {label} {required && <span style={{ color: ACCENT }}>*</span>}
      </label>
      {hint && <p className="text-xs" style={{ color: "#8C8279" }}>{hint}</p>}
      {rows ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none resize-none"
          style={{ border: "1px solid #E8E2D9" }}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none"
          style={{ border: "1px solid #E8E2D9" }}
        />
      )}
    </div>
  );
}

interface ProposalFormProps {
  onGenerate: (data: ProposalInput) => void;
  isLoading: boolean;
}

export function ProposalForm({ onGenerate, isLoading }: ProposalFormProps) {
  const [data, setData] = useState<ProposalInput>(EMPTY);

  const isValid = data.prospectCompany.trim() && data.prospectIndustry.trim() && data.problemShared.trim() && data.decisionMakerRole.trim();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Tell us about the prospect</h2>
      <p className="text-sm mb-8" style={{ color: "#8C8279" }}>We&apos;ll mirror their language back to them, not generic filler.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Prospect Company"
            value={data.prospectCompany}
            onChange={(v) => setData({ ...data, prospectCompany: v })}
            placeholder="e.g. Northwind Logistics"
            required
          />
          <Field
            label="Their Industry"
            value={data.prospectIndustry}
            onChange={(v) => setData({ ...data, prospectIndustry: v })}
            placeholder="e.g. Freight tech"
            required
          />
        </div>
        <Field
          label="The Problem They Shared"
          hint="Use their own words where you can, we'll mirror them back."
          value={data.problemShared}
          onChange={(v) => setData({ ...data, problemShared: v })}
          placeholder="e.g. We're getting inbound but can't tell who's actually worth chasing."
          rows={3}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Decision Maker's Role"
            value={data.decisionMakerRole}
            onChange={(v) => setData({ ...data, decisionMakerRole: v })}
            placeholder="e.g. VP Sales"
            required
          />
          <Field
            label="Budget Indication (optional)"
            value={data.budgetIndication}
            onChange={(v) => setData({ ...data, budgetIndication: v })}
            placeholder="e.g. Not discussed yet"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">How We Met</label>
          <div className="grid grid-cols-3 gap-3">
            {HOW_WE_MET_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setData({ ...data, howWeMet: opt })}
                className="rounded-xl py-3 text-center text-sm font-bold transition-all"
                style={
                  data.howWeMet === opt
                    ? { backgroundColor: "rgba(99,102,241,0.08)", border: `1.5px solid ${ACCENT}`, color: ACCENT }
                    : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <Field
          label="Past Wins to Reference (optional)"
          hint="1-2 of your best relevant results. Leave blank and we'll keep this section generic rather than invent numbers."
          value={data.pastWins}
          onChange={(v) => setData({ ...data, pastWins: v })}
          placeholder="e.g. Got a similar freight-tech client from 0 to 25 meetings/month in 6 weeks."
          rows={3}
        />
      </div>

      <button
        onClick={() => isValid && onGenerate(data)}
        disabled={!isValid || isLoading}
        className={`w-full mt-10 py-5 rounded-xl font-bold text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
          isValid && !isLoading ? "text-white hover:opacity-90 active:scale-[0.99] shadow-lg" : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
        }`}
        style={isValid && !isLoading ? { backgroundColor: ACCENT } : undefined}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Drafting your proposal...
          </>
        ) : (
          "Generate Proposal"
        )}
      </button>
    </div>
  );
}
