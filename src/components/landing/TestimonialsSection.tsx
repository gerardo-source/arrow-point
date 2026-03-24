import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import circlesBg from "@/assets/circles-testimonials.png";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial3,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 px-6 bg-primary/5 relative overflow-hidden" id="testimonios">
      <img src={circlesBg} alt="" className="absolute bottom-0 left-0 w-80 md:w-[500px] -translate-x-1/4 translate-y-1/4 opacity-60 pointer-events-none" />
      <div ref={sectionRef} className={`mx-auto space-y-10 max-w-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl text-foreground tracking-tight font-medium text-center" style={{ fontFamily: "'Metropolis', sans-serif" }}>
          Lo que dicen los founders que trabajan con nosotros
        </h2>

        <div className="relative overflow-hidden">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5 transition-all duration-500">
            <Quote className="h-8 w-8 text-primary rotate-180" />
            <p className="text-muted-foreground text-base leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-3">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" width={48} height={48} />
              <span className="font-semibold text-foreground">{t.name}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={prev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={next}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
