import type { Metadata } from "next";
import { SITE_URL } from "./schema";

export function buildToolSocialMetadata(
  title: string,
  description: string,
  path: string
): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = `${title} | Myntmore`;
  const image = `${SITE_URL}/og-image.png`;

  return {
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Myntmore",
      images: [{ url: image, width: 1200, height: 630, alt: "Myntmore B2B growth systems" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
