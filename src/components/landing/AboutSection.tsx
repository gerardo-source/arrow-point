import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 lg:p-20 grid md:grid-cols-[auto_1px_1fr] gap-8 md:gap-10 items-center"
          style={{ backgroundColor: "#021538" }}>
          
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Quiénes Somos?</h2>
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch" />

          <div className="space-y-4">
            <p className="text-white/80">
              Arrowpoint es una firma de Finance as a Service creada para startups en crecimiento. Combinamos experiencia en venture capital, Silicon Valley y tecnología para darte claridad financiera, acompañamiento estratégico y confianza para escalar.
            </p>
            <Link to="/por-que-arrowpoint" className="inline-flex items-center gap-2 text-white font-medium text-sm underline hover:text-white/80">
              Ver más
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;