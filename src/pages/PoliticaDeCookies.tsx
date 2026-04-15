import { useEffect } from "react";
import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PoliticaDeCookies = () => {
  useEffect(() => { document.title = "Política de Cookies │ Arrowpoint"; }, []);
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
            Política de cookies
          </h1>
          <div
            ref={contentRef}
            className={`space-y-6 text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p>
              Esta Política de Cookies explica cómo Arrowpoint utiliza cookies y tecnologías similares en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Estas tecnologías nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web y a proporcionar una experiencia más personalizada y eficiente.
            </p>
            <p>
              <strong>Tipos de Cookies:</strong> Utilizamos diferentes tipos de cookies según su propósito. Las cookies esenciales son necesarias para el funcionamiento básico del sitio web, como la autenticación de usuarios y la seguridad. Las cookies de rendimiento nos ayudan a analizar cómo se utiliza nuestro sitio mediante la recopilación de datos anónimos sobre las páginas visitadas y las acciones realizadas. Las cookies de marketing permiten mostrar anuncios personalizados basados en sus intereses y patrones de navegación. Las cookies de preferencia guardan sus configuraciones personales, como idioma e idioma preferido.
            </p>
            <p>
              <strong>Finalidades de las Cookies:</strong> Recopilamos y utilizamos información a través de cookies para múltiples propósitos legítimos: mejorar la funcionalidad de nuestro sitio, proporcionar contenido relevante y personalizado, realizar análisis de tráfico, prevenir fraude y actividades maliciosas, así como cumplir con obligaciones legales y regulatorias. También utilizamos cookies para recordar sus preferencias y facilitar futuras visitas a nuestro sitio.
            </p>
            <p>
              <strong>Control de Cookies:</strong> Usted tiene control total sobre las cookies. La mayoría de los navegadores web permiten rechazar cookies o alertarle cuando se envía una cookie. Puede también eliminar las cookies almacenadas en su dispositivo en cualquier momento a través de la configuración de su navegador. Sin embargo, tenga en cuenta que desactivar las cookies puede afectar la funcionalidad de nuestro sitio web y limitar su experiencia de usuario. Para obtener más información sobre cómo administrar cookies, consulte la documentación de su navegador.
            </p>
            <p>
              <strong>Cookies de Terceros:</strong> Nuestro sitio web puede contener enlaces a sitios web de terceros que utilizan sus propias cookies. No somos responsables de las prácticas de cookies de estos sitios terceros. Le recomendamos revisar las políticas de cookies de cualquier sitio web de terceros antes de interactuar con ellos. Utilizamos servicios de análisis como Google Analytics que puede establecer sus propias cookies para monitorear el rendimiento del sitio.
            </p>
            <p>
              <strong>Cambios en esta Política:</strong> Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento para reflejar cambios en nuestras prácticas, tecnología, requisitos legales u otros factores. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Se le recomienda revisar esta política periódicamente para mantenerse informado sobre cómo protegemos su información. Si tiene preguntas sobre esta Política de Cookies o nuestras prácticas de privacidad, no dude en contactarnos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
