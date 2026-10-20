import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A short "free tool" pointer for the end of a post or guide: names one tool, says what it does,
// and links to it. Plain presentational markup, safe from Server and Client components.
export default function ToolCallout({ href, name, blurb, cta = "Try it free" }: { href: string; name: string; blurb: string; cta?: string }) {
  return (
    <aside aria-label={`Free tool: ${name}`} className="mt-8 rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2D9", borderLeft: "4px solid #F5B731" }}>
      <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#A14A08" }}>Free tool</p>
      <h3 className="mb-2 text-lg font-black" style={{ color: "#0a0a0a" }}>{name}</h3>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: "#52525B" }}>{blurb}</p>
      <Link href={href} className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold underline-offset-4 hover:underline" style={{ color: "#A14A08" }}>
        {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
