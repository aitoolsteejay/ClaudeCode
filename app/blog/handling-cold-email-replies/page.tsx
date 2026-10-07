import type { Metadata } from "next";
import BlogArticle, { type BlogSection } from "../../components/BlogArticle";

const URL = "https://www.myntmore.com/blog/handling-cold-email-replies";
const TITLE = "How to Respond to Cold Email Replies Fast";
const DESCRIPTION = "A cold email reply is a door left open for about an hour. Learn how to answer the four reply types and turn them into meetings. Read the guide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "how to respond to cold email replies",
    "cold email reply handling",
    "how fast to respond to a cold email reply",
    "what to say when a prospect says send me more info",
    "cold email follow up after reply",
    "b2b reply handling process",
    "calendar link in cold email",
    "speed to lead b2b outbound",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: "The reply isn't the win. Here's what to do in the first hour after a prospect responds to your cold email.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const SECTIONS: BlogSection[] = [
  {
    heading: "The Most Expensive Moment in Your Funnel",
    paragraphs: [
      "Think about what it took to get that reply: domains, warm-up, list building, copy, testing, weeks of sends. Every one of those costs lands on a single moment, when a real human types back. And that's exactly where most teams get lazy. They answer the next morning, paste a calendar link, or send a PDF deck nobody asked for. The reply rate looks great on the dashboard, but the meetings never show up.",
    ],
  },
  {
    heading: "Speed Is the First Signal of Relevance",
    paragraphs: [
      "A widely cited Harvard Business Review study found that companies that responded to leads within an hour were nearly 7x more likely to qualify them than companies that waited even an hour longer. A cold reply works the same way. When a prospect replies, they're thinking about your problem right then. Wait until tomorrow and you're back to competing with forty other tabs. Treat every positive or curious reply like an inbound lead, because that's what it just became.",
    ],
  },
  {
    heading: "The Four Replies You'll Get (and How to Answer Each)",
    items: [
      {
        lead: "\"Send me more info.\"",
        text: "This is rarely a yes. It's usually a polite way out. Don't send a deck. Send one sharp sentence and one question: \"Happy to. So I send the right thing, is the bigger issue X or Y right now?\" A real answer means real interest. Silence means you just saved yourself a wasted demo.",
      },
      {
        lead: "\"Not right now.\"",
        text: "Ask when, not why: \"Makes sense. Is it worth me checking back in Q1, or is this off the table entirely?\" You get a date or a clean no. Both are useful.",
      },
      {
        lead: "\"Who else do you work with?\"",
        text: "They're asking for proof. Name one relevant client type and one specific outcome, then offer the call: \"Mostly Series A SaaS teams stuck at the same stage you're in. Worth 15 minutes to see if it maps?\"",
      },
      {
        lead: "\"We already have someone for this.\"",
        text: "Don't argue. Get curious: \"Good to hear. Out of interest, what would they need to be doing differently for you to look elsewhere?\" Half the time, they'll tell you.",
      },
    ],
  },
  {
    heading: "Kill the Naked Calendar Link",
    paragraphs: [
      "Replying to a warm prospect with nothing but \"Here's my Calendly\" hands them the work and makes you look like one more automated sender. Suggest two specific times, add the link as a backup, and give one line on what they'll get from the call. The goal is to make saying yes easy, not to hand them admin.",
    ],
  },
  {
    heading: "Reply Handling Is a System, Not a Mood",
    paragraphs: [
      "If replies sit in a shared inbox waiting for whoever gets to them first, your best leads are going cold. Assign ownership. Set a one-hour response window during working hours. Build a short library of answers for the four reply types above, and rewrite them every month based on what actually converts. Outbound doesn't end at the reply. That's where the real selling starts.",
    ],
  },
];

const FAQ = [
  {
    question: "How fast should I respond to a cold email reply?",
    answer: "Within an hour during working hours, ideally faster. The prospect's attention is highest the moment they reply, and it drops quickly after that.",
  },
  {
    question: "Should I send a calendar link in my first response?",
    answer: "Suggest specific times first and include the link as a backup. A bare link feels automated and puts the effort on the prospect.",
  },
  {
    question: "What's the best response to \"send me more info\"?",
    answer: "Answer with a short qualifying question instead of a deck. It separates real interest from polite brush-offs and makes whatever you send next more relevant.",
  },
];

export default function HandlingColdEmailReplies() {
  return (
    <BlogArticle
      url={URL}
      tag="Cold Email"
      readTime="5 min read"
      accent="#ef4444"
      title="The Reply Isn't the Win: What to Do in the First Hour After a Prospect Responds"
      intro="Most outbound teams obsess over getting the reply. Then it arrives, and they fumble it. A reply isn't a closed deal. It's a door left open for about an hour."
      sections={SECTIONS}
      faq={FAQ}
      articleSchema={{
        headline: "The Reply Isn't the Win: What to Do in the First Hour After a Prospect Responds",
        description: DESCRIPTION,
        datePublished: "2026-10-07T16:00:00+05:30",
        dateModified: "2026-10-07T16:00:00+05:30",
      }}
      related={[
        { label: "Cold Email Sequence Templates That Get Replies", href: "/blog/cold-email-sequence-templates" },
        { label: "The 7 B2B Lead Gen Metrics That Actually Matter", href: "/blog/b2b-lead-gen-metrics" },
        { label: "The Impression Illusion: Conversations, Not Sends", href: "/blog/conversations-not-impressions-outbound" },
        { label: "Glossary: Meeting Booked Rate", href: "/resources/glossary/meeting-booked-rate" },
        { label: "Cold email agency services", href: "/services/cold-email" },
      ]}
      cta={{
        heading: "Want replies handled like a system?",
        body: "We build and run outbound for B2B teams, including the reply handling that turns responses into booked meetings. Book a free audit and we'll show you what that looks like for your ICP.",
        button: "Book a Free GTM Audit",
        href: "/founder-meeting",
      }}
      aiResources={[URL, "https://www.myntmore.com/blog/cold-email-sequence-templates", "https://www.myntmore.com"]}
    />
  );
}
