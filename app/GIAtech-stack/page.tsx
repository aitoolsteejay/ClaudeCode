"use client";

import { useState, useRef, useEffect } from "react";

const CATEGORIES = [
  {
    id: "linkedin",
    icon: "💼",
    color: "#DBEAFE",
    accent: "#2563EB",
    title: "LinkedIn & Personal Branding",
    count: 12,
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
    id: "website",
    icon: "🌐",
    color: "#D1FAE5",
    accent: "#059669",
    title: "AI Website Building",
    count: 10,
    tools: [
      { name: "Framer", what: "AI website builder, best for personal brands", free: "Free/Paid" },
      { name: "Wegic", what: "Chat-based AI website builder, very beginner-friendly", free: "Free/Paid" },
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
    id: "image",
    icon: "🎨",
    color: "#FCE7F3",
    accent: "#DB2777",
    title: "AI Image & Visual Creation",
    count: 14,
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
    id: "content",
    icon: "✍️",
    color: "#FEF3C7",
    accent: "#D97706",
    title: "Content Creation & Copywriting",
    count: 12,
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
    id: "video",
    icon: "🎬",
    color: "#EDE9FE",
    accent: "#7C3AED",
    title: "Video Content & Reels",
    count: 10,
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
    id: "email",
    icon: "📧",
    color: "#CCFBF1",
    accent: "#0D9488",
    title: "Email Marketing & Outreach",
    count: 10,
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
    id: "crm",
    icon: "🗂️",
    color: "#FEE2E2",
    accent: "#DC2626",
    title: "CRM & Lead Management",
    count: 8,
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
    id: "social",
    icon: "📱",
    color: "#FFF7ED",
    accent: "#EA580C",
    title: "Social Media Management",
    count: 8,
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
    id: "seo",
    icon: "🔍",
    color: "#F0FDF4",
    accent: "#16A34A",
    title: "SEO & Digital Presence",
    count: 8,
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
    id: "research",
    icon: "🧠",
    color: "#F5F3FF",
    accent: "#6D28D9",
    title: "AI Research & Strategy",
    count: 6,
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
    id: "productivity",
    icon: "⚡",
    color: "#FFFBEB",
    accent: "#B45309",
    title: "Productivity & Organisation",
    count: 8,
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

function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function FreeBadge({ type }: { type: string }) {
  if (type === "Free") return (
    <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>Free</span>
  );
  if (type === "Paid") return (
    <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}>Paid</span>
  );
  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}>Free/Paid</span>
  );
}

