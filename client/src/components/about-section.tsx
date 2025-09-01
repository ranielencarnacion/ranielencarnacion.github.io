import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Rocket, Users, Code, Heart, Target } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function AboutSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.8 });

  const traits = [
    {
      icon: <Lightbulb className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges"
    },
    {
      icon: <Rocket className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Time Management",
      description: "Efficiently organizing tasks and meeting deadlines"
    },
    {
      icon: <Users className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Team Player",
      description: "Collaborative and supportive approach"
    },
    {
      icon: <Code className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions"
    },
    {
      icon: <Heart className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Passionate",
      description: "Driven by love for technology and innovation"
    },
    {
      icon: <Target className={`text-3xl mb-3 transition-transform-smooth hover:scale-110 ${isDarkMode ? 'text-primary' : 'text-blue-600'}`} />,
      title: "Goal-Oriented",
      description: "Focused on delivering exceptional results"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 sm:px-0 ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-1 flex justify-center px-4 sm:px-0"
          >
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-300/30 rounded-full animate-pulse-glow" />
              <div className="absolute -inset-2 bg-gradient-to-r from-white/15 to-white/10 rounded-full animate-pulse" />
              
              <motion.img
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 3, 0, -3, 0],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
                whileHover={{
                  scale: 1.15,
                  rotateZ: 8,
                  rotateY: 10,
                  transition: { duration: 0.2 }
                }}
                src="/profilepic.png"
                alt="Raniel Encarnacion - Software Engineer"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10 cursor-pointer transition-all-smooth group-hover:border-white/40"
                data-testid="profile-image"
              />
              
              {/* Floating particles around image */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
              <div className="absolute top-20 right-8 w-1 h-1 bg-gray-300/90 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-16 left-6 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-8 right-12 w-1 h-1 bg-gray-200/90 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-2 text-center lg:text-right px-4 sm:px-0"
          >
            {/* Professional Description */}
            <motion.div
              variants={itemVariants}
              className="glassmorphism-soft p-6 sm:p-8 rounded-2xl mb-8"
            >
              <motion.p 
                variants={itemVariants}
                className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-light text-justify ${
                  isDarkMode ? 'text-white/85' : 'text-black/85'
                }`}
              >
                Hello! I'm Raniel Encarnacion currently fourth-year college student at Exact Colleges of Asia, pursuing a Bachelor of Science in Information Systems. My journey into the world of web development began with a curiosity for how websites are built and evolved into a deep passion for creating interactive and visually appealing web experiences — As I continue to grow in this field, I am eager to learn emerging technologies, collaborate with like-minded developers, and contribute to impactful projects that bridge creativity with functionality.
              </motion.p>
              
            </motion.div>

          </motion.div>
        </div>

        {/* Traits Grid - Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-3xl font-bold text-center mb-12 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            What Drives Me
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="glassmorphism-enhanced p-6 rounded-xl text-center group cursor-pointer transition-all-smooth hover:shadow-2xl"
                data-testid={`trait-${trait.title.toLowerCase().replace(' ', '-')}`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotateZ: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block mb-4"
                >
                  {trait.icon}
                </motion.div>
                <h4 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                  isDarkMode ? 'text-white group-hover:gradient-text-blue' : 'text-black'
                }`}>
                  {trait.title}
                </h4>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-white/70 group-hover:text-white/85' : 'text-black/70 group-hover:text-black/85'
                }`}>
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 flex justify-center"
        >
          <div className="glassmorphism-soft p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <motion.p 
              className={`text-base sm:text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-white/80' : 'text-black/80'
              }`}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Passionate about creating interactive and visually appealing web experiences that bring ideas to life on the digital canvas.
            </motion.p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="#contact" 
                  className={`inline-flex items-center px-6 sm:px-8 py-3 font-semibold rounded-full transition-all-smooth shadow-lg border text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:shadow-white/25 border-white/20'
                      : 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black hover:shadow-black/25 border-black/20'
                  }`}
                >
                  Let's Connect
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
