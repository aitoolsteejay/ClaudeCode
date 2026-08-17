import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import CopyBlock from "../../components/CopyBlock";
import FadeIn from "../../components/FadeIn";
import Underline from "./Underline";

export const metadata: Metadata = {
  title: "How to Set Up Vibe Prospecting on Claude for B2B Leads",
  description: "A step-by-step setup guide for the Vibe Prospecting Claude connector, plus 10 ready-to-copy prompts for pulling verified B2B leads by funding, headcount, tech stack, and hiring signals.",
  keywords: [
    "vibe prospecting setup guide",
    "claude connectors for lead generation",
    "ai lead sourcing tool",
    "b2b prospecting by funding stage",
    "find saas leads by tech stack",
    "claude ai b2b lead generation",
    "verified email finder ai",
    "ai prospecting prompts",
    "startup funding lead lists",
    "hiring signal prospecting",
    "claude ai connector guide",
    "b2b lead list builder ai",
  ],
  alternates: { canonical: "https://www.myntmore.com/instagram-resources/how-to-set-up-vibe-prospecting" },
  openGraph: {
    title: "How to Set Up Vibe Prospecting on Claude for B2B Leads",
    description: "Connect Vibe Prospecting to Claude in 7 steps, then run 10 ready-to-copy prompts for verified B2B leads.",
    url: "https://www.myntmore.com/instagram-resources/how-to-set-up-vibe-prospecting",
  },
};

interface SetupStep {
  title: string;
  detail: React.ReactNode;
}

const SETUP_STEPS: SetupStep[] = [
  { title: "Log into Claude", detail: <>Head to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>claude.ai</a>.</> },
  { title: "Click the \"+\" icon", detail: "Bottom left of the chat interface." },
  { title: "Click \"Connectors\"", detail: "Opens the connectors tab." },
  { title: "Click \"Manage Connectors\"", detail: null },
  {
    title: "Add \"Vibe Prospecting\"",
    detail: (
      <>
        Search for it: <a href="https://www.vibeprospecting.ai/" target="_blank" rel="noopener noreferrer" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>vibeprospecting.ai</a>. Hit connect.
      </>
    ),
  },
  { title: "Authorize Access", detail: "Complete the login / API connection. Takes 2 minutes." },
  { title: "Confirm It's Active", detail: "You'll see it toggled on under your connectors." },
];

interface PromptEntry {
  title: string;
  prompt: string;
}

const ADVANCED_PROMPTS: PromptEntry[] = [
  {
    title: "Funding-Based",
    prompt: "Find 50 US SaaS startups that raised $10M–$50M in the last 12 months. Include: founder/CEO name, LinkedIn, verified email, total funding, latest round, investors, headcount, industry niche.",
  },
  {
    title: "Recently Raised $30M+",
    prompt: "Find 40 SaaS companies that raised $30M+ Series A or B recently. Target founders or CEOs. Include verified contact info and funding details.",
  },
  {
    title: "YC-Backed",
    prompt: "Find 50 Y Combinator-backed SaaS startups in the US. Include: founder names, batch year, LinkedIn, email, website, company description.",
  },
  {
    title: "High-Growth (Headcount Signal)",
    prompt: "Find 50 B2B SaaS companies that grew headcount by 30%+ in the last 6 months. Target founders, CEOs, Heads of Growth. Provide verified emails.",
  },
  {
    title: "Revenue Range",
    prompt: "Find 40 SaaS companies doing $1M–$10M ARR. Target founders. Include contact data and revenue estimate.",
  },
];

const ICP_PROMPTS: PromptEntry[] = [
  {
    title: "By Niche",
    prompt: "Find 40 HR-tech SaaS founders in the US. Criteria: 10–100 employees, raised seed or Series A, selling to enterprises. Include full contact info and funding details.",
  },
  {
    title: "By Tech Stack",
    prompt: "Find 50 SaaS companies using HubSpot + Salesforce. Target VP Marketing or Founder. Provide verified emails and LinkedIn.",
  },
  {
    title: "By Geography",
    prompt: "Find 30 SaaS founders in New York and California. Company size 20–200 employees. Raised funding in the last 18 months.",
  },
  {
    title: "By Hiring Signal",
    prompt: "Find SaaS companies actively hiring for: AI Engineer, Growth Manager, or SDR. Include founder/CEO contact info.",
  },
];

const MASTER_TEMPLATE = `Find [number] companies in [industry] located in [geography].
Criteria:
* Company size: [range]
* Revenue: [range]
* Funding stage: [stage]
* Hiring signal: [role]
* Tech stack: [tools]

Target decision-makers:
* [role 1]
* [role 2]

Include: full name, role, LinkedIn, verified email, phone (if available), company website, funding info.
Return in a structured table.`;

const FIRST_PROMPT = "Find 30 US-based SaaS founders. Include: full name, LinkedIn, verified email, company name, website, employee count, industry. Return in a structured table. Export as CSV.";

const ACCENT = "#8b5cf6";
const ACCENT_BG = "rgba(139,92,246,0.08)";

function PromptCard({ title, prompt }: { title: string; prompt: string }) {
  return (
    <div className="rounded-xl border p-4 sm:p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
      <h4 className="text-sm font-black mb-3" style={{ color: ACCENT }}>{title}</h4>
      <CopyBlock text={prompt} accent={ACCENT} label="Copy this prompt" />
    </div>
  );
}

