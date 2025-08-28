import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import CertificationsSection from "../components/certifications-section";
import TechnicalSkillsSection from "../components/technical-skills-section";
import EducationSection from "../components/education-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import Galaxy from "../components/Galaxy";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
        transparent={true}
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <TechnicalSkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
