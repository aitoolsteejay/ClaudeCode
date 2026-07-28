import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const LIMITS = {
  businessDescription: 1000,
  icp: 300,
  industry: 100,
  tone: 100,
};

function validateInputs(body: Record<string, unknown>): { valid: boolean; error?: string } {
  const { businessDescription, icp, industry, tone } = body;

  if (!businessDescription || typeof businessDescription !== "string" || businessDescription.trim().length === 0) {
    return { valid: false, error: "Business description is required" };
  }
  if (!icp || typeof icp !== "string" || icp.trim().length === 0) {
    return { valid: false, error: "Target audience / ICP is required" };
  }
  if (!industry || typeof industry !== "string" || industry.trim().length === 0) {
    return { valid: false, error: "Industry is required" };
  }
  if (!tone || typeof tone !== "string" || tone.trim().length === 0) {
    return { valid: false, error: "Tone is required" };
  }
  if (businessDescription.length > LIMITS.businessDescription) {
    return { valid: false, error: `Business description must be ${LIMITS.businessDescription} characters or less` };
  }
  if (icp.length > LIMITS.icp) {
    return { valid: false, error: `Target audience must be ${LIMITS.icp} characters or less` };
  }
  if (industry.length > LIMITS.industry) {
    return { valid: false, error: `Industry must be ${LIMITS.industry} characters or less` };
  }
  if (tone.length > LIMITS.tone) {
    return { valid: false, error: `Tone must be ${LIMITS.tone} characters or less` };
  }

  return { valid: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = validateInputs(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { businessDescription, icp, industry, tone } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
    You are a B2B outbound strategist who designs lead magnets founders can use in cold email and LinkedIn outreach to earn replies and book meetings.

    BUSINESS: ${businessDescription.trim()}
    TARGET AUDIENCE / ICP: ${icp.trim()}
    INDUSTRY: ${industry.trim()}
    PREFERRED TONE: ${tone.trim()}

    Generate exactly 3 distinct lead magnet ideas this business could offer their ICP as part of outreach (things like calculators, benchmark reports, audits, templates, checklists, swipe files, or short assessments — not generic ebooks).

    STRICT GUIDELINES:
    - Each idea must be concrete and buildable, not a vague concept.
    - Tailor every idea specifically to the stated business, ICP, and industry — do not give generic advice that could apply to any company.
    - Apply the requested tone in the pitch and copy.
    - Avoid generic buzzwords (synergy, game changer, cutting-edge).
    - The distribution field must name a specific outreach channel and moment (e.g. "Attach as a follow-up on LinkedIn after a connection accepts" or "Offer as the CTA in the third email of a cold sequence").

    Respond in valid JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ideas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  pitch: { type: Type.STRING },
                  whyItWorks: { type: Type.STRING },
                  distribution: { type: Type.STRING },
                },
                required: ["title", "pitch", "whyItWorks", "distribution"],
              },
            },
          },
          required: ["ideas"],
        },
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in lead-magnet-ideas route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate ideas" },
      { status: 500 },
    );
  }
}
