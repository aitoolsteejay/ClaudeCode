"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface InputPanelProps {
  onGenerate: (data: { industry: string; icpRole: string; offer: string }) => void;
  isLoading: boolean;
}

export function InputPanel({ onGenerate, isLoading }: InputPanelProps) {
  const [industry, setIndustry] = useState("");
  const [icpRole, setIcpRole] = useState("");
  const [offer, setOffer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (industry && icpRole && offer) {
      onGenerate({ industry, icpRole, offer });
    }
  };

  const handleClear = () => {
    setIndustry("");
    setIcpRole("");
    setOffer("");
  };

  const isValid = industry.trim() && icpRole.trim() && offer.trim();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl bg-card p-8" style={{ border: "1px solid #E8E2D9" }}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              Industry
            </label>
            <Input
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g., SaaS, E-commerce, Real Estate, Healthcare..."
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="icpRole" className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              ICP Role
            </label>
            <Input
              id="icpRole"
              value={icpRole}
              onChange={(e) => setIcpRole(e.target.value)}
              placeholder="e.g., VP of Sales, Founder, Marketing Director..."
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="offer" className="block text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              Your Offer
            </label>
            <Input
              id="offer"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="e.g., Automate outbound sales with AI that books 30+ meetings/month..."
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" variant="hero" size="lg" className="flex-1 rounded-full" disabled={!isValid || isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing psychology drivers…
                </>
              ) : (
                "Generate DM Angles"
              )}
            </Button>
            <Button type="button" variant="outline" size="lg" className="rounded-full" onClick={handleClear} disabled={isLoading}>
              Clear Inputs
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
