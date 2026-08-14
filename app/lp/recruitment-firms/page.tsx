import type { Metadata } from "next";
import RecruitmentFirmsClient from "./RecruitmentFirmsClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Recruitment & Staffing Firms",
  description: "Stop competing on job boards. We build and run the outbound engine that fills your staffing firm's pipeline with new client companies: AI-powered cold email, LinkedIn outreach, and ABM targeting the HR and TA leaders who are actively hiring.",
  keywords: [
    "lead generation for staffing agencies",
    "b2b outbound for recruitment firms",
    "how to get clients for staffing agency",
    "cold email for recruitment agencies india",
    "linkedin outreach for staffing firms",
    "client acquisition for recruitment firms",
    "hr outreach agency for staffing companies",
    "b2b lead gen for talent acquisition firms",
    "alternative to job boards for staffing agencies",
    "outbound sales for recruitment agencies",
    "lead generation agency for hr firms",
    "abm for staffing and recruitment firms",
    "new client outreach for recruitment agencies",
    "cold email agency for staffing firms mumbai",
    "b2b outbound for executive search firms",
  ],
  alternates: { canonical: "https://www.myntmore.com/lp/recruitment-firms" },
  openGraph: {
    title: "B2B Outbound for Recruitment & Staffing Firms | Myntmore",
    description: "Stop competing on job boards. Start booking client meetings with AI-powered outbound.",
    url: "https://www.myntmore.com/lp/recruitment-firms",
  },
};

export default function RecruitmentFirmsPage() {
  return <RecruitmentFirmsClient />;
}