function CategorySection({ cat, index, search }: { cat: typeof CATEGORIES[0]; index: number; search: string }) {
  const ref = useFadeUp(index * 40);
  const filtered = cat.tools.filter(t =>
    !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.what.toLowerCase().includes(search.toLowerCase())
  );
  if (search && filtered.length === 0) return null;

  let counter = 1;
  CATEGORIES.slice(0, index).forEach(c => { counter += c.tools.length; });

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E8E2D9" }}>
      {/* Category header */}
      <div className="px-6 py-5 flex items-center gap-4" style={{ backgroundColor: cat.color }}>
        <span className="text-2xl">{cat.icon}</span>
        <div className="flex-1">
          <h2 className="font-black text-lg" style={{ color: "#0a0a0a" }}>{cat.title}</h2>
        </div>
        <span className="text-xs font-black px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.08)", color: "#0a0a0a" }}>
          {cat.tools.length} tools
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ backgroundColor: "#ffffff" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #F0EBE3" }}>
              <th className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest w-8" style={{ color: "#B8B0A7" }}>#</th>
              <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>Tool</th>
              <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>What it does</th>
              <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>Pricing</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tool, i) => {
              const globalNum = counter + cat.tools.indexOf(tool);
              return (
                <tr
                  key={tool.name}
                  style={{
                    borderBottom: i < filtered.length - 1 ? "1px solid #F8F6F2" : "none",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = cat.color + "55")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
                >
                  <td className="px-6 py-3.5 text-xs font-black" style={{ color: "#D0C9BF" }}>{globalNum}</td>
                  <td className="px-4 py-3.5 font-black" style={{ color: "#0a0a0a", whiteSpace: "nowrap" }}>{tool.name}</td>
                  <td className="px-4 py-3.5 leading-relaxed" style={{ color: "#52525B" }}>{tool.what}</td>
                  <td className="px-4 py-3.5"><FreeBadge type={tool.free} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function GIATechStackPage() {
  const [search, setSearch] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState("all");
  const heroRef = useFadeUp(0);
  const statsRef = useFadeUp(100);

  const totalFree = CATEGORIES.flatMap(c => c.tools).filter(t => t.free === "Free").length;
  const totalFreePaid = CATEGORIES.flatMap(c => c.tools).filter(t => t.free === "Free/Paid").length;

  const handlePrint = () => window.print();

  const visibleCats: typeof CATEGORIES = activeFilter === "all"
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === activeFilter);

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .print-page { padding: 0 !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>

      <div className="min-h-screen print-page" style={{ backgroundColor: "#F8F6F2", fontFamily: "inherit" }}>

        {/* Nav */}
        <nav className="no-print sticky top-0 z-50 border-b px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "rgba(248,246,242,0.95)", backdropFilter: "blur(12px)", borderColor: "#E8E2D9" }}>
          <a href="/" className="font-black text-lg" style={{ color: "#0a0a0a" }}>myntmore</a>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
        </nav>

        {/* Hero */}
        <div className="px-6 pt-16 pb-10 max-w-5xl mx-auto">
          <div ref={heroRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(245,183,49,0.15)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              <span style={{ animation: "float 2s ease-in-out infinite", display: "inline-block" }}>💎</span>
              GIA India Workshop
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-4" style={{ color: "#0a0a0a" }}>
              AI Marketing<br />
              <span style={{
                background: "linear-gradient(90deg, #D97706, #F5B731, #D97706)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}>Tech Stack</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#52525B" }}>
              106 tools organised by use case — for jewellery brand owners and retailers ready to grow with AI.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { n: "106", label: "Total Tools", color: "#0a0a0a", bg: "#ffffff" },
              { n: "11", label: "Categories", color: "#D97706", bg: "#FEF9EC" },
              { n: `${totalFree + totalFreePaid}`, label: "Free or Freemium", color: "#059669", bg: "#D1FAE5" },
              { n: "1", label: "Workshop", color: "#7C3AED", bg: "#EDE9FE" },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-5 border" style={{ backgroundColor: s.bg, borderColor: "#E8E2D9" }}>
                <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.n}</div>
                <div className="text-xs font-semibold" style={{ color: "#8C8279" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="no-print px-6 pb-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8B0A7" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium outline-none"
                style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#0a0a0a" }}
              />
            </div>
            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                style={{ backgroundColor: activeFilter === "all" ? "#0a0a0a" : "#ffffff", color: activeFilter === "all" ? "#ffffff" : "#52525B", border: "1px solid #E8E2D9" }}
              >
                All
              </button>
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(activeFilter === c.id ? "all" : c.id)}
                  className="px-3 py-2.5 rounded-xl text-xs font-bold transition-all"
                  style={{ backgroundColor: activeFilter === c.id ? c.accent : "#ffffff", color: activeFilter === c.id ? "#ffffff" : "#52525B", border: "1px solid #E8E2D9" }}
                >
                  {c.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tool sections */}
        <div className="px-6 pb-20 max-w-5xl mx-auto flex flex-col gap-6">
          {visibleCats.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} search={search} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="no-print border-t px-6 py-16 text-center" style={{ borderColor: "#E8E2D9", backgroundColor: "#0a0a0a" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F5B731" }}>Curated by Myntmore</p>
          <h2 className="text-3xl font-black mb-4" style={{ color: "#ffffff" }}>Want help implementing any of these?</h2>
          <p className="mb-8 text-sm" style={{ color: "#A8A29E" }}>We help jewellery brands and B2B businesses turn AI tools into real pipeline.</p>
          <a
            href="https://calendly.com/founder-myntmore/web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#F5B731", color: "#0a0a0a" }}
          >
            Book a Free Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </>
  );
}
