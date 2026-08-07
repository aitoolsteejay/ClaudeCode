export type GeneratorMode = "case_study" | "proposal";

export interface CaseStudyInput {
  clientIndustry: string;
  problem: string;
  approach: string;
  result: string;
  testimonial: string;
}

export interface ProposalInput {
  prospectCompany: string;
  prospectIndustry: string;
  problemShared: string;
  decisionMakerRole: string;
  budgetIndication: string;
  howWeMet: "Referral" | "Inbound" | "Outbound" | "";
  pastWins: string;
}

export interface StatEntry {
  value: string;
  label: string;
}

export interface PhaseEntry {
  title: string;
  description: string;
}

export interface CaseStudyOutput {
  headline: string;
  stats: StatEntry[];
  problemParagraph: string;
  approachSteps: PhaseEntry[];
  resultsParagraph: string;
  pullQuote: string | null;
  servicesUsed: string[];
}

export interface ProposalOutput {
  executiveSummary: string;
  understandingChallenge: string;
  approachPhases: PhaseEntry[];
  whyUs: string[];
  investment: string;
  nextStep: string;
  positioning: string;
}
