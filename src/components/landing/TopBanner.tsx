import { useEffect, useState } from "react";
import { X } from "lucide-react";

const BANNER_HEIGHT = 40;

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--top-banner-height",
      visible ? `${BANNER_HEIGHT}px` : "0px"
    );
    return () => document.documentElement.style.setProperty("--top-banner-height", "0px");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm"
      style={{ height: `${BANNER_HEIGHT}px` }}
    >
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
