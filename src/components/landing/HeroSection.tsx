import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-modern-finance.webp";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="flex items-center px-6 py-10">
      <div className="max-w-full mx-auto rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent shadow-xl shadow-primary/10 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image - shows first on mobile via order */}
        <div className="w-full flex items-center justify-center relative order-last md:order-last opacity-0 animate-reveal-right" style={{ animationDelay: "0.3s" }}>
          <img src={heroImage} alt="Análisis financiero profesional" className="w-full max-w-sm md:max-w-md object-cover rounded-2xl" fetchPriority="high" loading="eager" />
        </div>
        <div className="space-y-6 text-left order-first md:order-first">
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
              <a href="https://calendly.com/arrowpoint/arrowpoint-meeting" target="_blank" rel="noopener noreferrer">Agendar videollamada</a>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
