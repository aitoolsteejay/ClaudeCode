import { NextRequest, NextResponse } from "next/server";

const ZOHO_FORM_URL =
  "https://forms.zohopublic.com/flintstop/form/LeadQualificationForm/formperma/dFWY_Mhlxg22WwGQtrojPT3u20J-gFyGNppgraGdZZM/htmlRecords/submit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const boundary = "----WebKitFormBoundary" + Math.random().toString(36).substring(2);
    const parts: string[] = [];

    const appendField = (name: string, value: string) => {
      parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`);
    };

    appendField("zf_referrer_name", body.referrer || "https://www.myntmore.com/book-a-call");
    appendField("zf_redirect_url", "");
    appendField("zc_gad", body.gclid || "");
    appendField("Dropdown", body.businessType || "");

    // Handle growth priorities checkboxes
    if (Array.isArray(body.growthPriorities)) {
      for (const priority of body.growthPriorities) {
        appendField("Checkbox", priority);
      }
    } else if (body.growthPriorities) {
      appendField("Checkbox", body.growthPriorities);
    }

    if (body.otherPriorityText) {
      appendField("Checkbox_allow_others_text", body.otherPriorityText);
    }

    appendField("Dropdown1", body.monthlyRevenue || "");
    appendField("Dropdown2", body.companySize || "");
    appendField("Name_First", body.firstName || "");
    appendField("Name_Last", body.lastName || "");
    appendField("Email", body.email || "");
    appendField("PhoneNumber_countrycode", body.phone || "");
    appendField("SingleLine", body.companyName || "");

    parts.push(`--${boundary}--\r\n`);
    const payload = parts.join("");

    const zohoResponse = await fetch(ZOHO_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
      body: payload,
    });

    if (!zohoResponse.ok && zohoResponse.status !== 302) {
      console.error("Zoho lead qualification submission returned status:", zohoResponse.status);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in lead qualification submission:", err);
    // Return success to the client so the prospect is never blocked from booking
    return NextResponse.json({ success: true });
  }
}
