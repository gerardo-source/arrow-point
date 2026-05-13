import ContactForm from "@/components/landing/ContactForm";
import { useLocale } from "@/i18n/LocaleProvider";

const ContactSection = () => {
  const { t } = useLocale();

  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-secondary/40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="surface-card p-7 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-balance leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground text-balance">
              {t.contact.subtitle}
            </p>

            <a
              href="https://calendly.com/arrowpoint/arrowpoint-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {t.contact.bookCta}
            </a>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
