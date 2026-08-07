import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const LIMITS = {
  short: 200,
  long: 1000,
};

const NO_JARGON_RULE = `Write in simple, everyday language. Short sentences, one idea per sentence. No jargon, no buzzwords ("synergy", "unlock", "leverage", "holistic", "cutting-edge"). Do not use em dashes or asterisks anywhere in your response.`;

interface CaseStudyBody {
  mode: "case_study";
  clientIndustry: string;
  problem: string;
  approach: string;
  result: string;
  testimonial: string;
}

interface ProposalBody {
  mode: "proposal";
  prospectCompany: string;
  prospectIndustry: string;
  problemShared: string;
  decisionMakerRole: string;
  budgetIndication: string;
  howWeMet: string;
  pastWins: string;
}

function trimTo(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validateCaseStudy(body: Record<string, unknown>): { valid: boolean; error?: string } {
  if (!trimTo(body.clientIndustry, LIMITS.short)) return { valid: false, error: "Client industry is required" };
  if (!trimTo(body.problem, LIMITS.long)) return { valid: false, error: "The problem is required" };
  if (!trimTo(body.approach, LIMITS.long)) return { valid: false, error: "What you did is required" };
  if (!trimTo(body.result, LIMITS.long)) return { valid: false, error: "The result is required" };
  return { valid: true };
}

function validateProposal(body: Record<string, unknown>): { valid: boolean; error?: string } {
  if (!trimTo(body.prospectCompany, LIMITS.short)) return { valid: false, error: "Prospect company is required" };
  if (!trimTo(body.prospectIndustry, LIMITS.short)) return { valid: false, error: "Prospect industry is required" };
  if (!trimTo(body.problemShared, LIMITS.long)) return { valid: false, error: "The problem they shared is required" };
  if (!trimTo(body.decisionMakerRole, LIMITS.short)) return { valid: false, error: "Decision maker's role is required" };
  return { valid: true };
}

function buildCaseStudyPrompt(body: CaseStudyBody): string {
  return `You are a sharp B2B copywriter turning a completed project into a case study for a service business's website.

${NO_JARGON_RULE}

Client industry: ${body.clientIndustry}
The problem the client had: ${body.problem}
What the service provider actually did: ${body.approach}
The result achieved: ${body.result}
Client testimonial, if any: ${body.testimonial || "None provided"}

Rules:
- Do not invent numbers. Only put a number in "stats" if a real number appears in the result text above. If fewer than 3 real numbers exist, return fewer stats (even zero is fine).
- Do not invent a client quote. Only fill "pullQuote" if a testimonial was provided above, otherwise return null.
- Structure the rough "what you did" notes into 2 to 3 clear phases, do not invent activities that were not implied.
- "servicesUsed" should be 2 to 4 short service-category tags inferred from the approach (e.g. "Cold Email", "LinkedIn Outreach", "Sales Intelligence"), not generic words.
- The headline must be outcome-focused and specific to this project, not generic.

Return valid JSON matching the schema.`;
}

function buildProposalPrompt(body: ProposalBody): string {
  return `You are a senior strategist drafting a sales proposal for a service business to send to a prospect.

${NO_JARGON_RULE}

Prospect company: ${body.prospectCompany}
Prospect industry: ${body.prospectIndustry}
The problem they described, in their words: ${body.problemShared}
Decision maker's role: ${body.decisionMakerRole}
Budget indication: ${body.budgetIndication || "Not discussed"}
How we met: ${body.howWeMet || "Not specified"}
Our relevant past results: ${body.pastWins || "None provided"}

Rules:
- "understandingChallenge" must mirror the prospect's own language from the problem they described, not generic filler.
- Structure "approachPhases" into exactly 3 phases specific to their stated problem.
- "whyUs" must draw only on the past results provided above. If none were provided, keep it generic and credibility-based (process, responsiveness, communication) and do not invent specific numbers or client names.
- "investment" must literally be the placeholder text "Investment to be scoped based on your specific needs, happy to walk through pricing on a call." Do not invent a number.
- "positioning" must follow exactly this format: "We help [specific prospect type] to [their desired outcome] by [specific method]".

Return valid JSON matching the schema.`;
}

const CASE_STUDY_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    headline: { type: Type.STRING },
    stats: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: { value: { type: Type.STRING }, label: { type: Type.STRING } },
        required: ["value", "label"],
      },
    },
    problemParagraph: { type: Type.STRING },
    approachSteps: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: { title: { type: Type.STRING }, description: { type: Type.STRING } },
        required: ["title", "description"],
      },
    },
    resultsParagraph: { type: Type.STRING },
    pullQuote: { type: Type.STRING, nullable: true },
    servicesUsed: { type: Type.ARRAY, items: { type: Type.STRING } },
  },
  required: ["headline", "stats", "problemParagraph", "approachSteps", "resultsParagraph", "servicesUsed"],
};

const PROPOSAL_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    executiveSummary: { type: Type.STRING },
    understandingChallenge: { type: Type.STRING },
    approachPhases: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: { title: { type: Type.STRING }, description: { type: Type.STRING } },
        required: ["title", "description"],
      },
    },
    whyUs: { type: Type.ARRAY, items: { type: Type.STRING } },
    investment: { type: Type.STRING },
    nextStep: { type: Type.STRING },
    positioning: { type: Type.STRING },
  },
  required: ["executiveSummary", "understandingChallenge", "approachPhases", "whyUs", "investment", "nextStep", "positioning"],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mode = body.mode;

    if (mode !== "case_study" && mode !== "proposal") {
      return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
    }

    const validation = mode === "case_study" ? validateCaseStudy(body) : validateProposal(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt =
      mode === "case_study"
        ? buildCaseStudyPrompt({
            mode: "case_study",
            clientIndustry: trimTo(body.clientIndustry, LIMITS.short),
            problem: trimTo(body.problem, LIMITS.long),
            approach: trimTo(body.approach, LIMITS.long),
            result: trimTo(body.result, LIMITS.long),
            testimonial: trimTo(body.testimonial, LIMITS.long),
          })
        : buildProposalPrompt({
            mode: "proposal",
            prospectCompany: trimTo(body.prospectCompany, LIMITS.short),
            prospectIndustry: trimTo(body.prospectIndustry, LIMITS.short),
            problemShared: trimTo(body.problemShared, LIMITS.long),
            decisionMakerRole: trimTo(body.decisionMakerRole, LIMITS.short),
            budgetIndication: trimTo(body.budgetIndication, LIMITS.short),
            howWeMet: trimTo(body.howWeMet, LIMITS.short),
            pastWins: trimTo(body.pastWins, LIMITS.long),
          });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: mode === "case_study" ? CASE_STUDY_SCHEMA : PROPOSAL_SCHEMA,
      },
    });

    const jsonStr = (response.text || "").trim();
    const parsed = JSON.parse(jsonStr);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error in case-study-generator route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate draft" },
      { status: 500 },
    );
  }
}
