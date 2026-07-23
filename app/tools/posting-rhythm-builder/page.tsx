import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posting Rhythm Builder",
  description: "Free tool to plan a consistent LinkedIn posting rhythm. Build a content cadence that keeps your personal brand visible to your ICP.",
  alternates: { canonical: "https://myntmore.com/tools/posting-rhythm-builder" },
};

export default function PostingRhythmBuilder() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="https://posting-rhtyhem.vercel.app/"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write"
        title="Posting Rhythm Builder"
      />
    </div>
  );
}
