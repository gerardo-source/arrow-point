const WhyUsSection = () => {
  const points = [
    "Por qué los founders eligen Arrowpoint",
    "Hablamos el idioma de las startups: MRR, runway, burn rate, ARR.",
    "Acompañamiento de nivel CFO bajo un modelo de suscripción flexible.",
    "Tecnología, BI y AI para reportes rápidos, claros y confiables.",
    "Información lista para board e inversionistas desde el día uno.",
    "Más que un proveedor: un socio que piensa como founder, no un back-office lejano.",
  ];

  return (
    <section className="py-20 px-6" id="por-que">
      <div className="mx-auto">
        <div className="rounded-3xl p-12 md:p-16 lg:p-20 grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-14 items-center" style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}>
          <div className="space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">¿Por qué Nosotros?</h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Conoce los beneficios de crecer con nosotros.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 text-base font-medium hover:bg-white/90 transition-colors">
              Habla con equipo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="hidden md:block w-px bg-white/30 self-stretch" />
          <ul className="space-y-5">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white shrink-0" />
                <span className="text-white/90 text-lg leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
