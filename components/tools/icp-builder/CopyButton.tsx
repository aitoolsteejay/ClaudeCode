"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let succeeded = false;
    try {
      await navigator.clipboard.writeText(text);
      succeeded = true;
    } catch {
      // Clipboard API blocked (insecure context, permissions policy, etc.)
      // Fall back to the classic hidden-textarea + execCommand trick.
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        succeeded = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch {
        succeeded = false;
      }
    }

    if (succeeded) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-gray-700 transition-colors ${className}`}
      aria-label={label}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          {label}
        </>
      )}
    </button>
  );
}
