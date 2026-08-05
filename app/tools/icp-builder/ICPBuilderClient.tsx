"use client";

import { useState } from "react";
import Link from "next/link";
import LeadGate, { LeadData } from "@/components/tools/shared/LeadGate";
import { supabase } from "@/lib/supabase";
import { Building2, Users, Radar, ShieldAlert, Calculator, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface BuyerPersona {
  title: string;
  role: string;
  whyTheyBuy: string;
}

interface ScoringRubricItem {
  criterion: string;
  points: number;
  rationale: string;
}

interface ICPProfile {
  firmographics: {
    companySize: string;
    industries: string[];
    revenueRange: string;
    geography: string;
  };
  buyerPersonas: BuyerPersona[];
  buyingTriggers: string[];
  disqualifiers: string[];
  scoringRubric: ScoringRubricItem[];
}

interface FormState {
  businessDescription: string;
  goodFitCustomers: string;
  badFitCustomers: string;
  dealSize: string;
}

const DEFAULT_FORM_STATE: FormState = {
  businessDescription: "",
  goodFitCustomers: "",
  badFitCustomers: "",
  dealSize: "",
};

type FlowStep = "lead" | "input" | "results";

export default function ICPBuilderClient() {
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [formData, setFormData] = useState<FormState>(DEFAULT_FORM_STATE);
  const [profile, setProfile] = useState<ICPProfile | null>(null);
  const [step, setStep] = useState<FlowStep>("lead");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLeadComplete = (data: LeadData) => {
    setLeadData(data);
    setStep("input");
  };

  const isFormValid =
    formData.businessDescription.trim() &&
    formData.goodFitCustomers.trim() &&
    formData.dealSize.trim();

  const handleGenerate = async () => {
    if (!isFormValid) return;
    setLoading(true);
    setError(null);
    try {
      const requestInputs = {
        businessDescription: formData.businessDescription,
        goodFitCustomers: formData.goodFitCustomers,
        badFitCustomers: formData.badFitCustomers,
        dealSize: formData.dealSize,
      };
      const res = await fetch("/api/tools/icp-builder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestInputs),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to build ICP");
      setProfile(result);
      setStep("results");

      if (leadData?.id) {
        supabase
          .from("leads")
          .update({ inputs: requestInputs, outputs: result })
          .eq("id", leadData.id)
          .then(({ error }) => {
            if (error) console.error("Supabase inputs/outputs update failed:", error);
          });
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(`Failed to build ICP: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyRubric = async () => {
    if (!profile) return;
    const text = profile.scoringRubric
      .map((r) => `${r.points >= 0 ? "+" : ""}${r.points}  ${r.criterion}  (${r.rationale})`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Scoring rubric copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-24 text-foreground relative overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Vivid background blobs, matching the homepage hero's color treatment */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-100px", left: "-140px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.26) 0%, rgba(234,88,12,0.10) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "180px", right: "-120px", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Breadcrumb, matching the site's sub-page convention */}
        <div className="flex items-center gap-2 text-xs font-semibold mb-6" style={{ color: "#8C8279" }}>
          <Link href="/resources/tools" className="link-subtle">Tools</Link>
          <span style={{ color: "#E8E2D9" }}>/</span>
          <span style={{ color: "#3D3D3D" }}>ICP Builder</span>
        </div>

        {/* Header */}
        <header className="pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(249,115,22,0.07)", borderColor: "rgba(249,115,22,0.35)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F97316" }} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F97316" }}>ICP Builder</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            <span className="relative inline-block">
              Build a Scoreable ICP
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 420 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q105 2 210 6 Q315 10 418 5" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base mb-6 max-w-xl mx-auto font-medium">
            Turn your best (and worst) customers into a written ICP, buyer personas, buying triggers, and a scoring rubric you can use to grade every inbound lead.
          </p>
        </header>

        <main>
          {/* Lead Gate */}
          {step === "lead" && (
            <LeadGate
              source="icp_builder"
              heading="Tell Us About You"
              description="Enter your details to unlock your custom ICP profile."
              onComplete={handleLeadComplete}
            />
          )}

          {/* Input Panel */}
          {step === "input" && (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden animate-in fade-in duration-500" style={{ border: "1px solid #E8E2D9" }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#F97316", opacity: 0.5 }}></div>

              <div className="space-y-8 mb-10">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">What does your product or service do?</label>
                  <textarea
                    className="w-full bg-white rounded-lg px-4 py-4 text-black focus:border-[#F97316] outline-none transition-colors placeholder:text-gray-400 resize-none"
                    style={{ border: "1px solid #E8E2D9" }}
                    rows={3}
                    placeholder="e.g. We help mid-market SaaS companies set up and run cold email outbound to book qualified sales meetings."
                    value={formData.businessDescription}
                    onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">List 3-5 of your best customers, and briefly why</label>
                  <textarea
                    className="w-full bg-white rounded-lg px-4 py-4 text-black focus:border-[#F97316] outline-none transition-colors placeholder:text-gray-400 resize-none"
                    style={{ border: "1px solid #E8E2D9" }}
                    rows={4}
                    placeholder="e.g. Finstack (Series A fintech, VP Sales was our champion, closed in 2 weeks because they already had 3 SDRs and needed to scale outbound fast)..."
                    value={formData.goodFitCustomers}
                    onChange={(e) => setFormData({ ...formData, goodFitCustomers: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                    Any bad-fit or churned customers? <span className="normal-case font-medium text-gray-400 tracking-normal">(optional, sharpens the output)</span>
                  </label>
                  <textarea
                    className="w-full bg-white rounded-lg px-4 py-4 text-black focus:border-[#F97316] outline-none transition-colors placeholder:text-gray-400 resize-none"
                    style={{ border: "1px solid #E8E2D9" }}
                    rows={3}
                    placeholder="e.g. A 5-person startup that churned after a month, they had no dedicated sales hire and expected us to do everything with zero involvement."
                    value={formData.badFitCustomers}
                    onChange={(e) => setFormData({ ...formData, badFitCustomers: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Typical deal size and sales cycle</label>
                  <input
                    type="text"
                    className="w-full bg-white rounded-lg px-4 py-3 text-black focus:border-[#F97316] outline-none transition-colors placeholder:text-gray-400"
                    style={{ border: "1px solid #E8E2D9" }}
                    placeholder="e.g. $2,500/mo retainer, 30-day sales cycle"
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !isFormValid}
                className={`w-full py-5 rounded-xl font-bold text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                  loading || !isFormValid
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                    : "text-white hover:opacity-90 active:scale-[0.99] shadow-lg"
                }`}
                style={loading || !isFormValid ? undefined : { backgroundColor: "#F97316" }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Building Your ICP...
                  </>
                ) : (
                  "Build My ICP"
                )}
              </button>
              {error && <p className="mt-4 text-red-500 text-center text-sm font-medium">{error}</p>}
            </div>
          )}

          {/* Results Section */}
          {step === "results" && profile && (
            <div id="results-section" className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
              {/* Firmographics */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm" style={{ borderTop: "3px solid #F97316", borderLeft: "1px solid #E8E2D9", borderRight: "1px solid #E8E2D9", borderBottom: "1px solid #E8E2D9" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
                    <Building2 className="w-4 h-4" style={{ color: "#F97316" }} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#F97316" }}>Firmographics</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Company Size</p>
                    <p className="text-gray-800 text-base font-semibold">{profile.firmographics.companySize}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Revenue Range</p>
                    <p className="text-gray-800 text-base font-semibold">{profile.firmographics.revenueRange}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Geography</p>
                    <p className="text-gray-800 text-base font-semibold">{profile.firmographics.geography}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Industries</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.firmographics.industries.map((ind, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#c2410c" }}>{ind}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyer Personas */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)" }}>
                    <Users className="w-4 h-4" style={{ color: "#3B82F6" }} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#3B82F6" }}>Buyer Personas</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {profile.buyerPersonas.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm" style={{ borderTop: "3px solid #3B82F6", border: "1px solid #E8E2D9", borderTopWidth: "3px" }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#3B82F6" }}>{p.role}</p>
                      <h4 className="text-lg font-black mb-3">{p.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.whyTheyBuy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buying Triggers & Disqualifiers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ borderTop: "3px solid #14B8A6", border: "1px solid #E8E2D9", borderTopWidth: "3px" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)" }}>
                      <Radar className="w-4 h-4" style={{ color: "#14B8A6" }} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#14B8A6" }}>Buying Triggers</h3>
                  </div>
                  <ul className="space-y-3">
                    {profile.buyingTriggers.map((t, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#14B8A6" }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ borderTop: "3px solid #ef4444", border: "1px solid #E8E2D9", borderTopWidth: "3px" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}>
                      <ShieldAlert className="w-4 h-4" style={{ color: "#ef4444" }} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#ef4444" }}>Disqualifiers</h3>
                  </div>
                  <ul className="space-y-3">
                    {profile.disqualifiers.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#ef4444" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Scoring Rubric */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm" style={{ borderTop: "3px solid #7C3AED", border: "1px solid #E8E2D9", borderTopWidth: "3px" }}>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)" }}>
                      <Calculator className="w-4 h-4" style={{ color: "#7C3AED" }} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#7C3AED" }}>Lead Scoring Rubric</h3>
                  </div>
                  <button
                    onClick={copyRubric}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
                    aria-label="Copy scoring rubric"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" style={{ color: "#7C3AED" }} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E8E2D9" }}>
                        <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-widest text-gray-400">Criterion</th>
                        <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-widest text-gray-400">Points</th>
                        <th className="pb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Why</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: "#F0EDE7" }}>
                      {profile.scoringRubric.map((r, i) => (
                        <tr key={i}>
                          <td className="py-3 pr-4 text-sm font-semibold text-gray-800 align-top">{r.criterion}</td>
                          <td className="py-3 pr-4 text-sm font-black align-top" style={{ color: r.points >= 0 ? "#16a34a" : "#ef4444" }}>
                            {r.points >= 0 ? `+${r.points}` : r.points}
                          </td>
                          <td className="py-3 text-sm text-gray-600 leading-relaxed align-top">{r.rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative group overflow-hidden bg-white rounded-2xl p-12 md:p-20 text-center shadow-sm" style={{ border: "2px solid #F97316" }}>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 relative z-10 leading-tight">
                  Want us to score your inbound leads automatically?
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto relative z-10 text-lg font-light leading-relaxed">
                  Myntmore builds the sales intelligence system that applies a rubric like this to every lead the moment they come in, no spreadsheets required.
                </p>
                <Link
                  href="/founder-meeting"
                  className="inline-block text-white font-black px-12 py-5 rounded-full text-lg uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all active:scale-[0.98] relative z-10"
                  style={{ backgroundColor: "#F97316" }}
                >
                  Book A Call
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
