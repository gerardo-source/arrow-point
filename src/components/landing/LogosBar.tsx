import { useEffect, useRef } from "react";
import pontem from "@/assets/logos/pontem.png";
import drivana from "@/assets/logos/drivana.png";
import sora from "@/assets/logos/sora.png";
import queridaadela from "@/assets/logos/queridaadela.png";
import mentatickets from "@/assets/logos/mentatickets.png";

export const clientLogos = [
  { src: pontem, alt: "Pontem" },
  { src: drivana, alt: "Drivana" },
  { src: sora, alt: "Sora" },
  { src: queridaadela, alt: "Querida Adela" },
  { src: mentatickets, alt: "Menta Tickets" },
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
    <section className="py-12 px-4 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <p className="tracking-wide uppercase text-xl font-semibold text-black">
          Empresas que ya confían en nosotros
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
  );
};

export default LogosBar;
