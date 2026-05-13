import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { useLocale } from "@/i18n/LocaleProvider";

const avatars = [testimonial1, testimonial2, testimonial3];

const TestimonialsSection = () => {
  const { t } = useLocale();

  return (
    <section id="testimonios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-6">
          {t.testimonials.items.map((q, i) => (
            <figure
              key={i}
              className="surface-card p-7 flex flex-col justify-between"
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed text-foreground/85">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={avatars[i % avatars.length]}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {q.role} · {q.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
