import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PorQueArrowpoint = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 flex flex-col items-center text-center">
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full border-[3px] border-white/15 pointer-events-none" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 rounded-full border-[3px] border-white/15 pointer-events-none" />
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

            {/* Photo circle */}
            <div className="relative z-10 mt-10">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/20 border-4 border-white/30 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center text-white/50 text-xs">
                  Foto
                </div>
              </div>
              {/* Small decorative icons around photo */}
              <div className="absolute -bottom-2 -left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <div className="absolute -bottom-2 right-4 text-white/40">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q8 2 16 8 Q24 14 30 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for more content */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contenido próximamente</h2>
          <p className="text-muted-foreground">Aquí irá más información sobre por qué elegir Arrowpoint.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PorQueArrowpoint;
