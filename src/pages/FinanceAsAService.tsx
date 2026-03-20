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
      <section className="px-4 py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto space-y-8">
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
          {/* Numbered list items */}
          <div className="flex flex-col items-center gap-4 py-6">
            {[
              { num: 1, text: "Reportes ejecutivos listos para board" },
              { num: 2, text: "Modelos y proyecciones financieras" },
              { num: 3, text: "Planeación de cash y runway" },
              { num: 4, text: "Acompañamiento en procesos de fundraising" },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-4 rounded-xl border border-primary/20 px-6 py-3 w-full max-w-lg">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">{item.num}</span>
                </div>
                <span className="text-primary text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground leading-relaxed">
            Hablamos el idioma de los founders (MRR, burn rate, ARR) y convertimos tus números en decisiones claras para escalar con bases sólidas.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Inicial */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4 flex flex-col">
              <p className="text-sm text-muted-foreground text-center">Inicial</p>
              <h3 className="text-lg font-bold text-foreground text-center">Reportes ejecutivos listos para board</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Ideal para empresas que:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quieren visibilidad financiera básica</li>
                  <li>• Necesitan entender cómo cerró el mes</li>
                  <li>• No requieren seguimiento frecuente</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Incluye:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Entrega mensual de resultados financieros</li>
                  <li>✓ Reportes financieros claros y ordenados</li>
                  <li>✓ Análisis general del desempeño del mes</li>
                  <li>✓ Finance as a Service con enfoque informativo</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground italic mt-auto pt-4">Este plan se enfoca en entregar resultados financieros mensuales, sin seguimiento o acompañamiento semanal.</p>
            </div>

            {/* Básico */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4 flex flex-col">
              <p className="text-sm text-muted-foreground text-center">Básico</p>
              <h3 className="text-lg font-bold text-foreground text-center">Operación con visibilidad</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Ideal para empresas que:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Están creciendo activamente</li>
                  <li>• Necesitan orden financiero</li>
                  <li>• Buscan acompañamiento más cercano</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Incluye:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Todo del plan Inicial</li>
                  <li>✓ Seguimiento financiero recurrente</li>
                  <li>✓ Análisis de resultados (qué pasó y por qué)</li>
                  <li>✓ Finance as a Service operativo</li>
                  <li>✓ Seguimiento de indicadores clave</li>
                  <li>✓ Soporte financiero continuo</li>
                </ul>
              </div>
            </div>

            {/* Estándar */}
            <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 space-y-4 flex flex-col shadow-lg shadow-primary/10">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ★ Más popular
                </span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Estándar</p>
              <h3 className="text-lg font-bold text-foreground text-center">Control y toma de decisiones</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Ideal para empresas que:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ya toman decisiones con números</li>
                  <li>• Necesitan mayor profundidad financiera</li>
                  <li>• Buscan control real del negocio</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Incluye:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Todo del plan anterior</li>
                  <li>✓ Análisis financiero más profundo</li>
                  <li>✓ Acompañamiento en decisiones clave</li>
                  <li>✓ Mayor visibilidad de flujo de efectivo</li>
                  <li>✓ Finance as a Service con mayor involucramiento</li>
                  <li>✓ Reportes más personalizados</li>
                </ul>
              </div>
            </div>

            {/* Custom */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4 flex flex-col">
              <p className="text-sm text-muted-foreground text-center">Custom</p>
              <h3 className="text-lg font-bold text-foreground text-center">Dirección financiera estratégica</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Ideal para empresas que:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Están escalando rápidamente</li>
                  <li>• Tienen o planean levantar capital</li>
                  <li>• Necesitan visión estratégica</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Incluye:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Todo del plan anterior</li>
                  <li>✓ Finance as a Service estratégico</li>
                  <li>✓ Análisis para crecimiento y planeación</li>
                  <li>✓ Apoyo en decisiones de alto impacto</li>
                  <li>✓ Mayor capacidad analítica</li>
                  <li>✓ Preparación para inversionistas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas que confían */}
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-medium text-foreground italic">
            Empresas que ya confían en nosotros
          </h2>
        </div>
        <div className="relative w-full">
          <div className="flex gap-16 animate-[scroll_20s_linear_infinite] w-max">
            {[...Array(2)].map((_, setIdx) => (
              ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6", "Logo 7", "Logo 8"].map((logo, i) => (
                <div key={`${setIdx}-${i}`} className="w-28 h-10 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-xs text-muted-foreground shrink-0">
                  {logo}
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Form */}
      <section className="px-4 py-0">
        <div className="w-full overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start" style={{ background: "linear-gradient(135deg, #3888FF, #0055DD, #063D9F)" }}>
          <div className="space-y-4 text-white">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight italic">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <input type="email" placeholder="Correo" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Teléfono" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <select className="rounded-lg px-4 py-3 bg-white text-black text-sm outline-none appearance-none">
                <option value="" disabled selected>Servicio</option>
                <option value="faas">Finance as a Service</option>
                <option value="nh">NH by Arrowpoint</option>
              </select>
            </div>
            <textarea placeholder="Mensaje" rows={5} className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none resize-none" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
              Enviar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceAsAService;
