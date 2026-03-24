import arrowpointIcono from "@/assets/arrowpoint-icono.png";

const GrowthModelSection = () => {
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
    <section className="py-20 px-6">
      <div className="mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Un modelo que crece contigo</h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Desde early stage hasta startups en expansión, nuestros servicios se adaptan a tu etapa: visibilidad financiera mensual hoy, estrategia y acompañamiento de CFO cuando empiezas a escalar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-10 space-y-5 hover:shadow-lg transition-shadow text-left">
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
