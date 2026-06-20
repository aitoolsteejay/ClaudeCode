/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
