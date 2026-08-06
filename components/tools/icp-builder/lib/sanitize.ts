/**
 * Recursively walks a parsed AI response (string, array, or object) and strips
 * em-dashes, asterisks, and hash signs from every string it finds.
 * Em-dashes are replaced with a comma (so sentences stay grammatical);
 * asterisks and hash signs are stripped entirely.
 */
export function sanitize<T>(value: T): T {
  if (typeof value === "string") {
    return value
      .replace(/—/g, ",")
      .replace(/[*#]/g, "") as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => sanitize(item)) as unknown as T;
  }
  if (value !== null && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = sanitize(val);
    }
    return result as unknown as T;
  }
  return value;
}
