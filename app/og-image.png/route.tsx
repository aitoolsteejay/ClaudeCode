import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#F8F6F2",
          color: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 800 }}>
          <span>Mynt</span>
          <span style={{ color: "#F5B731" }}>more</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 1000 }}>
          <span
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: "2px solid #E5C586",
              borderRadius: 999,
              padding: "10px 20px",
              color: "#A7600A",
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            B2B GROWTH SYSTEMS
          </span>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 900, lineHeight: 1.06 }}>
            <span>More conversations.</span>
            <span>More pipeline.</span>
            <span style={{ color: "#D97706" }}>Less guesswork.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "#52525B" }}>
          <span>Cold email · LinkedIn · AI-powered outbound</span>
          <span style={{ color: "#0A0A0A", fontWeight: 700 }}>myntmore.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
