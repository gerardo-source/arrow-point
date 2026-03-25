import { useEffect, useState } from "react";
import { X } from "lucide-react";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--top-banner-offset", visible ? "40px" : "0px");
    return () => document.documentElement.style.setProperty("--top-banner-offset", "0px");
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm">
      <span>Hola, aquí puedes poner alguna promoción o novedad.</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TopBanner;
