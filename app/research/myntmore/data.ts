// Sample account research for Myntmore (/research/myntmore), snapshot 21 October 2026.
// Every answer was read from the page it cites. Fit, timing and tier are NOT typed in: they are
// calculated from the answers by lib/research-scoring.ts, so the numbers can be checked against the evidence.
import type { Account, Answer } from "@/lib/research-types";
import { ago, fitScore, latestSignalDate, tierFor, timingScore } from "@/lib/research-scoring";

export const SNAPSHOT = new Date(Date.UTC(2026, 9, 21));
export const SNAPSHOT_LABEL = "21 October 2026";

export const QUESTIONS: string[] = [
  "Sells B2B software through a sales team (demos, enterprise customers)?",
  "Raised funding in the last 12 months?",
  "Said it will invest in go-to-market (sales, marketing, new regions) with that money?",
  "Hiring sales or revenue roles right now?",
  "Appointed a new revenue or sales leader in the last 12 months?",
  "Launched a new product or entered a new market in the last 12 months?",
  "Strong in-house outbound already? (risk: a visible SDR team may mean they build rather than buy)"
];

interface RawAccount { name: string; where: string; recent: string; answers: Answer[]; pitch: string; who: string }

const RAW: RawAccount[] = [
  {
    "name": "North",
    "where": "north.cloud · Brooklyn, US",
    "recent": "Raised a $60M Series B led by PeakSpan Capital, with money for engineering, product and go-to-market teams. Its careers page lists an Account Executive.",
    "answers": [
      {
        "verdict": "yes",
        "text": "North sells through a Book Demo flow, names business customers on its site, and is recruiting an Account Executive.",
        "source": "https://north.cloud",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "North announced a $60M Series B led by PeakSpan Capital.",
        "source": "https://www.prnewswire.com/news-releases/northcloud-raises-60m-series-b-to-unify-spend-intelligence-and-enable-full-automation-across-cloud-ai-and-data-302909322.html",
        "date": "15 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "The release says the funding will go toward scaling engineering, product and go-to-market teams, alongside deeper integrations and AI spend management.",
        "source": "https://www.prnewswire.com/news-releases/northcloud-raises-60m-series-b-to-unify-spend-intelligence-and-enable-full-automation-across-cloud-ai-and-data-302909322.html",
        "date": "15 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "North's careers page lists an open Account Executive role under Go to Market, plus a Principal for Private Equity Partnerships and a Performance Marketing Manager, all Brooklyn-based.",
        "source": "https://north.cloud/careers",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "North listed a v3 platform launch in August 2026 and the Noros AI FinOps agent in April 2026 on its newsroom page.",
        "source": "https://north.cloud/newsroom",
        "date": "20 Aug 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Open on the go-to-market hiring plan: a short email and LinkedIn sequence to finance and engineering leaders at companies that spend heavily on cloud, so new account executives start with booked conversations.",
    "who": "The head of sales or the first go-to-market leader; at this stage often a founder."
  },
  {
    "name": "Ema",
    "where": "ema.ai · Mountain View, US",
    "recent": "Raised a $77M Series B, mostly to expand sales and marketing and enter Asia-Pacific, South America and parts of the Middle East. Created a Head of Revenue, Partnerships and Solutions role in August.",
    "answers": [
      {
        "verdict": "yes",
        "text": "TechCrunch reports Ema has more than 50 active enterprise deals, and its site offers a book-a-demo route.",
        "source": "https://techcrunch.com/2026/09/23/ema-raises-77m-as-ai-starts-eating-into-enterprise-software-and-services/",
        "date": "23 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Ema raised a $77M Series B led by Creaegis, with Accel, Section 32 and Prosus increasing their stakes.",
        "source": "https://techcrunch.com/2026/09/23/ema-raises-77m-as-ai-starts-eating-into-enterprise-software-and-services/",
        "date": "23 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "TechCrunch says the money will mostly go to expanding go-to-market, especially sales and marketing, plus new markets within a year including Asia-Pacific, South America and parts of the Middle East.",
        "source": "https://techcrunch.com/2026/09/23/ema-raises-77m-as-ai-starts-eating-into-enterprise-software-and-services/",
        "date": "23 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Ema's careers page lists an open Sales Development Representative role (US, remote) focused on outbound prospecting of target enterprise accounts. The page shows no printed date.",
        "source": "https://www.ema.ai/careers",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Ema created and filled a Head of Revenue, Partnerships and Solutions role, announced in August 2026.",
        "source": "https://techintelpro.com/news/ema-ai-appoints-jonathan-feldman-to-lead-revenue-and-partnerships",
        "date": "24 Aug 2026"
      },
      {
        "verdict": "yes",
        "text": "Ema launched its HR, IT and Finance Hub on 1 September 2026, offering pre-built AI employees connected to over 250 business applications.",
        "source": "https://techintelpro.com/news/ai/enterprise-ai/ema-launches-hr-it-and-finance-hub-for-ai-employees-platform",
        "date": "4 Sep 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Lead with the new regions: outbound into target accounts in each market before local teams are in place, and a partner-sourced track for the new revenue leader.",
    "who": "The new Head of Revenue, Partnerships and Solutions, or the sales lead for the region being opened."
  },
  {
    "name": "Harmonic Security",
    "where": "harmonic.security · San Francisco, US and London, UK",
    "recent": "Raised a $50M Series B led by Crosspoint Capital Partners to expand engineering and go-to-market in the US and UK. Its job board lists regional sales manager and strategic account executive roles.",
    "answers": [
      {
        "verdict": "yes",
        "text": "The funding release says Harmonic serves over 100 companies, and its site invites enterprises to book a demo.",
        "source": "https://www.harmonic.security/get-demo",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Harmonic Security raised a $50 million Series B led by Crosspoint Capital Partners, bringing total funding to $76 million.",
        "source": "https://www.webull.com/news/15746510880711680",
        "date": "14 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "The release says the funds will expand engineering and go-to-market efforts in the US and UK.",
        "source": "https://www.webull.com/news/15746510880711680",
        "date": "14 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Harmonic's public Ashby job board lists open Go to Market sales roles, including Regional Sales Manager and Strategic Account Executive positions across the US and UK.",
        "source": "https://api.ashbyhq.com/posting-api/job-board/harmonic-security-inc",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Pair the open regional sales roles with account-level research: named security and IT leaders at target enterprises in both markets, reached with LinkedIn and email before the new hires land.",
    "who": "The head of sales or a regional sales lead; the CEO is often involved at this stage."
  },
  {
    "name": "Reco",
    "where": "reco.ai · United States",
    "recent": "Raised $55M, with funds for hiring, sales, partnerships and customer support. Added a new SVP of Americas sales in June and lists enterprise account executive and channel roles.",
    "answers": [
      {
        "verdict": "yes",
        "text": "TechCrunch says Reco has over 100 customers, and its June 2026 release describes new sales leaders and enterprise customers in Texas and the UK and Ireland.",
        "source": "https://techcrunch.com/2026/09/29/reco-raises-55m-as-ai-agent-security-startups-crowd-the-market/",
        "date": "29 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Reco raised $55M in additional funding, with AT&T's venture arm among the investors, TechCrunch reports.",
        "source": "https://techcrunch.com/2026/09/29/reco-raises-55m-as-ai-agent-security-startups-crowd-the-market/",
        "date": "29 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "TechCrunch says the new money will go toward hiring, sales, partnerships and customer support.",
        "source": "https://techcrunch.com/2026/09/29/reco-raises-55m-as-ai-agent-security-startups-crowd-the-market/",
        "date": "29 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Reco's careers page lists an open Enterprise Account Executive role (US, remote) and three Channel Account Manager roles.",
        "source": "https://www.reco.ai/careers",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Reco announced a new Senior Vice President of Americas Sales and Business Development and a UKI Sales Director in June 2026.",
        "source": "https://www.prnewswire.com/il/news-releases/reco-expands-executive-team-and-global-footprint-to-accelerate-leadership-in-enterprise-ai-agent-security-302793841.html",
        "date": "8 Jun 2026"
      },
      {
        "verdict": "yes",
        "text": "Reco launched Reco Agent Security, new platform capabilities for finding and reducing risks from AI agents across connected business apps.",
        "source": "https://www.reco.ai/blog/reco-agent-security-launch",
        "date": "25 Jun 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Use the channel and enterprise hiring as the hook: outbound to security leaders at target accounts, plus a partner-led track alongside the channel account managers.",
    "who": "The SVP of Americas Sales and Business Development, or the head of channel."
  },
  {
    "name": "Omilia",
    "where": "omilia.com · Athens, Greece",
    "recent": "Raised a $67M Series B to open a US office and expand its go-to-market team. TechCrunch reports it is hiring a CRO, a CMO and a VP of revenue operations.",
    "answers": [
      {
        "verdict": "yes",
        "text": "TechCrunch describes Omilia selling customer-support automation to large enterprises and expanding its go-to-market team.",
        "source": "https://techcrunch.com/2026/08/06/omilia-raises-67m-to-scale-its-customer-support-platform/",
        "date": "6 Aug 2026"
      },
      {
        "verdict": "yes",
        "text": "Omilia raised a $67M Series B led by Expedition Growth Capital, according to TechCrunch.",
        "source": "https://techcrunch.com/2026/08/06/omilia-raises-67m-to-scale-its-customer-support-platform/",
        "date": "6 Aug 2026"
      },
      {
        "verdict": "yes",
        "text": "Omilia says the funds will open a US office and expand its go-to-market team.",
        "source": "https://techcrunch.com/2026/08/06/omilia-raises-67m-to-scale-its-customer-support-platform/",
        "date": "6 Aug 2026"
      },
      {
        "verdict": "yes",
        "text": "TechCrunch reports Omilia is hiring a chief revenue officer, a chief marketing officer and a VP of revenue operations.",
        "source": "https://techcrunch.com/2026/08/06/omilia-raises-67m-to-scale-its-customer-support-platform/",
        "date": "6 Aug 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "Omilia announced Lexis, a generative text-to-speech model that runs natively inside its cloud platform for enterprise contact centres.",
        "source": "https://omilia.com/resources/news/omilia-launches-the-only-native-voice-in-enterprise-cx/",
        "date": "8 Jul 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Offer to build the US outbound motion before the new revenue leaders settle in: account research on large US contact-centre operators, then email and LinkedIn outreach to the buyers.",
    "who": "The incoming chief revenue officer once hired; until then the CEO or head of sales."
  },
  {
    "name": "Blee",
    "where": "blee.com · New York, US",
    "recent": "Raised a $20M Series A to enter new industries and regions and reach large organizations. Its Y Combinator jobs page lists a full-cycle Account Executive.",
    "answers": [
      {
        "verdict": "yes",
        "text": "The funding release says Blee is reaching large organizations that still review content manually, which points to enterprise sales.",
        "source": "https://martechseries.com/content/blee-raises-27-million-to-introduce-ai-content-governance-to-the-enterprise/",
        "date": "8 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Blee announced a $20 million Series A co-led by Fin Capital and SMBC Fin Atlas Beyond Fund, bringing total funding to $27 million.",
        "source": "https://martechseries.com/content/blee-raises-27-million-to-introduce-ai-content-governance-to-the-enterprise/",
        "date": "8 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Blee said it will use the funding to widen the product across the content lifecycle, enter new industries and regions, and reach large organizations still reviewing content manually.",
        "source": "https://martechseries.com/content/blee-raises-27-million-to-introduce-ai-content-governance-to-the-enterprise/",
        "date": "8 Sep 2026"
      },
      {
        "verdict": "yes",
        "text": "Blee's Y Combinator jobs page lists an open remote US Account Executive role owning the full sales cycle, plus a Pre-Sales Solutions Engineer role (page undated; fetched 21 Oct 2026).",
        "source": "https://www.ycombinator.com/companies/blee/jobs",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "Blee's news page lists new product releases, including Lightning Analysis for faster full-context reviews and a way to start reviews from Claude, ChatGPT or Gemini.",
        "source": "https://www.blee.com/resources/news",
        "date": "3 Sep 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Start with the new industries: build target lists of compliance and legal leaders in each one and test messages industry by industry, so the Account Executive works warm replies.",
    "who": "The founders or the head of sales; the Account Executive hire may own the pipeline."
  },
  {
    "name": "Firmable",
    "where": "firmable.ai · Melbourne, Australia",
    "recent": "Raised a $14M Series A in March to expand into the US. Launched Tech Intelligence on 19 October and lists an Account Executive and two SDR roles.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Firmable's jobs board lists an Account Executive and Sales Development Representatives, and its funding release cites over 1,000 business customers, indicating a sales team selling B2B software.",
        "source": "https://firmable.au.teamtailor.com/jobs",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Firmable announced a $14 million Series A round led by Airtree.",
        "source": "https://www.prnewswire.com/news-releases/firmable-raises-14m-series-a-to-take-ai-native-sales-platform-global-302700754.html",
        "date": "2 Mar 2026"
      },
      {
        "verdict": "yes",
        "text": "The release says the new capital will fund expansion into the United States, alongside better sales data, buying signals and AI agents.",
        "source": "https://www.prnewswire.com/news-releases/firmable-raises-14m-series-a-to-take-ai-native-sales-platform-global-302700754.html",
        "date": "2 Mar 2026"
      },
      {
        "verdict": "yes",
        "text": "The jobs board lists an Account Executive in San Francisco and Sales Development Representatives in San Francisco and Melbourne.",
        "source": "https://firmable.au.teamtailor.com/jobs",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "Firmable launched Tech Intelligence, which shows sales teams which technologies prospects use and links each finding to verified contacts.",
        "source": "https://www.prnewswire.com/news-releases/firmable-launches-tech-intelligence-showing-b2b-sales-teams-what-their-prospects-actually-run-and-who-to-call-about-it-302913055.html",
        "date": "19 Oct 2026"
      },
      {
        "verdict": "likely",
        "text": "The jobs board shows two open Sales Development Representative roles, one in Melbourne and one in San Francisco, but no explicit outbound team or larger SDR cohort.",
        "source": "https://firmable.au.teamtailor.com/jobs",
        "date": "Checked 21 Oct 2026"
      }
    ],
    "pitch": "Support the US launch with outbound into American sales-ops and revenue leaders, built on the new Tech Intelligence angle. Note it already has SDRs open, so position it as extra capacity.",
    "who": "The US go-to-market lead or head of sales."
  },
  {
    "name": "Passionfroot",
    "where": "passionfroot.me · Berlin, Germany",
    "recent": "Raised a $15M Series A led by Insight Partners to open offices in New York and São Paulo. A New York Account Executive listing appeared in July.",
    "answers": [
      {
        "verdict": "likely",
        "text": "Its homepage offers free sign-up and a Talk to our team option and shows B2B customer logos, so a sales-led motion is likely but not confirmed.",
        "source": "https://www.passionfroot.me/",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Passionfroot raised a $15 million Series A led by Insight Partners, with Creandum, Supernode Global and s16vc also taking part.",
        "source": "https://techcrunch.com/2026/07/22/passionfroot-raises-15m-to-expand-its-b2b-creator-marketplace-to-the-us/",
        "date": "22 Jul 2026"
      },
      {
        "verdict": "yes",
        "text": "The funding supports expansion into the US, including a New York office and the CEO relocating there, and a new São Paulo office, as the team grows from 15.",
        "source": "https://techcrunch.com/2026/07/22/passionfroot-raises-15m-to-expand-its-b2b-creator-marketplace-to-the-us/",
        "date": "22 Jul 2026"
      },
      {
        "verdict": "likely",
        "text": "A job board listing for a New York Account Executive on the go-to-market team appeared on 20 Jul; the company's own careers page listed no roles.",
        "source": "https://www.netinfluencer.com/jobs/account-executive-creator-marketing-at-passionfroot/",
        "date": "20 Jul 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "Passionfroot is opening offices in New York and São Paulo to expand into the US and Brazil, and has released its Zest AI campaign agent.",
        "source": "https://techcrunch.com/2026/07/22/passionfroot-raises-15m-to-expand-its-b2b-creator-marketplace-to-the-us/",
        "date": "22 Jul 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Help open the New York market: B2B marketing leaders at US brands that already run creator or influencer programmes, reached by email and LinkedIn ahead of the new office.",
    "who": "The leader of the New York launch; early on, often a founder."
  },
  {
    "name": "Azoma",
    "where": "azoma.ai · London, UK",
    "recent": "Raised an $11.2M Series A on 21 October. Its careers page lists an Enterprise Account Executive. The release talks about AI talent and product, not sales spend.",
    "answers": [
      {
        "verdict": "likely",
        "text": "Azoma's careers page lists an Enterprise Account Executive and enterprise customer success roles, which suggests an enterprise sales motion.",
        "source": "https://www.azoma.ai/careers",
        "date": "20 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Azoma announced an $11.2 million Series A led by Puma Growth Partners, following a $4 million round in December 2025.",
        "source": "https://www.manilatimes.net/2026/10/21/tmt-newswire/globenewswire/azoma-raises-112-million-series-a-to-continue-defining-the-agentic-commerce-optimization-category/2450918",
        "date": "21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "The careers page lists an open Enterprise Account Executive role based in London.",
        "source": "https://www.azoma.ai/careers",
        "date": "20 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "yes",
        "text": "Azoma launched the Agentic Merchant Protocol, a merchant-side standard for how AI agents understand brand product catalogues, per its press page.",
        "source": "https://www.azoma.ai/press",
        "date": "10-13 Mar 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Early, so keep the pitch light: a pilot outbound test to enterprise brand and ecommerce leaders, to feed the Enterprise Account Executive with qualified conversations.",
    "who": "The founders or the Enterprise Account Executive once hired."
  },
  {
    "name": "Arintra",
    "where": "arintra.com · United States",
    "recent": "Raised a $25M Series B led by Define Ventures in August to reach more large health systems. Its careers page lists an Enterprise Account Executive.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Arintra sells to enterprise health systems and offers a Book Demo option on its website.",
        "source": "https://www.arintra.com",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Arintra announced a $25M Series B led by Define Ventures, bringing its total funding to $51M.",
        "source": "http://www.prnewswire.com/news-releases/arintra-raises-25m-to-pioneer-revenue-assurance-for-americas-health-systems-302860106.html",
        "date": "26 Aug 2026"
      },
      {
        "verdict": "likely",
        "text": "The release says new funding will help it reach more enterprise health systems and broaden clinical coverage, but it does not explicitly mention sales or marketing spend.",
        "source": "http://www.prnewswire.com/news-releases/arintra-raises-25m-to-pioneer-revenue-assurance-for-americas-health-systems-302860106.html",
        "date": "26 Aug 2026"
      },
      {
        "verdict": "yes",
        "text": "Arintra's careers page lists an open Enterprise Account Executive role in sales, remote in the USA, plus a Business Development Manager role.",
        "source": "https://www.arintra.com/careers",
        "date": "Checked 21 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      },
      {
        "verdict": "no",
        "text": "No evidence found."
      }
    ],
    "pitch": "Target health-system revenue-cycle and finance leaders with a compact outbound programme tied to the enterprise sales hire. The release does not mention sales spend, so lead with the account research.",
    "who": "The head of sales or the Enterprise Account Executive."
  }
];

export const ACCOUNTS: Account[] = RAW.map((r) => {
  const fit = fitScore(r.answers);
  const timing = timingScore(r.answers, SNAPSHOT);
  return { ...r, fit, timing, tier: tierFor(fit, timing), when: ago(latestSignalDate(r.answers), SNAPSHOT) };
});
