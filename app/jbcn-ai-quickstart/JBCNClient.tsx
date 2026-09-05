"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Faq from "../lp/Faq";

/* ─── Types ───────────────────────────────────────────────────────── */
interface Tip {
  label?: string;
  text: string;
}

type ParentEducatorStage = "pre-primary" | "primary" | "middle" | "senior";
type CreatorFormat = "writing" | "video" | "images";
type AudienceKey = "parents" | "educators" | "creators" | "leadership";

/* ─── Content (transcribed as provided, reformatted into label/text
   pairs for the card layout -- wording preserved, not summarised) ─── */

const PARENTS_TIPS: Record<ParentEducatorStage, Tip[]> = {
  "pre-primary": [
    { label: "Google Read Along", text: "AI-powered app that helps your child practice reading aloud, one on one." },
    { label: "Claude/ChatGPT voice mode", text: "Speak a story idea out loud together, get a full bedtime story back instantly." },
    { label: "Canva Magic Media", text: "Turn your child's favourite character or idea into a simple coloring page." },
    { text: "Ask AI big questions kids ask (\"why is the sky blue?\") in toddler language, then read the answer together." },
    { text: "Ask AI for a rainy-day craft or activity idea using things you already have at home." },
    { text: "Use AI to write a short, personalized birthday poem or card message for a sibling or friend." },
    { label: "Golden rule at this age", text: "Always use AI together with your child, never hand over the phone and walk away." },
    { text: "Ask AI to explain a big feeling (\"why do I feel scared of the dark?\") in simple words, then talk about it together." },
    { label: "ElevenLabs", text: "Turn a favourite story into an audio story read in a fun character voice." },
    { text: "Use AI to generate simple, printable flashcards for colors, shapes, or animal names." },
  ],
  primary: [
    { label: "ChatGPT/Claude/Gemini", text: "Get step-by-step homework help, not just the final answer." },
    { label: "Photomath", text: "Scan a math problem for a full step-by-step solve." },
    { label: "NotebookLM", text: "Upload class notes or a textbook chapter, get instant flashcards for revision." },
    { text: "Ask AI to create a fun quiz on whatever your child is currently curious about (space, dinosaurs, etc)." },
    { label: "Google Lens", text: "Point the camera at a plant or insect on a walk and learn about it together." },
    { text: "Use AI to draft a leave letter or note to the teacher (you review and send it yourself)." },
    { text: "Have your child narrate a story idea out loud, turn it into a written story, then have them illustrate it." },
    { text: "Ask AI to explain a tricky topic using an analogy your child relates to (their favourite sport or cartoon)." },
    { label: "Build the \"check it\" habit early", text: "After any AI answer, ask \"how do you know this is true?\"" },
    { text: "Use a language-learning app's AI feature for extra practice outside school hours." },
  ],
  middle: [
    { label: "Use AI as a tutor that quizzes, not tells", text: "Ask it to test you instead of giving the answer." },
    { label: "NotebookLM", text: "Upload notes ahead of an exam, generate flashcards and practice questions." },
    { label: "Teach the prompt habit", text: "\"Explain this like I'm in 7th grade\" gets a much better answer than a vague question." },
    { text: "Use AI to help outline an essay, then have your child write it in their own words." },
    { text: "Talk openly about what's okay to use AI for in schoolwork, and what isn't." },
    { text: "Use AI to research project topics, but make it a rule to verify at least one source independently." },
    { label: "Grammarly", text: "Check tone and grammar, without letting it rewrite the whole piece." },
    { text: "Ask AI to explain a current news topic in a simple, balanced way." },
    { label: "Canva / Adobe Firefly", text: "Generate visuals for a school project." },
    { label: "Set an \"AI or me\" rule", text: "Big feelings and personal problems go to a parent conversation, not an AI chat." },
  ],
  senior: [
    { text: "Ask AI to explore careers based on your child's interests (\"what careers use a love of biology and art?\")." },
    { text: "Use AI to practice mock interviews or brainstorm college essay angles." },
    { label: "NotebookLM / Quizlet AI", text: "Turn the syllabus into flashcards and self-quizzes for board exam prep." },
    { label: "Set the rule", text: "AI helps outline and check work, it doesn't write the assignment." },
    { text: "Ask AI to lay out multiple sides of a debate topic before your child forms their own opinion." },
    { text: "Build the habit of fact-checking anything AI says with at least one outside source." },
    { text: "Use AI to get a first round of feedback on a resume or college application draft." },
    { text: "Talk openly about how AI is changing the field your child is interested in pursuing." },
    { text: "Turn a rough voice note about a personal goal into a structured plan using AI." },
    { label: "Discuss AI's downsides too", text: "Bias and misinformation, as part of building critical thinking." },
  ],
};

