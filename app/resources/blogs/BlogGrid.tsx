"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface BlogPost {
  href: string;
  tags: string[];
  title: string;
  excerpt: string;
  readTime: string;
}

export const TAG_COLORS: Record<string, string> = {
  "Lead Generation": "#3b82f6",
  "ICP & Targeting": "#10b981",
  "Cold Email": "#ef4444",
  "Cold Outreach": "#f97316",
  Copywriting: "#eab308",
  "LinkedIn Outreach": "#a855f7",
  "Personal Branding": "#0077b5",
  "Lead Magnets": "#ec4899",
  "Content Strategy": "#14b8a6",
  Comparison: "#6366f1",
  Analytics: "#06b6d4",
  "Metrics & Reporting": "#10b981",
};

const DEFAULT_ACCENT = "#8C8279";

function accentFor(tag: string): string {
  return TAG_COLORS[tag] || DEFAULT_ACCENT;
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const allTags = useMemo(() => {
    const seen = new Set<string>();
    const tags: string[] = [];
    for (const p of posts) {
      for (const t of p.tags) {
        if (!seen.has(t)) {
          seen.add(t);
          tags.push(t);
        }
      }
    }
    return tags;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeTag !== "All" && !p.tags.includes(activeTag)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, query, activeTag]);

  const clearFilters = () => {
    setQuery("");
    setActiveTag("All");
  };

  return (
    <div>
      <div className="max-w-md mx-auto mb-6 relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#8C8279" }} aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles by title, topic, or tag..."
          aria-label="Search blog articles"
          className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none border transition-colors duration-200"
          style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", color: "#0a0a0a" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter articles by tag">
        <button
          type="button"
          onClick={() => setActiveTag("All")}
          className="text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors duration-200"
          style={
            activeTag === "All"
              ? { backgroundColor: "#0a0a0a", borderColor: "#0a0a0a", color: "#ffffff" }
              : { backgroundColor: "#ffffff", borderColor: "#E8E2D9", color: "#52525B" }
          }
        >
          All ({posts.length})
        </button>
        {allTags.map((tag) => {
          const accent = accentFor(tag);
          const isActive = activeTag === tag;
          const count = posts.filter((p) => p.tags.includes(tag)).length;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors duration-200"
              style={
                isActive
                  ? { backgroundColor: accent, borderColor: accent, color: "#ffffff" }
                  : { backgroundColor: `${accent}0F`, borderColor: `${accent}33`, color: accent }
              }
            >
              {tag} ({count})
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-base mb-4" style={{ color: "#52525B" }}>
            No articles match {query ? `"${query}"` : "this filter"}
            {activeTag !== "All" ? ` in ${activeTag}` : ""}.
          </p>
          <button type="button" onClick={clearFilters} className="btn-ghost px-6 py-2.5 text-sm font-bold inline-flex items-center gap-2">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const primaryAccent = accentFor(p.tags[0]);
            return (
              <Link key={p.href} href={p.href} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="h-1" style={{ background: `linear-gradient(90deg,${primaryAccent},${primaryAccent}66)` }} />
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${accentFor(t)}12`, color: accentFor(t) }}>{t}</span>
                    ))}
                  </div>
                  <h2 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h2>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                    <span className="text-xs font-bold" style={{ color: primaryAccent }}>Read →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
