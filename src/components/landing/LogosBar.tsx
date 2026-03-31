import { useEffect, useRef } from "react";
import aentatech from "@/assets/logos/LOGO-AENTATECH.svg";
import cana from "@/assets/logos/LOGO-CANA.svg";
import drivana from "@/assets/logos/LOGO-DRIVANA.png";
import karmapulse from "@/assets/logos/LOGO-KARMAPULSE.png";
import kinedu from "@/assets/logos/LOGO-KINEDU.png";
import michemix from "@/assets/logos/LOGO-MICHEMIX.png";
import sora from "@/assets/logos/LOGO-SORA.png";

export const clientLogos = [
  { src: aentatech, alt: "Aentatech", className: "h-10" },
  { src: cana, alt: "Caña", className: "h-10" },
  { src: drivana, alt: "Drivana", className: "h-10" },
  { src: karmapulse, alt: "Karma Pulse", className: "h-10" },
  { src: kinedu, alt: "Kinedu", className: "h-10" },
  { src: michemix, alt: "Michemix", className: "h-10" },
  { src: sora, alt: "Sora", className: "h-10" },
];

const LogosBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="py-10 px-4 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <p className="tracking-wide uppercase font-semibold text-black text-base">
          Empresas que ya confían en nosotros
        </p>
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex items-center gap-16 w-max will-change-transform">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain flex-shrink-0`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosBar;
