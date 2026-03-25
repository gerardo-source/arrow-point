import arrowpointIcono from "@/assets/arrowpoint-icono.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GrowthModelSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const cards = [
    {
      title: "PyMES",
      description: "Entendemos a las PyMES y sus retos actuales. Somos todo un equipo profesional para llevarte al éxito.",
    },
    {
      title: "Startups",
      description: "Atendemos startups desde pre-seed hasta serie C. Sabemos su prioridad en su escalabilidad y nosotros crecemos con ellos.",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="mx-auto space-y-12">
        <div ref={headerRef} className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl font-bold text-foreground md:text-4xl">Un modelo que crece contigo</h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Desde early stage hasta startups en expansión, nuestros servicios se adaptan a tu etapa: visibilidad financiera mensual hoy, estrategia y acompañamiento de CFO cuando empiezas a escalar.
          </p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <div key={c.title} className={`rounded-2xl border border-border bg-card p-10 space-y-5 hover:shadow-lg transition-all duration-700 text-left ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={arrowpointIcono} alt="Arrowpoint" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{c.title}</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthModelSection;
