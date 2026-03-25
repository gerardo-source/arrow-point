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

const Index = () => {
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
