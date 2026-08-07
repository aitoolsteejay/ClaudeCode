import type { IcpInput, GeneratedIcp } from "../types";

export const NO_JARGON_RULE = `SIMPLE LANGUAGE RULE (MANDATORY): Write like you are explaining this to a smart friend who has never worked in marketing or sales. Someone with a basic level of English must be able to read this once and immediately understand it.
- Keep sentences short. One idea per sentence. Avoid stacking multiple clauses together with commas and "which"/"that".
- Use everyday words instead of business or consultant-speak. Say "get more customers" not "drive customer acquisition", say "make it easy to buy" not "streamline the conversion funnel", say "helps you" not "enables you to", say "shows" not "demonstrates" or "showcases", say "use" not "leverage" or "utilise", say "start" not "initiate", say "check" not "validate", say "build" not "cultivate" or "foster".
- No jargon, no buzzwords, no acronyms unless the acronym is more familiar than the full term (e.g. keep "SEO", "ROI", "CRM"; spell out anything less common). Say "target customers" not "ICPs", say "growth plan" not "GTM roadmap", say "outreach messages" not "touchpoint sequences".
- Avoid inflated, vague, or "impressive-sounding" phrases: no "unlock", "elevate", "empower", "seamless", "robust", "holistic", "synergy", "game-changing", "cutting-edge", "best-in-class", "paradigm".
- Prefer active voice ("we help you close more deals") over passive voice ("more deals can be closed").
- Never sacrifice accuracy for simplicity, just say the same thing in plainer words.`;

export const PERSONALISATION_RULE = `PERSONALISATION RULE (MANDATORY): Every part of this output must be personalised using the user's actual inputs. Do not generate generic or placeholder content. Specifically: Reference their actual company name if known. Reference their actual industry and target geography. Reference their specific target customer names and pain points in all messaging. Reference their actual core offer in all strategy and outreach content. If any of these fields are available from previous steps, use them. Never write output that could apply to any generic business. It must feel written specifically for this person.`;

export const GEO_AWARENESS_RULE = `GEOGRAPHY ADAPTATION (MANDATORY): Always adapt strategy based on the ICP's target geography. Consider cultural, market, and behavioral differences. Examples: India = relationship-driven, price-sensitive, WhatsApp and LinkedIn strong, slower follow-ups, warmer tone. USA = ROI-driven, direct messaging, faster decision cycles, faster cadence. UK = formal tone, trust and credibility focus. Europe = partnerships and compliance focus. Middle East = relationship and trust heavy, referral-driven. Southeast Asia = mobile-first, social commerce aware. Australia = casual professional tone, quality-focused. If no geography is specified, use a neutral global tone. Do NOT assume any default country. Each geography must influence: channels, messaging tone, timing, platform preferences, trust signals, and buying behavior references.`;

export const BUSINESS_TYPE_RULE = `BUSINESS TYPE ADAPTATION (MANDATORY): Two separate inputs describe this business, adapt strategy based on both. "Selling To" (D2C, B2B, or Both) describes WHO the buyer is: if D2C, the buyer is an individual consumer making a personal purchase decision, often driven by emotion, impulse, lifestyle fit, and social proof rather than ROI calculations; favour channels like Instagram, TikTok, influencer and community-led marketing, reviews, and urgency-driven messaging. If B2B, the buyer is part of an organisation, the decision often involves multiple stakeholders and a longer, more rational process driven by ROI, risk reduction, and business outcomes; favour professional credibility, case studies, and channels like LinkedIn and email. If Both, blend the two based on which ICP or context is being addressed. "Business Type" (Product-based, Service-based, or Hybrid) describes WHAT is being sold: Product-based means a standardised offering bought largely as-is; Service-based means custom, relationship-heavy delivery where trust in the people matters as much as the outcome; Hybrid blends both. If either input is not specified, use a neutral, general tone for that dimension. This must influence: messaging tone, psychology, channels, and buying behavior references.`;

function geographyDetail(icp: IcpInput): string {
  if (!icp.geography.length) return "Not specified";
  let detail = icp.geography.join(", ");
  if (icp.geography.includes("India") && icp.geographyCities.trim()) {
    detail += ` (Cities in India: ${icp.geographyCities.trim()})`;
  }
  return detail;
}

