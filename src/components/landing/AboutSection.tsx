const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 lg:p-20 grid md:grid-cols-2 gap-10 items-start"
          style={{ backgroundColor: "#021538" }}>
          
          <div className="space-y-4">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Quiénes Somos?</h2>
            <p className="text-blue-200/80">
              Arrowpoint es una firma de Finance as a Service creada para startups en crecimiento.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-blue-200/80">
              Combinamos experiencia en venture capital, Silicon Valley y tecnología para darte claridad financiera, acompañamiento estratégico y confianza para escalar.
            </p>
            <a href="#" className="inline-flex items-center text-blue-400 font-medium text-sm hover:underline">
              Ver más →
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;