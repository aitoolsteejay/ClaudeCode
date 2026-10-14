import localFont from "next/font/local";

// Self-hosted Fredoka 600 (SIL OFL), Latin subset. See ./caveat.ts for why each
// font lives in its own module.
export const fredoka = localFont({
  src: "./Fredoka-latin-600.woff2",
  variable: "--font-fredoka",
  display: "swap",
  weight: "600",
});
