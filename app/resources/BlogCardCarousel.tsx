"use client";

import { toast } from "sonner";
import { FileText, Target, Users, BarChart3 } from "lucide-react";
import { MinimalCarousel, type CarouselCard } from "@/components/ui/minimal-carousel";
import { TAG_COLORS } from "./blogs/BlogGrid";

interface BlogPreviewItem {
  href: string;
  tag: string;
  title: string;
  readTime: string;
  accent: string;
}

// lucide icon per tag. Colors themselves come from BlogGrid.tsx's exported
// TAG_COLORS (the same mapping /resources/blogs uses) rather than a second
// hand-maintained copy here, so this can't silently drift out of sync with
// how these tags are colored everywhere else on the site.
const TAG_ICONS: Record<string, React.ElementType> = {
  "Content Strategy": FileText,
  "Sales Strategy": Target,
  "ICP & Targeting": Users,
  "Lead Generation": BarChart3,
};
const DEFAULT_COLOR = "#8C8279";

export default function BlogCardCarousel({ posts }: { posts: BlogPreviewItem[] }) {
  const cards: CarouselCard[] = posts.map((p) => ({
    id: p.href,
    title: p.title,
    value: p.readTime,
    color: TAG_COLORS[p.tag] ?? DEFAULT_COLOR,
    icon: TAG_ICONS[p.tag] ?? FileText,
    href: p.href,
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

  return (
    <MinimalCarousel
      cards={cards}
      onCopyClick={handleCopy}
      copyLabel="Copy Link"
      customizeLabel="Read Post"
    />
  );
}
