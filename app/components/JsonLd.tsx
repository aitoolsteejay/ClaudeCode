// Renders a schema.org JSON-LD <script> tag. Plain presentational component,
// safe to use from both server and client components — it has no client-only
// behaviour of its own.
export default function JsonLd({ data }: { data: object }) {
  // JSON.stringify never escapes "</", so a schema field containing the
  // literal substring "</script" (an FAQ answer, an article description,
  // anything sourced from free-form copy) would otherwise terminate this
  // tag early and leave the rest of the JSON rendered as visible page text.
  // Escaping the forward slash is valid inside a JSON string and invisible
  // to JSON.parse, so this can't change what any consumer of the schema sees.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
