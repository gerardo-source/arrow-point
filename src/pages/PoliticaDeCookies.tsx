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
            <p className="text-xs text-foreground/60">Última actualización: 15 de abril de 2026</p>
            <p>
              En Arrowpoint, respetamos su privacidad y estamos comprometidos con la protección de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <p>
              Esta Política de Cookies explica cómo utilizamos cookies y tecnologías similares en nuestro sitio web.
            </p>
            <p>
              <strong>¿Qué son las cookies?</strong>
            </p>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar un sitio web. Estas permiten reconocer su navegador, recordar sus preferencias y mejorar su experiencia de navegación.
            </p>
            <p>
              <strong>Tipos de cookies que utilizamos</strong>
            </p>
            <p>
              <strong>Cookies esenciales</strong><br />
              Necesarias para el funcionamiento del sitio web. No pueden desactivarse en nuestros sistemas.
            </p>
            <p>
              <strong>Cookies de análisis</strong><br />
              Nos permiten medir y analizar el uso del sitio web. Utilizamos herramientas como Google Analytics.
            </p>
            <p>
              <strong>Cookies de funcionalidad</strong><br />
              Permiten recordar preferencias del usuario, como idioma o configuración.
            </p>
            <p>
              <strong>Cookies de marketing</strong><br />
              Utilizadas para mostrar contenido relevante y medir campañas. Pueden involucrar plataformas de terceros como Meta Platforms y LinkedIn.
            </p>
            <p>
              <strong>Base legal</strong>
            </p>
            <p>
              El uso de cookies no esenciales se basa en su consentimiento, el cual puede ser otorgado o retirado en cualquier momento mediante las configuraciones disponibles en nuestro sitio.
            </p>
            <p>
              <strong>Transferencia de datos</strong>
            </p>
            <p>
              El uso de cookies puede implicar la transferencia de datos a terceros ubicados fuera de México, incluyendo Estados Unidos, donde las leyes de protección de datos pueden diferir de las aplicables en su país.
            </p>
            <p>
              <strong>Control de cookies</strong>
            </p>
            <p>
              Usted puede:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Aceptar o rechazar cookies no esenciales mediante el banner de cookies</li>
              <li>Configurar su navegador para bloquear o eliminar cookies</li>
            </ul>
            <p>
              <strong>Derechos ARCO</strong>
            </p>
            <p>
              Usted tiene derecho a Acceso, Rectificación, Cancelación y Oposición respecto a sus datos personales.
            </p>
            <p>
              Para ejercer estos derechos, puede contactarnos en:<br />
              📩 contacto@arrwpoint.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
