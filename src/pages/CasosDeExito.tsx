import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LogosBar from "@/components/landing/LogosBar";
import ContactForm from "@/components/landing/ContactForm";
import { ChevronDown } from "lucide-react";
import gradientBg from "@/assets/gradient-bg.jpg";
import decorativeArrows from "@/assets/decorative-arrows.png";
import decorativeCircles from "@/assets/decorative-circles.png";
import casosHero from "@/assets/casos-hero.png";
import { useState } from "react";

const casos = [
{
  title: "Caso #1",
  color: "#0066FF",
  content: "Contenido del caso de éxito #1. Descripción detallada del proyecto y los resultados obtenidos."
},
{
  title: "Caso #1",
  color: "#6B9BFF",
  content: "Contenido del caso de éxito #2. Descripción detallada del proyecto y los resultados obtenidos."
},
{
  title: "Caso #1",
  color: "#5BC8C8",
  content: "Contenido del caso de éxito #3. Descripción detallada del proyecto y los resultados obtenidos."
}];


const CasosDeExito = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero */}
      <section className="px-4 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center" style={{ background: "#5BC8C8" }}>
            {/* Decorative circles - bottom right */}
            <img src={decorativeCircles} alt="" className="absolute top-24 -right-60 w-[28rem] h-[28rem] opacity-15 pointer-events-none" />

            {/* Decorative arrows - bottom left */}
            <img src={decorativeArrows} alt="" className="absolute bottom-8 left-8 w-14 h-14 md:w-24 md:h-24 pointer-events-none brightness-0 invert" />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10 italic">
              Casos de éxito
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl relative z-10">
              Conoce más sobre nuestro equipo y experiencia
            </p>

            {/* Photo */}
            <div className="relative z-10 mt-10">
              <img src={casosHero} alt="Casos de éxito" className="w-52 md:w-64 object-contain" fetchPriority="high" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Casos accordion */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
            {casos.map((caso, index) =>
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg relative"
              style={{
                background: caso.color,
                marginTop: index === 0 ? 0 : "-0.75rem",
                zIndex: index + 1
              }}>
              
                <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-10 py-7 text-white">
                
                  <span className="text-lg font-semibold">{caso.title}</span>
                  <ChevronDown
                  className={`w-7 h-7 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                
                </button>
                <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-8" : "max-h-0"}`}>
                
                  <div className="px-10 text-white/90 text-sm leading-relaxed">
                    {caso.content}
                  </div>
                </div>
              </div>
            )}
        </div>
      </section>

      {/* Empresas que confían */}
      <LogosBar />

      {/* CTA Contact Form */}
      <section className="py-0">
        <div className="w-full overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start relative">
          <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="space-y-4 text-white relative z-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
            </p>
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default CasosDeExito;