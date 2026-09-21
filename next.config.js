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
    ];
  },
};

module.exports = nextConfig;
