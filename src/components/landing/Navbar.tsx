import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleProvider";
import { LangToggle, ThemeToggle } from "./ThemeLangToggle";
import arrowpointLogo from "@/assets/arrowpoint-logo.png";
import arrowpointLogoDark from "@/assets/PNG/Arrowpoint_Logo_Slogan_Blanco.png";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goAnchor = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links: { label: string; href: string }[] = [
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.howItWorks, href: "#como" },
    { label: t.nav.audience, href: "#para-quien" },
    { label: t.nav.cases, href: "/casos-de-exito" },
  ];

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/80"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
          className="flex items-center gap-2"
          aria-label="Arrowpoint home"
        >
          <img src={arrowpointLogo} alt="Arrowpoint" className="h-6 w-auto dark:hidden" />
          <img src={arrowpointLogoDark} alt="Arrowpoint" className="h-10 w-auto hidden dark:block" />
        </a>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); navigate(l.href); }}
                className="px-3 py-2 rounded-md text-foreground/75 hover:text-foreground hover:bg-accent/60 transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => goAnchor(e, l.href)}
                className="px-3 py-2 rounded-md text-foreground/75 hover:text-foreground hover:bg-accent/60 transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <a
            href="#contacto"
            onClick={(e) => goAnchor(e, "#contacto")}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 h-9 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1">
            {links.map((l) =>
              l.href.startsWith("/") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); navigate(l.href); setMobileOpen(false); }}
                  className="px-2 py-3 rounded-md text-foreground/85 hover:bg-accent"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => goAnchor(e, l.href)}
                  className="px-2 py-3 rounded-md text-foreground/85 hover:bg-accent"
                >
                  {l.label}
                </a>
              )
            )}
            <div className="flex items-center gap-2 pt-3">
              <LangToggle />
            </div>
            <a
              href="#contacto"
              onClick={(e) => goAnchor(e, "#contacto")}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 h-10 text-sm font-medium"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
