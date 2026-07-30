"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can we expect results?",
    answer:
      "Most clients start seeing qualified meetings booked within 3–4 weeks of campaign launch. The first two weeks are focused on ICP finalization, copy development, and infrastructure setup. By week 3, sequences are live. By week 4, you're typically seeing replies and booked calls. Full momentum consistent meeting volume usually hits by week 6–8 as we optimize based on real response data.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work primarily with B2B companies SaaS, fintech, professional services, HR tech, martech, and enterprise software. We've run campaigns for companies selling to SMBs, mid-market, and enterprise buyers. If your target audience is a business buyer (founder, executive, or department head) and your deal size justifies outbound, we can build a program that works.",
  },
  {
    question: "Do you handle copywriting and strategy?",
    answer:
      "Yes completely. We own the entire outbound function from strategy through execution. That includes ICP research, campaign architecture, sequence copywriting, LinkedIn messaging, A/B testing, and performance reporting. Your team's only job is to show up to the calls we book. We do require a 1–2 hour onboarding call to absorb your positioning and customer intelligence, but from there we take it off your plate.",
  },
  {
    question: "What's the minimum engagement?",
    answer:
      "Our minimum engagement is a 3-month retainer. Outbound is a compounding channel the data you gather in month one makes month two better, and month two makes month three stronger. We don't do one-off campaigns because they don't generate the results we stand behind. After month three, engagements move to month-to-month with 30-day notice.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We report on a clear set of metrics every week: emails sent, open rates, reply rates (positive, neutral, negative), meetings booked, and show rates. At the account level, we track pipeline generated and closed-won attribution where your CRM allows it. We set upfront targets in your first campaign brief and hold ourselves accountable to them if we're not hitting benchmarks, we tell you why and what we're doing about it.",
  },
  {
    question: "Do you integrate with our CRM?",
    answer:
      "Yes. We support HubSpot, Salesforce, Pipedrive, and most other major CRMs. When a meeting is booked, we log the contact, the touchpoint history, and notes from the conversation directly into your CRM so your AE has full context before the call. We can also sync campaign activity for attribution reporting. Setup is part of your onboarding process.",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        isOpen
          ? "border-[rgba(245,183,49,0.4)]"
          : "hover:border-neutral-300"
      }`}
      style={
        isOpen
          ? { backgroundColor: "#FEF9EE", borderColor: "rgba(245,183,49,0.4)", borderLeftColor: "#F5B731", borderLeftWidth: "3px" }
          : { backgroundColor: "#FFFFFF", borderColor: "#E8E2D9" }
      }
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 pr-4 ${
            isOpen ? "text-[#0a0a0a]" : "text-neutral-700 group-hover:text-[#0a0a0a]"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          style={{
            background: isOpen ? "rgba(245,183,49,0.15)" : "#F4F4F5",
            border: isOpen
              ? "1px solid rgba(245,183,49,0.4)"
              : "1px solid #E4E4E7",
          }}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            style={{ color: isOpen ? "#F5B731" : "#A1A1AA" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`accordion-content px-6 ${isOpen ? "open pb-6" : ""}`}
      >
        <p className="text-[#52525B] text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="faq-heading"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#F5B731",
              borderColor: "rgba(245,183,49,0.35)",
              background: "#FEF9EC",
            }}
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight"
          >
            Common Questions
          </h2>
          <p className="mt-4 text-[#52525B] text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>

        {/* Still have questions nudge */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm mb-4">
            Still have questions? We&rsquo;re happy to chat.
          </p>
          <a
            href="https://calendly.com/founder-myntmore/web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
          >
            Talk to our team
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
