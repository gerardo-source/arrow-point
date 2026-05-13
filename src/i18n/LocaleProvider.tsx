import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof translations.es;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "arrowpoint:locale";

const SPANISH_COUNTRIES = new Set([
  "MX", "ES", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO",
  "HN", "PY", "SV", "NI", "CR", "PR", "UY", "PA",
]);

function detectFromNavigator(): Locale {
  if (typeof navigator === "undefined") return "es";
  const lang = (navigator.language || "es").toLowerCase();
  return lang.startsWith("es") ? "es" : "en";
}

async function detectFromIP(): Promise<Locale | null> {
  try {
    const res = await fetch("https://ipapi.co/country/", {
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) return null;
    const country = (await res.text()).trim().toUpperCase();
    if (!country || country.length !== 2) return null;
    return SPANISH_COUNTRIES.has(country) ? "es" : "en";
  } catch {
    return null;
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") return stored;
    return detectFromNavigator();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return;
    let cancelled = false;
    detectFromIP().then((ip) => {
      if (!cancelled && ip) setLocaleState(ip);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
