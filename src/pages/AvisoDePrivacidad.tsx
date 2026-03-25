import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const loremBlock = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const AvisoDePrivacidad = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />

      <section className="px-6 py-10" style={{ marginTop: "calc(var(--top-banner-height, 0px) + 5rem)" }}>
        <div className="max-w-full mx-auto">
          <h1
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold text-foreground mb-8 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Aviso de privacidad
          </h1>
          <div
            ref={contentRef}
            className={`space-y-6 text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
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
