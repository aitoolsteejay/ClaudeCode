"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { LandingPage } from "@/components/tools/dm-angles/LandingPage";
import { InputPanel } from "@/components/tools/dm-angles/InputPanel";
import { OutputSection } from "@/components/tools/dm-angles/OutputSection";
import type { DMAngle } from "@/components/tools/dm-angles/DMCard";
import LeadGate, { LeadData } from "@/components/tools/shared/LeadGate";
import { toast } from "sonner";

export default function DmAngleGeneratorClient() {
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [angles, setAngles] = useState<DMAngle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [regeneratingId, setRegeneratingId] = useState<string | null>(null);
  const [isRegeneratingAll, setIsRegeneratingAll] = useState(false);
  const toolSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTool = () => {
    toolSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLeadComplete = (data: LeadData) => {
    setLeadData(data);
  };

  const generateAngles = async (data: { industry: string; icpRole: string; offer: string }) => {
    if (!leadData) return;

    setIsLoading(true);
    setAngles([]);

    try {
      const response = await fetch("/api/tools/dm-angles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          senderName: leadData.name,
          senderCompany: leadData.companyName,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to generate DM angles");

      setAngles(result.angles);
      toast.success("5 psychology-aligned messages ready for you");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error(error instanceof Error ? error.message : "Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateOne = async (angle: DMAngle, style?: string): Promise<DMAngle> => {
    const response = await fetch("/api/tools/dm-angles/regenerate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ angle, style: style || "variation" }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Failed to regenerate");
    return { ...result.angle, id: angle.id };
  };

  const handleRegenerate = async (id: string, style?: string) => {
    const angle = angles.find((a) => a.id === id);
    if (!angle) return;

    setRegeneratingId(id);
    try {
      const updated = await regenerateOne(angle, style);
      setAngles((prev) => prev.map((a) => (a.id === id ? updated : a)));
      toast.success(style ? `Made it ${style}` : "New variation created");
    } catch {
      toast.error("Please try again");
    } finally {
      setRegeneratingId(null);
    }
  };

  const handleRegenerateAll = async (style: string) => {
    setIsRegeneratingAll(true);
    try {
      const updated = await Promise.all(angles.map((angle) => regenerateOne(angle, style)));
      setAngles(updated);
      toast.success(`All angles made ${style}`);
    } catch {
      toast.error("Please try again");
    } finally {
      setIsRegeneratingAll(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb, matching the site's sub-page convention */}
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#8C8279" }}>
          <Link href="/resources/tools" className="link-subtle">Tools</Link>
          <span style={{ color: "#E8E2D9" }}>/</span>
          <span style={{ color: "#3D3D3D" }}>DM Angle Generator</span>
        </div>
      </div>

      {!leadData && (
        <div className="flex flex-col">
          <LandingPage onGetStarted={scrollToTool} />
          <div ref={toolSectionRef} className="min-h-screen flex items-center justify-center py-20 bg-white">
            <div className="w-full">
              <LeadGate
                source="dm_angle_generator"
                heading="Tell Us About You"
                description="Enter your details to unlock your custom DM angles."
                onComplete={handleLeadComplete}
              />
            </div>
          </div>
        </div>
      )}

      {leadData && (
        <div className="min-h-screen py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">Generate Your Angles</h2>
            <InputPanel onGenerate={generateAngles} isLoading={isLoading} />
          </div>

          {angles.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <OutputSection
                angles={angles}
                onRegenerate={handleRegenerate}
                onRegenerateAll={handleRegenerateAll}
                regeneratingId={regeneratingId}
                isRegeneratingAll={isRegeneratingAll}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
