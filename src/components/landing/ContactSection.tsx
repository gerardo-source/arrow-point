import gradientBg from "@/assets/gradient-bg.jpg";
import ContactForm from "@/components/landing/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contacto">
      <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        <div ref={textRef} className={`space-y-6 text-white pl-4 md:pl-8 transition-all duration-700 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
          <h2 className="text-2xl leading-tight md:text-4xl font-bold">
            Deja de adivinar.<br />Empieza a decidir<br />con confianza.
          </h2>
          <p className="text-white/80 leading-relaxed text-base">
            Agenda una llamada y ve cómo <br />Arrowpoint puede ser tu copiloto <br />financiero.
          </p>
        </div>
        <div ref={formRef} className={`transition-all duration-700 delay-200 ${formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
