import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const theme = searchParams.get("theme");
  const isDark = theme === "dark";

  const logoFileName = isDark ? "logo-white.png" : "logo.png";
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", logoFileName));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  if (isDark) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px 68px",
            backgroundColor: "#0A0A0A",
            backgroundImage:
              "radial-gradient(circle at 92% 14%, rgba(245, 183, 49, 0.22) 0%, transparent 50%), radial-gradient(circle at 8% 86%, rgba(217, 119, 6, 0.18) 0%, transparent 45%)",
            color: "#FFFFFF",
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={logoBase64}
              width={185}
              height={120}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(245, 183, 49, 0.12)",
                border: "1.5px solid rgba(245, 183, 49, 0.35)",
                borderRadius: "999px",
                padding: "10px 22px",
                color: "#F5B731",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "1.8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  backgroundColor: "#F5B731",
                }}
              />
              <span>B2B GROWTH & OUTBOUND SYSTEMS</span>
            </div>
          </div>

          {/* Middle Hero Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "6px",
              marginBottom: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "70px",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-1.5px",
                color: "#FFFFFF",
              }}
            >
              <span>More conversations.</span>
              <span>More pipeline.</span>
              <span style={{ color: "#F5B731" }}>Less guesswork.</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  color: "#A1A1AA",
                  fontWeight: 500,
                }}
              >
                Cold Email Infrastructure · LinkedIn Outreach · AI Sales Intelligence
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1.5px solid rgba(255, 255, 255, 0.12)",
              paddingTop: "20px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {["12K+ Meetings Booked", "$120M+ Pipeline", "Zero Sales Spam"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "flex",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#E4E4E7",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "22px",
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  backgroundColor: "#F5B731",
                }}
              />
              <span>myntmore.com</span>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  // Default: Signature Cream Edition
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 68px",
          backgroundColor: "#F8F6F2",
          backgroundImage:
            "radial-gradient(circle at 92% 14%, rgba(245, 183, 49, 0.28) 0%, transparent 45%), radial-gradient(circle at 8% 86%, rgba(217, 119, 6, 0.16) 0%, transparent 45%)",
          color: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={logoBase64}
            width={185}
            height={120}
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#FEF9EC",
              border: "1.5px solid rgba(245, 183, 49, 0.5)",
              borderRadius: "999px",
              padding: "10px 22px",
              color: "#A14A08",
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "1.8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                backgroundColor: "#F5B731",
              }}
            />
            <span>B2B GROWTH & OUTBOUND SYSTEMS</span>
          </div>
        </div>

        {/* Middle Hero Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "6px",
            marginBottom: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "70px",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-1.5px",
              color: "#0A0A0A",
            }}
          >
            <span>More conversations.</span>
            <span>More pipeline.</span>
            <span style={{ color: "#D97706" }}>Less guesswork.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "6px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                color: "#52525B",
                fontWeight: 500,
              }}
            >
              Cold Email Infrastructure · LinkedIn Outreach · AI Sales Intelligence
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1.5px solid #E8E2D9",
            paddingTop: "20px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {["12K+ Meetings Booked", "$120M+ Pipeline", "Zero Sales Spam"].map((badge) => (
              <span
                key={badge}
                style={{
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#3D3D3D",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D9",
                  borderRadius: "999px",
                  padding: "6px 14px",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "22px",
              fontWeight: 800,
              color: "#0A0A0A",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                backgroundColor: "#D97706",
              }}
            />
            <span>myntmore.com</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
