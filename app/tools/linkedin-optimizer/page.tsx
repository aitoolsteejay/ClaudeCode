import type { Metadata } from "next";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimizer",
  description: "Free AI-powered LinkedIn profile audit and rewrite. Get a profile optimised to convert visitors into high-intent inbound replies.",
  alternates: { canonical: "https://myntmore.com/tools/linkedin-optimizer" },
};

export default function LinkedInOptimizer() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span
            className="inline-flex text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}
          >
            Free tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#0a0a0a" }}>
            LinkedIn Profile Optimizer
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#52525B" }}>
            Paste your current profile and get a rewrite optimised to convert visitors into high-intent inbound replies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
          <iframe
            src="https://profile-optimizer-steel.vercel.app"
            style={{ width: "100%", height: "800px", border: "none", display: "block" }}
            allow="clipboard-read; clipboard-write"
            title="LinkedIn Profile Optimizer"
          />
        </div>
      </section>
    </InnerLayout>
  );
}
