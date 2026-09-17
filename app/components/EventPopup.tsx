"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EVENTS, isUpcoming } from "@/lib/events-data";

const SEEN_KEY = "myntmore-event-popup-seen";
const SHOW_DELAY_MS = 10000;
const VISIBLE_DURATION_MS = 5000;

export default function EventPopup() {
  const event = EVENTS.filter(isUpcoming)[0];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!event) return;
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private browsing, etc.) — just show it
    }
    if (alreadySeen) return;

    const showTimer = setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, [event]);

  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => setVisible(false), VISIBLE_DURATION_MS);
    return () => clearTimeout(hideTimer);
  }, [visible]);

  if (!event) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 20px 44px rgba(10,6,24,0.18)" }}
      >
        <div className="h-1" style={{ background: `linear-gradient(90deg,${event.accent},${event.accent}66)` }} />
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <span
              className="inline-flex text-[11px] font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${event.accent}12`, color: event.accent }}
            >
              {event.tag}
            </span>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss"
              className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full"
              style={{ color: "#8C8279" }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: "#8C8279" }}>
            Upcoming Event
          </p>
          <h3 className="text-sm font-black leading-snug mb-2 line-clamp-2" style={{ color: "#0a0a0a" }}>
            {event.title}
          </h3>
          <p className="text-xs mb-4" style={{ color: "#52525B" }}>
            {event.displayDate} &middot; {event.time}
          </p>
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full"
            style={{ backgroundColor: event.accent, color: "#ffffff" }}
          >
            See details
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
