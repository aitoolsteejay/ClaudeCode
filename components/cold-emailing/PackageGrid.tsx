"use client";

import { useEffect, useId, useRef, useState } from "react";
import { BarChart3, FlaskConical, Info, Layers, Mail, PenLine, Repeat, Send, Server, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import FadeIn from "@/app/components/FadeIn";

const ORANGE = "#EA580C";
const GOLD = "#F5B731";
const INK = "#0A0A0A";

// What is in the done-for-you package, with a plain-English line on what each item
// does. The explanations only restate what the process section on the same page
// already says (domains, DNS, warm-up, sequences, testing, reporting), written for
// someone who has never run cold email.
const ITEMS: { icon: LucideIcon; label: string; info: string }[] = [
  {
    icon: Server,
    label: "10 domains + 40 inboxes",
    info: "The sending addresses your emails come from: 10 domains with 4 inboxes on each. Spreading sending across many inboxes keeps each one's daily volume low, which protects your deliverability.",
  },
  {
    icon: ShieldCheck,
    label: "DNS setup & IP rotation",
    info: "We configure the technical records on every domain (such as SPF, DKIM and DMARC) that prove your emails are legitimate, and rotate sending IPs so no single address carries all the volume or risks being blacklisted.",
  },
  {
    icon: Mail,
    label: "1,200 emails a day",
    info: "The most the system sends in a day across all 40 inboxes, about 30 per inbox. Volume ramps up through inbox warm-up first, so inbox providers learn to trust the new addresses.",
  },
  {
    icon: Users,
    label: "5,000 prospects a month",
    info: "Each month we source around 5,000 new prospects who match your ideal customer profile, segmented into specific lists, so every campaign has fresh people to reach.",
  },
  {
    icon: PenLine,
    label: "Copy & strategy",
    info: "We write the emails and decide the approach: subject lines that earn the open, a value-first soft-sell message and a clear call to action, such as scheduling a call or replying.",
  },
  {
    icon: Repeat,
    label: "3-4 follow-ups & nurturing",
    info: "Each prospect gets a short sequence of 3 to 4 follow-ups rather than a single email. When someone replies, we nurture the conversation, scoring leads and focusing on the most promising, until it becomes a booked call.",
  },
  {
    icon: FlaskConical,
    label: "A/B testing & optimisation",
    info: "We test different subject lines, copy and calls to action against each other and keep what wins on replies, meetings and conversions, so results improve with every round.",
  },
  {
    icon: BarChart3,
    label: "Real-time reporting",
    info: "A live view of how the campaign is performing, including opens, replies, meetings booked and email health, with clear reports on what is working and what to do next.",
  },
  {
    icon: Layers,
    label: "Complete backend setup",
    info: "Everything behind the scenes that makes sending work: domains, inboxes, authentication, warm-up and monitoring, set up and kept healthy for you so you never touch the technical side.",
  },
  {
    icon: Send,
    label: "Sending tool included",
    info: "The software that actually sends and tracks the emails is part of the package, so you do not need to buy or manage a separate cold email tool.",
  },
];

// Where the popover sits so it never runs off the screen: the grid is 2 columns on
// phones, 3 on tablets and 5 on desktop, and the cards in the right-hand columns
// open their popover leftwards.
const popoverSide = (i: number) =>
  [
    i % 2 === 1 ? "max-sm:right-0" : "max-sm:left-0",
    i % 3 === 2 ? "sm:max-lg:right-0" : "sm:max-lg:left-0",
    i % 5 >= 3 ? "lg:right-0" : "lg:left-0",
  ].join(" ");

function PackageCard({ item, index }: { item: (typeof ITEMS)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const lastPointer = useRef("");
  const panelId = useId();
  const Icon = item.icon;

  // Tap or click elsewhere, or Escape, closes it.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // The open card is lifted above its neighbours so its popover is never covered. That
    // class lives on this wrapper, not on FadeIn: FadeIn adds its own "revealed" class
    // to its element directly, and a className change from React would wipe it.
    <div className={`h-full ${open ? "relative z-30" : ""}`}>
    <FadeIn delay={(index % 5) * 60} className="h-full">
      <div
        ref={rootRef}
        className="relative flex h-full min-h-[148px] flex-col justify-between rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#EA580C]"
        style={{ borderColor: open ? ORANGE : "#EDE7DD", backgroundColor: "#FCFBF8" }}
        // Mouse users get it on hover; touch and keyboard users toggle it with the button.
        onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      >
        <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ backgroundColor: "rgba(234,88,12,0.1)", color: ORANGE }}>
          <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <p className="mt-5 text-sm font-black leading-snug" style={{ color: INK }}>{item.label}</p>

        <button
          type="button"
          aria-label={`What does "${item.label}" mean?`}
          aria-expanded={open}
          aria-controls={panelId}
          onPointerDown={(e) => {
            lastPointer.current = e.pointerType;
          }}
          onKeyDown={() => {
            lastPointer.current = "";
          }}
          onClick={() => {
            // A mouse click lands while the hover has already opened it; leave it open.
            if (lastPointer.current === "mouse") return;
            setOpen((o) => !o);
          }}
          className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full before:absolute before:-inset-1.5 before:content-['']  transition-colors hover:bg-[rgba(234,88,12,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
          style={{ color: open ? ORANGE : "#71675E" }}
        >
          <Info className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden="true" />
        </button>

        {/* Always in the page (hidden until opened) so the explanation is real, crawlable text. */}
        <div
          id={panelId}
          role="note"
          hidden={!open}
          className={`absolute top-full z-30 mt-2 w-[min(17rem,calc(100vw-2.5rem))] rounded-2xl border p-4 text-left ${popoverSide(index)}`}
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2D9", boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
        >
          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#A14A08" }}>{item.label}</p>
          <p className="mt-2 text-[13px] font-medium leading-relaxed" style={{ color: "#3D3D3D" }}>{item.info}</p>
        </div>
      </div>
    </FadeIn>
    </div>
  );
}

export default function PackageGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {ITEMS.map((item, i) => (
        <PackageCard key={item.label} item={item} index={i} />
      ))}
    </div>
  );
}
