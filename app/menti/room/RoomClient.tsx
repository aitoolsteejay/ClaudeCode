"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface ResponseRow {
  id: string;
  answer: string;
  created_at: string;
}

interface Gist {
  summary: string;
  themes: string[];
  notableQuote: string | null;
  responseCount: number;
}

const QUESTION = "What's one lesson you want the next generation to carry forward, even in an AI-powered world?";

export default function RoomClient() {
  const [responses, setResponses] = useState<ResponseRow[]>([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [gist, setGist] = useState<Gist | null>(null);
  const responsesRef = useRef<ResponseRow[]>([]);
  responsesRef.current = responses;

  useEffect(() => {
    let active = true;

    supabase
      .from("menti_responses")
      .select("id, answer, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!active) return;
        if (error) {
          toast.error("Couldn't load responses. Refresh to try again.");
        } else if (data) {
          setResponses(data);
        }
        setLoadingInitial(false);
      });

    const channel = supabase
      .channel("menti-room")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "menti_responses" },
        (payload) => {
          const row = payload.new as ResponseRow;
          if (responsesRef.current.some((r) => r.id === row.id)) return;
          setResponses((prev) => [row, ...prev]);
        },
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  async function handleGenerateGist() {
    if (responses.length < 3) return;
    setGenerating(true);
    try {
      const res = await fetch("/api/menti/gist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: responses.map((r) => r.answer) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate gist");
      setGist(data);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong, please try again");
    } finally {
      setGenerating(false);
    }
  }

  const newSinceGist = gist ? responses.length - gist.responseCount : 0;

  return (
    <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Image src="/logo.png" alt="Myntmore" width={140} height={39} className="h-8 w-auto object-contain" />
          <div className="text-right">
            <p className="text-3xl font-black leading-none" style={{ color: "#0a0a0a" }}>{loadingInitial ? "–" : responses.length}</p>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8C8279" }}>responses</p>
          </div>
        </div>

        <div className="rounded-3xl border p-6 sm:p-8 mb-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>The question</p>
          <p className="text-lg font-bold leading-snug" style={{ color: "#0a0a0a" }}>{QUESTION}</p>
        </div>

        <button
          onClick={handleGenerateGist}
          disabled={responses.length < 3 || generating}
          className="btn-dark w-full px-6 py-4 text-base font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50 mb-3"
        >
          {generating ? "Reading the room..." : gist ? "Regenerate the gist" : "Generate the gist"}
        </button>
        {responses.length < 3 && (
          <p className="text-xs text-center mb-6" style={{ color: "#8C8279" }}>Need at least 3 responses to generate a gist.</p>
        )}
        {gist && newSinceGist > 0 && (
          <p className="text-xs text-center mb-6" style={{ color: "#8C8279" }}>{newSinceGist} new response{newSinceGist === 1 ? "" : "s"} since this gist was generated.</p>
        )}

        {gist && (
          <div className="rounded-3xl border p-6 sm:p-8 mb-8" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D97706" }}>Gist of the room · {gist.responseCount} responses</p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#0a0a0a" }}>{gist.summary}</p>
            {gist.themes?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {gist.themes.map((theme) => (
                  <span key={theme} className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#ffffff", color: "#0a0a0a", border: "1px solid rgba(245,183,49,0.4)" }}>
                    {theme}
                  </span>
                ))}
              </div>
            )}
            {gist.notableQuote && (
              <blockquote className="text-sm italic border-l-2 pl-4" style={{ borderColor: "#F5B731", color: "#52525B" }}>
                &ldquo;{gist.notableQuote}&rdquo;
              </blockquote>
            )}
          </div>
        )}

        <div className="rounded-3xl border p-6 sm:p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#8C8279" }}>Live answers</p>
          {loadingInitial ? (
            <p className="text-sm" style={{ color: "#8C8279" }}>Loading...</p>
          ) : responses.length === 0 ? (
            <p className="text-sm" style={{ color: "#8C8279" }}>No responses yet. Share the link with the room.</p>
          ) : (
            <div className="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1">
              {responses.map((r) => (
                <div key={r.id} className="rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: "#F8F6F2", color: "#3D3D3D" }}>
                  {r.answer}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
