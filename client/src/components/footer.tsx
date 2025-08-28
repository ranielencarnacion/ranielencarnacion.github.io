import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ashlipogi", 
      icon: <Github size={24} />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-ashley-villanueva-29b607265",
      icon: <Linkedin size={24} />
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/AZHLEEH",
      icon: <Facebook size={24} />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ashzyed/",
      icon: <Instagram size={24} />
    }
  ];

  return (
    <footer className="py-12 border-t border-border">
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
                className="text-muted-foreground hover:text-primary transition-colors"
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
            className="text-muted-foreground"
          >
            © 2025 John Ashley Villa. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
