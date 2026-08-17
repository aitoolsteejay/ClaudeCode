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
};

module.exports = nextConfig;
