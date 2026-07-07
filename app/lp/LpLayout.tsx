"use client";

import Image from "next/image";
import Link from "next/link";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Minimal nav — logo + single CTA */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "rgba(248,246,242,0.95)", borderColor: "#E8E2D9", backdropFilter: "blur(8px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" aria-label="Myntmore home">
            <Image src="/logo.png" alt="Myntmore" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>
          <a href="https://calendly.com/founder-myntmore/web" target="_blank" rel="noopener noreferrer"
            className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2">
            Book Free GTM Audit
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal footer */}
      <footer className="border-t py-8 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#8C8279" }}>© 2026 Myntmore. Built in Mumbai.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="text-xs" style={{ color: "#8C8279" }}>About</Link>
            <Link href="/case-studies" className="text-xs" style={{ color: "#8C8279" }}>Case Studies</Link>
            <a href="mailto:growth@myntmore.com" className="text-xs" style={{ color: "#8C8279" }}>growth@myntmore.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
