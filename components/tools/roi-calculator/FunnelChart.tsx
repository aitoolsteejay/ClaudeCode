"use client";

import { Card } from "@/components/ui/card";

interface FunnelChartProps {
  data: {
    label: string;
    value: number;
    percentage: number;
    previousValue: number;
  }[];
  currency: string;
}

export const FunnelChart = ({ data, currency }: FunnelChartProps) => {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';
  const maxValue = data[0]?.value || 1;

  // Filter out negative responses for the funnel visualization
  const funnelStages = data.filter(item => item.label !== "Negative Responses");

  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-8 text-center">Conversion Funnel</h3>
      <div className="flex justify-center">
        <div className="w-full max-w-md space-y-1">
          {funnelStages.map((item, index) => {
            const widthPercentage = (item.value / maxValue) * 100;
            const isFirstStage = index === 0;

            return (
              <div key={index} className="relative">
                {/* Stage Label and Value */}
                <div className="flex justify-between items-center mb-1 px-2">
                  <span className="text-xs font-semibold text-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-accent">{Math.round(item.value).toLocaleString(locale)}</span>
                    {!isFirstStage && (
                      <span className="text-xs text-muted-foreground">
                        ({Math.round(item.percentage)}%)
                      </span>
                    )}
                  </div>
                </div>

                {/* Funnel Segment */}
                <div className="flex justify-center">
                  <div
                    className="relative h-14 transition-all duration-500 ease-out rounded-2xl shadow-md hover:shadow-lg group"
                    style={{
                      width: `${Math.max(widthPercentage, 20)}%`,
                      background: 'linear-gradient(135deg, #FFC947 0%, #FFB627 50%, #FFA500 100%)',
                      boxShadow: '0 4px 6px -1px rgba(255, 201, 71, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.4), inset -2px -2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Inner highlight for gloss effect */}
                    <div
                      className="absolute top-1 right-2 bottom-1 w-1 bg-white/40 rounded-full"
                      style={{ filter: 'blur(2px)' }}
                    />

                    {/* Percentage Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-900 drop-shadow-sm">
                        {Math.round(item.percentage)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
