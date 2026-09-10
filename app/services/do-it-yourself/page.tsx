import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Do It Yourself (Coming Soon)",
  description: "Our self-serve, do-it-yourself offering is on its way. In the meantime, explore our done-for-you B2B lead generation services.",
  robots: { index: false, follow: false },
};

export default function DoItYourselfPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-24 px-4 min-h-[70vh] flex items-center" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Do It Yourself", href: "/services/do-it-yourself" }]} className="justify-center" />
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Do It Yourself
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "#52525B" }}>
            We&apos;re building a self-serve way to run your own outbound. This page will be live soon, check back shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/services" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Explore our Done-for-You Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/founder-meeting" className="btn-ghost px-8 py-4 text-base font-bold">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
