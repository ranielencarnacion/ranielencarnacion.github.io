import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ranielencarnacion", 
      icon: <Github size={24} />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/encarnacion-raniel-b78416263",
      icon: <Linkedin size={24} />
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/raniel.encarnacion.2024/",
      icon: <Facebook size={24} />
    },
    {
      name: "Instagram",
      url: "https://x.com/rainraingoaweyn",
      icon: <Instagram size={24} />
    }
  ];

  return (
    <footer className={`py-12 border-t ${
      isDarkMode ? 'border-border bg-black' : 'border-gray-300 bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-6 mb-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors ${
                  isDarkMode ? 'text-muted-foreground hover:text-primary' : 'text-gray-600 hover:text-black'
                }`}
                data-testid={`footer-social-${link.name.toLowerCase()}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isDarkMode ? 'text-muted-foreground' : 'text-gray-600'}
          >
            © 2025 Raniel Encarnacion. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
