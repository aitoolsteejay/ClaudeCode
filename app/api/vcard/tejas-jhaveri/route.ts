import { NextResponse } from "next/server";

// Serves a downloadable vCard (.vcf) so a phone's "Save Contact" / "Add to
// Contacts" prompt appears automatically, rather than linking to a static
// file (whose content-type the static file server may not set correctly).
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Jhaveri;Tejas;;;",
  "FN:Tejas Jhaveri",
  "ORG:Myntmore",
  "TITLE:Founder",
  "TEL;TYPE=CELL,VOICE:+919867180379",
  "URL;TYPE=WORK:https://www.myntmore.com",
  "URL;TYPE=LinkedIn:https://www.linkedin.com/in/tejasjhaveri/",
  "PHOTO;VALUE=URI:https://www.myntmore.com/tejas-2.png",
  "NOTE:Founder of Myntmore. Instagram: https://www.instagram.com/tejas_jhaveri",
  "END:VCARD",
].join("\r\n");

export async function GET() {
  return new NextResponse(VCARD, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Tejas-Jhaveri.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
