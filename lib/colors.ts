// Brand gold #F5B731 (and the darker #D97706) work as fills, borders, dots
// and as text on dark backgrounds, but as text on the light page they read at
// 1.7:1 and 3.2:1, well under WCAG AA. Text on light surfaces uses this amber
// instead (5.6:1 on the page background, at least 4.9:1 on the beige tints).
export const GOLD_TEXT = "#A14A08";

// For accent colours that drive both fills and text: pass the accent through
// this wherever it colours text on a light surface. Gold becomes the readable
// amber; every other colour is returned unchanged.
export const textTone = (accent: string) => (/^#(F5B731|D97706)$/i.test(accent) ? GOLD_TEXT : accent);
