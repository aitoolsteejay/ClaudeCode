import { fredoka } from "../fonts/fredoka";

// Loaded only by the sections that opt in (guides and blogs), so other pages
// don't download it.

export default function FredokaLabels({ children }: { children: React.ReactNode }) {
  return <div className={`${fredoka.variable} fredoka-labels contents`}>{children}</div>;
}
