"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fade + small y-offset transition, ~150ms, used both between the 3 main
 * screens and between result tabs. Wrap the changing content in
 * <AnimatePresence mode="wait"> at the call site and give each child a
 * unique `key` so AnimatePresence knows when to transition.
 */
export function ScreenTransition({ children, screenKey }: { children: ReactNode; screenKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screenKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export { AnimatePresence, motion };
