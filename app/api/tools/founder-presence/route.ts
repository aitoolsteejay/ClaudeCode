import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

interface UserInput {
  frequency: string;
  engagement: string;
  userTopics: string[];
  competitorTopics: string[];
}

interface CalculatedData {
  userFreqScore: number;
  userEngScore: number;
  compAvgFreqScore: number;
  compAvgEngScore: number;
  finalPresenceScore: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { input, calculated }: { input: UserInput; calculated: CalculatedData } = body;

    if (!input || !calculated) {
      return NextResponse.json({ error: "Missing input or calculated data" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
    Analyze this LinkedIn founder presence data for a "Myntmore" competitor tool.

    DATA:
    - Founder Presence Score: ${calculated.finalPresenceScore}/100
    - Founder Frequency: ${input.frequency} posts/month (Numeric weight: ${calculated.userFreqScore})
    - Founder Avg Engagement: ${input.engagement} (Numeric weight: ${calculated.userEngScore})
    - Competitor Avg Frequency weight: ${calculated.compAvgFreqScore}
    - Competitor Avg Engagement weight: ${calculated.compAvgEngScore}
    - Founder Topics: ${input.userTopics.join(", ")}
    - Competitor Topics: ${input.competitorTopics.join(", ")}

    TONE:
    Direct, data-driven, slightly urgent, helpful, SaaS-premium.

    REQUIRED OUTPUT:
    1. A short insight about the presence score.
    2. 3-4 bullet insights for opportunity areas (frequency gaps, visibility, narrative).
    3. A narrative positioning recommendation (1 paragraph).
    4. 3 headline styles: Category leadership, ICP clarity, and Bold differentiation.

    Respond in valid JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scoreInsight: { type: Type.STRING },
            opportunityAreas: { type: Type.ARRAY, items: { type: Type.STRING } },
            narrativePositioning: { type: Type.STRING },
            headlineSuggestions: {
              type: Type.OBJECT,
              properties: {
                categoryLeadership: { type: Type.STRING },
                icpClarity: { type: Type.STRING },
                boldDifferentiation: { type: Type.STRING },
              },
              required: ["categoryLeadership", "icpClarity", "boldDifferentiation"],
            },
          },
          required: ["scoreInsight", "opportunityAreas", "narrativePositioning", "headlineSuggestions"],
        },
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in founder-presence route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to analyze presence" },
      { status: 500 },
    );
  }
}
