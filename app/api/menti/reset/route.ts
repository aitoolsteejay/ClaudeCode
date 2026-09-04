import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isValidAdminCookie } from "@/lib/mentiAuth";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    if (!isValidAdminCookie(req.cookies.get(ADMIN_COOKIE_NAME)?.value)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Supabase's client requires an explicit filter on delete (no
    // filter-less "delete everything" call) -- id not-null matches every
    // real row since id is the primary key.
    const { error } = await supabase.from("menti_responses").delete().not("id", "is", null);
    if (error) {
      console.error("Error resetting menti_responses:", error);
      return NextResponse.json({ error: "Failed to reset responses" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in menti/reset route:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
