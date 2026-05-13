import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactSection from "@/components/landing/ContactSection";
import { PageHero } from "@/components/landing/PageHero";
import { HeroMockup } from "@/components/landing/HeroMockup";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";
import { Check, ArrowRight } from "lucide-react";

const NHByArrowpoint = () => {
  const { locale, t } = useLocale();
  const p = t.pages.nh;

  useSEO({
    locale,
    title:
      locale === "es"
        ? "NH by Arrowpoint · Reporteo financiero mensual para startups early stage"
        : "NH by Arrowpoint · Monthly financial reporting for early-stage startups",
    description:
      locale === "es"
        ? "Reporte ejecutivo mensual con ingresos, gastos, flujo de caja, runway y métricas clave. Para startups early stage que aún no necesitan un CFO completo."
        : "Monthly executive report with revenue, expenses, cash flow, runway and key metrics. For early-stage startups not ready for a full CFO yet.",
    keywords:
      "NH by Arrowpoint, reportes financieros startup, dashboard MRR runway, monthly reporting startup",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero eyebrow={p.eyebrow} title={p.heroTitle} subtitle={p.heroSub} />

      {/* About + features */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-foreground leading-relaxed">{p.aboutP1}</p>
              <p className="text-foreground leading-relaxed">{p.aboutP2}</p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 surface-card px-4 py-3 text-sm"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <HeroMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Upsell to FaaS */}
      <section className="relative py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="surface-card p-8 sm:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-balance">
              {p.plansTitle}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{p.plansSub}</p>
            <Link
              to="/finance-as-a-service"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background h-11 px-5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Finance as a Service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <LogosBar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default NHByArrowpoint;
