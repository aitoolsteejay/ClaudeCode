"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "linkedin", icon: "💼", color: "#DBEAFE", accent: "#2563EB", textAccent: "#1E40AF",
    title: "LinkedIn & Personal Branding",
    tools: [
      { name: "LinkedIn", what: "Core profile and content platform", free: "Free" },
      { name: "Taplio", what: "AI LinkedIn post scheduler and analytics", free: "Paid" },
      { name: "AuthoredUp", what: "LinkedIn post editor with formatting and preview", free: "Free/Paid" },
      { name: "Kleo", what: "LinkedIn content inspiration from top creators", free: "Free" },
      { name: "Shield Analytics", what: "Deep LinkedIn analytics beyond native", free: "Paid" },
      { name: "Supergrow", what: "AI post writer trained on your style", free: "Paid" },
      { name: "Engage AI", what: "AI-generated comments on prospects' posts", free: "Free/Paid" },
      { name: "Claude", what: "Ghostwriting posts, bios, hooks", free: "Free/Paid" },
      { name: "ChatGPT", what: "Content drafting and ideation", free: "Free/Paid" },
      { name: "Gemini", what: "Google's AI for content and image generation", free: "Free" },
      { name: "Canva", what: "Carousel and graphic design for LinkedIn", free: "Free/Paid" },
      { name: "Notion AI", what: "Drafting and organising content in one place", free: "Paid" },
    ],
  },
  {
    id: "website", icon: "🌐", color: "#D1FAE5", accent: "#059669", textAccent: "#065F46",
    title: "AI Website Building",
    tools: [
      { name: "Framer", what: "AI website builder, best for personal brands", free: "Free/Paid" },
      { name: "Wegic", what: "Chat-based AI website builder, beginner-friendly", free: "Free/Paid" },
      { name: "Durable", what: "Instant AI website for small businesses", free: "Free/Paid" },
      { name: "Wix ADI", what: "AI-assisted website creation", free: "Free/Paid" },
      { name: "Squarespace", what: "Clean portfolio and brand websites", free: "Paid" },
      { name: "Shopify", what: "For retailers who want to sell online", free: "Paid" },
      { name: "Hostinger Website Builder", what: "Affordable AI site builder", free: "Paid" },
      { name: "10Web", what: "AI WordPress builder", free: "Paid" },
      { name: "Dorik", what: "Simple AI website for brands", free: "Free/Paid" },
      { name: "Carrd", what: "One-page simple brand site", free: "Free/Paid" },
    ],
  },
  {
    id: "image", icon: "🎨", color: "#FCE7F3", accent: "#DB2777", textAccent: "#9D174D",
    title: "AI Image & Visual Creation",
    tools: [
      { name: "Gemini", what: "AI image generation (covered in workshop)", free: "Free" },
      { name: "Midjourney", what: "Best quality AI jewellery and product images", free: "Paid" },
      { name: "Adobe Firefly", what: "AI image generation inside Adobe suite", free: "Free/Paid" },
      { name: "Canva AI (Dream Lab)", what: "AI image generation inside Canva", free: "Free/Paid" },
      { name: "DALL·E (via ChatGPT)", what: "Quick AI image generation", free: "Free/Paid" },
      { name: "Ideogram", what: "Text-heavy AI visuals and logos", free: "Free/Paid" },
      { name: "Recraft", what: "AI image generation for brand consistency", free: "Free/Paid" },
      { name: "Remove.bg", what: "Remove backgrounds from product photos instantly", free: "Free/Paid" },
      { name: "Cleanup.pictures", what: "Remove objects/distractions from photos", free: "Free" },
      { name: "Photoroom", what: "AI product photo editor for jewellery shots", free: "Free/Paid" },
      { name: "Picsart AI", what: "Quick social media visuals", free: "Free/Paid" },
      { name: "Luminar Neo", what: "AI photo enhancement for product photography", free: "Paid" },
      { name: "Mokker", what: "AI background replacement for product photos", free: "Free/Paid" },
      { name: "Clipping Magic", what: "Background removal for jewellery images", free: "Paid" },
    ],
  },
  {
    id: "content", icon: "✍️", color: "#FEF3C7", accent: "#D97706", textAccent: "#92400E",
    title: "Content Creation & Copywriting",
    tools: [
      { name: "Claude", what: "Long-form writing, emails, strategy", free: "Free/Paid" },
      { name: "ChatGPT", what: "Versatile content generation", free: "Free/Paid" },
      { name: "Gemini", what: "Google AI for content and research", free: "Free" },
      { name: "Copy.ai", what: "Marketing copy, taglines, ads", free: "Free/Paid" },
      { name: "Jasper", what: "Brand-voice trained content writing", free: "Paid" },
      { name: "Writesonic", what: "Blog posts, product descriptions, ads", free: "Free/Paid" },
      { name: "Rytr", what: "Budget-friendly AI writing tool", free: "Free/Paid" },
      { name: "Perplexity", what: "AI-powered research and fact-finding", free: "Free/Paid" },
      { name: "Hemingway App", what: "Simplify and tighten your writing", free: "Free" },
      { name: "Grammarly", what: "Grammar, tone, and clarity checker", free: "Free/Paid" },
      { name: "Quillbot", what: "Paraphrasing and rewriting tool", free: "Free/Paid" },
      { name: "Notion AI", what: "Write and organise content in one workspace", free: "Paid" },
    ],
  },
  {
    id: "video", icon: "🎬", color: "#EDE9FE", accent: "#7C3AED", textAccent: "#4C1D95",
    title: "Video Content & Reels",
    tools: [
      { name: "CapCut", what: "Easy reels and short video editing", free: "Free" },
      { name: "InShot", what: "Mobile video editor for social content", free: "Free/Paid" },
      { name: "Runway ML", what: "AI video generation and editing", free: "Free/Paid" },
      { name: "Pika Labs", what: "AI video from text or image", free: "Free/Paid" },
      { name: "HeyGen", what: "AI avatar videos for brand communication", free: "Paid" },
      { name: "Synthesia", what: "AI presenter videos without a camera", free: "Paid" },
      { name: "Descript", what: "Podcast and video editing with transcripts", free: "Free/Paid" },
      { name: "Opus Clip", what: "Turn long videos into short clips automatically", free: "Free/Paid" },
      { name: "Veed.io", what: "Online video editor with AI subtitles", free: "Free/Paid" },
      { name: "Loom", what: "Quick screen and face recording for outreach", free: "Free/Paid" },
    ],
  },
  {
    id: "email", icon: "📧", color: "#CCFBF1", accent: "#0D9488", textAccent: "#134E4A",
    title: "Email Marketing & Outreach",
    tools: [
      { name: "Mailchimp", what: "Email newsletters and campaigns", free: "Free/Paid" },
      { name: "Brevo (Sendinblue)", what: "Email + SMS marketing", free: "Free/Paid" },
      { name: "Instantly", what: "Cold email outreach at scale", free: "Paid" },
      { name: "Smartlead", what: "Cold email with warm-up", free: "Paid" },
      { name: "Apollo.io", what: "Lead database + email outreach", free: "Free/Paid" },
      { name: "Lemlist", what: "Personalised cold email with images", free: "Paid" },
      { name: "Hunter.io", what: "Find email addresses of prospects", free: "Free/Paid" },
      { name: "Snov.io", what: "Email finder and drip campaigns", free: "Free/Paid" },
      { name: "Mailmeteor", what: "Gmail-based bulk email sending", free: "Free/Paid" },
      { name: "Streak", what: "CRM and email tracking inside Gmail", free: "Free/Paid" },
    ],
  },
  {
    id: "crm", icon: "🗂️", color: "#FEE2E2", accent: "#DC2626", textAccent: "#7F1D1D",
    title: "CRM & Lead Management",
    tools: [
      { name: "Zoho CRM", what: "Full CRM for managing leads and clients", free: "Free/Paid" },
      { name: "HubSpot CRM", what: "Beginner-friendly free CRM", free: "Free/Paid" },
      { name: "Notion", what: "Lightweight CRM and workspace", free: "Free/Paid" },
      { name: "Airtable", what: "Visual database for managing contacts", free: "Free/Paid" },
      { name: "Pipedrive", what: "Sales pipeline CRM", free: "Paid" },
      { name: "Folk CRM", what: "Simple relationship-focused CRM", free: "Paid" },
      { name: "Clay", what: "AI-enriched lead research and outreach", free: "Paid" },
      { name: "Monday.com", what: "Project and client management", free: "Free/Paid" },
    ],
  },
  {
    id: "social", icon: "📱", color: "#FFF7ED", accent: "#EA580C", textAccent: "#7C2D12",
    title: "Social Media Management",
    tools: [
      { name: "Buffer", what: "Schedule posts across platforms", free: "Free/Paid" },
      { name: "Later", what: "Visual content calendar for Instagram", free: "Free/Paid" },
      { name: "Hootsuite", what: "Multi-platform social scheduling", free: "Paid" },
      { name: "Metricool", what: "Scheduling + analytics in one", free: "Free/Paid" },
      { name: "Publer", what: "Affordable multi-platform scheduler", free: "Free/Paid" },
      { name: "Planoly", what: "Instagram and Pinterest planner", free: "Free/Paid" },
      { name: "Lately AI", what: "AI that repurposes content for social", free: "Paid" },
      { name: "Feedhive", what: "AI social media scheduler", free: "Paid" },
    ],
  },
  {
    id: "seo", icon: "🔍", color: "#ECFDF5", accent: "#16A34A", textAccent: "#14532D",
    title: "SEO & Digital Presence",
    tools: [
      { name: "Google Business Profile", what: "Local SEO for jewellery stores", free: "Free" },
      { name: "Ubersuggest", what: "Keyword research and SEO audit", free: "Free/Paid" },
      { name: "Semrush", what: "Full SEO and competitor analysis", free: "Paid" },
      { name: "Ahrefs", what: "Backlink and keyword research", free: "Paid" },
      { name: "Surfer SEO", what: "AI-optimised content writing for blogs", free: "Paid" },
      { name: "Google Search Console", what: "Track website search performance", free: "Free" },
      { name: "Google Analytics", what: "Website traffic and behaviour insights", free: "Free" },
      { name: "AnswerThePublic", what: "Find what your customers are searching", free: "Free/Paid" },
    ],
  },
  {
    id: "research", icon: "🧠", color: "#F5F3FF", accent: "#6D28D9", textAccent: "#3B0764",
    title: "AI Research & Strategy",
    tools: [
      { name: "Perplexity", what: "AI search for market research", free: "Free/Paid" },
      { name: "Claude", what: "ICP building, strategy, proposals", free: "Free/Paid" },
      { name: "ChatGPT", what: "Brainstorming and research", free: "Free/Paid" },
      { name: "Google Trends", what: "See what jewellery terms are trending", free: "Free" },
      { name: "Exploding Topics", what: "Spot emerging trends early", free: "Free/Paid" },
      { name: "SparkToro", what: "Audience research tool", free: "Free/Paid" },
    ],
  },
  {
    id: "productivity", icon: "⚡", color: "#FFFBEB", accent: "#B45309", textAccent: "#78350F",
    title: "Productivity & Organisation",
    tools: [
      { name: "Notion", what: "All-in-one workspace for notes, CRM, content", free: "Free/Paid" },
      { name: "ClickUp", what: "Project management and task tracking", free: "Free/Paid" },
      { name: "Google Workspace", what: "Docs, Sheets, Drive, Gmail", free: "Free/Paid" },
      { name: "Zapier", what: "Automate repetitive tasks between tools", free: "Free/Paid" },
      { name: "Make (Integromat)", what: "More powerful automation builder", free: "Free/Paid" },
      { name: "Calendly", what: "Booking and scheduling meetings", free: "Free/Paid" },
      { name: "Loom", what: "Video messages instead of long emails", free: "Free/Paid" },
      { name: "Slack", what: "Team communication", free: "Free/Paid" },
    ],
  },
];

