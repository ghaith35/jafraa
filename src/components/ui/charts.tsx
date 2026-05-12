"use client";

import { cn } from "@/lib/utils";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function Sparkline({ data, width = 80, height = 28, color = "var(--primary)", className }: SparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);

  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  });

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p}`).join(" ");

  const gradientId = `sparkline-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L${width},${height} L0,${height} Z`}
        fill={`url(#${gradientId})`}
      />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={points[points.length - 1].split(",")[0]} cy={points[points.length - 1].split(",")[1]} r="2" fill={color} />
    </svg>
  );
}

interface DonutProps {
  segments: { value: number; color: string; label: string }[];
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function DonutChart({ segments, size = 120, strokeWidth = 20, className }: DonutProps) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let offset = 0;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {segments.map((seg) => {
          const segLength = (seg.value / total) * circumference;
          const dash = `${segLength} ${circumference - segLength}`;
          const segOffset = offset;
          offset += segLength;

          return (
            <circle
              key={seg.label}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dash}
              strokeDashoffset={-segOffset}
              strokeLinecap="butt"
              className="transition-all duration-500"
            />
          );
        })}
        <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--border)" strokeWidth={strokeWidth} strokeDasharray={`${circumference}`} strokeDashoffset={0} opacity="0.3" />
      </svg>
    </div>
  );
}

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
  maxValue?: number;
  className?: string;
}

export function BarChart({ data, height = 80, maxValue, className }: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value), 1);
  const barWidth = Math.max(4, Math.min(16, 40 / data.length * 4));

  return (
    <div className={cn("flex items-end gap-1", className)} style={{ height }}>
      {data.map((d) => {
        const barHeight = (d.value / max) * (height - 4);
        return (
          <div
            key={d.label}
            className="group relative flex flex-col items-center justify-end"
            style={{ width: barWidth }}
          >
            <div
              className="w-full rounded-t-sm transition-all duration-300 hover:opacity-80"
              style={{
                height: Math.max(2, barHeight),
                backgroundColor: d.color || "var(--primary)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
