"use client";

import { Button } from "@/components/ui/button";
import { Calculator, HelpCircle, TrendingUp, ArrowRight, MousePointer2, Zap, CheckCircle } from "lucide-react";

const ACCENT = "#16a34a";

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="w-full bg-white text-foreground">
      {/* Hero Section */}
      <section className="py-14 md:py-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-in relative overflow-hidden">
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.26) 0%, rgba(22,163,74,0.10) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.35)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>ROI Calculator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            See What Your{" "}
            <span className="relative inline-block">
              Outreach Is Worth
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 420 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 7 Q105 2 210 6 Q315 10 418 5" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl">
            Plug in your real funnel numbers and watch your pipeline, revenue, and ROI calculate live. See the full picture before you approve another dollar of outreach spend.
          </p>
          <Button onClick={onStart} variant="hero" size="xl" className="rounded-full shadow-2xl">
            Calculate My ROI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-16">You&apos;re Spending On Outreach Without The Math</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "No idea what a single meeting is actually worth",
                description: "Without knowing your funnel math, every outreach decision is a guess dressed up as strategy.",
                icon: HelpCircle,
                color: "#16a34a",
              },
              {
                title: "Budgets approved on gut feeling, not numbers",
                description: "\"It feels like it's working\" doesn't hold up in a budget review. You need the actual projected return.",
                icon: Calculator,
                color: "#3B82F6",
              },
              {
                title: "Can't set expectations before you spend",
                description: "Leadership wants a number before they approve spend, and \"we'll see\" isn't an answer they'll accept.",
                icon: TrendingUp,
                color: "#7C3AED",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ border: "1px solid #E8E2D9", borderTop: `3px solid ${item.color}` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon className="h-8 w-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-8">See The Full Funnel, Not Just A Guess</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enter your connection volume, acceptance rate, reply rate, and closing rate. Watch every stage of your funnel calculate live, from connection requests all the way through to revenue and ROI, then export it as a PDF to share.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Enter your funnel numbers",
                description: "Connection volume, acceptance rate, reply rate, deal size, and cost.",
                icon: MousePointer2,
                color: "#16a34a",
              },
              {
                title: "Watch it calculate live",
                description: "Every stage of the funnel updates instantly as you adjust the numbers.",
                icon: Zap,
                color: "#3B82F6",
              },
              {
                title: "Export it to share",
                description: "A clean PDF you can bring to a budget conversation or a client call.",
                icon: CheckCircle,
                color: "#10B981",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color, color: "#fff" }}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-16">Why This Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Live calculation",
                benefit: "No submit button, the results update as you type",
                description: "Test different scenarios instantly instead of waiting on a report.",
                color: ACCENT,
              },
              {
                title: "The full funnel, not one number",
                benefit: "From connection requests all the way to revenue and ROI",
                description: "See exactly where deals are being won or lost, not just the final close rate.",
                color: "#3B82F6",
              },
              {
                title: "Built to share",
                benefit: "Export a clean PDF for stakeholders or clients",
                description: "Bring real numbers into your next budget or pitch conversation.",
                color: "#14B8A6",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 rounded-2xl bg-secondary/20" style={{ borderLeft: `4px solid ${item.color}` }}>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-foreground font-medium mb-2">{item.benefit}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-24 px-6 text-center bg-white" style={{ borderTop: "1px solid #E8E2D9" }}>
        <h2 className="text-3xl sm:text-5xl font-black mb-10">Ready to see the real math behind your outreach?</h2>
        <Button onClick={onStart} variant="hero" size="xl" className="rounded-full shadow-2xl">
          Calculate My ROI Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
