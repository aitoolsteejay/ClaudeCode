import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "./components/InnerLayout";

export const metadata: Metadata = {
  title: "404 — No Signal Detected",
  description: "This page isn't showing any buying signals. Here's how to get back to one that is.",
};

const QUICK_LINKS = [
  { label: "Free Tools", href: "/resources/tools" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/resources/blogs" },
  { label: "Site Map", href: "/sitemap" },
];

const SIGNAL_REPORT = [
  { label: "Domain reachable", value: "Yes", ok: true },
  { label: "This exact page", value: "Not found", ok: false },
  { label: "Buying intent detected", value: "None", ok: false },
  { label: "Signals we track daily", value: "40+", ok: null },
];

export default function NotFound() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[70vh] flex items-center" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(124,58,237,0.06) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.18) 0%, rgba(255,160,0,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="mb-6 hero-fade">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.25)" }}>
              404 · No Signal Detected
            </span>
          </div>

          {/* ── Radar scanner ─────────────────────────────────── */}
          <div className="relative w-40 h-40 mx-auto mb-10 hero-fade-d1" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.14)" }} />
            <div className="absolute inset-4 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.16)" }} />
            <div className="absolute inset-8 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.2)" }} />

            {/* sweeping beam */}
            <div className="absolute inset-0 rounded-full overflow-hidden animate-spin" style={{ animationDuration: "3s" }}>
              <div className="absolute inset-0" style={{ background: "conic-gradient(from 0deg, rgba(168,85,247,0.4), transparent 70deg)" }} />
            </div>

            {/* two real signals blipping elsewhere on the radar */}
            <span className="absolute" style={{ top: "26%", left: "68%", width: 8, height: 8 }}>
              <span className="lp-radar-ring" style={{ borderColor: "rgba(168,85,247,0.55)" }} />
              <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#a855f7" }} />
            </span>
            <span className="absolute" style={{ top: "64%", left: "24%", width: 6, height: 6 }}>
              <span className="lp-radar-ring" style={{ borderColor: "rgba(168,85,247,0.45)", animationDelay: "0.8s" }} />
              <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#a855f7", opacity: 0.8 }} />
            </span>

            {/* center: this page never pinged */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white" style={{ border: "2px dashed rgba(220,38,38,0.4)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight hero-fade-d2" style={{ color: "#0a0a0a" }}>
            We monitor 40+ buying signals a day.<br />This page never sent one.
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-lg mx-auto hero-fade-d2" style={{ color: "#52525B" }}>
            No funding round, no hiring spree, no reason to exist. Whatever you were looking for isn&apos;t showing any activity right now. Let&apos;s get you back to a page that is.
          </p>

          {/* ── Signal report card ───────────────────────────── */}
          <div className="max-w-sm mx-auto rounded-2xl border p-5 mb-10 text-left hero-fade-d3" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Signal Report</div>
            <ul className="space-y-2.5">
              {SIGNAL_REPORT.map((s) => (
                <li key={s.label} className="flex items-center justify-between text-sm">
                  <span style={{ color: "#3D3D3D" }}>{s.label}</span>
                  <span className="font-bold" style={{ color: s.ok === true ? "#16a34a" : s.ok === false ? "#dc2626" : "#a855f7" }}>
                    {s.ok === true ? "✓ " : s.ok === false ? "✗ " : ""}{s.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 hero-fade-d3">
            <Link href="/" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Back to Homepage
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/services/sales-intelligence" className="btn-ghost px-8 py-4 text-base font-bold">
              See How We Track Signals
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors"
                style={{ borderColor: "#E8E2D9", color: "#3D3D3D", backgroundColor: "#ffffff" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
