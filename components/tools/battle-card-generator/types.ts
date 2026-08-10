export interface BattleCardInput {
  competitorName: string;
  competitorWebsite: string;
  yourCompanyName: string;
  yourOffer: string;
}

export interface ObjectionEntry {
  objection: string;
  response: string;
}

export interface BattleCardOutput {
  competitorName: string;
  whatTheyDo: string;
  pricingModel: string;
  strengths: string[];
  gaps: string[];
  howToPosition: string;
  objectionResponses: ObjectionEntry[];
  researchNote: string;
}
