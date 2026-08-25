"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Trash2, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "./MultiSelect";
import { callGemini, describeGeminiError, parseJsonArray } from "./lib/gemini";
import { buildD2cPolishPrompt } from "./lib/prompts";
import { sanitize } from "./lib/sanitize";
import { ROLES, SIZES, INDUSTRIES, COUNTRIES } from "./constants";
import type { IcpInput, SellingTo, BusinessType } from "./types";

const D2C_POLISH_DEBOUNCE_MS = 900;

interface IcpCardProps {
  icp: IcpInput;
  index: number;
  isOpen: boolean;
  onToggleOpen: () => void;
  onChange: (icp: IcpInput) => void;
  onRemove: () => void;
  canRemove: boolean;
  sellingTo: SellingTo;
  offer: string;
  businessType: BusinessType | null;
}

export function IcpCard({ icp, index, isOpen, onToggleOpen, onChange, onRemove, canRemove, sellingTo, offer, businessType }: IcpCardProps) {
  const [polishing, setPolishing] = useState(false);
  const [polishError, setPolishError] = useState<string | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const icpRef = useRef(icp);

  useEffect(() => {
    icpRef.current = icp;
  }, [icp]);

  // D2C AI-polish: debounce 900ms after the description stops changing, only
  // fire if the text actually changed since the last run.
  useEffect(() => {
    if (icp.icpType !== "D2C") return;
    if (!icp.d2cDescription.trim()) return;
    if (icp.d2cDescription === icp.d2cOptionsKey) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      setPolishing(true);
      setPolishError(null);
      const description = icp.d2cDescription;
      try {
        const raw = await callGemini(buildD2cPolishPrompt(description, offer, sellingTo, businessType));
        const parsed = parseJsonArray<string>(raw);
        const options = sanitize(parsed).slice(0, 3);
        onChange({ ...icpRef.current, d2cDescription: description, d2cOptions: options, d2cOptionsKey: description, d2cSelectedIdx: null });
      } catch (err) {
        console.error("D2C polish failed:", err);
        setPolishError(describeGeminiError(err));
        const fallback = sanitize(description);
        onChange({
          ...icpRef.current,
          d2cDescription: description,
          d2cOptions: [fallback, fallback, fallback],
          d2cOptionsKey: description,
          d2cSelectedIdx: null,
        });
      } finally {
        setPolishing(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, D2C_POLISH_DEBOUNCE_MS);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icp.d2cDescription]);

  const showsIndiaCities = icp.geography.includes("India");
  const badge =
    icp.icpType === "D2C"
      ? { label: "D2C", bg: "rgba(16,185,129,0.12)", color: "#059669" }
      : icp.icpType === "B2B"
        ? { label: "B2B", bg: "rgba(59,130,246,0.12)", color: "#2563eb" }
        : null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E2D9" }}>
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer"
        onClick={onToggleOpen}
      >
        <div className="flex items-center gap-3">
          <span className="font-black text-sm" style={{ color: "#F97316" }}>ICP {index + 1}</span>
          {badge && (
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: badge.bg, color: badge.color }}
            >
              {badge.label}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {canRemove && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label={`Remove ICP ${index + 1}`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-6 space-y-6" style={{ borderTop: "1px solid #F0EDE7" }}>
          {sellingTo === "Both" && (
            <div className="pt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onChange({ ...icp, icpType: "B2B" })}
                className="rounded-xl p-4 text-center text-sm font-bold transition-all"
                style={
                  icp.icpType === "B2B"
                    ? { backgroundColor: "rgba(59,130,246,0.08)", border: "1.5px solid #3b82f6", color: "#2563eb" }
                    : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }
                }
              >
                Business (B2B)
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...icp, icpType: "D2C" })}
                className="rounded-xl p-4 text-center text-sm font-bold transition-all"
                style={
                  icp.icpType === "D2C"
                    ? { backgroundColor: "rgba(16,185,129,0.08)", border: "1.5px solid #10b981", color: "#059669" }
                    : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }
                }
              >
                Individual Consumer (D2C)
              </button>
            </div>
          )}

          {icp.icpType === "B2B" && (
            <div className={`space-y-6 ${sellingTo === "Both" ? "" : "pt-6"}`}>
              <MultiSelect
                label="Industries"
                options={[...INDUSTRIES, "Other"]}
                selected={icp.industries}
                onChange={(v) => onChange({ ...icp, industries: v })}
                max={3}
                searchable
              />
              <MultiSelect
                label="Target Geography"
                options={[...COUNTRIES, "Other"]}
                selected={icp.geography}
                onChange={(v) => onChange({ ...icp, geography: v })}
                searchable
              />
              {showsIndiaCities && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Cities in India</label>
                  <input
                    type="text"
                    value={icp.geographyCities}
                    onChange={(e) => onChange({ ...icp, geographyCities: e.target.value })}
                    placeholder="e.g. Mumbai, Bangalore, Delhi"
                    className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ border: "1px solid #E8E2D9" }}
                  />
                </div>
              )}
              <MultiSelect
                label="Roles"
                options={ROLES}
                selected={icp.roles}
                onChange={(v) => onChange({ ...icp, roles: v })}
              />
              <MultiSelect
                label="Company Size"
                options={[...SIZES, "Other"]}
                selected={icp.sizes}
                onChange={(v) => onChange({ ...icp, sizes: v })}
              />
            </div>
          )}

          {icp.icpType === "D2C" && (
            <div className={`space-y-6 ${sellingTo === "Both" ? "" : "pt-6"}`}>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
                  Describe This Customer, In Your Own Words
                </label>
                <Textarea
                  rows={3}
                  placeholder="e.g. Young professionals who just moved to the city and want their first apartment to feel like home without spending a fortune."
                  value={icp.d2cDescription}
                  onChange={(e) =>
                    // Invalidate the previous AI-polished selection the
                    // instant the text changes, not only once the debounced
                    // re-polish finishes ~900ms+ later. Otherwise retyping
                    // and hitting "Generate" inside that window builds the
                    // ICP off the stale, already-superseded option text
                    // while validation still sees a non-null selection.
                    onChange({ ...icp, d2cDescription: e.target.value, d2cSelectedIdx: null })
                  }
                  className="focus-visible:ring-[#10b981]"
                />
                {polishing && (
                  <p className="flex items-center gap-2 text-xs text-gray-500">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Writing 3 versions of this customer...
                  </p>
                )}
                {polishError && !polishing && (
                  <p className="text-xs" style={{ color: "#ef4444" }}>{polishError} (using your original text for now)</p>
                )}
              </div>

              {icp.d2cOptions.length > 0 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
                    Pick the version that fits best (you can edit it first)
                  </label>
                  {icp.d2cOptions.map((option, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-3 rounded-xl p-4 cursor-pointer transition-colors"
                      style={
                        icp.d2cSelectedIdx === i
                          ? { backgroundColor: "rgba(16,185,129,0.06)", border: "1.5px solid #10b981" }
                          : { backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9" }
                      }
                    >
                      <input
                        type="radio"
                        name={`d2c-option-${icp.id}`}
                        checked={icp.d2cSelectedIdx === i}
                        onChange={() => onChange({ ...icp, d2cSelectedIdx: i })}
                        className="mt-1.5 flex-shrink-0"
                      />
                      <textarea
                        value={option}
                        onChange={(e) => {
                          const updated = [...icp.d2cOptions];
                          updated[i] = e.target.value;
                          onChange({ ...icp, d2cOptions: updated });
                        }}
                        rows={2}
                        className="flex-1 bg-transparent text-sm outline-none resize-none text-gray-800"
                      />
                    </label>
                  ))}
                  {icp.d2cSelectedIdx === null && (
                    <p className="text-xs" style={{ color: "#ef4444" }}>Select one of the 3 versions above.</p>
                  )}
                </div>
              )}

              <MultiSelect
                label="Target Geography"
                options={[...COUNTRIES, "Other"]}
                selected={icp.geography}
                onChange={(v) => onChange({ ...icp, geography: v })}
                searchable
              />
              {showsIndiaCities && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Cities in India</label>
                  <input
                    type="text"
                    value={icp.geographyCities}
                    onChange={(e) => onChange({ ...icp, geographyCities: e.target.value })}
                    placeholder="e.g. Mumbai, Bangalore, Delhi"
                    className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ border: "1px solid #E8E2D9" }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
