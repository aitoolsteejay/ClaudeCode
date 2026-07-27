"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export interface CalculatorInputsProps {
  currency: string;
  setCurrency: (value: string) => void;
  connectionRequests: number;
  setConnectionRequests: (value: number) => void;
  acceptanceRate: number;
  setAcceptanceRate: (value: number) => void;
  replyRate: number;
  setReplyRate: (value: number) => void;
  positiveResponseRate: number;
  setPositiveResponseRate: (value: number) => void;
  meetingRateFromPositive: number;
  setMeetingRateFromPositive: (value: number) => void;
  closingRate: number;
  setClosingRate: (value: number) => void;
  averageTicketPrice: number;
  setAverageTicketPrice: (value: number) => void;
  transactionsPerYear: number;
  setTransactionsPerYear: (value: number) => void;
  monthsCustomerStays: number;
  setMonthsCustomerStays: (value: number) => void;
  duration: number;
  setDuration: (value: number) => void;
  monthlyCost: number;
  setMonthlyCost: (value: number) => void;
  // Calculated values to display
  acceptedConnections?: number;
  replies?: number;
  positiveReplies?: number;
  negativeReplies?: number;
  meetings?: number;
  deals?: number;
  fullLifetimeLTV?: number;
  effectiveLTV?: number;
}

