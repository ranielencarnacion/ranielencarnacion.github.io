import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Share2, Send, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useTheme } from "@/contexts/ThemeContext";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "", 
      message: ""
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwjrznn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly at lumawigraniel@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className={isDarkMode ? "text-primary" : "text-blue-600"} />,
      title: "Location",
      content: "Mangga Cacutud Arayat, Pampanga, PHILIPPINES"
    },
    {
      icon: <Mail className={isDarkMode ? "text-primary" : "text-blue-600"} />,
      title: "Email", 
      content: "lumawigraniel@gmail.com",
      link: "mailto:lumawigraniel@gmail.com"
    },
    {
      icon: <Phone className={isDarkMode ? "text-primary" : "text-blue-600"} />,
      title: "Phone",
      content: "+639278026885"
    },
    {
      icon: <Share2 className={isDarkMode ? "text-primary" : "text-blue-600"} />,
      title: "Connect",
      content: (
        <div className="flex space-x-4">
          <motion.a 
            href="https://github.com/ranielencarnacion" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 p-3 rounded-full glassmorphism ${
              isDarkMode 
                ? 'text-white/60 hover:text-white hover:bg-white/20'
                : 'text-black/60 hover:text-black hover:bg-black/20'
            }`}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/encarnacion-raniel-b78416263" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 p-3 rounded-full glassmorphism ${
              isDarkMode 
                ? 'text-white/60 hover:text-white hover:bg-white/20'
                : 'text-black/60 hover:text-black hover:bg-black/20'
            }`}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/raniel.encarnacion.2024/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 p-3 rounded-full glassmorphism ${
              isDarkMode 
                ? 'text-white/60 hover:text-white hover:bg-white/20'
                : 'text-black/60 hover:text-black hover:bg-black/20'
            }`}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a 
            href="https://x.com/rainraingoaweyn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 p-3 rounded-full glassmorphism ${
              isDarkMode 
                ? 'text-white/60 hover:text-white hover:bg-white/20'
                : 'text-black/60 hover:text-black hover:bg-black/20'
            }`}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={20} />
          </motion.a>
        </div>
      )
    }
  ];

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 sm:px-0 ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>Get In Touch</h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light px-4 sm:px-0 ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism-soft p-4 sm:p-6 md:p-8 rounded-2xl"
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center px-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="glassmorphism-enhanced p-4 sm:p-6 rounded-xl flex items-start space-x-3 sm:space-x-4 group transition-all-smooth hover:shadow-2xl"
                  data-testid={`contact-info-${info.title.toLowerCase()}`}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-white/20 to-gray-300/30 rounded-lg flex items-center justify-center group-hover:from-white/30 group-hover:to-gray-300/40 transition-all duration-300 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-white group-hover:gradient-text-blue' : 'text-black'
                    }`}>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className={`transition-colors duration-300 text-sm sm:text-base break-words ${
                        isDarkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                      }`}>
                        {info.content}
                      </a>
                    ) : (
                      <div className={`transition-colors duration-300 text-sm sm:text-base ${
                        isDarkMode ? 'text-white/70 group-hover:text-white/85' : 'text-black/70 group-hover:text-black/85'
                      }`}>
                        {info.content}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism-soft p-4 sm:p-6 md:p-8 rounded-2xl"
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center px-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>Send Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`font-medium ${
                        isDarkMode ? 'text-white/90' : 'text-black/90'
                      }`}>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          {...field}
                          data-testid="input-name"
                          className={`transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/15'
                              : 'bg-black/10 border-black/20 text-black placeholder:text-black/50 focus:border-black/40 focus:bg-black/15'
                          }`}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`font-medium ${
                        isDarkMode ? 'text-white/90' : 'text-black/90'
                      }`}>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          data-testid="input-email"
                          className={`transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/15'
                              : 'bg-black/10 border-black/20 text-black placeholder:text-black/50 focus:border-black/40 focus:bg-black/15'
                          }`}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`font-medium ${
                        isDarkMode ? 'text-white/90' : 'text-black/90'
                      }`}>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..."
                          rows={5}
                          {...field}
                          data-testid="textarea-message"
                          className={`resize-none transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/15'
                              : 'bg-black/10 border-black/20 text-black placeholder:text-black/50 focus:border-black/40 focus:bg-black/15'
                          }`}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold transition-all-smooth shadow-lg border py-3 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:shadow-white/25 border-white/20'
                        : 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black hover:shadow-black/25 border-black/20'
                    }`}
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="ml-2"
                        >
                          <Send size={16} />
                        </motion.span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
