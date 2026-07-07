import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop | Myntmore",
  description: "Myntmore Workshop — live session resources and materials.",
  robots: { index: false, follow: false },
};

export default function WorkshopPage() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="https://workshop-vert-omega.vercel.app/workshop"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write"
        title="Myntmore Workshop"
      />
    </div>
  );
}
