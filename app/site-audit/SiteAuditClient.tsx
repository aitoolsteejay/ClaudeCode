"use client";

import { Fragment, useMemo, useState } from "react";

interface AuditPage {
  path: string | null;
  private?: boolean;
  title: string;
  section: string;
  status: "linked" | "orphan";
  linkedFrom: string[];
  inboundCount: number;
  noindex: boolean;
  referencedIn?: string;
  inXmlSitemap: boolean;
  inHtmlSitemap: boolean;
}

export interface AuditData {
  generatedAt: string;
  site: string;
  counts: {
    total: number;
    linked: number;
    orphan: number;
    noindex: number;
    notInXmlSitemap: number;
    privateHidden: number;
  };
  pages: AuditPage[];
  redirects: { from: string; to: string; permanent: boolean }[];
  hiddenRedirects: number;
  rewrites: { from: string; to: string }[];
  method: string;
}

type Filter = "all" | "linked" | "orphan" | "noindex" | "no-xml";

const GOLD = "#F5B731";
const TEXT_DARK = "#0a0a0a";
const TEXT_BODY = "#52525B";
const TEXT_MUTED = "#8C8279";
const BORDER = "#E8E2D9";
const GREEN = "#059669";
const RED = "#DC2626";

const SECTION_LABELS: Record<string, string> = {
  "(home)": "Home",
  other: "Other pages",
  blog: "Blog",
  resources: "Resources",
  services: "Services",
  tools: "Tools",
  lp: "Landing pages",
  "case-studies": "Case studies",
  careers: "Careers",
  "instagram-resources": "Instagram resources",
};

function sectionLabel(section: string) {
  return SECTION_LABELS[section] ?? section;
}

function Badge({ children, color, solid }: { children: React.ReactNode; color: string; solid?: boolean }) {
  return (
    <span
      className="inline-flex items-center text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap"
      style={solid ? { backgroundColor: color, color: "#fff" } : { backgroundColor: `${color}14`, color, border: `1px solid ${color}33` }}
    >
      {children}
    </span>
  );
}

