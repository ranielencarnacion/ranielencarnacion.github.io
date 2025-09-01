import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function TechnicalSkillsSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-600" },
    { 
      name: "Tailwind CSS", 
      icon: "custom",
      color: "text-cyan-400",
      customIcon: (
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
      )
    }
  ];

  const tools = [
    { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
    { name: "XAMPP", icon: "fas fa-server", color: "text-orange-500" },
    { name: "MS Office", icon: "fab fa-microsoft", color: "text-blue-600" },
    { name: "Canva", icon: "fas fa-palette", color: "text-purple-500" },
    { name: "ChatGPT", icon: "fas fa-robot", color: "text-green-500" },
    { name: "GitHub", icon: "fab fa-github", color: isDarkMode ? "text-white" : "text-black" },
    { name: "Vercel", icon: "fas fa-cloud", color: "text-cyan-500" },
    { name: "Google Drive", icon: "fab fa-google-drive", color: "text-yellow-500" },
    { name: "Gmail", icon: "fas fa-envelope", color: "text-red-500" },
    { name: "Supabase", icon: "fas fa-database", color: "text-green-600" },
    { name: "Cursor", icon: "fas fa-mouse-pointer", color: "text-blue-400" },
    { name: "Windsurf", icon: "fas fa-wind", color: "text-cyan-400" },
    { name: "Neatbeans", icon: "fas fa-coffee", color: "text-orange-600" },
    { name: "Virtual Box", icon: "fas fa-cube", color: "text-red-600" },
    { name: "Docker Desktop", icon: "fab fa-docker", color: "text-blue-600" },
    { name: "Netlify", icon: "fas fa-globe", color: "text-teal-500" }
  ];

  return (
    <section id="technical-skills" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 sm:px-0 ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>Technical Skills</h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light px-4 sm:px-0 ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>
        
        {/* Programming Languages & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="glassmorphism-enhanced p-4 sm:p-6 rounded-xl text-center group cursor-pointer transition-all-smooth hover:shadow-2xl"
                data-testid={`skill-${skill.name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotateZ: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="mb-3 sm:mb-4"
                >
                  {skill.customIcon ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                  ) : (
                    <i className={`${skill.icon} text-2xl sm:text-3xl lg:text-4xl ${skill.color} drop-shadow-lg`}></i>
                  )}
                </motion.div>
                <p className={`font-semibold text-xs sm:text-sm group-hover:gradient-text-blue transition-all duration-300 leading-tight ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Tools Section - Logo Loop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3 
            className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Tools I'm Familiar With
          </motion.h3>
          
          {/* Logo Loop Container */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ x: [0, -100 * tools.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of logos */}
              {tools.map((tool, index) => (
                <div
                  key={`first-${tool.name}`}
                  className="flex-shrink-0 text-center group cursor-pointer"
                  data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <motion.div 
                    className="w-16 h-16 glassmorphism-enhanced rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:shadow-lg transition-all-smooth"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className={`${tool.icon} text-2xl ${tool.color} drop-shadow-lg`}></i>
                  </motion.div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'
                  }`}>{tool.name}</p>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => (
                <div
                  key={`second-${tool.name}`}
                  className="flex-shrink-0 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-16 h-16 glassmorphism-enhanced rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:shadow-lg transition-all-smooth"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className={`${tool.icon} text-2xl ${tool.color} drop-shadow-lg`}></i>
                  </motion.div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'
                  }`}>{tool.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
