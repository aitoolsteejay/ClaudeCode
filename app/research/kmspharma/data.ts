// Research for KMS Pharma (KMS Health Center, Chennai), snapshot 20 October 2026.
// Client deliverable: the page that renders this is noindex and not in the sitemap.
import type { Account, MarketWindow } from "@/lib/research-types";

export const QUESTIONS: string[] = [
  "Commercialises products developed by outside partners (licensing or acquisition)?",
  "Sells in markets KMS files for (US, EU/UK, rest of world)?",
  "Signed a licensing, acquisition or co-development deal in the last 12 months?",
  "Has publicly said it will grow through in-licensing or partnerships?",
  "Launched products in KMS’s dosage niches (oral liquids, injectables, topicals) in the last 12 months?",
  "New owner, CEO or business development leader in the last 18 months?",
  "Has a clear match in KMS’s current product list?",
  "Strong in-house development that could compete with KMS? (risk)"
];

export const ACCOUNTS: Account[] = [
  {
    "name": "Orifarm",
    "where": "Denmark · Nordics and wider Europe",
    "tier": "T1",
    "fit": 84,
    "timing": 9,
    "when": "3 weeks ago",
    "recent": "Published a 2031 strategy built on a major expansion in generics, naming in-licensing as one of the growth routes; already appointed a Chief Business Development & Portfolio Strategy Officer for niche generics.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Its new strategy names acquisitions, in-licensing and product development as the ways it will grow generics.",
        "source": "https://www.orifarm.com/news-and-media/orifarm-unveils-2031-strategy-to-accelerate-growth-across-europe-with-significant-expansion-in-generics/",
        "date": "1 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "Leading generics supplier in the Nordics, Europe’s largest parallel importer, with Italy market entry planned for 2026.",
        "source": "https://www.orifarm.com/news-and-media/",
        "date": "2026"
      },
      {
        "verdict": "likely",
        "text": "No new in-licensing deal found in the last 12 months. It divested its VMS portfolio to STADA in June 2026, which sharpens its focus on prescription products.",
        "source": "https://www.orifarm.com/news-and-media/orifarm-unveils-2031-strategy-to-accelerate-growth-across-europe-with-significant-expansion-in-generics/",
        "date": "Jun 2026"
      },
      {
        "verdict": "yes",
        "text": "The 2031 strategy targets a significant expansion in generics through in-licensing among other routes.",
        "source": "https://www.orifarm.com/news-and-media/orifarm-unveils-2031-strategy-to-accelerate-growth-across-europe-with-significant-expansion-in-generics/",
        "date": "1 Oct 2026"
      },
      {
        "verdict": "no",
        "text": "No launches found in oral liquids, injectables or topicals in the last 12 months."
      },
      {
        "verdict": "yes",
        "text": "New CEO, CFO, CIO and a Chief Business Development & Portfolio Strategy Officer for niche generics and prescription medicine.",
        "source": "https://www.orifarm.com/news-and-media/",
        "date": "2025"
      },
      {
        "verdict": "yes",
        "text": "Pivmecillinam tablets, rifaximin, apixaban and brexpiprazole fit a Nordic niche-generics portfolio. KMS’s pivmecillinam exclusivity is signed for the UK only.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "likely",
        "text": "Lists its own product development as a growth route, but this sits alongside in-licensing rather than replacing it.",
        "source": "https://www.orifarm.com/news-and-media/orifarm-unveils-2031-strategy-to-accelerate-growth-across-europe-with-significant-expansion-in-generics/",
        "date": "1 Oct 2026"
      }
    ],
    "pitch": "Lead with niche EU dossiers for the Nordics: pivmecillinam 200/400 mg tablets, rifaximin, then apixaban and brexpiprazole. Confirm first whether Orifarm is already KMS’s ivermectin cream partner in the Nordics.",
    "who": "Chief Business Development & Portfolio Strategy Officer, or the niche generics portfolio lead."
  },
  {
    "name": "Eton Pharmaceuticals",
    "where": "US · rare disease specialty pharma",
    "tier": "T1",
    "fit": 86,
    "timing": 10,
    "when": "6 days ago",
    "recent": "Licensed US rights to a diazepam buccal film from Aquestive ($10M upfront, 20-year supply deal); its second licensing deal of 2026, and its CEO says the 2026 deal pipeline is active.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Its model is to license products whose partners handle development, manufacturing and regulatory work while Eton commercialises.",
        "source": "https://www.sec.gov/Archives/edgar/data/1710340/000149315221006122/form10-k.htm",
        "date": "10-K"
      },
      {
        "verdict": "yes",
        "text": "US-focused rare disease commercial company; raised 2026 revenue guidance to above $120M.",
        "source": "https://finviz.com/news/354621/eton-pharmaceuticals-reports-first-quarter-2026-financial-results",
        "date": "14 May 2026"
      },
      {
        "verdict": "yes",
        "text": "Licensed a diazepam buccal film from Aquestive in October and an ultra-rare generic candidate in February 2026.",
        "source": "https://www.sec.gov/Archives/edgar/data/0001710340/000143774926032600/eton20261013_8k.htm",
        "date": "14 Oct 2026"
      },
      {
        "verdict": "yes",
        "text": "CEO says it continues to actively pursue ultra-rare disease product opportunities and is excited about its 2026 deal pipeline.",
        "source": "https://stocks.observer-reporter.com/observerreporter/article/gnwcq-2026-2-2-eton-pharmaceuticals-announces-licensing-of-rare-disease-product-candidate",
        "date": "2 Feb 2026"
      },
      {
        "verdict": "yes",
        "text": "Launched DESMODA, the first FDA-approved oral desmopressin solution, in March 2026.",
        "source": "https://finviz.com/news/354621/eton-pharmaceuticals-reports-first-quarter-2026-financial-results",
        "date": "Mar 2026"
      },
      {
        "verdict": "no",
        "text": "No leadership change found."
      },
      {
        "verdict": "yes",
        "text": "Deferasirox oral suspension and eltrombopag ready-to-use suspension are paediatric and haematology reformulations that suit Eton’s rare disease channel.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "no",
        "text": "Historically relies on partners for development rather than building in-house.",
        "source": "https://www.sec.gov/Archives/edgar/data/1710340/000149315221006122/form10-k.htm",
        "date": "10-K"
      }
    ],
    "pitch": "Lead with eltrombopag ready-to-use suspension (12-month stability done) and deferasirox oral suspension, offered as license plus supply. This matches how Eton already works with developers.",
    "who": "VP or head of business development; the CEO is personally visible on deals."
  },
  {
    "name": "Azurity Pharmaceuticals",
    "where": "US, Ireland · special-population formulations",
    "tier": "T1",
    "fit": 80,
    "timing": 8,
    "when": "3 months ago",
    "recent": "Signed an exclusive US and Canada license for PolyPid’s D-PLEX100; launched ARYNTA oral solution in April 2026. Its whole business is turning approved drugs into liquids for children and older patients.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Took exclusive US and Canada commercial rights to PolyPid’s D-PLEX100.",
        "source": "https://www.sec.gov/Archives/edgar/data/0001611842/000121390026088439/ea030023101ex99-1.htm",
        "date": "17 Jul 2026"
      },
      {
        "verdict": "yes",
        "text": "US base; the Covis acquisition extended its reach to more than 50 countries.",
        "source": "https://www.pharmaceutical-technology.com/news/azurity-covis-pharma/",
        "date": "Mar 2025"
      },
      {
        "verdict": "yes",
        "text": "License and supply agreement with PolyPid in July 2026.",
        "source": "https://www.sec.gov/Archives/edgar/data/0001611842/000121390026088439/ea030023101ex99-1.htm",
        "date": "17 Jul 2026"
      },
      {
        "verdict": "likely",
        "text": "No public statement found, but repeated acquisitions (Covis, Sebela assets) and licensing show an active deal team.",
        "source": "https://www.pharmaceutical-technology.com/news/azurity-covis-pharma/",
        "date": "2025"
      },
      {
        "verdict": "yes",
        "text": "Launched ARYNTA (lisdexamfetamine) oral solution and JAVADIN (clonidine) oral solution.",
        "source": "https://azurity.com/news/",
        "date": "Apr 2026"
      },
      {
        "verdict": "likely",
        "text": "Leadership sources disagree on the current CEO, which suggests a recent change. Verify before outreach.",
        "source": "https://altss.com/profile/azurity-pharmaceuticals",
        "date": "2025–26"
      },
      {
        "verdict": "yes",
        "text": "Rosuvastatin oral suspension, trazodone oral solution and doxepin oral liquid fit its swallowing-difficulty portfolio.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "yes",
        "text": "Owns in-house development through the 2023 Slayback Pharma acquisition (Hyderabad and New Jersey).",
        "source": "https://altss.com/profile/azurity-pharmaceuticals",
        "date": "2023"
      }
    ],
    "pitch": "Lead with reformulations Azurity does not already sell: rosuvastatin oral suspension (6-month stability done) and trazodone oral solution. Avoid amlodipine, where Azurity already has a liquid.",
    "who": "Business development and licensing team; portfolio strategy lead."
  },
  {
    "name": "A.forall (Milla Pharmaceuticals in the US)",
    "where": "Belgium, Ireland, US · generics only",
    "tier": "T1",
    "fit": 76,
    "timing": 7,
    "when": "2 weeks ago",
    "recent": "Exhibited at CPHI Milan (6–8 Oct 2026) to meet licensing partners after becoming a generics-only company under a new CEO. Its US arm focuses on niche hospital injectables and solutions.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Its stated business is the development, licensing and commercialisation of generics.",
        "source": "https://www.businesswire.com/news/home/20250909713560/en/A.forall-expands-US-generics-portfolio",
        "date": "Sep 2025"
      },
      {
        "verdict": "yes",
        "text": "Over 35 molecules on European and US markets; US sales run through Milla Pharmaceuticals.",
        "source": "https://www.businesswire.com/news/home/20250909713560/en/A.forall-expands-US-generics-portfolio",
        "date": "Sep 2025"
      },
      {
        "verdict": "likely",
        "text": "Bought four FDA-approved injectables and two pipeline assets from Provepharm, just over 12 months ago.",
        "source": "https://www.businesswire.com/news/home/20250909713560/en/A.forall-expands-US-generics-portfolio",
        "date": "Sep 2025"
      },
      {
        "verdict": "yes",
        "text": "Booked partner meetings at CPHI Milan 2026 and promotes licensing collaborations.",
        "source": "https://pt.linkedin.com/in/brunofebra",
        "date": "Oct 2026"
      },
      {
        "verdict": "likely",
        "text": "Milla targets niche injectables and solutions for hospitals; no specific launch found in the last 12 months.",
        "source": "https://www.businesswire.com/news/home/20230927472871/en",
        "date": "2023"
      },
      {
        "verdict": "yes",
        "text": "Sold its retail and hospital division and appointed Steen Vangsgaard as CEO.",
        "source": "https://manda.be/articles/a-forall-sells-retail-hospital-division/",
        "date": "2025"
      },
      {
        "verdict": "yes",
        "text": "Tacrolimus and thiotepa ready-to-use injections and alprostadil injection fit Milla’s US hospital focus.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "likely",
        "text": "Develops its own added-value products and also out-licenses dossiers, so it is partly a competitor.",
        "source": "https://pt.linkedin.com/in/brunofebra",
        "date": "2026"
      }
    ],
    "pitch": "Lead with ready-to-use injectables for the US hospital channel: tacrolimus RTU and thiotepa (both ready for technology transfer), then alprostadil injection.",
    "who": "Head of licensing or portfolio; US president of operations for Milla."
  },
  {
    "name": "Hikma",
    "where": "UK, US, MENA · injectables and generics",
    "tier": "T2",
    "fit": 64,
    "timing": 6,
    "when": "6 months ago",
    "recent": "Signed a licensing and co-development deal for its generic Ellipta programme; added sugammadex prefilled syringes to its injectables in July 2026.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Regularly licenses and co-develops products with outside partners.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "Apr 2026"
      },
      {
        "verdict": "yes",
        "text": "Large US injectables business plus Europe and MENA.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      },
      {
        "verdict": "yes",
        "text": "Licensing and co-development deal for device technology supporting its generic Ellipta programme.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "Apr 2026"
      },
      {
        "verdict": "likely",
        "text": "No explicit statement found, but deal activity is steady.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      },
      {
        "verdict": "yes",
        "text": "Launched sugammadex injection in prefilled syringes.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "Jul 2026"
      },
      {
        "verdict": "no",
        "text": "No leadership change found."
      },
      {
        "verdict": "yes",
        "text": "Ferric carboxymaltose injection, alprostadil injection and ready-to-use thiotepa fit its injectables portfolio.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "yes",
        "text": "Very large in-house development and manufacturing; usually buys only differentiated assets.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      }
    ],
    "pitch": "Lead with differentiated injectables rather than plain generics: ready-to-use thiotepa and tacrolimus, where the design-around formulation is the selling point.",
    "who": "Injectables business development or global portfolio team."
  },
  {
    "name": "STADA",
    "where": "Germany · pan-European generics and consumer health",
    "tier": "T2",
    "fit": 62,
    "timing": 6,
    "when": "4 months ago",
    "recent": "Bought Orifarm’s VMS portfolio (June 2026) after partnering with CuraTeQ on two biosimilars (March 2026). Actively adding products from partners.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Commercialises partner products in Europe, for example CuraTeQ’s neutropenia biosimilars.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "Mar 2026"
      },
      {
        "verdict": "yes",
        "text": "Pan-European commercial footprint.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      },
      {
        "verdict": "yes",
        "text": "CuraTeQ partnership in March and the Orifarm VMS acquisition in June 2026.",
        "source": "https://www.orifarm.com/news-and-media/orifarm-unveils-2031-strategy-to-accelerate-growth-across-europe-with-significant-expansion-in-generics/",
        "date": "Jun 2026"
      },
      {
        "verdict": "likely",
        "text": "Deal activity is clear, but no statement specific to generic dossiers was found.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      },
      {
        "verdict": "no",
        "text": "No launches found in KMS’s dosage niches."
      },
      {
        "verdict": "no",
        "text": "No leadership change found."
      },
      {
        "verdict": "yes",
        "text": "EU generic dossiers such as apixaban, rifaximin and brexpiprazole (dossier targets mid-2027).",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "likely",
        "text": "Has internal development but buys many dossiers from developers.",
        "source": "https://pharmashots.com/35214/top-20-generic-companies-of-2026",
        "date": "2026"
      }
    ],
    "pitch": "Offer a bundle of 2027 EU dossiers (apixaban, rifaximin, brexpiprazole, apremilast oral suspension) with timelines, rather than single products.",
    "who": "Portfolio management or in-licensing (generics), Bad Vilbel headquarters."
  },
  {
    "name": "Zentiva",
    "where": "Czech Republic · European generics",
    "tier": "T2",
    "fit": 60,
    "timing": 5,
    "when": "2026",
    "recent": "Moving to a new owner (GTCR, $4.8B deal expected to close in early 2026). The buyer highlighted organic and inorganic growth and a strong pipeline.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Licenses partner products, for example Lupin’s certolizumab pegol biosimilar.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "Jul 2025"
      },
      {
        "verdict": "yes",
        "text": "Operates across Europe.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "2025"
      },
      {
        "verdict": "likely",
        "text": "The Lupin license is more than 12 months old; no newer deal found.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "Jul 2025"
      },
      {
        "verdict": "likely",
        "text": "New owner points to both organic and inorganic expansion.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "2025"
      },
      {
        "verdict": "no",
        "text": "No launches found in KMS’s dosage niches."
      },
      {
        "verdict": "yes",
        "text": "Change of ownership from Advent to GTCR, expected to complete in early 2026.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "2026"
      },
      {
        "verdict": "yes",
        "text": "EU generic dossiers in the KMS 2027 pipeline.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "likely",
        "text": "Has a strong manufacturing platform and internal pipeline.",
        "source": "https://www.europeanpharmaceuticalreview.com/news/265437/european-generics-zentiva-private-equity-gtcr-advent/",
        "date": "2025"
      }
    ],
    "pitch": "New owners usually review the pipeline in the first year. Offer a portfolio review call around KMS’s 2027 EU dossiers.",
    "who": "Head of portfolio or business development, generics."
  },
  {
    "name": "CMP Pharma",
    "where": "US (North Carolina) · niche oral liquids",
    "tier": "T2",
    "fit": 62,
    "timing": 4,
    "when": "6 months ago",
    "recent": "Launched an alcohol-free reformulation of Norliqva amlodipine oral solution. Builds a portfolio of ready-to-use liquids for patients who cannot swallow tablets.",
    "answers": [
      {
        "verdict": "likely",
        "text": "Mostly develops its own liquids; no in-licensing found.",
        "source": "https://directory.ncbiotech.org/company/cmp-pharma-inc",
        "date": "Profile"
      },
      {
        "verdict": "yes",
        "text": "US market with its own FDA-inspected plant.",
        "source": "https://directory.ncbiotech.org/company/cmp-pharma-inc",
        "date": "Profile"
      },
      {
        "verdict": "no",
        "text": "No deal found in the last 12 months."
      },
      {
        "verdict": "no",
        "text": "No statement found."
      },
      {
        "verdict": "yes",
        "text": "Launched a reformulated Norliqva (amlodipine) oral solution.",
        "source": "https://www.owler.com/company/cmppharma",
        "date": "20 Apr 2026"
      },
      {
        "verdict": "no",
        "text": "No leadership change found."
      },
      {
        "verdict": "yes",
        "text": "Rosuvastatin oral suspension, solifenacin suspension and trazodone solution suit its liquids range. Amlodipine overlaps with Norliqva.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "yes",
        "text": "In-house formulation and manufacturing of oral liquids.",
        "source": "https://directory.ncbiotech.org/company/cmp-pharma-inc",
        "date": "Profile"
      }
    ],
    "pitch": "Pitch technology transfer into CMP’s own plant rather than a finished dossier: KMS develops, CMP manufactures and files.",
    "who": "CEO or head of R&D; small company with direct access to leadership."
  },
  {
    "name": "ANI Pharmaceuticals (Novitium)",
    "where": "US · generics and oral solutions",
    "tier": "T2",
    "fit": 58,
    "timing": 4,
    "when": "4 months ago",
    "recent": "Its Novitium unit won first-generic approvals for tramadol oral solution (June 2026) and tapentadol oral solution (January 2026). Oral solutions are an active line.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Long history of acquiring ANDAs and products from other companies.",
        "source": "https://investor.anipharmaceuticals.com/news-releases/news-release-details/ani-pharmaceuticals-acquires-22-generic-drug-products-teva",
        "date": "History"
      },
      {
        "verdict": "yes",
        "text": "US generics market.",
        "source": "https://www.drugs.com/generic-approvals.html",
        "date": "2026"
      },
      {
        "verdict": "no",
        "text": "No acquisition or license found in the last 12 months."
      },
      {
        "verdict": "no",
        "text": "No statement found."
      },
      {
        "verdict": "yes",
        "text": "First-generic approvals for tapentadol and tramadol oral solutions.",
        "source": "https://www.drugs.com/generic-approvals.html",
        "date": "Jan & Jun 2026"
      },
      {
        "verdict": "no",
        "text": "No leadership change found."
      },
      {
        "verdict": "yes",
        "text": "Oxybutynin oral solution (ready for technology transfer, partner sought) and tofacitinib oral solution.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "yes",
        "text": "Strong internal development and US manufacturing.",
        "source": "https://investor.anipharmaceuticals.com/news-releases/news-release-details/ani-pharmaceuticals-acquires-22-generic-drug-products-teva",
        "date": "History"
      }
    ],
    "pitch": "Lead with oxybutynin oral solution, which is ready for technology transfer and listed by KMS as seeking a partner.",
    "who": "Business development, generics portfolio."
  },
  {
    "name": "Adalvo",
    "where": "Malta · B2B generics licensing",
    "tier": "T3",
    "fit": 55,
    "timing": 3,
    "when": "15 months ago",
    "recent": "EQT took a majority stake. Adalvo licenses generic dossiers to marketing companies worldwide, so it could act as a channel for KMS rather than an end buyer.",
    "answers": [
      {
        "verdict": "yes",
        "text": "Its business is licensing generic dossiers to other companies.",
        "source": "https://en.wikipedia.org/wiki/Alvogen",
        "date": "2025"
      },
      {
        "verdict": "yes",
        "text": "Licenses into many markets worldwide.",
        "source": "https://en.wikipedia.org/wiki/Alvogen",
        "date": "2025"
      },
      {
        "verdict": "no",
        "text": "No deal with an outside developer found in the last 12 months."
      },
      {
        "verdict": "likely",
        "text": "New private equity owner usually means growth targets.",
        "source": "https://en.wikipedia.org/wiki/Alvogen",
        "date": "Jul 2025"
      },
      {
        "verdict": "no",
        "text": "No launches found."
      },
      {
        "verdict": "yes",
        "text": "EQT acquired a majority stake.",
        "source": "https://en.wikipedia.org/wiki/Alvogen",
        "date": "Jul 2025"
      },
      {
        "verdict": "likely",
        "text": "Could take dossiers in markets where KMS has no partner, but overlaps with KMS’s own licensing.",
        "source": "https://www.kmshc.com/products",
        "date": "KMS list"
      },
      {
        "verdict": "likely",
        "text": "Co-develops and licenses its own dossiers, so it is partly a competitor.",
        "source": "https://en.wikipedia.org/wiki/Alvogen",
        "date": "2025"
      }
    ],
    "pitch": "Explore a co-licensing arrangement for rest-of-world markets, starting with the avibactam + ceftazidime dossier that is already ready.",
    "who": "Head of partnerships or co-development."
  }
];

