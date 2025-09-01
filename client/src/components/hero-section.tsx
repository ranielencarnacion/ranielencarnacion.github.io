import { motion } from "framer-motion";
import { Github, Linkedin, Download, Eye, ChevronDown, Facebook, Twitter } from "lucide-react";
import TypingAnimation from "./ui/typing-animation";
import { useTheme } from "@/contexts/ThemeContext";

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  const titles = [
    "Raniel Encarnacion"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} style={!isDarkMode ? { backgroundColor: '#ffffff' } : {}}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Available badge - Enhanced visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center justify-center px-3 sm:px-4 py-2 backdrop-blur-sm text-xs sm:text-sm font-medium transition-all duration-300 rounded-full relative z-20 border mt-6 sm:mt-8 mb-6 sm:mb-8 ${
            isDarkMode 
              ? 'bg-gray-800/80 text-white hover:bg-gray-700/80 border-gray-600/50'
              : 'bg-gray-200/80 text-black hover:bg-gray-300/80 border-gray-400/50'
          }`}
        >
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse shadow-lg" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)' }}></span>
          <span className="tracking-wide">Available for new opportunities</span>
        </motion.div>
        
        {/* Main content */}
        <div className="mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 tracking-wide font-bold ${
              isDarkMode ? 'text-white/60' : 'text-black/60'
            }`}
          >
            Hey there! I'm
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-2 sm:px-0 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            <TypingAnimation words={titles} />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 ${
              isDarkMode ? 'text-white/60' : 'text-black/60'
            }`}
          >
            Welcome to my portfolio! I have acquired the skills and expertise necessary to bring your project vision to life and create exceptional web experiences.
          </motion.p>
        </div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("major-projects")}
            className={`px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 justify-center font-medium text-sm sm:text-base animate-glow-pulse w-full sm:w-auto ${
              isDarkMode 
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/90'
            }`}
            data-testid="button-view-work"
          >
            <Eye size={18} />
            View My Work
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1sEEF0VO4gKGuK-Gyst2Np6K8ZvNUHGiu/view"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 justify-center font-medium text-sm sm:text-base w-full sm:w-auto ${
              isDarkMode 
                ? 'glassmorphism text-white hover:bg-white/20'
                : 'bg-gray-200/80 text-black hover:bg-gray-300/80 border border-gray-400/50'
            }`}
            data-testid="button-download-cv"
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12 md:mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/ranielencarnacion"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border ${
              isDarkMode 
                ? 'glassmorphism text-white hover:bg-white/20 hover:shadow-white/20 border-white/10'
                : 'bg-gray-200/80 text-black hover:bg-gray-300/80 hover:shadow-black/20 border-gray-400/50'
            }`}
            data-testid="link-github"
          >
            <Github size={20} className="sm:hidden" />
            <Github size={22} className="hidden sm:block" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/encarnacion-raniel-b78416263/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border ${
              isDarkMode 
                ? 'glassmorphism text-white hover:bg-white/20 hover:shadow-white/20 border-white/10'
                : 'bg-gray-200/80 text-black hover:bg-gray-300/80 hover:shadow-black/20 border-gray-400/50'
            }`}
            data-testid="link-linkedin"
          >
            <Linkedin size={20} className="sm:hidden" />
            <Linkedin size={22} className="hidden sm:block" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.facebook.com/raniel.encarnacion.2024/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border ${
              isDarkMode 
                ? 'glassmorphism text-white hover:bg-white/20 hover:shadow-white/20 border-white/10'
                : 'bg-gray-200/80 text-black hover:bg-gray-300/80 hover:shadow-black/20 border-gray-400/50'
            }`}
            data-testid="link-facebook"
          >
            <Facebook size={20} className="sm:hidden" />
            <Facebook size={22} className="hidden sm:block" />
          </motion.a>
        </motion.div>
        
      </div>
      
      {/* Scroll Button - Centered to align with LinkedIn icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 md:bottom-12 z-30 flex justify-center items-center w-full"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className={`scroll-indicator p-3 rounded-full transition-all duration-300 shadow-lg border ${
            isDarkMode 
              ? 'text-white hover:text-green-300 border-white/20 hover:border-green-400/50'
              : 'text-black hover:text-green-600 border-black/20 hover:border-green-600/50'
          }`}
          data-testid="scroll-button"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            opacity: [0.8, 1, 0.8], 
            scale: [1, 1.05, 1],
            y: [0, -6, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        >
          <ChevronDown size={20} className="drop-shadow-lg" />
        </motion.button>
      </motion.div>
    </section>
  );
}
