import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import arrowpointLogo from "@/assets/arrowpoint-logo.png";
import arrowpointLogoDark from "@/assets/PNG/Arrowpoint_Logo_Slogan_Blanco.png";
import { useLocale } from "@/i18n/LocaleProvider";
import { LangToggle, ThemeToggle } from "./ThemeLangToggle";

const Footer = () => {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="Arrowpoint home">
              <img src={arrowpointLogo} alt="Arrowpoint" className="h-7 w-auto dark:hidden" />
              <img src={arrowpointLogoDark} alt="Arrowpoint" className="h-12 w-auto hidden dark:block" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-balance">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <LangToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
              {t.footer.company}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/por-que-arrowpoint" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.whyUs}
                </Link>
              </li>
              <li>
                <Link to="/casos-de-exito" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.cases}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/finance-as-a-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.services.faas.name}
                </Link>
              </li>
              <li>
                <Link to="/nh-by-arrowpoint" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.services.nh.name}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.cookies}
                </Link>
              </li>
              <li>
                <Link to="/aviso-de-privacidad" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© Arrowpoint {year}. {t.footer.rights}.</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{t.footer.follow}</span>
            <a
              href="https://www.linkedin.com/company/arrow-point-financial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
