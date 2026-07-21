import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "The eCommerce Conversion Playbook: Turning Browsers into Buyers | Myntmore Blog",
  description: "Traffic without conversion is just expensive noise. A practical playbook for eCommerce brands that want more buyers, not just more visitors. Fix the trust gap, friction, and messaging.",
  alternates: { canonical: "https://myntmore.com/blog/ecommerce-conversion-playbook" },
  openGraph: {
    title: "The eCommerce Conversion Playbook | Myntmore",
    description: "Traffic without conversion is just expensive noise. Here is how to fix it.",
    url: "https://myntmore.com/blog/ecommerce-conversion-playbook",
  },
};

const FIXES = [
  { n: "01", title: "Fix your product page copy", desc: "Stop listing features and start listing benefits. People do not buy a mattress because it has 400 coils. They buy it because they want to stop waking up with back pain. Your copy should speak to the transformation your product provides." },
  { n: "02", title: "Move your social proof", desc: "Most stores hide their reviews at the very bottom of the page. You should have star ratings right under the product title. You should have 'Featured in' logos near the Add to Cart button. Social proof should be visible at every stage of the journey." },
  { n: "03", title: "Remove checkout friction", desc: "If you require people to create an account before they can buy, you are killing your conversion rate. Offer guest checkout. Offer one-click payment options like Apple Pay or UPI. Every field you remove from your checkout form will increase your revenue." },
  { n: "04", title: "Build real abandoned cart sequences", desc: "Most brands send one boring email that says 'You forgot something.' That is not enough. You should have a 3–4 part sequence: a reminder after one hour, a testimonial after 24 hours, a limited time discount or FAQ after 48 hours." },
];

export default function EcommerceConversionPlaybook() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold"
            >Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(34,197,94,0.08)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.2)" }}>Conversion · 5 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The eCommerce Conversion Playbook: Turning Browsers into Buyers
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            Traffic without conversion is just expensive noise. Most eCommerce stores have a &apos;broken bucket&apos; problem, pouring more and more water in, but it runs out the bottom just as fast.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "69%", source: "of carts abandoned before checkout", cite: "Baymard Institute" },
            { stat: "270%", source: "conversion boost from social proof", cite: "Spiegel Research" },
            { stat: "7%", source: "conversion drop per 1s page load delay", cite: "Akamai" },
          ].map((s) => (
            <div key={s.stat} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="text-2xl font-black mb-1" style={{ color: "#F5B731" }}>{s.stat}</div>
              <p className="text-xs leading-snug mb-1" style={{ color: "#52525B" }}>{s.source}</p>
              <p className="text-xs" style={{ color: "#8C8279" }}>Source: {s.cite}</p>
            </div>
          ))}
        </div>
      </div>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why visitors don&apos;t buy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "The Trust Gap", desc: "People are scared of being scammed. If your site looks generic or lacks social proof, they bounce, even if your product is great." },
                { title: "Friction", desc: "If your site is slow, navigation is confusing, or checkout takes too many steps, they leave. Every extra click is a reason to quit." },
                { title: "Messaging", desc: "If the benefit of your product isn't clear within three seconds, you have lost them. Benefits beat features every time." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>The 4 fixes that move the needle</h2>
            <div className="space-y-4">
              {FIXES.map((fix) => (
                <div key={fix.n} className="flex gap-4 rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: "#F5B731" }}>{fix.n}</span>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{fix.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{fix.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>For high-ticket B2B eCommerce: add outbound</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              For high-ticket B2B eCommerce, you can even use outbound. If you see a major account visiting your site repeatedly, you do not wait for them to fill out a form. You use your outbound engine to reach out to the decision makers at that company with a helpful, context-led message.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The bottom line</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Too many founders look for a &apos;hack&apos; or a &apos;trick&apos; to increase conversion. Real conversion is about building a system that respects the user and provides genuine value at every step. Conversion is not about tricking people into buying. It is about making it as easy as possible for the right people to say yes.
            </p>
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Need outbound for your eCommerce or B2B SaaS business?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We build multi-channel outbound systems that drive qualified meetings and predictable pipeline. Book a free audit.
            </p>
            <a href="https://calendly.com/founder-myntmore/web?redirect_url=https://myntmore.com/thankyou" target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