export default function VibeProspectingGuide() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="pt-32 pb-14 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: "How to Set Up Vibe Prospecting", href: "/instagram-resources/how-to-set-up-vibe-prospecting" }]} />
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(139,92,246,0.08)", color: ACCENT, border: "1px solid rgba(139,92,246,0.3)" }}>
            Free Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            How to Set Up{" "}
            <span className="relative inline-block">
              Vibe Prospecting
              <Underline color={ACCENT} />
            </span>{" "}
            on Claude
          </h1>
          <p className="text-base sm:text-lg font-semibold mb-5 hero-fade-d1" style={{ color: ACCENT }}>
            And actually use it for B2B leads. A Claude connector that pulls verified names, emails, and LinkedIn profiles straight into your chat, no separate tool to log into.
          </p>
          <p className="text-base leading-relaxed hero-fade-d2" style={{ color: "#52525B" }}>
            <a href="https://www.linkedin.com/in/tejasjhaveri/" target="_blank" rel="noopener noreferrer" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>Tejas</a>{" "}
            isn&apos;t your average marketer. He&apos;s a 4x entrepreneur who built Flintstop, a D2C eCommerce brand, into a $6M-a-year machine, shipping out 8,000 orders a day before selling the business in 2020. At{" "}
            <a href="https://www.myntmore.com/" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>Myntmore</a>, his growth marketing agency, he&apos;s partnered with over 300 clients to generate $80M+ in revenue. He&apos;s a TEDx speaker, been a Growth Marketing professor to over 100,000 students, and a strategist who knows how to make marketing actually work. Now, he&apos;s here to do it for you.
          </p>
        </div>
      </section>

      {/* Step-by-step setup */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Step-by-Step Setup</h2>
            <p className="text-sm sm:text-base mb-6" style={{ color: "#8C8279" }}>7 steps. About 5 minutes.</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-2xl border p-5 sm:p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <ol className="space-y-4">
                {SETUP_STEPS.map((s, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                      style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm sm:text-base font-bold" style={{ color: "#0a0a0a" }}>{s.title}</p>
                      {s.detail && <p className="text-sm leading-relaxed mt-0.5" style={{ color: "#3D3D3D" }}>{s.detail}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="rounded-xl p-4 sm:p-5 mt-4" style={{ backgroundColor: ACCENT_BG, border: `1px solid ${ACCENT}30` }}>
              <p className="text-sm sm:text-base font-semibold leading-relaxed" style={{ color: "#0a0a0a" }}>
                ✔ You also get 400 free credits just for signing up. Done, you&apos;re ready to pull leads.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* First prompt */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>First Prompt to Run</h2>
            <p className="text-sm sm:text-base mb-6" style={{ color: "#8C8279" }}>Start simple. Get a feel for the output format before going deep.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <CopyBlock text={FIRST_PROMPT} accent={ACCENT} label="Copy this prompt" />
          </FadeIn>
        </div>
      </section>

      {/* Advanced targeting prompts */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: "#0a0a0a" }}>Advanced Targeting Prompts</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ADVANCED_PROMPTS.map((p) => (
                <PromptCard key={p.title} title={p.title} prompt={p.prompt} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hyper-specific ICP prompts */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: "#0a0a0a" }}>Hyper-Specific ICP Prompts</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ICP_PROMPTS.map((p) => (
                <PromptCard key={p.title} title={p.title} prompt={p.prompt} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Master prompt template */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#0a0a0a" }}>Master Prompt Template</h2>
            <p className="text-sm sm:text-base mb-6" style={{ color: "#8C8279" }}>Copy this, fill it in, run it.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <CopyBlock text={MASTER_TEMPLATE} accent={ACCENT} label="Copy this template" />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="rounded-xl p-4 sm:p-5 mt-6" style={{ backgroundColor: ACCENT_BG, border: `1px solid ${ACCENT}30` }}>
              <p className="text-sm sm:text-base font-semibold leading-relaxed" style={{ color: "#0a0a0a" }}>
                👉 Set it up, run a test prompt, and see what comes back. The funding + hiring signal combos tend to give the tightest lists.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e" }}>
              <h2 className="text-2xl sm:text-3xl font-black mb-6 text-white">💬 Keep the momentum going</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a
                  href="https://www.instagram.com/tejas_jhaveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span className="block text-2xl mb-2">📸</span>
                  <span className="block text-sm font-bold text-white mb-1">Follow along</span>
                  <span className="block text-xs" style={{ color: "#9ca3af" }}>@tejas_jhaveri</span>
                </a>
                <a
                  href="https://calendly.com/founder-myntmore/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span className="block text-2xl mb-2">📅</span>
                  <span className="block text-sm font-bold text-white mb-1">Book a call</span>
                  <span className="block text-xs" style={{ color: "#9ca3af" }}>Complimentary strategy session</span>
                </a>
                <a
                  href="mailto:founder@myntmore.com"
                  className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span className="block text-2xl mb-2">📬</span>
                  <span className="block text-sm font-bold text-white mb-1">Email us</span>
                  <span className="block text-xs" style={{ color: "#9ca3af" }}>founder@myntmore.com</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </InnerLayout>
  );
}
