// The deliberate internal-link paths, written down once:
//
//   service page -> a case study that used that service -> a guide or post that
//   explains the method -> the consultation page
//
// Each service page renders its row through <RelatedPath>, and each real case
// study renders a "go deeper" row, so the path exists in both directions instead
// of relying on the nav and footer. Every `href` must be a real page and every
// blurb must restate something that page already says; scripts/audit-internal-links.mjs
// fails the build audit if a link here goes stale.

export interface PathItem {
  kind: "Case study" | "Guide" | "Read" | "Compare" | "Free tool";
  label: string;
  href: string;
  blurb: string;
}

export const CONSULTATION = { label: "Book a free strategy call", href: "/book-a-call" };

export const SERVICE_PATHS: Record<string, PathItem[]> = {
  "cold-email": [
    { kind: "Case study", label: "Cold Email Added $400K Pipeline in 6 Weeks", href: "/case-studies/ecommerce-conversion-playbook", blurb: "An eCommerce SaaS: 28 meetings, a 41% open rate and $400K pipeline in six weeks." },
    { kind: "Guide", label: "Cold Email Deliverability Guide", href: "/resources/blogs/cold-email-deliverability-guide", blurb: "Domain setup, warming and sending limits explained." },
    { kind: "Read", label: "Cold Email Sequence Templates That Get Replies", href: "/resources/blogs/cold-email-sequence-templates", blurb: "Five templates for a full sequence, from the first touch to the breakup email, with the reasoning behind each." },
    { kind: "Compare", label: "Cold Email vs. LinkedIn Outreach", href: "/resources/blogs/cold-email-vs-linkedin-outreach", blurb: "Reply rates, scale and which buyers respond to which channel." },
  ],
  "linkedin-outreach": [
    { kind: "Case study", label: "Bootstrapped Founder: 0 to 22K Followers, 8 Deals", href: "/case-studies/founder-personal-brand-linkedin", blurb: "A founder's LinkedIn brand built from scratch: 22K followers and 8 inbound deals in six months." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
    { kind: "Compare", label: "Cold Email vs. LinkedIn Outreach", href: "/resources/blogs/cold-email-vs-linkedin-outreach", blurb: "How cold email and LinkedIn outreach compare, and when each wins." },
    { kind: "Compare", label: "LinkedIn Outreach Agency vs. Manual Prospecting", href: "/resources/blogs/linkedin-outreach-agency-vs-manual-prospecting", blurb: "Prospect manually while you learn who buys; hire an agency once the approach works and your time is the bottleneck." },
    { kind: "Free tool", label: "LinkedIn Hook Grader", href: "/tools/linkedin-hook-grader", blurb: "Paste the first two lines of a post, get a score out of 100 from six rules and three rewrites to choose from." },
    { kind: "Free tool", label: "LinkedIn Profile Optimizer", href: "/tools/linkedin-optimizer", blurb: "Audit and rewrite your headline, about section, and featured assets for higher inbound conversion." },
  ],
  "sales-intelligence": [
    { kind: "Case study", label: "Outbound Engine That Books 15+ Meetings a Month", href: "/case-studies/predictable-b2b-lead-gen-engine", blurb: "A B2B firm's outbound motion rebuilt: 15+ meetings a month, a 29% reply rate and 4x pipeline growth." },
    { kind: "Guide", label: "The Golden ICP Framework for B2B Outbound", href: "/resources/guides/golden-icp-framework", blurb: "Build prospect lists around pressure and buying triggers, with enrichment and timely cold email." },
    { kind: "Read", label: "ICP Mapping for B2B: Define Your Exact Buyer", href: "/resources/blogs/icp-mapping-b2b", blurb: "The ICP mapping process used to find the buyers who close." },
  ],
  "ai-lead-generation": [
    { kind: "Case study", label: "Outbound Engine That Books 15+ Meetings a Month", href: "/case-studies/predictable-b2b-lead-gen-engine", blurb: "A B2B firm's outbound rebuilt with AI lead generation: 15+ meetings a month and 4x pipeline growth." },
    { kind: "Guide", label: "80+ US Meetings Booked in 1 Month with AI Agents", href: "/resources/guides/80-us-meetings-ai-agents", blurb: "The AI-agent blueprint behind 800 LinkedIn connections and 80+ US B2B meetings a month." },
    { kind: "Read", label: "The 7 B2B Lead Gen Metrics That Actually Matter", href: "/resources/blogs/b2b-lead-gen-metrics", blurb: "The seven metrics that show whether a lead gen engine is healthy." },
    { kind: "Compare", label: "AI vs. Traditional B2B Lead Generation", href: "/resources/blogs/ai-vs-traditional-lead-generation", blurb: "What AI changes in research and scoring, where it falls short, and when manual research still wins." },
  ],
  "account-based-marketing": [
    { kind: "Case study", label: "20+ Qualified Meetings/Month for UK Pharma", href: "/case-studies/uk-pharma-qualified-meetings", blurb: "Precision over volume: from 3 to 20+ qualified meetings a month." },
    { kind: "Read", label: "Multi-Threading the B2B Buying Committee", href: "/resources/blogs/multi-threading-b2b-buying-committee", blurb: "How to map the buying committee and multi-thread deals so they survive a quiet or departing champion." },
    { kind: "Read", label: "B2B Outbound Sales: What It Is & How It Works", href: "/resources/blogs/what-is-b2b-outbound-sales", blurb: "What B2B outbound sales is, how the channels and process work, and when it makes sense." },
  ],
  "personal-branding": [
    { kind: "Case study", label: "LinkedIn Brand Drove 3x Inbound in 90 Days", href: "/case-studies/professional-services-linkedin", blurb: "A referral-dependent founder turned into an inbound engine: 3x inbound, 18K followers and 4.8% engagement." },
    { kind: "Read", label: "The Founder's Edge: Your Best Marketing Asset", href: "/resources/blogs/founder-personal-brand-linkedin", blurb: "How founders who build a LinkedIn presence close deals faster and generate inbound without ad spend." },
    { kind: "Read", label: "Founder Personal Branding: Pipeline, Not Likes", href: "/resources/blogs/vanity-metrics-personal-brand-pipeline", blurb: "Why a founder's personal brand should be built for revenue, not vanity metrics." },
    { kind: "Compare", label: "Personal Branding Agency vs. Content Freelancer", href: "/resources/blogs/personal-branding-agency-vs-content-freelancer", blurb: "Scope, voice, consistency and reporting compared, and when each is the better hire." },
    { kind: "Free tool", label: "LinkedIn Hook Grader", href: "/tools/linkedin-hook-grader", blurb: "Paste the first two lines of a post, get a score out of 100 from six rules and three rewrites to choose from." },
    { kind: "Free tool", label: "LinkedIn Profile Optimizer", href: "/tools/linkedin-optimizer", blurb: "Audit and rewrite your LinkedIn profile to turn profile views into high-intent inbound replies." },
  ],
  "gtm-strategy": [
    { kind: "Case study", label: "40 Qualified Meetings in 8 Weeks | SaaS Series A", href: "/case-studies/saas-series-a", blurb: "An outbound engine for a SaaS Series A: 40 meetings, a 34% reply rate and $1.2M pipeline in eight weeks." },
    { kind: "Read", label: "Outbound Funnel Math, Not Gut Feel", href: "/resources/blogs/outbound-funnel-math-not-guesswork", blurb: "Treating B2B outreach as a technical delivery system: rhythm, math and infrastructure." },
    { kind: "Read", label: "The TAM Trap: Vague Targeting Kills Your Pipeline", href: "/resources/blogs/tam-trap-vague-targeting", blurb: "Why a vague audience isn't a strategy, and how to find your Total Conversional Market." },
    { kind: "Guide", label: "How to Choose a B2B Outbound Agency", href: "/resources/guides/how-to-choose-an-outbound-agency", blurb: "A neutral checklist for vetting any outbound agency." },
  ],
};

// Case studies -> the post that explains the method.
export const CASE_STUDY_PATHS: Record<string, PathItem[]> = {
  "specialist-recruitment-linkedin-leads": [
    { kind: "Read", label: "LinkedIn Outreach Sequence: The 5-Touch Structure", href: "/resources/blogs/linkedin-outreach-sequences", blurb: "The warm-first LinkedIn sequence: what to say in the opening DM and how to follow up." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
    { kind: "Read", label: "Multi-Threading the B2B Buying Committee", href: "/resources/blogs/multi-threading-b2b-buying-committee", blurb: "How to reach several stakeholders in one account, each with a message about their own problem." },
  ],
  "leadership-development-messaging-shift": [
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
    { kind: "Read", label: "Founder Personal Branding: Pipeline, Not Likes", href: "/resources/blogs/vanity-metrics-personal-brand-pipeline", blurb: "Why a founder's personal brand should be built for revenue, not vanity metrics." },
  ],
  "retail-strategy-design-pipeline": [
    { kind: "Read", label: "Multi-Threading the B2B Buying Committee", href: "/resources/blogs/multi-threading-b2b-buying-committee", blurb: "How to map the buying committee and multi-thread deals so they survive a quiet or departing champion." },
    { kind: "Guide", label: "The Golden ICP Framework for B2B Outbound", href: "/resources/guides/golden-icp-framework", blurb: "Build prospect lists around pressure and buying triggers, with enrichment and timely cold email." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
  ],
  "heritage-jewellery-valuation-pipeline": [
    { kind: "Guide", label: "The AI Tech Stack Behind a Jewellery Outbound Engine", href: "/resources/guides/ai-tech-stack-jewellery", blurb: "How specialised tooling and high-precision targeting scale bespoke luxury and B2B pipelines." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
  ],
  "medical-tourism-platform-pipeline": [
    { kind: "Guide", label: "80+ US Meetings Booked in 1 Month with AI Agents", href: "/resources/guides/80-us-meetings-ai-agents", blurb: "The AI-agent blueprint behind 800 LinkedIn connections and 80+ US B2B meetings a month." },
    { kind: "Read", label: "Multi-Threading the B2B Buying Committee", href: "/resources/blogs/multi-threading-b2b-buying-committee", blurb: "How to map the buying committee and multi-thread deals so they survive a quiet or departing champion." },
    { kind: "Guide", label: "The Golden ICP Framework for B2B Outbound", href: "/resources/guides/golden-icp-framework", blurb: "Build prospect lists around pressure and buying triggers, with enrichment and timely cold email." },
  ],
  "wealth-management-pms-pipeline": [
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
    { kind: "Read", label: "Founder Personal Branding: Pipeline, Not Likes", href: "/resources/blogs/vanity-metrics-personal-brand-pipeline", blurb: "Why a founder's personal brand should be built for revenue, not vanity metrics." },
  ],
  "founder-personal-brand-linkedin": [
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
    { kind: "Guide", label: "58 Meetings Booked from 600 LinkedIn Connections", href: "/resources/guides/58-meetings-600-linkedin-connections", blurb: "The five-step LinkedIn framework: ICP, positioning, warm-up, a five-message sequence and follow-ups." },
  ],
  "professional-services-linkedin": [
    { kind: "Read", label: "The Silent Salesperson: LinkedIn Lead Machine", href: "/resources/blogs/linkedin-profile-inbound-lead-machine", blurb: "Fixing the part of LinkedIn most founders ignore: the profile people check before reading your posts." },
    { kind: "Read", label: "Founder Personal Branding: Pipeline, Not Likes", href: "/resources/blogs/vanity-metrics-personal-brand-pipeline", blurb: "Why a founder's personal brand should be built for revenue, not vanity metrics." },
  ],
  "predictable-b2b-lead-gen-engine": [
    { kind: "Read", label: "Outbound Funnel Math, Not Gut Feel", href: "/resources/blogs/outbound-funnel-math-not-guesswork", blurb: "Treating B2B outreach as a technical delivery system: rhythm, math and infrastructure." },
    { kind: "Read", label: "The 7 B2B Lead Gen Metrics That Actually Matter", href: "/resources/blogs/b2b-lead-gen-metrics", blurb: "The seven metrics that show whether a lead gen engine is healthy." },
  ],
  "saas-series-a": [
    { kind: "Compare", label: "Cold Email vs. LinkedIn Outreach", href: "/resources/blogs/cold-email-vs-linkedin-outreach", blurb: "How cold email and LinkedIn outreach compare, and when each wins." },
    { kind: "Read", label: "Cold Email Sequence Templates That Get Replies", href: "/resources/blogs/cold-email-sequence-templates", blurb: "Five templates for a full sequence, from the first touch to the breakup email, with the reasoning behind each." },
  ],
  "uk-pharma-qualified-meetings": [
    { kind: "Read", label: "ICP Mapping for B2B: Define Your Exact Buyer", href: "/resources/blogs/icp-mapping-b2b", blurb: "The ICP mapping process used to find the buyers who close." },
    { kind: "Read", label: "Multi-Threading the B2B Buying Committee", href: "/resources/blogs/multi-threading-b2b-buying-committee", blurb: "How to map the buying committee and multi-thread deals so they survive a quiet or departing champion." },
  ],
  "ecommerce-conversion-playbook": [
    { kind: "Guide", label: "Cold Email Deliverability Guide", href: "/resources/blogs/cold-email-deliverability-guide", blurb: "Domain setup, warming and sending limits explained." },
    { kind: "Read", label: "Cold Email Sequence Templates That Get Replies", href: "/resources/blogs/cold-email-sequence-templates", blurb: "Five templates for a full sequence, from the first touch to the breakup email, with the reasoning behind each." },
  ],
};
