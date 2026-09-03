"use client";

import { useState } from "react";

export default function RoomLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/menti/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Incorrect password");
        setLoading(false);
        return;
      }
      window.location.reload();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-32 pb-16" style={{ backgroundColor: "#F8F6F2" }}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-3xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
        <h1 className="text-xl font-black mb-1" style={{ color: "#0a0a0a" }}>Room access</h1>
        <p className="text-sm mb-6" style={{ color: "#52525B" }}>Enter the admin password to view live responses.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
          placeholder="Password"
          className="w-full rounded-xl border px-4 py-3 text-base outline-none"
          style={{ borderColor: error ? "#DC2626" : "#E8E2D9", color: "#0a0a0a", backgroundColor: "#F8F6F2" }}
          autoFocus
          disabled={loading}
        />
        <p className="text-xs mt-2 mb-4 min-h-[16px]" style={{ color: "#DC2626" }}>{error}</p>
        <button type="submit" disabled={loading || !password} className="btn-dark w-full px-6 py-3 text-base font-bold inline-flex items-center justify-center gap-2 disabled:opacity-60">
          {loading ? "Checking..." : "Enter"}
        </button>
      </form>
    </div>
  );
}
