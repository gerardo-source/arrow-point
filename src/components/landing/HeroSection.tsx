import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="text-primary font-medium">
            Expertos en crecimiento financiero
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Estás construyendo el futuro.{" "}
            <span className="text-primary">Tus finanzas deben ir al mismo ritmo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Desde reportes mensuales hasta estrategia de fundraising, Arrowpoint es tu copiloto financiero para tomar decisiones con datos, no con suposiciones.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contacto">Agendar videollamada</a>
            </Button>
          </div>
        </div>
        {/* Image placeholder */}
        <div className="w-full aspect-[4/3] border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-sm text-muted-foreground bg-muted/30">
          Imagen Hero
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
