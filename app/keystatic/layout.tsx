import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Content admin", robots: { index: false, follow: false } };

// Local development edits files on disk. On the live site the admin only opens
// once GitHub mode is configured (docs/cms-setup.md); sign-in is then GitHub
// itself, so only people with write access to the repository can edit.
export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  const live = process.env.NODE_ENV !== "production" || !!process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;
  if (!live) notFound();
  return <>{children}</>;
}
