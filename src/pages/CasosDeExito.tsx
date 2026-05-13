import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactSection from "@/components/landing/ContactSection";
import { PageHero } from "@/components/landing/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";
import { ArrowUpRight } from "lucide-react";

const CasosDeExito = () => {
  const { locale, t } = useLocale();
  const p = t.pages.casos;

  useSEO({
    locale,
    title:
      locale === "es"
        ? "Casos de éxito · Arrowpoint | Startups que escalaron con nosotros"
        : "Case studies · Arrowpoint | Startups that scaled with us",
    description:
      locale === "es"
        ? "Historias reales de startups que ganaron claridad financiera, cerraron rondas y escalaron con Arrowpoint."
        : "Real stories of startups that gained financial clarity, closed rounds and scaled with Arrowpoint.",
    keywords:
      "casos de éxito, case studies, startups, Finance as a Service, fundraising stories",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero eyebrow={p.eyebrow} title={p.heroTitle} subtitle={p.heroSub} />

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {p.cases.map((c, i) => (
              <article
                key={i}
                className="surface-card p-6 sm:p-7 flex flex-col group hover:shadow-lg transition-shadow"
              >
                <span className="text-xs uppercase tracking-wider font-medium text-primary">
                  {c.tag}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-balance leading-snug">
                  {c.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {c.desc}
                </p>
                <div className="mt-6 pt-5 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold gradient-text">
                      {c.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.metricLabel}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground"
                    aria-label={p.cta}
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            {p.empty}
          </p>
        </div>
      </section>

      <LogosBar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CasosDeExito;
