// Shared shapes for the research report pages (/research/*): one table of researched accounts,
// each answering the same questions with a dated source.
export type Verdict = "yes" | "likely" | "no";
export interface Answer { verdict: Verdict; text: string; source?: string; date?: string }
export interface Account {
  name: string; where: string; tier: "T1" | "T2" | "T3"; fit: number; timing: number;
  when: string; recent: string; answers: Answer[]; pitch: string; who: string;
}
export interface MarketWindow { title: string; body: string; soWhat: string; source: string }