const EDUCATORS_TIPS: Record<ParentEducatorStage, Tip[]> = {
  "pre-primary": [
    { label: "MagicSchool AI", text: "Quick activity and worksheet ideas for young learners." },
    { label: "Curipod", text: "Interactive, story-based lesson slides for circle time." },
    { label: "Canva Magic Design", text: "Classroom posters and decor in minutes." },
    { text: "Ask AI for simple story ideas tied to this week's classroom theme." },
    { text: "Use AI to draft short daily observation notes for parents." },
    { text: "Generate simple, printable phonics or number flashcards." },
    { text: "Use text-to-speech tools for multilingual story time." },
    { text: "Ask AI for practical classroom management tips for specific common behaviours." },
    { text: "Use AI for simple, warm daily-update templates to send to parents." },
    { text: "Generate step-by-step craft instructions matched to the week's theme." },
  ],
  primary: [
    { label: "MagicSchool AI", text: "Lesson plans and worksheets in minutes, not hours." },
    { label: "Diffit", text: "Turn one reading passage into three difficulty levels for a mixed-ability class." },
    { label: "NotebookLM", text: "Turn a textbook chapter into ready-made quiz questions." },
    { label: "Curipod", text: "Interactive lesson slides with quizzes built in." },
    { text: "Use AI to generate grading rubrics for projects." },
    { label: "Otter.ai", text: "Transcribe and summarize staff meetings automatically." },
    { text: "Turn quick, rough notes into well-worded report card comments." },
    { text: "Generate differentiated homework sheets (easy/medium/hard) for the same topic." },
    { text: "Ask AI for a creative analogy or story to explain a tricky concept." },
    { label: "Canva / CapCut", text: "Class newsletters and quick video recaps of events." },
  ],
  middle: [
    { label: "MagicSchool AI / Curipod", text: "Build interactive lesson content quickly." },
    { label: "NotebookLM", text: "Generate unit-based study guides straight from your syllabus." },
    { text: "Use AI to design project rubrics with clear, specific criteria." },
    { text: "Ask AI to generate a debate topic with strong arguments on both sides for class discussion." },
    { text: "Create quizzes at varying difficulty levels for differentiated assessment." },
    { text: "Set and discuss a clear class policy on AI use for homework vs. assessments." },
    { label: "Grammarly", text: "Model what good, specific writing feedback looks like." },
    { label: "Otter.ai", text: "Transcribe parent-teacher meeting notes." },
    { text: "Draft a first pass of a tricky parent email, then personalize before sending." },
    { text: "Use AI to brainstorm real-world examples that connect the curriculum to students' lives." },
  ],
  senior: [
    { text: "Generate board-exam-style practice questions instantly for any topic." },
    { label: "NotebookLM", text: "Build a full revision guide directly from the syllabus." },
    { text: "Use AI to design real-world case studies or application-based questions." },
    { text: "Set and clearly communicate an academic integrity policy around AI use." },
    { text: "Draft detailed, specific essay feedback, then review and personalize before sending." },
    { text: "Draft a first version of a recommendation letter, then personalize it fully before sending." },
    { text: "Use AI to explore how your subject connects to real careers, for career-guidance chats." },
    { label: "Otter.ai / Grammarly", text: "Speed up admin: meeting notes, reports, emails." },
    { text: "Design mock interview or viva questions for senior projects." },
    { label: "Teach AI literacy directly", text: "How to question and verify AI output, not just use it." },
  ],
};

