import Link from "next/link";

// The visible counterpart of an article's structured data: who published it and
// when it was last changed. It reads the dates straight from the page's own
// Article schema object, so what a reader sees and what search engines read are
// the same two values by construction. The page's author is the Myntmore
// organisation, matching the Article schema (see lib/schema.ts).
//
// Server component only: the date is formatted at render time in a fixed time
// zone, so server and browser can never disagree.
const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

export default function ArticleMeta({ schema, className = "" }: { schema: { datePublished?: unknown; dateModified?: unknown }; className?: string }) {
  const published = typeof schema.datePublished === "string" ? schema.datePublished : undefined;
  const modified = typeof schema.dateModified === "string" ? schema.dateModified : published;
  if (!modified) return null;

  const showPublished = published && fmt(published) !== fmt(modified);

  return (
    <p className={`-mt-3 mb-5 text-sm ${className}`} style={{ color: "#71675E" }}>
      By <span className="font-semibold" style={{ color: "#52525B" }}>Myntmore</span>
      {showPublished && (
        <>
          {" · Published "}
          <time dateTime={published}>{fmt(published)}</time>
        </>
      )}
      {" · Updated "}
      <time dateTime={modified}>{fmt(modified)}</time>
      {" · "}
      <Link href="/editorial-policy" className="underline underline-offset-2">
        Editorial policy
      </Link>
    </p>
  );
}
