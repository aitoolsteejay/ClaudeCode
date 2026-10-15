"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

// Accents that read under 4.5:1 on the #0a0a0a header, mapped to a lighter tint of the same hue for the label text.
const ON_DARK_TEXT: Record<string, string> = { "#0077B5": "#38BDF8" };

export default function CopyBlock({ text, accent = "#0a0a0a", label = "Copy into Claude", successMessage = "Prompt copied to clipboard" }: { text: string; accent?: string; label?: string; successMessage?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(successMessage);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid #E8E2D9", backgroundColor: "#0a0a0a" }}>
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: ON_DARK_TEXT[accent.toUpperCase()] ?? accent }}>{label}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
          aria-label="Copy prompt"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" style={{ color: accent }} />
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
      <pre className="px-4 py-4 text-[13px] leading-relaxed overflow-x-auto whitespace-pre-wrap" style={{ color: "#e5e5e5", fontFamily: "var(--font-mono, ui-monospace, monospace)" }}>
        {text}
      </pre>
    </div>
  );
}
