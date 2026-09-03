import crypto from "crypto";

// Password gate for /menti/room. No user accounts exist in this app, so
// this is deliberately simple and stateless: the "session" cookie is an
// HMAC of a fixed message keyed by the admin password itself, so proving
// you hold the cookie is equivalent to having known the password at some
// point — no session store needed, and forging the cookie without the
// password is exactly as hard as guessing the password.

export const ADMIN_COOKIE_NAME = "menti_admin";

const SESSION_MESSAGE = "menti-admin-session-v1";

// Hardcoded fallback so this works without any Vercel env var setup.
// MENTI_ADMIN_PASSWORD, if set, overrides it.
const DEFAULT_ADMIN_PASSWORD = "Myntmore@123";

function getPassword(): string {
  return process.env.MENTI_ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function getAdminToken(): string {
  return crypto.createHmac("sha256", getPassword()).update(SESSION_MESSAGE).digest("hex");
}

export function checkPassword(candidate: string): boolean {
  const password = getPassword();
  if (!candidate) return false;
  return timingSafeEqualStrings(candidate, password);
}

export function isValidAdminCookie(token: string | undefined | null): boolean {
  if (!token) return false;
  return timingSafeEqualStrings(token, getAdminToken());
}
