"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Matches EventPopup's fixed-bottom-right timing convention, but with two
// independent triggers instead of one: whichever fires first shows the reel.
const SHOW_DELAY_MS = 5000;
const SHOW_AT_SCROLL_FRACTION = 0.5;

// The reel is offered once per browsing session, on whichever page the visitor
// lands on first. sessionStorage lasts exactly as long as the tab, so closing
// it ends the session and the next visit gets the reel again, while moving
// between pages or reloading does not.
const SESSION_KEY = "myntmore:reel-offered";

// Live workshop and feedback flows, where a promo would get in the way, plus
// the internal audit page and the framework page, whose full-width workflow
// diagram the reel would cover.
const EXCLUDED_PREFIXES = ["/menti", "/feedback", "/workshop", "/site-audit", "/myntmore-framework"];

const isExcluded = (path: string) => EXCLUDED_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));

export default function ReelWidget() {
  const pathname = usePathname();
  // Mounted in the root layout, so this survives client-side navigation:
  // remember where the visit started to notice when the visitor moves on.
  const landingPath = useRef(pathname);
  const movedOn = pathname !== landingPath.current;
  const checkedSession = useRef(false);
  const [eligible, setEligible] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Claims the session's one showing. The ref keeps StrictMode's second dev
  // pass from reading the flag the first pass just set.
  useEffect(() => {
    if (checkedSession.current) return;
    checkedSession.current = true;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      return; // storage blocked: can't tell visits apart, so don't risk nagging
    }
    setEligible(!isExcluded(landingPath.current));
  }, []);

  // Moving to another page ends the offer for the rest of the session.
  useEffect(() => {
    if (movedOn) setDismissed(true);
  }, [movedOn]);

  useEffect(() => {
    if (!eligible || triggered || dismissed || movedOn) return;
    const showTimer = setTimeout(() => setTriggered(true), SHOW_DELAY_MS);
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SHOW_AT_SCROLL_FRACTION) setTriggered(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [eligible, triggered, dismissed, movedOn]);

  if (!eligible || dismissed || movedOn) return null;

  // `invisible` also takes the hidden card out of the tab order and the
  // accessibility tree until it actually appears.
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-[110px] sm:w-[200px] transition-all duration-300 ${
        triggered ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className="relative rounded-2xl border overflow-hidden"
        style={{ backgroundColor: "#0a0a0a", borderColor: "#E8E2D9", boxShadow: "0 20px 44px rgba(10,6,24,0.18)", aspectRatio: "9 / 16" }}
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#ffffff" }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute" : "Mute"}
          className="absolute bottom-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#ffffff" }}
        >
          {muted ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 9l-6 6M17 9l6 6" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a5 5 0 010 7M19 5.5a9 9 0 010 13" />
            </svg>
          )}
        </button>

        {triggered && (
          <video
            ref={videoRef}
            src="/videos/homepage-reel.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={muted}
            playsInline
          />
        )}
      </div>
      <a
        href="https://instagram.com/myntmore"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center mt-2 text-xs font-bold"
        style={{ color: "#8C8279" }}
      >
        Follow @myntmore
      </a>
    </div>
  );
}
