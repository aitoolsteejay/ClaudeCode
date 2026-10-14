// The ten steps of the done-for-you cold email process. Kept in a plain module
// (no icons, no "use client") so the interactive explorer and the server-rendered
// page can share it: the page turns the same steps into HowTo structured data,
// so the schema always matches what the explorer shows.

export interface ProcessStep {
  short: string;
  title: string;
  summary: string;
  points: { label: string; text: string }[];
  result: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    short: "ICP",
    title: "Understand your business & ICP",
    summary: "Before a single email goes out, we map exactly who your best-fit leads are.",
    points: [
      { label: "ICP mapping", text: "Pinpoint the most relevant leads" },
      { label: "Research", text: "Go deep on your business and industry" },
    ],
    result: "Every email goes to someone who's already a great fit.",
  },
  {
    short: "Lead list",
    title: "Build a quality lead list",
    summary: "Quality over quantity: a targeted list of prospects most likely to convert.",
    points: [
      { label: "Smart lead tools", text: "Pull the freshest leads possible" },
      { label: "Segmentation", text: "Specific lists for personalised outreach" },
    ],
    result: "Each email reaches someone who can actually respond.",
  },
  {
    short: "Copy",
    title: "Craft compelling email copy",
    summary: "Personal, relevant and clear. A soft sell with a real value proposition.",
    points: [
      { label: "Subject lines", text: "That earn the open" },
      { label: "Value first", text: "Insights or solutions up front" },
      { label: "Clear CTA", text: "Schedule a call or reply" },
    ],
    result: "Better open rates, engagement and conversions.",
  },
  {
    short: "Deliverability",
    title: "Land in the inbox",
    summary: "A robust sending system that keeps you out of spam and in front of buyers.",
    points: [
      { label: "DNS setup", text: "Domains configured for deliverability" },
      { label: "IP rotation", text: "Prevents blacklisting" },
      { label: "Monitoring", text: "Email health tracked and fixed" },
    ],
    result: "Your emails get seen, consistently.",
  },
  {
    short: "Launch",
    title: "Launch the campaign",
    summary: "The list is ready and the emails are optimised, so we hit send and start tracking.",
    points: [
      { label: "Monitor", text: "Deliverability, opens, first replies" },
      { label: "Optimise", text: "Refine whatever isn't resonating" },
    ],
    result: "Leads and appointments start coming in.",
  },
  {
    short: "Nurture",
    title: "Active lead nurturing",
    summary: "Replies are where the magic begins. We nurture them into meetings.",
    points: [
      { label: "Follow-ups", text: "Personal and relevant" },
      { label: "Lead scoring", text: "Focus on the most promising" },
    ],
    result: "More meetings and longer-term relationships.",
  },
  {
    short: "Testing",
    title: "A/B testing & optimisation",
    summary: "We keep testing subject lines, copy and CTAs to find what wins.",
    points: [
      { label: "A/B testing", text: "Subject lines, copy, CTAs" },
      { label: "Metrics", text: "Replies, meetings, conversions" },
    ],
    result: "Results improve with every iteration.",
  },
  {
    short: "Reporting",
    title: "Reporting & analytics",
    summary: "Real-time metrics and clear performance reports, so you always know where you stand.",
    points: [
      { label: "Performance", text: "Opens, replies, meetings booked" },
      { label: "Engagement", text: "How leads interact" },
      { label: "Insights", text: "What to do next" },
    ],
    result: "Full transparency on how the campaign performs.",
  },
  {
    short: "Scale",
    title: "Scale & expand",
    summary: "Once we find the winning formula, we scale it.",
    points: [
      { label: "Volume", text: "Up to 1,200 emails a day" },
      { label: "New markets", text: "Tap into new niches" },
    ],
    result: "Your outreach grows with your business.",
  },
  {
    short: "Celebrate",
    title: "Celebrate success",
    summary: "We celebrate the wins and reflect on what worked, so we can repeat it.",
    points: [{ label: "Continuous improvement", text: "Every win feeds the next campaign" }],
    result: "More leads, more meetings, more opportunities.",
  },
];
