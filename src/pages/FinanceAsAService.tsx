import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactSection from "@/components/landing/ContactSection";
import { PageHero } from "@/components/landing/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";
import { Check, ArrowRight, BarChart3, LineChart, Wallet, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const featureIcons = [BarChart3, LineChart, Wallet, Compass];

const FinanceAsAService = () => {
  const { locale, t } = useLocale();
  const p = t.pages.faas;
  const [, setSearchParams] = useSearchParams();

  useSEO({
    locale,
    title:
      locale === "es"
        ? "Finance as a Service · Arrowpoint | CFO fraccionado para startups"
        : "Finance as a Service · Arrowpoint | Fractional CFO for startups",
    description:
      locale === "es"
        ? "Un CFO dedicado, modelos financieros board-ready y apoyo en fundraising. Cuatro planes que crecen contigo."
        : "A dedicated CFO, board-ready financial models and fundraising support. Four plans that grow with you.",
    keywords:
      "Finance as a Service, CFO as a Service, fractional CFO, reportes financieros, fundraising",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero eyebrow={p.eyebrow} title={p.heroTitle} subtitle={p.heroSub}>
        <div className="mt-7 flex justify-center">
          <a
            href="#planes"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#planes")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background h-11 px-5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {p.pricingTitle.split(/[?¿]/)[0]} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* CFO Section */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              {p.cfoTitle}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
              {p.cfoIntro}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.features.map((f, i) => {
              const Icon = featureIcons[i] ?? BarChart3;
              return (
                <div key={i} className="surface-card p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-foreground leading-relaxed">
                    {f}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-10 mx-auto max-w-2xl text-center text-sm sm:text-base text-muted-foreground text-balance">
            {p.languageNote}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="relative py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              {p.pricingTitle}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
              {p.pricingSub}
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.plans.map((plan) => {
              const popular = "popular" in plan && plan.popular;
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "surface-card p-6 flex flex-col relative",
                    popular && "ring-2 ring-primary/60 shadow-xl shadow-primary/10",
                  )}
                >
                  {popular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-medium">
                      {p.popularBadge}
                    </span>
                  )}
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {plan.name}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">
                    {plan.title}
                  </h3>

                  <div className="mt-4 pb-4 border-b border-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-semibold tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {plan.period}
                    </p>
                  </div>

                  <div className="mt-4 space-y-1">
                    <p className="text-xs font-semibold text-foreground/80">
                      {plan.idealLabel}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {plan.ideal.map((it) => (
                        <li key={it}>• {it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-1.5 flex-1">
                    <p className="text-xs font-semibold text-foreground/80">
                      {plan.includesLabel}
                    </p>
                    <ul className="space-y-1.5">
                      {plan.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs">
                          <span className="mt-0.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="h-2 w-2" strokeWidth={3} />
                          </span>
                          <span className="text-foreground/85">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.note && (
                    <p className="mt-4 text-[11px] italic text-muted-foreground">
                      {plan.note}
                    </p>
                  )}

                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchParams({ plan: plan.name, service: "faas" }, { replace: true });
                      setTimeout(() => {
                        document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                      }, 50);
                    }}
                    className={cn(
                      "mt-5 inline-flex items-center justify-center gap-1.5 rounded-full h-9 px-4 text-xs font-medium transition-opacity",
                      popular
                        ? "bg-foreground text-background hover:opacity-90"
                        : "border border-border hover:bg-accent text-foreground",
                    )}
                  >
                    {p.planCta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LogosBar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default FinanceAsAService;
