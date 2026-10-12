import { Fredoka } from "next/font/google";

// Loaded only by the sections that opt in (guides and blogs), so other pages
// don't download it.
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["600"],
});

export default function FredokaLabels({ children }: { children: React.ReactNode }) {
  return <div className={`${fredoka.variable} fredoka-labels contents`}>{children}</div>;
}
