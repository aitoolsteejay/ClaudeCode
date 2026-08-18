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
    ];
  },
};

module.exports = nextConfig;
