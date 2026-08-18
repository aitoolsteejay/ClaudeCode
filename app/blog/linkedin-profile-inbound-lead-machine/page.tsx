import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import AskYourAI from "../../components/AskYourAI";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/linkedin-profile-inbound-lead-machine",
  "https://www.myntmore.com",
  "https://www.myntmore.com/tools/linkedin-optimizer",
];

export const metadata: Metadata = {
  title: "The Silent Salesperson: Your LinkedIn Lead Machine",
  description: "No one reads a word you post without checking your profile first. Here's how to fix the part of LinkedIn most founders ignore, and the exact lesson from a $1M deal that proved it.",
  alternates: { canonical: "https://www.myntmore.com/blog/linkedin-profile-inbound-lead-machine" },
  keywords: ["linkedin profile optimization", "how to optimize linkedin profile for leads", "linkedin headline examples", "linkedin about section that converts", "turning linkedin profile into inbound leads", "founder linkedin profile tips", "b2b personal branding", "linkedin profile credibility", "linkedin profile audit", "why your linkedin profile matters more than posts", "linkedin silent salesperson", "optimizing linkedin headline and about section", "inbound lead generation linkedin", "linkedin personal branding for founders", "linkedin profile checklist"],
  openGraph: {
    title: "The Silent Salesperson: Turn Your LinkedIn Profile into an Inbound Lead Machine",
    description: "No one reads a word you post without checking your profile first. Here's how to fix it.",
    url: "https://www.myntmore.com/blog/linkedin-profile-inbound-lead-machine",
  },
};

const OPTIMIZE_STEPS = [
  { n: "01", title: "Define your headline with precision", desc: "Your headline is the single most important piece of real estate on your profile because it follows you everywhere. Stop using generic titles like \"Experienced Leader\" or \"Passionate Entrepreneur.\" State exactly who you help and how you help them." },
  { n: "02", title: "Clear out the noise", desc: "Remove the jargon, the overly complex explanations, and any shady funnels that make prospects feel like they're being manipulated. A confused mind always says no. Keep your copy simple, human, and direct." },
  { n: "03", title: "Build credibility through proof", desc: "Showcase your real-world wins, your campaigns, and the actual products or services you build. Let your profile reflect your genuine experience so prospects instantly feel secure reaching out to you." },
];

export default function LinkedInProfileInboundLeadMachine() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blogs" }]} />
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(0,119,181,0.08)", color: "#0077b5", border: "1px solid rgba(0,119,181,0.2)" }}>Personal Branding · 4 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            The Silent Salesperson: How to Turn Your LinkedIn Profile into an Inbound Lead Machine
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            No one reads a single word you post without checking your profile first. Here&apos;s the one step in the inbound process almost everyone ignores.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Many professionals and founders spend 100% of their LinkedIn energy worrying about what to write. They obsess over hooks, debate the best times to post, and struggle to keep up with a relentless content schedule.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              But they&apos;re completely ignoring the most important step in the inbound sales process. Here&apos;s the hard truth about LinkedIn: no one reads a single word you post without first checking your profile.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Think about your own behavior on the platform</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              When you see an interesting post in your feed, what&apos;s the very first thing you do? You click the creator&apos;s name. You scan their headline, their about section, their background. If their profile is confusing, cluttered, or looks unprofessional, you bounce immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The $1 million profile lesson</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              When I secured a $1 million bulk order for my D2C brand, Flintstop, from a quick phone video shot in our warehouse, it wasn&apos;t the video itself that closed the deal. The video was simply the handshake.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              The actual sale happened because when that MNC marketing manager clicked through to my profile, my page did the heavy lifting. It was:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Clear: they didn't have to play detective to figure out what I did",
                "Crisp: no buzzwords, no fluff, and no confusing corporate jargon",
                "Credible: it immediately proved we were a real, capable business that could handle a massive order",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed" style={{ color: "#52525B" }}>
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0077b5" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#FEF9EC", border: "1px solid rgba(245,183,49,0.3)" }}>
              <p className="text-base font-semibold" style={{ color: "#0a0a0a" }}>
                &ldquo;Trust was established before we ever spoke on the phone or exchanged an email. Your profile must act as your silent salesperson, working 24/7 to build credibility while you sleep.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>How to build a profile that converts</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#52525B" }}>
              If your profile is confusing, you&apos;re actively burning the traffic your content generates. Before you post again, fix your landing page. Here are the key areas to optimize immediately:
            </p>
            <div className="space-y-4">
              {OPTIMIZE_STEPS.map((s) => (
                <div key={s.n} className="flex gap-4 rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: "#0077b5" }}>{s.n}</span>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Human-first systems win</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              At Myntmore, we specialise in helping founders, experts, and brands build these exact systems. We don&apos;t rely on high-pressure sales tactics or shady funnel schemes. Instead, we combine human-first content, professional LinkedIn personal branding, and smart automation to turn your profile into an asset that actively pulls opportunities toward you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Start with your foundation</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              If you&apos;re ready to stop sleeping on the massive potential of LinkedIn, start by optimizing your foundation, not your next post.
            </p>
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Audit your profile in minutes, free</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Paste your current headline and about section into our LinkedIn Profile Optimizer and get a rewrite built around this exact framework, the one we use to turn basic profiles into silent, high-converting salespeople.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools/linkedin-optimizer" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                Optimize My Profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/services/personal-branding" className="btn-ghost px-6 py-3 text-sm font-bold">
                Learn about the service
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
