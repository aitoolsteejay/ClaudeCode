"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function LpFooter() {
  return (
    <footer className="border-t py-8 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "#8C8279" }}>© 2026 Myntmore. Built in Mumbai.</p>
        <div className="flex items-center gap-6">
          <Link href="/about-us" className="text-xs" style={{ color: "#8C8279" }}>About</Link>
          <Link href="/case-studies" className="text-xs" style={{ color: "#8C8279" }}>Case Studies</Link>
          <Link href="/privacy-policy" className="text-xs" style={{ color: "#8C8279" }}>Privacy Policy</Link>
          <a href="mailto:growth@myntmore.com" className="text-xs" style={{ color: "#8C8279" }}>growth@myntmore.com</a>
        </div>
      </div>
    </footer>
  );
}

export function useFadeInOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function LpLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      {/* Minimal nav */}
      <header className={`lp-header sticky top-0 z-50 border-b ${scrolled ? "lp-header-scrolled" : ""}`} style={{ backgroundColor: "rgba(248,246,242,0.95)", borderColor: "#E8E2D9", backdropFilter: "blur(8px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" aria-label="Myntmore home" className="transition-transform duration-300 hover:scale-105">
            <Image src="/logo.png" alt="Myntmore" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>
          <a href="/founder-meeting"
            className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2 group">
            Book Free GTM Audit
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </header>

      <main>{children}</main>
      <LpFooter />
    </div>
  );
}
