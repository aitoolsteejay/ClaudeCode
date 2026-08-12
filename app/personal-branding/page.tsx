import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Personal Branding Services Mumbai",
  description: "Personal branding and LinkedIn ghostwriting for B2B founders in Mumbai. Position yourself as the authority in your space and generate inbound leads.",
  alternates: { canonical: "https://www.myntmore.com/services/personal-branding" },
};

export default function PersonalBrandingRedirect() {
  redirect("/services/personal-branding");
}