const CREATORS_TIPS: Record<CreatorFormat, Tip[]> = {
  writing: [
    { text: "Turn a rough voice note into a polished caption using ChatGPT/Claude." },
    { text: "Generate 3-4 caption variations and pick the one with the best tone." },
    { text: "Fact-check any claims-heavy post using AI plus a web search before posting." },
    { label: "Grammarly", text: "Polish tone and grammar without a full rewrite." },
    { text: "Translate captions into other languages to widen your reach." },
    { text: "Ask AI to turn a long event into a punchy 3-line recap for a story or post." },
    { label: "Notion AI", text: "Plan and organize your content calendar." },
    { text: "Draft consistent, on-brand replies to common DMs and comments." },
    { text: "Brainstorm 10 hook lines for a post, then pick the strongest one." },
    { label: "Ask AI directly", text: "\"Does this sound engaging, or generic?\"" },
  ],
  video: [
    { label: "CapCut", text: "Auto-captions, jump-cut removal, and music suggestions, all from your phone." },
    { label: "Opus Clip", text: "Turn one long video into several short, auto-captioned clips." },
    { label: "Descript", text: "Edit a video by editing its text transcript." },
    { label: "ElevenLabs", text: "AI voiceovers in different tones or languages." },
    { text: "Write a tight script outline with AI before you start filming." },
    { text: "Ask AI for trending formats or audio ideas relevant to your niche." },
    { text: "Auto-generate subtitles for better accessibility and reach." },
    { text: "Ask AI to suggest a strong thumbnail hook based on your video's content." },
    { text: "Repurpose one video into a carousel post script." },
    { text: "Feed AI your rough transcript and ask it to pull out the most quotable moments." },
  ],
  images: [
    { label: "Adobe Firefly / Midjourney / Canva Magic Media", text: "Custom graphics instead of stock photos." },
    { text: "Use AI to clean up backgrounds or fix a photo in seconds." },
    { text: "Build a consistent, branded template for recurring post types." },
    { label: "Canva Magic Design", text: "Quick posters or announcement graphics." },
    { text: "Use AI upscaling tools to sharpen low-res images before posting." },
    { text: "Generate a few style variations of one photo to A/B test which performs better." },
    { text: "Turn raw data or stats into a simple infographic using AI." },
    { text: "Preview how a design looks on different platforms using AI mockups." },
    { text: "Batch-generate a consistent icon set for a content series." },
    { text: "Ask AI for quick composition or color feedback before you post." },
  ],
};

const LEADERSHIP_TIPS: Tip[] = [
  { text: "Publish a clear AI-use policy for students, shared openly with parents." },
  { text: "Train teachers on 3-4 recommended tools, rather than leaving it to \"figure it out yourself.\"" },
  { label: "Use AI for internal admin", text: "Meeting notes, newsletters, and circulars in multiple languages." },
  { text: "Use CapCut-style AI editing for event highlight reels (Annual Day, Sports Day) for social media." },
  { text: "Run parent workshops that demystify AI, instead of just restricting it." },
  { text: "Use AI-powered accessibility tools (text-to-speech, translation) to support differently-abled students." },
  { text: "Design assessments that value reasoning and process, not just a final, AI-checkable answer." },
  { text: "Build AI literacy into the curriculum across grades, not as a one-off session." },
  { text: "Use AI to quickly analyze anonymized parent and staff feedback surveys." },
  { label: "Draw a clear line", text: "AI for admin and efficiency, never for serious pastoral care or wellbeing decisions." },
];

/* ─── Config ──────────────────────────────────────────────────────── */

const AUDIENCES: { key: AudienceKey; label: string; num: string; accent: string }[] = [
  { key: "parents", label: "Parents", num: "01", accent: "#F5B731" },
  { key: "educators", label: "Educators", num: "02", accent: "#3b82f6" },
  { key: "creators", label: "Content Creators", num: "03", accent: "#a855f7" },
  { key: "leadership", label: "Schools & Leadership", num: "04", accent: "#10b981" },
];

const STAGES: { key: ParentEducatorStage; label: string }[] = [
  { key: "pre-primary", label: "Pre-Primary" },
  { key: "primary", label: "Primary" },
  { key: "middle", label: "Middle" },
  { key: "senior", label: "Senior" },
];

const FORMATS: { key: CreatorFormat; label: string }[] = [
  { key: "writing", label: "Writing" },
  { key: "video", label: "Video" },
  { key: "images", label: "Images" },
];

const HIGHLIGHT_TIP: Record<AudienceKey, { role: string; note: string }> = {
  parents: { role: "The one rule that matters most", note: "Always use AI together with your child at the younger ages, never hand over the phone and walk away. As they get older, shift from doing it with them to teaching them to check it themselves." },
  educators: { role: "The one rule that matters most", note: "Let AI speed up your admin, lesson plans, rubrics, differentiated worksheets, so you get more time for the part no tool can do: actually teaching the room." },
  creators: { role: "The one rule that matters most", note: "AI should shorten your time to a first draft, not replace your judgement. Always ask yourself: does this sound engaging, or generic?" },
  leadership: { role: "The one rule that matters most", note: "Draw a clear line early: AI is for admin and efficiency. It is never a substitute for serious pastoral care or wellbeing decisions." },
};

