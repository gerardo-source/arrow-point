import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

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
  const [page, setPage] = useState(0);

  return (
    <section className="py-20 px-4 bg-muted/30" id="testimonios">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-md">
            Lo que dicen los founders que trabajan con nosotros
          </h2>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10" onClick={() => setPage(Math.min(0, page + 1))} disabled={page === 0}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <Quote className="h-8 w-8 text-primary rotate-180" />
              <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" width={40} height={40} />
                <span className="font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
