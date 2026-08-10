import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const LIMITS = {
  short: 200,
  long: 1000,
};

function trimTo(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

interface RequestBody {
  competitorName: string;
  competitorWebsite: string;
  yourCompanyName: string;
  yourOffer: string;
}

function validate(body: Record<string, unknown>): { valid: boolean; error?: string } {
  if (!trimTo(body.competitorName, LIMITS.short)) return { valid: false, error: "Competitor name is required" };
  if (!trimTo(body.yourCompanyName, LIMITS.short)) return { valid: false, error: "Your company name is required" };
  if (!trimTo(body.yourOffer, LIMITS.long)) return { valid: false, error: "What you sell is required" };
  return { valid: true };
}

// Step 1: research the competitor with live Google Search grounding. Gemini's
// API does not support combining a search tool with strict responseSchema
// output in the same call, so this returns plain text, not JSON.
function buildResearchPrompt(body: RequestBody): string {
  return `Search for and research this company: ${body.competitorName}${body.competitorWebsite ? ` (website: ${body.competitorWebsite})` : ""}.

Find and summarize, in plain text:
1. What they do and who they sell to
2. Their pricing model, if it is publicly available anywhere (their site, review sites, forums). If you cannot find real pricing information, say clearly that pricing is not publicly available, do not guess a number.
3. What actual users or reviewers say are their strengths (from review sites, forums, comparison articles, etc, if you can find any)
4. What actual users or reviewers say are their weaknesses or common complaints (if you can find any)

Be factual. If you cannot find something, say so explicitly rather than filling in a plausible-sounding guess. This research will be used to build a sales battle card, accuracy matters more than completeness.`;
}

// Step 2: a normal structured-output call (no search tool), using step 1's
// research text as grounding context, tailored to the user's own offer.
function buildStructuringPrompt(body: RequestBody, researchText: string): string {
  return `You are a sales enablement strategist. Using ONLY the research below, build a sales battle card for a rep at "${body.yourCompanyName}" who is selling against "${body.competitorName}".

Our offer, who we sell to: ${body.yourOffer}

Research on ${body.competitorName}:
${researchText}

Rules:
- Do not invent facts, pricing, or numbers that are not in the research above. If the research says something is not publicly available, reflect that honestly in your output.
- "strengths" and "gaps" must come from the research above, not generic competitor cliches.
- "howToPosition" and "objectionResponses" must be specific to OUR offer described above, not generic advice.
- "objectionResponses" should cover 3 to 4 realistic objections a prospect might raise when comparing us to this competitor, each with a specific, honest answer.
- "researchNote" must be one sentence reminding the rep that pricing and features change, and to verify anything specific directly before relying on it in a live call.
- Write in simple, direct language. No jargon, no buzzwords. Do not use em dashes or asterisks anywhere in your response.

Return valid JSON matching the schema.`;
}

const BATTLE_CARD_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    competitorName: { type: Type.STRING },
    whatTheyDo: { type: Type.STRING },
    pricingModel: { type: Type.STRING },
    strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
    gaps: { type: Type.ARRAY, items: { type: Type.STRING } },
    howToPosition: { type: Type.STRING },
    objectionResponses: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: { objection: { type: Type.STRING }, response: { type: Type.STRING } },
        required: ["objection", "response"],
      },
    },
    researchNote: { type: Type.STRING },
  },
  required: ["competitorName", "whatTheyDo", "pricingModel", "strengths", "gaps", "howToPosition", "objectionResponses", "researchNote"],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = validate(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const cleanBody: RequestBody = {
      competitorName: trimTo(body.competitorName, LIMITS.short),
      competitorWebsite: trimTo(body.competitorWebsite, LIMITS.short),
      yourCompanyName: trimTo(body.yourCompanyName, LIMITS.short),
      yourOffer: trimTo(body.yourOffer, LIMITS.long),
    };

    const ai = new GoogleGenAI({ apiKey });

    // Step 1: research with live search grounding.
    const researchResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildResearchPrompt(cleanBody),
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    const researchText = (researchResponse.text || "").trim();
    if (!researchText) {
      return NextResponse.json({ error: "Could not research this competitor. Please try again." }, { status: 502 });
    }

    // Step 2: structure the research into the battle card schema.
    const structuredResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildStructuringPrompt(cleanBody, researchText),
      config: {
        responseMimeType: "application/json",
        responseSchema: BATTLE_CARD_SCHEMA,
      },
    });

    const jsonStr = (structuredResponse.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in battle-card-generator route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate battle card" },
      { status: 500 },
    );
  }
}
