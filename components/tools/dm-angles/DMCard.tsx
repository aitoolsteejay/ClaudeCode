"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, ChevronDown, ChevronUp, Check } from "lucide-react";
import { toast } from "sonner";

export interface DMAngle {
  id: string;
  label: string;
  message: string;
  reasoning: string;
}

const ANGLE_COLORS: Record<string, string> = {
  "Emotional Angle": "#F5B731",
  "Authority Angle": "#3B82F6",
  "Social Proof Angle": "#14B8A6",
  "Curiosity Angle": "#7C3AED",
  "Value-First Angle": "#10B981",
};

const DEFAULT_COLOR = "#F5B731";

const STYLE_OPTIONS = [
  { key: "shorter", label: "Shorter" },
  { key: "more formal", label: "More Formal" },
  { key: "more direct", label: "More Direct" },
];

interface DMCardProps {
  angle: DMAngle;
  index: number;
  onRegenerate: (id: string, style?: string) => void;
  isRegenerating: boolean;
}

export function DMCard({ angle, index, onRegenerate, isRegenerating }: DMCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copied, setCopied] = useState(false);
  const color = ANGLE_COLORS[angle.label] || DEFAULT_COLOR;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(angle.message);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div
      className="rounded-2xl bg-card overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{ border: "1px solid #E8E2D9", borderLeft: `3px solid ${color}`, animationDelay: `${index * 80}ms` }}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-secondary/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full" style={{ backgroundColor: color, color: "#000" }}>
          {angle.label}
        </span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleCopy(); }} className="h-8 w-8">
            {copied ? <Check className="h-4 w-4" style={{ color }} /> : <Copy className="h-4 w-4" />}
          </Button>
          {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          <div className="p-4 rounded-xl bg-secondary" style={{ border: "1px solid #E8E2D9" }}>
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">{angle.message}</p>
          </div>

          <p className="text-sm text-muted-foreground italic">
            <span className="font-medium not-italic">Why this works:</span> {angle.reasoning}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Button variant="action" size="sm" onClick={handleCopy} disabled={isRegenerating}>
              <Copy className="h-3.5 w-3.5 mr-1.5" />
              Copy DM
            </Button>
            <Button variant="action" size="sm" onClick={() => onRegenerate(angle.id)} disabled={isRegenerating}>
              <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${isRegenerating ? "animate-spin" : ""}`} />
              Regenerate
            </Button>
            {STYLE_OPTIONS.map((opt) => (
              <Button key={opt.key} variant="action" size="sm" onClick={() => onRegenerate(angle.id, opt.key)} disabled={isRegenerating}>
                {opt.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
