import aentatech from "@/assets/logos/LOGO-AENTATECH.svg";
import cana from "@/assets/logos/LOGO-CANA.svg";
import drivana from "@/assets/logos/LOGO-DRIVANA.png";
import karmapulse from "@/assets/logos/LOGO-KARMAPULSE.png";
import kinedu from "@/assets/logos/LOGO-KINEDU.png";
import michemix from "@/assets/logos/LOGO-MICHEMIX.png";
import sora from "@/assets/logos/LOGO-SORA.png";
import { useLocale } from "@/i18n/LocaleProvider";

export const clientLogos = [
  { src: aentatech, alt: "Aentatech", className: "h-8" },
  { src: cana, alt: "Caña", className: "h-8" },
  { src: drivana, alt: "Drivana", className: "h-8" },
  { src: karmapulse, alt: "Karma Pulse", className: "h-8" },
  { src: kinedu, alt: "Kinedu", className: "h-8" },
  { src: michemix, alt: "Michemix", className: "h-8" },
  { src: sora, alt: "Sora", className: "h-8" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fc2875af6aa714a0197c2e45ceffc41ed%2Fcf6534d6f23e40649b3480da21670b69?format=webp&width=800&height=1200", alt: "Avioneta", className: "h-7" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fc2875af6aa714a0197c2e45ceffc41ed%2F733f397f2d8049a1810c6307c72b56a6?format=webp&width=800&height=1200", alt: "Bonnus", className: "h-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fc2875af6aa714a0197c2e45ceffc41ed%2F434b4275b6de484d8d2b1fa7948df5e1?format=webp&width=800&height=1200", alt: "Lapzo", className: "h-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fc2875af6aa714a0197c2e45ceffc41ed%2F55cbc3379d244fdab0f4d752dedea03e?format=webp&width=800&height=1200", alt: "Reserva Natural Chipinque", className: "h-8" },
];

const LogosBar = () => {
  const { t } = useLocale();

  return (
    <section aria-label={t.logos.title} className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-8">
          {t.logos.title}
        </p>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-12 w-max animate-[scroll_45s_linear_infinite]">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className={`${logo.className} w-auto object-contain flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-100`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosBar;
