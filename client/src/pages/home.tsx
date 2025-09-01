import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import CertificationsSection from "../components/certifications-section";
import TechnicalSkillsSection from "../components/technical-skills-section";
import MajorProjectsSection from "../components/major-projects-section";
import EducationSection from "../components/education-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import RanielAIAssistant from "../components/raniel-ai-assistant";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="portfolio-background"></div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <TechnicalSkillsSection />
      <MajorProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <RanielAIAssistant />
    </div>
  );
}
