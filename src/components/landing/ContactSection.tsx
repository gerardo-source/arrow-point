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
        <form className="bg-background rounded-2xl p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Nombre" />
          <Input placeholder="Correo" type="email" />
          <Input placeholder="Teléfono" type="tel" />
          <Input placeholder="Servicio de interés" />
          <Textarea placeholder="Mensaje" rows={4} />
          <Button type="submit" className="w-full" size="lg">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
