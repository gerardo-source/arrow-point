import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import circlesBg from "@/assets/circles-bg.png";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-4 pb-4">
      <div className="max-w-full mx-auto border-2 border-primary rounded-3xl p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image - shows first on mobile via order */}
        <div className="w-full flex items-center justify-center relative order-first md:order-last opacity-0 animate-reveal-right" style={{ animationDelay: "0.3s" }}>
          <img src={circlesBg} alt="" className="absolute w-[110%] h-[110%] object-contain" />
          <img src={heroImage} alt="Equipo colaborando" className="w-full max-w-xs md:max-w-lg object-contain relative z-10" fetchPriority="high" loading="eager" />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <Badge variant="secondary" className="text-foreground font-medium opacity-0 animate-reveal-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">★</span> Expertos en crecimiento financiero
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground opacity-0 animate-reveal-up text-left" style={{ animationDelay: "0.2s" }}>
            Estás construyendo el futuro.{" "}
            <span className="text-primary">Tus finanzas deben ir al mismo ritmo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 opacity-0 animate-reveal-up text-left" style={{ animationDelay: "0.35s" }}>
            Desde reportes mensuales hasta estrategia de fundraising, Arrowpoint es tu copiloto financiero para tomar decisiones con datos, no con suposiciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-reveal-up" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contacto">Agendar videollamada</a>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