export const WINDOWS: MarketWindow[] = [
  {
    "title": "Ferric carboxymaltose injection, US",
    "body": "Mylan (Viatris) and Sandoz were licensed to sell US generics from 1 July 2026. Mylan was approved on 25 June 2026 and a Sandoz authorised generic started shipping in July.",
    "soWhat": "Lead with Europe and rest of world for KMS’s ferric carboxymaltose, or pitch US partners as a later entrant.",
    "source": "https://pharsight.greyb.com/ingredient/ferric-carboxymaltose-patent-expiration"
  },
  {
    "title": "Lisinopril oral solution, US",
    "body": "The first generic to Qbrelis (lisinopril oral solution 1 mg/mL) was approved for Annora Pharma on 20 August 2026.",
    "soWhat": "KMS’s lisinopril solution has UK exclusivity signed; a US route now faces at least one generic competitor.",
    "source": "https://www.drugs.com/generic-approvals.html"
  },
  {
    "title": "Liquid formulations of oral solids",
    "body": "Eton (desmopressin), Azurity (lisdexamfetamine, clonidine) and CMP (amlodipine) all launched oral liquids in 2026, and Lupin received tentative approval for a 505(b)(2) apixaban oral suspension in September 2026.",
    "soWhat": "Demand for ready-to-use liquids is strong in the US. This supports leading with KMS’s 17 niche reformulations in US outreach.",
    "source": "https://x.com/wegro_app/status/2104416420335665334"
  }
];
