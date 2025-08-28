import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Web Developer",
      company: "AIA Philippines", 
      description: "Assisted in developing and maintaining the company website, improving user experience and functionality.",
      period: "August 2024 - November 2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      tags: ["Web Development", "UI/UX", "Testing"],
      side: "left"
    },
    {
      title: "Web Developer", 
      company: "T-Mobelli Kitchens & Closets Inc.",
      description: "Developed an automated system to streamline product management, including inventory, costing, and purchase order systems.",
      period: "August 2024 - November 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      tags: ["System Development", "Dashboard", "Collaboration"],
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and the impact I've made in various roles
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${exp.side === "right" ? "md:justify-end" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${exp.side === "right" ? "md:mr-8 md:w-1/2" : "md:ml-8 md:w-1/2"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all"
                    data-testid={`experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.company} project`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <button className="text-primary hover:underline flex items-center gap-2">
                      Explore
                      <ExternalLink size={16} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
