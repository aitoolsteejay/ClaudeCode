"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface GapChartProps {
  userAvg: number;
  compAvg: number;
}

export function GapChart({ userAvg, compAvg }: GapChartProps) {
  const data = [
    { name: "You", value: userAvg },
    { name: "Competitor Avg", value: compAvg },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E2D9" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#8C8279", fontSize: 12 }} />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
            contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9", borderRadius: "8px" }}
            itemStyle={{ color: "#0a0a0a" }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === "You" ? "#FFC947" : "#D4D4D8"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
