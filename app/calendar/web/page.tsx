import type { Metadata } from "next";
import CalendarPageClient from "../th/CalendarPageClient";

export const metadata: Metadata = {
  title: "Schedule a Call | Tejas Jhaveri | Myntmore",
  description: "Schedule a 30-minute 1-on-1 strategy call with Tejas Jhaveri, Founder of Myntmore.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.myntmore.com/calendar/web" },
};

export default function CalendarWebPage() {
  return (
    <CalendarPageClient
      canonicalPath="/calendar/web"
      dataUrl="https://calendly.com/founder-myntmore/web"
      badge="1-on-1 Founder Consultation"
      title="Pick a time that works for you"
      description="30 minutes with our founder. No pitch, no pressure — just an honest, actionable review of your outbound pipeline and growth roadmap."
      duration="30 Mins"
    />
  );
}
