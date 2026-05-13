import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroVariants = [
  {
    headline: "Estás construyendo el futuro.",
    highlightedText: "Tus finanzas deben ir al mismo ritmo.",
    description: "Desde reportes mensuales hasta estrategia de fundraising, Arrowpoint es tu copiloto financiero para tomar decisiones con datos, no con suposiciones.",
  },
  {
    headline: "Decisiones financieras más inteligentes,",
    highlightedText: "respaldadas por expertos",
    description: "Impulsa el crecimiento de tu empresa con reporteo financiero claro, análisis estratégico y acompañamiento continuo de un equipo de CFOs",
  },
  {
    headline: "No necesitas más reportes.",
    highlightedText: "Necesitas entender tu negocio.",
    description: "Te damos visibilidad real de tu empresa: crecimiento, rentabilidad y caja en un solo lugar, para que tomes decisiones con seguridad.",
  },
  {
    headline: "Toma mejores decisiones financieras",
    highlightedText: "con un equipo de CFOs detrás de ti",
    description: "Convierte tus datos financieros en claridad: entiende tu crecimiento, controla tu burn y toma decisiones con confianza frente a inversionistas y tu equipo.",
  },
];

const HeroSection = () => {
  const [textVariant, setTextVariant] = useState(heroVariants[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroVariants.length);
    setTextVariant(heroVariants[randomIndex]);
  }, []);

  return (
    <section 
      className="relative flex items-center px-6 py-20 md:py-32 min-h-[600px] md:min-h-[700px] overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fc2875af6aa714a0197c2e45ceffc41ed%2F90cc9a3449dd4bd7b90ed8ad2b0b27d3?format=webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      {/* Contenido */}
      <div className="max-w-full mx-auto relative z-10 w-full">
        <div className="max-w-2xl space-y-6 text-left">
          <Badge variant="secondary" className="text-foreground font-medium opacity-0 animate-reveal-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">★</span> Expertos en crecimiento financiero
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white opacity-0 animate-reveal-up text-left" style={{ animationDelay: "0.2s" }}>
            {textVariant.headline}{" "}
            <span className="text-primary">{textVariant.highlightedText}</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg opacity-0 animate-reveal-up text-left" style={{ animationDelay: "0.35s" }}>
            {textVariant.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-reveal-up" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://calendly.com/arrowpoint/arrowpoint-meeting" target="_blank" rel="noopener noreferrer">Agendar videollamada</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
