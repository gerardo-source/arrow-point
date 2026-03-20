import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const loremBlock = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const AvisoDePrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Aviso de privacidad
          </h1>
          <div className="space-y-6 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>{loremBlock}</p>
            <p>{loremBlock}</p>
            <p>{loremBlock}</p>
            <p>{loremBlock}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvisoDePrivacidad;
