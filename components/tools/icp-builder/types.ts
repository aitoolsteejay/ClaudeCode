export type SellingTo = "D2C" | "B2B" | "Both";
export type BusinessType = "Product-based" | "Service-based" | "Hybrid";

export interface IntakeData {
  offer: string;
  sellingTo: SellingTo | null;
  businessType: BusinessType | null;
}

export interface IcpInput {
  id: string;
  icpType: "B2B" | "D2C" | null;

  // B2B fields
  roles: string[];
  sizes: string[];
  industries: string[];
  geography: string[];
  geographyCities: string;

  // D2C fields
  d2cDescription: string;
  d2cOptions: string[];
  d2cOptionsKey: string;
  d2cSelectedIdx: number | null;
}

export interface ChannelPartner {
  partnerType: string;
  whyTheyFit: string;
  approachAngle: string;
}

export interface GeneratedIcp {
  name: string;
  audienceType: "B2B" | "D2C";
  whoTheyAre: string[];
  coreResponsibilities: string[];
  painPoints: string[];
  goalsDesires: string[];
  buyingTriggers: string[];
  objections: string[];
  psychology: string;
  whereTheyHangOut: string[];
  howToPosition: string;
  geographyContext: string;
  channelPartners: ChannelPartner[];
}

export type CoreAngle = "Authority" | "ROI" | "Speed" | "Trust";

export interface ValuePropResult {
  icpName: string;
  corePromise: string;
  positioning: string;
  coreAngle: string;
  shortPitch: string;
  cta: string;
  isPartnerEntry?: boolean;

  // ICP entries
  beforeState?: string[];
  afterState?: string[];
  threeStepSystem?: { step: string; description: string }[];
  whyOthersFail?: string[];
  whyYouWin?: string[];
  contentStrategy?: string;

  // Channel Partners entry
  whatsInItForThem?: string[];
  idealPartnerProfile?: string;
  partnershipSteps?: { step: string; description: string }[];
  whyPartnerWithUs?: string[];
  howToApproachThem?: string;
}

export type Screen = "intake" | "icp" | "valueprop";
