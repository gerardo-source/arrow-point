import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogosBar from "@/components/landing/LogosBar";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import GrowthModelSection from "@/components/landing/GrowthModelSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Arrowpoint │ Finance as a Service para Startups",
    description: "Claridad financiera y acompañamiento estratégico para startups en crecimiento. Arrowpoint combina CFO expertise con tecnología para tu scaling.",
    ogTitle: "Arrowpoint - Finance as a Service",
    ogDescription: "Arrowpoint: Finance as a Service creada para startups. Obtén claridad financiera, MRR real, runway exacto y confianza para escalar.",
    keywords: "Finance as a Service, CFO startup, gestión financiera startup, claridad financiera, scaling",
  });
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <div style={{ paddingTop: "calc(5rem + var(--top-banner-height, 0px))" }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <GrowthModelSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
