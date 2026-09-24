/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // AVIF first (smaller than WebP in most cases), WebP as fallback for
    // browsers that don't support AVIF yet. next/image serves whichever the
    // requesting browser's Accept header supports.
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/tools/dm-angle-generator",
        destination: "https://mynt-more-angles.lovable.app",
      },
      {
        source: "/tools/dm-angle-generator/:path*",
        destination: "https://mynt-more-angles.lovable.app/:path*",
      },
    ];
  },
  async redirects() {
    return [
      // Legacy paths kept only for old backlinks/bookmarks. `permanent: true`
      // makes Next.js emit a real 308 here -- these used to be handled by
      // next/navigation's redirect() in each page.tsx, which always issues a
      // 307 (temporary) regardless of intent, telling search engines and
      // caches these moves aren't permanent when they are.
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/personal-branding", destination: "/services/personal-branding", permanent: true },
      // Renamed from the opaque "GIAtech-stack" slug and moved under guides.
      // It was in the sitemap, so Google may already hold the old URL.
      { source: "/GIAtech-stack", destination: "/resources/guides/ai-tech-stack-jewellery", permanent: true },
      // Retired full-time role (removed 2026-07-28), still 404ing in Search
      // Console. Points at the careers hub rather than the similarly named
      // intern listing, which is a different seniority and salary band.
      { source: "/careers/content-strategist", destination: "/careers", permanent: true },
      // Retired full-time role (removed 2026-09-24), no longer listed on /careers.
      { source: "/careers/senior-sales-head", destination: "/careers", permanent: true },

      // Legacy WordPress URLs from the previous site, still being crawled and
      // reported as 404s. Only the ones with a genuine present-day equivalent
      // are mapped here. The discontinued service lines (/cro, /sem,
      // /app-development, /web-development, /custom-erp-development,
      // /photography-videography, /academy) are deliberately left to 404:
      // Myntmore no longer sells any of them, and pointing them at /services
      // would be an irrelevant redirect that Google treats as a soft 404.
      { source: "/home", destination: "/", permanent: true },
      { source: "/webinar", destination: "/events", permanent: true },
      { source: "/branding", destination: "/services/personal-branding", permanent: true },
      { source: "/website-newsletter", destination: "/newsletter-subscribe", permanent: true },
      { source: "/discover-our-most-popular-services", destination: "/services", permanent: true },
      { source: "/other-services", destination: "/services", permanent: true },
    ];
  },
};

module.exports = nextConfig;
