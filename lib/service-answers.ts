// One definition per service: the direct answer shown at the top of each
// service page (app/components/AnswerBlock.tsx) and reused verbatim in
// public/llms-full.txt, so the wording a visitor, a search engine and an AI
// system each see is the same.
//
// Every claim here restates something the service page itself already says
// (its hero, deliverables, who-it's-for, FAQ). Add nothing here that the page
// does not back up, and keep `answer` between 40 and 60 words with the
// definition in the first sentence -- the snippet-friendly range described in
// docs/seo-aeo-geo-cadence.md. `npm run audit:answers` checks the length.

import data from "./service-answers.json";

export interface ServiceAnswer {
  slug: string;
  name: string;
  url: string;
  question: string;
  answer: string;
  who: string;
  gets: string;
  outcome: string;
}

// The entries live in service-answers.json so Node scripts (the llms-full.txt
// generator and the answer-length audit) can read the same data without a
// TypeScript build step.
export const SERVICE_ANSWERS: ServiceAnswer[] = data;

export const SERVICE_ANSWER_BY_SLUG: Record<string, ServiceAnswer> = Object.fromEntries(SERVICE_ANSWERS.map((s) => [s.slug, s]));
