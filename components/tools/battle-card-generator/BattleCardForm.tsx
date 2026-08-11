"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { BattleCardInput } from "./types";

const ACCENT = "#ef4444";

const EMPTY: BattleCardInput = {
  competitorName: "",
  competitorWebsite: "",
  yourCompanyName: "",
  yourOffer: "",
};

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
    // flex-col + mt-auto on the input (not space-y-2 on a plain block div):
    // when this sits next to a sibling Field in a grid row and only one of
    // the two has a hint line, a plain block layout leaves the shorter
    // field's input sitting higher than its sibling's. Grid's default
    // stretch still equalises the two wrapper heights, so mt-auto pushes
    // every field's input down to the same baseline regardless of hint.
    <div className="flex flex-col h-full">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em] mb-2">
        {label} {required && <span style={{ color: ACCENT }}>*</span>}
      </label>
      {hint && <p className="text-xs mb-2" style={{ color: "#8C8279" }}>{hint}</p>}
      <div className="mt-auto">
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
    </div>
  );
}

interface BattleCardFormProps {
  onGenerate: (data: BattleCardInput) => void;
  isLoading: boolean;
}

export function BattleCardForm({ onGenerate, isLoading }: BattleCardFormProps) {
  const [data, setData] = useState<BattleCardInput>(EMPTY);

  const isValid = data.competitorName.trim() && data.yourCompanyName.trim() && data.yourOffer.trim();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Who are you up against?</h2>
      <p className="text-sm mb-8" style={{ color: "#8C8279" }}>We&apos;ll research them live and build the card around your actual offer.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Competitor Name"
            value={data.competitorName}
            onChange={(v) => setData({ ...data, competitorName: v })}
            placeholder="e.g. Apollo.io"
            required
          />
          <Field
            label="Competitor Website (optional)"
            hint="Helps us find the right company."
            value={data.competitorWebsite}
            onChange={(v) => setData({ ...data, competitorWebsite: v })}
            placeholder="e.g. apollo.io"
          />
        </div>

        <Field
          label="Your Company Name"
          value={data.yourCompanyName}
          onChange={(v) => setData({ ...data, yourCompanyName: v })}
          placeholder="e.g. Myntmore"
          required
        />

        <Field
          label="What You Sell, And To Whom"
          hint="The more specific, the sharper the positioning and objection answers."
          value={data.yourOffer}
          onChange={(v) => setData({ ...data, yourOffer: v })}
          placeholder="e.g. We're an AI-powered outbound agency, we run cold email and LinkedIn outreach for B2B founders who don't have an in-house SDR team."
          rows={4}
          required
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
            Researching and building your battle card...
          </>
        ) : (
          "Generate Battle Card"
        )}
      </button>
    </div>
  );
}
