import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
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
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat urna sit amet ex blandit tincidunt.",
    name: "Nombre",
    photo: testimonial6,
  },
];

const DESKTOP_PER_PAGE = 3;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const totalDesktopPages = Math.ceil(testimonials.length / DESKTOP_PER_PAGE);

  const prevDesktop = () => setDesktopPage((p) => (p === 0 ? totalDesktopPages - 1 : p - 1));
  const nextDesktop = () => setDesktopPage((p) => (p === totalDesktopPages - 1 ? 0 : p + 1));

  const desktopSlice = testimonials.slice(
    desktopPage * DESKTOP_PER_PAGE,
    desktopPage * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE
  );

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-10 px-6 bg-primary/5 relative overflow-hidden" id="testimonios">
      <img src={circlesBg} alt="" className="absolute bottom-0 left-0 w-80 md:w-[500px] -translate-x-1/4 translate-y-1/4 opacity-60 pointer-events-none" />
      <div ref={sectionRef} className={`mx-auto space-y-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl text-foreground tracking-tight text-center font-bold" style={{ fontFamily: "'Metropolis', sans-serif" }}>
          Lo que dicen los founders que trabajan con nosotros
        </h2>

        {/* Desktop: carousel of 3 */}
        <div className="hidden md:flex justify-end gap-3 -mt-4 mb-2">
          <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={prevDesktop}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={nextDesktop}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {desktopSlice.map((item, i) => (
            <div key={`${desktopPage}-${i}`} className="rounded-2xl border border-border bg-card p-8 space-y-5 animate-fade-in">
              <Quote className="h-8 w-8 text-primary rotate-180" />
              <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
              <div className="flex items-center gap-3">
                <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" width={48} height={48} />
                <span className="font-semibold text-foreground">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2">
          {Array.from({ length: totalDesktopPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === desktopPage ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="rounded-2xl border border-border bg-card p-8 space-y-5 transition-all duration-500">
              <Quote className="h-8 w-8 text-primary rotate-180" />
              <p className="text-muted-foreground text-base leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" width={48} height={48} />
                <span className="font-semibold text-foreground">{t.name}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
