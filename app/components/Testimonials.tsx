import type { ReactNode } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
type CardColor = "rose" | "sky" | "violet" | "mint" | "amber" | "blush";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: CardColor;
  quote: string;
  rating?: number;
}

const ROW_1: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "VP of Sales",
    company: "Finstack",
    initials: "SK",
    color: "sky",
    quote: "We'd tried two other agencies before this. Both fizzled out after month one. Myntmore's cold email + LinkedIn combo actually held up, 41 demos in the first two months, and about a third of them were the kind of accounts we actually wanted.",
  },
  {
    name: "Rohan Mehta",
    role: "Founder",
    company: "Kwikcart",
    initials: "RM",
    color: "amber",
    quote: "Honestly wasn't sure outbound would work for a D2C-adjacent SaaS. Took roughly a month to find the right angle, but once it clicked we had two enterprise deals close straight out of the same sequence.",
  },
  {
    name: "Priya M.",
    role: "Head of Growth",
    company: "Vaultline",
    initials: "PM",
    color: "rose",
    quote: "What sold me wasn't the pitch, it was that they actually read our old sequences before proposing anything. Reply rates are up, but more than that, the replies are from people who fit our ICP instead of randoms.",
    rating: 4,
  },
  {
    name: "Alex T.",
    role: "CRO",
    company: "Helio",
    initials: "AT",
    color: "violet",
    quote: "My reps used to burn a good chunk of the morning just prospecting on LinkedIn. That's gone now. Close rate is up too, though I'd credit that more to better-qualified meetings than any single tactic.",
  },
  {
    name: "Ananya Iyer",
    role: "RevOps Lead",
    company: "Zylker Health",
    initials: "AI",
    color: "mint",
    quote: "I run point on three vendor relationships and this is the only one where I don't have to chase a weekly update, it just shows up in our CRM. Small thing, but it's the reason we renewed.",
  },
];

const ROW_2: Testimonial[] = [
  {
    name: "Tom W.",
    role: "VP Marketing",
    company: "Nexbridge",
    initials: "TW",
    color: "blush",
    quote: "Didn't expect the personal branding side to matter much, thought it was a nice-to-have. Turned out half our inbound this quarter can be traced back to a post they wrote for our founder.",
  },
  {
    name: "Lisa B.",
    role: "Director of Sales",
    company: "Strataflow",
    initials: "LB",
    color: "sky",
    quote: "We'd gotten used to templated cold emails that read like every other vendor pitch we get. This didn't feel like that. Can't say every sequence was a home run, but the misses were rare.",
  },
  {
    name: "Raj P.",
    role: "CEO",
    company: "Orbis",
    initials: "RP",
    color: "amber",
    quote: "Campaign was live in 8 days, first meeting booked on day 9. What actually kept me around, though, is that someone from their team flags it themselves when a sequence underperforms instead of waiting for us to notice.",
  },
  {
    name: "Karthik Subramaniam",
    role: "Director of Sales",
    company: "Brightleaf Traders",
    initials: "KS",
    color: "violet",
    quote: "We export to a pretty niche set of buyers, so I went in expecting generic messaging. It wasn't. They spent the first two weeks just understanding our product before a single email went out.",
  },
  {
    name: "Chris H.",
    role: "VP Business Development",
    company: "Proxima",
    initials: "CH",
    color: "mint",
    quote: "Running email, LinkedIn, and ABM at once sounded like a lot to manage on our end. It wasn't, it genuinely felt like an SDR team had joined overnight, minus the ramp-up time and the headcount.",
  },
];

