import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimizer | Myntmore",
  description: "Free AI-powered LinkedIn profile audit and rewrite. Get a profile optimised to convert visitors into high-intent inbound replies.",
  alternates: { canonical: "https://myntmore.com/tools/linkedin-optimizer" },
};

export default function LinkedInOptimizer() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="https://profile-optimizer-steel.vercel.app"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write"
        title="LinkedIn Profile Optimizer"
      />
    </div>
  );
}
