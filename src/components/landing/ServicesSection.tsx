import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const { t } = useLocale();
  const navigate = useNavigate();

  const tiers = [
    { ...t.services.nh, popular: false, href: "/nh-by-arrowpoint" },
    { ...t.services.faas, popular: true, href: "/finance-as-a-service" },
  ];

  return (
    <section id="servicios" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative surface-card p-7 sm:p-8 flex flex-col",
                tier.popular &&
                  "ring-2 ring-primary/60 shadow-xl shadow-primary/10",
              )}
            >
              {tier.popular && "badge" in tier && tier.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-medium">
                  {tier.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                onClick={(e) => { e.preventDefault(); navigate(tier.href); }}
                className={cn(
                  "mt-7 inline-flex items-center justify-center gap-1.5 rounded-full h-10 px-5 text-sm font-medium transition-opacity",
                  tier.popular
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border hover:bg-accent text-foreground",
                )}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
