"use client";

import { useState } from "react";
import { AlertTriangle, Handshake } from "lucide-react";
import { ScreenTransition } from "./ScreenTransition";
import type { GeneratedIcp } from "./types";

interface IcpResultsTabsProps {
  icps: GeneratedIcp[];
}

const B2B_BADGE = "bg-blue-500/15 text-blue-400";
const D2C_BADGE = "bg-emerald-500/15 text-emerald-400";

function AudienceBadge({ type }: { type: "B2B" | "D2C" }) {
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type === "B2B" ? B2B_BADGE : D2C_BADGE}`}>
      {type}
    </span>
  );
}

function BulletList({ items, colorDot = "#F97316" }: { items: string[]; colorDot?: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colorDot }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function IcpTabContent({ icp }: { icp: GeneratedIcp }) {
  const isD2c = icp.audienceType === "D2C";
  return (
    <div className="space-y-8">
      {(!icp.painPoints || icp.painPoints.length === 0) && (
        <div className="flex items-center gap-2 rounded-xl p-4 text-sm" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#b91c1c", border: "1px solid rgba(239,68,68,0.25)" }}>
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          This ICP is missing pain points. Try regenerating for a fuller profile.
        </div>
      )}

      <section className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#8C8279" }}>Who They Are</h3>
        <div className="space-y-6">
          <BulletList items={icp.whoTheyAre} />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
              {isD2c ? "Daily Life & Habits" : "Core Responsibilities"}
            </p>
            <BulletList items={icp.coreResponsibilities} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Psychology</p>
            <p className="text-sm leading-relaxed text-gray-700">{icp.psychology}</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#8C8279" }}>What Drives Them</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#ef4444" }}>Pain Points</p>
            <BulletList items={icp.painPoints} colorDot="#ef4444" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#16a34a" }}>Goals & Desires</p>
            <BulletList items={icp.goalsDesires} colorDot="#16a34a" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>Buying Triggers</p>
            <BulletList items={icp.buyingTriggers} colorDot="#3b82f6" />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#8C8279" }}>How To Win Them</h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Objections</p>
            <BulletList items={icp.objections} />
          </div>
          <div className="rounded-xl p-5" style={{ backgroundColor: "#FEF3EC", border: "1px solid rgba(249,115,22,0.25)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>How to Position</p>
            <p className="text-sm leading-relaxed text-gray-800">{icp.howToPosition}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Where They Hang Out</p>
            <div className="flex flex-wrap gap-2">
              {icp.whereTheyHangOut.map((platform, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Geography Context</p>
            <p className="text-sm leading-relaxed text-gray-700">{icp.geographyContext}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChannelPartnersTab({ icps }: { icps: GeneratedIcp[] }) {
  const groups = icps.filter((icp) => icp.channelPartners && icp.channelPartners.length > 0);
  return (
    <div className="space-y-8">
      {groups.map((icp, i) => (
        <section key={i} className="bg-white rounded-2xl p-6 md:p-8" style={{ border: "1px solid #E8E2D9" }}>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#8C8279" }}>
            For ICP {icps.indexOf(icp) + 1}: {icp.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {icp.channelPartners.map((partner, j) => (
              <div key={j} className="rounded-xl p-5" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                <p className="font-black text-sm mb-2" style={{ color: "#0a0a0a" }}>{partner.partnerType}</p>
                <p className="text-xs text-gray-500 mb-1"><span className="font-bold">Why they fit:</span> {partner.whyTheyFit}</p>
                <p className="text-xs text-gray-500"><span className="font-bold">Approach:</span> {partner.approachAngle}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function IcpResultsTabs({ icps }: IcpResultsTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const hasPartners = icps.some((icp) => icp.channelPartners && icp.channelPartners.length > 0);
  const tabCount = hasPartners ? icps.length + 1 : icps.length;
  const isPartnerTab = hasPartners && activeTab === icps.length;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {icps.map((icp, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all"
            style={
              activeTab === i
                ? { backgroundColor: "#0a0a0a", color: "#ffffff" }
                : { backgroundColor: "#ffffff", color: "#52525B", border: "1px solid #E8E2D9" }
            }
          >
            ICP {i + 1}
            <AudienceBadge type={icp.audienceType} />
          </button>
        ))}
        {hasPartners && (
          <button
            onClick={() => setActiveTab(icps.length)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all"
            style={
              isPartnerTab
                ? { backgroundColor: "#0a0a0a", color: "#ffffff" }
                : { backgroundColor: "#ffffff", color: "#52525B", border: "1px solid #E8E2D9" }
            }
          >
            <Handshake className="w-3.5 h-3.5" />
            Channel Partners
          </button>
        )}
      </div>

      <ScreenTransition screenKey={String(activeTab)}>
        {activeTab < icps.length ? <IcpTabContent icp={icps[activeTab]} /> : <ChannelPartnersTab icps={icps} />}
      </ScreenTransition>

      <p className="sr-only">{tabCount} tabs total</p>
    </div>
  );
}
