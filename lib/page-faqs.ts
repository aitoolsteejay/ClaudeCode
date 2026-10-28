import data from "./page-faqs.generated.json";

// FAQs for every page except the homepage, edited in the Keystatic admin
// ("Page FAQs") and built into page-faqs.generated.json by
// scripts/generate-faq-content.mjs. A page asks for its list by file name, e.g.
// pageFaqs("lp-pharma"). Pages that name the fields q/a use pageFaqsQA.
export interface PageFaq {
  question: string;
  answer: string;
}

const FAQS: Record<string, PageFaq[]> = data;

export function pageFaqs(id: string): PageFaq[] {
  const items = FAQS[id];
  if (!items) throw new Error(`No FAQs for "${id}": add content/faqs/pages/${id}.json`);
  return items;
}

export function pageFaqsQA(id: string): { q: string; a: string }[] {
  return pageFaqs(id).map(({ question, answer }) => ({ q: question, a: answer }));
}
