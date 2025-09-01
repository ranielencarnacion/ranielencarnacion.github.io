import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProjectsSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: "Capstone Project - Integrated Management System",
      subtitle: "Item Inventory, Transfer & Returns Management",
      description: "A comprehensive management system that integrates three core modules: Item Inventory Management, Item Transfer System, and Returned Items Management. This project demonstrates full-stack development capabilities using React, Inertia.js, and modern web technologies.",
      highlights: [
        "Developed integrated dashboard with real-time statistics and analytics",
        "Implemented comprehensive user authentication and role-based access control", 
        "Created robust inventory tracking with category management and supplier integration"
      ],
      technologies: ["React.js", "Inertia.js", "Laravel Framework", "MySQL Database", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      period: "2024 - 2025",
      side: "left"
    },
    {
      title: "RedShop - Affiliate Business Automation System", 
      subtitle: "E-commerce Affiliate Product Management & Platform Integration",
      description: "A comprehensive affiliate business automation system designed to streamline the management and display of affiliate products. The system allows administrators to create, manage, and showcase affiliate products with integrated platform selection (TikTok & Shopee) for seamless e-commerce transitions.",
      highlights: [
        "Built secure admin authentication system with role-based access",
        "Developed comprehensive product management dashboard with real-time statistics",
        "Created dynamic product catalog with category filtering and search functionality"
      ],
      technologies: ["PHP Native", "HTML5", "CSS3", "MySQL Database", "JavaScript"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      period: "2024 - 2025", 
      side: "right"
    },
    {
      title: "Inventory Management System",
      subtitle: "Comprehensive Stock Control & Warehouse Management Platform",
      description: "A comprehensive inventory management system designed to streamline stock control and inventory operations. The system provides real-time inventory tracking, detailed analytics, comprehensive item management, and automated stock monitoring with pull-in/pull-out tracking for efficient business operations.",
      highlights: [
        "Built comprehensive dashboard with real-time inventory statistics and value tracking",
        "Implemented detailed item management with category organization and stock monitoring", 
        "Created advanced analytics showing top items by value and low stock alerts"
      ],
      technologies: ["React.js", "TypeScript", "Laravel Framework", "MySQL Database", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      period: "2024 - 2025",
      side: "left"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'gradient-text' : 'text-black'
          }`}>Major Projects</h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-muted-foreground' : 'text-black/70'
          }`}>
            Comprehensive projects showcasing full-stack development capabilities and system integration
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: project.side === "left" ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.side === "left" ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${project.side === "left" ? "order-2 lg:order-1" : "order-2"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism-card p-8 rounded-lg hover:bg-white/10 transition-all duration-300 animate-scale-in"
                  data-testid={`project-${project.title.toLowerCase().split(' ')[0]}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className={`text-2xl font-bold mb-2 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{project.title}</h3>
                  <p className={`text-lg mb-4 ${
                    isDarkMode ? 'text-white/80' : 'text-black/80'
                  }`}>{project.subtitle}</p>
                  <p className={`mb-6 leading-relaxed ${
                    isDarkMode ? 'text-white/60' : 'text-black/60'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`font-bold mb-3 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>Highlights:</h4>
                    <ul className={`text-sm space-y-2 ${
                      isDarkMode ? 'text-white/60' : 'text-black/60'
                    }`}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`px-3 py-1 glassmorphism rounded-full text-sm ${
                        isDarkMode ? 'text-white/80' : 'text-black/80'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium ${
                        isDarkMode 
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-black text-white hover:bg-black/90'
                      }`}
                      data-testid={`button-github-${project.title.toLowerCase().split(' ')[0]}`}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 glassmorphism rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 font-medium"
                      data-testid={`button-demo-${project.title.toLowerCase().split(' ')[0]}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: project.side === "left" ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.side === "left" ? 50 : -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${project.side === "left" ? "order-1 lg:order-2" : "order-1"}`}
              >
                <p className={`text-sm mb-2 ${
                  isDarkMode ? 'text-muted-foreground' : 'text-black/60'
                }`}>{project.period}</p>
                <button className={`hover:underline mb-4 ${
                  isDarkMode ? 'text-primary' : 'text-blue-600'
                }`}>Explore</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
