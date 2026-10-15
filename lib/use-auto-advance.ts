"use client";

import { useCallback, useEffect, useState, type FocusEvent, type RefObject } from "react";

// How long each item stays on screen. Someone who picks an item themselves gets
// longer on it before the carousel moves on again.
export const AUTO_MS = 7000;
export const MANUAL_MS = 12000;

// Auto-advance for the tabbed explorers (the LinkedIn agent explorer and the cold
// email process explorer). Shared so both behave the same way:
//
// - It keeps moving on its own and loops. It holds still only when moving would
//   be pointless or unsafe: the explorer is off screen, the browser tab is in the
//   background, or a keyboard user has focus inside it.
// - It never waits on the mouse. These explorers are large enough that a resting
//   cursor is almost always over them, which used to freeze the carousel.
// - Picking an item yourself shows it and restarts the clock with a longer first
//   pause (MANUAL_MS); it then carries on from there.
// - People who prefer reduced motion start paused, and anyone can pause or resume
//   with the button the component renders from `paused` / `setPaused`.
//
// The progress bar is a CSS animation of `dwell` ms keyed by `cycle`; when it ends
// the component calls `advance()`. `running` is what the bar's animation-play-state
// should follow. Nothing here runs on the server: `ready` stays false until the
// component has mounted, so server and first client render match.
export function useAutoAdvance(count: number, rootRef: RefObject<HTMLElement>) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [dwell, setDwell] = useState(AUTO_MS);
  // Bumped on every change so the progress bar restarts, even when the same item
  // is picked again.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setReady(true);
    setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [rootRef]);

  // The visitor chose an item.
  const select = useCallback(
    (i: number) => {
      setActive(Math.max(0, Math.min(count - 1, i)));
      setDwell(MANUAL_MS);
      setCycle((c) => c + 1);
    },
    [count],
  );

  // The clock ran out: move on, looping back to the first item at the end.
  const advance = useCallback(() => {
    setActive((cur) => (cur + 1) % count);
    setDwell(AUTO_MS);
    setCycle((c) => c + 1);
  }, [count]);

  const playing = ready && !paused;
  const running = playing && onScreen && tabVisible && !keyboardFocus;

  // Spread onto the explorer's root element. Only keyboard focus pauses: a mouse
  // click also leaves focus on the button, which must not freeze the carousel.
  const focusProps = {
    onFocusCapture: (e: FocusEvent<HTMLElement>) => {
      try {
        setKeyboardFocus((e.target as HTMLElement).matches(":focus-visible"));
      } catch {
        setKeyboardFocus(true);
      }
    },
    onBlurCapture: () => setKeyboardFocus(false),
  };

  return { active, select, advance, ready, paused, setPaused, playing, running, dwell, cycle, focusProps };
}
