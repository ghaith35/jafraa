import { cn } from "@/lib/utils";

export interface KpiItem {
  label: string;
  value: string;
  tone?: "default" | "amber" | "red" | "green";
}

interface Props {
  items: KpiItem[];
}

const TONE = {
  default: {
    primary:    "#6366f1",
    secondary:  "#818cf8",
    glow:       "rgba(99,102,241,0.06)",
    glowDark:   "rgba(99,102,241,0.12)",
    orb:        "rgba(99,102,241,0.07)",
    valueLight: "#4f46e5",
    valueDark:  "#a5b4fc",
  },
  green: {
    primary:    "#10b981",
    secondary:  "#34d399",
    glow:       "rgba(16,185,129,0.06)",
    glowDark:   "rgba(16,185,129,0.12)",
    orb:        "rgba(16,185,129,0.07)",
    valueLight: "#059669",
    valueDark:  "#6ee7b7",
  },
  amber: {
    primary:    "#f59e0b",
    secondary:  "#fcd34d",
    glow:       "rgba(245,158,11,0.06)",
    glowDark:   "rgba(245,158,11,0.12)",
    orb:        "rgba(245,158,11,0.08)",
    valueLight: "#d97706",
    valueDark:  "#fde68a",
  },
  red: {
    primary:    "#ef4444",
    secondary:  "#f87171",
    glow:       "rgba(239,68,68,0.06)",
    glowDark:   "rgba(239,68,68,0.10)",
    orb:        "rgba(239,68,68,0.07)",
    valueLight: "#dc2626",
    valueDark:  "#fca5a5",
  },
} as const;

export function KpiStrip({ items }: Props) {
  const colsClass =
    items.length <= 2
      ? "grid-cols-2"
      : items.length === 3
        ? "grid-cols-3"
        : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className={cn("grid gap-3", colsClass)}>
      {items.map((item, i) => {
        const tone = TONE[item.tone ?? "default"];

        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: "var(--surface)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Hover gradient overlay — matches dashboard KpiCard pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                background: `linear-gradient(135deg, ${tone.primary}22 0%, ${tone.primary}0a 45%, transparent 70%)`,
              }}
            />

            {/* Tone-tinted background glow — light mode */}
            <div
              className="absolute inset-0 pointer-events-none dark:hidden"
              style={{
                background: `radial-gradient(ellipse 80% 70% at 0% 0%, ${tone.glow}, transparent 70%)`,
              }}
            />
            {/* Tone-tinted background glow — dark mode */}
            <div
              className="absolute inset-0 pointer-events-none hidden dark:block"
              style={{
                background: `radial-gradient(ellipse 80% 70% at 0% 0%, ${tone.glowDark}, transparent 70%)`,
              }}
            />

            {/* Decorative orb — top-right corner */}
            <div
              className="absolute -top-4 -right-4 h-16 w-16 rounded-full pointer-events-none"
              style={{ background: tone.orb, filter: "blur(12px)" }}
            />

            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{
                background: `linear-gradient(180deg, ${tone.secondary} 0%, ${tone.primary} 100%)`,
                boxShadow: `2px 0 8px -2px ${tone.primary}55`,
              }}
            />

            {/* Content */}
            <div className="relative px-5 py-4 ps-6">
              {/* Label row */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <div
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: tone.primary }}
                />
                <p
                  className="truncate text-[10px] font-bold uppercase text-[var(--tx2)]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {item.label}
                </p>
              </div>

              {/* Value */}
              <p
                className="tabular-nums font-black leading-none dark:hidden"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  color: tone.valueLight,
                }}
              >
                {item.value}
              </p>
              <p
                className="tabular-nums font-black leading-none hidden dark:block"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  color: tone.valueDark,
                }}
              >
                {item.value}
              </p>
            </div>

            {/* Bottom shimmer line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
              style={{
                background: `linear-gradient(90deg, ${tone.primary}55 0%, ${tone.secondary}33 45%, transparent 80%)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
