"use client";

import { useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { IcpCard } from "./IcpCard";
import { IcpResultsTabs } from "./IcpResultsTabs";
import { callGemini, describeGeminiError, withTimeout, parseJsonArray } from "./lib/gemini";
import { buildIcpPrompt } from "./lib/prompts";
import { sanitize } from "./lib/sanitize";
import { DEFAULT_ICP_COUNT, MAX_ICP_COUNT } from "./constants";
import type { IcpInput, GeneratedIcp, IntakeData } from "./types";

const GENERATION_TIMEOUT_MS = 60000;

function newIcp(intakeType: "B2B" | "D2C" | null): IcpInput {
  return {
    id: Math.random().toString(36).slice(2),
    icpType: intakeType,
    roles: [],
    sizes: [],
    industries: [],
    geography: [],
    geographyCities: "",
    d2cDescription: "",
    d2cOptions: [],
    d2cOptionsKey: "",
    d2cSelectedIdx: null,
  };
}

interface IcpBuilderScreenProps {
  intake: IntakeData;
  icps: IcpInput[];
  onIcpsChange: (icps: IcpInput[]) => void;
  results: GeneratedIcp[] | null;
  onResultsChange: (results: GeneratedIcp[] | null) => void;
  onNextStep: () => void;
}

export function IcpBuilderScreen({ intake, icps, onIcpsChange, results, onResultsChange, onNextStep }: IcpBuilderScreenProps) {
  const [openId, setOpenId] = useState<string | null>(icps[0]?.id ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const forcedType: "B2B" | "D2C" | null = intake.sellingTo === "D2C" ? "D2C" : intake.sellingTo === "B2B" ? "B2B" : null;

  const addIcp = () => {
    if (icps.length >= MAX_ICP_COUNT) return;
    const icp = newIcp(forcedType);
    onIcpsChange([...icps, icp]);
    setOpenId(icp.id);
  };

  const removeIcp = (id: string) => {
    if (icps.length <= DEFAULT_ICP_COUNT) return;
    onIcpsChange(icps.filter((i) => i.id !== id));
  };

  const updateIcp = (id: string, updated: IcpInput) => {
    onIcpsChange(icps.map((i) => (i.id === id ? updated : i)));
  };

  const validate = (): string | null => {
    if (!intake.offer.trim()) return "A core offer is required.";
    for (let i = 0; i < icps.length; i++) {
      const icp = icps[i];
      if (intake.sellingTo === "Both" && !icp.icpType) {
        return `ICP ${i + 1} needs a type (Business or Individual Consumer) selected.`;
      }
      if (icp.icpType === "B2B") {
        if (icp.roles.length === 0) return `ICP ${i + 1} needs at least one role selected.`;
        if (icp.sizes.length === 0) return `ICP ${i + 1} needs at least one company size selected.`;
        if (icp.industries.length === 0) return `ICP ${i + 1} needs at least one industry selected.`;
      }
      if (icp.icpType === "D2C" && icp.d2cSelectedIdx === null) {
        return `ICP ${i + 1} needs a customer description selected.`;
      }
    }
    return null;
  };

  const handleGenerate = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const prompt = buildIcpPrompt(intake.offer, intake.sellingTo, intake.businessType, icps);
      const raw = await withTimeout(callGemini(prompt), GENERATION_TIMEOUT_MS);
      let parsed: GeneratedIcp[];
      try {
        parsed = parseJsonArray<GeneratedIcp>(raw);
      } catch {
        setError("The AI response could not be read. Please try again.");
        setLoading(false);
        return;
      }
      const sanitized = sanitize(parsed).map((icp, i) => {
        const expectedType = icps[i]?.icpType;
        const audienceType = icp.audienceType === "B2B" || icp.audienceType === "D2C" ? icp.audienceType : expectedType || "B2B";
        return { ...icp, audienceType, channelPartners: icp.channelPartners || [] };
      });
      onResultsChange(sanitized);
    } catch (err) {
      console.error("ICP generation failed:", err);
      setError(describeGeminiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black mb-2" style={{ color: "#0a0a0a" }}>Build your ICPs</h2>
        <p className="text-sm text-gray-500 mb-6">
          {icps.length} of {MAX_ICP_COUNT} customer profiles. {intake.sellingTo === "Both" ? "Add up to 6." : "We'll generate deep profiles for each."}
        </p>

        <div className="space-y-3">
          {icps.map((icp, i) => (
            <IcpCard
              key={icp.id}
              icp={icp}
              index={i}
              isOpen={openId === icp.id}
              onToggleOpen={() => setOpenId(openId === icp.id ? null : icp.id)}
              onChange={(updated) => updateIcp(icp.id, updated)}
              onRemove={() => removeIcp(icp.id)}
              canRemove={icps.length > DEFAULT_ICP_COUNT}
              sellingTo={intake.sellingTo || "B2B"}
              offer={intake.offer}
              businessType={intake.businessType}
            />
          ))}
        </div>

        {intake.sellingTo === "Both" && icps.length < MAX_ICP_COUNT && (
          <button
            type="button"
            onClick={addIcp}
            className="mt-4 flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-lg transition-colors"
            style={{ color: "#F97316", border: "1.5px dashed rgba(249,115,22,0.4)" }}
          >
            <Plus className="w-4 h-4" />
            Add Another ICP
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm font-medium text-center" style={{ color: "#ef4444" }}>{error}</p>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full py-5 rounded-xl font-bold text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
          loading ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50" : "text-white hover:opacity-90 active:scale-[0.99] shadow-lg"
        }`}
        style={loading ? undefined : { backgroundColor: "#F97316" }}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating your ICPs... this takes ~20 seconds
          </>
        ) : results ? (
          "Regenerate ICPs"
        ) : (
          "Generate ICP Profiles"
        )}
      </button>

      {results && (
        <div className="space-y-8">
          <IcpResultsTabs icps={results} />

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
              style={{ backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }}
            >
              Regenerate ICPs
            </button>
            <button
              onClick={onNextStep}
              className="flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-white transition-all"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
