import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { toast } from "@/hooks/use-toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const { t, locale } = useLocale();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get("plan");
    const serviceParam = searchParams.get("service");
    if (serviceParam && (serviceParam === "faas" || serviceParam === "nh")) {
      setService(serviceParam);
    }
    if (planParam) {
      const prefilled =
        locale === "es"
          ? `Hola, estoy interesado en el plan ${planParam} de Finance as a Service.`
          : `Hi, I'm interested in the ${planParam} plan of Finance as a Service.`;
      setMessage((prev) => (prev ? prev : prefilled));
    }
  }, [searchParams, locale]);

  const requiredMsg = locale === "es" ? "Requerido" : "Required";
  const invalidEmail = locale === "es" ? "Correo inválido" : "Invalid email";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = requiredMsg;
    if (!email.trim() || !emailRegex.test(email.trim())) newErrors.email = invalidEmail;
    if (!message.trim()) newErrors.message = requiredMsg;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: t.contact.success });
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    }, 600);
  };

  const inputCls =
    "h-11 w-full rounded-xl bg-background border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            placeholder={t.contact.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder={t.contact.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="tel"
          placeholder={t.contact.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
        />
        <div className="relative">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${inputCls} appearance-none pr-10 ${service ? "" : "text-muted-foreground"}`}
          >
            <option value="">{t.contact.service}</option>
            <option value="faas">{t.services.faas.name}</option>
            <option value="nh">{t.services.nh.name}</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div>
        <textarea
          placeholder={t.contact.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors resize-none"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground text-background h-11 px-6 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {submitting ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
};

export default ContactForm;
