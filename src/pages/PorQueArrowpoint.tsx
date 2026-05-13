import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import ContactSection from "@/components/landing/ContactSection";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";
import { ArrowRight, Sparkles, Users, Code2, Target } from "lucide-react";

const diffIcons = [Sparkles, Users, Target, Code2];

const PorQueArrowpoint = () => {
  const { locale, t } = useLocale();
  const p = t.pages.porque;

  useSEO({
    locale,
    title:
      locale === "es"
        ? "¿Por qué Arrowpoint? | Finance as a Service para startups"
        : "Why Arrowpoint? | Finance as a Service for startups",
    description:
      locale === "es"
        ? "Por qué founders eligen Arrowpoint: claridad financiera real, experiencia startup, acompañamiento como socio y tecnología que escala."
        : "Why founders choose Arrowpoint: real financial clarity, startup experience, partner-level support and tech that scales.",
    keywords:
      "por qué Arrowpoint, why Arrowpoint, CFO startup, runway, board reporting",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.heroTitle}
        subtitle={p.heroSub}
      />

      {/* Problems */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance">
              {p.problemsTitle}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{p.problemsSub}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {p.problems.map((prob, i) => (
              <div key={i} className="surface-card p-6 sm:p-7">
                <span className="text-xs font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{prob.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's different */}
      <section className="relative py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              {p.diffTitle}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
              {p.diffSub}
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-4 lg:gap-5">
            {p.diffs.map((d, i) => {
              const Icon = diffIcons[i] ?? Sparkles;
              return (
                <div key={i} className="surface-card p-6 sm:p-7 flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="surface-card p-8 sm:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {p.idealTitle}
            </span>
            <ul className="mt-6 space-y-3">
              {p.ideals.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default PorQueArrowpoint;
