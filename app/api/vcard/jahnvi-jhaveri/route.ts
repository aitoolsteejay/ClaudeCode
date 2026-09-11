import { NextResponse } from "next/server";

// Serves a downloadable vCard (.vcf) so a phone's "Save Contact" / "Add to
// Contacts" prompt appears automatically, rather than linking to a static
// file (whose content-type the static file server may not set correctly).
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Jhaveri;Jahnvi;;;",
  "FN:Jahnvi Jhaveri",
  "ORG:Myntmore",
  "TITLE:Growth Manager",
  "TEL;TYPE=CELL,VOICE:+919821008589",
  "EMAIL;TYPE=WORK:growth@myntmore.com",
  "URL;TYPE=WORK:https://www.myntmore.com",
  "URL;TYPE=LinkedIn:https://www.linkedin.com/in/jahnvi-jhaveri-profile/",
  "PHOTO;VALUE=URI:https://www.myntmore.com/jahnvi.png",
  "NOTE:Growth Manager at Myntmore.",
  "END:VCARD",
].join("\r\n");

export async function GET() {
  return new NextResponse(VCARD, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Jahnvi-Jhaveri.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
