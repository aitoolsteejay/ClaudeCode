import type { Metadata } from "next";
import BlogArticle, { type BlogSection } from "../../components/BlogArticle";

const URL = "https://www.myntmore.com/blog/cold-email-follow-up-sequence";
const TITLE = "Cold Email Follow-Up Sequence: The 5-Step Ladder";
const DESCRIPTION = "Most outbound dies after one email. Plan a five-touch follow-up ladder over 18 days where every message adds a new reason to reply. Read the guide.";
const HEADLINE = "The Follow-Up Ladder: Why Your First Email Is Only the Introduction";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cold email follow up sequence",
    "how many follow ups in cold email",
    "cold email follow up cadence",
    "cold email follow up examples",
    "how to follow up after no reply",
    "b2b email follow up strategy",
    "cold email breakup email",
    "just bumping this email",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: "Most campaigns don't die from bad copy. They die after one email. Here is the five-rung follow-up ladder we use.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const SECTIONS: BlogSection[] = [
  {
    heading: "Most Founders Quit After One Touch",
    paragraphs: [
      "A founder sends a sharp, well-researched cold email. Nothing comes back. Two days later they decide the prospect isn't interested and move on to the next name on the list. That instinct feels polite. In practice, it throws away most of the meetings the campaign was ever going to book. Busy decision-makers rarely reply to the first message, not because it was wrong, but because it landed on the wrong day.",
    ],
  },
  {
    heading: "Silence Isn't a No",
    paragraphs: [
      "A prospect who didn't reply hasn't rejected you. They were in back-to-back calls, travelling, or saving your email for later and then forgot it. Silence is missing information, not a verdict. The job of a follow-up sequence is to give a skeptical, distracted buyer several fair chances to notice you, each one easier to say yes to than the last.",
    ],
  },
  {
    heading: "\"Just Bumping This\" Is a Feature Dump in Disguise",
    paragraphs: [
      "The most common follow-up is also the laziest: \"Just bumping this to the top of your inbox.\" It adds nothing. It asks the prospect to do the work of re-reading your first email and deciding again. Every follow-up should stand on its own and give the reader a new reason to reply: a new angle, a new piece of proof, or a new way in.",
    ],
  },
  {
    heading: "The Follow-Up Ladder",
    paragraphs: [
      "We structure follow-ups as a ladder. Each rung adds one new reason to reply and lowers the effort it takes to do so.",
    ],
    items: [
      { lead: "Day 1, the observation.", text: "A specific, pattern-breaking point about their bottleneck. One question at the end, no calendar link." },
      { lead: "Day 3, the consequence.", text: "The same problem, seen from the cost side. What it is likely costing them this quarter if nothing changes." },
      { lead: "Day 7, the proof.", text: "A short, real outcome from a company that looks like theirs. Two sentences, one number, no case-study PDF." },
      { lead: "Day 12, the give.", text: "A resource they can use today without talking to you. A template, a teardown, a short Loom. No ask at all." },
      { lead: "Day 18, the clean close.", text: "\"Should I close the loop on this?\" A respectful exit is often the message that finally gets a reply." },
    ],
  },
  {
    heading: "Know When to Stop",
    paragraphs: [
      "Persistence has a ceiling. Four or five well-spaced touches over two to three weeks is enough for most B2B buyers. Beyond that you are training their inbox to ignore you. Every message needs a working opt-out, and any request to stop is honoured immediately across every future send, not just this campaign. If a prospect hasn't engaged by the last rung, move them to a different channel, such as a LinkedIn touch, or park them for a fresh trigger next quarter.",
    ],
  },
  {
    heading: "Persistence Without Pressure",
    paragraphs: [
      "The goal of follow-up isn't to wear people down. It is to be useful often enough, and briefly enough, that replying becomes the easy option. Plan the whole ladder before you send the first email, and the second, third and fourth messages stop being an afterthought and start doing the heavy lifting.",
    ],
  },
];

const FAQ = [
  {
    question: "How many follow-up emails should you send in a cold email sequence?",
    answer: "Four or five touches in total, spaced over two to three weeks, is enough for most B2B buyers. Past that, extra sends mostly train the prospect's inbox to ignore you.",
  },
  {
    question: "How long should you wait between cold email follow-ups?",
    answer: "Start close and widen the gap. A workable cadence is day 1, day 3, day 7, day 12 and day 18, so each message arrives on a different day and the early ones catch buyers while your first email is still fresh.",
  },
  {
    question: "What should a cold email follow-up say?",
    answer: "Something new each time: a different angle on the problem, a short proof point, or a useful resource. A message that only asks the prospect to re-read your first email adds no reason to reply.",
  },
];

export default function ColdEmailFollowUpSequence() {
  return (
    <BlogArticle
      url={URL}
      tag="Cold Email"
      readTime="4 min read"
      accent="#ef4444"
      title={HEADLINE}
      intro="Most outbound campaigns don't die from bad copy. They die after one email, because nobody planned what comes second."
      sections={SECTIONS}
      faq={FAQ}
      articleSchema={{
        headline: HEADLINE,
        description: DESCRIPTION,
        datePublished: "2026-10-17T12:00:00+05:30",
        dateModified: "2026-10-17T12:00:00+05:30",
      }}
      related={[
        { label: "Cold Email Sequence Templates That Get Replies", href: "/blog/cold-email-sequence-templates" },
        { label: "The Reply Isn't the Win: What to Do in the First Hour", href: "/blog/handling-cold-email-replies" },
        { label: "The Reply Gap: Why Positive Replies Die Before Meetings", href: "/blog/positive-reply-to-booked-meeting" },
        { label: "Cold Email Compliance Guide", href: "/blog/cold-email-compliance-guide" },
        { label: "Cold Email ROI Calculator", href: "/tools/cold-email-roi-calculator" },
        { label: "Cold email agency services", href: "/services/cold-email" },
      ]}
      cta={{
        heading: "Want a follow-up ladder built for your ICP?",
        body: "We build and run outbound for B2B teams, including the full sequence behind every first email. Book a free audit and we'll show you what it looks like for your buyers.",
        button: "Book a Free GTM Audit",
        href: "/book-a-call",
      }}
      aiResources={[URL, "https://www.myntmore.com/blog/cold-email-sequence-templates", "https://www.myntmore.com"]}
    />
  );
}
