"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FileText, Target, Users } from "lucide-react";
import { MinimalCarousel, type CarouselCard } from "@/components/ui/minimal-carousel";

interface BlogPreviewItem {
  href: string;
  tag: string;
  title: string;
  readTime: string;
  accent: string;
}

// lucide icon per tag, matching the tag colors already used on
// /resources/blogs (BlogGrid.tsx's TAG_COLORS) so this stays visually
// consistent with the rest of the blog section rather than inventing a
// separate palette.
const TAG_ICONS: Record<string, React.ElementType> = {
  "Content Strategy": FileText,
  "Sales Strategy": Target,
  "ICP & Targeting": Users,
};

// Tailwind's JIT scanner only picks up arbitrary-value classes (bg-[#hex])
// that appear as complete, literal strings somewhere in a scanned file --
// building the class with a template literal from a runtime hex value (e.g.
// `bg-[${p.accent}]`) would silently generate no CSS at all. So this maps
// each tag to a fully-literal class string instead of deriving it from
// BLOG_PREVIEW's accent field at runtime; keep in sync if those change.
const TAG_BG_CLASS: Record<string, string> = {
  "Content Strategy": "bg-[#14b8a6]",
  "Sales Strategy": "bg-[#f97316]",
  "ICP & Targeting": "bg-[#10b981]",
};
const DEFAULT_BG_CLASS = "bg-[#8C8279]";

export default function BlogCardCarousel({ posts }: { posts: BlogPreviewItem[] }) {
  const router = useRouter();

  const cards: CarouselCard[] = posts.map((p) => ({
    id: p.href,
    title: p.title,
    value: p.readTime,
    color: TAG_BG_CLASS[p.tag] ?? DEFAULT_BG_CLASS,
    icon: TAG_ICONS[p.tag] ?? FileText,
  }));

  const findPost = (card: CarouselCard) => posts.find((p) => p.href === card.id);

  const handleCopy = async (card: CarouselCard) => {
    const post = findPost(card);
    if (!post) return;
    const url = `https://www.myntmore.com${post.href}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch {
      toast.error("Couldn't copy the link. Copy it manually from the address bar instead.");
    }
  };

  const handleRead = (card: CarouselCard) => {
    const post = findPost(card);
    if (post) router.push(post.href);
  };

  return (
    <MinimalCarousel
      cards={cards}
      onCopyClick={handleCopy}
      onCustomizeClick={handleRead}
      copyLabel="Copy Link"
      customizeLabel="Read Post"
    />
  );
}
