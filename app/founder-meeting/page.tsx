import type { Metadata } from "next";
import FounderMeetingClient from "./FounderMeetingClient";

export const metadata: Metadata = {
  title: "Book a Call with Our Founder",
  description: "Pick a time to talk with Myntmore's founder about your outbound pipeline. 30 minutes, no pitch, no pressure.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.myntmore.com/founder-meeting" },
  keywords: [
    "book a call with myntmore founder",
    "book b2b growth strategy call",
    "free gtm audit",
    "b2b outbound strategy session",
    "book a free consultation",
    "talk to tejas jhaveri",
    "schedule a founder call",
    "b2b pipeline audit call",
    "30 minute strategy call",
    "free b2b growth audit",
    "book a discovery call",
    "outbound audit call",
  ],
};

export default function FounderMeetingPage() {
  return <FounderMeetingClient />;
}
