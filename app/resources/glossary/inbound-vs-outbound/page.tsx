import type { Metadata } from "next";
import GlossaryTerm from "@/components/glossary/GlossaryTerm";
import { buildDefinedTermSchema, SITE_URL } from "@/lib/schema";

const SLUG = "inbound-vs-outbound";
const PAGE_URL = `${SITE_URL}/resources/glossary/${SLUG}`;
const TITLE = "Inbound vs. Outbound";
const DESCRIPTION = "Inbound marketing attracts prospects who come to you through content, search, or referrals, while outbound marketing proactively reaches out to prospects who haven't found you yet, such as through cold email or LinkedIn.";
const META_DESCRIPTION = "Inbound brings prospects to you through content, search and referrals; outbound contacts them first by cold email or LinkedIn. Side-by-side comparison.";

export const metadata: Metadata = {
  title: `${TITLE}: Key Differences | Glossary`,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: ["inbound vs outbound marketing", "inbound vs outbound sales", "difference between inbound and outbound", "b2b inbound outbound"],
  openGraph: {
    title: `${TITLE} | Myntmore Glossary`,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
};

// Each row answers one way people compare the two. Timing for outbound uses
// the site-wide figure (campaigns live within 18 days).
const COMPARISON = [
  { factor: "Who starts the conversation", inbound: "The prospect, after finding you through search, content, referrals or events", outbound: "You, by cold email, LinkedIn or phone" },
  { factor: "Time to first results", inbound: "Months: content and search rankings compound slowly", outbound: "Weeks: Myntmore campaigns go live within 18 days" },
  { factor: "Targeting", inbound: "Whoever finds you; hard to aim at specific accounts", outbound: "The exact companies and roles you choose" },
  { factor: "Buyer intent at first contact", inbound: "Higher: they came looking", outbound: "Lower: you create the interest" },
  { factor: "How cost behaves", inbound: "Front-loaded, then cheaper per lead as content compounds", outbound: "Ongoing, and scales with sending capacity and team time" },
  { factor: "Works best when", inbound: "Buyers already search for what you sell", outbound: "Buyers don't know you yet, or you need specific accounts" },
];

const FAQS = [
  { question: "What does inbound and outbound mean?", answer: "Inbound and outbound describe who starts the conversation. Inbound means buyers find you first, through search, content, referrals or events, and get in touch. Outbound means you contact chosen prospects first, by cold email, LinkedIn or phone. The terms apply to both sales and marketing, and most B2B companies run both." },
  { question: "Is cold email inbound or outbound?", answer: "Cold email is outbound, because you contact the prospect before they have shown any interest in you. The same goes for LinkedIn connection requests and cold calls. A demo request from your website or a reply to your newsletter is inbound, because the prospect made the first move." },
  { question: "Which is better for B2B, inbound or outbound?", answer: "Neither is better on its own, because they solve different problems. Outbound books meetings within weeks and lets you pick the exact accounts you want, while inbound builds demand that compounds over months. Early-stage B2B companies usually lean on outbound first, then add inbound as content and search rankings grow." },
];

const TERM_SCHEMA = buildDefinedTermSchema({
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  inDefinedTermSet: `${SITE_URL}/resources/glossary`,
});

export default function InboundVsOutboundPage() {
  return (
    <GlossaryTerm
      slug={SLUG}
      tag="Cold Outreach"
      accent="#F59E0B"
      title={TITLE}
      tagline="Waiting for the right people to find you, versus going and finding them yourself."
      definition="Inbound attracts prospects who come to you through content, search, or referrals; outbound proactively reaches prospects who haven't found you yet, through channels like cold email or LinkedIn."
      body="Inbound compounds over time but is slow to start and hard to aim at a specific account. Outbound is immediate and precisely targetable but takes ongoing effort to sustain. Most companies past their earliest stage run both together rather than treating it as a choice between the two."
      sourceLabel="See all services"
      sourceHref="/services"
      furtherLabel="What is B2B outbound sales?"
      furtherHref="/blog/what-is-b2b-outbound-sales"
      articleSchema={TERM_SCHEMA}
      faqs={FAQS}
    >
      <div className="mt-10">
        <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Inbound vs. outbound, side by side</h2>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#E8E2D9" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#F8F6F2" }}>
                <th scope="col" className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>&nbsp;</th>
                <th scope="col" className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Inbound</th>
                <th scope="col" className="text-left p-4 font-black" style={{ color: "#0a0a0a" }}>Outbound</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.factor} style={{ borderTop: i > 0 ? "1px solid #E8E2D9" : undefined }}>
                  <th scope="row" className="text-left p-4 font-bold align-top" style={{ color: "#0a0a0a" }}>{row.factor}</th>
                  <td className="p-4 align-top" style={{ color: "#3D3D3D" }}>{row.inbound}</td>
                  <td className="p-4 align-top" style={{ color: "#3D3D3D" }}>{row.outbound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-black mt-10 mb-3" style={{ color: "#0a0a0a" }}>Which should you use?</h2>
        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
          Use outbound when you need conversations with specific accounts now, and inbound to build demand that keeps paying off. Early-stage B2B companies usually lean on outbound first, because it produces meetings in weeks while inbound takes months to build. As inbound grows, outbound shifts to the named accounts that inbound will never reach on its own.
        </p>
      </div>
    </GlossaryTerm>
  );
}
