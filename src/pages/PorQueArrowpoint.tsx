import { useEffect } from "react";
import ContactForm from "@/components/landing/ContactForm";
import porqueHero from "@/assets/porque-hero.webp";
import porqueClarity from "@/assets/porque-clarity.webp";
import porquePartner from "@/assets/porque-partner.webp";
import gradientBg from "@/assets/gradient-bg.webp";
import decorativeArrows from "@/assets/decorative-arrows.webp";
import decorativeCircles from "@/assets/decorative-circles.webp";
import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PorQueArrowpoint = () => {
  useEffect(() => { document.title = "Por Qué Arrowpoint │ Arrowpoint"; }, []);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: descRef, isVisible: descVisible } = useScrollReveal();
  const { ref: clarityImgRef, isVisible: clarityImgVisible } = useScrollReveal();
  const { ref: clarityTextRef, isVisible: clarityTextVisible } = useScrollReveal();
  const { ref: partnerTextRef, isVisible: partnerTextVisible } = useScrollReveal();
  const { ref: partnerImgRef, isVisible: partnerImgVisible } = useScrollReveal();
  const { ref: idealRef, isVisible: idealVisible } = useScrollReveal();
  const { ref: ctaTextRef, isVisible: ctaTextVisible } = useScrollReveal();
  const { ref: ctaFormRef, isVisible: ctaFormVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero Section - Uncomfortable Hook */}
      <section className="px-6 pt-32 pb-16" style={{ marginTop: "var(--top-banner-height, 0px)" }}>
        <div className="max-w-4xl mx-auto">
          <div
            ref={heroRef}
            className={`relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-20 flex flex-col items-center text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
          >
            <img src={decorativeCircles} alt="" className="absolute top-28 -right-60 w-[28rem] h-[28rem] opacity-15 pointer-events-none" />
            <img src={decorativeArrows} alt="" className="absolute bottom-8 left-8 w-14 h-14 md:w-24 md:h-24 pointer-events-none brightness-0 invert" />

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 leading-tight">
              ¿Qué pasó con tu claridad financiera?
            </h1>
            <p className="text-white/85 text-lg md:text-xl max-w-2xl relative z-10 leading-relaxed font-medium">
              No pediste que números complejos te llevaran a malas decisiones.
              <br />
              Pero aquí estás.
            </p>

            <div className="relative z-10 mt-12 max-w-sm">
              <img src={porqueHero} alt="Arrowpoint team" className="w-full" fetchpriority="high" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problems Section */}
      <section className="px-6 py-16 bg-background">
        <div
          ref={descRef}
          className={`max-w-5xl mx-auto transition-all duration-700 ${descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            El problema que vives todos los días
          </h2>
          <p className="text-muted-foreground text-center mb-12 md:text-lg">
            Estos dilemas te suenan familiar:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Problem 1 */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8">
              <div className="flex gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                <h3 className="text-lg font-semibold text-foreground">No sabes tu runway real</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                ¿6 meses? ¿8? Tu contador dice 7. Tu intuición dice menos. Nadie sabe bien.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8">
              <div className="flex gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">2</div>
                <h3 className="text-lg font-semibold text-foreground">Reportes que no te ayudan</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Recibes reportes llenos de cuentas. Pero no te dicen: ¿cuándo se acaba el dinero? ¿A qué ritmo quemamos?
              </p>
            </div>

            {/* Problem 3 */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8">
              <div className="flex gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">3</div>
                <h3 className="text-lg font-semibold text-foreground">Los inversionistas dudan</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Tu pitch deck no tiene números claros. ¿MRR real? ¿CAC vs LTV? Improvisos no cierran rondas.
              </p>
            </div>

            {/* Problem 4 */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8">
              <div className="flex gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">4</div>
                <h3 className="text-lg font-semibold text-foreground">Crecimiento sin control</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Tu revenue crece pero no ves el margen real. ¿Qué es rentable? ¿Dónde pierdes plata?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Different - Arrowpoint vs Others */}
      <section className="px-6 py-16 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Entonces… ¿qué cambia con Arrowpoint?
          </h2>
          <p className="text-muted-foreground text-center mb-12 md:text-lg max-w-3xl mx-auto">
            Dejamos de hablar de contabilidad… y empezamos a hablar de decisiones reales.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              ref={clarityImgRef}
              className={`rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-700 ${clarityImgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <img src={porqueClarity} alt="Equipo trabajando" className="w-full h-full object-cover" />
            </div>

            <div
              ref={clarityTextRef}
              className={`space-y-6 transition-all duration-700 delay-200 ${clarityTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  De números a decisiones
                </h3>
                <p className="text-muted-foreground text-sm">
                  Convertimos tu contabilidad en insights. MRR, ARR, burn, runway. Lo que importa para crecer.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Experiencia startup real
                </h3>
                <p className="text-muted-foreground text-sm">
                  CFOs que vivieron Seed, Series A, scaling. Silicon Valley y LATAM. Sabemos lo que necesitas porque lo vivimos.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Socio, no proveedor
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nos importa tu negocio. Acompañamiento cercano. Somos parte de tu equipo, no un outsourced.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Tecnología que escala
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sistemas que crecen contigo. Desde operaciones manuales a automatización a medida que escalan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
          <div
            ref={ctaTextRef}
            className={`space-y-6 text-white pl-4 md:pl-8 transition-all duration-700 ${ctaTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            <h2 className="text-3xl leading-tight md:text-5xl font-bold">
              La claridad está<br />a una llamada.
            </h2>
            <p className="text-white/85 leading-relaxed text-base md:text-lg">
              Agenda 30 minutos con nosotros. Te mostramos exacto qué está pasando con tus finanzas y qué podríamos hacer juntos.
            </p>
            <p className="text-white/70 text-sm">
              ✓ Sin jargón contable<br />
              ✓ Sin promesas vacías<br />
              ✓ Solo números y realidad
            </p>
          </div>
          <div
            ref={ctaFormRef}
            className={`relative z-10 transition-all duration-700 delay-200 ${ctaFormVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="px-6 py-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Y esto es lo que cambia
          </h2>
          <p className="text-muted-foreground text-center mb-12 md:text-lg max-w-3xl mx-auto">
            Cuando trabajas con Arrowpoint:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              ref={partnerTextRef}
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-8 transition-all duration-700 ${partnerTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Controlas tu runway
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Sabes exacto cuándo se acaba el dinero. Eso te da espacio mental y tiempo para mover fichas.
              </p>
            </div>

            <div
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-8 transition-all duration-700 delay-100`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Tomas decisiones rápido
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "¿Cierro esta oficina? ¿Debo reducir CAC?" Ya tienes los números claros. No adivinas.
              </p>
            </div>

            <div
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-8 transition-all duration-700 delay-200`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Inversionistas confían en ti
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Tu deck tiene números reales y defensibles. Los VC sienten que controlas tu negocio.
              </p>
            </div>

            <div
              ref={partnerImgRef}
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-8 transition-all duration-700 delay-300`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Identificas oportunidades
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Ves qué es rentable, dónde creces con margen, en qué canales tienes mejor eficiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Para Section */}
      <section className="px-6 py-10">
        <div className="max-w-full mx-auto">
          <div
            ref={idealRef}
            className={`rounded-3xl overflow-hidden px-8 md:px-14 py-20 md:py-28 grid md:grid-cols-[auto_1px_1fr] gap-8 md:gap-10 items-center transition-all duration-700 ${idealVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
            style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-3 text-white">
              <h2 className="text-2xl font-bold whitespace-nowrap text-center md:text-left md:text-4xl">Ideal para</h2>
              <svg className="hidden md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div className="block md:hidden w-full h-px bg-white/40" />
            <div className="hidden md:block w-px bg-white/30 self-stretch" />
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Founders pre-Seed, Seed y Series A.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Startups que toman decisiones con MRR, runway y presión de crecimiento.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Equipos que necesitan claridad para board e inversionistas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PorQueArrowpoint;
