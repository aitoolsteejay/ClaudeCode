// Plain data module (no "use client") so both the client-side FAQ accordion
// component and server-side pages building FAQPage JSON-LD can import the
// exact same array. Exporting this from FAQ.tsx directly doesn't work: a
// "use client" file's exports become opaque client references when consumed
// from a server component, so a server component can't actually read the
// array's contents (Next.js throws "Attempted to call map() from the server
// but map is on the client").
export interface FAQItem {
  question: string;
  answer: string;
  // Rendered as links under the answer; kept out of `answer` so the
  // FAQPage JSON-LD stays plain text.
  links?: { label: string; href: string }[];
}

import faqContent from "./faq-content.generated.json";

// Edited in the Keystatic admin (content/faqs/homepage/*.json) and built into
// faq-content.generated.json by scripts/generate-faq-content.mjs.
export const FAQ_ITEMS: FAQItem[] = faqContent;
