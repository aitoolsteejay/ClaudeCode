import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /tools/dm-angle-generator itself is a real page (own canonical tag,
      // wins over the rewrite below since static routes take priority).
      // But next.config.js also rewrites /tools/dm-angle-generator/:path*
      // to an external Lovable app we don't control, for ANY sub-path or
      // query string -- if that app's own internal links generate further
      // sub-paths, Googlebot would crawl an open-ended, ever-expanding set
      // of URLs that all appear to be on this domain. Disallowing the
      // subtree (trailing slash, so the exact base page above is
      // unaffected) closes that off at the only layer we actually control.
      disallow: "/tools/dm-angle-generator/",
    },
    sitemap: "https://www.myntmore.com/sitemap.xml",
  };
}
