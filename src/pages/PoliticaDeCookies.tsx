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
              Arrowpoint respeta su privacidad y está comprometido con el cumplimiento de la <strong>Ley General de Protección de Datos Personales (LGPDP)</strong> y sus disposiciones reglamentarias. Esta Política de Cookies explica cómo utilizamos cookies y tecnologías similares en nuestro sitio web para mejorar su experiencia. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Al utilizar nuestro sitio, usted consiente el uso de cookies conforme a los términos de esta política.
            </p>
            <p>
              <strong>¿Qué son las Cookies?</strong> Las cookies son archivos de datos pequeños almacenados en su navegador o dispositivo que nos permiten reconocerlo en futuras visitas. Utilizamos cookies para mejorar la funcionalidad de nuestro sitio web, proporcionar un servicio más personalizado y recopilar información sobre cómo se utiliza nuestro sitio para optimizarlo continuamente.
            </p>
            <p>
              <strong>Tipos de Cookies Utilizadas:</strong> Utilizamos cookies esenciales (necesarias para el funcionamiento del sitio), cookies de análisis (para entender el comportamiento de los usuarios mediante servicios como Google Analytics), cookies de preferencia (para recordar sus configuraciones) y cookies de marketing (para personalizar contenido y publicidad). Cada tipo de cookie tiene una finalidad específica en cumplimiento con la LGPDP.
            </p>
            <p>
              <strong>Base Legal para el Tratamiento de Datos:</strong> El tratamiento de datos a través de cookies se fundamenta en el consentimiento informado que usted otorga al aceptar esta política, conforme a los artículos 6 y 8 de la LGPDP. Usted puede retirar su consentimiento en cualquier momento sin afectar la licitud del tratamiento previo.
            </p>
            <p>
              <strong>Sus Derechos (Derechos ARCO):</strong> Conforme a la LGPDP, usted tiene derecho a: (1) <strong>Acceso</strong> a sus datos personales y las finalidades de su tratamiento; (2) <strong>Rectificación</strong> de datos inexactos o incompletos; (3) <strong>Cancelación</strong> de datos cuando sea infundado su tratamiento; y (4) <strong>Oposición</strong> al tratamiento de datos. Para ejercer estos derechos, contacte a nuestro Responsable de Datos en: privacidad@arrowpoint.com.
            </p>
            <p>
              <strong>Control de Cookies:</strong> Puede controlar las cookies a través de su navegador web. La mayoría de navegadores permite rechazar cookies o ser alertado cuando se envían. También puede eliminar cookies almacenadas en su dispositivo en cualquier momento. Tenga en cuenta que desactivar cookies puede afectar la funcionalidad y experiencia del sitio.
            </p>
            <p>
              <strong>Responsable del Tratamiento:</strong> Arrowpoint, con domicilio en México, es el responsable del tratamiento de sus datos personales conforme a la LGPDP. Para consultas sobre privacidad, derechos ARCO o esta política, contacte a: privacidad@arrowpoint.com o a través de nuestro formulario de privacidad en el sitio web.
            </p>
            <p>
              <strong>Datos de Terceros:</strong> Nuestro sitio puede contener enlaces a terceros (como Google Analytics) que tienen sus propias políticas de cookies. No somos responsables de sus prácticas. Le recomendamos revisar sus políticas de privacidad antes de interactuar con ellos.
            </p>
            <p>
              <strong>Cambios a esta Política:</strong> Nos reservamos el derecho de actualizar esta política para reflejar cambios en nuestras prácticas, tecnología o requisitos legales. Los cambios entrarán en vigor al publicarse. Se recomienda revisar esta política periódicamente.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
