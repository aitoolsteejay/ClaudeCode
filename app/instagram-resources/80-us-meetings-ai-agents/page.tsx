import type { Metadata } from "next";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import InnerLayout from "../../components/InnerLayout";
import CopyBlock from "../../components/CopyBlock";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";
import Underline from "./Underline";

export const metadata: Metadata = {
  title: "80+ US Meetings Booked in 1 Month with AI Agents",
  description: "The exact AI-agent blueprint behind 800 LinkedIn connections, 80+ US B2B meetings, and 4 new clients a month, fully automated with n8n, Apollo/Clay, and AI enrichment.",
  alternates: { canonical: "https://myntmore.com/instagram-resources/80-us-meetings-ai-agents" },
  openGraph: {
    title: "80+ US Meetings Booked in 1 Month with AI Agents",
    description: "800 connections/month → 80+ US meetings/month → 4 new clients/month. The full AI-agent blueprint.",
    url: "https://myntmore.com/instagram-resources/80-us-meetings-ai-agents",
  },
};

const HERO_STATS = [
  { v: "800", l: "Connection requests / mo" },
  { v: "80+", l: "US meetings booked / mo" },
  { v: "4", l: "New clients / mo" },
  { v: "90%", l: "Fully automated" },
];

function Chip({ text, accent, accentBg }: { text: string; accent: string; accentBg: string }) {
  return (
    <span
      className="text-xs sm:text-[13px] font-semibold px-3 py-1.5 rounded-full inline-block"
      style={{ backgroundColor: accentBg, color: accent, border: `1px solid ${accent}30` }}
    >
      {text}
    </span>
  );
}

function ChipGroup({ items, accent, accentBg }: { items: string[]; accent: string; accentBg: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Chip key={t} text={t} accent={accent} accentBg={accentBg} />
      ))}
    </div>
  );
}

function MiniCard({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <div className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
      <h4 className="text-sm font-black mb-3" style={{ color: accent }}>{title}</h4>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3D3D3D" }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NumberedList({ items, accent, accentBg }: { items: string[]; accent: string; accentBg: string }) {
  return (
    <ol className="space-y-2.5">
      {items.map((s, i) => (
        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
            style={{ backgroundColor: accentBg, color: accent }}
          >
            {i + 1}
          </span>
          {s}
        </li>
      ))}
    </ol>
  );
}

function Callout({ children, accent, accentBg }: { children: React.ReactNode; accent: string; accentBg: string }) {
  return (
    <div className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: accentBg, border: `1px solid ${accent}30` }}>
      <p className="text-sm sm:text-base font-semibold leading-relaxed" style={{ color: "#0a0a0a" }}>{children}</p>
    </div>
  );
}

function FlowChips({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#0a0a0a", color: accent }}>
            {s}
          </span>
          {i < steps.length - 1 && <span style={{ color: "#8C8279" }}>→</span>}
        </span>
      ))}
    </div>
  );
}

