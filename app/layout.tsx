import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600", "700"],
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
  metadataBase: new URL("https://myntmore.com"),
  alternates: { canonical: "https://myntmore.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myntmore.com",
    siteName: "Myntmore",
    title: "Myntmore | B2B Lead Generation & AI-Powered Outbound Agency",
    description:
      "We build and run your outbound engine using AI agents and human intelligence. Cold email, LinkedIn outreach, and ABM that books qualified meetings at scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Myntmore — B2B Lead Generation & AI-Powered Outbound Agency, Mumbai",
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
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-background text-white antialiased">
        {children}
        <Toaster />

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
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1326581259102473&ev=PageView&noscript=1" />
        </noscript>

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
      </body>
    </html>
  );
}
