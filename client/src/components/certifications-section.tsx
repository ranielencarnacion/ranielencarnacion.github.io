import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "HTML Essentials",
      provider: "Cisco Networking Academy",
      type: "Web Development Certification",
      date: "Jul 2025",
      link: "https://www.credly.com/badges/69f8b5cb-05a2-42df-964b-90ea81e51e05",
      icon: "fab fa-html5",
      color: "text-orange-500",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "CSS Essentials",
      provider: "Cisco Networking Academy", 
      type: "Web Development Certification",
      date: "Jul 2025",
      link: "https://www.credly.com/badges/79672d10-24af-4588-a0a9-e533095071d1",
      icon: "fab fa-css3-alt",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "JavaScript Essentials 1",
      provider: "Cisco Networking Academy",
      type: "Programming Certification", 
      date: "Jul 2025",
      link: "https://www.credly.com/badges/aa1dfaea-5b2f-4f19-803a-d3369bbe5660",
      icon: "fab fa-js-square",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-yellow-500/20"
    },
    {
      title: "JavaScript Essentials 2",
      provider: "Cisco Networking Academy",
      type: "Programming Certification",
      date: "Jul 2025", 
      link: "https://www.credly.com/badges/c6689405-2f10-4bb3-aeed-1a2cbf016d66",
      icon: "fab fa-js-square",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-orange-500/20"
    },
    {
      title: "Web Development (Full-Stack)",
      provider: "Sto. Domingo Associates - AIA Philippines",
      type: "On-the-Job Training • 600 hours",
      date: "Aug - Nov 2025",
      icon: "fas fa-code",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-indigo-600/20"
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications & Training</h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications and specialized training that demonstrate my commitment to continuous learning and technical excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all group cursor-pointer"
              onClick={() => cert.link && window.open(cert.link, '_blank')}
              data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Certificate Icon */}
              <div className={`h-48 bg-gradient-to-br ${cert.bgColor} flex items-center justify-center`}>
                <i className={`${cert.icon} text-6xl ${cert.color}`}></i>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-primary mb-2">{cert.provider}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.type}</p>
                <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>
                {cert.link && (
                  <div className="flex items-center text-primary hover:underline">
                    <span>View Credential</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Click on certification cards to view official credentials
          </p>
        </motion.div>
      </div>
    </section>
  );
}
