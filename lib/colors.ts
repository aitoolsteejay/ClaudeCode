// Text colours that stay readable (WCAG AA, 4.5:1) on every light surface the
// site puts text on: the page #F8F6F2, white, and the beige card tints down to
// #F2E8DF. The accent colours themselves (blue #3B82F6, gold #F5B731, ...) are
// for fills, borders, dots, icons and text on dark sections; as text on a light
// surface they read at 1.7-4.5:1.

// Brand gold #F5B731 (and the darker #D97706) as text on light surfaces.
export const GOLD_TEXT = "#A14A08";

// Accent -> the lightest shade of the same hue that clears 4.5:1 on #F2E8DF.
// Use the value directly for a literal text colour; route a variable accent
// through textTone() below.
export const TEXT_SHADES: Record<string, string> = {
  "#F5B731": GOLD_TEXT,
  "#D97706": GOLD_TEXT,
  "#F59E0B": GOLD_TEXT,
  "#B45309": GOLD_TEXT,
  "#10B981": "#047857",
  "#059669": "#047857",
  "#22C55E": "#166534",
  "#16A34A": "#166534",
  "#15803D": "#166534",
  "#3B82F6": "#1D4ED8",
  "#2563EB": "#1D4ED8",
  "#F97316": "#9A3412",
  "#EA580C": "#9A3412",
  "#C2570C": "#9A3412",
  "#C2410C": "#9A3412",
  "#FF6B35": "#9A3412",
  "#9CA3AF": "#4B5563",
  "#6B7280": "#4B5563",
  "#A855F7": "#7E22CE",
  "#9333EA": "#7E22CE",
  "#14B8A6": "#0F766E",
  "#0D9488": "#0F766E",
  "#6366F1": "#4F46E5",
  "#06B6D4": "#155E75",
  "#0891B2": "#155E75",
  "#0E7490": "#155E75",
  "#0077B5": "#00669C",
  "#8B5CF6": "#7C3AED",
  "#EF4444": "#B91C1C",
  "#DC2626": "#B91C1C",
  "#0EA5E9": "#0369A1",
  "#0284C7": "#0369A1",
  "#EC4899": "#BE185D",
  "#DB2777": "#BE185D",
  "#EAB308": "#854D0E",
  "#CA8A04": "#854D0E",
  "#A16207": "#854D0E",
  "#64748B": "#475569",
  "#F43F5E": "#BE123C",
  "#E11D48": "#BE123C",
};

const REFERENCE_SURFACE: [number, number, number] = [0xf2, 0xe8, 0xdf];

const luminance = ([r, g, b]: [number, number, number]) => {
  const f = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

const contrast = (a: [number, number, number], b: [number, number, number]) => {
  const x = luminance(a);
  const y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

const cache = new Map<string, string>();

// For accent colours that drive both fills and text: pass the accent through
// this wherever it colours text on a light surface. Known accents map through
// TEXT_SHADES; any other #RRGGBB that falls under 4.5:1 is darkened (same hue)
// until it passes; colours that already pass, and non-hex values, come back
// unchanged. Do not use it for text on dark sections.
export const textTone = (accent: string) => {
  const key = accent.trim().toUpperCase();
  const known = TEXT_SHADES[key];
  if (known) return known;
  const cached = cache.get(key);
  if (cached) return cached;
  const m = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/.exec(key);
  if (!m) return accent;
  const rgb: [number, number, number] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  let k = 1;
  const scaled = (): [number, number, number] => [rgb[0] * k, rgb[1] * k, rgb[2] * k];
  while (contrast(scaled(), REFERENCE_SURFACE) < 4.5 && k > 0) k -= 0.02;
  const out = k === 1 ? accent : "#" + scaled().map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();
  cache.set(key, out);
  return out;
};
