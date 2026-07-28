import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const LIMITS = {
  industry: 200,
  icpRole: 200,
  offer: 500,
};

const ANGLE_LABELS = ["Emotional Angle", "Authority Angle", "Social Proof Angle", "Curiosity Angle", "Value-First Angle"];

function validateInputs(body: Record<string, unknown>): { valid: boolean; error?: string } {
  const { industry, icpRole, offer } = body;

  if (!industry || typeof industry !== "string" || industry.trim().length === 0) {
    return { valid: false, error: "Industry is required" };
  }
  if (!icpRole || typeof icpRole !== "string" || icpRole.trim().length === 0) {
    return { valid: false, error: "ICP role is required" };
  }
  if (!offer || typeof offer !== "string" || offer.trim().length === 0) {
    return { valid: false, error: "Offer is required" };
  }
  if (industry.length > LIMITS.industry) {
    return { valid: false, error: `Industry must be ${LIMITS.industry} characters or less` };
  }
  if (icpRole.length > LIMITS.icpRole) {
    return { valid: false, error: `ICP role must be ${LIMITS.icpRole} characters or less` };
  }
  if (offer.length > LIMITS.offer) {
    return { valid: false, error: `Offer must be ${LIMITS.offer} characters or less` };
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

    const { industry, icpRole, offer, senderName, senderCompany } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const senderContext =
      senderName && senderCompany
        ? `\n\nThe sender's name is ${senderName} from ${senderCompany}. Subtly weave the sender's identity into messages where natural — for example, referencing what their company does or signing off with their first name.`
        : "";

    const prompt = `You are an expert at writing hyper-personalized, psychology-driven cold DMs that get replies. You understand the mental triggers that make people respond.

Your task: Generate 5 unique DM angles for reaching out to prospects in the ${industry.trim()} industry, specifically targeting ${icpRole.trim()} roles.

The offer being pitched: ${offer.trim()}${senderContext}

For each angle, create a short, conversational DM (2-4 sentences max) that:
- Opens with a pattern interrupt (no generic "Hi [Name]")
- Creates curiosity or emotional resonance
- Ends with a soft CTA (question or value offer, not hard sell)
- Feels personal, not templated

Use exactly these 5 psychological frameworks, one per angle, in this order:
1. Emotional Angle - trigger FOMO, desire, or pain relief
2. Authority Angle - position as expert, reference credibility
3. Social Proof Angle - leverage results, peer validation
4. Curiosity Angle - create intrigue, open loops
5. Value-First Angle - lead with insight or helpful resource

Respond in valid JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            angles: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING, enum: ANGLE_LABELS },
                  message: { type: Type.STRING },
                  reasoning: { type: Type.STRING },
                },
                required: ["label", "message", "reasoning"],
              },
            },
          },
          required: ["angles"],
        },
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    const anglesWithIds = (parsed.angles || []).map((angle: { label: string; message: string; reasoning: string }, index: number) => ({
      ...angle,
      id: `angle-${Date.now()}-${index}`,
    }));

    return NextResponse.json({ angles: anglesWithIds });
  } catch (error) {
    console.error("Error in dm-angles route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate DM angles" },
      { status: 500 },
    );
  }
}
