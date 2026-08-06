export const AI_PARSE_ERROR_MESSAGE = "The AI response could not be read. Please try again.";

const RETRY_DELAYS_MS = [1000, 2000, 4000];
const TRUNCATE_LENGTH = 2000;

// Keys in-flight calls so identical concurrent requests share one promise
// instead of firing duplicate API calls.
const inFlight = new Map<string, Promise<string>>();

async function fetchGemini(prompt: string, systemPrompt?: string): Promise<string> {
  const resp = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, systemPrompt }),
  });

  const text = await resp.text();
  if (!resp.ok) {
    throw new Error(`AI call failed: ${resp.status} ${text}`);
  }

  const data = JSON.parse(text);
  if (data.error) {
    throw new Error(data.error);
  }
  return data.result as string;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callGeminiUncached(prompt: string, systemPrompt?: string): Promise<string> {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await fetchGemini(prompt, systemPrompt);
    } catch (err) {
      lastError = err;
      if (attempt < 2) {
        await sleep(RETRY_DELAYS_MS[attempt]);
      }
    }
  }

  // Final fallback: one last attempt with a truncated prompt, in case the
  // failures were caused by prompt size (timeouts, token limits, etc).
  try {
    const truncated =
      prompt.length > TRUNCATE_LENGTH
        ? `${prompt.slice(0, TRUNCATE_LENGTH)}\n\n[Truncated for reliability]`
        : prompt;
    return await fetchGemini(truncated, systemPrompt);
  } catch (err) {
    lastError = err;
  }

  throw lastError;
}

/**
 * Calls the Gemini proxy with a retry ladder (1s, 2s, 4s) and a final
 * truncated-prompt fallback. Identical in-flight calls (same prompt +
 * systemPrompt) are deduplicated and share one promise.
 */
export function callGemini(prompt: string, systemPrompt?: string): Promise<string> {
  const key = `${prompt} ${systemPrompt || ""}`;
  const existing = inFlight.get(key);
  if (existing) return existing;

  const promise = callGeminiUncached(prompt, systemPrompt).finally(() => {
    inFlight.delete(key);
  });
  inFlight.set(key, promise);
  return promise;
}

/**
 * Maps a thrown error from callGemini into user-facing copy.
 */
export function describeGeminiError(e: unknown): string {
  const message = e instanceof Error ? e.message : String(e);

  if (message === "timeout") {
    return "This is taking too long. Please try again.";
  }
  if (message.includes("GEMINI_API_KEY")) {
    return "The AI service isn't configured. Please check the GEMINI_API_KEY setup in Vercel.";
  }
  const match = message.match(/^AI call failed: (\d+)/);
  if (match) {
    const status = Number(match[1]);
    if (status === 429) {
      return "Rate limited. Please try again in a moment.";
    }
    return "Could not reach the AI service. Please try again in a moment.";
  }
  return "Something went wrong. Please try again.";
}

/**
 * Races a promise against a timeout, rejecting with an Error("timeout") if
 * the timeout wins.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

/**
 * Extracts the first `[...]` JSON array substring from a model response and
 * parses it. Throws if no array-like substring is found or it doesn't parse.
 */
export function parseJsonArray<T>(text: string): T[] {
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("no array found");
  return JSON.parse(match[0]) as T[];
}
