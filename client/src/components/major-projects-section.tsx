import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, Database, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function MajorProjectsSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "System Analysis Design - ECA MIS IT Service Management Ticketing System",
      subtitle: "Academic Project - System Analysis and Design",
      description: "A comprehensive IT service management ticketing platform designed to streamline IT support operations at Exact Colleges of Asia (ECA). The system facilitates ticket creation, tracking, prioritization, and resolution, enabling efficient IT service delivery across the institution.",
      highlights: [
        "Designed structured ticketing workflow from issue creation to resolution",
        "Integrated queue management for prioritizing and allocating IT support requests",
        "Implemented role-based access for students, staff, and IT administrators",
        "Built interactive dashboard for tracking ticket status, priorities, and performance metrics",
        "Developed automated notifications for ticket updates and assignments",
        "Established reporting and analytics system for IT service monitoring and decision-making"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      period: "2024",
      image: "/ticketing sys/loginpage.png",
      demoLink: "#",
      codeLink: "#",
      gallery: [
        { src: "/ticketing sys/loginpage.png", title: "Authentication & Login" },
        { src: "/ticketing sys/ADMIN-DASHBOARD.png", title: "Dashboard & Analytics" },
        { src: "/ticketing sys/ADMIN-TICKETMGNT.png", title: "Category Management" },
        { src: "/ticketing sys/ADMIN-TICKETHIS.png", title: "Supplier Management" },
        { src: "/ticketing sys/ADMIN-RESOLVEDTICKETS.png", title: "Resolved Tickets" },
        { src: "/ticketing sys/USER-SENDNEWTICKET.png", title: "Send New Ticket" },
        { src: "/ticketing sys/USER-MYTICKETS.png", title: "My Tickets" },
        { src: "/ticketing sys/ADMIN-CHANGEPASS.png", title: "Change Password" },
        { src: "/ticketing sys/USER-CHANGEPASS.png", title: "User Change Password" }
      ]
    },
    {
      title: "Capstone Project - ECA MIS General Mobile Inventory System",
      subtitle: "Mobile Inventory Management Solution",
      description: "A mobile-based inventory management system designed for Exact Colleges of Asia (ECA) to digitize and centralize the institution's inventory operations. The system addresses inefficiencies in manual tracking by providing real-time, mobile-accessible tools for managing assets, requests, and reports.",
      highlights: [
        "Developed mobile-friendly platform for real-time inventory monitoring and updates",
        "Implemented equipment request and approval workflows for staff and faculty",
        "Integrated QR/Barcode scanning for quick item identification and tracking",
        "Designed role-based access control for administrators, MIS staff, and end-users",
        "Created maintenance and monitoring module for asset condition logging",
        "Automated report generation for stock status, usage history, and auditing"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Vite", "Supabase"],
      period: "2025",
      image: "/mobile inventory/Landing page.png",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "ESCafe - Coffee Shop Website",
      subtitle: "Beautiful & Responsive Cafe Website",
      description: "A beautiful and responsive cafe website built with HTML, CSS, and JavaScript. Features a modern design with menu showcase, gallery, and contact information for a coffee shop business.",
      highlights: [
        "Responsive design that works seamlessly across all devices",
        "Interactive menu showcase with detailed product information",
        "Modern gallery section displaying cafe atmosphere and products",
        "Contact information and location details for customer engagement",
        "Clean and professional UI/UX design"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      period: "2024",
      image: "/escafe-bg.png",
      demoLink: "https://escafe-raniel.netlify.app/",
      codeLink: "#"
    },
    {
      title: "First Build in Portfolio Website",
      subtitle: "First Web Development Project",
      description: "My first portfolio website built during Web Development subject in 2023. This project represents my initial journey into web development, showcasing fundamental skills in HTML, CSS, and JavaScript.",
      highlights: [
        "Built using core web technologies: HTML5, CSS3, and JavaScript",
        "Responsive design that adapts to different screen sizes",
        "Clean and professional layout showcasing projects and skills",
        "Interactive elements and smooth navigation",
        "First milestone in web development learning journey"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      period: "2023",
      image: "/webdev.png",
      demoLink: "https://ranielencarnacion.netlify.app/",
      codeLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const openGallery = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects.find(p => p.title === selectedProject);
    if (project && project.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    const project = projects.find(p => p.title === selectedProject);
    if (project && project.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  const currentProject = projects.find(p => p.title === selectedProject);
  const currentGallery = currentProject?.gallery || [];

  return (
    <section id="major-projects" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 sm:px-0 ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>
            Major Projects
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light px-4 sm:px-0 ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            Discover how I bring ideas to life through code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism-enhanced rounded-2xl overflow-hidden group cursor-pointer transition-all-smooth hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="h-64 relative overflow-hidden">
                {index === 2 ? (
                  // ESCafe project background (at index 2)
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/escafe-bg.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                ) : index === 3 ? (
                  // Personal Portfolio project background (at index 3)
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/webdev.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                ) : index === 0 ? (
                  // System Analysis Design project background
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/ticketing sys/loginpage.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                ) : index === 1 ? (
                  // Capstone Project background
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/mobile inventory/Landing page.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                ) : (
                  // Other projects gradient background
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        className={`text-6xl ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}
                      >
                        <Database />
                      </motion.div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="text-blue-300" size={16} />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>{project.period}</span>
                </div>

                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                <p className={`text-base sm:text-lg mb-3 sm:mb-4 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>{project.subtitle}</p>
                <p className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>{project.description}</p>

                {/* Highlights */}
                <div className="mb-4 sm:mb-6">
                  <h4 className={`font-bold mb-2 sm:mb-3 text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Key Features:</h4>
                  <ul className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-300 mr-2 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-white/10 text-white/80 border-white/20 hover:bg-white/15'
                            : 'bg-black/10 text-black/80 border-black/20 hover:bg-black/15'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (project.title === "System Analysis Design - ECA MIS IT Service Management Ticketing System") {
                        openGallery(project.title);
                      } else if (project.demoLink) {
                        window.open(project.demoLink, '_blank');
                      }
                    }}
                    className={`flex-1 font-semibold py-3 px-4 sm:px-6 rounded-full transition-all-smooth shadow-lg border flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:shadow-white/25 border-white/20' 
                        : 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:shadow-white/25 border-white/20'
                    }`}
                  >
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ExternalLink size={16} />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col lg:flex-row ${isDarkMode ? 'bg-black' : 'bg-white'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{selectedProject}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {currentGallery[currentImageIndex]?.title}
                    </p>
                  </div>
                  <button
                    onClick={closeGallery}
                    className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-black'}`}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Image */}
                <div className={`relative flex-1 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                  <img
                    src={currentGallery[currentImageIndex]?.src}
                    alt={currentGallery[currentImageIndex]?.title}
                    className="max-w-full max-h-[60vh] object-contain shadow-lg rounded-lg"
                    onError={(e) => {
                      console.log('Image failed to load:', currentGallery[currentImageIndex]?.src);
                      e.currentTarget.src = '/placeholder-image.png';
                    }}
                    loading="lazy"
                  />

                  {/* Navigation Buttons */}
                  {currentGallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                <div className={`p-4 border-t text-center ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {currentImageIndex + 1} of {currentGallery.length}
                  </p>
                </div>
              </div>

              {/* Thumbnail Sidebar */}
              <div className={`w-full lg:w-80 border-t lg:border-t-0 lg:border-l flex flex-col ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>System Features</h4>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64 lg:max-h-none">
                  {/* Admin Section */}
                  <div>
                    <h5 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Admin Features</h5>
                    <div className="space-y-2">
                      {currentGallery.filter((_, index) => [0, 1, 2, 3, 4, 7].includes(index)).map((image, filteredIndex) => {
                        const originalIndex = [0, 1, 2, 3, 4, 7][filteredIndex];
                        return (
                          <motion.div
                            key={originalIndex}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setCurrentImageIndex(originalIndex)}
                            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                              originalIndex === currentImageIndex 
                                ? 'border-blue-500 shadow-lg' 
                                : isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-16 object-cover"
                              onError={(e) => {
                                console.log('Thumbnail failed to load:', image.src);
                                e.currentTarget.src = '/placeholder-image.png';
                              }}
                              loading="lazy"
                            />
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                              <p className={`text-xs font-medium ${
                                originalIndex === currentImageIndex 
                                  ? 'text-blue-600' 
                                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                {image.title}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* User Section */}
                  <div>
                    <h5 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>User Features</h5>
                    <div className="space-y-2">
                      {currentGallery.filter((_, index) => [5, 6, 8].includes(index)).map((image, filteredIndex) => {
                        const originalIndex = [5, 6, 8][filteredIndex];
                        return (
                          <motion.div
                            key={originalIndex}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setCurrentImageIndex(originalIndex)}
                            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                              originalIndex === currentImageIndex 
                                ? 'border-blue-500 shadow-lg' 
                                : isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-16 object-cover"
                              onError={(e) => {
                                console.log('User thumbnail failed to load:', image.src);
                                e.currentTarget.src = '/placeholder-image.png';
                              }}
                              loading="lazy"
                            />
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                              <p className={`text-xs font-medium ${
                                originalIndex === currentImageIndex 
                                  ? 'text-green-600' 
                                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                {image.title}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
