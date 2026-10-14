import localFont from "next/font/local";

// Self-hosted Caveat (SIL OFL), Latin subset, variable 600-700: one ~73 KB file
// instead of one file per weight. Its own module on purpose: next/font emits
// the CSS and the preload for every font declared in a module the moment that
// module is imported, so a shared "fonts.ts" would make every page that wants
// Caveat also preload Fredoka (and the other way round).
export const caveat = localFont({
  src: "./Caveat-latin-600-700.woff2",
  variable: "--font-caveat",
  display: "swap",
  weight: "600 700",
});
