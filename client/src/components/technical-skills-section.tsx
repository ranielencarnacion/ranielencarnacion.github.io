import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TechnicalSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400" },
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-500" },
    { name: "Python", icon: "fab fa-python", color: "text-green-500" },
    { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500" },
    { name: "React.js", icon: "fab fa-react", color: "text-cyan-400" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600" },
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
    { name: "GitHub", icon: "fab fa-github", color: "text-foreground" },
    { name: "Vercel", icon: "fas fa-cloud", color: "text-cyan-500" }
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>
        
        {/* Programming Languages & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-all text-center group cursor-pointer"
                data-testid={`skill-${skill.name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`}
              >
                {skill.customIcon ? (
                  skill.customIcon
                ) : (
                  <i className={`${skill.icon} text-3xl ${skill.color} mb-2`}></i>
                )}
                <p className="font-semibold text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Tools I'm Familiar With</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
                data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 bg-card rounded-lg border border-border hover:border-primary transition-all mx-auto mb-2 flex items-center justify-center group-hover:scale-105">
                  <i className={`${tool.icon} text-2xl ${tool.color}`}></i>
                </div>
                <p className="text-sm font-semibold">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
