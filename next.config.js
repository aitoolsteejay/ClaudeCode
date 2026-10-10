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
      // Renamed 2026-09-07 and never redirected -- these were shared directly
      // with JBCN/NMIMS students (talks, QR codes), so the dead links were
      // driving real visitor 404s, not just crawler noise. Point straight at
      // the final destination rather than chaining through the intermediate
      // slug each was briefly renamed to.
      { source: "/jbcn-ai-quickstart", destination: "/education-guide", permanent: true },
      { source: "/ai-takeaways", destination: "/education-guide", permanent: true },
      { source: "/nmims-toolkit", destination: "/careers-and-job-guide", permanent: true },
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

      // Private pricing pages moved from descriptive region slugs to a
      // code-based URL so neither the URL nor the page itself names a
      // region. Redirected in case either old link was already sent to a
      // prospect.
      { source: "/international-pricing", destination: "/plans/mars", permanent: true },
      { source: "/indian-pricing", destination: "/plans/earth", permanent: true },
      // Renamed 2026-09-30 from the first-round codes (alpha/beta) to
      // mars/earth -- redirected in case either was already sent out.
      { source: "/plans/alpha", destination: "/plans/mars", permanent: true },
      { source: "/plans/beta", destination: "/plans/earth", permanent: true },

      // Job application guide moved from the Instagram bio-link namespace
      // into the canonical resources/guides hierarchy.
      { source: "/instagram-resources/job-applications-sales-funnel", destination: "/resources/guides/job-applications-sales-funnel", permanent: true },

      // Private cold emailing overview renamed to carry a planet code (the
      // USD page is mars, a rupee clone sits at -earth). Redirected in case
      // the original link was already sent to a prospect.
      { source: "/cold-emailing-package", destination: "/cold-emailing-package-mars", permanent: true },
    ];
  },
};

module.exports = nextConfig;
