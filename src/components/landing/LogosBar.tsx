import { useEffect, useRef } from "react";

const logos = Array.from({ length: 8 }, (_, i) => `Logo ${i + 1}`);

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
        <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
          Equipos que crecen con Arrowpoint
        </p>
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex items-center gap-12 w-max will-change-transform">
            {[...logos, ...logos].map((label, i) => (
              <div
                key={i}
                className="w-28 h-10 border-2 border-dashed border-muted-foreground/30 rounded flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosBar;
