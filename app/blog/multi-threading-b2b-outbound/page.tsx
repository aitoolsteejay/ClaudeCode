import type { Metadata } from "next";
import BlogArticle, { type BlogSection } from "../../components/BlogArticle";

const URL = "https://www.myntmore.com/blog/multi-threading-b2b-outbound";
const TITLE = "Multi-Threading B2B Outbound: Beyond One Contact";
const DESCRIPTION = "One contact per account is a single point of failure. Map the buying group and run role-specific threads so deals survive a quiet champion.";
const HEADLINE = "The Single-Thread Risk: Why One Contact Per Account Is Killing Your B2B Deals";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "multi threading b2b outbound",
    "multi threaded outreach",
    "single threaded deals",
    "how to multi thread a b2b account",
    "buying group outreach",
    "economic buyer champion influencer",
    "account based outreach multiple contacts",
    "why b2b deals stall",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: "When your only contact goes quiet, the deal goes with them. How to map the buying group and sequence role-specific outreach.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const SECTIONS: BlogSection[] = [
  {
    heading: "One Contact Is a Single Point of Failure",
    paragraphs: [
      "Most outbound campaigns target one person per account: the most senior title that matches the ICP. When that person replies, the whole deal rides on them. But B2B purchases are rarely one person's decision. Budget sits with one leader, the pain sits with another, and the final sign-off often needs a third. Selling to one of them and hoping they sell the rest internally is not a strategy. It's a gamble.",
    ],
  },
  {
    heading: "Why Single-Threaded Deals Stall",
    items: [
      { lead: "Your champion gets busy.", text: "The deal quietly drops down their list." },
      { lead: "They change roles or leave.", text: "Nobody else at the company knows you exist." },
      { lead: "They can't explain it upward.", text: "They love the idea but struggle to sell it to the people who control the budget." },
      { lead: "A stakeholder you never met objects.", text: "It happens in a meeting you weren't in." },
    ],
  },
  {
    heading: "Map the Buying Group Before You Send",
    paragraphs: [
      "Before you reach out to an account, map who is likely involved in the decision. For most B2B offers, that's three roles.",
    ],
    items: [
      { lead: "The economic buyer.", text: "The person who owns the budget and the outcome, often a founder, CXO or department head." },
      { lead: "The day-to-day owner.", text: "The person living with the problem, who will use or manage what you sell." },
      { lead: "The influencer.", text: "The person whose opinion carries weight, such as RevOps, IT or finance, who can quietly block a deal." },
    ],
  },
  {
    heading: "One Account, Three Angles",
    paragraphs: [
      "Multi-threading doesn't mean sending the same email to three people at the same company. That feels like spam and gets forwarded around with an eye-roll. Each role gets a message written for its own priorities. The economic buyer hears about cost and outcomes. The day-to-day owner hears about the bottleneck they deal with every week. The influencer hears about risk, fit and effort. Same offer, three relevant reasons to care.",
    ],
  },
  {
    heading: "Sequence It, Don't Blast It",
    paragraphs: [
      "Stagger the threads. Start with the person closest to the pain, then bring in the economic buyer a few days later, with a reference to the conversation if one has started. Run a LinkedIn touch alongside email so your name shows up in more than one place. When the account sees one consistent, relevant story from several directions, you stop looking like a cold vendor and start looking like someone already in the conversation.",
    ],
  },
  {
    heading: "Build Deals That Survive One Person",
    paragraphs: [
      "Multi-threading takes more research per account, which is exactly why it works. You trade a bigger list for deeper coverage of the accounts that matter. When a deal no longer depends on one inbox, one calendar or one person's job title, your pipeline stops vanishing every time a champion goes quiet.",
    ],
  },
];

const FAQ = [
  {
    question: "What is multi-threading in B2B outbound?",
    answer: "Contacting several people at the same target account, each with a message written for their own role and priorities, so the deal does not depend on a single contact.",
  },
  {
    question: "Who should you contact at a target account?",
    answer: "For most B2B offers, the economic buyer who owns budget and outcome, the day-to-day owner who lives with the problem, and an influencer such as RevOps, IT or finance who can support or block the decision.",
  },
  {
    question: "Is multi-threading the same as emailing everyone at the company?",
    answer: "No. Sending the same email to several people reads as spam. Multi-threading means different angles for different roles, staggered over time, starting with the person closest to the pain.",
  },
];

export default function MultiThreadingB2bOutbound() {
  return (
    <BlogArticle
      url={URL}
      tag="Sales Strategy"
      readTime="5 min read"
      accent="#f97316"
      title={HEADLINE}
      intro="Your champion loved the call. Then they went quiet, changed roles, or lost the internal debate. If they were your only contact, your deal went with them."
      sections={SECTIONS}
      faq={FAQ}
      articleSchema={{
        headline: HEADLINE,
        description: DESCRIPTION,
        datePublished: "2026-10-17T12:00:00+05:30",
        dateModified: "2026-10-17T12:00:00+05:30",
      }}
      related={[
        { label: "Multi-Threading B2B Deals: Win the Committee", href: "/blog/multi-threading-b2b-buying-committee" },
        { label: "The Pipeline Graveyard: Reviving Closed-Lost Leads", href: "/blog/reviving-closed-lost-leads" },
        { label: "LinkedIn Outreach Sequences That Actually Get Replies", href: "/blog/linkedin-outreach-sequences" },
        { label: "Account-based marketing services", href: "/services/account-based-marketing" },
        { label: "Cold email agency services", href: "/services/cold-email" },
      ]}
      cta={{
        heading: "Want deals that survive one person?",
        body: "We map the buying group and run role-specific outreach across email and LinkedIn. Book a free audit and we'll show you what that looks like for your accounts.",
        button: "Book a Free GTM Audit",
        href: "/founder-meeting",
      }}
      aiResources={[URL, "https://www.myntmore.com/blog/multi-threading-b2b-buying-committee", "https://www.myntmore.com"]}
    />
  );
}
