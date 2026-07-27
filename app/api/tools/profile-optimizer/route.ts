import { NextRequest, NextResponse } from "next/server";

const VALID_TONES = ["bold", "professional", "casual", "analytical", "direct", "persuasive", "minimal", "confident"];

const LIMITS = {
  headline: 220,
  aboutSection: 2600,
  role: 200,
  targetIcp: 200,
  maxTones: 8,
};

function validateInputs(data: Record<string, unknown>): { valid: boolean; error?: string } {
  const { headline, aboutSection, role, targetIcp, tones } = data;

  if (!headline || typeof headline !== "string" || headline.trim().length === 0) {
    return { valid: false, error: "Headline is required" };
  }
  if (!aboutSection || typeof aboutSection !== "string" || aboutSection.trim().length === 0) {
    return { valid: false, error: "About section is required" };
  }
  if (headline.length > LIMITS.headline) {
    return { valid: false, error: `Headline must be ${LIMITS.headline} characters or less` };
  }
  if (aboutSection.length > LIMITS.aboutSection) {
    return { valid: false, error: `About section must be ${LIMITS.aboutSection} characters or less` };
  }
  if (role && typeof role === "string" && role.length > LIMITS.role) {
    return { valid: false, error: `Role must be ${LIMITS.role} characters or less` };
  }
  if (targetIcp && typeof targetIcp === "string" && targetIcp.length > LIMITS.targetIcp) {
    return { valid: false, error: `Target ICP must be ${LIMITS.targetIcp} characters or less` };
  }
  if (tones) {
    const tonesArray = Array.isArray(tones) ? tones : [tones];
    if (tonesArray.length > LIMITS.maxTones) {
      return { valid: false, error: `Maximum ${LIMITS.maxTones} tones allowed` };
    }
    for (const tone of tonesArray) {
      if (typeof tone !== "string" || !VALID_TONES.includes(tone.toLowerCase())) {
        return { valid: false, error: `Invalid tone: ${tone}. Valid options: ${VALID_TONES.join(", ")}` };
      }
    }
  }

  return { valid: true };
}

const TONE_GUIDANCE: Record<string, string> = {
  bold: "Use strong verbs, direct language, and confident assertions. Be punchy and assertive.",
  professional: "Use neutral, credible language. Be polished and trustworthy.",
  casual: "Use lighter, conversational language. Be approachable and friendly.",
  analytical: "Use data-driven language. Be precise and logical.",
  direct: "Be straightforward and to the point. No fluff.",
  persuasive: "Use compelling language that motivates action. Be influential.",
  minimal: "Use concise, stripped-down language. Every word must earn its place.",
  confident: "Project certainty and expertise. Be authoritative without arrogance.",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = validateInputs(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { headline, aboutSection, role, targetIcp, tones } = body;

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const selectedTones = Array.isArray(tones) ? tones : [tones || "bold"];
    const toneInstructions = selectedTones
      .map((t: string) => TONE_GUIDANCE[t] || "")
      .filter(Boolean)
      .join(" ");

    const systemPrompt = `You are a LinkedIn positioning expert who helps professionals optimize their profiles for maximum authority and inbound leads.

Your task is to analyze the provided LinkedIn headline and about section, then generate optimized versions.

CRITICAL RULES:
- Do NOT invent metrics or social proof that wasn't provided
- If no social proof exists, phrase carefully without false claims
- Keep the about section between 120 and 150 words, 3 short paragraphs
- Make content skimmable and professional
- Ensure clear ICP, problem, and outcome are present
- Never use the word "founder" unless it appears in the original content

TONE INSTRUCTIONS: ${toneInstructions}

When multiple tones are specified, blend them intelligently. If tones conflict, prioritize clarity over creativity.

Respond in valid JSON format with this exact structure:
{
  "headlines": {
    "authority": "Role + ICP + credibility/outcome formula",
    "problemSolver": "Problem + who it's for + mechanism formula",
    "socialProof": "Trusted by X + what you do + result formula (only if proof provided, otherwise rephrase)"
  },
  "aboutSection": "Optimized about section (120 to 150 words, 3 paragraphs)",
  "positioningAngles": {
    "authority": "One sharp positioning one liner",
    "problemSolver": "One sharp positioning one liner",
    "socialProof": "One sharp positioning one liner"
  }
}`;

    const userPrompt = `Analyze and optimize this LinkedIn profile:

CURRENT HEADLINE: ${headline.trim()}

CURRENT ABOUT SECTION:
${aboutSection.trim()}

ROLE: ${(role || "").trim()}
TARGET ICP: ${(targetIcp || "").trim()}

Generate optimized headlines (3 variants), an optimized about section, and positioning angles. Apply the following tones: ${selectedTones.join(", ")}.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          generationConfig: { temperature: 0.7 },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      if (response.status === 429) {
        return NextResponse.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
      }
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      throw new Error("No content received from AI");
    }

    let parsed;
    try {
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/```\s*([\s\S]*?)\s*```/);
      const jsonString = jsonMatch ? jsonMatch[1] : content;
      parsed = JSON.parse(jsonString.trim());
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse AI response");
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in profile-optimizer route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error occurred" },
      { status: 500 },
    );
  }
}
