import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleProvider";

const CookieBanner = () => {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 sm:inset-x-6 bottom-3 sm:bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-card/95 backdrop-blur p-4 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <p className="text-sm text-foreground/80 text-center sm:text-left flex-1">
          {t.cookies.message}{" "}
          <Link to="/politica-de-cookies" className="underline font-medium text-foreground hover:text-primary transition-colors">
            {t.cookies.policy}
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="inline-flex items-center justify-center rounded-full border border-border px-4 h-9 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            {t.cookies.reject}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 h-9 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
