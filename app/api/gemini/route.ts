import { NextRequest, NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rateLimit";

const DEFAULT_SYSTEM_PROMPT = "You are a B2B growth strategy expert. Return valid JSON when asked.";

// This route is a thin proxy over the paid Gemini key and is only meant for
// the ICP builder's own client calls, so it is limited to same-origin
// browser requests, capped in input size, and rate limited per IP. The
// caps sit well above the ICP builder's real prompts (templates plus its
// sanitized user input) and its retry ladder (up to 4 calls per action).
const MAX_PROMPT_CHARS = 30_000;
const MAX_SYSTEM_PROMPT_CHARS = 2_000;
const RATE_LIMIT = 40;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isCrossSite(req: NextRequest): boolean {
  if (req.headers.get("sec-fetch-site") === "cross-site") return true;
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host !== req.headers.get("host");
  } catch {
    return true;
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  if (isCrossSite(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const retryAfter = rateLimit(`gemini:${getClientIp(req)}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (retryAfter > 0) {
    return NextResponse.json(
      { error: "Rate limited. Please try again in a moment." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  try {
    const body = await req.json();
    const { prompt, systemPrompt } = body as { prompt?: unknown; systemPrompt?: unknown };

    if (typeof prompt !== "string" || !prompt) {
      return NextResponse.json({ error: "prompt is required" }, { status: 400 });
    }
    if (prompt.length > MAX_PROMPT_CHARS) {
      return NextResponse.json({ error: "prompt is too long" }, { status: 413 });
    }
    if (systemPrompt !== undefined && (typeof systemPrompt !== "string" || systemPrompt.length > MAX_SYSTEM_PROMPT_CHARS)) {
      return NextResponse.json({ error: "systemPrompt is invalid" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const upstreamResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${systemPrompt || DEFAULT_SYSTEM_PROMPT}\n\n${prompt}` }],
            },
          ],
          generationConfig: { temperature: 0.7, maxOutputTokens: 16384 },
        }),
      },
    );

    if (!upstreamResponse.ok) {
      const errorBody = await upstreamResponse.text();
      console.error("Gemini API error:", upstreamResponse.status, errorBody);
      if (upstreamResponse.status === 429) {
        return NextResponse.json({ error: "Rate limited. Please try again in a moment." }, { status: 429 });
      }
      return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
    }

    const data = await upstreamResponse.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (data.candidates?.[0]?.finishReason === "MAX_TOKENS") {
      console.warn("Gemini response was truncated (MAX_TOKENS)");
    }

    return NextResponse.json({ result: text }, { status: 200 });
  } catch (error) {
    console.error("Error in gemini proxy route:", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
