import { useState } from "react";
import porqueHero from "@/assets/porque-hero.png";
import porqueClarity from "@/assets/porque-clarity.jpg";
import porquePartner from "@/assets/porque-partner.jpg";
import gradientBg from "@/assets/gradient-bg.png";
import { Users, Banknote } from "lucide-react";
import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PorQueArrowpoint = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center">
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-[-2rem] -translate-y-1/2 w-72 h-72 rounded-full border-[3px] border-white/15 pointer-events-none" />
            <div className="absolute top-1/2 right-[0.5rem] -translate-y-1/2 w-52 h-52 rounded-full border-[3px] border-white/15 pointer-events-none" />
            <div className="absolute bottom-8 left-8 text-white/20 pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                <polygon points="0,60 30,0 0,30" />
                <polygon points="15,60 45,10 15,40" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              ¿Por qué Arrowpoint?
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl relative z-10">
              Más que finanzas. Un socio que piensa como founder.
            </p>

            <div className="relative z-10 mt-10">
              <img src={porqueHero} alt="Arrowpoint team" className="w-52 md:w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Description + Highlight */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            CFOs con experiencia real en startups, background en Venture Capital y Silicon Valley, tecnología que escala contigo y un acompañamiento cercano que convierte números en decisiones.
          </p>
          <div className="rounded-2xl bg-primary/10 px-8 py-8">
            <p className="text-primary text-xl md:text-2xl font-medium leading-snug">
              El equipo financiero que todo founder quisiera tener.<br />
              <span className="font-bold">+20 startups en México, LATAM y EE.UU.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Clarity Section - Image + Text */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={porqueClarity} alt="Equipo trabajando" className="w-full h-full object-cover" />
            </div>
            {/* Text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Primero claridad, luego decisiones.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Convertimos números complejos en información clara y accionable para que tomes decisiones con seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Text + Image */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Más que un proveedor:<br />tu socio financiero.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                No solo entregamos reportes. Pensamos contigo el negocio y te acompañamos como parte de tu equipo.
              </p>
            </div>
            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={porquePartner} alt="Socio financiero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Para Section */}
      <section className="px-4 py-16">
        <div className="max-w-[90%] mx-auto">
          <div className="rounded-3xl overflow-hidden px-8 md:px-14 py-16 md:py-20 grid md:grid-cols-[auto_1px_1fr] gap-8 md:gap-10 items-center" style={{ background: "linear-gradient(135deg, #3888FF, #063D9F)" }}>
            <div className="flex items-center gap-3 text-white">
              <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Ideal para</h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div className="hidden md:block w-px bg-white/30 self-stretch" />
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Founders pre-Seed, Seed y Series A.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Startups que toman decisiones con MRR, runway y presión de crecimiento.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-white/80 shrink-0" />
                <span className="text-white/90 text-base">Equipos que necesitan claridad para board e inversionistas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="px-4 py-0">
        <div className="w-full rounded-none overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start relative">
          <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          {/* Left - Text */}
          <div className="space-y-4 text-white relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
            </p>
          </div>
          {/* Right - Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <input type="email" placeholder="Correo" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Teléfono" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="rounded-lg px-4 py-3 bg-white text-black text-sm outline-none appearance-none"
              >
                <option value="" disabled>Servicio</option>
                <option value="faas">Finance as a Service</option>
                <option value="nh">NH by Arrowpoint</option>
              </select>
            </div>
            <textarea placeholder="Mensaje" rows={5} className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none resize-none" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
              Enviar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PorQueArrowpoint;
