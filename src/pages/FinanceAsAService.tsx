import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { TrendingUp, BarChart3, PieChart, FileText, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Estrategia financiera",
    description: "Planificación y análisis financiero para decisiones informadas en cada etapa de tu startup.",
  },
  {
    icon: BarChart3,
    title: "Reportes para inversionistas",
    description: "Información lista para board e inversionistas desde el día uno, clara y confiable.",
  },
  {
    icon: PieChart,
    title: "Presupuestos y forecasting",
    description: "Proyecciones financieras precisas para planificar tu crecimiento con seguridad.",
  },
  {
    icon: FileText,
    title: "Contabilidad y compliance",
    description: "Cumplimiento fiscal y contable sin que tengas que preocuparte por los detalles.",
  },
  {
    icon: Users,
    title: "CFO as a Service",
    description: "Acompañamiento de nivel CFO bajo un modelo de suscripción flexible.",
  },
  {
    icon: ShieldCheck,
    title: "Due diligence financiero",
    description: "Preparación completa para rondas de inversión y auditorías.",
  },
];

const FinanceAsAService = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero */}
      <section className="px-4 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full border-[3px] border-white/15 pointer-events-none" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 rounded-full border-[3px] border-white/15 pointer-events-none" />

            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white px-4 py-1.5 rounded-full border border-white/30 bg-white/10 mb-6 relative z-10">
              Servicio
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              Finance as a Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl relative z-10">
              Estrategia, claridad y un CFO a tu lado. Todo lo que necesitas para tomar decisiones financieras con confianza.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Qué incluye?</h2>
            <p className="text-muted-foreground">
              Un equipo financiero completo adaptado a tu etapa, sin la complejidad de un departamento interno.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            ¿Listo para tener claridad financiera?
          </h2>
          <p className="text-muted-foreground">
            Agenda una llamada y descubre cómo podemos ser tu copiloto financiero.
          </p>
          <Button size="lg" asChild>
            <a href="/#contacto">Contáctanos</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceAsAService;
