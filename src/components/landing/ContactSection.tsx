import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-primary" id="contacto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold">Deja de adivinar.</h2>
          <h3 className="text-2xl md:text-3xl font-bold">Empieza a decidir con confianza.</h3>
          <p className="text-primary-foreground/80">
            Agenda una llamada y ve cómo Arrowpoint puede ser tu copiloto financiero.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Nombre" className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground" />
            <Input placeholder="Correo" type="email" className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Teléfono" type="tel" className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground" />
            <select
              className="flex h-10 w-full rounded-md border border-white/20 bg-white px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
            >
              <option value="" disabled className="text-muted-foreground">Servicio de interés</option>
              <option value="faas">Finance as a Service</option>
              <option value="nh">NH by Arrowpoint</option>
            </select>
          </div>
          <Textarea placeholder="Mensaje" rows={4} className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground" />
          <Button type="submit" className="w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
