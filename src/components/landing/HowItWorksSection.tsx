import { Search, Wrench, BarChart3, Rocket } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const icons = [Search, Wrench, BarChart3, Rocket];

const HowItWorksSection = () => {
  const { t } = useLocale();

  return (
    <section id="como" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={i}
                className="surface-card relative p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary font-medium">
                  {step.duration}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
