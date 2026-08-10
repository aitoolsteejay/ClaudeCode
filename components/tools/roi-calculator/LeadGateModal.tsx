"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import LeadGate, { LeadData } from "@/components/tools/shared/LeadGate";

interface LeadGateModalProps {
  onComplete: (data: LeadData) => void;
  onClose: () => void;
}

export function LeadGateModal({ onComplete, onClose }: LeadGateModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <LeadGate
          source="roi_calculator"
          heading="One Quick Step"
          description="Enter your details to export your ROI results as a PDF."
          onComplete={onComplete}
        />
      </div>
    </div>
  );
}
