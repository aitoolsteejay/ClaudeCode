import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import ICPBuilderClient from "./ICPBuilderClient";

export const metadata: Metadata = {
  title: "ICP Builder & Value Proposition Generator",
  description: "Free AI tool that builds deep B2B and D2C ICPs from your business description, plus a value proposition for each. Try it free.",
  keywords: [
    "icp builder tool",
    "ideal customer profile generator",
    "free icp generator",
    "b2b icp builder",
    "value proposition generator",
    "how to build an ideal customer profile",
    "ai icp generator",
    "target customer profile tool",
    "d2c ideal customer profile tool",
    "value proposition generator for startups",
    "channel partner icp tool",
    "customer segmentation tool free",
    "icp and value prop generator",
    "b2b buyer persona generator",
    "generate ideal customer profile from business description",
  ],
  alternates: { canonical: "https://www.myntmore.com/tools/icp-builder" },
};

export default function ICPBuilder() {
  return (
    <InnerLayout>
      <div className="pt-32 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Free Tools", href: "/resources/tools" }, { label: "ICP Builder & Value Proposition Generator", href: "/tools/icp-builder" }]} />
        </div>
      </div>
      <ICPBuilderClient />
    </InnerLayout>
  );
}