export function buildD2cPolishPrompt(
  rawDescription: string,
  offer: string,
  sellingTo: string | null,
  businessType: string | null,
): string {
  return `Read this business owner's rough description of one type of individual consumer (D2C, not a business buyer) they want to target, and turn it into 3 distinct, more detailed, cleaner rewritten versions of this customer description.
Each version must be 2 to 3 sentences describing who this person is, their lifestyle or life stage, and why they'd want this product or service. Fix grammar and capitalisation. Do not invent details that are not implied by the description; make reasonable, conservative inferences where something is implied but not explicit.
Make the 3 versions meaningfully different in phrasing and emphasis (for example, one could lead with their lifestyle, one with their motivation, one with their life stage), not just minor rewordings of each other.
Ground every version in the business context below, the rewritten description should read as someone who would specifically want THIS offer, not a generic consumer.

${NO_JARGON_RULE}

Core Offer: ${offer || "Not specified"}
Selling To: ${sellingTo || "Not specified"}
Business Type: ${businessType || "Not specified"}
Customer description: ${rawDescription}

Return ONLY a valid JSON array of exactly 3 strings (no markdown, no code blocks).`;
}

export function buildOfferPolishPrompt(rawDescription: string): string {
  return `Read this business owner's description of their own business, and turn it into 3 distinct, more detailed rewritten versions of their business offering.
Each version must be 2 to 3 sentences, clearly covering: the core problem being solved, who it is for, and how they solve it (the method or mechanism). Fix grammar and capitalisation (proper nouns and acronyms like B2B, SaaS, AI, ROI, CRM, SEO should be capitalised correctly). Do not invent details that are not implied by the description; make reasonable, conservative inferences where something is implied but not explicit.
Make the 3 versions meaningfully different in phrasing and emphasis (for example, one could lead with the outcome, one with the audience, one with the method), not just minor rewordings of each other.

${NO_JARGON_RULE}

Business description: ${rawDescription}

Return ONLY a valid JSON array of exactly 3 strings (no markdown, no code blocks).`;
}

function icpSummaryLine(icp: IcpInput, n: number): string {
  if (icp.icpType === "D2C") {
    const description = icp.d2cSelectedIdx !== null ? icp.d2cOptions[icp.d2cSelectedIdx] : icp.d2cDescription;
    return `ICP ${n} Audience Type: D2C (individual consumer). Customer Description (from the business owner, AI-cleaned): ${description}. Target Geography: ${geographyDetail(icp)}`;
  }
  return `ICP ${n} Audience Type: B2B (business buyer). Inputs: Roles: ${icp.roles.join(", ")}, Company Sizes: ${icp.sizes.join(", ")}, Industries: ${icp.industries.join(", ")}, Target Geography: ${geographyDetail(icp)}`;
}

