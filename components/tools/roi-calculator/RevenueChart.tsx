"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface RevenueChartProps {
  duration: number;
  revenue: number;
  currency: string;
  currencySymbol: string;
  serviceCost: number;
}

interface ChartPoint {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
}

export const RevenueChart = ({ duration, revenue, currency, currencySymbol, serviceCost }: RevenueChartProps) => {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';

  const generateData = (): ChartPoint[] => {
    const data: ChartPoint[] = [];
    const revenuePerMonth = revenue / duration;
    const costPerMonth = serviceCost / duration;

    for (let i = 1; i <= duration; i++) {
      const cumulativeRevenue = revenuePerMonth * i;
      const cumulativeCost = costPerMonth * i;
      data.push({
        month: `Month ${i}`,
        revenue: cumulativeRevenue,
        cost: cumulativeCost,
        profit: cumulativeRevenue - cumulativeCost,
      });
    }

    return data;
  };

  const data = generateData();

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: ChartPoint }[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border p-4 rounded-lg shadow-lg">
          <p className="text-sm text-muted-foreground mb-2 font-semibold">{payload[0].payload.month}</p>
          <div className="space-y-1">
            <p className="text-sm font-bold text-accent">
              Revenue: {currencySymbol}{Math.round(payload[0].payload.revenue).toLocaleString(locale)}
            </p>
            <p className="text-sm font-bold text-red-400">
              Cost: {currencySymbol}{Math.round(payload[0].payload.cost).toLocaleString(locale)}
            </p>
            <p className="text-sm font-bold text-green-400">
              Profit: {currencySymbol}{Math.round(payload[0].payload.profit).toLocaleString(locale)}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-6">Revenue vs Profit Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 85%)" />
          <XAxis
            dataKey="month"
            stroke="hsl(0 0% 35%)"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="hsl(0 0% 35%)"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${currencySymbol}${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="hsl(45 100% 64%)"
            strokeWidth={3}
            dot={{ fill: 'hsl(45 100% 64%)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'hsl(45 100% 64%)' }}
          />
          <Line
            type="monotone"
            dataKey="cost"
            name="Service Cost"
            stroke="hsl(0 70% 60%)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: 'hsl(0 70% 60%)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'hsl(0 70% 60%)' }}
          />
          <Line
            type="monotone"
            dataKey="profit"
            name="Profit"
            stroke="hsl(120 70% 50%)"
            strokeWidth={3}
            dot={{ fill: 'hsl(120 70% 50%)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'hsl(120 70% 50%)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