// ─── Star rating ──────────────────────────────────────────────────────────────
function Stars({ color = "#F5B731", rating = 5 }: { color?: string; rating?: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < rating ? color : "#E8E2D9"} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: Testimonial }) {
  const styles: Record<CardColor, { bg: string; border: string; namecol: string; rolecol: string; quotecol: string; avatarbg: string; avatartext: string; starcol: string }> = {
    rose: {
      bg: "linear-gradient(135deg, #ffffff 0%, #fff1f2 100%)",
      border: "rgba(251,113,133,0.12)",
      namecol: "#0a0a0a",
      rolecol: "#be123c",
      quotecol: "#3D3D3D",
      avatarbg: "#E11D48",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
    sky: {
      bg: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
      border: "rgba(56,189,248,0.14)",
      namecol: "#0a0a0a",
      rolecol: "#0369a1",
      quotecol: "#3D3D3D",
      avatarbg: "#0284C7",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
    violet: {
      bg: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)",
      border: "rgba(167,139,250,0.15)",
      namecol: "#0a0a0a",
      rolecol: "#6d28d9",
      quotecol: "#3D3D3D",
      avatarbg: "#7C3AED",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
    mint: {
      bg: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
      border: "rgba(74,222,128,0.15)",
      namecol: "#0a0a0a",
      rolecol: "#15803d",
      quotecol: "#3D3D3D",
      avatarbg: "#16A34A",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
    amber: {
      bg: "linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)",
      border: "rgba(251,191,36,0.18)",
      namecol: "#0a0a0a",
      rolecol: "#b45309",
      quotecol: "#3D3D3D",
      avatarbg: "#D97706",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
    blush: {
      bg: "linear-gradient(135deg, #ffffff 0%, #fdf4ff 100%)",
      border: "rgba(232,121,249,0.13)",
      namecol: "#0a0a0a",
      rolecol: "#a21caf",
      quotecol: "#3D3D3D",
      avatarbg: "#C026D3",
      avatartext: "#ffffff",
      starcol: "#F5B731",
    },
  };
  const s = styles[t.color];

  return (
    <div
      className="flex-shrink-0 w-[340px] sm:w-[380px] rounded-2xl p-6 flex flex-col"
      style={{ background: s.bg, border: `1px solid ${s.border}`, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Header: avatar + name */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: s.avatarbg, color: s.avatartext }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: s.namecol }}>{t.name}</p>
          <p className="text-xs" style={{ color: s.rolecol }}>{t.role}, {t.company}</p>
        </div>
      </div>

      {/* Stars */}
      <Stars color={s.starcol} rating={t.rating ?? 5} />

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-grow" style={{ color: s.quotecol }}>
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}

// ─── Scrolling row ────────────────────────────────────────────────────────────
function ScrollRow({ items, direction, duration }: { items: Testimonial[]; direction: "left" | "right"; duration: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

// ─── Rating badge ─────────────────────────────────────────────────────────────
function RatingBadge({ score, label, icon }: { score: string; label: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white" style={{ border: "1px solid #E8E2D9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
      <span className="flex-shrink-0">{icon}</span>
      <div className="flex items-baseline gap-1.5">
        <span className="text-base font-bold text-[#0a0a0a]">{score}</span>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3 h-3" fill="#F5B731" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-[#8C8279]">{label}</span>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 overflow-hidden relative"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">

        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] tracking-tight"
        >
          This is why clients
          <br />
          <span style={{ color: "#F5B731" }}>love working with us</span>
        </h2>

        <p className="mt-5 text-lg text-[#52525B] max-w-2xl mx-auto">
          300+ B2B companies trust Myntmore to fill their pipeline. Here&rsquo;s
          what they say after working with us.
        </p>

        {/* Rating badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <RatingBadge
            score="4.9"
            label="Client Satisfaction"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <RatingBadge
            score="92%"
            label="Client Retention"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
          />
          <RatingBadge
            score="3.2x"
            label="Avg. Reply Rate vs Industry"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Scrolling rows */}
      <div className="flex flex-col gap-5">
        <ScrollRow items={ROW_1} direction="left"  duration="45s" />
        <ScrollRow items={ROW_2} direction="right" duration="40s" />
      </div>

      <p className="text-center text-xs text-neutral-400 mt-10 px-4">
        Results vary by industry, deal size, and engagement scope. Testimonials reflect real anonymised client feedback.
      </p>
    </section>
  );
}
