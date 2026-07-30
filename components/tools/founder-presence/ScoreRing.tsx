"use client";

interface ScoreRingProps {
  score: number;
}

export function ScoreRing({ score }: ScoreRingProps) {
  const size = 180;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E8E2D9" strokeWidth={strokeWidth} fill="transparent" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFC947"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset, transition: "stroke-dashoffset 1s ease-out" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-black text-foreground">{Math.round(score)}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Score</span>
      </div>
    </div>
  );
}
