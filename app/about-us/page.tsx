import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";
import StatTicker from "../components/StatTicker";
import LeadCaptureForm from "../components/LeadCaptureForm";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Tejas Jhaveri | B2B Growth Expert & Founder of Myntmore",
  description: "Tejas Jhaveri is a TEDx speaker, B2B growth expert, and founder of Myntmore, Mumbai's leading AI-powered outbound agency. 10+ years of lead generation expertise.",
  alternates: { canonical: "https://myntmore.com/about-us" },
  openGraph: {
    title: "About Tejas Jhaveri | B2B Growth Expert & Founder of Myntmore",
    description: "Tejas Jhaveri is a TEDx speaker, B2B growth expert, and founder of Myntmore. 12K+ meetings booked, $120M+ pipeline generated. Taught at IIT & IIM.",
    url: "https://myntmore.com/about-us",
  },
};

// Same Person the Organization schema (lib/schema.ts) references as
// founder, fleshed out here with the fields that belong on a bio page.
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tejas Jhaveri",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Myntmore",
    url: SITE_URL,
  },
  description: "Tejas Jhaveri is a TEDx speaker, angel investor, and B2B growth expert based in Mumbai, with over 10 years of B2B lead generation experience. He founded Myntmore in 2019 and has taught B2B growth methodologies at IIT and IIM.",
  sameAs: ["https://linkedin.com/in/tejasjhaveri"],
};

const CREDENTIALS = [
  { stat: "12K+", label: "Meetings booked", accent: "#F5B731" },
  { stat: "$120M+", label: "Pipeline generated", accent: "#3b82f6" },
  { stat: "120+", label: "B2B companies served", accent: "#10b981" },
  { stat: "10+", label: "Years in lead generation", accent: "#a855f7" },
];

const EXPERTISE = [
  { label: "AI Lead Generation", href: "/services/ai-lead-generation" },
  { label: "LinkedIn Strategy", href: "/services/linkedin-outreach" },
  { label: "Personal Branding", href: "/services/personal-branding" },
  { label: "Cold Email Infrastructure", href: "/services/cold-email" },
  { label: "B2B Pipeline Engineering", href: "/services" },
];

export default function AboutUs() {
  return (
    <InnerLayout>
      <JsonLd data={PERSON_SCHEMA} />
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              About Myntmore
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Built by a founder who figured outbound out the hard way
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Tejas Jhaveri is a TEDx speaker, angel investor, and B2B growth expert based in Mumbai, with over 10 years of lead generation experience. He founded Myntmore in 2019, and the team has since booked 12,000+ meetings and generated $120M+ in pipeline for 120+ B2B companies.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-y" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
        <FadeIn><div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {CREDENTIALS.map((c) => (
            <div key={c.stat} className="text-center">
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: c.accent }}><StatTicker value={c.stat} /></div>
              <div className="text-xs" style={{ color: "#6B6B6B" }}>{c.label}</div>
            </div>
          ))}
        </div></FadeIn>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Photo + name card */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border" style={{ backgroundColor: "#EDE9E4", borderColor: "#E8E2D9" }}>
              <Image
                src="/tejas.png"
                alt="Tejas Jhaveri, Founder of Myntmore"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-black mb-1" style={{ color: "#0a0a0a" }}>Tejas Jhaveri</h2>
              <p className="text-sm mb-4" style={{ color: "#8C8279" }}>Founder, Myntmore · TEDx Speaker · Angel Investor</p>
              <a href="https://linkedin.com/in/tejasjhaveri" target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                Connect on LinkedIn
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* Bio + philosophy */}
          <div className="space-y-6">
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
                Tejas Jhaveri founded Myntmore in Mumbai in 2019, originally as an e-commerce and growth agency helping D2C brands build and run their online storefronts. Between 2023 and 2024, the team repositioned entirely around B2B outbound: cold email, LinkedIn outreach, and account-based marketing for founders and sales teams who need a predictable pipeline without hiring an in-house SDR team.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
                Tejas himself is a TEDx speaker, angel investor, and B2B growth expert with over 10 years of lead generation experience. As a growth educator, he has taught B2B methodologies at IIT and IIM, helping shape the next generation of growth professionals in India.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                Myntmore is Mumbai&apos;s leading AI-powered B2B outbound agency. We build and run cold email, LinkedIn outreach, and ABM systems that book qualified meetings. 12K+ meetings booked. $120M+ pipeline generated.
              </p>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#F5B731" }}>Company Philosophy</h3>
              <p className="text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                We&apos;re not a generalist agency. We specialise in one thing: building B2B pipelines that don&apos;t depend on luck, referrals, or one brilliant SDR. Our philosophy is that outbound is an engineering problem, not a hustle problem.
              </p>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <blockquote className="text-lg font-black leading-snug mb-3" style={{ color: "#0a0a0a" }}>
                &ldquo;Stop treating outbound like an art form. Build it like a software product.&rdquo;
              </blockquote>
              <cite className="text-sm not-italic" style={{ color: "#8C8279" }}>- Tejas Jhaveri, Founder</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Core Expertise</h2>
          <FadeIn delay={80}><div className="flex flex-wrap gap-3">
            {EXPERTISE.map((e) => (
              <Link key={e.href} href={e.href} className="chip-hover inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#3D3D3D" }}>
                {e.label}
              </Link>
            ))}
          </div></FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#0a0a0a" }}>Let&apos;s talk about your pipeline</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Book a 30-minute strategy call. We&apos;ll audit your outreach, map your ICP, and tell you exactly what&apos;s holding your pipeline back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/founder-meeting" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="mailto:growth@myntmore.com" className="btn-ghost px-8 py-4 text-base font-bold">
              Email Directly
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "#8C8279" }}>No commitments. No agency pitch decks. Just a real conversation about your pipeline.</p>
        </div>
      </section>

      <LeadCaptureForm />
    </InnerLayout>
  );
}
