import { Target, Rocket } from "lucide-react";

const GrowthModelSection = () => {
  const cards = [
    {
      title: "PyMES",
      description: "Entendemos a las PyMES y sus retos actuales. Somos todo un equipo profesional para llevarte al éxito.",
      icon: Target,
    },
    {
      title: "Startups",
      description: "Atendemos startups desde pre-seed hasta serie C. Sabemos su prioridad en su escalabilidad y nosotros crecemos con ellos.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Un modelo que crece contigo</h2>
          <p className="text-muted-foreground">
            Desde early stage hasta startups en expansión, nuestros servicios se adaptan a tu etapa: visibilidad financiera mensual hoy, estrategia y acompañamiento de CFO cuando empiezas a escalar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 space-y-4 hover:shadow-lg transition-shadow text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthModelSection;
