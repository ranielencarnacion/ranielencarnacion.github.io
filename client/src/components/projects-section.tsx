import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
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
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Major Projects</h2>
          <p className="text-lg text-muted-foreground">
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
                  whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
                  className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all"
                  data-testid={`project-${project.title.toLowerCase().split(' ')[0]}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold gradient-text mb-2">{project.title}</h3>
                  <p className="text-lg text-primary mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
                      data-testid={`button-github-${project.title.toLowerCase().split(' ')[0]}`}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-all flex items-center gap-2"
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
                <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                <button className="text-primary hover:underline mb-4">Explore</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
