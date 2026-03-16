import { useState, useRef, useEffect } from "react";
import { Menu, X, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const megaMenuServices = [
  {
    icon: TrendingUp,
    title: "Finance as a Service",
    description: "Estrategia, claridad y un CFO a tu lado.",
    href: "#servicios",
  },
  {
    icon: BarChart3,
    title: "NH by Arrowpoint",
    description: "Claridad financiera mensual, sin complejidad.",
    href: "#servicios",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const links = [
    { label: "¿Por qué Arrowpoint?", href: "#por-que" },
    { label: "Casos de éxito", href: "#testimonios" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo placeholder */}
        <div className="w-36 h-9 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-xs text-muted-foreground">
          Logo
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Servicios mega menu trigger */}
          <div className="relative">
            <button
              ref={triggerRef}
              onClick={() => setMegaOpen(!megaOpen)}
              className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
            >
              Servicios
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega menu dropdown */}
            {megaOpen && (
              <div
                ref={megaRef}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] rounded-xl border border-border bg-card shadow-xl p-4 animate-fade-in"
              >
                <div className="space-y-2">
                  {megaMenuServices.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      onClick={() => setMegaOpen(false)}
                      className="flex items-start gap-4 rounded-lg p-3 hover:bg-accent/50 transition-colors group"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pb-4 space-y-3">
          {/* Mobile services */}
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-2">Servicios</p>
          {megaMenuServices.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary pl-2"
              onClick={() => setMobileOpen(false)}
            >
              <s.icon className="h-4 w-4 text-primary" />
              {s.title}
            </a>
          ))}
          <div className="border-t border-border my-2" />
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full" asChild>
            <a href="#contacto" onClick={() => setMobileOpen(false)}>Contáctanos</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
