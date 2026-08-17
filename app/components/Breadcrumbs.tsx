import Link from "next/link";
import JsonLd from "./JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// Renders the site's standard visible breadcrumb row (Home / Section / Page)
// and automatically emits the matching BreadcrumbList JSON-LD schema from the
// same data, so a page only has to declare its trail once. Plain presentational
// component — no client-only behaviour, safe to use from Server or Client
// components alike.
export default function Breadcrumbs({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];
  const schema = buildBreadcrumbSchema(trail.map((item) => ({ name: item.label, url: `${SITE_URL}${item.href}` })));

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={`flex items-center gap-2 mb-6 flex-wrap ${className}`}>
        {trail.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: "#E8E2D9" }}>/</span>}
            {i === trail.length - 1 ? (
              <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>{item.label}</span>
            ) : (
              <Link href={item.href} className="text-xs font-semibold" style={{ color: "#8C8279" }}>
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
