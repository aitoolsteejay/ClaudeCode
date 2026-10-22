import type { Metadata } from "next";
import CalendarPageClient from "./CalendarPageClient";

export const metadata: Metadata = {
  title: "Schedule a Call | Tejas Jhaveri | Myntmore",
  description: "Schedule a 30-minute 1-on-1 strategy call with Tejas Jhaveri, Founder of Myntmore.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.myntmore.com/calendar/th" },
};

export default function CalendarTHPage() {
  return <CalendarPageClient canonicalPath="/calendar/th" />;
}
