import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-[84rem] mx-auto">
        <div
          className="rounded-3xl p-12 md:p-16 lg:p-24 grid md:grid-cols-[auto_1px_1fr] gap-10 md:gap-14 items-center"
          style={{ backgroundColor: "#021538" }}>
          
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">¿Quiénes Somos?</h2>
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch" />

          <div className="space-y-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Arrowpoint es una firma de Finance as a Service creada para startups en crecimiento. Combinamos experiencia en venture capital, Silicon Valley y tecnología para darte claridad financiera, acompañamiento estratégico y confianza para escalar.
            </p>
            <Link to="/por-que-arrowpoint" className="inline-flex items-center gap-2 text-white font-medium text-base hover:text-white/80 transition-colors">
              Ver más
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;