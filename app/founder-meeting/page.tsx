import type { Metadata } from "next";
import FounderMeetingClient from "./FounderMeetingClient";

export const metadata: Metadata = {
  title: "Book a Call with Our Founder",
  description: "Pick a time to talk with Myntmore's founder about your outbound pipeline. 30 minutes, no pitch, no pressure.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://myntmore.com/founder-meeting" },
};

export default function FounderMeetingPage() {
  return <FounderMeetingClient />;
}
