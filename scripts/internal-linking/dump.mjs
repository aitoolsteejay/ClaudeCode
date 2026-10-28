import fs from "node:fs";
const SITE="https://www.myntmore.com";
const dec=(s)=>s.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"');
const strip=(h)=>dec(h.replace(/<(script|style|noscript|svg|template)\b[\s\S]*?<\/\1>/gi," ").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();
const urls=[...(await (await fetch(SITE+"/sitemap.xml")).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname.replace(/\/$/,"")||"/");
const dests=["/services/linkedin-outreach","/services/cold-email","/services/personal-branding","/services/ai-lead-generation","/case-studies"];
const src=urls.filter(u=>(u.startsWith("/blog/")||u.startsWith("/resources/guides/"))&&!dests.includes(u)).slice(0,20);
const out=[];
for(const u of src){
  const html=await (await fetch(SITE+u)).text();
  const main=(html.match(/<main\b[\s\S]*<\/main>/i)||[html])[0].replace(/<(nav|footer|header|aside)\b[\s\S]*?<\/\1>/gi," ");
  const links=[...main.matchAll(/href="([^"#?]+)/g)].map(m=>m[1].replace(/^https:\/\/www\.myntmore\.com/,"").replace(/\/$/,""));
  const already=dests.filter(d=>links.includes(d));
  const title=dec((html.match(/<title>([^<]*)/)||[,""])[1]).replace(/\s*\|\s*Myntmore/,"");
  const heads=[...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m=>strip(m[1])).filter(Boolean);
  const text=strip(main);
  out.push({u,title,already,heads,words:text.split(" ").length,intro:text.slice(0,700),end:text.slice(-500)});
}
fs.writeFileSync("pages.json",JSON.stringify(out,null,1));
for(const p of out) console.log(`\n### ${p.u} | ${p.title} | ${p.words}w | already links: ${p.already.join(", ")||"none"}\nH2: ${p.heads.slice(0,9).join(" / ")}\nINTRO: ${p.intro.slice(0,420)}\nEND: ...${p.end.slice(-260)}`);
