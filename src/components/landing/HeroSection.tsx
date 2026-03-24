import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="pt-4 pb-14 md:pt-6 md:pb-14 px-6">
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
        <div className="w-full flex items-center justify-center">
          <img src={heroImage} alt="Equipo colaborando" className="w-full max-w-lg object-contain" fetchPriority="high" loading="eager" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
