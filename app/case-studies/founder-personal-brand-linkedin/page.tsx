import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "Bootstrapped Founder: 0 to 22K Followers and 8 Inbound Deals",
  description: "How Myntmore built a B2B founder's LinkedIn personal brand from scratch, reaching 22K followers, 6.2% engagement rate, and 8 inbound deals in under 6 months.",
  alternates: { canonical: "https://www.myntmore.com/case-studies/founder-personal-brand-linkedin" },
  openGraph: {
    title: "0 → 22K Followers & 8 Inbound Deals | Founder Brand Case Study | Myntmore",
    description: "22K followers · 8 inbound deals · 6.2% engagement rate",
    url: "https://www.myntmore.com/case-studies/founder-personal-brand-linkedin",
  },
};

export default function FounderPersonalBrandLinkedIn() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="link-subtle text-xs font-semibold">Case Studies</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>B2B Founder</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#f97316", border: "1px solid rgba(249,115,22,0.2)" }}>B2B Founder · Bootstrapped</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Bootstrapped founder went from 0 to 22K followers and 8 inbound deals
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#52525B" }}>
            A bootstrapped B2B founder had expert-level knowledge but zero online presence. Word of mouth was maxed out. We built their personal brand from scratch on LinkedIn.
          </p>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            {[{ v: "22K", l: "LinkedIn followers" }, { v: "8", l: "Inbound deals" }, { v: "6.2%", l: "Engagement rate" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The problem</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              The founder ran a profitable B2B consulting firm but had grown almost entirely through referrals. Growth had plateaued. Referrals can only scale so far. They had deep expertise in operations and supply chain but no way to communicate that to a wider audience. Their LinkedIn profile had 400 connections and hadn&apos;t been posted on in two years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The solution</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              We ran a full brand strategy session to extract their core POV and identify the content pillars that would resonate with their ideal clients: mid-market ops leaders and supply chain directors. We ghostwrote 3 posts per week, built a commenting strategy to grow reach organically, and paired it with a targeted LinkedIn DM sequence to warm up their ideal buyers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["3 posts/week ghostwritten", "Targeted commenting strategy", "Warm DM sequence to ICPs"].map((item) => (
                <div key={item} className="rounded-xl p-4 border text-sm font-semibold" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", color: "#3D3D3D" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              {[{ v: "22K", l: "LinkedIn followers gained" }, { v: "8", l: "Inbound deals in 6 months" }, { v: "6.2%", l: "Average engagement rate" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black" style={{ color: "#f97316" }}><StatTicker value={s.v} /></div>
                  <div className="text-xs mt-1" style={{ color: "#8C8279" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed mt-6" style={{ color: "#52525B" }}>
              In 6 months the founder grew from under 500 to 22K followers, with a 6.2% average engagement rate, well above the 1–2% LinkedIn average. More importantly, 8 inbound deals came directly through LinkedIn DMs from people who had been following the content.
            </p>
          </div>

          <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#FFF7ED", borderColor: "#f97316" }}>
            <p className="text-lg font-semibold italic mb-3" style={{ color: "#0a0a0a" }}>
              &ldquo;I was sceptical that LinkedIn could actually drive revenue. Six months later it&apos;s our number one source of new business. The content doesn&apos;t just get likes. It brings in clients.&rdquo;
            </p>
            <p className="text-sm font-bold" style={{ color: "#f97316" }}>Founder, B2B Operations Consulting</p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Services used</h2>
            <div className="flex flex-wrap gap-3">
              {["Personal Branding", "LinkedIn Outreach", "GTM Strategy"].map((s) => (
                <span key={s} className="text-sm px-4 py-2 rounded-full font-semibold" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <LeadCaptureForm />
        </div>
      </section>
    </InnerLayout>
  );
}
