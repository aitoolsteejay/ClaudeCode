// Renders a schema.org JSON-LD <script> tag. Plain presentational component,
// safe to use from both server and client components — it has no client-only
// behaviour of its own.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
