import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import PostingRhythmClient from "./PostingRhythmClient";

export const metadata: Metadata = {
  title: "Posting Rhythm Builder",
  description: "Free tool to plan a consistent LinkedIn posting rhythm. Build a content cadence that keeps your personal brand visible to your ICP.",
  keywords: [
    "linkedin posting rhythm builder",
    "content calendar generator linkedin",
    "linkedin posting schedule planner",
    "free content cadence planner",
    "linkedin content strategy planner",
    "how often should i post on linkedin",
    "personal brand posting schedule tool",
    "linkedin content plan generator",
    "linkedin posting frequency calculator",
    "content consistency planner",
    "linkedin visibility strategy tool",
    "free linkedin content planner",
    "b2b content calendar tool",
    "linkedin posting cadence generator",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/posting-rhythm-builder" },
};

export default function PostingRhythmBuilder() {
  return (
    <InnerLayout>
      <PostingRhythmClient />
    </InnerLayout>
  );
}
