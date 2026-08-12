import Link from "next/link";
import InnerLayout from "./components/InnerLayout";

const QUICK_LINKS = [
  { label: "Free Tools", href: "/resources/tools" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/resources/blogs" },
  { label: "Site Map", href: "/sitemap" },
];

export default function NotFound() {
  return (
    <InnerLayout>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[70vh] flex items-center" style={{ backgroundColor: "#F8F6F2" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-140px", left: "-160px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,160,0,0.08) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-160px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.07) 40%, transparent 68%)", filter: "blur(55px)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              404
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0a0a0a" }}>
            This page took a wrong turn in the pipeline
          </h1>
          <p className="text-base sm:text-lg mb-10 max-w-lg mx-auto" style={{ color: "#52525B" }}>
            Whatever you were looking for isn&apos;t here anymore, or never was. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Back to Homepage
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="/founder-meeting" className="btn-ghost px-8 py-4 text-base font-bold">
              Book a Call
            </a>
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
