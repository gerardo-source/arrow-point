import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors",
            locale === l
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current = theme === "system" ? "system" : resolvedTheme;
  const cycle = () => {
    if (!mounted) return;
    setTheme(current === "dark" ? "light" : current === "light" ? "system" : "dark");
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground transition-colors",
        className,
      )}
    >
      {!mounted ? (
        <Sun className="h-4 w-4 opacity-0" />
      ) : theme === "system" ? (
        <Monitor className="h-4 w-4" />
      ) : current === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
