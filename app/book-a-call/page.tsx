import type { Metadata } from "next";
import BookACallClient from "./BookACallClient";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Free B2B Growth Audit",
  description: "Pick a time for a free 30-minute B2B growth and outbound pipeline audit with Myntmore's senior team. Audit your ICP, messaging, and outbound systems. No pitch, no pressure.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.myntmore.com/book-a-call" },
  openGraph: {
    title: "Book a Strategy Call | Free B2B Growth Audit | Myntmore",
    description: "Pick a time for a free 30-minute B2B growth and outbound pipeline audit with Myntmore's senior team. Audit your ICP, messaging, and outbound systems. No pitch, no pressure.",
    url: "https://www.myntmore.com/book-a-call",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
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

export default function BookACallPage() {
  return <BookACallClient />;
}
