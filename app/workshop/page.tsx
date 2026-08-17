import type { Metadata } from "next";

// No unique content of its own (just an iframe embedding an external app)
// -- nothing here for Google to index, so keep it out entirely rather than
// let it sit as a thin-content page under the sitewide allow-all robots rule.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WorkshopPage() {
  return (
    <iframe
      src="https://workshop-vert-omega.vercel.app/"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
      title="Myntmore Workshop"
    />
  );
}
