"use client";

import { useState } from "react";
import { Loader2, Check, X, Handshake, PartyPopper } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { ScreenTransition } from "./ScreenTransition";
import { callGemini, describeGeminiError, withTimeout, parseJsonArray } from "./lib/gemini";
import { buildValuePropPrompt } from "./lib/prompts";
import { sanitize } from "./lib/sanitize";
import { resolveOffer, type GeneratedIcp, type ValuePropResult, type IntakeData } from "./types";

const GENERATION_TIMEOUT_MS = 60000;

interface ValuePropScreenProps {
  intake: IntakeData;
  icps: GeneratedIcp[];
  results: ValuePropResult[] | null;
  onResultsChange: (results: ValuePropResult[] | null) => void;
  onFinish: () => void;
}

function AudienceBadge({ type }: { type: "B2B" | "D2C" }) {
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${type === "B2B" ? "bg-[#EA580C]/15 text-[#9A3412]" : "bg-[#B8860B]/15 text-[#7A5200]"}`}>
      {type}
    </span>
  );
}

function CoreAngleCard({ coreAngle }: { coreAngle: string }) {
  const [angleName, ...rest] = coreAngle.split(":");
  const explanation = rest.join(":").trim();
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.35)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#A14A08" }}>Core Angle</p>
      <p className="text-xl font-black mb-1" style={{ color: "#0A0A0A" }}>{angleName.trim()}</p>
      {explanation && <p className="text-sm" style={{ color: "#52525B" }}>{explanation}</p>}
    </div>
  );
}

function ValuePropTabContent({ result }: { result: ValuePropResult }) {
  const isPartner = result.isPartnerEntry;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid #E8E2D9" }}>
        {isPartner && <Handshake className="w-6 h-6 mx-auto mb-3" style={{ color: "#F97316" }} />}
        <p className="text-2xl md:text-3xl font-black leading-tight mb-3" style={{ color: "#0a0a0a" }}>{result.corePromise}</p>
        <p className="text-sm font-semibold text-gray-500">{result.icpName}</p>
      </div>

      {isPartner ? (
        <>
          <div className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#71675E" }}>What&apos;s In It For Them</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(result.whatsInItForThem || []).map((item, i) => (
                <div key={i} className="rounded-xl p-4 text-sm text-gray-700" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#71675E" }}>Ideal Partner Profile</h3>
            <p className="text-sm leading-relaxed text-gray-700">{result.idealPartnerProfile}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#71675E" }}>How the Partnership Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(result.partnershipSteps || []).map((step, i) => (
                <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                  <p className="text-xs font-black text-gray-400 mb-2">STEP {i + 1}</p>
                  <p className="font-bold text-sm mb-2" style={{ color: "#0a0a0a" }}>{step.step}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#71675E" }}>Why Partner With Us</h3>
            <ul className="space-y-2.5">
              {(result.whyPartnerWithUs || []).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F97316" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#ef4444" }}>Before</h3>
              <ul className="space-y-3">
                {(result.beforeState || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#ef4444" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(184,134,11,0.05)", border: "1px solid rgba(184,134,11,0.2)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#7A5200" }}>After</h3>
              <ul className="space-y-3">
                {(result.afterState || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#7A5200" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#71675E" }}>3-Step System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(result.threeStepSystem || []).map((step, i) => (
                <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                  <p className="text-xs font-black text-gray-400 mb-2">STEP {i + 1}</p>
                  <p className="font-bold text-sm mb-2" style={{ color: "#0a0a0a" }}>{step.step}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #E8E2D9" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#71675E" }}>Why Others Fail</h3>
              <ul className="space-y-2.5">
                {(result.whyOthersFail || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#71675E" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #E8E2D9" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9A3412" }}>Why You Win</h3>
              <ul className="space-y-2.5">
                {(result.whyYouWin || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F97316" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      <CoreAngleCard coreAngle={result.coreAngle} />

      <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6" style={{ border: "1px solid #E8E2D9" }}>
        <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#71675E" }}>
          {isPartner ? "How to Reach Out" : "Strategy Behind Your Content Creation"}
        </h3>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {isPartner ? "How to Approach Them" : "Content Strategy"}
            </p>
            <CopyButton text={isPartner ? result.howToApproachThem || "" : result.contentStrategy || ""} />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{isPartner ? result.howToApproachThem : result.contentStrategy}</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Short Pitch</p>
            <CopyButton text={result.shortPitch} />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{result.shortPitch}</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Call to Action</p>
            <CopyButton text={result.cta} />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{result.cta}</p>
        </div>
      </div>

      <div className="rounded-2xl p-6 sm:p-8 text-center" style={{ backgroundColor: "#FEF3EC", border: "1px solid rgba(249,115,22,0.3)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9A3412" }}>Core Positioning Statement</p>
        <p className="text-lg font-bold leading-relaxed" style={{ color: "#0a0a0a" }}>&quot;{result.positioning}&quot;</p>
      </div>
    </div>
  );
}

export function ValuePropScreen({ intake, icps, results, onResultsChange, onFinish }: ValuePropScreenProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (icps.length === 0) {
      setError("ICP data is missing. Please complete Step 3 first.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const prompt = buildValuePropPrompt(resolveOffer(intake), intake.sellingTo, intake.businessType, icps);
      const raw = await withTimeout(callGemini(prompt), GENERATION_TIMEOUT_MS);
      let parsed: ValuePropResult[];
      try {
        parsed = parseJsonArray<ValuePropResult>(raw);
      } catch {
        setError("The AI response could not be read. Please try again.");
        setLoading(false);
        return;
      }
      const hasPartners = icps.some((icp) => icp.channelPartners && icp.channelPartners.length > 0);
      const sanitized = sanitize(parsed).map((r, i) => {
        const isPartnerEntry = hasPartners && i === icps.length;
        return { ...r, isPartnerEntry };
      });
      onResultsChange(sanitized);
      setActiveTab(0);
    } catch (err) {
      console.error("Value prop generation failed:", err);
      setError(describeGeminiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black mb-2" style={{ color: "#0a0a0a" }}>Value Proposition</h2>
        <p className="text-sm text-gray-500">
          A structured pitch for each customer type, and for your channel partners if any were found.
        </p>
      </div>

      {error && <p className="text-sm font-medium text-center" style={{ color: "#ef4444" }}>{error}</p>}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full py-5 rounded-xl font-bold text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
          loading ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50" : "text-[#0A0A0A] hover:opacity-90 active:scale-[0.99] shadow-lg"
        }`}
        style={loading ? undefined : { backgroundColor: "#F97316" }}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating your value propositions...
          </>
        ) : results ? (
          "Regenerate"
        ) : (
          "Generate Value Proposition"
        )}
      </button>

      {results && (
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all"
                style={
                  activeTab === i
                    ? { backgroundColor: "#F5B731", color: "#0a0a0a" }
                    : { backgroundColor: "#ffffff", color: "#52525B", border: "1px solid #E8E2D9" }
                }
              >
                {r.isPartnerEntry ? <Handshake className="w-3.5 h-3.5" /> : null}
                {r.isPartnerEntry ? "Channel Partners" : `ICP ${i + 1}`}
                {!r.isPartnerEntry && icps[i] && <AudienceBadge type={icps[i].audienceType} />}
              </button>
            ))}
          </div>

          <ScreenTransition screenKey={String(activeTab)}>
            <ValuePropTabContent result={results[activeTab]} />
          </ScreenTransition>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
              style={{ backgroundColor: "#ffffff", border: "1.5px solid #E8E2D9", color: "#0a0a0a" }}
            >
              Regenerate
            </button>
            <button
              onClick={onFinish}
              className="flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}
            >
              <PartyPopper className="w-4 h-4" />
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
