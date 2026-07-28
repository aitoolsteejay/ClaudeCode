import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

function styleInstruction(style: string): string {
  switch (style) {
    case "shorter":
      return "Make it 1-2 sentences max, very punchy and direct.";
    case "more formal":
      return "Use more professional, business-appropriate language.";
    case "more direct":
      return "Be more assertive and confident. Skip the small talk.";
    case "more friendly":
      return "Use warmer, more conversational language, like messaging a friend.";
    default:
      return "Create a completely different variation using the same psychological framework.";
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { angle, style } = body;

    if (!angle || typeof angle.label !== "string" || typeof angle.message !== "string") {
      return NextResponse.json({ error: "A valid angle is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are an expert at writing psychology-driven cold DMs.

You have this existing DM:
"${angle.message}"

It uses the ${angle.label} psychological framework.

Your task: ${styleInstruction(style || "variation")}

Keep the same psychological framework (${angle.label}) but create a fresh message that:
- Still opens with a pattern interrupt
- Creates curiosity or emotional resonance
- Ends with a soft CTA
- Feels personal and conversational

Respond in valid JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            label: { type: Type.STRING },
            message: { type: Type.STRING },
            reasoning: { type: Type.STRING },
          },
          required: ["label", "message", "reasoning"],
        },
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json({ angle: parsed });
  } catch (error) {
    console.error("Error in dm-angles/regenerate route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to regenerate angle" },
      { status: 500 },
    );
  }
}
