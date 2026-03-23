import ceoIcon from "@/assets/icons/ceo.svg";

const ServicesSection = () => {
  const services = [
    {
      title: "Finance as a Service",
      description:
        "Estrategia, claridad y un CFO a tu lado. Reportes listos para board, modelos financieros, planeación de cash y acompañamiento en fundraising. Un socio que entiende startups y habla el idioma de inversionistas.",
    },
    {
      title: "NH by Arrowpoint",
      description:
        "Claridad financiera mensual, sin complejidad. Procesamos tus números con BI y AI y te entregamos un reporte ejecutivo con las métricas que importan. Ideal para founders early stage que quieren control sin armar un equipo financiero.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="servicios">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block text-xs text-foreground font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full border border-border bg-background"><span className="text-primary">★</span> Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros servicios</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Te ofrecemos un servicio a la medida de lo que tu empresa requiere.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-primary/30 bg-transparent p-8 space-y-5 hover:shadow-lg transition-shadow">
              {/* Icon placeholder */}
              <div className="w-14 h-14 border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center text-xs text-muted-foreground">
                Icono
              </div>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                Ver más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
