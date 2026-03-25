import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactForm from "@/components/landing/ContactForm";
import { TrendingUp, BarChart3, PieChart, FileText, Users, ShieldCheck } from "lucide-react";
import gradientBg from "@/assets/gradient-bg.jpg";
import { Button } from "@/components/ui/button";
import decorativeArrows from "@/assets/decorative-arrows.png";
import decorativeCircles from "@/assets/decorative-circles.png";
import ceoFinance from "@/assets/ceo-finance.png";
import cfoTeam from "@/assets/cfo-team.png";
import ceoIcon from "@/assets/icons/ceo.svg";
import fundraisingIcon from "@/assets/icons/fundraising.svg";
import financialIcon from "@/assets/icons/financial.svg";
import reportesIcon from "@/assets/icons/reportes.svg";
import flujoCashIcon from "@/assets/icons/flujo-cash.svg";

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
      <section className="px-4 pt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center" style={{ background: "#021538" }}>
            {/* Decorative circles - bottom right */}
            <img src={decorativeCircles} alt="" className="absolute top-32 -right-60 w-[28rem] h-[28rem] opacity-15 pointer-events-none" />

            {/* Decorative arrows - bottom left */}
            <img src={decorativeArrows} alt="" className="absolute bottom-8 left-8 w-14 h-14 md:w-24 md:h-24 pointer-events-none brightness-0 invert" />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              Finance as a Service
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl relative z-10">
              Conoce más sobre nuestro servicio y experiencia.
            </p>

            {/* Photo */}
            <div className="relative z-10 mt-10">
              <img src={ceoFinance} alt="Finance leader" className="w-52 md:w-64 rounded-full object-cover" fetchPriority="high" loading="eager" />
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
          <div className="w-full aspect-[16/8] rounded-xl overflow-hidden">
            <img src={cfoTeam} alt="Equipo CFO trabajando" className="w-full h-full object-cover" />
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
          <div className="flex flex-col items-center gap-3 py-6">
            {[
              { num: 1, text: "Reportes ejecutivos listos para board", icon: reportesIcon },
              { num: 2, text: "Modelos y proyecciones financieras", icon: financialIcon },
              { num: 3, text: "Planeación de cash y runway", icon: flujoCashIcon },
              { num: 4, text: "Acompañamiento en procesos de fundraising", icon: fundraisingIcon },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-5 rounded-2xl border border-primary bg-transparent px-6 py-4 w-full max-w-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon ? (
                    <img src={item.icon} alt="" className="w-8 h-8" style={{ filter: "brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(4626%) hue-rotate(212deg) brightness(101%) contrast(105%)" }} />
                  ) : (
                    <span className="text-primary font-bold text-base">{item.num}</span>
                  )}
                </div>
                <span className="text-primary text-sm font-semibold">{item.num}. {item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground leading-relaxed font-medium">
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
              <h3 className="text-lg font-bold text-primary text-center">Reportes ejecutivos listos para board</h3>
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
      <LogosBar />

      {/* CTA Contact Form */}
      <section className="py-0">
        <div className="w-full overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start relative">
          <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="space-y-4 text-white relative z-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
            </p>
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceAsAService;
