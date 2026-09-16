import Link from "next/link";
import FadeIn from "./FadeIn";
import { EVENTS, isUpcoming, type EventItem } from "@/lib/events-data";

function EventCard({ e }: { e: EventItem }) {
  return (
    <Link href={`/events/${e.slug}`} className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
      <div className="h-1" style={{ background: `linear-gradient(90deg,${e.accent},${e.accent}66)` }} />
      <div className="p-6">
        <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: `${e.accent}12`, color: e.accent }}>{e.tag}</span>
        <h3 className="text-base font-black mb-2 leading-snug" style={{ color: "#0a0a0a" }}>{e.title}</h3>
        <p className="text-xs leading-relaxed mb-4" style={{ color: "#52525B" }}>{e.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: "#8C8279" }}>{e.displayDate} &middot; {e.time}</span>
          <span className="text-xs font-bold" style={{ color: e.accent }}>Details &rarr;</span>
        </div>
      </div>
    </Link>
  );
}

export default function UpcomingEvents() {
  const upcoming = EVENTS.filter(isUpcoming).slice(0, 3);
  if (upcoming.length === 0) return null;

  return (
    <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(139,92,246,0.08)", color: "#8b5cf6", border: "1px solid rgba(139,92,246,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#8b5cf6" }} />
                Upcoming Events
              </span>
              <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Come see us live</h2>
              <p className="text-base mt-2 max-w-xl" style={{ color: "#52525B" }}>
                Free sessions on cold email, LinkedIn outreach, and pipeline building, from the team behind 12K+ B2B meetings.
              </p>
            </div>
            <Link href="/events" className="text-sm font-bold whitespace-nowrap" style={{ color: "#8b5cf6" }}>
              View all events &rarr;
            </Link>
          </div>

          {upcoming.length === 1 ? (
            <div className="max-w-md mx-auto">
              <EventCard e={upcoming[0]} />
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${upcoming.length >= 3 ? "lg:grid-cols-3" : ""}`}>
              {upcoming.map((e) => (
                <EventCard key={e.slug} e={e} />
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
