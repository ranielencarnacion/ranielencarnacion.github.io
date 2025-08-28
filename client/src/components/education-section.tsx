import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Caraga State University",
      location: "Cabadbaran City",
      period: "2021-2025",
      status: "Graduated",
      description: "Specialized in software development, database management, and information systems.",
      achievements: ["Completed thesis on web application development"]
    },
    {
      degree: "Senior High School (Computer System Services)",
      institution: "National Senior High School", 
      location: "Cabadbaran City",
      period: "2019-2021",
      status: "Completed",
      description: "Focused on Computer System Services(CSS) track, gaining hands-on experience in computer hardware, and networking before pursuing further studies in IT.",
      achievements: ["With Honor roll student"]
    },
    {
      degree: "Junior High School",
      institution: "National High School",
      location: "Cabadbaran City", 
      period: "2015-2018",
      status: "Completed",
      description: "Built strong foundation in mathematics, science, and early exposure to computer studies.",
      achievements: ["Honor roll Student", "Participated in Regional Festival of Talents"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">
            My academic journey and the knowledge foundation that drives my passion for technology
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Education card */}
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all"
                  data-testid={`education-${edu.degree.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <GraduationCap className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-primary mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground mb-2">{edu.location}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {edu.period} • {edu.status}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-sm mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
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
