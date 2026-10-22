import type { Metadata } from "next";
import CalendarPageClient from "../th/CalendarPageClient";

export const metadata: Metadata = {
  title: "Schedule a Call | Tejas Jhaveri | Myntmore",
  description: "Schedule a 30-minute 1-on-1 strategy call with Tejas Jhaveri, Founder of Myntmore.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.myntmore.com/calendar/cold-emailing" },
};

export default function CalendarColdEmailingPage() {
  return (
    <CalendarPageClient
      canonicalPath="/calendar/cold-emailing"
      dataUrl="https://calendly.com/founder-myntmore/email"
      badge="Cold Email Infrastructure & Strategy Consultation"
      title="Pick a time that works for you"
      description="30 minutes with our founder. Review your cold email infrastructure, deliverability, domain warming, and high-converting copy angles — with zero sales pressure."
      duration="30 Mins"
    />
  );
}
