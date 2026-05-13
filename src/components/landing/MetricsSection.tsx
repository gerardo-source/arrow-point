import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedValue({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const match = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const rawNumber = match?.[2] ?? "0";
  const target = parseFloat(rawNumber);
  const isInteger = !rawNumber.includes(".");
  const suffix = match?.[3] ?? "";
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!inView || !match) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = target * eased;
      setDisplay(isInteger ? String(Math.round(v)) : v.toFixed(1));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, !!match]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const MetricsSection = () => {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t.metrics.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
            {t.metrics.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {t.metrics.items.map((m) => (
            <div
              key={m.label}
              className="surface-card p-6 sm:p-8 text-center sm:text-left relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5"
              />
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight gradient-text">
                <AnimatedValue value={m.value} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
