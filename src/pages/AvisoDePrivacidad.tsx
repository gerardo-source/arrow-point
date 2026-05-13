import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";

const AvisoDePrivacidad = () => {
  const { locale, t } = useLocale();
  const p = t.pages.legal.privacy;

  useSEO({
    locale,
    title:
      locale === "es"
        ? "Aviso de privacidad · Arrowpoint"
        : "Privacy notice · Arrowpoint",
    description: p.intro,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Legal
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-balance">
            {p.title}
          </h1>
          <p className="mt-3 text-xs text-muted-foreground">{p.lastUpdated}</p>
          <p className="mt-6 text-base text-foreground/85 leading-relaxed">
            {p.intro}
          </p>

          <div className="mt-10 space-y-8">
            {p.sections.map((s, i) => (
              <div key={i} className="border-l-2 border-primary/30 pl-5">
                <h2 className="text-lg font-semibold text-foreground">{s.h}</h2>
                <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvisoDePrivacidad;
