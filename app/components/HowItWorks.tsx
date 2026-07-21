interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, title, description, isLast = false }: StepProps) {
  return (
    <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
      {/* Connector line (desktop only) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(245,183,49,0.45), rgba(245,183,49,0.08))",
          }}
          aria-hidden="true"
        />
      )}

      {/* Number badge */}
      <div className="relative z-10 mb-5">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #D4CFC9",
            color: "#0a0a0a",
          }}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="glass-card-hover rounded-xl p-6 w-full">
        <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{title}</h3>
        <p className="text-sm text-[#52525B] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const STEPS = [
  {
    number: "01",
    title: "Deep ICP Discovery",
    description:
      "We audit your best-fit customers, analyze your win/loss data, and map the precise firmographic and behavioral signals that define your ideal client profile. No guesswork just data.",
  },
  {
    number: "02",
    title: "Campaign Architecture",
    description:
      "Multi-touch sequences crafted with segment-specific messaging. Every touchpoint is intentional the hook, the value prop, the CTA built to move prospects from curious to ready in the fewest steps possible.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "Campaigns go live with full infrastructure in place. We monitor reply rates, open rates, and conversion daily, running A/B tests and iterating every week so performance compounds over time.",
  },
  {
    number: "04",
    title: "Qualified Meetings, Delivered",
    description:
      "You receive a calendar booked with decision-makers who match your ICP and have expressed genuine interest. Full context is handed off to your team so every call starts warm.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F0EBE3" }}
      aria-labelledby="how-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#F5B731",
              borderColor: "rgba(245,183,49,0.35)",
              background: "#FEF9EC",
            }}
          >
            The Process
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight"
          >
            From Zero to Pipeline
            <br />
            <span style={{ color: "#F5B731" }}>in 4 Steps</span>
          </h2>
          <p className="mt-4 text-[#52525B] text-lg max-w-xl mx-auto">
            A repeatable, proven process that turns your outbound into a
            predictable revenue engine not a guessing game.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <Step
              key={step.number}
              {...step}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-14">
          <p className="text-neutral-500 text-sm mb-4">
            Ready to start the process?
          </p>
          <a
            href="/founder-meeting"
            className="btn-dark px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2"
          >
            Book a Free Strategy Call
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