export function buildIcpPrompt(
  offer: string,
  sellingTo: string | null,
  businessType: string | null,
  icps: IcpInput[],
): string {
  const n = icps.length;
  const summaryLines = icps.map((icp, i) => icpSummaryLine(icp, i + 1)).join("\n");

  return `You are an expert Growth Strategist skilled at building both B2B and D2C customer profiles. Generate ${n} deep, strategic Ideal Customer Profiles.

${NO_JARGON_RULE}

${PERSONALISATION_RULE}

${GEO_AWARENESS_RULE}

${BUSINESS_TYPE_RULE}

Selling To: ${sellingTo || "Not specified"}
Business Type: ${businessType || "Not specified"}
Core Offer: ${offer}
${summaryLines}

AUDIENCE TYPE ADAPTATION PER ICP (MANDATORY): Each ICP above is explicitly marked B2B or D2C, they must NOT be treated the same way.
For any ICP marked B2B: this is a business buyer. "whoTheyAre" and "coreResponsibilities" must describe their professional role, seniority, and organisational context, their job responsibilities and the KPIs they own. "channelPartners" must be agencies, consultants, complementary B2B tool vendors, associations, or communities that already have this exact professional audience's trust and attention.
For any ICP marked D2C: this is an individual consumer making a personal purchase decision, NOT an employee at work. "whoTheyAre" must describe their lifestyle, life stage, identity, and daily context, never a job title or company. "coreResponsibilities" must be repurposed to describe their daily routines, habits, and what occupies their attention day to day that is relevant to this purchase (NOT work responsibilities). "channelPartners" must be influencers, complementary consumer brands, retail or marketplace partners, and online communities this audience already follows and trusts, NOT B2B referral partners.
Every ICP's "audienceType" field in the JSON output must exactly match ("B2B" or "D2C") what is specified for that ICP above.

For EACH ICP generate:
1. ICP Name: Must be simple, immediately understandable, and professional. Use plain language. For B2B ICPs, good examples: "The Growth-Focused Founder", "The Busy Sales Director", "The Scaling Agency Owner". For D2C ICPs, good examples: "The Budget-Conscious New Parent", "The Fitness-Driven Young Professional". Bad examples: "The GTM Orchestrator", "Revenue-Driven Enterprise Executive". The name should describe who the person is in everyday language.
2. Who They Are (3-4 bullet points)
3. Core Responsibilities (as a list), for D2C ICPs this is their daily life context, not a job
4. Pain Points (at least 5 to 7 specific bullet points)
5. Goals and Desires (as a list)
6. Buying Triggers (as a list)
7. Objections (as a list)
8. Psychology (brief)
9. Where They Hang Out (as a list of platforms)
10. How to Position (messaging angle)
11. Geography Context: How the target geography influences buying behavior, communication style, and platform preferences for this ICP
12. Channel Partners: 3 to 4 real types of businesses, individuals, or (for D2C) influencers and complementary consumer brands who already have this ICP's trust and attention, and could refer or co-sell to them. For each: the partner type, why they already have this ICP's attention, and a specific angle for approaching that partner about a referral or co-selling relationship.
13. Audience Type: exactly "B2B" or "D2C", matching the input given for this ICP.

Rules:
- Make each ICP DISTINCT.
- Use specific, believable insights. No generic text.
- Pain Points for all ${n} ICPs MUST be filled.
- Channel Partners must be specific and realistic to this ICP's industry and geography, not generic ("consultants" is too vague, "boutique HR consultancies serving Series A SaaS startups" is specific).
- Adapt all outputs to reflect the target geography's market context, tone, and behavior.
- Do NOT use em-dashes, asterisks, or hash signs in any output.

Return ONLY a valid JSON array of exactly ${n} objects (no markdown, no code blocks). Each object must have: name, audienceType ("B2B" or "D2C"), whoTheyAre (array), coreResponsibilities (array), painPoints (array), goalsDesires (array), buyingTriggers (array), objections (array), psychology (string), whereTheyHangOut (array), howToPosition (string), geographyContext (string), channelPartners (array of objects, each with partnerType, whyTheyFit, approachAngle).`;
}

