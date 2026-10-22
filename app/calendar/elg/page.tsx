import type { Metadata } from "next";
import CalendarPageClient from "../th/CalendarPageClient";

export const metadata: Metadata = {
  title: "Event-Led Growth (ELG) Strategy Session | Myntmore",
  description: "Schedule a 25-minute 1-on-1 Event-Led Growth (ELG) strategy session with Tejas Jhaveri, Founder of Myntmore.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.myntmore.com/calendar/event-led-growth" },
};

export default function ELGShortCalendarPage() {
  return (
    <CalendarPageClient
      canonicalPath="/calendar/event-led-growth"
      dataUrl="https://calendly.com/founder-myntmore/elg-25-minutes"
      badge="Event-Led Growth Consultation"
      title="Event-Led Growth (ELG) Strategy Session"
      description="25 minutes with our founder. Explore how to turn webinars, executive roundtables, and events into high-intent B2B pipeline."
      duration="25 Mins"
    />
  );
}
