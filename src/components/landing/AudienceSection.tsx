import { Rocket, Building2, Landmark, HeartHandshake, Check } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const AudienceSection = () => {
  const { t } = useLocale();

  const items = [
    { ...t.audience.startups, icon: Rocket },
    { ...t.audience.pymes, icon: Building2 },
    { ...t.audience.empresas, icon: Landmark },
    { ...t.audience.ongs, icon: HeartHandshake },
  ];

  return (
    <section id="para-quien" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            {t.audience.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t.audience.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
            {t.audience.subtitle}
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 lg:gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="surface-card p-7 sm:p-8 relative flex flex-col"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{it.title}</h3>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline self-start"
                >
                  {it.cta} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
