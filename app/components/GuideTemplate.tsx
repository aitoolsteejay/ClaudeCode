import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import FadeIn from "./FadeIn";

interface GuideHeroProps {
  current: string;
  href: string;
  eyebrow: string;
  titleBefore?: string;
  highlight: string;
  titleAfter?: string;
  subtitle?: string;
  description: React.ReactNode;
  accent: string;
  children?: React.ReactNode;
}

export function GuideHero({ current, href, eyebrow, titleBefore, highlight, titleAfter, subtitle, description, accent, children }: GuideHeroProps) {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
      <div aria-hidden="true" className="absolute rounded-full pointer-events-none animate-[bubble-float_10s_ease-in-out_infinite]" style={{ top: "-180px", left: "-180px", width: 680, height: 680, background: `radial-gradient(circle,${accent}35 0%,${accent}12 42%,transparent 70%)`, filter: "blur(55px)" }} />
      <div aria-hidden="true" className="absolute rounded-full pointer-events-none animate-[bubble-float_12s_ease-in-out_infinite_reverse]" style={{ top: "-130px", right: "-190px", width: 620, height: 620, background: "radial-gradient(circle,rgba(245,183,49,0.22) 0%,rgba(245,183,49,0.07) 42%,transparent 70%)", filter: "blur(55px)" }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: current, href }]} />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: `${accent}45`, backgroundColor: `${accent}12` }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
          <span className="text-xs font-black uppercase tracking-[0.15em]" style={{ color: accent }}>{eyebrow}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
          {titleBefore}{titleBefore ? " " : ""}<span className="relative inline-block">{highlight}<svg className="absolute -bottom-2 left-0 w-full overflow-visible" height="12" viewBox="0 0 360 14" preserveAspectRatio="none" aria-hidden="true"><path d="M4 9 Q90 3 180 9 Q270 15 356 7" stroke={accent} strokeWidth="3.5" fill="none" strokeLinecap="round" className="[stroke-dasharray:400] [stroke-dashoffset:400] animate-[guide-draw_1.1s_0.45s_ease_forwards]" /></svg></span>{titleAfter ? ` ${titleAfter}` : ""}
        </h1>
        {subtitle && <p className="text-base sm:text-lg font-bold mb-4 hero-fade-d1" style={{ color: accent }}>{subtitle}</p>}
        <div className="text-base sm:text-lg leading-relaxed max-w-3xl hero-fade-d2" style={{ color: "#52525B" }}>{description}</div>
        {children && <div className="mt-8 hero-fade-d3">{children}</div>}
      </div>
    </section>
  );
}

export function GuideCTA({ title = "Put the playbook into action" }: { title?: string }) {
  return (
    <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="relative rounded-[28px] p-8 sm:p-12 text-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e", boxShadow: "0 20px 55px rgba(0,0,0,0.16)" }}>
            <div aria-hidden="true" className="absolute -top-24 -right-20 w-64 h-64 rounded-full animate-[bubble-float_8s_ease-in-out_infinite]" style={{ background: "radial-gradient(circle,rgba(245,183,49,0.2),transparent 70%)" }} />
            <span className="relative inline-flex text-xs font-black uppercase tracking-[0.18em] mb-4" style={{ color: "#F5B731" }}>What&apos;s next</span>
            <h2 className="relative text-2xl sm:text-3xl font-black mb-3 text-white">{title}</h2>
            <p className="relative text-sm mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>Keep learning, talk through your pipeline, or reach the team directly.</p>
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a href="https://www.instagram.com/tejas_jhaveri" target="_blank" rel="noopener noreferrer" className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1" style={{ border: "1px solid rgba(255,255,255,0.15)" }}><span className="block text-sm font-black text-white mb-1">Follow on Instagram</span><span className="block text-xs" style={{ color: "#9ca3af" }}>@tejas_jhaveri</span></a>
              <Link href="/founder-meeting" className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1" style={{ border: "1px solid rgba(245,183,49,0.35)", backgroundColor: "rgba(245,183,49,0.08)" }}><span className="block text-sm font-black text-white mb-1">Book a strategy call</span><span className="block text-xs" style={{ color: "#F5B731" }}>Complimentary session</span></Link>
              <a href="mailto:founder@myntmore.com" className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1" style={{ border: "1px solid rgba(255,255,255,0.15)" }}><span className="block text-sm font-black text-white mb-1">Email Myntmore</span><span className="block text-xs" style={{ color: "#9ca3af" }}>founder@myntmore.com</span></a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
