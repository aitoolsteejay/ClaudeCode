import type { Metadata } from "next";

// No unique content of its own (just a Zoho form iframe) -- nothing here
// for Google to index, so keep it out entirely rather than let it sit as
// a thin-content page under the sitewide allow-all robots rule.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <iframe
      src="https://forms.zohopublic.com/flintstop/form/AIMarketingWorkshopFeedbackForm/formperma/tkDdJGGUazPCLTkWBkT7O_z5DYyWiXWFptBuGoWdjIk"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
      title="AI Marketing Workshop Feedback"
    />
  );
}
