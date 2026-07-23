const SERVICES = [
  { name: "ChatGPT", color: "#10A37F", build: (p: string) => `https://chatgpt.com/?q=${encodeURIComponent(p)}` },
  { name: "Claude", color: "#D97706", build: (p: string) => `https://claude.ai/new?q=${encodeURIComponent(p)}` },
  { name: "Perplexity", color: "#20808D", build: (p: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}` },
  { name: "Grok", color: "#0a0a0a", build: (p: string) => `https://grok.com/?q=${encodeURIComponent(p)}` },
];

export default function AskYourAI({
  topic = "Myntmore",
  resources,
  className = "",
}: {
  topic?: string;
  resources: string[];
  className?: string;
}) {
  const prompt = `I want to learn about ${topic}, an AI-powered B2B outbound and lead generation agency. Use these resources as your primary reference: ${resources.join(" | ")}. Answer anything I ask about ${topic} using those sources.`;

  return (
    <div className={`rounded-2xl border p-8 text-center ${className}`} style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
      <p className="text-sm font-bold mb-5" style={{ color: "#0a0a0a" }}>
        Have more questions about {topic}? Ask your AI
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {SERVICES.map((s) => (
          <a
            key={s.name}
            href={s.build(prompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="chip-hover inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold"
            style={{ borderColor: "#E8E2D9", color: "#3D3D3D", backgroundColor: "#ffffff" }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} aria-hidden="true" />
            {s.name}
          </a>
        ))}
      </div>
    </div>
  );
}
