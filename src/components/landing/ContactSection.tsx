import gradientBg from "@/assets/gradient-bg.jpg";
import ContactForm from "@/components/landing/ContactForm";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center py-14 px-6 relative overflow-hidden" id="contacto">
      <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        <div className="space-y-4 text-white pl-4 md:pl-8" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Deja de adivinar.<br />Empieza a decidir<br />con confianza.
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
