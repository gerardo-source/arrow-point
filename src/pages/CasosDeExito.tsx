import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Award, ChevronDown } from "lucide-react";
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
      <section className="px-4 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center" style={{ background: "#5BC8C8" }}>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 rounded-full border-[3px] border-white/20 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-56 h-56 rounded-full border-[3px] border-white/20 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-40 h-40 rounded-full border-[3px] border-white/20 pointer-events-none" />
            <div className="absolute bottom-12 left-8 text-white/40 pointer-events-none">
              <svg width="50" height="60" viewBox="0 0 50 60" fill="currentColor">
                <polygon points="0,60 20,0 0,30" />
                <polygon points="12,60 32,10 12,40" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10 italic">
              Casos de éxito
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl relative z-10">
              Conoce más sobre nuestro equipo y experiencia
            </p>
            <div className="relative z-10 mt-10">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white/20 overflow-hidden bg-muted/30 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-white/50 text-xs border-2 border-dashed border-muted-foreground/30 rounded-full">
                  Foto
                </div>
              </div>
              <div className="absolute -bottom-1 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 right-2 text-primary">
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12 Q7 2 14 7 Q21 12 26 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos accordion */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-5" style={{ background: "#B8E8E8" }}>
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
        </div>
      </section>

      {/* Empresas que confían */}
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-medium text-foreground italic">
            Empresas que ya confían en nosotros
          </h2>
        </div>
        <div className="relative w-full">
          <div className="flex gap-16 animate-[scroll_20s_linear_infinite] w-max">
            {[...Array(2)].map((_, setIdx) =>
            ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6", "Logo 7", "Logo 8"].map((logo, i) =>
            <div key={`${setIdx}-${i}`} className="w-28 h-10 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-xs text-muted-foreground shrink-0">
                  {logo}
                </div>
            )
            )}
          </div>
        </div>
      </section>

      {/* CTA Contact Form */}
      <section className="px-4 py-0">
        <div className="w-full overflow-hidden px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-start" style={{ background: "linear-gradient(135deg, #3888FF, #0055DD, #063D9F)" }}>
          <div className="space-y-4 text-white">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight italic">
              Deja de adivinar.<br />Empieza a decidir<br />con confianza.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <input type="email" placeholder="Correo" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Teléfono" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
              <select className="rounded-lg px-4 py-3 bg-white text-black text-sm outline-none appearance-none">
                <option value="" disabled selected>Servicio</option>
                <option value="faas">Finance as a Service</option>
                <option value="nh">NH by Arrowpoint</option>
              </select>
            </div>
            <textarea placeholder="Mensaje" rows={5} className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none resize-none" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
              Enviar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default CasosDeExito;