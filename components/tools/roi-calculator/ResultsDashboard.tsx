"use client";

import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TrendingUp, Users, MessageSquare, Calendar, Handshake, Info, type LucideIcon } from "lucide-react";

interface ResultsDashboardProps {
  totalRequests: number;
  acceptedConnections: number;
  replies: number;
  positiveReplies: number;
  negativeReplies: number;
  meetings: number;
  deals: number;
  revenue: number;
  roi: number;
  currency: string;
  currencySymbol: string;
  fullLifetimeLTV: number;
  effectiveLTV: number;
  acceptanceRate: number;
  replyRate: number;
  positiveResponseRate: number;
  meetingRateFromPositive: number;
  closingRate: number;
  adjustedClosingRate: number;
}

export const ResultsDashboard = ({
  totalRequests,
  acceptedConnections,
  replies,
  positiveReplies,
  meetings,
  deals,
  revenue,
  roi,
  currency,
  currencySymbol,
  fullLifetimeLTV,
  effectiveLTV,
  acceptanceRate,
  closingRate,
  adjustedClosingRate,
}: ResultsDashboardProps) => {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';

  const formatNumber = (value: number) => {
    return Math.round(value).toLocaleString(locale);
  };

  const formatCurrency = (value: number) => {
    return `${currencySymbol}${formatNumber(value)}`;
  };

  const MetricCard = ({ icon: Icon, label, value, highlight = false }: { icon: LucideIcon; label: string; value: string; percentage?: number; highlight?: boolean }) => (
    <Card className={`bg-card border-border p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_64%/0.15)] ${
      highlight ? 'bg-gradient-to-br from-card to-secondary' : ''
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-xl ${highlight ? 'bg-accent/20' : 'bg-secondary'}`}>
          <Icon className={`w-6 h-6 ${highlight ? 'text-accent' : 'text-foreground'}`} />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-2 font-medium">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-3xl font-bold ${highlight ? 'text-accent' : 'text-foreground'}`}>{value}</p>
      </div>
    </Card>
  );

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Top Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary border-border p-6 transition-all duration-300 hover:shadow-[0_0_40px_hsl(45_100%_64%/0.25)]">
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Total Revenue Generated</p>
          <p className="text-3xl font-bold text-accent">{formatCurrency(revenue)}</p>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary border-border p-6 transition-all duration-300 hover:shadow-[0_0_40px_hsl(45_100%_64%/0.25)]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Return on Investment</p>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-3.5 h-3.5 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>ROI = ((Revenue − Service Cost) ÷ Service Cost) × 100</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-3xl font-bold text-accent">{Math.round(roi)}%</p>
        </Card>
      </div>

      {/* LTV Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Full Customer LTV (Lifetime)</p>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total lifetime value across entire retention period</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-xl font-bold text-foreground">{formatCurrency(Math.round(fullLifetimeLTV))}</p>
          </div>
        </Card>
        <Card className="bg-accent/10 border-accent/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Effective LTV (for duration)</p>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Prorated LTV used in revenue calculations, based on selected duration</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-xl font-bold text-accent">{formatCurrency(Math.round(effectiveLTV))}</p>
          </div>
        </Card>
      </div>

      {/* Sales Conversion Rate Display */}
      <Card className="bg-card border-border p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Sales Conversion Rate</p>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>We apply a +1 percentage-point uplift to Sales Conversion Rate in calculations to reflect conservative closing uplift assumptions. Adjusted rate = Input rate + 1% (capped at 100%).</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Input Rate</p>
                <p className="text-lg font-bold text-foreground">{closingRate}%</p>
              </div>
              <span className="text-muted-foreground">→</span>
              <div>
                <p className="text-xs text-muted-foreground">Adjusted Rate (used)</p>
                <p className="text-lg font-bold text-accent">{adjustedClosingRate}%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Funnel Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard
          icon={TrendingUp}
          label="Total Requests"
          value={formatNumber(totalRequests)}
        />
        <MetricCard
          icon={Users}
          label="Accepted"
          value={formatNumber(acceptedConnections)}
          percentage={acceptanceRate}
        />
        <MetricCard
          icon={MessageSquare}
          label="Total Replies"
          value={formatNumber(replies)}
          percentage={acceptedConnections > 0 ? (replies / acceptedConnections) * 100 : 0}
        />
        <MetricCard
          icon={Calendar}
          label="Meetings"
          value={formatNumber(meetings)}
          percentage={positiveReplies > 0 ? (meetings / positiveReplies) * 100 : 0}
        />
        <MetricCard
          icon={Handshake}
          label="Deals"
          value={formatNumber(deals)}
          percentage={meetings > 0 ? (deals / meetings) * 100 : 0}
        />
      </div>
    </div>
    </TooltipProvider>
  );
};
