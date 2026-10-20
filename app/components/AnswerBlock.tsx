import { SERVICE_ANSWER_BY_SLUG } from "@/lib/service-answers";
import { textTone } from "@/lib/colors";

// The definition-first block placed straight under a service page's hero: a
// question-shaped heading, a 40-60 word direct answer, and three one-line
// facts (who it is for, what is delivered, what to expect). Written to be
// lifted whole by search snippets, AI answers and voice assistants, and to
// give a first-time reader the answer before any scrolling. The copy lives in
// lib/service-answers.ts so llms-full.txt can reuse it word for word.
//
// Plain presentational markup (no hooks), so it works from both Server and
// Client components.
export default function AnswerBlock({ slug, accent = "#0a0a0a" }: { slug: string; accent?: string }) {
  const a = SERVICE_ANSWER_BY_SLUG[slug];
  if (!a) throw new Error(`AnswerBlock: no entry for "${slug}" in lib/service-answers.ts`);

  const facts: { label: string; text: string }[] = [
    { label: "Who it's for", text: a.who },
    { label: "What you get", text: a.gets },
    { label: "What to expect", text: a.outcome },
  ];

  return (
    <section aria-labelledby={`answer-${slug}`} className="px-4 py-12" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-4xl mx-auto">
        <h2 id={`answer-${slug}`} className="text-2xl sm:text-3xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>
          {a.question}
        </h2>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "#3D3D3D" }}>
          {a.answer}
        </p>
        <dl className="grid gap-6 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="border-t-2 pt-4" style={{ borderColor: accent }}>
              <dt className="text-xs font-black uppercase tracking-[0.22em] mb-2" style={{ color: textTone(accent) }}>
                {f.label}
              </dt>
              <dd className="text-sm leading-relaxed" style={{ color: "#52525B" }}>
                {f.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
