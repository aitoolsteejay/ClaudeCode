"use client";

import { useState } from "react";

const PILLS: { label: string; color: string; delay: string; duration: string }[] = [
  { label: "B2B SaaS",             color: "#3B82F6", delay: "0s",    duration: "4.2s" },
  { label: "B2B Manufacturing",    color: "#F97316", delay: "0.6s",  duration: "5.0s" },
  { label: "Financial Services",   color: "#14B8A6", delay: "1.1s",  duration: "4.6s" },
  { label: "Private Equity",       color: "#F5B731", delay: "0.3s",  duration: "3.8s" },
  { label: "Venture Capital",      color: "#F5B731", delay: "1.8s",  duration: "4.4s" },
  { label: "Recruitment",          color: "#A855F7", delay: "0.4s",  duration: "5.2s" },
  { label: "Marketing Agencies",   color: "#A855F7", delay: "1.5s",  duration: "4.0s" },
  { label: "Tech Consulting",      color: "#3B82F6", delay: "0.9s",  duration: "4.8s" },
  { label: "FinTech",              color: "#14B8A6", delay: "2.1s",  duration: "3.6s" },
  { label: "PropTech",             color: "#10B981", delay: "0.7s",  duration: "5.4s" },
  { label: "Professional Services",color: "#A855F7", delay: "1.3s",  duration: "4.2s" },
  { label: "Asset Management",     color: "#F5B731", delay: "0.2s",  duration: "4.6s" },
  { label: "SaaS Platforms",       color: "#3B82F6", delay: "1.7s",  duration: "3.9s" },
  { label: "HealthTech",           color: "#10B981", delay: "0.8s",  duration: "4.5s" },
  { label: "EdTech",               color: "#3B82F6", delay: "1.4s",  duration: "5.1s" },
  { label: "Logistics & Supply",   color: "#F97316", delay: "2.0s",  duration: "3.7s" },
  { label: "Accounting Firms",     color: "#14B8A6", delay: "0.5s",  duration: "4.9s" },
  { label: "Law Firms",            color: "#A855F7", delay: "1.6s",  duration: "4.3s" },
  { label: "InsurTech",            color: "#14B8A6", delay: "0.1s",  duration: "5.5s" },
  { label: "Cybersecurity",        color: "#3B82F6", delay: "1.9s",  duration: "4.1s" },
  { label: "HR Tech",              color: "#A855F7", delay: "0.6s",  duration: "3.8s" },
  { label: "Data & Analytics",     color: "#F97316", delay: "1.2s",  duration: "5.0s" },
  { label: "Real Estate",          color: "#10B981", delay: "0.3s",  duration: "4.7s" },
  { label: "Investment Banking",   color: "#F5B731", delay: "2.2s",  duration: "4.0s" },
  { label: "Media & Publishing",   color: "#F97316", delay: "1.0s",  duration: "5.3s" },
  { label: "Clean Energy",         color: "#10B981", delay: "1.5s",  duration: "3.9s" },
  { label: "Construction Tech",    color: "#F97316", delay: "1.8s",  duration: "5.1s" },
  { label: "RegTech",              color: "#14B8A6", delay: "0.7s",  duration: "4.2s" },
  { label: "Corporate Gifting",    color: "#F97316", delay: "2.4s",  duration: "4.6s" },
  { label: "Jewellery",            color: "#EC4899", delay: "1.2s",  duration: "4.1s" },
];

function Pill({ label, color, delay, duration }: typeof PILLS[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2 rounded-full cursor-default select-none px-5 py-2.5 text-sm font-semibold"
      style={{
        backgroundColor: hovered ? `${color}15` : "#ffffff",
        border: `1.5px solid ${hovered ? color : `${color}35`}`,
        color: hovered ? color : "#3D3D3D",
        boxShadow: hovered
          ? `0 4px 20px ${color}25, 0 0 0 3px ${color}12`
          : "0 1px 4px rgba(0,0,0,0.06)",
        animation: `bubble-float ${duration} ease-in-out ${delay} infinite`,
        transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
        willChange: "transform",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: color,
          opacity: hovered ? 1 : 0.6,
          flexShrink: 0,
          transition: "opacity 0.2s ease",
        }}
      />
      {label}
    </span>
  );
}

export default function Industries() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="industries-heading"
    >
      {/* Soft background blobs */}
      <div aria-hidden="true" style={{ position:"absolute", top:"-80px", left:"-60px", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"-80px", right:"-60px", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,183,49,0.09) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5 px-3 py-1 rounded-full border"
            style={{ color: "#F5B731", borderColor: "rgba(245,183,49,0.35)", background: "#FEF9EC" }}
          >
            Industries We Serve
          </span>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#0a0a0a]"
          >
            Every B2B sector.{" "}
            <span style={{ color: "#F5B731" }}>One outbound engine</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
            If you sell to businesses, we know how to reach your buyers regardless of vertical.
          </p>
        </div>

        {/* Bubble cloud */}
        <div className="flex flex-wrap justify-center gap-3">
          {PILLS.map((pill) => (
            <Pill key={pill.label} {...pill} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-[#B8B0A7] mt-10">
          Don&rsquo;t see your sector?{" "}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
            style={{ color: "#F5B731" }}
          >
            Let&rsquo;s talk we&rsquo;ve probably done it.
          </a>
        </p>
      </div>
    </section>
  );
}
