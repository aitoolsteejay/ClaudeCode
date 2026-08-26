"use client";

import React, { useState } from "react";
// This project already has framer-motion installed; the pasted demo used the
// newer "motion/react" import path (from the "motion" package, Framer
// Motion's rebrand), which isn't a dependency here. Same API either way, so
// this uses the existing dependency instead of installing a duplicate
// animation library for the same thing.
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoreHorizontal, Copy } from "lucide-react";

/* --- Types --- */
export interface CarouselCard {
  id: string;
  title: string;
  value: string;
  /** Raw CSS color (hex, rgb, etc.), applied via inline style -- NOT a
   * Tailwind class. Tailwind's JIT scanner only generates CSS for
   * arbitrary-value classes (`bg-[#hex]`) that appear as complete literal
   * strings in a scanned file, so building one from a runtime value here
   * would silently produce no background at all. Inline style has no such
   * constraint and lets callers source the color from wherever their own
   * color mapping already lives instead of hand-duplicating it. */
  color: string;
  icon: React.ElementType;
  /** Optional destination for this card's content. When set, the expanded
   * view's secondary action renders as a real anchor (via next/link) instead
   * of a plain button, and the card is included in the always-rendered,
   * visually-hidden link list below -- so every card has a real, crawlable,
   * keyboard-reachable `<a href>` regardless of carousel/JS state, not just
   * a mouse-only onClick path. */
  href?: string;
}

interface MinimalCarouselProps {
  cards: CarouselCard[];
  onCopyClick?: (card: CarouselCard) => void;
  onCustomizeClick?: (card: CarouselCard) => void;
  copyLabel?: string;
  customizeLabel?: string;
}

// Tailwind needs each grid-cols-N class to appear as a literal string
// somewhere scanned; can't build "grid-cols-" + n at runtime.
const GRID_COLS_CLASS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};
function gridColsFor(count: number): string {
  return GRID_COLS_CLASS[Math.max(1, Math.min(count, 4))] ?? "grid-cols-3";
}

export const MinimalCarousel: React.FC<MinimalCarouselProps> = ({
  cards,
  onCopyClick,
  onCustomizeClick,
  copyLabel = "Copy",
  customizeLabel = "Edit",
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCard = cards.find((c) => c.id === activeId);
  const secondaryCards = cards.filter((c) => c.id !== activeId);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setActiveId(null);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-full w-full flex items-center justify-center bg-transparent">
      {/* Always-present, real links for every card -- keeps every
          destination crawlable and keyboard/screen-reader reachable
          independent of the expand-to-reveal interaction below, which only
          mounts its action into the DOM after a click. */}
      {cards.some((c) => c.href) && (
        <ul className="sr-only">
          {cards.filter((c) => c.href).map((c) => (
            <li key={c.id}><Link href={c.href as string}>{c.title}</Link></li>
          ))}
        </ul>
      )}
      <div
        className="w-full flex flex-col items-center justify-center px-3 sm:px-4 select-none font-sans"
        onClick={handleBackgroundClick}
      >
        <div className="w-full">
          <motion.div layout className="flex flex-col gap-4">
            {/* Expanded Card */}
            <AnimatePresence mode="popLayout">
              {activeCard && (
                <motion.div
                  key={activeCard.id}
                  layoutId={activeCard.id}
                  style={{ backgroundColor: activeCard.color }}
                  className="relative flex w-full flex-col justify-between
                             rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 text-white shadow-2xl
                             min-h-[10.625rem] sm:h-64"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full shrink-0">
                      <activeCard.icon size={38} className="sm:w-12 sm:h-12" />
                    </div>

                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCopyClick?.(activeCard);
                      }}
                      className="flex items-center gap-1.5 rounded-full bg-white/10
                                 px-3 py-1.5 sm:px-5 sm:py-2.5 font-bold backdrop-blur-md
                                 text-xs sm:text-base whitespace-nowrap
                                 hover:bg-white/20 transition-colors"
                    >
                      {copyLabel} <Copy size={16} />
                    </motion.button>
                  </div>

                  <div className="flex items-end justify-between mt-4 gap-4">
                    <div className="overflow-hidden mr-2">
                      <h3 className="text-xl sm:text-3xl font-semibold opacity-90 leading-tight">
                        {activeCard.title}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold tracking-tight opacity-60 truncate">
                        {activeCard.value}
                      </p>
                    </div>

                    {activeCard.href ? (
                      <Link
                        href={activeCard.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          onCustomizeClick?.(activeCard);
                        }}
                        className="rounded-full bg-white/30 px-3 py-1 sm:px-4 sm:py-1.5
                                   text-sm sm:text-base font-bold backdrop-blur-md
                                   hover:bg-white/40 transition-colors shrink-0"
                      >
                        {customizeLabel}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onCustomizeClick?.(activeCard);
                        }}
                        className="rounded-full bg-white/30 px-3 py-1 sm:px-4 sm:py-1.5
                                   text-sm sm:text-base font-bold backdrop-blur-md
                                   hover:bg-white/40 transition-colors shrink-0"
                      >
                        {customizeLabel}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid Layout */}
            <motion.div
              layout
              className={`grid gap-3 sm:gap-4 transition-all duration-500 ${gridColsFor(activeId ? secondaryCards.length : cards.length)}`}
            >
              {(activeId ? secondaryCards : cards).map((card) => (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Expand ${card.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(card.id);
                  }}
                  onKeyDown={(e) => handleCardKeyDown(e, card.id)}
                  style={{ backgroundColor: card.color }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className={`relative flex flex-col justify-between cursor-pointer
                             rounded-[22px] sm:rounded-[28px] p-4 sm:p-6 text-white shadow-lg
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                             ${activeId ? "h-32 sm:h-36" : "h-40 sm:h-48"}`}
                >
                  <div className="flex justify-between items-start">
                    <card.icon size={activeId ? 22 : 30} className="shrink-0" />
                    <div className="rounded-full bg-white/10 p-1 sm:p-1.5 transition-colors">
                      <MoreHorizontal size={16} />
                    </div>
                  </div>

                  <div className="mt-1 overflow-hidden">
                    <h4 className={`${activeId ? "text-xs sm:text-sm" : "text-sm sm:text-lg"}
                                   font-medium opacity-90 leading-tight line-clamp-2`}>
                      {card.title}
                    </h4>
                    <p className={`${activeId ? "text-xs sm:text-sm" : "text-sm sm:text-base"}
                                   font-semibold text-white/60 truncate mt-1`}>
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
