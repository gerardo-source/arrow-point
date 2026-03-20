import { Linkedin } from "lucide-react";
import arrowpointLogo from "@/assets/arrowpoint-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4" style={{ background: "#021538" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + Social */}
           <div className="space-y-6">
             <div className="space-y-1">
               <img src={arrowpointLogo} alt="Arrowpoint" className="h-8 brightness-0 invert" />
               <p className="text-white text-[10px] tracking-[0.25em] uppercase pl-1">Finance as a Service</p>
             </div>
            <div className="space-y-2">
              <p className="text-white text-sm">Síguenos en redes:</p>
              <a href="#" className="inline-flex text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Compañía */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-base">Compañía</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="/por-que-arrowpoint" className="hover:text-white transition-colors">¿Por qué nosotros?</a></li>
              <li><a href="/casos-de-exito" className="hover:text-white transition-colors">Casos de éxito</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-base">Servicios</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="/finance-as-a-service" className="hover:text-white transition-colors">Finance as a Service</a></li>
              <li><a href="/nh-by-arrowpoint" className="hover:text-white transition-colors">NH by Arrowpoint</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white">
          <span>© Arrowpoint. 2026. Todos los derechos reservados</span>
          <div className="flex gap-6">
            <a href="/politica-de-cookies" className="hover:text-white transition-colors">Política de cookies</a>
            <a href="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de privacidad</a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;