import Link from "next/link";
import { CONSULTATION, type PathItem } from "@/lib/internal-paths";
import { textTone } from "@/lib/colors";

// One row of the deliberate internal-link path (see lib/internal-paths.ts):
// where to look next, ending in the consultation page. Plain presentational
// markup, safe from Server and Client components alike.
export default function RelatedPath({
  heading,
  intro,
  items,
  accent = "#0a0a0a",
  cta = true,
}: {
  heading: string;
  intro?: string;
  items: PathItem[];
  accent?: string;
  // false on pages that already end in their own consultation call to action.
  cta?: boolean;
}) {
  if (!items?.length) return null;

  return (
    <section aria-label={heading} className="px-4 py-16 border-t" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 leading-tight" style={{ color: "#0a0a0a" }}>
          {heading}
        </h2>
        {intro && (
          <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>
            {intro}
          </p>
        )}
        <ul className={`grid gap-4 ${intro ? "" : "mt-8"} sm:grid-cols-2 ${items.length >= 3 ? "lg:grid-cols-3" : ""}`}>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "#E8E2D9", backgroundColor: "#FCFBF8" }}
              >
                <span className="mb-2 text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: textTone(accent) }}>
                  {item.kind}
                </span>
                <span className="mb-2 text-base font-bold leading-snug group-hover:underline" style={{ color: "#0a0a0a" }}>
                  {item.label}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                  {item.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {cta && (
          <div className="mt-8">
            <Link href={CONSULTATION.href} className="btn-dark inline-flex items-center gap-2 px-6 py-3 text-sm font-bold">
              {CONSULTATION.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
