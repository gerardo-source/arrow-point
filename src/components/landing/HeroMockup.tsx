import { useLocale } from "@/i18n/LocaleProvider";
import { TrendingUp, ArrowUpRight, Activity } from "lucide-react";

export function HeroMockup() {
  const { t } = useLocale();
  const m = t.hero.mockup;

  return (
    <div className="relative w-full">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_60%)] blur-2xl" />

      {/* Outer card */}
      <div className="surface-card overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/20">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">arrowpoint / dashboard</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
            Live
          </span>
        </div>

        {/* Body grid */}
        <div className="p-4 sm:p-5 grid grid-cols-6 gap-3 sm:gap-4 bg-gradient-to-br from-background to-secondary/30">
          {/* Runway big card */}
          <div className="col-span-6 sm:col-span-3 rounded-xl border border-border bg-card/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.runway}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-3 w-3" />
                {m.runwayDelta}
              </span>
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">{m.runwayValue}</div>
            {/* mini bar chart */}
            <div className="mt-3 flex items-end gap-1 h-10">
              {[35, 42, 38, 50, 46, 58, 62, 70, 75, 82, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Burn */}
          <div className="col-span-3 sm:col-span-3 rounded-xl border border-border bg-card/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.burn}</span>
              <Activity className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">{m.burnValue}</div>
            <div className="text-[11px] text-muted-foreground">{m.burnSub}</div>
            {/* mini line */}
            <svg viewBox="0 0 120 36" className="mt-2 w-full h-10">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 28 L15 22 L30 24 L45 18 L60 20 L75 14 L90 16 L105 8 L120 10 L120 36 L0 36 Z"
                fill="url(#g1)"
              />
              <path
                d="M0 28 L15 22 L30 24 L45 18 L60 20 L75 14 L90 16 L105 8 L120 10"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Forecast wide */}
          <div className="col-span-6 sm:col-span-4 rounded-xl border border-border bg-card/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.forecast}</span>
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight">{m.forecastValue}</span>
              <span className="text-[11px] text-muted-foreground">{m.forecastSub}</span>
            </div>
            <svg viewBox="0 0 200 60" className="mt-2 w-full h-14">
              <defs>
                <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 48 C20 44, 35 40, 50 36 S 90 22, 110 24 S 150 12, 180 6 L200 4 L200 60 L0 60 Z"
                fill="url(#g2)"
              />
              <path
                d="M0 48 C20 44, 35 40, 50 36 S 90 22, 110 24 S 150 12, 180 6 L200 4"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.75"
              />
              <circle cx="200" cy="4" r="3" fill="hsl(var(--primary))" />
              <circle cx="200" cy="4" r="6" fill="hsl(var(--primary))" fillOpacity="0.25" />
            </svg>
          </div>

          {/* Cap table donut */}
          <div className="col-span-6 sm:col-span-2 rounded-xl border border-border bg-card/80 p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.captable}</div>
            <div className="mt-2 flex items-center gap-3">
              <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                <circle
                  cx="18" cy="18" r="14" fill="none"
                  stroke="hsl(var(--primary))" strokeWidth="4"
                  strokeDasharray="37 88" strokeLinecap="round"
                />
                <circle
                  cx="18" cy="18" r="14" fill="none"
                  stroke="hsl(217 91% 60%)" strokeWidth="4"
                  strokeDasharray="30 88" strokeDashoffset="-37" strokeLinecap="round"
                />
                <circle
                  cx="18" cy="18" r="14" fill="none"
                  stroke="hsl(160 70% 45%)" strokeWidth="4"
                  strokeDasharray="21 88" strokeDashoffset="-67" strokeLinecap="round"
                />
              </svg>
              <ul className="text-[11px] space-y-1">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{m.founders}</span>
                  <span className="ml-auto font-medium">42%</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(217_91%_60%)]" />
                  <span className="text-muted-foreground">{m.investors}</span>
                  <span className="ml-auto font-medium">35%</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(160_70%_45%)]" />
                  <span className="text-muted-foreground">{m.pool}</span>
                  <span className="ml-auto font-medium">23%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
