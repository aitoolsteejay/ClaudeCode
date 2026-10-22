"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Video, Sparkles, ShieldCheck } from "lucide-react";
import InnerLayout from "../../components/InnerLayout";

interface CalendarPageClientProps {
  canonicalPath?: string;
}

export default function CalendarPageClient({ canonicalPath = "/calendar/th" }: CalendarPageClientProps) {
  const router = useRouter();
  const widgetRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const win = window as any;
    if (win.Calendly && typeof win.Calendly.initInlineWidgets === "function") {
      win.Calendly.initInlineWidgets();
    }

    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        router.push("/thankyou");
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <InnerLayout>
      <div className="relative overflow-hidden min-h-[calc(100vh-80px)]" style={{ backgroundColor: "#F8F6F2" }}>
        {/* Ambient subtle background glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #F5B731, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-96 left-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #D97706, transparent 70%)" }}
          aria-hidden="true"
        />

        <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
          {/* Header pill & Title */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: "#FEF9EC",
                color: "#A14A08",
                borderColor: "rgba(245,183,49,0.35)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5B731]" />
              <span>1-on-1 Founder Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4" style={{ color: "#0A0A0A" }}>
              Pick a time that works for you
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl mx-auto">
              30 minutes with our founder. No pitch, no pressure — just an honest, actionable review of your outbound pipeline and growth roadmap.
            </p>

            {/* Founder Profile Card */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white/90 border shadow-xs" style={{ borderColor: "#E8E2D9" }}>
              <div className="relative w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden bg-amber-50">
                <Image
                  src="/tejas.png"
                  alt="Tejas Jhaveri, Founder of Myntmore"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#0A0A0A]">Tejas Jhaveri</div>
                <div className="text-xs text-[#71675E]">Founder, Myntmore · Outbound Strategist</div>
              </div>
              <div className="hidden sm:block h-6 w-px bg-[#E8E2D9] mx-1" />
              <div className="flex items-center gap-3 text-xs text-[#52525B]">
                <span className="inline-flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#D97706]" /> 30 Mins
                </span>
                <span className="inline-flex items-center gap-1 font-medium">
                  <Video className="w-3.5 h-3.5 text-[#2563EB]" /> Google Meet
                </span>
                <span className="inline-flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" /> 100% Free
                </span>
              </div>
            </div>
          </div>

          {/* Calendly Inline Widget Card */}
          <div
            className="w-full rounded-2xl border overflow-hidden shadow-sm bg-white"
            style={{ borderColor: "#E8E2D9" }}
          >
            {/* Calendly inline widget begin */}
            <div
              ref={widgetRef}
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/founder-myntmore/tj"
              style={{ minWidth: "320px", height: "700px" }}
            />
            {/* Calendly inline widget end */}
          </div>
        </section>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          const win = window as any;
          if (win.Calendly && typeof win.Calendly.initInlineWidgets === "function") {
            win.Calendly.initInlineWidgets();
          }
        }}
      />
    </InnerLayout>
  );
}
