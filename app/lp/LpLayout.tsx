"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

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
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      <Navbar />
      <main>{children}</main>
      <LpFooter />
    </div>
  );
}
