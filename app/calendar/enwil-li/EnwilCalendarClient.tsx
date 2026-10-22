"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Clock, Video, Sparkles, ShieldCheck, Loader2 } from "lucide-react";
import InnerLayout from "../../components/InnerLayout";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (options: { url: string; parent: string; height: string }) => void;
    };
  }
}

interface EnwilCalendarClientProps {
  canonicalPath?: string;
}

export default function EnwilCalendarClient({
  canonicalPath = "/calendar/enwil-li",
}: EnwilCalendarClientProps) {
  const initializedRef = useRef(false);
  const [loading, setLoading] = useState(true);

  const initBookings = () => {
    if (typeof window !== "undefined" && window.Bookings && !initializedRef.current) {
      const parentEl = document.querySelector("#inline-container");
      if (parentEl) {
        parentEl.innerHTML = "";
        const embedHeight = window.innerWidth < 640 ? "700px" : "650px";
        window.Bookings.inlineEmbed({
          url: "https://meetingwithteejay.zohobookings.com/portal-embed#/4203790000004915016",
          parent: "#inline-container",
          height: embedHeight,
        });
        initializedRef.current = true;
        setTimeout(() => setLoading(false), 350);
      }
    }
  };

  useEffect(() => {
    if (window.Bookings) {
      initBookings();
    }
    const interval = setInterval(() => {
      if (window.Bookings && !initializedRef.current) {
        initBookings();
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

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
              <span>1-on-1 Outbound Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4" style={{ color: "#0A0A0A" }}>
              Pick a time that works for you
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl mx-auto">
              Schedule a 1-on-1 session with our Senior Sales Head. We&apos;ll review your outbound pipeline, target ICP, and conversion bottlenecks.
            </p>

            {/* Host Profile Card */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white/90 border shadow-xs" style={{ borderColor: "#E8E2D9" }}>
              <div className="relative w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden bg-amber-50">
                <Image
                  src="/enwil.png"
                  alt="Enwil Fernandes, Senior Sales Head at Myntmore"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#0A0A0A]">Enwil Fernandes</div>
                <div className="text-xs text-[#71675E]">Senior Sales Head · B2B Outbound Specialist</div>
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

          {/* Zoho Bookings Widget Card */}
          <div
            className="w-full rounded-2xl border overflow-hidden shadow-sm bg-white relative min-h-[500px]"
            style={{ borderColor: "#E8E2D9" }}
          >
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10 gap-3">
                <Loader2 className="w-7 h-7 text-[#F5B731] animate-spin" />
                <span className="text-xs text-[#71675E] font-medium">Loading calendar slots...</span>
              </div>
            )}
            <div id="inline-container" className="w-full" />
          </div>
        </section>
      </div>

      <Script
        src="https://bookings.nimbuspop.com/assets/embed.js"
        strategy="afterInteractive"
        onLoad={initBookings}
      />
    </InnerLayout>
  );
}
