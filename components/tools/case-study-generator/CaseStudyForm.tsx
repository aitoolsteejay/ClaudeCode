"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { CaseStudyInput } from "./types";

const ACCENT = "#6366f1";

const EMPTY: CaseStudyInput = {
  clientIndustry: "",
  problem: "",
  approach: "",
  result: "",
  testimonial: "",
};

interface CaseStudyFormProps {
  onGenerate: (data: CaseStudyInput) => void;
  isLoading: boolean;
}

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

export function CaseStudyForm({ onGenerate, isLoading }: CaseStudyFormProps) {
  const [data, setData] = useState<CaseStudyInput>(EMPTY);

  const isValid = data.clientIndustry.trim() && data.problem.trim() && data.approach.trim() && data.result.trim();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Tell us what happened</h2>
      <p className="text-sm mb-8" style={{ color: "#8C8279" }}>Rough notes are fine, we&apos;ll structure it into a proper case study.</p>

      <div className="space-y-6">
        <Field
          label="Client Industry"
          value={data.clientIndustry}
          onChange={(v) => setData({ ...data, clientIndustry: v })}
          placeholder="e.g. B2B SaaS, Series A"
          required
        />
        <Field
          label="The Problem"
          hint="What was broken or missing before you got involved?"
          value={data.problem}
          onChange={(v) => setData({ ...data, problem: v })}
          placeholder="e.g. Zero outbound infrastructure, AE spending 60% of their day manually finding leads on LinkedIn."
          rows={3}
          required
        />
        <Field
          label="What You Did"
          hint="Rough notes are fine, we'll turn this into phases."
          value={data.approach}
          onChange={(v) => setData({ ...data, approach: v })}
          placeholder="e.g. Built ICP around hiring signals, ran cold email + LinkedIn in parallel, personalised based on intent data."
          rows={4}
          required
        />
        <Field
          label="The Result"
          hint="Include real numbers if you have them. We won't invent any."
          value={data.result}
          onChange={(v) => setData({ ...data, result: v })}
          placeholder="e.g. 40 qualified meetings in 8 weeks, 34% reply rate, $1.2M pipeline generated."
          rows={3}
          required
        />
        <Field
          label="Client Quote (optional)"
          hint="Leave blank if you don't have one, we won't make one up."
          value={data.testimonial}
          onChange={(v) => setData({ ...data, testimonial: v })}
          placeholder={`e.g. "They freed up 100% of our AE's time."`}
          rows={2}
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
            Writing your case study...
          </>
        ) : (
          "Generate Case Study"
        )}
      </button>
    </div>
  );
}
