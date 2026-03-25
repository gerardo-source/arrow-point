import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const points = [
    "Por qué los founders eligen Arrowpoint",
    "Hablamos el idioma de las startups: MRR, runway, burn rate, ARR.",
    "Acompañamiento de nivel CFO bajo un modelo de suscripción flexible.",
    "Tecnología, BI y AI para reportes rápidos, claros y confiables.",
    "Información lista para board e inversionistas desde el día uno.",
    "Más que un proveedor: un socio que piensa como founder, no un back-office lejano",
  ];

  return (
    <section className="py-14 px-6" id="por-que">
      <div className="mx-auto">
        <div ref={ref} className={`rounded-3xl p-8 md:p-16 lg:p-20 flex flex-col gap-10 overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`} style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}>
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-14 items-stretch">
            <div className="text-white flex flex-col gap-6 md:justify-center md:items-center md:text-center">
              <h2 className="text-3xl font-normal md:text-4xl">¿Por qué Nosotros?</h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed text-left">
                Conoce los beneficios de crecer con nosotros.
              </p>
            </div>
            <div className="hidden md:block w-px bg-white/30" />
            <ul className="space-y-5">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-white shrink-0" />
                  <span className="text-white/90 text-lg leading-relaxed break-words">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary w-full py-3 text-base font-medium hover:bg-white/90 transition-colors">
            Habla con equipo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
