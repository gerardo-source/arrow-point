const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo placeholder */}
          <div className="space-y-4">
            <div className="w-32 h-8 border-2 border-dashed border-background/30 rounded flex items-center justify-center text-xs text-background/50">
              Logo
            </div>
          </div>

          {/* Compañía */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Compañía</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#por-que" className="hover:text-background transition-colors">¿Por qué nosotros?</a></li>
              <li><a href="#testimonios" className="hover:text-background transition-colors">Casos de éxito</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#servicios" className="hover:text-background transition-colors">Finance as a Service</a></li>
              <li><a href="#servicios" className="hover:text-background transition-colors">NH by Arrowpoint</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Síguenos en redes</h4>
            <div className="flex gap-3">
              {["Social 1", "Social 2", "Social 3"].map((s) => (
                <div key={s} className="w-9 h-9 border-2 border-dashed border-background/30 rounded-full flex items-center justify-center text-[9px] text-background/50">
                  {s.split(" ")[1]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <span>© Arrowpoint. 2026. Todos los derechos reservados</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Política de cookies</a>
            <a href="#" className="hover:text-background transition-colors">Aviso de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
