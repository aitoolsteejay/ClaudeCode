import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import AskYourAI from "../../components/AskYourAI";

const BLOG_AI_RESOURCES = [
  "https://www.myntmore.com/blog/linkedin-outreach-sequences",
  "https://www.myntmore.com",
  "https://www.myntmore.com/case-studies",
];

export const metadata: Metadata = {
  title: "LinkedIn Outreach Sequences That Actually Get Replies",
  description: "Most LinkedIn outreach fails because it is too salesy too fast. Here is the exact multi-touch sequence structure we use to warm up prospects and convert connections into conversations.",
  alternates: { canonical: "https://www.myntmore.com/blog/linkedin-outreach-sequences" },
  keywords: ["linkedin outreach", "linkedin sequence", "b2b linkedin", "linkedin lead generation", "linkedin dms", "connection request templates"],
  openGraph: {
    title: "LinkedIn Outreach Sequences That Actually Get Replies",
    description: "The multi-touch LinkedIn sequence structure that warms up prospects and books meetings.",
    url: "https://www.myntmore.com/blog/linkedin-outreach-sequences",
  },
};

export default function LinkedInOutreachSequences() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="link-subtle text-xs font-semibold">Resources</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Blog</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>LinkedIn Outreach · 6 min read</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            LinkedIn Outreach Sequences That Actually Get Replies
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#52525B" }}>
            LinkedIn is the highest-intent B2B channel available right now. It is also the most abused. Here is how to stand out, not by being louder, but by being smarter.
          </p>
        </div>
      </section>

      <div className="px-4 pb-12" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[
            { stat: "49%", source: "of B2B buyers research vendors on LinkedIn before responding", cite: "LinkedIn Research" },
            { stat: "3–5x", source: "higher reply rate for LinkedIn DMs vs cold email in B2B", cite: "Expandi Data" },
            { stat: "8 touches", source: "average number needed before a prospect engages", cite: "RAIN Group" },
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
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            {[
              {
                heading: "Why most LinkedIn outreach fails immediately",
                body: "The typical LinkedIn DM starts with 'Hi [Name], I came across your profile and was impressed...' followed by a two-paragraph pitch and a calendar link. This pattern is so overused that buyers have developed complete immunity to it. They see the first line and archive the message before they finish reading it. The problem is not LinkedIn. The problem is that people are treating a relationship channel like an email blast.",
              },
              {
                heading: "The warm-first principle",
                body: "Before you send a single DM, warm up the prospect. Like two of their recent posts. Leave a genuine comment on one. Follow their company page. These micro-interactions take 30 seconds per prospect but they change the entire dynamic of the conversation. When your connection request arrives, they recognise your name. You are not a stranger anymore.",
              },
              {
                heading: "The 5-touch sequence structure",
                body: null,
                numbered: [
                  "Day 1: Connection request (no note). Counter-intuitively, blank connection requests have a higher acceptance rate than those with a note. When you add a note, you signal that you are selling. Send the request cold.",
                  "Day 3 (after acceptance): Warm opener. Reference something specific about their recent activity. 'Saw your post about outbound challenges last week, really resonated with what we see at most Series A companies.' No ask. Just acknowledgment.",
                  "Day 6: Soft value drop. Share a resource directly relevant to their role. A data point, a short insight, a framework. Not a pitch deck. One sentence max. 'Thought this might be relevant given what you mentioned about pipeline forecasting.'",
                  "Day 10: Permission ask. 'I work with [type of company] on [specific problem]. Would it be useful if I shared how we approached that?' You are asking for permission to pitch, not pitching.",
                  "Day 16: Direct ask. If they engaged at any point, now you can be direct. 'Would a 20-minute call make sense? Happy to share what's been working for similar teams.' Short, specific, low-friction.",
                ],
              },
              {
                heading: "What to say in the opening DM",
                body: "The opening message is everything. It must pass the 'did they actually read my profile' test. Mention their company, their role, or a specific post. Reference the problem, not your solution. The goal of the first message is not to pitch. It is to get a reply. One reply leads to a conversation. A conversation leads to a meeting.",
              },
              {
                heading: "Triggers that make LinkedIn outreach 10x more relevant",
                body: null,
                list: [
                  "They just got promoted: Congratulate them genuinely, then follow up a week later when they are thinking about what they want to accomplish in the new role.",
                  "They posted about your problem area: Engage in the comments first. Then DM them referencing the post. You have instant common ground.",
                  "Their company just raised funding: They have budget and a mandate to grow. Reach out within 10 days of the announcement.",
                  "They are hiring for a role you can replace or augment: If they are hiring an SDR and you offer outbound-as-a-service, that job posting is your pitch.",
                ],
              },
              {
                heading: "Volume, limits, and staying in LinkedIn's good graces",
                body: "LinkedIn limits connection requests to around 100 per week for standard accounts and 150–200 for Sales Navigator. Stay under the limit and keep your acceptance rate above 30% to avoid restrictions. If your acceptance rate is low, your targeting is off. Fix the ICP, not the volume.",
              },
              {
                heading: "Pairing LinkedIn with cold email",
                body: "The highest-performing outbound sequences run LinkedIn and cold email in parallel. A prospect might ignore your email but accept your LinkedIn connection. Or they respond on LinkedIn and you follow up via email with a longer resource. Multi-channel sequences have 35–40% higher reply rates than single-channel. Use both.",
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>{section.heading}</h2>
                {section.body && <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{section.body}</p>}
                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>{i + 1}</span>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.numbered && (
                  <ol className="space-y-4">
                    {section.numbered.map((item, i) => (
                      <li key={i} className="rounded-xl border p-5" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                        <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>{item}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Want us to build your LinkedIn outreach sequence?</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#52525B" }}>
              We build and run multi-channel LinkedIn + email sequences for B2B companies. Book a free audit and we&apos;ll map out what a sequence looks like for your ICP.
            </p>
            <a href="/founder-meeting" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Book a Free GTM Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="mt-8">
            <AskYourAI resources={BLOG_AI_RESOURCES} />
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}
