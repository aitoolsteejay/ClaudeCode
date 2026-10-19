"use client";

/** Orange hand drawn underline and pill badge, shared by both ROI calculators. */
export function HandUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 7 Q75 2 150 6 Q225 10 298 5" stroke="#EA580C" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
      style={{ background: "rgba(234,88,12,0.07)", borderColor: "rgba(234,88,12,0.35)" }}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: "#EA580C" }} aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#A14A08" }}>
        {children}
      </span>
    </div>
  );
}
