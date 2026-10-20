// Rule-based scoring for a LinkedIn post hook (the first two lines, before "see more").
// Pure and deterministic: the same wording always gets the same score. The AI never sets
// a score; it only writes the alternatives, and those are scored with these same rules.

export type HookVerdict = "strong" | "ok" | "weak";

export interface HookCheck {
  id: "length" | "curiosity" | "specificity" | "authority" | "action" | "clickbait";
  label: string;
  max: number;
  score: number;
  verdict: HookVerdict;
  tip: string;
}

export interface HookScore {
  total: number;
  label: "Strong" | "Solid" | "Needs work" | "Weak";
  checks: HookCheck[];
  characters: number;
}

// Hooks longer than this risk being cut off by "see more". Where the cut falls varies by device and layout,
// so this is a safe upper bound, not a number LinkedIn publishes.
export const FOLD_CHARACTERS = 180;
export const MAX_HOOK_CHARACTERS = 400;

const CLICKBAIT = /you won'?t believe|this one (trick|hack)|game[- ]?changer|mind[- ]?blow|shocking|secret (sauce|hack)|\b10x\b|crush(ing)? it|unlock (the|your)|life[- ]?hack|!!+|\?\?+/gi;
// Surrogate pairs (most emoji) plus the dingbat and symbol blocks; avoids the /u flag for older targets.
const EMOJI = /[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF]/g;

function verdict(score: number, max: number): HookVerdict {
  const r = score / max;
  return r >= 0.75 ? "strong" : r >= 0.4 ? "ok" : "weak";
}

function make(id: HookCheck["id"], label: string, max: number, score: number, tips: { strong: string; ok: string; weak: string }): HookCheck {
  const s = Math.max(0, Math.min(max, Math.round(score)));
  const v = verdict(s, max);
  return { id, label, max, score: s, verdict: v, tip: tips[v] };
}

export function gradeHook(input: string): HookScore {
  const text = input.trim().replace(/\s+/g, " ");
  const n = text.length;
  const words = text.split(" ").filter(Boolean);

  // 1. Length (15): short enough to sit above the fold, long enough to say something.
  const length = n >= 60 && n <= 180 ? 15 : (n >= 40 && n < 60) || (n > 180 && n <= 230) ? 10 : (n >= 20 && n < 40) || (n > 230 && n <= 300) ? 5 : 0;

  // 2. Curiosity (20): a question, an open loop, a contrast or a deliberate break.
  let curiosity = 0;
  if (/\?/.test(text)) curiosity += 6;
  if (/\b(why|how|what|never|stop|mistake|wrong|truth|nobody|most people|instead|nobody tells)\b/i.test(text)) curiosity += 6;
  if (/\b(but|yet|instead|until|however|than)\b/i.test(text)) curiosity += 4;
  if (/[:…]|\.\.\./.test(text) || /\n/.test(input.trim())) curiosity += 4;

  // 3. Specificity (20): numbers, amounts, time frames and named things beat vague claims.
  let specificity = 0;
  if (/\d/.test(text)) specificity += 8;
  if (/[%$€£₹]|\b\d+(\.\d+)?\s?(k|m|x)\b/i.test(text)) specificity += 4;
  if (/\b(day|days|week|weeks|month|months|year|years|hour|hours|minute|minutes)\b/i.test(text)) specificity += 4;
  if (words.slice(1).some((w) => /^[A-Z][a-z]{2,}/.test(w.replace(/[^\w]/g, "")) && !/^(I|I'm|I've|The|This|That|My|Our|We|You|Your|And|But|So|If|When|Why|How|What)$/.test(w.replace(/[^\w']/g, "")))) specificity += 4;

  // 4. Authority (15): first-hand experience and results, not opinion.
  let authority = 0;
  if (/\b(I|I've|I'm|I'd|we|we've|we're|my|our)\b/.test(text)) authority += 5;
  if (/\b(booked|closed|grew|built|launched|lost|learned|ran|tested|sent|hired|failed|spent|made|wrote|signed|scaled|won)\b/i.test(text)) authority += 5;
  if (/\b\d[\d,.]*\s*(years?|yrs|clients?|customers?|meetings?|calls?|emails?|messages?|founders?|campaigns?)\b/i.test(text)) authority += 5;

  // 5. Action (15): speaks to the reader and promises something they can use.
  let action = 0;
  if (/\b(you|your|you're|you've)\b/i.test(text)) action += 5;
  if (/^(stop|start|do|don'?t|never|try|use|steal|copy|ask|write|send|cut|fix|skip|build|stop)\b/i.test(text)) action += 5;
  if (/\b(here'?s|here is|steps?|rules?|ways?|lessons?|framework|template|playbook|checklist|mistakes?)\b/i.test(text)) action += 5;

  // 6. Clickbait (15): starts full and loses points for hype patterns.
  let penalty = 0;
  penalty += 5 * (text.match(CLICKBAIT)?.length ?? 0);
  if ((text.match(EMOJI)?.length ?? 0) > 2) penalty += 3;
  if (words.filter((w) => w.length > 3 && /^[A-Z]{4,}[!?.,]?$/.test(w)).length >= 2) penalty += 4;
  if (/!$/.test(text)) penalty += 2;
  const clickbait = 15 - penalty;

  const checks: HookCheck[] = [
    make("length", "Length", 15, length, {
      strong: `${n} characters: it fits above the fold and still says something.`,
      ok: n > FOLD_CHARACTERS ? `${n} characters: the end may be cut off by "see more", depending on the device. Trim it.` : `${n} characters: a little thin. Add the one detail that makes it specific.`,
      weak: n > 300 ? `${n} characters is a paragraph, not a hook. Keep the first two lines under about ${FOLD_CHARACTERS} characters.` : `${n} characters is too short to earn the click. Add a number, a result or a tension.`,
    }),
    make("curiosity", "Curiosity", 20, curiosity, {
      strong: "It opens a loop the reader wants to close.",
      ok: "There is a little tension. Add a contrast (\"but\", \"instead\") or end on the question you answer in the post.",
      weak: "Nothing makes the reader need the next line. Open a question, state a surprising result, or set up a contrast.",
    }),
    make("specificity", "Specificity", 20, specificity, {
      strong: "Concrete numbers and details make it believable.",
      ok: "Some detail, but add a number, a time frame or a real name to make it concrete.",
      weak: "It reads as a general claim. Swap vague words for a number, a timeframe or a named example.",
    }),
    make("authority", "Authority", 15, authority, {
      strong: "It sounds like someone who has done the thing.",
      ok: "Say what you did or saw first-hand (\"I ran\", \"we booked\") and attach a result.",
      weak: "It sounds like opinion. Lead with something you actually did and what happened.",
    }),
    make("action", "Action", 15, action, {
      strong: "It speaks to the reader and promises something usable.",
      ok: "Speak to \"you\" more directly, or promise what they will be able to do after reading.",
      weak: "It is about you, not the reader. Address them directly and say what they get.",
    }),
    make("clickbait", "No clickbait", 15, clickbait, {
      strong: "No hype patterns. It earns attention honestly.",
      ok: "A few hype signals (caps, emojis or exclamation marks). Remove them.",
      weak: "Reads as clickbait. Drop the hype phrases, shouting and exclamation marks.",
    }),
  ];

  const total = checks.reduce((a, c) => a + c.score, 0);
  const label = total >= 80 ? "Strong" : total >= 60 ? "Solid" : total >= 40 ? "Needs work" : "Weak";
  return { total, label, checks, characters: n };
}
