import { notFound } from "next/navigation";

// The admin edits files on disk, so it only exists in local development.
export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") notFound();
  return <>{children}</>;
}
