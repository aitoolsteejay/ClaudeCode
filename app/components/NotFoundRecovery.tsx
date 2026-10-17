"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_SUGGESTIONS = [
  { match: /^\/(tools|resources\/tools)(\/|$)/, eyebrow: "Looking for a free tool?", label: "Browse all tools", href: "/resources/tools" },
  { match: /^\/(blog|resources|guides|glossary)(\/|$)/, eyebrow: "Looking for an article?", label: "Explore resources", href: "/resources" },
  { match: /^\/case-studies(\/|$)/, eyebrow: "Looking for client results?", label: "Browse case studies", href: "/case-studies" },
  { match: /^\/services(\/|$)/, eyebrow: "Looking for a service?", label: "Explore our services", href: "/services" },
  { match: /^\/careers(\/|$)/, eyebrow: "Looking for an opportunity?", label: "See open roles", href: "/careers" },
  { match: /^\/contact(\/|$)/, eyebrow: "Trying to reach us?", label: "Contact Myntmore", href: "/contact-us" },
];

export function NotFoundActions() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push("/");
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={goBack}
        className="rounded-full bg-[#f5b731] px-6 py-3.5 text-sm font-bold text-[#0a0a0a] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b731]"
      >
        Go back
      </button>
      <Link
        href="/"
        className="rounded-full border border-[#0b0b0c]/20 bg-white/75 px-6 py-3.5 text-sm font-bold text-[#0b0b0c] transition-colors hover:border-[#f5b731] hover:bg-[#fff8e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b731]"
      >
        Homepage
      </Link>
    </div>
  );
}

export function ContextualSuggestion() {
  const pathname = usePathname();
  const suggestion = ROUTE_SUGGESTIONS.find((item) => item.match.test(pathname)) ?? {
    eyebrow: "Not sure where to start?",
    label: "Explore Myntmore resources",
    href: "/resources",
  };

  return (
    <Link
      href={suggestion.href}
      className="group mb-4 flex items-center justify-between gap-4 rounded-2xl border border-[rgba(245,183,49,0.35)] bg-[#FEF9EC] px-4 py-3.5 text-[#0a0a0a] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b731]"
    >
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#71675E]">{suggestion.eyebrow}</span>
        <span className="mt-1 block text-sm font-bold sm:text-base">{suggestion.label}</span>
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5b731] text-sm font-black text-[#111111] transition-transform group-hover:scale-105" aria-hidden="true">
        GO
      </span>
    </Link>
  );
}
