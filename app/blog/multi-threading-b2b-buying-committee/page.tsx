import type { Metadata } from "next";
import BlogArticle, { type BlogSection } from "../../components/BlogArticle";

const URL = "https://www.myntmore.com/blog/multi-threading-b2b-buying-committee";
const TITLE = "Multi-Threading B2B Deals: Win the Committee";
const DESCRIPTION = "One champion isn't an account. Learn how to map the buying committee and multi-thread B2B deals so they survive a quiet or departing champion.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "multi-threading in b2b sales deals",
    "b2b buying committee",
    "single-threaded deals",
    "how many stakeholders in a b2b deal",
    "champion trap b2b sales",
    "how to multi-thread a deal",
    "buying group b2b outreach",
    "account based outreach multiple contacts",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: "Single-threaded deals die when the champion goes quiet. Here's how to reach the whole buying committee instead.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const SECTIONS: BlogSection[] = [
  {
    heading: "One Contact Is Not an Account",
    paragraphs: [
      "Most outbound is built around one persona and one inbox. Find the Head of Sales, write to the Head of Sales, book the Head of Sales. It feels focused. But in B2B, the person who takes your meeting is almost never the only person who decides. Gartner's research on B2B buying puts the typical buying group for a complex solution at 6 to 10 decision-makers, each arriving with their own information and their own objections.",
    ],
  },
  {
    heading: "The Champion Trap",
    paragraphs: [
      "A great champion is valuable. A lone champion is a risk. When all of your deal momentum runs through one person, you lose it the moment they get busy, get overruled by finance, or get promoted out of the role. The worst part is that you usually find out last. \"They're still reviewing internally\" is often the sound of a deal dying in a meeting you weren't invited to.",
    ],
  },
  {
    heading: "Map the Committee Before You Write a Single Line",
    paragraphs: ["For every target account, identify three roles before you send anything:"],
    items: [
      {
        lead: "The user:",
        text: "the person living with the problem every day, like an SDR manager or ops lead. They care about how much easier the work gets.",
      },
      {
        lead: "The owner:",
        text: "the person measured on the outcome, like a VP of Sales or CRO. They care about pipeline and targets.",
      },
      {
        lead: "The approver:",
        text: "the person who signs off on the spend, like the CFO or founder. They care about risk and payback.",
      },
    ],
    after: ["Each one needs a different message. The user wants relief. The owner wants results. The approver wants proof it won't be a waste of money."],
  },
  {
    heading: "Thread in Parallel, Not in Sequence",
    paragraphs: [
      "Don't wait until the first contact goes cold to try the next one. Run light, role-specific touches to two or three people at the same account in the same week. Mention the others where it's natural: \"I've also reached out to your RevOps lead, since this usually touches both teams.\" Buyers don't find this pushy. They find it realistic, because it's how their company actually buys.",
    ],
  },
  {
    heading: "Give Your Champion Something to Forward",
    paragraphs: [
      "Once you have a champion, your job is to make them look smart internally. Write them a short summary they can forward without editing: the problem, the proposed fix, the expected outcome, the cost. If your champion has to translate your pitch for their boss, you've lost control of the story.",
    ],
  },
  {
    heading: "Deals Are Won by Accounts, Not Contacts",
    paragraphs: [
      "If your pipeline is full of deals that stall after a good first call, look at how many people from each account you're actually talking to. One is a risk. Three is a deal. Build outbound around accounts and committees, not individual inboxes, and your close rate will follow.",
    ],
  },
];

const FAQ = [
  {
    question: "What is multi-threading in B2B sales?",
    answer: "Building relationships with several stakeholders at the same target account at once, instead of relying on a single contact to carry the deal internally.",
  },
  {
    question: "Won't contacting multiple people at one company annoy them?",
    answer: "Not if each message is relevant to that person's role and you're open about it. Complex purchases involve several people anyway, and reaching the right ones early reflects how the company actually buys.",
  },
  {
    question: "How many contacts per account should I target?",
    answer: "For most mid-market B2B deals, start with two or three: the person using the solution, the person owning the outcome, and the person approving the budget.",
  },
];

export default function MultiThreadingBuyingCommittee() {
  return (
    <BlogArticle
      url={URL}
      tag="Sales Strategy"
      readTime="5 min read"
      accent="#f97316"
      title="Single-Threaded Deals Die: Why You Need the Whole Buying Committee, Not One Champion"
      intro="You booked the meeting. The champion loved it. Then they went quiet, or left the company, and the deal died with them. That isn't bad luck. It's a single-threaded deal."
      sections={SECTIONS}
      faq={FAQ}
      articleSchema={{
        headline: "Single-Threaded Deals Die: Why You Need the Whole Buying Committee, Not One Champion",
        description: DESCRIPTION,
        datePublished: "2026-10-07T16:00:00+05:30",
        dateModified: "2026-10-07T16:00:00+05:30",
      }}
      related={[
        { label: "Glossary: Multi-Threading", href: "/resources/glossary/multi-threading" },
        { label: "Account-Based Marketing services", href: "/services/account-based-marketing" },
        { label: "ICP Mapping for B2B: Define the Exact Buyer Who Will Close", href: "/blog/icp-mapping-b2b" },
        { label: "LinkedIn Outreach Sequences That Actually Get Replies", href: "/blog/linkedin-outreach-sequences" },
      ]}
      cta={{
        heading: "Want outbound built around accounts, not inboxes?",
        body: "Our account-based programs reach the buying committee, not a single contact. Book a free audit and we'll map how that would look for your target accounts.",
        button: "Book a Free GTM Audit",
        href: "/founder-meeting",
      }}
      aiResources={[URL, "https://www.myntmore.com/services/account-based-marketing", "https://www.myntmore.com"]}
    />
  );
}
