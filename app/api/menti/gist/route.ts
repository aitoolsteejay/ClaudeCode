import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const QUESTION = "What's one lesson you want the next generation to carry forward, even in an AI-powered world?";

const MAX_ANSWERS = 400;
const MAX_ANSWER_LENGTH = 500;
const MIN_ANSWERS = 3;

const NO_JARGON_RULE = `Write in simple, everyday language. Short sentences, one idea per sentence. No jargon, no buzzwords ("synergy", "unlock", "leverage", "holistic", "cutting-edge"). Do not use em dashes or asterisks anywhere in your response.`;

function sanitizeAnswers(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim().slice(0, MAX_ANSWER_LENGTH))
    .filter((v) => v.length > 0)
    .slice(0, MAX_ANSWERS);
}

function buildPrompt(answers: string[]): string {
  const numbered = answers.map((a, i) => `${i + 1}. ${a}`).join("\n");
  return `You are summarizing live audience responses from an event. Everyone in the room was asked the same question and answered anonymously on their phones.

Question asked: "${QUESTION}"

${NO_JARGON_RULE}

Here are all ${answers.length} responses from the room:
${numbered}

Read all of the responses and produce:
1. "summary": a 2 to 4 sentence overall gist of what the room collectively thinks, capturing the dominant sentiment and any interesting tension or split in views. Write it as a warm, human synthesis, not a dry report.
2. "themes": 3 to 6 short recurring themes across the responses (2 to 5 words each), ordered from most to least common.
3. "notableQuote": one single response from the list above, quoted exactly as written, that best captures the spirit of the room. If nothing stands out, use null.

Return valid JSON matching the schema.`;
}

const GIST_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    summary: { type: Type.STRING },
    themes: { type: Type.ARRAY, items: { type: Type.STRING } },
    notableQuote: { type: Type.STRING, nullable: true },
  },
  required: ["summary", "themes"],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const answers = sanitizeAnswers(body?.answers);

    if (answers.length < MIN_ANSWERS) {
      return NextResponse.json(
        { error: `Need at least ${MIN_ANSWERS} responses to generate a gist` },
        { status: 400 },
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildPrompt(answers),
      config: {
        responseMimeType: "application/json",
        responseSchema: GIST_SCHEMA,
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json({ ...parsed, responseCount: answers.length });
  } catch (error) {
    console.error("Error in menti/gist route:", error);
    const message = error instanceof Error ? error.message : "Failed to generate gist";
    const status = message.toLowerCase().includes("429") || message.toLowerCase().includes("rate limit") ? 429 : 500;
    return NextResponse.json(
      { error: status === 429 ? "Rate limit exceeded, please wait a moment and try again" : message },
      { status },
    );
  }
}
