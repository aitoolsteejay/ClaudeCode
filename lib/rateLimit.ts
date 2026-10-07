import type { NextRequest } from "next/server";

// Best-effort, in-memory sliding-window limiter. On serverless each warm
// instance keeps its own counters, so this slows down abuse from a single
// client rather than enforcing a hard global cap -- good enough to stop a
// script hammering one route, not a substitute for a shared store (Upstash,
// Vercel KV) if stricter guarantees are ever needed.

const buckets = new Map<string, number[]>();
const MAX_TRACKED_KEYS = 5000;

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Records one hit for `key` and returns how many seconds the caller must
 * wait if it is over `limit` hits in the last `windowMs`, or 0 if allowed.
 */
export function rateLimit(key: string, limit: number, windowMs: number): number {
  const now = Date.now();
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    buckets.set(key, recent);
    return Math.max(1, Math.ceil((recent[0] + windowMs - now) / 1000));
  }

  recent.push(now);
  buckets.set(key, recent);

  // Keep memory bounded: when the map gets large, drop keys whose hits have
  // all aged out of their window.
  if (buckets.size > MAX_TRACKED_KEYS) {
    buckets.forEach((hits, k) => {
      if (hits.every((t) => now - t >= windowMs)) buckets.delete(k);
    });
  }
  return 0;
}
