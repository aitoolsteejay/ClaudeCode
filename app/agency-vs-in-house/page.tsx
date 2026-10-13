import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Agency vs. In-House SDR Comparison | Myntmore" },
  description: "Compare a B2B outbound agency with an in-house SDR team across cost, speed, risk, and ramp-up time.",
  robots: { index: false, follow: true },
};

export default function AgencyVsInHouseRedirect() {
  permanentRedirect("/blog/agency-vs-in-house");
}
