"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICE_LINKS = [
  { label: "LinkedIn Outreach & Automation", href: "/services/linkedin-outreach" },
  { label: "Cold Email Infrastructure", href: "/services/cold-email" },
  { label: "ICP Mapping & Lead Scoring", href: "/services/sales-intelligence" },
  { label: "AI Lead Generation", href: "/services/ai-lead-generation" },
  { label: "Account-Based Marketing", href: "/services/account-based-marketing" },
  { label: "Personal Branding", href: "/services/personal-branding" },
];

const RESOURCE_LINKS = [
  { label: "Blog", href: "/resources/blogs" },
  { label: "Guides", href: "/resources/guides" },
  { label: "The Feed", href: "/resources/feed" },
  { label: "Free Tools", href: "/resources/tools" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Events", href: "/events" },
];

const NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: "services" },
  { label: "Case Studies", href: "/case-studies", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: "resources" },
  { label: "About", href: "/about-us", hasDropdown: false },
  { label: "Careers", href: "/careers", hasDropdown: false },
  { label: "Contact", href: "/contact-us", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md border-b shadow-sm" : ""}`}
      style={scrolled ? { backgroundColor: "rgba(248,246,242,0.92)", borderColor: "#E8E2D9" } : { backgroundColor: "transparent" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group" aria-label="Myntmore home">
            <Image src="/logo.png" alt="Myntmore" width={200} height={56} className="h-10 sm:h-14 w-auto object-contain" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown === "services") {
                return (
                  <div key={link.href} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => { setServicesOpen((v) => !v); setResourcesOpen(false); }}
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative group"
                      style={{ color: "#3D3D3D" }}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "#F5B731" }} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-3 w-72 rounded-xl border shadow-lg py-2 z-50" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                        {SERVICE_LINKS.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm transition-colors duration-150"
                            style={{ color: "#3D3D3D" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FEF9EC"; (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#3D3D3D"; }}
                          >
                            {s.label}
                          </Link>
                        ))}
                        <div className="border-t mt-2 pt-2 px-4" style={{ borderColor: "#E8E2D9" }}>
                          <Link href="/services" onClick={() => setServicesOpen(false)} className="text-xs font-semibold" style={{ color: "#F5B731" }}>
                            View all services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "resources") {
                return (
                  <div key={link.href} className="relative" ref={resourcesRef}>
                    <button
                      onClick={() => { setResourcesOpen((v) => !v); setServicesOpen(false); }}
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative group"
                      style={{ color: "#3D3D3D" }}
                      aria-expanded={resourcesOpen}
                    >
                      {link.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "#F5B731" }} />
                    </button>
                    {resourcesOpen && (
                      <div className="absolute top-full left-0 mt-3 w-52 rounded-xl border shadow-lg py-2 z-50" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                        {RESOURCE_LINKS.map((r) => (
                          <Link
                            key={r.href}
                            href={r.href}
                            onClick={() => setResourcesOpen(false)}
                            className="block px-4 py-2.5 text-sm transition-colors duration-150"
                            style={{ color: "#3D3D3D" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FEF9EC"; (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#3D3D3D"; }}
                          >
                            {r.label}
                          </Link>
                        ))}
                        <div className="border-t mt-2 pt-2 px-4" style={{ borderColor: "#E8E2D9" }}>
                          <Link href="/resources" onClick={() => setResourcesOpen(false)} className="text-xs font-semibold" style={{ color: "#F5B731" }}>
                            View all resources →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-[#0a0a0a] transition-colors duration-200 relative group"
                  style={{ color: "#3D3D3D" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "#F5B731" }} />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="/founder-meeting" className="btn-dark px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-1.5">
              Book a Call
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-3.5 rounded-lg transition-colors"
            style={{ color: "#52525B" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EDE9E4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t px-4 py-4 space-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-sm font-medium"
              style={{ color: "#3D3D3D" }}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 pl-3" style={{ borderColor: "rgba(245,183,49,0.3)" }}>
                {SERVICE_LINKS.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-2 py-2 text-xs rounded-lg transition-colors" style={{ color: "#52525B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EDE9E4"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen((v) => !v)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-sm font-medium"
              style={{ color: "#3D3D3D" }}
            >
              Resources
              <svg className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileResourcesOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 pl-3" style={{ borderColor: "rgba(245,183,49,0.3)" }}>
                {RESOURCE_LINKS.map((r) => (
                  <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)} className="block px-2 py-2 text-xs rounded-lg transition-colors" style={{ color: "#52525B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EDE9E4"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining flat links (excluding Services, Resources, and duplicate Contact) */}
          {NAV_LINKS.filter(l => !l.hasDropdown && l.href !== "/contact-us").map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg text-sm font-medium transition-colors" style={{ color: "#3D3D3D" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EDE9E4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg text-sm font-medium transition-colors" style={{ color: "#3D3D3D" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EDE9E4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
          >
            Contact
          </Link>

          <div className="pt-3 pb-1">
            <a href="/founder-meeting" onClick={() => setMobileOpen(false)} className="btn-dark w-full py-3 text-sm font-semibold text-center block">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
