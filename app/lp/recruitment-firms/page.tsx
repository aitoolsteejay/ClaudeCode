import type { Metadata } from "next";
import RecruitmentFirmsClient from "./RecruitmentFirmsClient";

export const metadata: Metadata = {
  title: "B2B Outbound for Recruitment & Staffing Firms",
  description: "Stop competing on job boards. We build and run the outbound engine that fills your staffing firm's pipeline with new client companies: AI-powered cold email, LinkedIn outreach, and ABM targeting the HR and TA leaders who are actively hiring.",
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