function StepSection({
  number,
  emoji,
  title,
  subtitle,
  accent,
  accentBg,
  children,
}: {
  number: string;
  emoji: string;
  title: string;
  subtitle?: string;
  accent: string;
  accentBg: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-black" style={{ color: accent }}>{number}</span>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: accentBg, color: accent, border: `1px solid ${accent}30` }}>
              Step {number}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2 leading-tight" style={{ color: "#0a0a0a" }}>
            <span className="mr-2">{emoji}</span>
            {title}
          </h2>
          {subtitle && <p className="text-sm sm:text-base font-medium mb-6" style={{ color: accent }}>{subtitle}</p>}
        </FadeIn>

        <FadeIn delay={100}>
          <div className={subtitle ? "space-y-6" : "space-y-6 mt-6"}>{children}</div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function AiAgentsMeetingsBlueprint() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="pt-32 pb-14 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Guides</span>
          </div>
          <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "#FEF3EC", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>
            Free Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            80+ US Meetings Booked In 1 Month{" "}
            <span className="relative inline-block">
              with AI Agents
              <Underline color="#F97316" />
            </span>
          </h1>
          <p className="text-base sm:text-lg font-semibold mb-5 hero-fade-d1" style={{ color: "#F97316" }}>
            80+ US B2B Meetings/Month, Fully AI-Driven. A step-by-step blueprint you can copy, tweak, and run tomorrow.
          </p>
          <p className="text-base leading-relaxed hero-fade-d2 mb-8" style={{ color: "#52525B" }}>
            <a href="https://www.linkedin.com/in/tejasjhaveri/" target="_blank" rel="noopener noreferrer" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>Tejas</a>{" "}
            isn&apos;t your average marketer. He&apos;s a 4x entrepreneur who built Flintstop, a D2C eCommerce brand, into a $6M-a-year machine, shipping out 8,000 orders a day before selling the business in 2020. At{" "}
            <a href="https://myntmore.com/" className="link-subtle font-semibold" style={{ color: "#0a0a0a" }}>Myntmore</a>, his growth marketing agency, he&apos;s partnered with over 300 clients to generate $80M+ in revenue. He&apos;s a TEDx speaker, been a Growth Marketing professor to over 100,000 students, and a strategist who knows how to make marketing actually work. Now, he&apos;s here to do it for you.
          </p>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              {HERO_STATS.map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                  <div className="text-[11px] sm:text-xs mt-1 leading-tight" style={{ color: "#8C8279" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Step 1: Foundations */}
      <StepSection number="1" emoji="🎯" title="Foundations (Before Automation)" accent="#F97316" accentBg="rgba(249,115,22,0.08)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h4 className="text-sm font-black mb-3" style={{ color: "#F97316" }}>✔ ICP Locked</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#8C8279" }}>Roles</p>
                <ChipGroup items={["Founders", "CEOs", "COOs", "Partners", "VP Sales"]} accent="#F97316" accentBg="rgba(249,115,22,0.08)" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#8C8279" }}>Industries</p>
                <ChipGroup items={["SaaS", "Consulting", "Manufacturing", "Recruitment"]} accent="#F97316" accentBg="rgba(249,115,22,0.08)" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#8C8279" }}>Geo</p>
                <ChipGroup items={["United States"]} accent="#F97316" accentBg="rgba(249,115,22,0.08)" />
              </div>
            </div>
          </div>

          <MiniCard
            title="✔ Triggers"
            items={["Scaling teams", "Launching new products", "Hiring aggressively", "Active on LinkedIn"]}
            accent="#F97316"
          />

          <div className="rounded-xl p-5 flex flex-col justify-center" style={{ backgroundColor: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.3)" }}>
            <h4 className="text-sm font-black mb-3" style={{ color: "#F97316" }}>✔ Value Proposition</h4>
            <p className="text-sm italic leading-relaxed" style={{ color: "#0a0a0a" }}>
              &quot;We help B2B founders book predictable sales meetings using AI agents + laser-targeted outbound.&quot;
            </p>
          </div>
        </div>
      </StepSection>

      {/* Step 2: Prospect Discovery Engine */}
      <StepSection number="2" emoji="🔎" title="Prospect Discovery Engine" subtitle="n8n + Apollo/Clay" accent="#16a34a" accentBg="rgba(34,197,94,0.08)">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8C8279" }}>Daily automated lead pull, 6 AM IST</p>
          <FlowChips steps={["n8n", "Apollo/Clay API", "Airtable/Sheet"]} accent="#16a34a" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Filters</h4>
            <ChipGroup items={["US-based", "Founder/CXO-level", "5–200 employees", "Relevant industries"]} accent="#16a34a" accentBg="rgba(34,197,94,0.08)" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Nodes in the workflow</h4>
            <NumberedList
              items={["Cron Node, triggers daily run", "HTTP Request Node (Apollo/Clay API)", "Set Node, clean fields", "IF Node, remove duplicates", "Airtable/Google Sheet Node, store leads"]}
              accent="#16a34a"
              accentBg="rgba(34,197,94,0.08)"
            />
          </div>
        </div>

        <Callout accent="#16a34a" accentBg="rgba(34,197,94,0.08)">
          👉 Your day&apos;s prospect list is fully ready by the time you wake up.
        </Callout>
      </StepSection>

      {/* Step 3: AI Background Enrichment */}
      <StepSection number="3" emoji="🧠" title="AI Background Enrichment" subtitle="Profile + Website + News" accent="#a855f7" accentBg="rgba(168,85,247,0.08)">
        <p className="text-sm sm:text-base" style={{ color: "#3D3D3D" }}>For each new lead, n8n runs 3 parallel scrapes:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MiniCard title="a) LinkedIn Activity Scrape" items={["Recent posts", "Topics they talk about", "About section", "Featured links"]} accent="#a855f7" />
          <MiniCard title="b) Website Intelligence Scrape" items={["Homepage messaging", "What they sell", "ICP", "Offer positioning"]} accent="#a855f7" />
          <MiniCard title="c) Company News Signals" items={["Funding", "Hiring", "Product launches"]} accent="#a855f7" />
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>AI Agent (OpenAI/Gemini) prompt</h4>
          <CopyBlock
            accent="#a855f7"
            label="Copy this prompt"
            text={"Summarise this founder's recent focus + top pain point + 1 personalised context line for outreach."}
          />
        </div>

        <Callout accent="#a855f7" accentBg="rgba(168,85,247,0.08)">
          👉 &quot;Noticed you&apos;re scaling US sales hiring, personalised outbound could compound that momentum.&quot;
        </Callout>
        <p className="text-sm" style={{ color: "#8C8279" }}>This becomes the spine of your messaging.</p>
      </StepSection>

      {/* Step 4: Hyper-Personalised Outreach Generator */}
      <StepSection number="4" emoji="💬" title="Hyper-Personalised Outreach Generator" accent="#D97706" accentBg="rgba(217,119,6,0.08)">
        <p className="text-sm sm:text-base" style={{ color: "#3D3D3D" }}>AI generates all 5 messages for every lead:</p>
        <NumberedList
          accent="#D97706"
          accentBg="rgba(217,119,6,0.08)"
          items={[
            "Connection Note, personalised in 300 characters based on their post + website + your value prop",
            "Follow-up #1, light context + credibility",
            "Follow-up #2, a micro-insight from their website",
            "Follow-up #3, soft ask: \"Worth exploring?\"",
            "Final Nudge, polite push + Calendly CTA",
          ]}
        />
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Nodes</h4>
          <ChipGroup items={["AI Agent Node, message generation", "Set Node, store final sequence", "Database Node, push to CRM"]} accent="#D97706" accentBg="rgba(217,119,6,0.08)" />
        </div>
        <Callout accent="#D97706" accentBg="rgba(217,119,6,0.08)">
          👉 Outcome: a unique outreach sequence for every single prospect.
        </Callout>
      </StepSection>

      {/* Step 5: LinkedIn Outreach Automation */}
      <StepSection number="5" emoji="🚀" title="LinkedIn Outreach Automation" subtitle="800 requests / month, using n8n" accent="#0077b5" accentBg="rgba(0,119,181,0.08)">
        <NumberedList
          accent="#0077b5"
          accentBg="rgba(0,119,181,0.08)"
          items={[
            "Fetch personalised messages",
            "Match message + prospect + step",
            "Send via tool API",
            "Log status: sent, accepted, replied",
            "Auto-tag positives",
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "rgba(0,119,181,0.08)", border: "1px solid rgba(0,119,181,0.3)" }}>
            <div className="text-xl font-black" style={{ color: "#0a0a0a" }}>~26/day = 800/month</div>
          </div>
          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "rgba(0,119,181,0.08)", border: "1px solid rgba(0,119,181,0.3)" }}>
            <div className="text-xl font-black" style={{ color: "#0a0a0a" }}>4 auto follow-ups after acceptance</div>
          </div>
        </div>
        <Callout accent="#0077b5" accentBg="rgba(0,119,181,0.08)">
          👉 This is the backbone of the 80-meetings engine.
        </Callout>
      </StepSection>

      {/* Step 6: Call Booking Autopilot */}
      <StepSection number="6" emoji="📅" title="Call Booking Autopilot" subtitle="n8n + Calendly" accent="#14B8A6" accentBg="rgba(20,184,166,0.08)">
        <p className="text-sm sm:text-base font-semibold" style={{ color: "#3D3D3D" }}>When someone replies:</p>
        <NumberedList
          accent="#14B8A6"
          accentBg="rgba(20,184,166,0.08)"
          items={[
            "LinkedIn Inbox API sends the reply to n8n",
            "AI Sentiment Node classifies the reply",
            "If \"positive\": auto-send the Calendly link, add to the Hot Lead pipeline",
            "Auto-create a CRM entry",
            "Send a confirmation message",
          ]}
        />
        <Callout accent="#14B8A6" accentBg="rgba(20,184,166,0.08)">
          👉 &quot;Great, here&apos;s my calendar, pick a time that works.&quot;
        </Callout>
      </StepSection>

      {/* Step 7: Self-Optimising Weekly Report */}
      <StepSection number="7" emoji="📊" title="Self-Optimising Weekly Report" subtitle="Every Friday evening" accent="#6366f1" accentBg="rgba(99,102,241,0.08)">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>Pull all metrics</h4>
            <ChipGroup
              items={["Connection acceptance rate", "Reply rate", "Positive reply rate", "Meetings booked", "Show-up rate"]}
              accent="#6366f1"
              accentBg="rgba(99,102,241,0.08)"
            />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8C8279" }}>AI Agent analyses</h4>
            <ChipGroup
              items={["Best-responding ICP segment", "Highest-replying message", "Winning personalisation angle", "What to change next week"]}
              accent="#6366f1"
              accentBg="rgba(99,102,241,0.08)"
            />
          </div>
        </div>
        <Callout accent="#6366f1" accentBg="rgba(99,102,241,0.08)">
          👉 n8n automatically updates next week&apos;s templates. This is how the system gets sharper every week.
        </Callout>
      </StepSection>

      {/* Step 8: Results */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black" style={{ color: "#ec4899" }}>8</span>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(236,72,153,0.08)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.3)" }}>
                Step 8
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
              🏆 Results (real)
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              {[
                { v: "800", l: "Connection requests / month" },
                { v: "80+", l: "US meetings booked / month" },
                { v: "4", l: "New clients / month, at $2,000 each" },
                { v: "90%", l: "Of the system fully automated" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                  <div className="text-sm font-semibold" style={{ color: "#3D3D3D" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm sm:text-base font-semibold mt-5" style={{ color: "#8C8279" }}>
              You only show up for calls.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 9: Video */}
      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black" style={{ color: "#F97316" }}>9</span>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(249,115,22,0.08)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>
                Step 9
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-5 leading-tight" style={{ color: "#0a0a0a" }}>
              Check out the AI Agents in action
            </h2>
            <a
              href="https://www.loom.com/share/143c7b6ae41242bbbad797539987d214?sid=2c7fb593-ef70-4933-ac6f-8a518eb65803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              <PlayCircle className="w-10 h-10 flex-shrink-0" style={{ color: "#F97316" }} />
              <div>
                <p className="text-sm sm:text-base font-black text-white">Watch the walkthrough on Loom</p>
                <p className="text-xs sm:text-sm" style={{ color: "#9ca3af" }}>See the full agent workflow, live</p>
              </div>
            </a>
            <p className="text-sm sm:text-base leading-relaxed mt-5" style={{ color: "#3D3D3D" }}>
              Our AI Agents are custom-built to act like your silent growth team, working 24/7 behind the scenes to analyse, identify, and act with precision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%)", border: "1px solid #2a2a3e" }}>
              <h2 className="text-2xl sm:text-3xl font-black mb-6 text-white">💬 More playbooks like this</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a
                  href="https://www.instagram.com/tejasjhaveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span className="block text-2xl mb-2">📸</span>
                  <span className="block text-sm font-bold text-white mb-1">Follow along</span>
                  <span className="block text-xs" style={{ color: "#9ca3af" }}>@tejasjhaveri</span>
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
