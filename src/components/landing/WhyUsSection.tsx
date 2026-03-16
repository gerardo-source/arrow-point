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
    <section className="py-20 px-4" id="por-que">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center" style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}>
          <div className="space-y-6 text-white">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white px-4 py-1.5 rounded-full border border-white/30 bg-white/10">¿Por qué Nosotros?</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Conoce los beneficios de crecer con nosotros.
            </h2>
            <Button className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>
          <ul className="space-y-5">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white shrink-0" />
                <span className="text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
