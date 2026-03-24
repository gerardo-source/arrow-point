import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import decorativeCircles from "@/assets/decorative-circles.png";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-4 pb-8">
      <div className="max-w-full mx-auto border-2 border-primary rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="text-foreground font-medium">
            <span className="text-primary">★</span> Expertos en crecimiento financiero
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Estás construyendo el futuro.{" "}
            <span className="text-primary">Tus finanzas deben ir al mismo ritmo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Desde reportes mensuales hasta estrategia de fundraising, Arrowpoint es tu copiloto financiero para tomar decisiones con datos, no con suposiciones.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
            <Button size="lg" asChild>
              <a href="#contacto">Agendar videollamada</a>
            </Button>
          </div>
        </div>
        {/* Image placeholder */}
        <div className="w-full flex items-center justify-center relative">
          {/* Concentric circles */}
          <div className="absolute w-[130%] h-[130%] rounded-full border-[3px] border-primary/10" />
          <div className="absolute w-[110%] h-[110%] rounded-full bg-primary/5" />
          <img src={heroImage} alt="Equipo colaborando" className="w-full max-w-lg object-contain relative z-10 rounded-full" fetchPriority="high" loading="eager" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
