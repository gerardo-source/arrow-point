import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ceoIcon from "@/assets/icons/ceo-2.svg";
import moneyIcon from "@/assets/icons/money-2.svg";
import arrowpointLogo from "@/assets/arrowpoint-logo.png";
import heroTeam from "@/assets/navbar-dropdown-image.webp";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const megaMenuServices = [
  {
    customIcon: ceoIcon,
    title: "Finance as a Service",
    description: "Estrategia, claridad y un CFO a tu lado.",
    href: "/finance-as-a-service",
  },
  {
    customIcon: moneyIcon,
    title: "NH by Arrowpoint",
    description: "Claridad financiera mensual, sin complejidad.",
    href: "/nh-by-arrowpoint",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
    { label: "Casos de éxitos", href: "/casos-de-exito" },
  ];

  return (
    <nav
      style={{ top: "var(--top-banner-height, 0px)" }}
      className={`fixed left-0 right-0 z-50 bg-background/95 backdrop-blur transition-all duration-300 ${scrolled ? "border-b border-border shadow-sm" : ""} ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo placeholder */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={arrowpointLogo} alt="Arrowpoint" className="h-8" />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/por-que-arrowpoint"
            onClick={(e) => { e.preventDefault(); navigate("/por-que-arrowpoint"); }}
            className="text-base text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            ¿Por qué Arrowpoint?
          </a>

          {/* Servicios mega menu trigger */}
          <button
            ref={triggerRef}
            onClick={() => setMegaOpen(!megaOpen)}
            className="text-base text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
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

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                if (l.href.startsWith("/")) {
                  e.preventDefault();
                  navigate(l.href);
                } else {
                  handleAnchorClick(e, l.href);
                }
              }}
              className="text-base text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="lg" asChild>
            <a href="#contacto" onClick={(e) => handleAnchorClick(e, "#contacto")}>Contáctanos</a>
          </Button>
        </div>



        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Full-width mega menu banner */}
      {megaOpen && (
        <div
          ref={megaRef}
          className="w-full border-b border-border bg-background animate-fade-in"
        >
          <div className="mx-auto px-6 py-3 flex items-stretch justify-between gap-4">
            <div className="flex items-center gap-4">
              {megaMenuServices.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  onClick={(e) => { e.preventDefault(); navigate(s.href); setMegaOpen(false); }}
                  className="flex items-center gap-4 rounded-xl px-8 py-6 hover:bg-accent/50 transition-colors whitespace-nowrap"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
                    <img src={s.customIcon} alt="" className="h-9 w-9" style={{ filter: "invert(28%) sepia(99%) saturate(4975%) hue-rotate(213deg) brightness(101%) contrast(98%)" }} />
                  </div>
                  <span className="text-base font-medium text-foreground">{s.title}</span>
                </a>
              ))}
            </div>
            <div className="hidden lg:block w-[45%] h-44 rounded-lg overflow-hidden">
              <img src={heroTeam} alt="Equipo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-background px-4 pb-4 space-y-3">
          <a
            href="/por-que-arrowpoint"
            className="block text-sm text-foreground/80 hover:text-primary pt-2"
            onClick={(e) => { e.preventDefault(); navigate("/por-que-arrowpoint"); setMobileOpen(false); }}
          >
            ¿Por qué Arrowpoint?
          </a>
          <div className="border-t border-border my-2" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Servicios</p>
          {megaMenuServices.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary pl-2"
              onClick={() => setMobileOpen(false)}
            >
              <img src={s.customIcon} alt="" className="h-4 w-4" style={{ filter: "invert(28%) sepia(99%) saturate(4975%) hue-rotate(213deg) brightness(101%) contrast(98%)" }} />
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
