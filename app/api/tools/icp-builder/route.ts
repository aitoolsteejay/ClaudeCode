import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const LIMITS = {
  businessDescription: 1000,
  goodFitCustomers: 800,
  badFitCustomers: 800,
  dealSize: 150,
};

function validateInputs(body: Record<string, unknown>): { valid: boolean; error?: string } {
  const { businessDescription, goodFitCustomers, badFitCustomers, dealSize } = body;

  if (!businessDescription || typeof businessDescription !== "string" || businessDescription.trim().length === 0) {
    return { valid: false, error: "Business description is required" };
  }
  if (!goodFitCustomers || typeof goodFitCustomers !== "string" || goodFitCustomers.trim().length === 0) {
    return { valid: false, error: "At least a few good-fit customers are required" };
  }
  if (!dealSize || typeof dealSize !== "string" || dealSize.trim().length === 0) {
    return { valid: false, error: "Deal size and sales cycle are required" };
  }
  if (badFitCustomers !== undefined && badFitCustomers !== null && typeof badFitCustomers !== "string") {
    return { valid: false, error: "Bad-fit customers must be text" };
  }
  if (businessDescription.length > LIMITS.businessDescription) {
    return { valid: false, error: `Business description must be ${LIMITS.businessDescription} characters or less` };
  }
  if (goodFitCustomers.length > LIMITS.goodFitCustomers) {
    return { valid: false, error: `Good-fit customers must be ${LIMITS.goodFitCustomers} characters or less` };
  }
  if (typeof badFitCustomers === "string" && badFitCustomers.length > LIMITS.badFitCustomers) {
    return { valid: false, error: `Bad-fit customers must be ${LIMITS.badFitCustomers} characters or less` };
  }
  if (dealSize.length > LIMITS.dealSize) {
    return { valid: false, error: `Deal size must be ${LIMITS.dealSize} characters or less` };
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

    const { businessDescription, goodFitCustomers, badFitCustomers, dealSize } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
    You are a B2B sales intelligence consultant who builds precise, usable Ideal Customer Profiles (ICPs) for founders, the kind they can immediately apply to score inbound leads, not vague strategy-deck fluff.

    BUSINESS: ${businessDescription.trim()}
    GOOD-FIT CUSTOMERS (their best customers so far, and why): ${goodFitCustomers.trim()}
    BAD-FIT OR CHURNED CUSTOMERS: ${badFitCustomers && typeof badFitCustomers === "string" && badFitCustomers.trim() ? badFitCustomers.trim() : "Not provided."}
    TYPICAL DEAL SIZE AND SALES CYCLE: ${dealSize.trim()}

    Build a complete ICP profile from this, structured exactly per the schema:

    1. Firmographics: company size range, 3 to 6 specific industries (not broad categories like "tech"), revenue range, and typical geography, all inferred from the good-fit customers described.
    2. Buyer personas: 2 to 3 job titles who actually buy or champion this internally, each with their role (decision-maker, champion, or influencer) and one sentence on why they personally care about this problem.
    3. Buying triggers: 3 to 5 concrete, observable signals that mean a company is ready to buy now (a specific hire, a funding event, a tool switch, a headcount threshold, a season, etc.), grounded in what the good-fit customers had in common when they converted.
    4. Disqualifiers: 3 to 5 concrete red flags that predict a bad fit or churn risk, grounded in the bad-fit or churned customers if any were given, otherwise inferred from what would break this business model.
    5. Scoring rubric: 5 to 8 line items that sum to roughly 100 points across the criteria above (a mix of positive points for fit signals and negative points for disqualifiers), each with a short rationale, so the founder can literally score any inbound lead against it.

    STRICT GUIDELINES:
    - Every field must be specific to this business. Do not give generic ICP advice that could apply to any B2B company.
    - Buying triggers and disqualifiers must be observable facts a founder could actually check (a job posting, a headcount number, a funding announcement), not abstract traits like "innovative" or "growth-minded".
    - Avoid generic buzzwords (synergy, game changer, cutting-edge, best-in-class).
    - Scoring rubric point values must be whole numbers, positive for fit signals and negative for disqualifiers, and should sum to approximately 100 for a perfect-fit account.

    Respond in valid JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            firmographics: {
              type: Type.OBJECT,
              properties: {
                companySize: { type: Type.STRING },
                industries: { type: Type.ARRAY, items: { type: Type.STRING } },
                revenueRange: { type: Type.STRING },
                geography: { type: Type.STRING },
              },
              required: ["companySize", "industries", "revenueRange", "geography"],
            },
            buyerPersonas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  role: { type: Type.STRING },
                  whyTheyBuy: { type: Type.STRING },
                },
                required: ["title", "role", "whyTheyBuy"],
              },
            },
            buyingTriggers: { type: Type.ARRAY, items: { type: Type.STRING } },
            disqualifiers: { type: Type.ARRAY, items: { type: Type.STRING } },
            scoringRubric: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  criterion: { type: Type.STRING },
                  points: { type: Type.NUMBER },
                  rationale: { type: Type.STRING },
                },
                required: ["criterion", "points", "rationale"],
              },
            },
          },
          required: ["firmographics", "buyerPersonas", "buyingTriggers", "disqualifiers", "scoringRubric"],
        },
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in icp-builder route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to build ICP" },
      { status: 500 },
    );
  }
}
