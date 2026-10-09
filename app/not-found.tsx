import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "./components/InnerLayout";
import { ContextualSuggestion, NotFoundActions } from "./components/NotFoundRecovery";

export const metadata: Metadata = {
  title: "404: This page went outbound",
  description: "This Myntmore page could not be found. Find your way back to our services, case studies, or contact page.",
  robots: { index: false, follow: true },
};

const PRIMARY_LINKS = [
  { label: "Explore services", href: "/services", eyebrow: "Build your engine", tone: "yellow" },
  { label: "See case studies", href: "/case-studies", eyebrow: "Proof, not promises", tone: "purple" },
  { label: "Talk to Myntmore", href: "/contact-us", eyebrow: "Start a conversation", tone: "blue" },
];

export default function NotFound() {
  return (
    <InnerLayout>
      <main className="relative isolate overflow-hidden bg-[#F8F6F2] px-4 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#f5b731]/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-[#a855f7]/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#60a5fa]/10 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <section className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f5b731]/50 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#b66c00] shadow-sm backdrop-blur">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="not-found-signal absolute inset-0 rounded-full bg-[#f5b731]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#f5b731]" />
                </span>
                404 · signal lost
              </div>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.06em] text-[#090909] sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
                <span className="block">This page</span>
                <span className="block text-[#f5b731]">went outbound.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b5862] sm:text-xl">
                We checked the list, followed up, and still could not find it. Let&apos;s get you back to something useful.
              </p>

              <NotFoundActions />
            </section>

            <section aria-label="Quick links" className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_80px_rgba(30,20,60,0.12)] backdrop-blur sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#e8e4dc] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b948a]">Recovery menu</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[#101010]">Pick a better route</h2>
                  </div>
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5b731] text-2xl font-black text-[#0b0b0c] shadow-[6px_6px_0_#a855f7]">404</div>
                </div>

                <ContextualSuggestion />

                <div className="space-y-3">
                  {PRIMARY_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="group flex items-center gap-4 rounded-2xl border border-[#e8e4dc] bg-white px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-[#f5b731] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b731]">
                      <span className={`h-12 w-12 shrink-0 rounded-xl ${link.tone === "yellow" ? "bg-[#fff3cf]" : link.tone === "purple" ? "bg-[#f1e8ff]" : "bg-[#e5f4ff]"}`} aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#9b948a]">{link.eyebrow}</span>
                        <span className="mt-1 block text-base font-bold text-[#171717]">{link.label}</span>
                      </span>
                      <span className="ml-auto text-xl text-[#9b948a] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-[#77716a]">If you followed a link here, it may have moved or retired. The routes above are all live.</p>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-12 hidden h-16 w-16 rotate-12 rounded-2xl border-4 border-white bg-[#a855f7] shadow-xl sm:block" />
              <div aria-hidden="true" className="absolute -right-4 -top-8 hidden h-16 w-16 -rotate-12 rounded-2xl border-4 border-white bg-[#60a5fa] shadow-xl sm:block" />
            </section>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#ded8cf] pt-6 text-sm text-[#8b847c]">
            <span>Myntmore · outbound systems with intent</span>
            <Link href="/contact-us" className="font-semibold text-[#3d3d3d] underline decoration-[#f5b731] decoration-2 underline-offset-4">Need help finding something?</Link>
          </div>
        </div>
      </main>
    </InnerLayout>
  );
}
