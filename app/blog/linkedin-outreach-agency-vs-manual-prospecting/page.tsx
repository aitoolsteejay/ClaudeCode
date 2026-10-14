import type { Metadata } from "next";
import BlogArticle, { type BlogSection, type BlogComparison } from "../../components/BlogArticle";

const URL = "https://www.myntmore.com/blog/linkedin-outreach-agency-vs-manual-prospecting";
const TITLE = "LinkedIn Outreach Agency vs. Manual Prospecting";
const DESCRIPTION = "LinkedIn outreach agency vs. prospecting yourself: time, consistency, account risk, control and when each makes sense. Read the comparison.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "linkedin outreach agency vs manual prospecting",
    "hire a linkedin outreach agency or do it yourself",
    "manual linkedin prospecting for founders",
    "when to outsource linkedin lead generation",
    "linkedin outreach agency pros and cons",
    "linkedin lead generation agency or in-house",
    "founder-led linkedin outreach",
    "outsourced linkedin prospecting",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Myntmore`,
    description: "When to prospect on LinkedIn yourself, when to hand it to an agency, and what each choice really costs you.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

const SECTIONS: BlogSection[] = [
  {
    heading: "The short answer",
    paragraphs: [
      "Prospect manually while you are still learning who buys and which message earns a reply. Hand it to an agency once the approach works and your own time, not your idea, is what limits how much of it gets done. The mistake is outsourcing the experiments: an agency can run a proven process, but it cannot tell you what to sell.",
    ],
  },
  {
    heading: "What manual LinkedIn prospecting really involves",
    paragraphs: [
      "Done properly, it is more than sending connection requests. Someone has to decide who is worth contacting, write a note that does not read like a template, follow up without being pushy, answer every reply, and keep track of where each conversation stands. Done by the founder, it has real advantages: the voice is genuine, you hear objections first-hand, and you learn fast.",
      "The weakness is consistency. Manual prospecting is the first thing to slip in a busy week, and an outreach programme that runs for three days and stops for ten rarely builds momentum.",
    ],
  },
  {
    heading: "What an agency changes",
    paragraphs: [
      "An agency replaces your time with a team and a process: research on who to contact, personalised connection requests and follow-ups, reply handling, content that makes your profile credible, and reporting on what is working. At Myntmore that is a dedicated growth team and AI agents, with activity kept within LinkedIn's limits, and about 90 minutes a month of your own input.",
      "The trade-offs are real. You give up some hands-on control, you need to brief the team well, and the work is only as good as the ICP and message it starts from. An agency is a fee instead of your time, so it only pays off if your time is worth more elsewhere.",
    ],
  },
];

const COMPARISON: BlogComparison = {
  heading: "Side by side",
  columns: ["Manual prospecting", "LinkedIn outreach agency"],
  rows: [
    { factor: "Your time", a: "Daily, and it competes with selling, product and hiring.", b: "A short monthly input plus approvals; the team does the daily work." },
    { factor: "Consistency", a: "Depends on your week. Easy to let slip.", b: "Runs on a schedule regardless of how busy you are." },
    { factor: "Targeting depth", a: "Limited by how much research you can do by hand.", b: "Systematic ICP research and list building, refined as results come in." },
    { factor: "Personalisation", a: "Highest per message, but low volume.", b: "Personalised at a larger scale using AI agents, with a team checking quality." },
    { factor: "Account risk", a: "Low if you stay well under LinkedIn's limits.", b: "Depends on the provider. Ask how volume is limited; careless automation can get an account restricted." },
    { factor: "Learning speed", a: "Fast first-hand feedback on objections and replies.", b: "Feedback arrives as reports and reply data, one step removed." },
    { factor: "Control and voice", a: "Complete.", b: "Shared: content and messaging are written from your input and approved by you." },
    { factor: "What you pay", a: "Your own time, which is the opportunity cost.", b: "A service fee for the work of several roles." },
    { factor: "Best fit", a: "Validating your ICP and message; a short list of accounts you already know.", b: "A proven message and a founder or team with no time to run it consistently." },
  ],
  note: "This is Myntmore's own assessment. We sell LinkedIn outreach, so we have an interest in the answer; the rows describe trade-offs, not guarantees.",
};

const CLOSING: BlogSection[] = [
  {
    heading: "Which one fits you",
    items: [
      { lead: "Early-stage founder still finding the message:", text: "Prospect yourself first. The replies you read personally are the cheapest market research you will get, and you will brief an agency far better afterwards." },
      { lead: "Founder with a message that works and no time:", text: "This is the case an agency is built for. Hand over the process you have proven and keep the weekly conversation about strategy." },
      { lead: "A small list of accounts you already know by name:", text: "Manual is usually enough. Volume and automation add little when you can write to every account personally." },
      { lead: "A team that already has sellers prospecting:", text: "Fix the process and the message before adding capacity. More activity on a weak message only produces more silence." },
    ],
    after: [
      "A sensible middle path is to run the process yourself for a few weeks, write down what worked, and use that as the brief. Our guide on 58 meetings from 600 LinkedIn connections lays out that process step by step.",
    ],
  },
];

const FAQ = [
  {
    question: "Is LinkedIn outreach automation safe for my account?",
    answer: "Safety depends on staying within LinkedIn's limits: modest daily volumes, personalised messages and a gradual ramp-up. Myntmore keeps activity within those limits. Any automation carries some platform risk, so ask every provider how they cap volume and what happens if an account is restricted.",
  },
  {
    question: "When should a founder stop prospecting manually on LinkedIn?",
    answer: "Stop when your message and ICP are proven and the work is crowding out selling. A useful signal is that you know which message earns replies and which buyers convert, but consistency slips whenever you get busy. Hand over the proven process, not the experiments.",
  },
  {
    question: "Can an agency write in my voice?",
    answer: "Yes, if it starts from you. At Myntmore, content is written from a short monthly interview with you and reviewed by you before it goes live, so it reflects your ideas. The closer the brief and your approvals, the closer the result sounds to you.",
  },
];

export default function LinkedinOutreachAgencyVsManualProspecting() {
  return (
    <BlogArticle
      url={URL}
      tag="Comparison"
      readTime="6 min read"
      accent="#0A66C2"
      title="LinkedIn Outreach Agency vs. Manual Prospecting: Which Should You Choose?"
      intro="Prospect manually while you are still learning who buys and which message gets replies. Hire an agency once the approach works and your time is the bottleneck. Here is how the two compare, and where each one breaks down."
      sections={SECTIONS}
      comparison={COMPARISON}
      closingSections={CLOSING}
      faq={FAQ}
      articleSchema={{
        headline: "LinkedIn Outreach Agency vs. Manual Prospecting: Which Should You Choose?",
        description: DESCRIPTION,
        datePublished: "2026-10-14T12:00:00+05:30",
        dateModified: "2026-10-14T12:00:00+05:30",
      }}
      related={[
        { label: "LinkedIn Outreach & Automation Services", href: "/services/linkedin-outreach" },
        { label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections" },
        { label: "LinkedIn Outreach Sequences That Get Replies", href: "/blog/linkedin-outreach-sequences" },
        { label: "Bootstrapped Founder: 0 to 22K Followers, 8 Deals", href: "/case-studies/founder-personal-brand-linkedin" },
        { label: "Agency vs. In-House SDR for B2B Outbound", href: "/blog/agency-vs-in-house" },
      ]}
      cta={{
        heading: "Not sure which fits your stage?",
        body: "Book a free strategy call. We will tell you honestly whether to keep prospecting yourself for now or hand it over.",
        button: "Book a Free Strategy Call",
        href: "/founder-meeting",
      }}
      aiResources={[URL, "https://www.myntmore.com/services/linkedin-outreach", "https://www.myntmore.com"]}
    />
  );
}