const currencies = [
  { code: "USD", symbol: "$", name: "United States Dollar" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "AED", symbol: "د.إ", name: "United Arab Dirham" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
];

export const CalculatorInputs = ({
  currency,
  setCurrency,
  connectionRequests,
  setConnectionRequests,
  acceptanceRate,
  setAcceptanceRate,
  replyRate,
  setReplyRate,
  positiveResponseRate,
  setPositiveResponseRate,
  meetingRateFromPositive,
  setMeetingRateFromPositive,
  closingRate,
  setClosingRate,
  averageTicketPrice,
  setAverageTicketPrice,
  transactionsPerYear,
  setTransactionsPerYear,
  monthsCustomerStays,
  setMonthsCustomerStays,
  duration,
  setDuration,
  monthlyCost,
  setMonthlyCost,
  acceptedConnections = 0,
  replies = 0,
  positiveReplies = 0,
  negativeReplies = 0,
  meetings = 0,
  deals = 0,
  fullLifetimeLTV = 0,
  effectiveLTV = 0,
}: CalculatorInputsProps) => {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';

  const formatNumber = (value: number) => {
    return value.toLocaleString(locale);
  };

  const parseNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, '')) || 0;
  };

  const negativeResponseRate = 100 - positiveResponseRate;

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Basic Settings */}
        <div className="space-y-4 pb-6 border-b border-border">
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code} className="text-foreground">
                    {curr.code} – {curr.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-sm font-semibold text-foreground">Monthly Outreach Volume</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Number of Connection Requests Sent per month</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="number"
              value={connectionRequests}
              onChange={(e) => setConnectionRequests(parseFloat(e.target.value) || 0)}
              className="bg-input border-border text-foreground"
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">Duration</Label>
            <Select value={duration.toString()} onValueChange={(value) => setDuration(parseInt(value))}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="1" className="text-foreground">1 Month</SelectItem>
                <SelectItem value="3" className="text-foreground">3 Months</SelectItem>
                <SelectItem value="6" className="text-foreground">6 Months</SelectItem>
                <SelectItem value="12" className="text-foreground">12 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Conversion Rates */}
        <div className="space-y-5">
          <h3 className="font-semibold text-foreground">Conversion Rates</h3>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-medium text-foreground">Connection Acceptance Rate</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of outreach accepted by prospects</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-accent">{acceptanceRate}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(acceptedConnections).toLocaleString()}</span>
              </div>
            </div>
            <Slider
              value={[acceptanceRate]}
              onValueChange={(value) => setAcceptanceRate(value[0])}
              max={100}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-medium text-foreground">Response Rate</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of accepted connections who respond</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-accent">{replyRate}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(replies).toLocaleString()}</span>
              </div>
            </div>
            <Slider
              value={[replyRate]}
              onValueChange={(value) => setReplyRate(value[0])}
              max={100}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-medium text-foreground">Positive Response Rate</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share of replies that express interest</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-accent">{positiveResponseRate}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(positiveReplies).toLocaleString()}</span>
              </div>
            </div>
            <Slider
              value={[positiveResponseRate]}
              onValueChange={(value) => setPositiveResponseRate(value[0])}
              max={100}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2 opacity-60">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <Label className="text-xs font-medium text-muted-foreground">Disengagement Rate (auto)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share of responses indicating disinterest</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-muted-foreground">{negativeResponseRate}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(negativeReplies).toLocaleString()}</span>
              </div>
            </div>
            <div className="h-1.5 bg-secondary rounded-full">
              <div
                className="h-full bg-muted-foreground/50 rounded-full transition-all"
                style={{ width: `${negativeResponseRate}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-medium text-foreground">Meeting Show-Up Rate</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share of scheduled meetings where the prospect attends</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-accent">{meetingRateFromPositive}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(meetings).toLocaleString()}</span>
              </div>
            </div>
            <Slider
              value={[meetingRateFromPositive]}
              onValueChange={(value) => setMeetingRateFromPositive(value[0])}
              max={100}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-medium text-foreground">Sales Conversion Rate</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of meetings that become closed deals (user input). An adjusted +1 percentage point uplift is applied in calculations.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-accent">{closingRate}%</span>
                <span className="text-xs text-muted-foreground">= {Math.round(deals).toLocaleString()}</span>
              </div>
            </div>
            <Slider
              value={[closingRate]}
              onValueChange={(value) => setClosingRate(value[0])}
              max={100}
              step={1}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Revenue Settings */}
        <div className="space-y-4 pt-6 border-t border-border">
          <h3 className="font-semibold text-foreground">Revenue</h3>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-sm font-medium text-foreground">Average Deal Value</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Average revenue generated per deal</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="text"
              value={formatNumber(averageTicketPrice)}
              onChange={(e) => setAverageTicketPrice(parseNumber(e.target.value))}
              className="bg-input border-border text-foreground"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-sm font-medium text-foreground">Invoices Raised (per Year)</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Average number of invoices (transactions) a typical client generates per year</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="number"
              value={transactionsPerYear}
              onChange={(e) => setTransactionsPerYear(parseFloat(e.target.value) || 0)}
              className="bg-input border-border text-foreground"
              min="0"
              step="1"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-sm font-medium text-foreground">Customer Retention Period (months)</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Average number of months a client remains active</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="number"
              value={monthsCustomerStays}
              onChange={(e) => setMonthsCustomerStays(Math.round(parseFloat(e.target.value) || 0))}
              className="bg-input border-border text-foreground"
              min="0"
              step="1"
            />
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-semibold text-foreground">Customer LTV (Lifetime)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total lifetime value = Average Deal Value × Invoices per Year × (Retention Months ÷ 12)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <span className="text-lg font-bold text-accent">{currencies.find(c => c.code === currency)?.symbol}{formatNumber(Math.round(fullLifetimeLTV))}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center gap-1.5">
                <Label className="text-sm font-semibold text-foreground">Effective LTV (for duration)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Effective LTV = Average Deal Value × Invoices per Year × (Covered Months ÷ 12). Covered Months = min(Duration, Retention). We prorate lifetime value to match the selected ROI duration.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <span className="text-lg font-bold text-accent">{currencies.find(c => c.code === currency)?.symbol}{formatNumber(Math.round(effectiveLTV))}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-sm font-medium text-foreground">Monthly Investment with Myntmore</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Monthly spend on MyntMore services</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="text"
              value={formatNumber(monthlyCost)}
              onChange={(e) => setMonthlyCost(parseNumber(e.target.value))}
              className="bg-input border-border text-foreground"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
