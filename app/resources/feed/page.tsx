import type { Metadata } from "next";
import FeedClient from "./FeedClient";

export const metadata: Metadata = {
  title: "The Feed",
  description: "Short, practical Instagram Reels on B2B outbound, LinkedIn, and AI lead generation from Myntmore. Watch the reels.",
  keywords: [
    "b2b instagram reels",
    "short-form video marketing b2b",
    "linkedin outreach video tips",
    "ai lead generation content",
    "b2b content marketing videos",
    "outbound sales video tips",
    "linkedin growth reels",
    "video marketing for founders",
    "b2b social media content",
    "instagram reels for founders",
    "ai powered lead generation videos",
    "cold email tips video",
  ],
  alternates: { canonical: "https://www.myntmore.com/resources/feed" },
  openGraph: {
    title: "The Feed | Myntmore",
    description: "Short, practical Reels on B2B outbound, LinkedIn, and AI-powered lead generation.",
    url: "https://www.myntmore.com/resources/feed",
  },
};

export default function FeedPage() {
  return <FeedClient />;
}
