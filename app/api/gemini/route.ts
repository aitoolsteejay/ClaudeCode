import { NextRequest, NextResponse } from "next/server";

const DEFAULT_SYSTEM_PROMPT = "You are a B2B growth strategy expert. Return valid JSON when asked.";

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, systemPrompt } = body as { prompt?: string; systemPrompt?: string };

    if (!prompt) {
      return NextResponse.json({ error: "prompt is required" }, { status: 400 });
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
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}
