import { useEffect, useState } from "react";
import { X } from "lucide-react";

const BANNER_HEIGHT = 40;

const TopBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = !dismissed && !hidden;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--top-banner-height",
      show ? `${BANNER_HEIGHT}px` : "0px"
    );
    return () => document.documentElement.style.setProperty("--top-banner-height", "0px");
  }, [show]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ height: `${BANNER_HEIGHT}px` }}
    >
      <span>Un aliado que busca acompañarte en tu crecimiento financiero</span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TopBanner;
