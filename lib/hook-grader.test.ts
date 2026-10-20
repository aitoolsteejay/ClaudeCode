import { describe, expect, it } from "vitest";
import { gradeHook, FOLD_CHARACTERS } from "./hook-grader";

const STRONG = "I sent 1,200 cold emails in 30 days and booked 14 meetings.\nHere's the follow-up sequence that did it, and why most people stop too early.";
const WEAK = "UNLOCK THE SECRET to GAME CHANGER LinkedIn growth!!! You won't believe it 🚀🔥💥";
const PLAIN = "Thoughts on marketing.";

describe("gradeHook", () => {
  it("is deterministic", () => {
    expect(gradeHook(STRONG)).toEqual(gradeHook(STRONG));
  });

  it("scores a specific, first-hand, useful hook above a hype one", () => {
    expect(gradeHook(STRONG).total).toBeGreaterThan(gradeHook(WEAK).total + 30);
    expect(gradeHook(STRONG).total).toBeGreaterThanOrEqual(70);
  });

  it("keeps every check within its max and the total at 100 or less", () => {
    for (const t of [STRONG, WEAK, PLAIN, "", "x".repeat(500)]) {
      const g = gradeHook(t);
      g.checks.forEach((c) => {
        expect(c.score).toBeGreaterThanOrEqual(0);
        expect(c.score).toBeLessThanOrEqual(c.max);
      });
      expect(g.total).toBe(g.checks.reduce((a, c) => a + c.score, 0));
      expect(g.total).toBeLessThanOrEqual(100);
    }
  });

  it("takes points off for clickbait patterns", () => {
    const clean = gradeHook("How I booked 14 meetings in 30 days without a single ad.").checks.find((c) => c.id === "clickbait")!;
    const hype = gradeHook("This game changer will blow your mind!!!").checks.find((c) => c.id === "clickbait")!;
    expect(clean.score).toBe(15);
    expect(hype.score).toBeLessThan(clean.score);
  });

  it("flags a hook that will be cut off by see more", () => {
    const g = gradeHook("a ".repeat(FOLD_CHARACTERS).trim() + " end");
    const len = g.checks.find((c) => c.id === "length")!;
    expect(len.score).toBeLessThan(15);
    expect(g.characters).toBeGreaterThan(FOLD_CHARACTERS);
  });

  it("treats empty text as the lowest grade, not an error", () => {
    const g = gradeHook("   ");
    expect(g.label).toBe("Weak");
  });
});
