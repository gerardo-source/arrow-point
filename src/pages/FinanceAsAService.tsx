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
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center" style={{ background: "#021538" }}>
            {/* Decorative circles - right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 rounded-full border-[3px] border-white/10 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-56 h-56 rounded-full border-[3px] border-white/10 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-40 h-40 rounded-full border-[3px] border-white/10 pointer-events-none" />

            {/* Decorative arrows - left */}
            <div className="absolute bottom-12 left-8 text-white/20 pointer-events-none">
              <svg width="50" height="60" viewBox="0 0 50 60" fill="currentColor">
                <polygon points="0,60 20,0 0,30" />
                <polygon points="12,60 32,10 12,40" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              Finance as a Service
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl relative z-10">
              Conoce más sobre nuestro servicio y experiencia.
            </p>

            {/* Photo circle with icon */}
            <div className="relative z-10 mt-10">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white/20 overflow-hidden bg-muted/30 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-white/50 text-xs border-2 border-dashed border-muted-foreground/30 rounded-full">
                  Foto
                </div>
              </div>
              {/* Service icon */}
              <div className="absolute -bottom-1 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              {/* Decorative wave */}
              <div className="absolute -bottom-1 right-2 text-primary">
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12 Q7 2 14 7 Q21 12 26 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFO Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-t border-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Un CFO que piensa contigo el crecimiento de tu startup
          </h2>
          {/* Image placeholder */}
          <div className="w-full aspect-[16/7] rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 flex items-center justify-center text-muted-foreground text-sm">
            Imagen
          </div>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Estrategia financiera, claridad en tus números y acompañamiento real para tomar decisiones clave y prepararte para inversionistas.
            </p>
            <p className="text-foreground leading-relaxed">
              Con nuestro servicio de Finance as a Service te acompañamos como socio estratégico en el día a día financiero:
            </p>
          </div>
        </div>
      </section>

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