export default function SiteAuditClient({ audit }: { audit: AuditData }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const { counts } = audit;

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All pages", count: counts.total },
    { id: "linked", label: "Linked", count: counts.linked },
    { id: "orphan", label: "Orphan", count: counts.orphan },
    { id: "noindex", label: "Noindex", count: counts.noindex },
    { id: "no-xml", label: "Not in XML sitemap", count: counts.notInXmlSitemap },
  ];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return audit.pages.filter((p) => {
      if (filter === "linked" && p.status !== "linked") return false;
      if (filter === "orphan" && p.status !== "orphan") return false;
      if (filter === "noindex" && !p.noindex) return false;
      if (filter === "no-xml" && p.inXmlSitemap) return false;
      if (!q) return true;
      return (p.path ?? "").toLowerCase().includes(q) || p.title.toLowerCase().includes(q);
    });
  }, [audit.pages, filter, query]);

  const groups = useMemo(() => {
    const map = new Map<string, AuditPage[]>();
    for (const p of visible) {
      const key = p.private ? "Private" : p.section;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(p);
    }
    const order = Array.from(map.keys()).sort((a, b) => {
      if (a === "(home)") return -1;
      if (b === "(home)") return 1;
      if (a === "Private") return 1;
      if (b === "Private") return -1;
      if (a === "other") return 1;
      if (b === "other") return -1;
      return a.localeCompare(b);
    });
    return order.map((k) => ({ key: k, label: k === "Private" ? "Private pages" : sectionLabel(k), pages: map.get(k)! }));
  }, [visible]);

  const generated = new Date(audit.generatedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" });

  return (
    <section className="pt-32 pb-24 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5" style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>Internal · unlisted</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: TEXT_DARK }}>
            Site <span style={{ color: GOLD }}>audit</span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: TEXT_BODY }}>
            Every page on the website, and whether a visitor can actually reach it by clicking. <strong>Orphan</strong> means no page, menu or footer links to it, so
            it can only be reached by typing or sharing the URL.
          </p>
          <p className="text-xs mt-3" style={{ color: TEXT_MUTED }}>Rebuilt from the code on every deploy. Last built {generated} IST.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total pages", value: counts.total, color: TEXT_DARK },
            { label: "Linked", value: counts.linked, color: GREEN },
            { label: "Orphan", value: counts.orphan, color: RED },
            { label: "Noindex", value: counts.noindex, color: TEXT_MUTED },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border bg-white p-4" style={{ borderColor: BORDER }}>
              <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs font-semibold mt-1" style={{ color: TEXT_MUTED }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors"
              style={filter === f.id ? { backgroundColor: TEXT_DARK, borderColor: TEXT_DARK, color: "#fff" } : { backgroundColor: "#fff", borderColor: BORDER, color: TEXT_BODY }}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by URL or title"
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none mb-8 bg-white"
          style={{ borderColor: BORDER, color: TEXT_DARK }}
          aria-label="Search pages"
        />

        {groups.length === 0 && <p className="text-sm py-10 text-center" style={{ color: TEXT_MUTED }}>No pages match.</p>}

        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.key} className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: BORDER }}>
              <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundColor: "#FBF9F5", borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>{g.label}</h2>
                <span className="text-xs font-semibold" style={{ color: TEXT_MUTED }}>{g.pages.length} {g.pages.length === 1 ? "page" : "pages"}</span>
              </div>
              <ul>
                {g.pages.map((p, i) => {
                  const id = p.path ?? `private-${i}`;
                  const expandable = p.linkedFrom.length > 0 || !!p.referencedIn;
                  return (
                    <Fragment key={id}>
                      <li className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4" style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}>
                        <div className="min-w-0 flex-1">
                          {p.path ? (
                            <a href={p.path} className="text-sm font-bold break-all underline-offset-2 hover:underline" style={{ color: TEXT_DARK }}>{p.path}</a>
                          ) : (
                            <span className="text-sm font-bold" style={{ color: TEXT_MUTED }}>URL withheld</span>
                          )}
                          <div className="text-xs truncate" style={{ color: TEXT_MUTED }}>{p.title}</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Badge color={p.status === "linked" ? GREEN : RED} solid={p.status === "orphan"}>{p.status}</Badge>
                          {p.noindex && <Badge color={TEXT_MUTED}>noindex</Badge>}
                          {!p.inXmlSitemap && !p.private && <Badge color="#B45309">not in XML sitemap</Badge>}
                          {expandable && (
                            <button
                              type="button"
                              onClick={() => setOpen(open === id ? null : id)}
                              className="text-[11px] font-bold underline"
                              style={{ color: TEXT_BODY }}
                              aria-expanded={open === id}
                            >
                              {p.status === "linked" ? `${p.inboundCount} inbound` : "details"}
                            </button>
                          )}
                        </div>
                      </li>
                      {open === id && (
                        <li className="px-5 py-3 text-xs leading-relaxed" style={{ backgroundColor: "#FBF9F5", color: TEXT_BODY, borderTop: `1px solid ${BORDER}` }}>
                          {p.linkedFrom.length > 0 && (
                            <p>
                              <strong>Linked from:</strong> {p.linkedFrom.join(", ")}
                              {p.inboundCount > p.linkedFrom.length ? ` and ${p.inboundCount - p.linkedFrom.length} more` : ""}
                              {p.status === "orphan" ? " (but none of those pages can be reached from the homepage)" : ""}
                            </p>
                          )}
                          {p.referencedIn && <p><strong>Named in code but not as a link:</strong> {p.referencedIn} (for example a form redirect or embed).</p>}
                        </li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-white overflow-hidden" style={{ borderColor: BORDER }}>
          <div className="px-5 py-3" style={{ backgroundColor: "#FBF9F5", borderBottom: `1px solid ${BORDER}` }}>
            <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: TEXT_DARK }}>Redirects</h2>
            <p className="text-xs mt-1" style={{ color: TEXT_MUTED }}>Old URLs that forward to a live page. These are not pages themselves.</p>
          </div>
          <ul>
            {audit.redirects.map((r, i) => (
              <li key={r.from} className="px-5 py-2.5 text-xs flex flex-wrap items-center gap-2" style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}`, color: TEXT_BODY }}>
                <span className="font-bold break-all">{r.from}</span>
                <span style={{ color: TEXT_MUTED }}>→</span>
                <span className="break-all">{r.to}</span>
                <Badge color={TEXT_MUTED}>{r.permanent ? "308" : "307"}</Badge>
              </li>
            ))}
            {audit.hiddenRedirects > 0 && (
              <li className="px-5 py-2.5 text-xs" style={{ borderTop: `1px solid ${BORDER}`, color: TEXT_MUTED }}>
                + {audit.hiddenRedirects} redirects to private pages (withheld)
              </li>
            )}
          </ul>
          {audit.rewrites.length > 0 && (
            <div className="px-5 py-3 text-xs" style={{ borderTop: `1px solid ${BORDER}`, color: TEXT_BODY }}>
              <strong>Served from another app (rewrites):</strong>{" "}
              {audit.rewrites.map((r) => `${r.from} → ${r.to}`).join("; ")}
            </div>
          )}
        </div>

        <div className="mt-8 text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
          <p className="font-bold mb-1" style={{ color: TEXT_BODY }}>How this is worked out</p>
          <p>
            A page is <em>linked</em> if you can reach it by following links from the homepage. Links that only appear in the XML sitemap, the /sitemap page or this
            page are ignored, because those exist to list everything. A link to an old redirected URL counts as a link to where it forwards. {counts.privateHidden} private
            pages (pricing and admin) are counted above but their URLs are not shown here. Links built at runtime from data can occasionally be missed, so treat an
            orphan as &quot;worth a look&quot; rather than proof.
          </p>
        </div>
      </div>
    </section>
  );
}