/* ─── HOOKS ─────────────────────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useInView(threshold = 0.1) {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
}

/* ─── COMPONENTS ────────────────────────────────────────────────────── */
function FreeBadge({ type }: { type: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    Free: { bg: "#D1FAE5", color: "#065F46", label: "Free" },
    Paid: { bg: "#FEE2E2", color: "#991B1B", label: "Paid" },
    "Free/Paid": { bg: "#FEF3C7", color: "#92400E", label: "Free/Paid" },
  };
  const s = styles[type] || styles["Free/Paid"];
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ backgroundColor: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

function StatCard({ n, label, color, bg, delay }: { n: number; label: string; color: string; bg: string; delay: number }) {
  const { ref, inView } = useInView(0.2);
  const val = useCountUp(n, inView);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 border flex flex-col gap-1"
      style={{
        backgroundColor: bg,
        borderColor: "#E8E2D9",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className="text-4xl font-black tabular-nums" style={{ color }}>{val}+</div>
      <div className="text-xs font-semibold" style={{ color: "#8C8279" }}>{label}</div>
    </div>
  );
}

function CategoryOverviewCard({ cat, index, active, onClick }: {
  cat: typeof CATEGORIES[0]; index: number; active: boolean; onClick: () => void;
}) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-left rounded-2xl p-4 border transition-all"
      style={{
        backgroundColor: active ? cat.accent : hovered ? cat.color : "#ffffff",
        borderColor: active ? cat.accent : hovered ? cat.accent + "66" : "#E8E2D9",
        boxShadow: active ? `0 8px 24px ${cat.accent}33` : hovered ? `0 4px 12px ${cat.accent}22` : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 35}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 35}ms, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease`,
      }}
    >
      <div className="text-2xl mb-2" style={{ display: "inline-block", transform: hovered || active ? "scale(1.15)" : "scale(1)", transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}>{cat.icon}</div>
      <div className="text-xs font-black leading-tight mb-1" style={{ color: active ? "#ffffff" : "#0a0a0a" }}>{cat.title}</div>
      <div className="text-xs font-bold" style={{ color: active ? "rgba(255,255,255,0.7)" : "#B8B0A7" }}>{cat.tools.length} tools</div>
    </button>
  );
}

function ToolRow({ tool, index, globalNum, accent, color }: {
  tool: { name: string; what: string; free: string };
  index: number; globalNum: number; accent: string; color: string;
}) {
  const { ref, inView } = useInView(0.05);
  const [hovered, setHovered] = useState(false);
  return (
    <tr
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #F8F6F2",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.45s ease ${index * 30}ms, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${index * 30}ms`,
        backgroundColor: hovered ? color + "55" : "transparent",
      }}
    >
      <td className="px-6 py-3.5 text-xs font-black w-10" style={{ color: "#D0C9BF" }}>{globalNum}</td>
      <td className="px-4 py-3.5 font-black text-sm" style={{ color: hovered ? accent : "#0a0a0a", whiteSpace: "nowrap", transition: "color 0.15s ease" }}>{tool.name}</td>
      <td className="px-4 py-3.5 text-sm leading-relaxed" style={{ color: "#52525B" }}>{tool.what}</td>
      <td className="px-4 py-3.5"><FreeBadge type={tool.free} /></td>
    </tr>
  );
}

