import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy & Methodology",
  description: "How Myntmore sources numbers, labels illustrative case studies, handles AI tool data and corrects errors across its guides, benchmarks and tools.",
  alternates: { canonical: "https://www.myntmore.com/editorial-policy" },
  openGraph: {
    title: "Editorial Policy & Methodology | Myntmore",
    description: "How Myntmore sources numbers, labels illustrative case studies, handles AI tool data and corrects errors.",
    url: "https://www.myntmore.com/editorial-policy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Myntmore" }],
  },
  keywords: [
    "myntmore editorial policy",
    "b2b content methodology",
    "how myntmore sources data",
    "myntmore benchmark methodology",
    "myntmore corrections policy",
    "illustrative case study disclosure",
  ],
};

interface Section {
  heading: string;
  body: React.ReactNode[];
}

// The commitments below describe how the content on this site is produced and
// corrected. Keep every statement true: if a practice changes, change this page
// in the same commit.
const SECTIONS: Section[] = [
  {
    heading: "Who publishes this site",
    body: [
      <>
        Myntmore, a B2B outbound agency based in Mumbai, publishes everything on myntmore.com. Guides, blog posts, benchmarks and tools are written for B2B founders and sales teams. Founder{" "}
        <a href="https://linkedin.com/in/tejasjhaveri" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Tejas Jhaveri</a>{" "}
        is accountable for what appears here. More about the company is on the <Link href="/about-us" className="underline underline-offset-2">about page</Link>.
      </>,
    ],
  },
  {
    heading: "We sell what we write about",
    body: [
      "Myntmore is an agency that sells cold email, LinkedIn outreach, account-based marketing and related services. Pages that compare options, such as agency versus in-house or cold email versus LinkedIn, are written by a company with a commercial interest in the answer. We set out the trade-offs, including where an alternative is the better fit, but you should weigh that interest when you read them.",
    ],
  },
  {
    heading: "How we handle numbers",
    body: [
      "Figures about Myntmore's own results come from campaigns Myntmore ran. We publish a real number or say that we do not have one; we do not invent statistics, and a new offering with no track record is described as new.",
      <>
        Benchmarks, such as the <Link href="/blog/b2b-outbound-benchmark-report-2026" className="underline underline-offset-2">2026 B2B Outbound Benchmark Report</Link>, are aggregated and anonymised across the accounts Myntmore has managed. No single client&apos;s data is broken out or identifiable, and ranges are shown instead of a single blended average because a flat number would hide more than it reveals. Figures labelled &quot;typical&quot; for unmanaged outbound are commonly cited industry ranges, not a specific third-party study.
      </>,
    ],
  },
  {
    heading: "Case studies and what is illustrative",
    body: [
      <>
        Client names are withheld because of confidentiality agreements. Case studies marked <strong>Illustrative example</strong> are hypothetical scenarios built from Myntmore&apos;s real outreach methodology: they show what a strong campaign can look like and are not the result of a specific past client. They say so on the page. Browse them all on the <Link href="/case-studies" className="underline underline-offset-2">case studies page</Link>.
      </>,
    ],
  },
  {
    heading: "Free tools and AI-generated output",
    body: [
      "Our free tools use an AI model to generate their results. AI output can be wrong or out of date, so check anything specific before you act on it, particularly names, prices and claims about other companies.",
      <>
        Each tool explains, before you sign up, how your contact details and your input are used. The full terms are in the <Link href="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
      </>,
    ],
  },
  {
    heading: "Dates, updates and corrections",
    body: [
      "Articles and guides show who published them and when they were last updated. That date is the same one published in the page's structured data.",
      <>
        If you find an error, email{" "}
        <a href="mailto:growth@myntmore.com" className="underline underline-offset-2">growth@myntmore.com</a>{" "}
        with the page address and what you believe is wrong. We review reports and correct confirmed errors on the page itself.
      </>,
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Editorial Policy", href: "/editorial-policy" }]} />
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Editorial policy &amp; methodology
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            How Myntmore&apos;s guides, benchmarks, case studies and free tools are sourced, labelled and corrected, so you can judge how far to rely on them.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "#52525B" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </InnerLayout>
  );
}
