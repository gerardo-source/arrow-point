import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { HeroMockup } from "./HeroMockup";


const HeroSection = () => {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance leading-[1.05]">
              {t.hero.titleA}{" "}
              <span className="gradient-text">{t.hero.titleWord}</span>{" "}
              {t.hero.titleB}
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground text-balance">
              {t.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background h-11 px-5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#como"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#como")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 rounded-full h-11 px-4 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {t.hero.ctaSecondary} →
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full ring-2 ring-background"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 47) % 360} 70% 60%), hsl(${(i * 47 + 60) % 360} 70% 55%))`,
                    }}
                  />
                ))}
              </div>
              <span>{t.hero.proofLine}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
