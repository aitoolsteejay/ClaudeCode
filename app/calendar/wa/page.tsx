import type { Metadata } from "next";
import CalendarPageClient from "../th/CalendarPageClient";

export const metadata: Metadata = {
  title: "Schedule a Call | Tejas Jhaveri | Myntmore",
  description: "Schedule a 30-minute 1-on-1 strategy call with Tejas Jhaveri, Founder of Myntmore.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.myntmore.com/calendar/whatsapp" },
};

export default function CalendarWAShortPage() {
  return (
    <CalendarPageClient
      canonicalPath="/calendar/whatsapp"
      dataUrl="https://calendly.com/founder-myntmore/wa"
      badge="WhatsApp & Multi-Channel Pipeline Consultation"
      title="Pick a time that works for you"
      description="30 minutes with our founder. Review your outbound pipeline, messaging strategy, and conversion workflows — with zero sales pressure."
      duration="30 Mins"
    />
  );
}
