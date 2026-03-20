import gradientBg from "@/assets/gradient-bg.png";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="contacto">
      <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        <div className="space-y-4 text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Deja de adivinar.<br />Empieza a decidir<br />con confianza.
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
            <input type="email" placeholder="Correo" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="tel" placeholder="Teléfono" className="rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none" />
            <select className="rounded-lg px-4 py-3 bg-white text-black text-sm outline-none appearance-none" defaultValue="">
              <option value="" disabled>Servicio</option>
              <option value="faas">Finance as a Service</option>
              <option value="nh">NH by Arrowpoint</option>
            </select>
          </div>
          <textarea placeholder="Mensaje" rows={5} className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder:text-muted-foreground text-sm outline-none resize-none" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
            Enviar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
