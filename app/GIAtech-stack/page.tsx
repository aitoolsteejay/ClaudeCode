"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "photo", icon: "📸", color: "#FCE7F3", accent: "#DB2777", textAccent: "#9D174D",
    title: "Product Photography & Visual Creation",
    subtitle: "The most important category for jewellery. Your visuals sell before your words do.",
    tools: [
      { name: "Photoroom", what: "Remove backgrounds from jewellery shots, swap to white/lifestyle backgrounds instantly", free: "Free/Paid" },
      { name: "Remove.bg", what: "Clean background removal for product photos", free: "Free/Paid" },
      { name: "Mokker", what: "AI-generated lifestyle backgrounds for jewellery on flat lay or model shots", free: "Free/Paid" },
      { name: "Clipping Magic", what: "Precise cutouts for rings, chains, earrings with fine detail", free: "Paid" },
      { name: "Luminar Neo", what: "Enhance sparkle, shine, and metal texture in product photos", free: "Paid" },
      { name: "Adobe Firefly", what: "Generate lifestyle contexts around your jewellery images", free: "Free/Paid" },
      { name: "Midjourney", what: "Generate mood boards, campaign visuals, jewellery concept renders", free: "Paid" },
      { name: "Gemini", what: "AI image generation for social content and campaign ideas", free: "Free" },
      { name: "Picsart AI", what: "Quick edits and filters for Instagram-ready jewellery photos", free: "Free/Paid" },
      { name: "Canva", what: "Design product launch graphics, price cards, festival offers", free: "Free/Paid" },
      { name: "Adobe Express", what: "Branded templates for reels covers, stories, promotions", free: "Free/Paid" },
      { name: "Designify", what: "Auto-enhance product photos with professional backgrounds", free: "Free/Paid" },
    ],
  },
  {
    id: "video", icon: "🎬", color: "#EDE9FE", accent: "#7C3AED", textAccent: "#4C1D95",
    title: "Video & Reels for Jewellery",
    subtitle: "Short video is the #1 discovery channel for jewellery buyers today.",
    tools: [
      { name: "CapCut", what: "Edit jewellery unboxing, try-on, and styling reels", free: "Free" },
      { name: "InShot", what: "Mobile-first video editor for Instagram and WhatsApp content", free: "Free/Paid" },
      { name: "Veed.io", what: "Add subtitles and captions to jewellery videos automatically", free: "Free/Paid" },
      { name: "Opus Clip", what: "Repurpose long jewellery showcase videos into short clips", free: "Free/Paid" },
      { name: "Runway ML", what: "AI video effects and transitions for premium campaign feel", free: "Free/Paid" },
      { name: "Pika Labs", what: "Turn a still jewellery photo into a short animated video", free: "Free/Paid" },
      { name: "HeyGen", what: "Create an AI avatar spokesperson for your brand without filming", free: "Paid" },
      { name: "Loom", what: "Send personalised video messages to HNI clients or B2B buyers", free: "Free/Paid" },
      { name: "Descript", what: "Edit talking-head videos by editing the transcript", free: "Free/Paid" },
    ],
  },
  {
    id: "content", icon: "✍️", color: "#FEF3C7", accent: "#D97706", textAccent: "#92400E",
    title: "AI Writing & Content for Jewellery",
    subtitle: "Copy that speaks to emotion, occasion, and meaning — not just specs.",
    tools: [
      { name: "Claude", what: "Write product descriptions, campaign copy, LinkedIn posts, email sequences", free: "Free/Paid" },
      { name: "ChatGPT", what: "Brainstorm collection names, taglines, occasion-based content", free: "Free/Paid" },
      { name: "Gemini", what: "Research buying trends, write product stories", free: "Free" },
      { name: "Copy.ai", what: "Product description templates for ecommerce listings", free: "Free/Paid" },
      { name: "Writesonic", what: "Blog posts on jewellery care, gifting guides, trend reports", free: "Free/Paid" },
      { name: "Perplexity", what: "Research what jewellery buyers are asking online, competitor positioning", free: "Free/Paid" },
      { name: "Grammarly", what: "Polished, error-free copy for website and social", free: "Free/Paid" },
      { name: "Hemingway App", what: "Keep product descriptions clear and punchy", free: "Free" },
      { name: "Notion AI", what: "Write and store all brand content in one place", free: "Paid" },
    ],
  },
  {
    id: "linkedin", icon: "💼", color: "#DBEAFE", accent: "#2563EB", textAccent: "#1E40AF",
    title: "LinkedIn & Personal Brand for Jewellery Founders",
    subtitle: "Buyers buy from people they trust. Your personal brand is your biggest asset.",
    tools: [
      { name: "LinkedIn", what: "Core platform for B2B buyers, retailers, and wholesalers", free: "Free" },
      { name: "Taplio", what: "Schedule LinkedIn posts, track engagement, find content ideas", free: "Paid" },
      { name: "AuthoredUp", what: "Format LinkedIn posts properly before publishing", free: "Free/Paid" },
      { name: "Kleo", what: "See what content is working for other jewellery and luxury creators", free: "Free" },
      { name: "Shield Analytics", what: "Understand which posts are driving profile visits and DMs", free: "Paid" },
      { name: "Engage AI", what: "Comment meaningfully on posts from potential B2B buyers", free: "Free/Paid" },
      { name: "Supergrow", what: "AI post writer that learns your voice and tone", free: "Paid" },
      { name: "Claude", what: "Ghost-write your founder story, thought leadership, origin posts", free: "Free/Paid" },
    ],
  },
  {
    id: "website", icon: "🌐", color: "#D1FAE5", accent: "#059669", textAccent: "#065F46",
    title: "Website & Online Presence",
    subtitle: "Your website is your 24/7 showroom.",
    tools: [
      { name: "Framer", what: "Build a stunning brand site with AI, no code needed", free: "Free/Paid" },
      { name: "Shopify", what: "Best ecommerce platform for jewellery retail and D2C", free: "Paid" },
      { name: "Wegic", what: "Chat-to-build AI website, extremely beginner-friendly", free: "Free/Paid" },
      { name: "Squarespace", what: "Beautiful portfolio-style websites for jewellery brands", free: "Paid" },
      { name: "Durable", what: "Instant AI website for small jewellery businesses", free: "Free/Paid" },
      { name: "Tidio", what: "Add AI chatbot to your website to answer buyer queries 24/7", free: "Free/Paid" },
      { name: "Drift", what: "Conversational AI for capturing leads on your website", free: "Paid" },
      { name: "Google Business Profile", what: "Essential for local jewellery store discovery on Maps and Search", free: "Free" },
    ],
  },
  {
    id: "social", icon: "📱", color: "#FFF7ED", accent: "#EA580C", textAccent: "#7C2D12",
    title: "Social Media Management",
    subtitle: "Consistency is what separates brands that grow from brands that plateau.",
    tools: [
      { name: "Later", what: "Visual content calendar, perfect for planning jewellery drops", free: "Free/Paid" },
      { name: "Buffer", what: "Schedule posts across Instagram, LinkedIn, Facebook", free: "Free/Paid" },
      { name: "Planoly", what: "Drag-and-drop Instagram grid planner for aesthetic feed", free: "Free/Paid" },
      { name: "Metricool", what: "Analytics and scheduling in one dashboard", free: "Free/Paid" },
      { name: "Publer", what: "Affordable scheduling with AI caption suggestions", free: "Free/Paid" },
      { name: "Canva Content Planner", what: "Plan and post directly from Canva", free: "Free/Paid" },
    ],
  },
  {
    id: "whatsapp", icon: "💬", color: "#DCFCE7", accent: "#16A34A", textAccent: "#14532D",
    title: "WhatsApp & Direct Sales",
    subtitle: "In India, WhatsApp is where jewellery sales actually close.",
    tools: [
      { name: "WhatsApp Business", what: "Catalogue, quick replies, broadcast lists for offers", free: "Free" },
      { name: "Interakt", what: "WhatsApp CRM and broadcast campaigns for jewellery brands", free: "Paid" },
      { name: "Wati", what: "WhatsApp automation and customer support", free: "Paid" },
      { name: "AiSensy", what: "WhatsApp marketing with AI chatbot and campaign tools", free: "Free/Paid" },
      { name: "Zoko", what: "WhatsApp sales and support tool for D2C brands", free: "Paid" },
      { name: "DoubleTick", what: "WhatsApp CRM built for Indian SMBs", free: "Paid" },
    ],
  },
  {
    id: "email", icon: "📧", color: "#CCFBF1", accent: "#0D9488", textAccent: "#134E4A",
    title: "Email Marketing & Outreach",
    subtitle: "Owned audience is the most valuable asset for any jewellery brand.",
    tools: [
      { name: "Mailchimp", what: "Send festival campaigns, new collection launches, care tips", free: "Free/Paid" },
      { name: "Brevo", what: "Email + SMS marketing at affordable cost", free: "Free/Paid" },
      { name: "Klaviyo", what: "Best email marketing for jewellery ecommerce, deep Shopify integration", free: "Free/Paid" },
      { name: "Mailmeteor", what: "Personalised bulk email from Gmail for B2B outreach", free: "Free/Paid" },
      { name: "Apollo.io", what: "Find and reach jewellery retailers, buyers, and wholesalers", free: "Free/Paid" },
      { name: "Hunter.io", what: "Find business email addresses of potential stockists", free: "Free/Paid" },
      { name: "Instantly", what: "Cold email outreach for B2B leads at scale", free: "Paid" },
    ],
  },
  {
    id: "seo", icon: "🔍", color: "#ECFDF5", accent: "#15803D", textAccent: "#14532D",
    title: "SEO & Discovery",
    subtitle: "When someone searches \"diamond rings Mumbai\" — you need to show up.",
    tools: [
      { name: "Google Business Profile", what: "Show up on local maps for walk-in customers", free: "Free" },
      { name: "Google Search Console", what: "Track which jewellery keywords are bringing traffic", free: "Free" },
      { name: "Google Analytics", what: "Understand which pages and products attract buyers", free: "Free" },
      { name: "Ubersuggest", what: "Find keywords like \"bridal jewellery set\" or \"anniversary gift gold\"", free: "Free/Paid" },
      { name: "AnswerThePublic", what: "Discover what jewellery buyers are searching and asking", free: "Free/Paid" },
      { name: "Surfer SEO", what: "Write blog content that ranks for jewellery search terms", free: "Paid" },
      { name: "Google Trends", what: "See seasonal spikes in jewellery searches (Diwali, wedding season)", free: "Free" },
      { name: "Semrush", what: "Full competitive SEO analysis against other jewellery brands", free: "Paid" },
    ],
  },
  {
    id: "crm", icon: "🗂️", color: "#FEE2E2", accent: "#DC2626", textAccent: "#7F1D1D",
    title: "CRM & Lead Management",
    subtitle: "Managing your B2B buyers, stockists, and HNI clients properly.",
    tools: [
      { name: "Zoho CRM", what: "Track leads, clients, and follow-ups across your sales pipeline", free: "Free/Paid" },
      { name: "HubSpot CRM", what: "Free CRM with email tracking and deal pipeline", free: "Free/Paid" },
      { name: "Notion", what: "Lightweight CRM and client tracker if you are just starting", free: "Free/Paid" },
      { name: "Folk CRM", what: "Simple relationship-first CRM, great for HNI client management", free: "Paid" },
      { name: "Airtable", what: "Custom database to track collections, clients, and orders", free: "Free/Paid" },
      { name: "Streak", what: "CRM built inside Gmail, zero learning curve", free: "Free/Paid" },
    ],
  },
  {
    id: "ecommerce", icon: "🛍️", color: "#FFF7ED", accent: "#C2410C", textAccent: "#7C2D12",
    title: "Ecommerce & Selling Online",
    subtitle: "For brands that want to sell direct to consumer or manage inventory.",
    tools: [
      { name: "Shopify", what: "Best platform for jewellery D2C with payment and inventory", free: "Paid" },
      { name: "WooCommerce", what: "WordPress-based store, flexible and affordable", free: "Free/Paid" },
      { name: "Instamojo", what: "Easy Indian payment link and simple storefront", free: "Free/Paid" },
      { name: "Razorpay", what: "Indian payment gateway for website and WhatsApp sales", free: "Free/Paid" },
      { name: "Meesho", what: "For retailers exploring reseller and marketplace models", free: "Free" },
      { name: "Etsy", what: "Global marketplace for handcrafted and artisan jewellery", free: "Free/Paid" },
      { name: "Amazon India", what: "Reach mass market buyers through jewellery marketplace listings", free: "Paid" },
      { name: "Myntra / Nykaa Fashion", what: "Fashion-forward platforms where jewellery buyers browse", free: "Varies" },
    ],
  },
  {
    id: "research", icon: "🧠", color: "#F5F3FF", accent: "#6D28D9", textAccent: "#3B0764",
    title: "AI Research & Trend Spotting",
    subtitle: "Knowing what your customer wants before they tell you.",
    tools: [
      { name: "Perplexity", what: "Research competitor brands, buyer questions, market trends", free: "Free/Paid" },
      { name: "Google Trends", what: "Track seasonal demand spikes for jewellery categories", free: "Free" },
      { name: "Exploding Topics", what: "Spot emerging jewellery styles and buyer behaviours early", free: "Free/Paid" },
      { name: "Pinterest Trends", what: "See what jewellery styles are getting saved and shared", free: "Free" },
      { name: "SparkToro", what: "Understand where your jewellery buyers spend time online", free: "Free/Paid" },
      { name: "BuzzSumo", what: "Find top-performing jewellery content across the web", free: "Paid" },
    ],
  },
  {
    id: "productivity", icon: "⚡", color: "#FFFBEB", accent: "#B45309", textAccent: "#78350F",
    title: "Productivity & Automation",
    subtitle: "So you can run marketing without it taking over your day.",
    tools: [
      { name: "Notion", what: "Your brand OS — content calendar, client notes, all in one", free: "Free/Paid" },
      { name: "Google Workspace", what: "Docs, Sheets, Drive for day-to-day operations", free: "Free/Paid" },
      { name: "Zapier", what: "Automate repetitive tasks, e.g. new lead in CRM triggers a WhatsApp", free: "Free/Paid" },
      { name: "Make (Integromat)", what: "More powerful automation for multi-step workflows", free: "Free/Paid" },
      { name: "Calendly", what: "Let B2B buyers book a call directly without back-and-forth", free: "Free/Paid" },
      { name: "Loom", what: "Send personalised video messages instead of long emails", free: "Free/Paid" },
      { name: "ClickUp", what: "Task and project management for your team", free: "Free/Paid" },
      { name: "Slack", what: "Team communication if you have staff", free: "Free/Paid" },
    ],
  },
  {
    id: "ads", icon: "🎯", color: "#FEF2F2", accent: "#E11D48", textAccent: "#881337",
    title: "Paid Ads & Performance Marketing",
    subtitle: "When you are ready to scale beyond organic.",
    tools: [
      { name: "Meta Ads Manager", what: "Run Instagram and Facebook ads for jewellery collections", free: "Free to use" },
      { name: "Google Ads", what: "Capture buyers actively searching for jewellery", free: "Paid" },
      { name: "Smartly.io", what: "Automate and optimise social ad creatives at scale", free: "Paid" },
      { name: "AdCreative.ai", what: "AI-generated ad creatives and copy for jewellery campaigns", free: "Paid" },
      { name: "Foreplay", what: "Save and study competitor jewellery ads for inspiration", free: "Free/Paid" },
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
  cat: typeof CATEGORIES[0] & { subtitle?: string }; globalStart: number; search: string;
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
      className="print-section rounded-2xl overflow-hidden border"
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
          {cat.subtitle && !search && <p className="text-xs mt-0.5 font-medium" style={{ color: cat.textAccent }}>{cat.subtitle}</p>}
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
                <th className="text-left px-4 py-3 text-xs font-black uppercase tracking-widest" style={{ color: "#B8B0A7" }}>Why it's relevant for jewellery</th>
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
          /* ── Reset ── */
          *, *::before, *::after { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: #ffffff !important; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

          /* ── Hide UI chrome ── */
          .no-print { display: none !important; }

          /* ── Page setup ── */
          @page { size: A4; margin: 18mm 14mm; }
          @page :first { margin-top: 12mm; }

          /* ── Print cover header ── */
          .print-header { display: block !important; }

          /* ── Layout ── */
          .min-h-screen { min-height: unset !important; background: white !important; }
          .px-6 { padding-left: 0 !important; padding-right: 0 !important; }
          .pt-20, .pt-16 { padding-top: 0 !important; }
          .pb-12, .pb-24 { padding-bottom: 8px !important; }
          .max-w-5xl { max-width: 100% !important; }

          /* ── Stats grid ── */
          .grid { display: grid !important; }
          .grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .sm\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
          .gap-4 { gap: 6px !important; }

          /* ── Category sections ── */
          .rounded-2xl { border-radius: 8px !important; }
          .flex-col { gap: 8px !important; }

          /* ── Tables ── */
          table { width: 100% !important; border-collapse: collapse !important; font-size: 9.5pt !important; }
          thead tr { background-color: #F8F6F2 !important; }
          th { padding: 6px 10px !important; font-size: 8pt !important; font-weight: 800 !important; text-transform: uppercase; letter-spacing: 0.08em; color: #B8B0A7 !important; border-bottom: 1px solid #E8E2D9 !important; }
          td { padding: 6px 10px !important; vertical-align: top; border-bottom: 1px solid #F5F2EE !important; }

          /* ── Page breaks ── */
          .print-section { page-break-inside: avoid; break-inside: avoid; margin-bottom: 14px !important; }
          thead { display: table-header-group; }

          /* ── Opacity overrides (animations set opacity:0 on scroll) ── */
          * { opacity: 1 !important; transform: none !important; transition: none !important; animation: none !important; }

          /* ── Collapsed sections: force open ── */
          [style*="max-height: 0"] { max-height: none !important; overflow: visible !important; }
          [style*="max-height:0"] { max-height: none !important; overflow: visible !important; }

          /* ── Hero section ── */
          h1 { font-size: 28pt !important; margin-bottom: 6px !important; line-height: 1.15 !important; -webkit-text-fill-color: #0a0a0a !important; background: none !important; }
          p { font-size: 10pt !important; }
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

        {/* ── Print-only cover ── */}
        <div className="print-header" style={{ display: "none", borderBottom: "3px solid #F5B731", paddingBottom: 16, marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em" }}>AI Tech Stack for Jewellery Brands</div>
              <div style={{ fontSize: 11, color: "#8C8279", marginTop: 2 }}>GIA India AI Marketing Workshop · Curated by Myntmore · myntmore.com</div>
            </div>
            <div style={{ fontSize: 10, color: "#B8B0A7", textAlign: "right" }}>106 tools · 14 categories</div>
          </div>
        </div>

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className="px-6 pt-20 pb-12 max-w-5xl mx-auto"
          style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
            <span style={{ animation: "float 2.2s ease-in-out infinite", display: "inline-block" }}>💎</span>
            GIA India AI Marketing Workshop
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-none mb-6 tracking-tight" style={{ color: "#0a0a0a" }}>
            AI Tech Stack for<br />
            <span style={{
              background: "linear-gradient(90deg, #B45309, #F5B731, #D97706, #F5B731, #B45309)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}>Jewellery Brands</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-2xl mb-12" style={{ color: "#52525B" }}>
            106 tools across 14 categories — curated specifically for jewellery brand owners and retailers. From product photography to paid ads, beginner to advanced.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard n={106} label="Total Tools" color="#0a0a0a" bg="#ffffff" delay={0} />
            <StatCard n={14} label="Categories" color="#D97706" bg="#FEF9EC" delay={80} />
            <StatCard n={totalFree + totalFreePaid} label="Free or Freemium" color="#059669" bg="#D1FAE5" delay={160} />
            <StatCard n={8} label="Day 1 Starter Tools" color="#7C3AED" bg="#EDE9FE" delay={240} />
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

        {/* ── Starter Pack ── */}
        <div className="px-6 pb-16 max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.4)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⭐</span>
              <div>
                <h2 className="font-black text-xl" style={{ color: "#0a0a0a" }}>Day 1 Starter Pack</h2>
                <p className="text-sm" style={{ color: "#8C8279" }}>Feeling overwhelmed? Start with just these 8 tools.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: "📸", name: "Photoroom", why: "Product photos" },
                { icon: "🎨", name: "Canva", why: "Graphics & design" },
                { icon: "🎬", name: "CapCut", why: "Reels editing" },
                { icon: "🤖", name: "Claude", why: "AI writing" },
                { icon: "💬", name: "WhatsApp Business", why: "Direct sales" },
                { icon: "📍", name: "Google Business Profile", why: "Local discovery" },
                { icon: "📧", name: "Mailchimp", why: "Email campaigns" },
                { icon: "📅", name: "Later", why: "Social scheduling" },
              ].map((t) => (
                <div key={t.name} className="rounded-xl p-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(245,183,49,0.25)" }}>
                  <div className="text-xl mb-2">{t.icon}</div>
                  <div className="font-black text-sm" style={{ color: "#0a0a0a" }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#8C8279" }}>{t.why}</div>
                </div>
              ))}
            </div>
          </div>
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
