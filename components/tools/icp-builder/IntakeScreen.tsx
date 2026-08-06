"use client";

import { Textarea } from "@/components/ui/textarea";
import type { IntakeData, SellingTo, BusinessType } from "./types";

const SELLING_TO_OPTIONS: { value: SellingTo; label: string; hint: string }[] = [
  { value: "D2C", label: "D2C", hint: "Individual consumers" },
  { value: "B2B", label: "B2B", hint: "Business buyers" },
  { value: "Both", label: "Both", hint: "A mix of both" },
];

const BUSINESS_TYPE_OPTIONS: { value: BusinessType; label: string }[] = [
  { value: "Product-based", label: "Product-based" },
  { value: "Service-based", label: "Service-based" },
  { value: "Hybrid", label: "Hybrid" },
];

interface IntakeScreenProps {
  data: IntakeData;
  onChange: (data: IntakeData) => void;
  onContinue: () => void;
}

export function IntakeScreen({ data, onChange, onContinue }: IntakeScreenProps) {
  const isValid = data.offer.trim().length > 0 && data.sellingTo !== null && data.businessType !== null;

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden" style={{ border: "1px solid #E8E2D9" }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#F97316", opacity: 0.5 }} />

      <h2 className="text-2xl font-black mb-2" style={{ color: "#0a0a0a" }}>Tell us about your business</h2>
      <p className="text-sm text-gray-500 mb-8">
        Three quick questions, then we&apos;ll build your target customer profiles.
      </p>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Core Offer</label>
          <Textarea
            rows={4}
            placeholder="Describe what your business sells and who it's for."
            value={data.offer}
            onChange={(e) => onChange({ ...data, offer: e.target.value })}
            className="focus-visible:ring-[#F97316]"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Selling To</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SELLING_TO_OPTIONS.map((opt) => {
              const active = data.sellingTo === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ ...data, sellingTo: opt.value })}
                  className="rounded-xl p-4 text-left transition-all"
                  style={
                    active
                      ? { backgroundColor: "#FEF3EC", borderColor: "#F97316", border: "1.5px solid #F97316" }
                      : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9" }
                  }
                >
                  <p className="font-bold text-sm" style={{ color: active ? "#F97316" : "#0a0a0a" }}>{opt.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{opt.hint}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Business Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {BUSINESS_TYPE_OPTIONS.map((opt) => {
              const active = data.businessType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ ...data, businessType: opt.value })}
                  className="rounded-xl p-4 text-center text-sm font-bold transition-all"
                  style={
                    active
                      ? { backgroundColor: "#FEF3EC", borderColor: "#F97316", border: "1.5px solid #F97316", color: "#F97316" }
                      : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!isValid}
        className={`w-full mt-10 py-5 rounded-xl font-bold text-lg uppercase tracking-widest transition-all ${
          isValid ? "text-white hover:opacity-90 active:scale-[0.99] shadow-lg" : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
        }`}
        style={isValid ? { backgroundColor: "#F97316" } : undefined}
      >
        Continue
      </button>
    </div>
  );
}
