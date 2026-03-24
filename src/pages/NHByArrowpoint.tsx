import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactForm from "@/components/landing/ContactForm";
import gradientBg from "@/assets/gradient-bg.jpg";
import decorativeArrows from "@/assets/decorative-arrows.png";
import decorativeCircles from "@/assets/decorative-circles.png";
import nhHero from "@/assets/nh-hero.png";
import nhSection from "@/assets/nh-section.jpg";
import ingresosGastosIcon from "@/assets/icons/ingresos-gastos.svg";
import flujoCajaIcon from "@/assets/icons/flujo-caja.svg";
import bolsaDineroIcon from "@/assets/icons/bolsa-dinero.svg";
import metricasIcon from "@/assets/icons/metricas.svg";

const NHByArrowpoint = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero */}
      <section className="px-4 pt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center" style={{ background: "#021538" }}>
            {/* Decorative circles - bottom right */}
            <img src={decorativeCircles} alt="" className="absolute top-48 -right-60 w-[28rem] h-[28rem] opacity-15 pointer-events-none" />

            {/* Decorative arrows - bottom left */}
            <img src={decorativeArrows} alt="" className="absolute bottom-8 left-8 w-14 h-14 md:w-24 md:h-24 pointer-events-none brightness-0 invert" />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              NH by Arrowpoint
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl relative z-10">
              Claridad financiera mensual, sin complicaciones.<br />
              El primer paso para entender tus números y empezar a tomar decisiones con métricas reales.
            </p>

            {/* Photo */}
            <div className="relative z-10 mt-10">
              <img src={nhHero} alt="NH by Arrowpoint" className="w-52 md:w-64 object-contain" fetchPriority="high" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* About NH Section */}
      <section className="px-4 py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-full aspect-[16/7] rounded-xl overflow-hidden">
            <img src={nhSection} alt="Análisis financiero" className="w-full h-full object-cover" />
          </div>
          <p className="text-foreground leading-relaxed">
            NH es nuestro servicio de reporteo financiero por suscripción para startups early stage que aún no necesitan un CFO completo, pero sí visibilidad clara y constante.
          </p>
          <p className="text-foreground leading-relaxed">
            Procesamos tu información con tecnología, BI e inteligencia artificial y te entregamos un reporte ejecutivo mensual con:
          </p>
          <div className="flex flex-col items-center gap-3 py-6">
            {[
              { num: 1, text: "Ingresos y gastos", icon: ingresosGastosIcon },
              { num: 2, text: "Flujo de caja", icon: flujoCajaIcon },
              { num: 3, text: "Runway", icon: bolsaDineroIcon },
              { num: 4, text: "Principales métricas de desempeño", icon: metricasIcon },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-5 rounded-2xl bg-primary/5 px-6 py-4 w-full max-w-lg">
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

export default NHByArrowpoint;