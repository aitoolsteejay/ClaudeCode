/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/tools/linkedin-optimizer",
        destination: "https://myntmore-linkedin-profile-optimizer.lovable.app",
      },
      {
        source: "/tools/linkedin-optimizer/:path*",
        destination: "https://myntmore-linkedin-profile-optimizer.lovable.app/:path*",
      },
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
