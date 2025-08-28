import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Rocket, Users } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techStack = [
    { name: "HTML", gradient: "from-orange-500 to-red-500" },
    { name: "CSS", gradient: "from-blue-500 to-blue-600" },
    { name: "JS", gradient: "from-yellow-400 to-yellow-500", textColor: "text-black" },
    { name: "React", gradient: "from-cyan-400 to-blue-500" },
    { name: "Laravel", gradient: "from-red-600 to-red-700" },
    { name: "PHP", gradient: "from-purple-600 to-indigo-600" },
    { name: "Node", gradient: "from-green-400 to-blue-500" },
  ];

  const traits = [
    {
      icon: <Lightbulb className="text-primary text-2xl mb-2" />,
      title: "Problem Solver"
    },
    {
      icon: <Rocket className="text-primary text-2xl mb-2" />,
      title: "Fast Learner"
    },
    {
      icon: <Users className="text-primary text-2xl mb-2" />,
      title: "Team Player"
    }
  ];

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About Me</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              I'm a passionate mobile app and web developer with a Bachelor of Science in Information Technology (BSIT) degree and hands-on experience using React Native (Expo), React with TypeScript, Tailwind CSS, Laravel, PHP, and SQLite. I specialize in building end-to-end solutions — from sleek user interfaces to back-end systems like inventory, costing, and purchase order tools.
            </p>
            
            {/* Traits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glassmorphism p-4 rounded-lg text-center hover:bg-white/15 transition-all duration-300 animate-scale-in"
                  data-testid={`trait-${trait.title.toLowerCase().replace(' ', '-')}`}
                >
                  {trait.icon}
                  <p className="font-semibold">{trait.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center"
          >
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              alt="John Ashley Villa - Software Engineer"
              className="w-64 h-64 rounded-full mx-auto mb-8 object-cover border-4 border-white/30"
              data-testid="profile-image"
            />
          </motion.div>
        </div>

        {/* Tech Stack Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                className="glassmorphism p-4 rounded-lg hover:bg-white/15 transition-all duration-300 group cursor-pointer animate-scale-in"
                data-testid={`tech-stack-${tech.name.toLowerCase()}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold ${tech.textColor || ""}`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
