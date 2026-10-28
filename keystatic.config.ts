import { collection, config, fields } from "@keystatic/core";

// Content lives as JSON files in the repo. `npm run faqs:build` (run by
// prebuild) turns them into lib/faq-content.generated.json, which
// lib/faq-data.ts re-exports, so the FAQ components and FAQPage JSON-LD read
// the same data they always did.
export default config({
  storage: { kind: "local" },
  collections: {
    homepageFaqs: collection({
      label: "Homepage FAQs",
      path: "content/faqs/homepage/*",
      format: "json",
      slugField: "question",
      schema: {
        question: fields.slug({
          name: { label: "Question", validation: { isRequired: true } },
        }),
        answer: fields.text({
          label: "Answer",
          description:
            "Answer first, 40 to 60 words. Plain text only: it is also used in the FAQPage structured data.",
          multiline: true,
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: "Order",
          description: "Lowest number shows first.",
          validation: { isRequired: true },
        }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Link text" }),
            href: fields.text({ label: "Link path, e.g. /services" }),
          }),
          {
            label: "Links under the answer (optional)",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
  },
});
