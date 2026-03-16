const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-primary font-semibold uppercase tracking-wide">Quienes Somos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Quiénes Somos?</h2>
            <p className="text-muted-foreground">
              Arrowpoint es una firma de Finance as a Service creada para startups en crecimiento.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Combinamos experiencia en venture capital, Silicon Valley y tecnología para darte claridad financiera, acompañamiento estratégico y confianza para escalar.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-medium text-sm hover:underline">
              Ver más →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
