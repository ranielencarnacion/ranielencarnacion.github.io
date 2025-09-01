import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function EducationSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Bachelor of Science in Information System",
      institution: "EXACT Colleges of Asia",
      location: "Suclayin, Arayat, Pampanga",
      period: "2023-2026",
      status: "Currently Enrolled",
      description: "Specialized in software development, database management, and information systems.",
      achievements: ["Completed SAD on ECA MIS IT Service Management Ticketing System"]
    },
    {
      degree: "Senior High School (STEM)",
      institution: "Justino Sevilla High School", 
      location: "Mangga-Cacutud, Arayat, Pampanga",
      period: "2017-2021",
      status: "Completed with Honors",
      description: "Focused on Science, Technology, Engineering, and Mathematics (STEM) track, building strong analytical and problem-solving skills that formed the foundation for my IT career.",
      achievements: ["With Honors", "STEM Track Graduate"]
    },
    {
      degree: "Elementary School",
      institution: "Anderson Elementary School",
      location: "Poblacion, Arayat, 2012, Pampanga", 
      period: "2010-2016",
      status: "Completed",
      description: "Built strong foundation in mathematics, science, and early exposure to computer studies.",
      achievements: ["Honor roll Student"]
    }
  ];

  return (
    <section id="education" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 sm:px-0 ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>Education</h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light px-4 sm:px-0 ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            My academic journey and the knowledge foundation that drives my passion for technology
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - Hidden on mobile for cleaner look */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 hidden sm:block ${
            isDarkMode ? 'bg-gradient-to-b from-white/60 to-gray-300/40' : 'bg-gradient-to-b from-black/60 to-gray-600/40'
          }`}></div>
          
          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Timeline dot - Hidden on mobile */}
                <motion.div 
                  className={`absolute left-4 sm:left-6 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 shadow-lg hidden sm:block ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-white to-gray-200 border-black'
                      : 'bg-gradient-to-r from-black to-gray-800 border-white'
                  }`}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                
                {/* Education card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="glassmorphism-enhanced p-6 sm:p-8 rounded-2xl group cursor-pointer transition-all-smooth hover:shadow-2xl"
                  data-testid={`education-${edu.degree.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-white/20 to-gray-300/30 rounded-lg flex items-center justify-center group-hover:from-white/30 group-hover:to-gray-300/40 transition-all duration-300 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotateZ: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <GraduationCap className={isDarkMode ? "text-white" : "text-black"} size={20} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-all duration-300 leading-tight ${
                        isDarkMode ? 'text-white group-hover:gradient-text-blue' : 'text-black'
                      }`}>{edu.degree}</h3>
                      <p className={`font-semibold mb-1 sm:mb-2 text-base sm:text-lg ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}>{edu.institution}</p>
                      <p className={`mb-1 sm:mb-2 text-sm sm:text-base ${
                        isDarkMode ? 'text-white/70' : 'text-black/70'
                      }`}>{edu.location}</p>
                      <p className={`text-xs sm:text-sm mb-3 sm:mb-4 font-medium ${
                        isDarkMode ? 'text-white/60' : 'text-black/60'
                      }`}>
                        {edu.period} • {edu.status}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
                    isDarkMode ? 'text-white/75' : 'text-black/75'
                  }`}>
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className={`font-bold mb-2 sm:mb-3 text-base sm:text-lg ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>Key Achievements:</h4>
                    <ul className={`space-y-1 ${
                      isDarkMode ? 'text-white/70' : 'text-black/70'
                    }`}>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base">
                          <span className="text-blue-300 mr-2 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
