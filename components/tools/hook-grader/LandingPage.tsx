"use client";

import { ArrowRight, ClipboardPaste, Gauge, Sparkles } from "lucide-react";
import JsonLd from "@/app/components/JsonLd";
import { buildHowToSchema } from "@/lib/schema";
import { RelatedTools } from "@/components/tools/shared/RelatedTools";
import { HandUnderline, PillBadge } from "@/components/cold-email-roi/HandUnderline";

const HOWTO_SCHEMA = buildHowToSchema("How the LinkedIn Hook Grader Works", [
  { name: "Paste your hook", text: "The first two lines of your LinkedIn post, before the see more cut." },
  { name: "Get a rule-based score", text: "Six explicit checks score the hook out of 100. The same wording always gets the same score." },
  { name: "Compare three rewrites", text: "Three alternatives, each with a different angle, scored the same way, ready to copy." },
]);

const STEPS = [
  { icon: ClipboardPaste, color: "#EA580C", title: "Paste your hook", body: "Just the first two lines of your post. No profile link, no scraping." },
  { icon: Gauge, color: "#D97706", title: "Get a rule-based score", body: "Six checks, scored in code, so the same wording always gets the same number." },
  { icon: Sparkles, color: "#A14A08", title: "Compare three rewrites", body: "Each takes a different angle and gets graded by the same rules. Copy the one that sounds like you." },
];

const CHECKS = [
  ["Length", "Does it fit above the \"see more\" cut on a phone, and still say something?"],
  ["Curiosity", "Does it open a loop, a contrast or a question the reader wants answered?"],
  ["Specificity", "Are there numbers, time frames and named details, or only vague claims?"],
  ["Authority", "Does it sound like someone who did the thing, with a result attached?"],
  ["Action", "Does it speak to the reader and promise something they can use?"],
  ["No clickbait", "Is it free of hype phrases, shouting and exclamation marks?"],
];

export function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full text-foreground" style={{ backgroundColor: "#F8F6F2" }}>
      <JsonLd data={HOWTO_SCHEMA} />
      <section className="relative flex flex-col items-center overflow-hidden px-6 py-14 text-center md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-36 h-[650px] w-[650px] rounded-full blur-[55px]" style={{ background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(255,160,0,0.10) 40%, transparent 68%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-24 h-[600px] w-[600px] rounded-full blur-[55px]" style={{ background: "radial-gradient(circle, rgba(168,139,250,0.22) 0%, rgba(139,92,246,0.08) 40%, transparent 68%)" }} />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <div className="mb-6"><PillBadge>LinkedIn Hook Grader</PillBadge></div>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Grade the first two lines of <HandUnderline>your LinkedIn post</HandUnderline>
          </h1>
          <p className="mb-10 max-w-3xl text-lg sm:text-xl" style={{ color: "#52525B" }}>
            Most people decide whether to keep reading in the first two lines. Get a transparent score out of 100 and three rewritten hooks you can paste and edit.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}
          >
            Grade My Hook <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-3xl font-black sm:text-4xl">How It Works</h2>
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: s.color, color: s.color === "#D97706" ? "#0a0a0a" : "#ffffff" }}>
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-black">{s.title}</h3>
                <p style={{ color: "#52525B" }}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-3xl font-black sm:text-4xl">The six checks</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg" style={{ color: "#52525B" }}>
            Each check is a plain rule you can read and argue with. The AI writes the rewrites, but it never sets your score.
          </p>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CHECKS.map(([name, body]) => (
              <div key={name} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#E8E2D9", borderLeft: "4px solid #F5B731" }}>
                <dt className="mb-1 text-lg font-black">{name}</dt>
                <dd className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}
            >
              Grade My Hook <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <RelatedTools currentSlug="linkedin-hook-grader" />
    </div>
  );
}
