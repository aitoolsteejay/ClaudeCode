import type { Metadata } from "next";
import FeedClient from "./FeedClient";

export const metadata: Metadata = {
  title: "The Feed",
  description: "Short, practical Instagram Reels on B2B outbound, LinkedIn, and AI-powered lead generation from Myntmore.",
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
