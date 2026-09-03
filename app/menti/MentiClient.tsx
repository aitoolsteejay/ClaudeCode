"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const QUESTION = "What's one lesson you want the next generation to carry forward, even in an AI-powered world?";
const MAX_LENGTH = 500;
const STORAGE_KEY = "menti_submitted";

export default function MentiClient() {
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setSubmitted(true);
    } catch {
      // localStorage unavailable (private mode, etc.) — just skip the check
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = answer.trim();
    if (!trimmed) {
      setError("Type an answer first.");
      return;
    }
    setError("");
    setSubmitting(true);
    const { error: insertError } = await supabase.from("menti_responses").insert({ answer: trimmed });
    setSubmitting(false);

    if (insertError) {
      setError("Something went wrong submitting your answer. Please try again.");
      return;
    }

    setSubmitted(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="mb-8">
        <Image src="/logo.png" alt="Myntmore" width={160} height={45} className="h-9 w-auto object-contain" priority />
      </div>

      <div className="w-full max-w-lg rounded-3xl border p-8 sm:p-10" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: "64px", height: "64px", borderRadius: "9999px", backgroundColor: "rgba(245,183,49,0.12)", border: "1.5px solid rgba(245,183,49,0.35)" }}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>Thanks, your answer&apos;s in the room.</h1>
            <p className="text-sm" style={{ color: "#52525B" }}>Sit tight, we&apos;ll share what everyone said in a bit.</p>
          </div>
        ) : (
          <>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: "rgba(245,183,49,0.12)", color: "#D97706", border: "1px solid rgba(245,183,49,0.35)" }}>
              One question for the room
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mb-6 leading-snug" style={{ color: "#0a0a0a" }}>
              {QUESTION}
            </h1>
            <form onSubmit={handleSubmit}>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                maxLength={MAX_LENGTH}
                rows={4}
                placeholder="Type your answer here..."
                className="w-full rounded-2xl border px-4 py-3.5 text-base outline-none resize-none transition-colors"
                style={{ borderColor: error ? "#DC2626" : "#E8E2D9", color: "#0a0a0a", backgroundColor: "#F8F6F2" }}
                disabled={submitting}
                autoFocus
              />
              <div className="flex items-center justify-between mt-2 mb-6">
                <p className="text-xs" style={{ color: error ? "#DC2626" : "#8C8279" }}>{error || "Anonymous, nobody will see your name."}</p>
                <p className="text-xs" style={{ color: "#8C8279" }}>{answer.length}/{MAX_LENGTH}</p>
              </div>
              <button type="submit" disabled={submitting} className="btn-dark w-full px-6 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2 disabled:opacity-60">
                {submitting ? "Submitting..." : "Submit answer"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
