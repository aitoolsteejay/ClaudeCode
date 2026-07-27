import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimizer",
  description: "Free AI-powered LinkedIn profile audit and rewrite. Get a profile optimised to convert visitors into high-intent inbound replies.",
  alternates: { canonical: "https://myntmore.com/tools/linkedin-optimizer" },
};

export default function LinkedInOptimizer() {
  return (
    <InnerLayout>
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#8C8279" }}>
            <Link href="/resources/tools" className="link-subtle">Tools</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span style={{ color: "#3D3D3D" }}>LinkedIn Profile Optimizer</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
          <iframe
            src="https://profile-optimizer-steel.vercel.app"
            style={{ width: "100%", height: "4300px", border: "none", display: "block" }}
            allow="clipboard-read; clipboard-write"
            title="LinkedIn Profile Optimizer"
          />
        </div>
      </section>
    </InnerLayout>
  );
}
