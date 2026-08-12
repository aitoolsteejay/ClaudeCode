import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import PostingRhythmClient from "./PostingRhythmClient";

export const metadata: Metadata = {
  title: "Posting Rhythm Builder",
  description: "Free tool to plan a consistent LinkedIn posting rhythm. Build a content cadence that keeps your personal brand visible to your ICP.",
  alternates: { canonical: "https://www.myntmore.com/tools/posting-rhythm-builder" },
};

export default function PostingRhythmBuilder() {
  return (
    <InnerLayout>
      <PostingRhythmClient />
    </InnerLayout>
  );
}
