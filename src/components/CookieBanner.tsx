import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-t border-border px-6 py-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-sm text-white/80 text-center sm:text-left flex-1">
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
          <Link to="/politica-de-cookies" className="underline text-white hover:text-primary-foreground transition-colors">
            Política de Cookies
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="border-white/40 text-foreground bg-white hover:bg-white/80"
          >
            Rechazar
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90"
          >
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
