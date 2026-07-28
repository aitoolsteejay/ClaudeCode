"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Target, Zap, CheckCircle, ArrowRight, MousePointer2 } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="w-full bg-white text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-in relative overflow-hidden">
        {/* Vivid background blobs, matching the homepage hero's color treatment */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.30) 0%, rgba(255,160,0,0.12) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(37,99,235,0.09) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Stop Sending DMs That Get Ignored
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl">
            Get 5 psychology-backed DM angles that actually match how your prospects think. No more guessing. No more crickets.
          </p>
          <Button onClick={onGetStarted} variant="hero" size="xl" className="rounded-full shadow-2xl">
            Generate My Angles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-16">Your DMs Are Dying in the Inbox</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Generic openers that scream copy-paste",
                description: "Prospects can smell a template from a mile away. If your message looks like 50 others they got today, it's already deleted.",
                icon: MessageSquare,
                color: "#3B82F6",
              },
              {
                title: "Pitches that miss what your ICP actually cares about",
                description: "Talking about your features instead of their problems is the fastest way to get ignored. You need to align with their current priorities.",
                icon: Target,
                color: "#F97316",
              },
              {
                title: "Messages that sound like everyone else in their DMs",
                description: "Without a unique angle, you're just another salesperson. You need a pattern interrupt that forces them to pay attention.",
                icon: Users,
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
          <h2 className="text-3xl sm:text-5xl font-black mb-8">Get Angles That Match Their Psychology</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tell us about your offer and who you&apos;re targeting. Our tool analyzes your ICP&apos;s mindset and generates 5 unique angles that speak to their actual motivations, pain points, and decision triggers.
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
                step: "01",
                title: "Describe your offer and ideal client",
                description: "Input basic details about what you sell and who you sell to.",
                icon: MousePointer2,
                color: "#F5B731",
              },
              {
                step: "02",
                title: "Get 5 psychology-aligned angles instantly",
                description: "Our engine crafts angles based on proven persuasion frameworks.",
                icon: Zap,
                color: "#3B82F6",
              },
              {
                step: "03",
                title: "Pick the angle that fits and start conversations that convert",
                description: "Use the messages to break through the noise and get replies.",
                icon: CheckCircle,
                color: "#10B981",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color, color: "#000" }}
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
                title: "Psychology-based",
                benefit: "Angles rooted in how your ICP actually thinks and decides",
                description: "We focus on the underlying motivations that drive action.",
                color: "#F5B731",
              },
              {
                title: "Pattern interrupt",
                benefit: "Messages that stand out instead of blending in",
                description: "We help you avoid the common tropes that prospects have learned to ignore.",
                color: "#7C3AED",
              },
              {
                title: "Multiple options",
                benefit: "5 different angles so you can test what resonates",
                description: "Use different approaches for different segments of your list.",
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
        <h2 className="text-3xl sm:text-5xl font-black mb-10">Ready to transform your outreach?</h2>
        <Button onClick={onGetStarted} variant="hero" size="xl" className="rounded-full shadow-2xl">
          Create My Angles Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
