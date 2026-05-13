import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";

const NotFound = () => {
  const { locale, t } = useLocale();
  const p = t.pages.notFound;

  useSEO({
    locale,
    title:
      locale === "es"
        ? "Página no encontrada · Arrowpoint"
        : "Page not found · Arrowpoint",
    description: p.sub,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="relative flex-1 flex items-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {p.eyebrow}
          </span>
          <h1 className="mt-5 text-5xl sm:text-7xl font-semibold tracking-tight gradient-text">
            404
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl font-semibold text-balance">
            {p.title}
          </p>
          <p className="mt-3 text-base text-muted-foreground text-balance">
            {p.sub}
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background h-11 px-5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            {p.cta}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
