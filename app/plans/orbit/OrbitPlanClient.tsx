"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

const GOLD = "#F5B731";
const INK = "#0A0A0A";
const TEXT_MUTED = "#6B6B6B";
const BORDER_COLOR = "#E8E2D9";

export default function OrbitPlanClient() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Ambient background glows matching design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(245,183,49,0.35) 0%, rgba(254,249,236,0) 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[650px] h-[650px] rounded-full blur-[110px] opacity-35"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(229,217,251,0) 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 right-10 w-[500px] h-[500px] rounded-full blur-[90px] opacity-25"
        style={{ background: "radial-gradient(circle, rgba(200,180,250,0.3) 0%, rgba(248,246,242,0) 70%)" }}
      />

      {/* Main page wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Top Header / Brand Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16">
          <Link href="/" className="inline-flex items-center gap-3.5 group" aria-label="Myntmore home">
            <Image
              src="/logo.png"
              alt="Myntmore"
              width={160}
              height={44}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
            <div className="h-7 w-[1px] bg-[#D4CDC3]" aria-hidden="true" />
            <span
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] leading-[1.35]"
              style={{ color: "#4A4A52" }}
            >
              Growth for
              <br />
              What&apos;s next
            </span>
          </Link>

          <div
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-white/80 border text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] shadow-sm backdrop-blur-sm"
            style={{ borderColor: BORDER_COLOR, color: INK }}
          >
            <span>People</span>
            <span style={{ color: GOLD }}>×</span>
            <span>Content</span>
            <span style={{ color: GOLD }}>×</span>
            <span>Opportunities</span>
          </div>
        </header>

        {/* Hero Grid: Title Left, 3D Orbit Planet Right */}
        <section className="grid lg:grid-cols-[1.12fr_1fr] gap-8 items-center mb-12 sm:mb-16">
          {/* Left: Headline & Subheading */}
          <div>
            {/* Service Plan Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border mb-7 shadow-sm"
              style={{ borderColor: "rgba(245,183,49,0.4)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: INK }}>
                Service Plan
              </span>
            </div>

            {/* H1 Heading */}
            <h1
              className="font-black tracking-tight"
              style={{
                color: INK,
                fontSize: "clamp(3.8rem, 8.5vw, 7.2rem)",
                lineHeight: 0.93,
                letterSpacing: "-0.045em",
              }}
            >
              The Orbit
              <br />
              <span className="italic" style={{ color: "#1F1F26" }}>
                Plan
                <span
                  className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 ml-1.5 align-baseline"
                  style={{ backgroundColor: GOLD }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Gold hand-drawn wavy underline */}
            <svg
              viewBox="0 0 460 22"
              fill="none"
              className="mt-3.5 w-[min(78vw,420px)]"
              aria-hidden="true"
            >
              <path
                d="M4 14 C60 6, 150 18, 240 11 S400 8, 456 12"
                stroke={GOLD}
                strokeWidth="5.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Subheading */}
            <p
              className="mt-8 text-xl sm:text-2xl font-semibold leading-snug tracking-tight max-w-xl"
              style={{ color: "#1A1A1E" }}
            >
              Build your presence. Create consistency.
              <br className="hidden sm:inline" />
              {" "}Start generating opportunities.
            </p>
          </div>

          {/* Right: 3D Orbit Illustration with Elliptical Rings & Satellite */}
          <div className="relative w-full max-w-[500px] lg:max-w-[560px] aspect-square mx-auto lg:justify-self-end">
            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Planet gradients */}
                <radialGradient id="sphere-gradient" cx="35%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="38%" stopColor="#F9F6FF" />
                  <stop offset="72%" stopColor="#E6DBFD" />
                  <stop offset="100%" stopColor="#D2BEF7" />
                </radialGradient>
                <radialGradient id="sphere-shade" cx="35%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#6C4CBF" stopOpacity="0.38" />
                </radialGradient>
                <filter id="sphere-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="28" />
                </filter>
                <clipPath id="sphere-clip">
                  <circle cx="300" cy="300" r="195" />
                </clipPath>

                {/* Orbit ring stroke gradient */}
                <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5B731" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F5B731" stopOpacity="0.4" />
                </linearGradient>

                {/* Golden satellite sphere gradient */}
                <radialGradient id="satellite-gradient" cx="32%" cy="28%" r="75%">
                  <stop offset="0%" stopColor="#FFF7A1" />
                  <stop offset="45%" stopColor="#F5B731" />
                  <stop offset="100%" stopColor="#B45309" />
                </radialGradient>
                <filter id="satellite-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-2" dy="4" stdDeviation="6" floodColor="rgba(245,183,49,0.4)" />
                </filter>
              </defs>

              {/* Background Orbit Ring (Back part behind sphere) */}
              <g transform="rotate(-26 300 300)">
                <ellipse
                  cx="300"
                  cy="300"
                  rx="315"
                  ry="95"
                  fill="none"
                  stroke="url(#ring-gradient)"
                  strokeWidth="2.2"
                  opacity="0.85"
                />
                <ellipse
                  cx="300"
                  cy="300"
                  rx="330"
                  ry="102"
                  fill="none"
                  stroke="#E9D5FF"
                  strokeWidth="1.2"
                  opacity="0.5"
                />
              </g>

              {/* Soft purple shadow under sphere */}
              <circle
                cx="312"
                cy="342"
                r="185"
                fill="#C4B5FD"
                opacity="0.32"
                filter="url(#sphere-glow)"
              />

              {/* Sphere */}
              <circle cx="300" cy="300" r="195" fill="url(#sphere-gradient)" />
              <g clipPath="url(#sphere-clip)">
                {/* Surface shading */}
                <circle cx="300" cy="300" r="195" fill="url(#sphere-shade)" />
                <ellipse cx="430" cy="320" rx="140" ry="90" fill="#FFFFFF" opacity="0.65" />
              </g>

              {/* Foreground Orbit Ring (Front part crossing in front of sphere) */}
              <g transform="rotate(-26 300 300)">
                {/* A clipped arc for the front segment */}
                <path
                  d="M -15 300 A 315 95 0 0 0 615 300"
                  fill="none"
                  stroke="url(#ring-gradient)"
                  strokeWidth="2.2"
                  opacity="0.95"
                />
              </g>

              {/* Golden satellite orb */}
              <circle
                cx="175"
                cy="170"
                r="17"
                fill="url(#satellite-gradient)"
                filter="url(#satellite-shadow)"
              />
            </svg>

            {/* Floating typography overlay on the right of the planet */}
            <div
              className="absolute pointer-events-none"
              style={{ right: "4%", top: "34%", maxWidth: "230px" }}
            >
              <p
                className="text-[10px] sm:text-[11px] font-bold uppercase leading-[1.8] tracking-[0.28em]"
                style={{ color: INK }}
              >
                LinkedIn GTM
                <br />
                Growth ecosystem
              </p>
              <div
                className="my-3 h-[2px] w-12 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              <p
                className="text-[10px] sm:text-[11px] font-semibold uppercase leading-[1.8] tracking-[0.24em]"
                style={{ color: "#4B4B55" }}
              >
                Consistent presence.
                <br />
                Real opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Price & Summary Card */}
        <section
          className="rounded-[24px] sm:rounded-[28px] border bg-white p-6 sm:p-9 shadow-sm mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ borderColor: BORDER_COLOR }}
        >
          <p
            className="text-base sm:text-lg lg:text-[1.18rem] font-medium leading-relaxed max-w-xl"
            style={{ color: "#3B3B44" }}
          >
            An essential GTM foundation for companies ready to build consistent visibility and outbound momentum.
          </p>

          <div className="flex flex-col md:items-end shrink-0 md:pl-8 md:border-l" style={{ borderColor: BORDER_COLOR }}>
            <div
              className="font-black text-5xl sm:text-6xl tracking-tight leading-none"
              style={{ color: INK }}
            >
              ₹75,999
            </div>
            <p className="text-xs sm:text-sm font-semibold mt-1.5" style={{ color: TEXT_MUTED }}>
              + GST, billed monthly
            </p>
          </div>
        </section>

        {/* Three Pillar Cards (01, 02, 03) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 01 Growth Infrastructure */}
          <div
            className="rounded-[24px] border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            style={{ borderColor: BORDER_COLOR }}
          >
            <div>
              {/* Header with 01 Pill and Divider Line */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black tracking-wider text-white"
                  style={{ backgroundColor: INK }}
                >
                  01
                </span>
                <div className="flex-1 h-[1px] bg-[#E8E2D9]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-black mb-2" style={{ color: INK }}>
                Growth Infrastructure
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                The systems that keep your LinkedIn motion steady, measured and accountable.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {[
                  "Dedicated Account Manager",
                  "Monthly Check-In with the Team Lead",
                  "End-of-Month (EOM) Reports",
                  "ICP Definition Template",
                  "Value Proposition Template",
                  "One-Time Profile Optimisation",
                  "One-Time Competitor Analysis",
                  "ORM: Comments & Responses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold leading-snug" style={{ color: "#1F1F24" }}>
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      strokeWidth={3}
                      style={{ color: GOLD }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 02 Content Engine */}
          <div
            className="rounded-[24px] border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            style={{ borderColor: BORDER_COLOR }}
          >
            <div>
              {/* Header with 02 Pill and Divider Line */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black tracking-wider text-white"
                  style={{ backgroundColor: INK }}
                >
                  02
                </span>
                <div className="flex-1 h-[1px] bg-[#E8E2D9]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-black mb-2" style={{ color: INK }}>
                Content Engine
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                Thought leadership that builds credibility with the right audience.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {[
                  "Content Ideation & Strategy",
                  "Content Writing",
                  "3 Content Pieces / Month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold leading-snug" style={{ color: "#1F1F24" }}>
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      strokeWidth={3}
                      style={{ color: GOLD }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}

                {/* Excluded item */}
                <li className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-snug" style={{ color: "#8C8279" }}>
                  <X
                    className="w-4 h-4 shrink-0 mt-0.5"
                    strokeWidth={2.4}
                    style={{ color: "#9E958C" }}
                    aria-hidden="true"
                  />
                  <span>No videos included in this plan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 03 Lead Generation System */}
          <div
            className="rounded-[24px] border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            style={{ borderColor: BORDER_COLOR }}
          >
            <div>
              {/* Header with 03 Pill and Divider Line */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black tracking-wider text-white"
                  style={{ backgroundColor: INK }}
                >
                  03
                </span>
                <div className="flex-1 h-[1px] bg-[#E8E2D9]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-black mb-2" style={{ color: INK }}>
                Lead Generation System
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                Outreach that starts relevant conversations and opens opportunities.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {[
                  "300 Connection Requests / Month",
                  "2 Follow-Up Messages per Prospect",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold leading-snug" style={{ color: "#1F1F24" }}>
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      strokeWidth={3}
                      style={{ color: GOLD }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* "IDEAL FOR" Callout Card */}
        <section
          className="rounded-[20px] sm:rounded-[24px] border p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 shadow-sm mb-12"
          style={{
            backgroundColor: "#FEF9EC",
            borderColor: "rgba(245,183,49,0.45)",
          }}
        >
          {/* Target / Bullseye icon badge */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: INK }}
          >
            <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="11" stroke="#F5B731" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="16" cy="16" r="7" stroke="#F5B731" strokeWidth="2" />
              <circle cx="16" cy="16" r="2.8" fill="#F5B731" />
            </svg>
          </div>

          <div className="flex-1">
            <span
              className="block text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] mb-1.5"
              style={{ color: "#B45309" }}
            >
              Ideal For
            </span>
            <p className="text-base sm:text-lg font-bold leading-snug" style={{ color: INK }}>
              Companies, founders and business leaders who want a consistent LinkedIn presence and relevant conversations, before moving into a larger GTM engagement.
            </p>
          </div>
        </section>

        {/* Action CTA Bar */}
        <section className="text-center py-6">
          <a
            href="/founder-meeting"
            className="btn-dark px-10 py-5 text-base sm:text-lg font-bold inline-flex items-center gap-3 rounded-full shadow-md transition-transform hover:scale-[1.02]"
          >
            Get Started with The Orbit Plan
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </a>
          <p className="mt-3.5 text-xs sm:text-sm" style={{ color: TEXT_MUTED }}>
            30-minute founder onboarding call • Zero setup delays • Managed end-to-end
          </p>
        </section>
      </div>

      {/* Dark Bottom Footer Bar */}
      <footer
        className="mt-8 border-t py-8 px-4 sm:px-8"
        style={{ backgroundColor: "#0B0B0F", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: White logo pill + tagline */}
          <div className="flex items-center gap-3.5">
            <div className="bg-white rounded-lg px-3 py-1.5 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Myntmore"
                width={105}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/70 leading-tight">
              Growth for
              <br />
              What&apos;s next
            </span>
          </div>

          {/* Center: Brand slogan */}
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-white/90">
            Build presence.{" "}
            <span style={{ color: GOLD }}>Spark conversations.</span>{" "}
            Create opportunities.
          </div>

          {/* Right: Ecosystem text */}
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C8279]">
            Myntmore Growth Ecosystem
          </div>
        </div>
      </footer>
    </div>
  );
}
