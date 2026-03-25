import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { clientLogos } from "@/components/landing/LogosBar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: logosRevealRef, isVisible: logosVisible } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let offset = 0;

    const step = () => {
      offset += 0.5;
      if (offset >= el.scrollWidth / 2) {
        offset = 0;
      }
      el.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <section className="py-14 px-6" id="about-logos">
        <div ref={logosRevealRef} className={`text-center space-y-8 transition-all duration-700 ${logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
            Equipos que crecen con Arrowpoint
          </p>
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex items-center gap-16 w-max will-change-transform">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain flex-shrink-0 max-h-10"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6" id="about">
        <div
          ref={cardRef}
          className={`rounded-3xl p-12 md:p-16 lg:p-24 grid md:grid-cols-[auto_1px_1fr] gap-10 md:gap-14 items-center transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ backgroundColor: "#021538" }}>
          
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-white md:text-4xl">¿Quiénes Somos?</h2>
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch" />

          <div className="space-y-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Arrowpoint es una firma de Finance as a Service creada para startups en crecimiento. Combinamos experiencia en venture capital, Silicon Valley y tecnología para darte claridad financiera, acompañamiento estratégico y confianza para escalar.
            </p>
            <Link to="/por-que-arrowpoint" className="inline-flex items-center gap-2 text-white font-medium text-base hover:text-white/80 transition-colors">
              Ver más
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