const ABOUT_FAQ = [
  { q: "Who is this guide for?", a: "Anyone in the JBCN community, parents, teachers, students who create content, and school leadership, who wants a practical, no-fluff starting point for using AI well." },
  { q: "Do I need to already know these tools?", a: "No. Every tip is written to be usable the same day, whether you've never opened an AI tool before or already use one daily." },
  { q: "Is this list exhaustive?", a: "No, it's intentionally a quick-start, not a full course. Think of it as 10 solid starting points per audience, not the final word on AI in education." },
  { q: "Who put this together?", a: "This guide was built for JBCN International School's AI seminar, in partnership with Myntmore." },
];

/* ─── Small building blocks ───────────────────────────────────────── */

function SectionEyebrow({ num, label, accent }: { num: string; label: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-sm font-black tabular-nums" style={{ color: accent }}>{num}</span>
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>{label}</span>
    </div>
  );
}

interface TabDef<T extends string> {
  key: T;
  label: string;
}

function TabGroup<T extends string>({
  tabs,
  active,
  onChange,
  ariaLabel,
  size = "md",
}: {
  tabs: TabDef<T>[];
  active: T;
  onChange: (key: T) => void;
  ariaLabel: string;
  size?: "md" | "sm";
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusIndex = useCallback(
    (i: number) => {
      const key = tabs[(i + tabs.length) % tabs.length].key;
      refs.current[key]?.focus();
      onChange(tabs[(i + tabs.length) % tabs.length].key);
    },
    [tabs, onChange],
  );

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight") { e.preventDefault(); focusIndex(i + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); focusIndex(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); focusIndex(0); }
    else if (e.key === "End") { e.preventDefault(); focusIndex(tabs.length - 1); }
  };

  const pad = size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm";

  return (
    <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {tabs.map((tab, i) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            ref={(el) => { refs.current[tab.key] = el; }}
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.key}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.key)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`rounded-full font-bold transition-all ${pad}`}
            style={
              isActive
                ? { backgroundColor: "#0a0a0a", color: "#ffffff" }
                : { backgroundColor: "#ffffff", color: "#52525B", border: "1px solid #E8E2D9" }
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function TipCard({ index, tip, accent }: { index: number; tip: Tip; accent: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md" style={{ borderColor: "#E8E2D9" }}>
      <div className="flex items-start gap-4">
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-black tabular-nums"
          style={{ backgroundColor: `${accent}14`, color: accent, border: `1px solid ${accent}4D` }}
        >
          {index}
        </span>
        <div className="min-w-0 flex-1">
          {tip.label && <p className="mb-1 text-sm font-black leading-snug" style={{ color: "#0a0a0a" }}>{tip.label}</p>}
          <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{tip.text}</p>
        </div>
      </div>
    </div>
  );
}

function TipGrid({ tips, accent }: { tips: Tip[]; accent: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {tips.map((tip, i) => (
        <TipCard key={i} index={i + 1} tip={tip} accent={accent} />
      ))}
    </div>
  );
}

function HighlightCallout({ role, note, accent }: { role: string; note: string; accent: string }) {
  return (
    <div className="mt-8 rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: `${accent}0D`, borderColor: `${accent}4D` }}>
      <div className="flex items-start gap-4">
        <span
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${accent}22`, border: `1px solid ${accent}55` }}
          aria-hidden="true"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        <div>
          <p className="mb-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{role}</p>
          <p className="text-base font-semibold leading-relaxed" style={{ color: "#0a0a0a" }}>{note}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ───────────────────────────────────────────────────── */

export default function JBCNClient() {
  const [audience, setAudience] = useState<AudienceKey>("parents");
  const [stage, setStage] = useState<ParentEducatorStage>("primary");
  const [format, setFormat] = useState<CreatorFormat>("writing");
  const hydrated = useRef(false);

  // Restore state from a shareable URL hash like #parents/primary or
  // #creators/video on first load, so a link to a specific tab actually
  // opens on that tab. Also listens for hashchange so a hash edited or
  // re-navigated to within an already-open tab (not just a fresh load)
  // updates the view too.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const [a, sub] = hash.split("/");
      if (a && AUDIENCES.some((x) => x.key === a)) {
        setAudience(a as AudienceKey);
        if (sub) {
          if (STAGES.some((s) => s.key === sub)) setStage(sub as ParentEducatorStage);
          else if (FORMATS.some((f) => f.key === sub)) setFormat(sub as CreatorFormat);
        }
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Keep the hash in sync (replaceState, not pushState, so tab clicks
  // don't spam the browser's back button) so the current view is always
  // shareable as a link.
  useEffect(() => {
    if (!hydrated.current) { hydrated.current = true; return; }
    let hash = audience as string;
    if (audience === "parents" || audience === "educators") hash += `/${stage}`;
    if (audience === "creators") hash += `/${format}`;
    window.history.replaceState(null, "", `#${hash}`);
  }, [audience, stage, format]);

  const activeAudience = useMemo(() => AUDIENCES.find((a) => a.key === audience)!, [audience]);

  const activeTips: Tip[] = useMemo(() => {
    if (audience === "parents") return PARENTS_TIPS[stage];
    if (audience === "educators") return EDUCATORS_TIPS[stage];
    if (audience === "creators") return CREATORS_TIPS[format];
    return LEADERSHIP_TIPS;
  }, [audience, stage, format]);

  const totalTips = useMemo(() => {
    const count = (r: Record<string, Tip[]>) => Object.values(r).reduce((sum, arr) => sum + arr.length, 0);
    return count(PARENTS_TIPS) + count(EDUCATORS_TIPS) + count(CREATORS_TIPS) + LEADERSHIP_TIPS.length;
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <header className="px-4 pb-12 pt-14 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(245,183,49,0.35)", backgroundColor: "rgba(245,183,49,0.07)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#F5B731" }} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>Built for JBCN International School</span>
          </div>
          <h1 className="mb-4 text-4xl font-black leading-tight sm:text-6xl" style={{ color: "#0a0a0a" }}>
            AI Quick-Start Guide
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#52525B" }}>
            Practical AI tips for parents, educators, and creators, built for JBCN.
          </p>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { v: String(totalTips) + "+", l: "Practical tips" },
              { v: "4", l: "Audience tracks" },
              { v: "16", l: "Stages & formats" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-black" style={{ color: "#0a0a0a" }}>{s.v}</p>
                <p className="mt-1 text-xs font-semibold" style={{ color: "#8C8279" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─── Audience selector ────────────────────────────────── */}
      <section className="border-t px-4 py-10" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#8C8279" }}>Who are you here for?</p>
          <div className="flex justify-center">
            <TabGroup tabs={AUDIENCES.map((a) => ({ key: a.key, label: a.label }))} active={audience} onChange={setAudience} ariaLabel="Choose your audience" />
          </div>
        </div>
      </section>

      {/* ─── Content ──────────────────────────────────────────── */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow num={activeAudience.num} label={activeAudience.label} accent={activeAudience.accent} />
          <h2 className="mb-6 text-2xl font-black sm:text-3xl" style={{ color: "#0a0a0a" }}>
            {audience === "parents" && "AI tips for parents, by school stage"}
            {audience === "educators" && "AI tips for educators, by school stage"}
            {audience === "creators" && "AI tips for content creators, by format"}
            {audience === "leadership" && "AI tips for schools and leadership teams"}
          </h2>

          {(audience === "parents" || audience === "educators") && (
            <div
              id={`panel-${audience}`}
              role="tabpanel"
              aria-labelledby={`tab-${audience}`}
              className="mb-8"
            >
              <TabGroup tabs={STAGES} active={stage} onChange={setStage} ariaLabel="Choose school stage" size="sm" />
            </div>
          )}

          {audience === "creators" && (
            <div id="panel-creators" role="tabpanel" aria-labelledby="tab-creators" className="mb-8">
              <TabGroup tabs={FORMATS} active={format} onChange={setFormat} ariaLabel="Choose content format" size="sm" />
            </div>
          )}

          <TipGrid tips={activeTips} accent={activeAudience.accent} />

          <HighlightCallout {...HIGHLIGHT_TIP[audience]} accent={activeAudience.accent} />
        </div>
      </section>

      {/* ─── About this guide (accordion) ─────────────────────── */}
      <Faq badge="Good to know" title="About this guide" items={ABOUT_FAQ} />

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer className="border-t px-4 py-12" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-base font-black" style={{ color: "#0a0a0a" }}>JBCN International School</p>
            <p className="mt-1 text-xs" style={{ color: "#8C8279" }}>AI Quick-Start Guide &middot; {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#8C8279" }}>
            <span>Powered by</span>
            <a href="https://www.myntmore.com" className="font-black" style={{ color: "#0a0a0a" }}>Myntmore</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
