import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-balance">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
