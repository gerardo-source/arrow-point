import { Button } from "@/components/ui/button";

const WhyUsSection = () => {
  const points = [
    "Hablamos el idioma de las startups: MRR, runway, burn rate, ARR.",
    "Acompañamiento de nivel CFO bajo un modelo de suscripción flexible.",
    "Tecnología, BI y AI para reportes rápidos, claros y confiables.",
    "Información lista para board e inversionistas desde el día uno.",
    "Más que un proveedor: un socio que piensa como founder, no un back-office lejano.",
  ];

  return (
    <section className="py-20 px-4 bg-muted/50" id="por-que">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm text-primary font-semibold uppercase tracking-wide">¿Por qué Nosotros?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conoce los beneficios de crecer con nosotros.
          </h2>
          <Button asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>
        <ul className="space-y-5">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-3 h-3 rounded-full bg-primary shrink-0" />
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
