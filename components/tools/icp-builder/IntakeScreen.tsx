"use client";

import { useEffect, useRef, useState } from "react";
import { Info, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { callGemini, parseJsonArray } from "./lib/gemini";
import { buildOfferPolishPrompt } from "./lib/prompts";
import { sanitize } from "./lib/sanitize";
import { resolveOffer, type IntakeData, type SellingTo, type BusinessType } from "./types";

const OFFER_POLISH_DEBOUNCE_MS = 900;

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
  const [generatingOffer, setGeneratingOffer] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Always holds the latest `data`, so the debounced callback below (which
  // can resolve several seconds after it was scheduled, via the retry
  // ladder) merges its result into whatever the user has typed/selected
  // since, instead of clobbering it with a stale closure snapshot.
  const dataRef = useRef(data);
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  // Core Offer AI-polish: debounce 900ms after the offer text stops
  // changing, only fire if the text actually changed since the last run.
  useEffect(() => {
    if (!data.offer.trim()) return;
    if (data.offer === data.offerOptionsKey) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      setGeneratingOffer(true);
      const rawText = data.offer;
      try {
        const raw = await callGemini(buildOfferPolishPrompt(rawText));
        const parsed = parseJsonArray<string>(raw);
        const options = sanitize(parsed).slice(0, 3);
        // Drop stale responses: if the user has typed more since this
        // request was fired, a newer debounce call is already handling (or
        // will handle) it -- applying this result now would clobber
        // whatever they've typed since with this older text.
        if (dataRef.current.offer !== rawText) return;
        onChange({ ...dataRef.current, offer: rawText, offerOptions: options, offerOptionsKey: rawText, selectedOfferIdx: null });
      } catch (err) {
        console.error("Offer polish failed:", err);
        if (dataRef.current.offer !== rawText) return;
        const fallback = sanitize(rawText);
        onChange({
          ...dataRef.current,
          offer: rawText,
          offerOptions: [fallback, fallback, fallback],
          offerOptionsKey: rawText,
          selectedOfferIdx: null,
        });
      } finally {
        setGeneratingOffer(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, OFFER_POLISH_DEBOUNCE_MS);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.offer]);

  const isValid = resolveOffer(data).trim().length > 0 && data.sellingTo !== null && data.businessType !== null;

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
          <p className="text-xs text-gray-500">
            Just describe it like you would to a person. We&apos;ll turn it into 3 versions you can edit and choose from below.
          </p>

          {generatingOffer && (
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Writing 3 versions of your offer&hellip;
            </p>
          )}

          {!generatingOffer && data.offerOptions.length === 0 && !data.offer.trim() && (
            <p className="text-xs text-gray-400">
              Your 3 offer options will appear here once you describe your business above.
            </p>
          )}

          {data.offerOptions.length > 0 && (
            <TooltipProvider>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
                    Choose Your Business Offering *
                  </label>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <Info className="w-3.5 h-3.5 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        This exact wording is used for your ICPs and value proposition. Edit any version below, then select the one that best represents your business.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {data.offerOptions.map((option, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 rounded-xl p-4 cursor-pointer transition-colors"
                    style={
                      data.selectedOfferIdx === i
                        ? { backgroundColor: "#FEF3EC", border: "1.5px solid #F97316" }
                        : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9" }
                    }
                  >
                    <input
                      type="radio"
                      name="offer-option"
                      checked={data.selectedOfferIdx === i}
                      onChange={() => onChange({ ...data, selectedOfferIdx: i })}
                      className="mt-1.5 flex-shrink-0"
                    />
                    <textarea
                      value={option}
                      onChange={(e) => {
                        const updated = [...data.offerOptions];
                        updated[i] = e.target.value;
                        onChange({ ...data, offerOptions: updated });
                      }}
                      rows={2}
                      className="flex-1 bg-transparent text-sm outline-none resize-none text-gray-800"
                    />
                  </label>
                ))}

                {data.selectedOfferIdx === null && (
                  <p className="text-xs" style={{ color: "#ef4444" }}>
                    Select one of the 3 versions above to use as your business offering.
                  </p>
                )}
              </div>
            </TooltipProvider>
          )}
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
