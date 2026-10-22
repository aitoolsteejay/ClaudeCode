"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import InnerLayout from "../components/InnerLayout";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (options: { url: string; parent: string; height: string }) => void;
    };
  }
}

export default function BookACallClient() {
  const initializedRef = useRef(false);

  const initBookings = () => {
    if (typeof window !== "undefined" && window.Bookings && !initializedRef.current) {
      const parentEl = document.querySelector("#inline-container");
      if (parentEl) {
        parentEl.innerHTML = "";
        window.Bookings.inlineEmbed({
          url: "https://meetingwithteejay.zohobookings.com/portal-embed#/4203790000004903007",
          parent: "#inline-container",
          height: "650px",
        });
        initializedRef.current = true;
      }
    }
  };

  useEffect(() => {
    // If the script is already loaded (client navigation), initialize immediately
    if (window.Bookings) {
      initBookings();
    }
    // Also listen to window onload if fired later
    const handleLoad = () => initBookings();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <InnerLayout>
      <section className="pt-32 pb-20 px-4 min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span
            className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#A14A08", border: "1px solid rgba(245,183,49,0.35)" }}
          >
            Book a call
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#0a0a0a" }}>
            Pick a time that works for you
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#52525B" }}>
            30 minutes with our founder. No pitch, no pressure, just a clear look at your pipeline.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto rounded-2xl border overflow-hidden p-2 sm:p-4 shadow-sm"
          style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff", minHeight: "650px" }}
        >
          <div id="inline-container" style={{ width: "100%", minHeight: "600px" }} />
        </div>
      </section>

      <Script
        src="https://bookings.nimbuspop.com/assets/embed.js"
        strategy="afterInteractive"
        onLoad={initBookings}
      />
    </InnerLayout>
  );
}
