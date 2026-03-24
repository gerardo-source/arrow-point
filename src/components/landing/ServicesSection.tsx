import ceoIcon from "@/assets/icons/ceo.svg";
import moneyIcon from "@/assets/icons/money.svg";

const ServicesSection = () => {
  const services = [
    {
      title: "Finance as a Service",
      icon: ceoIcon,
      description:
        "Estrategia, claridad y un CFO a tu lado. Reportes listos para board, modelos financieros, planeación de cash y acompañamiento en fundraising. Un socio que entiende startups y habla el idioma de inversionistas.",
    },
    {
      title: "NH by Arrowpoint",
      icon: moneyIcon,
      description:
        "Claridad financiera mensual, sin complejidad. Procesamos tus números con BI y AI y te entregamos un reporte ejecutivo con las métricas que importan. Ideal para founders early stage que quieren control sin armar un equipo financiero.",
    },
  ];

  return (
    <section className="py-14 px-6 bg-primary/5" id="servicios">
      <div className="mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block text-xs text-foreground font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full border border-border bg-background"><span className="text-primary">★</span> Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros servicios</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Te ofrecemos un servicio a la medida de lo que tu empresa requiere.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {services.map((s) => (
            <div key={s.title} className="w-full max-w-4xl rounded-2xl border border-primary/30 bg-background p-10 space-y-5 hover:shadow-lg transition-shadow">
              <img src={s.icon} alt={s.title} className="w-14 h-14" />
              <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{s.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium text-base hover:underline">
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
