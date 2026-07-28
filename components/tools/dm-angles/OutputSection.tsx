"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DMCard, type DMAngle } from "@/components/tools/dm-angles/DMCard";
import { Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface OutputSectionProps {
  angles: DMAngle[];
  onRegenerate: (id: string, style?: string) => void;
  onRegenerateAll: (style: string) => void;
  regeneratingId: string | null;
  isRegeneratingAll: boolean;
}

export function OutputSection({ angles, onRegenerate, onRegenerateAll, regeneratingId, isRegeneratingAll }: OutputSectionProps) {
  const handleCopyAll = async () => {
    try {
      const allMessages = angles.map((a) => `--- ${a.label} ---\n${a.message}`).join("\n\n");
      await navigator.clipboard.writeText(allMessages);
      toast.success("All 5 DM angles copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };

  if (angles.length === 0) return null;

  return (
    <section className="w-full max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black">Your DM Angles</h2>
        <p className="text-muted-foreground">5 psychology-aligned messages ready to use</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="action" size="sm" onClick={handleCopyAll} disabled={isRegeneratingAll}>
          <Copy className="h-3.5 w-3.5 mr-1.5" />
          Copy All
        </Button>
        <Button variant="action" size="sm" onClick={() => onRegenerateAll("shorter")} disabled={isRegeneratingAll}>
          Shorter
        </Button>
        <Button variant="action" size="sm" onClick={() => onRegenerateAll("more direct")} disabled={isRegeneratingAll}>
          More Direct
        </Button>
        <Button variant="action" size="sm" onClick={() => onRegenerateAll("more friendly")} disabled={isRegeneratingAll}>
          More Friendly
        </Button>
      </div>

      <div className="space-y-4">
        {angles.map((angle, index) => (
          <DMCard
            key={angle.id}
            angle={angle}
            index={index}
            onRegenerate={onRegenerate}
            isRegenerating={regeneratingId === angle.id || isRegeneratingAll}
          />
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl text-center space-y-4 bg-secondary/20" style={{ border: "1px solid #E8E2D9" }}>
        <div className="flex items-center justify-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold">Want More?</span>
        </div>
        <p className="text-foreground text-lg">Want us to automate hyper-personalized DMs for your entire pipeline?</p>
        <Button asChild variant="hero" size="lg" className="rounded-full">
          <Link href="/founder-meeting">Book Strategy Call</Link>
        </Button>
      </div>
    </section>
  );
}
