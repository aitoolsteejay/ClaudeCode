import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Myntmore",
  description: "Join the team that builds pipelines, not decks. Open roles in sales, lead gen, and GTM strategy at Myntmore. See open roles and apply today.",
  keywords: ["myntmore careers", "b2b sales jobs mumbai", "growth marketing jobs mumbai", "lead generation jobs mumbai", "gtm jobs mumbai", "hr internship mumbai", "sales jobs worli mumbai", "b2b agency jobs mumbai", "linkedin marketing jobs india", "cold email jobs mumbai", "startup jobs mumbai", "marketing internship mumbai", "sales head jobs mumbai", "b2b growth agency careers"],
  alternates: { canonical: "https://www.myntmore.com/careers" },
  openGraph: {
    title: "Careers at Myntmore",
    description: "Open roles in sales, lead generation, and GTM strategy at Myntmore.",
    url: "https://www.myntmore.com/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