export function buildValuePropPrompt(
  offer: string,
  sellingTo: string | null,
  businessType: string | null,
  icps: GeneratedIcp[],
): string {
  const icpSummary = icps
    .map((icp, i) => `ICP ${i + 1}: ${icp.name}. Audience Type: ${icp.audienceType}. Pain Points: ${icp.painPoints.join(", ")}. Geography: ${icp.geographyContext || "Not specified"}`)
    .join("\n");

  const flatPartners = icps.flatMap((icp) => icp.channelPartners.map((p) => ({ ...p, icpName: icp.name })));
  const partnerSummary = flatPartners
    .map((p, i) => `Partner ${i + 1}: ${p.partnerType} (relevant to ${p.icpName}). Why they fit: ${p.whyTheyFit || "Not specified"}`)
    .join("\n");

  const hasPartners = flatPartners.length > 0;
  const totalCount = hasPartners ? icps.length + 1 : icps.length;

  return `You are a senior strategist. Generate structured Value Propositions for each of these ${icps.length} target customer types${hasPartners ? ", plus one for the Channel Partners audience" : ""}:

${NO_JARGON_RULE}

${PERSONALISATION_RULE}

${GEO_AWARENESS_RULE}

${BUSINESS_TYPE_RULE}

Selling To: ${sellingTo || "Not specified"}
Business Type: ${businessType || "Not specified"}
Core Offer: ${offer}
${icpSummary}
${hasPartners ? `\nChannel Partners (a 4th audience: businesses or individuals who could refer or co-sell to us, NOT end customers):\n${partnerSummary}` : ""}

For EACH of the ${icps.length} target customer types, provide:
1. corePromise: One powerful sentence that captures the transformation (max 15 words)
2. beforeState: What life looks like BEFORE using this solution (3 bullet points)
3. afterState: What life looks like AFTER (3 bullet points)
4. threeStepSystem: Array of 3 steps, each with "step" (name) and "description"
5. whyOthersFail: Why current alternatives fail (2-3 bullet points)
6. whyYouWin: Why this specific approach wins (2-3 bullet points)
7. contentStrategy: A short, clear paragraph (2-3 sentences) explaining the content strategy angle for reaching this customer type. What kind of content to create, what platform to post it on, and what outcome to drive. Not a tagline.
8. shortPitch: A 2-3 sentence elevator pitch
9. cta: A clear call-to-action sentence
10. icpName: The customer type name
11. positioning: A unique core positioning statement for THIS specific customer type following exactly this format: "We help [specific customer descriptor] to [their specific desired outcome] by [your specific method for this customer type]". Each customer type MUST have a DIFFERENT positioning statement. Use simple, easy-to-understand language. No jargon.
12. coreAngle: The single strongest hook to lead with when talking to this customer type. Must be one of: "Authority", "ROI", "Speed", or "Trust". Include a one-line explanation of why this angle works best for them.

Each ICP above is explicitly marked Audience Type B2B or D2C, its value proposition must reflect that. For a B2B ICP: frame corePromise, positioning, and content around business outcomes, ROI, risk reduction, and professional credibility, channels like LinkedIn and case studies. For a D2C ICP: frame everything around a personal transformation for an individual, emotional and lifestyle benefits, social proof, and channels like Instagram, TikTok, and community. Never use business/ROI language for a D2C ICP or purely emotional/lifestyle language for a B2B ICP.
${hasPartners ? `
For the Channel Partners entry, a partner is NOT an end customer buying a transformation, they are a business or individual deciding whether it is worth referring or co-selling for us. Do NOT reuse the ICP fields above (no beforeState, afterState, threeStepSystem, whyOthersFail, whyYouWin). Instead use this DIFFERENT set of fields:
- icpName: exactly "Channel Partners"
- corePromise: one powerful sentence capturing why partnering with us is worth their time (max 15 words)
- whatsInItForThem: array of 4 bullet points, concrete tangible benefits for THEM specifically (extra revenue or commission, a stronger offering for their own clients, minimal extra effort on their part, credibility by association)
- idealPartnerProfile: one short paragraph describing what makes a great partner for us, specific enough that it is obvious who to approach
- partnershipSteps: array of exactly 3 objects each with "step" (short name) and "description", describing how the partnership actually works end to end, for example how they refer someone, what we handle from there, and how they benefit or get paid
- whyPartnerWithUs: array of 3-4 bullet points on why partnering with us specifically beats their other options, such as doing it themselves, referring to someone else, or not referring at all
- howToApproachThem: a short paragraph (2-3 sentences) on the best practical way to reach out to and pitch this type of partner, which channel to use, what tone to take, what to lead with
- shortPitch: a 2-3 sentence pitch written as if speaking directly to a prospective partner
- cta: a clear call to action for the partner, for example proposing a short call or a simple first step
- positioning: a single statement in exactly this format: "We help [partner type] give their clients [outcome] by [what we do], while they [what they get out of it]"
- coreAngle: the strongest hook for approaching this partner type, one of "Authority", "ROI", "Speed", or "Trust", with a one-line reason
` : ""}
Rules:
- Each customer type must feel fundamentally DIFFERENT.
- Ban phrases like "increase growth", "improve results", "scale faster".
- Do NOT use em-dashes, asterisks, or hash signs in any output.
- Return ONLY a valid JSON array of ${totalCount} objects (no markdown, no code blocks).`;
}
