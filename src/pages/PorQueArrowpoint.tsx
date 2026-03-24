import ContactForm from "@/components/landing/ContactForm";
import porqueHero from "@/assets/porque-hero.png";
import porqueClarity from "@/assets/porque-clarity.jpg";
import porquePartner from "@/assets/porque-partner.jpg";
import gradientBg from "@/assets/gradient-bg.jpg";
import decorativeArrows from "@/assets/decorative-arrows.png";
import decorativeCircles from "@/assets/decorative-circles.png";
import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PorQueArrowpoint = () => {
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

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-20">
        <div className="max-w-full mx-auto">
          <div
            ref={heroRef}
            className={`relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
          >
            <img src={decorativeCircles} alt="" className="absolute top-28 -right-60 w-[28rem] h-[28rem] opacity-15 pointer-events-none" />
            <img src={decorativeArrows} alt="" className="absolute bottom-8 left-8 w-14 h-14 md:w-24 md:h-24 pointer-events-none brightness-0 invert" />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              ¿Por qué Arrowpoint?
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl relative z-10">
              Más que finanzas. Un socio que piensa como founder.
            </p>

            <div className="relative z-10 mt-10">
              <img src={porqueHero} alt="Arrowpoint team" className="w-52 md:w-64" fetchPriority="high" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Description + Highlight */}
      <section className="px-4 py-16 bg-primary/5">
        <div
          ref={descRef}
          className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ${descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            CFOs con experiencia real en startups, background en Venture Capital y Silicon Valley, tecnología que escala contigo y un acompañamiento cercano que convierte números en decisiones.
          </p>
          <div className="rounded-2xl bg-primary/10 px-8 py-8">
            <p className="text-primary text-xl md:text-2xl font-medium leading-snug">
              El equipo financiero que todo founder quisiera tener.<br />
              <span className="font-bold">+20 startups en México, LATAM y EE.UU.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Clarity Section - Image + Text */}
      <section className="px-4 py-16 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              ref={clarityImgRef}
              className={`rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-700 ${clarityImgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <img src={porqueClarity} alt="Equipo trabajando" className="w-full h-full object-cover" />
            </div>
            <div
              ref={clarityTextRef}
              className={`space-y-4 transition-all duration-700 delay-200 ${clarityTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Primero claridad, luego decisiones.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Convertimos números complejos en información clara y accionable para que tomes decisiones con seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Text + Image */}
      <section className="px-4 py-16 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              ref={partnerTextRef}
              className={`space-y-4 transition-all duration-700 ${partnerTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Más que un proveedor:<br />tu socio financiero.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                No solo entregamos reportes. Pensamos contigo el negocio y te acompañamos como parte de tu equipo.
              </p>
            </div>
            <div
              ref={partnerImgRef}
              className={`rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-700 delay-200 ${partnerImgVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img src={porquePartner} alt="Socio financiero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Para Section */}
      <section className="px-6 py-16">
        <div className="max-w-full mx-auto">
          <div
            ref={idealRef}
            className={`rounded-3xl overflow-hidden px-8 md:px-14 py-20 md:py-28 grid md:grid-cols-[auto_1px_1fr] gap-8 md:gap-10 items-center transition-all duration-700 ${idealVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
            style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}
          >
            <div className="flex items-center gap-3 text-white">
              <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Ideal para</h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
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

      {/* CTA Contact Section */}
      <section className="py-0">
        <div className="w-full overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start relative">
          <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            ref={ctaTextRef}
            className={`space-y-4 text-white relative z-10 transition-all duration-700 ${ctaTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
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

      <Footer />
    </div>
  );
};

export default PorQueArrowpoint;
