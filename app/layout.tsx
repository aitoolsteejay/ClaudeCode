import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "./components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

// Only the weights actually used sitewide (font-normal/medium/semibold/bold/black
// map to 400/500/600/700/900 respectively) — every declared weight here is a
// separate font file that next/font preloads on every single page, so 300 and
// 800 (unused anywhere in the codebase) were pure dead weight on every load.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F6F2",
};

export const metadata: Metadata = {
  title: {
    default: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
    template: "%s | Myntmore",
  },
  description:
    "Myntmore is Mumbai's leading AI-powered B2B outbound agency. We build and run cold email, LinkedIn outreach, and ABM systems that book qualified meetings. 12K+ meetings booked. $120M+ pipeline generated.",
  keywords: [
    "b2b lead generation",
    "b2b lead generation agency",
    "cold outreach agency",
    "ai agency in mumbai",
    "ai agency",
    "personal brand building mumbai",
    "account-based marketing",
    "linkedin outreach",
    "cold email agency",
    "myntmore",
    "tejas jhaveri",
    "b2b pipeline",
    "outbound sales agency",
    "sales intelligence",
    "icp mapping",
  ],
  authors: [{ name: "Tejas Jhaveri", url: "https://linkedin.com/in/tejasjhaveri" }],
  creator: "Myntmore",
  publisher: "Myntmore",
  metadataBase: new URL("https://www.myntmore.com"),
  alternates: { canonical: "https://www.myntmore.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.myntmore.com",
    siteName: "Myntmore",
    title: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
    description:
      "We build and run your outbound engine using AI agents and human intelligence. Cold email, LinkedIn outreach, and ABM that books qualified meetings at scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Myntmore: B2B Lead Generation & AI-Powered Outbound Agency, Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@myntmore",
    creator: "@myntmore",
    title: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
    description:
      "We build and run your outbound engine using AI agents and human intelligence. Cold email, LinkedIn outreach, and ABM that books qualified meetings at scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-PEY6FXLPMH",
  },
  category: "business",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const GA_ID = "G-PEY6FXLPMH";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="bg-background text-white antialiased">
        {children}
        <Toaster />
        <Analytics />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1326581259102473');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* No <noscript> fallback pixel here on purpose: Next.js's SSR asset
            hoisting sees any <img> in the render tree, including one nested
            in <noscript>, and emits a real <link rel="preload"> for it into
            <head> -- so every visitor's browser (JS-enabled or not) was
            kicking off a cross-origin request to facebook.com early in page
            load, competing with real critical resources (fonts, CSS, logo)
            for the finite early-connection budget, purely to serve a
            fallback that only matters for the near-zero share of visitors
            with JS disabled (who, if JS is off, get no benefit from this
            since the Script tag above is what actually needs JS anyway). */}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="CIEsstIiJI9GlZ3g5/UrnA"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