function CategorySection({ cat, globalStart, search }: {
  cat: typeof CATEGORIES[0]; globalStart: number; search: string;
}) {
  const { ref, inView } = useInView(0.05);
  const [open, setOpen] = useState(true);
  const filtered = search
    ? cat.tools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.what.toLowerCase().includes(search.toLowerCase()))
    : cat.tools;

  if (search && filtered.length === 0) return null;

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border"
      style={{
        borderColor: "#E8E2D9",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full px-6 py-5 flex items-center gap-4 text-left transition-opacity hover:opacity-90"
        style={{ backgroundColor: cat.color }}
      >
        <span className="text-2xl flex-shrink-0">{cat.icon}</span>
        <div className="flex-1 min-w-0">
          <h2 className="font-black text-base sm:text-lg" style={{ color: "#0a0a0a" }}>{cat.title}</h2>
          {search && <p className="text-xs mt-0.5" style={{ color: cat.textAccent }}>{filtered.length} of {cat.tools.length} match</p>}
        </div>
        <span className="text-xs font-black px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(0,0,0,0.1)", color: "#0a0a0a" }}>
          {cat.tools.length} tools
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cat.textAccent} strokeWidth="2.5" strokeLinecap="round"
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Table */}
      <div style={{ maxHeight: open ? "9999px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ backgroundColor: "#ffffff" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #F0EBE3" }}>
                <th className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>#</th>
                <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>Tool</th>
                <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>What it does</th>
                <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>Pricing</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tool, i) => (
                <ToolRow
                  key={tool.name}
                  tool={tool}
                  index={i}
                  globalNum={globalStart + cat.tools.indexOf(tool)}
                  accent={cat.accent}
                  color={cat.color}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────── */
export default function GIATechStackPage() {
  const [search, setSearch] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: heroRef, inView: heroIn } = useInView(0.1);
  const { ref: overviewRef, inView: overviewIn } = useInView(0.05);

  const totalFree = CATEGORIES.flatMap(c => c.tools).filter(t => t.free === "Free").length;
  const totalFreePaid = CATEGORIES.flatMap(c => c.tools).filter(t => t.free === "Free/Paid").length;

  const visibleCats: typeof CATEGORIES = activeFilter === "all"
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === activeFilter);

  const getGlobalStart = useCallback((catIndex: number) => {
    let n = 1;
    CATEGORIES.slice(0, catIndex).forEach(c => { n += c.tools.length; });
    return n;
  }, []);

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(245,183,49,0)} 50%{box-shadow:0 0 0 8px rgba(245,183,49,0.12)} }
        .search-input:focus { border-color: #D97706 !important; box-shadow: 0 0 0 3px rgba(245,183,49,0.15) !important; outline: none; }
      `}</style>

      <div className="min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>

        {/* ── Nav ── */}
        <nav className="no-print sticky top-0 z-50 border-b px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: "rgba(248,246,242,0.96)", backdropFilter: "blur(16px)", borderColor: "#E8E2D9" }}>
          <a href="/"><Image src="/logo.png" alt="Myntmore" width={130} height={36} className="h-9 w-auto object-contain" /></a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs font-semibold" style={{ color: "#B8B0A7" }}>GIA India Workshop</span>
            <button
              onClick={() => window.print()}
              className="no-print flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm"
              style={{ backgroundColor: "#0a0a0a", color: "#ffffff", transition: "transform 0.15s ease, box-shadow 0.15s ease", animation: "pulseGlow 3s ease-in-out infinite" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className="px-6 pt-20 pb-12 max-w-5xl mx-auto"
          style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
            <span style={{ animation: "float 2.2s ease-in-out infinite", display: "inline-block" }}>💎</span>
            GIA India Workshop · Jewellery Brand Owners
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-none mb-6 tracking-tight" style={{ color: "#0a0a0a" }}>
            AI Marketing<br />
            <span style={{
              background: "linear-gradient(90deg, #B45309, #F5B731, #D97706, #F5B731, #B45309)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}>Tech Stack</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-2xl mb-12" style={{ color: "#52525B" }}>
            106 tools, 11 categories — curated for jewellery brand owners and retailers ready to grow with AI. From beginner to advanced.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard n={106} label="Total Tools" color="#0a0a0a" bg="#ffffff" delay={0} />
            <StatCard n={11} label="Categories" color="#D97706" bg="#FEF9EC" delay={80} />
            <StatCard n={totalFree + totalFreePaid} label="Free or Freemium" color="#059669" bg="#D1FAE5" delay={160} />
            <StatCard n={1} label="Power-packed Workshop" color="#7C3AED" bg="#EDE9FE" delay={240} />
          </div>
        </div>

        {/* ── Category overview grid ── */}
        <div ref={overviewRef} className="no-print px-6 pb-8 max-w-5xl mx-auto">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#B8B0A7", opacity: overviewIn ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}>Browse by category</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className="text-left rounded-2xl p-4 border transition-all"
              style={{
                backgroundColor: activeFilter === "all" ? "#0a0a0a" : "#ffffff",
                borderColor: activeFilter === "all" ? "#0a0a0a" : "#E8E2D9",
                color: activeFilter === "all" ? "#ffffff" : "#0a0a0a",
                opacity: overviewIn ? 1 : 0,
                transform: overviewIn ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease 0s, transform 0.5s ease 0s, background-color 0.2s, border-color 0.2s",
              }}
            >
              <div className="text-2xl mb-2">🗂</div>
              <div className="text-xs font-black">All Categories</div>
              <div className="text-xs font-bold mt-0.5" style={{ color: activeFilter === "all" ? "rgba(255,255,255,0.6)" : "#B8B0A7" }}>106 tools</div>
            </button>
            {CATEGORIES.map((cat, i) => (
              <CategoryOverviewCard
                key={cat.id}
                cat={cat}
                index={i + 1}
                active={activeFilter === cat.id}
                onClick={() => setActiveFilter(activeFilter === cat.id ? "all" : cat.id)}
              />
            ))}
          </div>
        </div>

        {/* ── Search ── */}
        <div className="no-print px-6 pb-8 max-w-5xl mx-auto">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8B0A7" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search 106 tools by name or what they do…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input w-full pl-12 pr-12 py-4 rounded-2xl border text-sm font-medium"
              style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a", transition: "border-color 0.2s, box-shadow 0.2s" }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E8E2D9" }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            )}
          </div>
          {search && (
            <p className="mt-3 text-sm" style={{ color: "#8C8279" }}>
              Showing results for <strong style={{ color: "#0a0a0a" }}>"{search}"</strong> — {CATEGORIES.flatMap(c => c.tools).filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.what.toLowerCase().includes(search.toLowerCase())).length} tools found
            </p>
          )}
        </div>

        {/* ── Tool sections ── */}
        <div className="px-6 pb-24 max-w-5xl mx-auto flex flex-col gap-5">
          {visibleCats.map((cat) => {
            const globalIdx = CATEGORIES.findIndex(c => c.id === cat.id);
            return (
              <CategorySection
                key={cat.id}
                cat={cat}
                globalStart={getGlobalStart(globalIdx)}
                search={search}
              />
            );
          })}
          {search && visibleCats.every(c => !c.tools.some(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.what.toLowerCase().includes(search.toLowerCase()))) && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-black text-lg" style={{ color: "#0a0a0a" }}>No tools found for "{search}"</p>
              <p className="text-sm mt-2" style={{ color: "#8C8279" }}>Try a different keyword</p>
            </div>
          )}
        </div>

        {/* ── Footer CTA ── */}
        <div className="no-print border-t px-6 py-20 text-center" style={{ borderColor: "#E8E2D9", backgroundColor: "#0a0a0a" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#F5B731", border: "1px solid rgba(245,183,49,0.2)" }}>
            Curated by Myntmore
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#ffffff" }}>
            Want help implementing<br />any of these?
          </h2>
          <p className="mb-10 text-base max-w-md mx-auto" style={{ color: "#A8A29E" }}>
            We help jewellery brands and B2B businesses turn AI tools into real pipeline.
          </p>
          <a
            href="https://calendly.com/founder-myntmore/web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-base"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a", transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(245,183,49,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
          >
            Book a Free Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </>
  );
}
