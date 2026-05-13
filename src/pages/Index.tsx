import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogosBar from "@/components/landing/LogosBar";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ServicesSection from "@/components/landing/ServicesSection";
import MetricsSection from "@/components/landing/MetricsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useLocale } from "@/i18n/LocaleProvider";

const Index = () => {
  const { locale } = useLocale();

  const seo =
    locale === "es"
      ? {
          title: "Arrowpoint · Finance as a Service para startups | CFO fraccionado",
          description:
            "El equipo financiero que tu startup necesita para levantar la próxima ronda. CFO fraccionado, reportes board-ready y modelos financieros que cierran rondas.",
          keywords:
            "CFO fraccionado, Finance as a Service, CFO para startups, fundraising, board reporting, modelo financiero startup, runway, cap table, México, LATAM",
        }
      : {
          title: "Arrowpoint · Finance as a Service for startups | Fractional CFO",
          description:
            "The finance team your startup needs to close the next round. Fractional CFO, board-ready reporting and financial models that close rounds.",
          keywords:
            "fractional CFO, Finance as a Service, CFO for startups, fundraising, board reporting, startup financial model, runway, cap table, Mexico, LATAM",
        };

  useSEO({
    ...seo,
    locale,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Arrowpoint Financial",
        url: "https://www.arrowpointfinancial.com/",
        logo: "https://www.arrowpointfinancial.com/logo.png",
        sameAs: ["https://www.linkedin.com/company/arrow-point-financial/"],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name:
              locale === "es"
                ? "¿Qué es Finance as a Service?"
                : "What is Finance as a Service?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                locale === "es"
                  ? "Es un modelo de suscripción donde tu startup obtiene un CFO dedicado, reportes mensuales y apoyo en fundraising sin contratar equipo in-house."
                  : "It's a subscription model where your startup gets a dedicated CFO, monthly reporting and fundraising support without hiring an in-house team.",
            },
          },
          {
            "@type": "Question",
            name:
              locale === "es"
                ? "¿Para qué etapa de startup sirve Arrowpoint?"
                : "What startup stage does Arrowpoint support?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                locale === "es"
                  ? "Desde pre-seed hasta Series C. NH by Arrowpoint para early stage; Finance as a Service para startups levantando o escalando."
                  : "From pre-seed to Series C. NH by Arrowpoint for early stage; Finance as a Service for startups raising or scaling.",
            },
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogosBar />
        <HowItWorksSection />
        <ServicesSection />
        <MetricsSection />
        <AudienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
