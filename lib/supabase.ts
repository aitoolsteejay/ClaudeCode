import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Falls back to a placeholder project so the client can always be constructed
// (createClient throws synchronously on an empty URL, which would otherwise
// crash every page that imports this module before env vars are configured).
// Lead-capture calls against the placeholder simply fail and are caught by
// the caller, same as any other network error.
export const supabase = createClient(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder-anon-key");
