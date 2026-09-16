export interface EventItem {
  slug: string;
  tag: string;
  title: string;
  description: string;
  isoDate: string;
  displayDate: string;
  time: string;
  format: string;
  accent: string;
}

// To add another event once one is scheduled:
// 1. Add an entry here (slug becomes the URL: /events/{slug}).
// 2. Create app/events/{slug}/page.tsx for its detail page, following the
//    same pattern as app/blog/{slug}/page.tsx or app/case-studies/{slug}/page.tsx.
// 3. Add the new route to app/sitemap.ts.
export const EVENTS: EventItem[] = [
  {
    slug: "predictable-pipeline-webinar",
    tag: "Live Webinar",
    title: "We Create 200+ Meetings Every Month Through Cold Outreach. Let's Help You Build a More Predictable Lead Pipeline.",
    description: "How Myntmore books 200+ meetings a month through cold outreach: LinkedIn, cold email, targeting, messaging, personal branding, and automation.",
    isoDate: "2026-09-19",
    displayDate: "Sep 19, 2026",
    time: "11:30 AM – 1:00 PM IST",
    format: "Online · Live Webinar",
    accent: "#8b5cf6",
  },
];

export function isUpcoming(e: EventItem): boolean {
  return e.isoDate >= new Date().toISOString().slice(0, 10);
}
