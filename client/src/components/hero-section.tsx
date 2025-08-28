import { motion } from "framer-motion";
import { Github, Linkedin, Download, Eye, ChevronDown } from "lucide-react";
import TypingAnimation from "./ui/typing-animation";

export default function HeroSection() {
  const titles = [
    "John Ashley Villanueva",
    "Full-Stack Developer", 
    "React Developer",
    "Web Developer",
    "Software Engineer"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm mb-8 animate-float"
        >
          Available for work
        </motion.div>
        
        {/* Main content */}
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 mb-4 tracking-wide"
          >
            Hey there! I'm
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            <TypingAnimation words={titles} />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with clean code and innovative solutions
          </motion.p>
        </div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 justify-center font-medium animate-glow-pulse"
            data-testid="button-view-work"
          >
            <Eye size={20} />
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glassmorphism text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center font-medium"
            data-testid="button-download-cv"
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </motion.div>
        
        {/* Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="scroll-indicator glassmorphism p-3 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            data-testid="scroll-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Ashlipogi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300"
            data-testid="link-github"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/john-ashley-villanueva-29b607265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300"
            data-testid="link-linkedin"
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
