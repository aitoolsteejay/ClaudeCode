"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RELATED_TOOLS, TOOLS_REGISTRY } from "@/lib/tools-registry";

interface RelatedToolsProps {
  currentSlug: string;
}

export function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const relatedSlugs = RELATED_TOOLS[currentSlug] ?? [];
  const tools = relatedSlugs.map((slug) => TOOLS_REGISTRY[slug]).filter(Boolean);

  if (tools.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-secondary/20" style={{ borderTop: "1px solid #E8E2D9" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">Try this next</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="group flex flex-col justify-between p-6 rounded-2xl border bg-white transition-all duration-200 hover:shadow-md"
              style={{ borderColor: "#E8E2D9" }}
            >
              <div>
                <h3 className="text-base font-black mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.tagline}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#F5B731" }}>
                Try it free
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
