import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "./components/InnerLayout";

export const metadata: Metadata = {
  title: "404 — Ghosted",
  description: "We followed up on every channel. This page still never replied. Here's how to get back to one that's actually live.",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact-us" },
];

// The 4 real channels Myntmore follows up on, cycling through a shuffling
// "deck" in place of the middle 0 in "404" — a card always sits on top for
// a beat, then rotates to the back as the next one comes forward, on loop.
const CHANNEL_CARDS = [
  {
    key: "email",
    delay: "0s",
    bg: "#FEF9EC",
    icon: (
      <svg className="w-[52%] h-[52%]" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    delay: "-2s",
    bg: "#EAF6FF",
    href: "https://linkedin.com/company/myntmore",
    label: "Myntmore on LinkedIn",
    icon: (
      <svg className="w-[46%] h-[46%]" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0077b5" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "signal",
    delay: "-4s",
    bg: "#F5F0FF",
    icon: (
      <svg className="w-[46%] h-[46%]" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.5" fill="#a855f7" />
      </svg>
    ),
  },
  {
    key: "abm",
    delay: "-6s",
    bg: "#EEF2FF",
    icon: (
      <svg className="w-[46%] h-[46%]" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth={1.8}>
        <rect x="4" y="4" width="9" height="9" rx="2" /><rect x="11" y="11" width="9" height="9" rx="2" />
      </svg>
    ),
  },
];

function ChannelStack() {
  return (
    <span className="relative inline-flex items-center justify-center flex-shrink-0" style={{ width: "1.05em", height: "1.05em" }}>
      {CHANNEL_CARDS.map((c) => {
        const className = "stack-card absolute inset-[6%] rounded-[22%] flex items-center justify-center";
        const style = { backgroundColor: c.bg, border: "2px solid #ffffff", boxShadow: "0 6px 16px rgba(0,0,0,0.14)", animationDelay: c.delay };
        if (c.href) {
          return (
            <a key={c.key} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.label} className={className} style={style}>
              {c.icon}
            </a>
          );
        }
        return (
          <span key={c.key} aria-hidden="true" className={className} style={style}>
            {c.icon}
          </span>
        );
      })}
    </span>
  );
}

export default function NotFound() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-24 px-4 min-h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", left: "-8%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-12%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.08) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "35%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,119,181,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-3xl w-full mx-auto">
          {/* ── Bold frame card ───────────────────────────────── */}
          <div className="relative rounded-[2rem] bg-white px-6 sm:px-14 py-14 sm:py-16 text-center hero-fade" style={{ border: "9px solid #F5B731" }}>

            {/* back arrow */}
            <Link href="/" aria-label="Back to homepage"
              className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-white flex items-center justify-center transition-transform hover:-translate-x-0.5"
              style={{ border: "2.5px solid #F5B731" }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0a0a0a" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M6 12h12" /></svg>
            </Link>

            <p className="text-lg sm:text-xl mb-2 mt-2" style={{ color: "#52525B" }}>
              oh no&hellip; <span style={{ color: "#0a0a0a", fontWeight: 700 }}>ghosted</span>
            </p>

            <div className="flex items-center justify-center gap-1 sm:gap-3 mb-6" style={{ color: "#0a0a0a" }}>
              <span className="font-black leading-none" style={{ fontSize: "clamp(4.5rem, 16vw, 9rem)" }}>4</span>
              <span style={{ fontSize: "clamp(4.5rem, 16vw, 9rem)" }}><ChannelStack /></span>
              <span className="font-black leading-none" style={{ fontSize: "clamp(4.5rem, 16vw, 9rem)" }}>4</span>
            </div>

            <p className="text-base sm:text-lg max-w-md mx-auto mb-10" style={{ color: "#52525B" }}>
              We followed up on email. We followed up on LinkedIn. This page still never replied.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-9">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm font-semibold transition-colors" style={{ color: "#3D3D3D" }}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center max-w-md mx-auto gap-3">
              <Link href="/" className="flex-1 rounded-full px-6 py-3.5 text-sm font-bold text-left" style={{ border: "1.5px solid rgba(168,85,247,0.25)", color: "#8C8279" }}>
                Back to Homepage
              </Link>
              <a href="/founder-meeting" aria-label="Book a call"
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 btn-dark">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* ── Floating channel badges (real links to services) ── */}
          <div className="hidden sm:block absolute -bottom-8 -right-8">
            <div className="relative w-36 h-36">
              <Link href="/services/cold-email" aria-label="Cold Email Infrastructure"
                className="absolute w-20 h-20 rounded-full flex items-center justify-center rotate-[-8deg] transition-transform hover:scale-110 hover:rotate-0"
                style={{ backgroundColor: "#FEF9EC", border: "3px solid #ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", top: 0, left: 8, zIndex: 1 }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </Link>
              <a href="https://linkedin.com/company/myntmore" target="_blank" rel="noopener noreferrer" aria-label="Myntmore on LinkedIn"
                className="absolute w-20 h-20 rounded-full flex items-center justify-center rotate-[6deg] transition-transform hover:scale-110 hover:rotate-0"
                style={{ backgroundColor: "#EAF6FF", border: "3px solid #ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", top: 26, left: 42, zIndex: 2 }}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0077b5" }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <Link href="/services/sales-intelligence" aria-label="ICP Mapping & Lead Scoring"
                className="absolute w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: "#F5F0FF", border: "3px solid #ffffff", boxShadow: "0 8px 22px rgba(0,0,0,0.12)", top: -8, right: 4, zIndex: 3 }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2.2}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.5" fill="#a855f7" /></svg>
              </Link>
              <span className="absolute w-2.5 h-2.5 rounded-full pointer-events-none" style={{ backgroundColor: "#6366f1", bottom: 4, left: -4 }} aria-hidden="true" />
              <span className="absolute w-1.5 h-1.5 rounded-full pointer-events-none" style={{ backgroundColor: "#16a34a", top: 40, right: -6 }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
