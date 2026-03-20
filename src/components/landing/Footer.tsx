import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4" style={{ background: "#021538" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + Social */}
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">arrowpoint</span>
              </div>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase pl-10">Finance as a Service</p>
            </div>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">Síguenos en redes:</p>
              <a href="#" className="inline-flex text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Compañía */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-base">Compañía</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/por-que-arrowpoint" className="hover:text-white transition-colors">¿Por qué nosotros?</a></li>
              <li><a href="/casos-de-exito" className="hover:text-white transition-colors">Casos de éxito</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-base">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/finance-as-a-service" className="hover:text-white transition-colors">Finance as a Service</a></li>
              <li><a href="/nh-by-arrowpoint" className="hover:text-white transition-colors">NH by Arrowpoint</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© Arrowpoint. 2026. Todos los derechos reservados</span>
          <div className="flex gap-6">
            <a href="/politica-de-cookies" className="hover:text-white transition-colors">Política de cookies</a>
            <a href="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
