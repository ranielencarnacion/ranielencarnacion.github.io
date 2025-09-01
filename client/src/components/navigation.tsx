import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "technical-skills", "education", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };


  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "technical-skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode ? 'glassmorphism-header' : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Always left aligned for consistency */}
          <motion.button 
            className="flex items-center cursor-pointer z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={isDarkMode ? "/rm.png" : "/rm-black-removebg.png"} 
              alt="RM Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "/rm.png";
              }}
            />
          </motion.button>
          
          {/* Desktop Navigation - Properly aligned */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 px-3 lg:px-4 py-2 font-medium text-sm lg:text-base ${
                  isDarkMode 
                    ? `hover:bg-white/20 ${activeSection === link.id ? "text-white bg-white/15 shadow-lg" : "text-white/80 hover:text-white"}`
                    : `hover:bg-black/10 ${activeSection === link.id ? "text-black bg-black/10 shadow-lg" : "text-black/70 hover:text-black"}`
                } ${link.id === "contact" ? `border ${isDarkMode ? "border-white/40" : "border-black/40"} rounded-md` : "rounded-lg"}`}
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="theme-toggle"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isDarkMode 
                ? "text-white hover:bg-white/10" 
                : "text-black hover:bg-black/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-2 transition-all duration-200 px-3 rounded-lg ${
                  isDarkMode
                    ? `hover:bg-white/20 ${activeSection === link.id ? "text-white bg-white/10" : "text-white/80 hover:text-white"}`
                    : `hover:bg-black/10 ${activeSection === link.id ? "text-black bg-black/10" : "text-black/70 hover:text-black"}`
                }`}
                data-testid={`mobile-nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-full py-2 px-3 rounded-lg transition-all duration-200 mt-2 border ${
                isDarkMode
                  ? "text-white/80 hover:text-white hover:bg-white/20 border-white/40"
                  : "text-black/80 hover:text-black hover:bg-black/10 border-black/40"
              }`}
              data-testid="mobile-theme-toggle"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
