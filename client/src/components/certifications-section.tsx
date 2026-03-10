import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CertificationsSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certifications = [
    {
      title: "Networking Configuration",
      provider: "Cisco",
      type: "Networking Certification",
      date: "Apr 2025",
      link: "https://www.credly.com/badges/11d47309-9134-489b-9464-04b69c5a8208/linked_in_profile",
      image: "/NetworkingDevicesandBasicConfigUpdate20250815-31-a66vgx.png",
      icon: "fas fa-network-wired",
      color: "text-blue-600",
      bgColor: "from-blue-600/20 to-blue-700/20"
    },
    {
      title: "OCI AI Foundations Associate",
      provider: "Oracle", 
      type: "AI Certification",
      date: "Aug 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7A0289A35A338C7C3AF558A406D9FC0AE28FF31C7E98279D2AEAAE3ECF676D70",
      image: "/eCertificate.png",
      icon: "fas fa-brain",
      color: "text-red-600",
      bgColor: "from-red-600/20 to-orange-600/20"
    },
    {
      title: "Ethical Hacker",
      provider: "Cisco",
      type: "Cybersecurity Certification", 
      date: "Aug 2025",
      link: "https://www.credly.com/badges/eeccb2c5-43ec-462d-9e97-33ad4ce54437/public_url",
      image: "/EthicalHackerUpdate20250820-31-yeuzfh.png",
      icon: "fas fa-shield-alt",
      color: "text-green-600",
      bgColor: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "Advanced Foundry",
      provider: "Cyfrin Updraft",
      type: "Advanced Foundry",
      date: "Aug 2025", 
      link: "https://profiles.cyfrin.io/u/lumawigraniel/achievements/advanced-foundry",
      image: "/Advanced Foundry X5ZNEFQHFWMA 2025-7-15.png",
      icon: "fas fa-hammer",
      color: "text-purple-600",
      bgColor: "from-purple-600/20 to-indigo-600/20"
    },
    {
      title: "Operating Systems Basics",
      provider: "Cisco",
      type: "Training",
      date: "Sep 2025",
      link: "https://www.credly.com/badges/49f72a6f-0f03-4487-95d8-70598ae68a4d/linked_in?t=t2xqyx",
      image: "/Operating_Systems_Basics_certificate_lumawigraniel-gmail-com_02e26710-2561-4ff1-8cea-375b81a0c569_page-0001.jpg",
      icon: "fas fa-desktop",
      color: "text-sky-600",
      bgColor: "from-sky-600/20 to-blue-600/20"
    },
    {
      title: "DICT R3",
      provider: "DICT",
      type: "Training",
      date: "Oct 2025",
      link: "https://dict.gov.ph/home",
      image: "/DICT R3_page-0001.jpg",
      icon: "fas fa-certificate",
      color: "text-amber-600",
      bgColor: "from-amber-600/20 to-yellow-600/20"
    },
    {
      title: "Hour of Code",
      provider: "Training",
      type: "Training",
      date: "Feb 2026",
      link: "https://code.org/en-US/hour-of-code",
      image: "/Encarnacion _Hour of Code_page-0001.jpg",
      icon: "fas fa-code",
      color: "text-indigo-600",
      bgColor: "from-indigo-600/20 to-purple-600/20"
    },
    {
      title: "AI Ready ASEAN Programme",
      provider: "ASEAN",
      type: "Training",
      date: "Oct 2025",
      link: "https://www.aiclassasean.org/",
      image: "/(Bulk 1) Copy of OG BTFM x AI Ready ASEAN Programme_Certificate.png",
      icon: "fas fa-robot",
      color: "text-fuchsia-600",
      bgColor: "from-fuchsia-600/20 to-pink-600/20"
    },
    {
      title: "Tech Internships Decoded",
      provider: "Exact Colleges of Asia",
      type: "Training",
      date: "May 2024",
      link: "#",
      image: "/Tech Internships Decoded.jpg",
      icon: "fas fa-briefcase",
      color: "text-teal-600",
      bgColor: "from-teal-600/20 to-cyan-600/20"
    },
    {
      title: "Hour of Code (Minecraft)",
      provider: "Code.org",
      type: "Training",
      date: "May 2025",
      link: "https://code.org/en-US/hour-of-code",
      image: "/minecraft.jpg",
      icon: "fas fa-gamepad",
      color: "text-emerald-600",
      bgColor: "from-emerald-600/20 to-green-600/20"
    },
    {
      title: "Hour of Code (Music Lab)",
      provider: "Code.org",
      type: "Training",
      date: "May 2025",
      link: "https://code.org/en-US/hour-of-code",
      image: "/musiclab.jpg",
      icon: "fas fa-music",
      color: "text-violet-600",
      bgColor: "from-violet-600/20 to-fuchsia-600/20"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      type: "Web Development Certification",
      date: "Mar 2026",
      link: "https://www.freecodecamp.org/certification/raincarnacion/responsive-web-design-v9",
      image: "/freecodecamp.png",
      icon: "fas fa-code",
      color: "text-cyan-600",
      bgColor: "from-cyan-600/20 to-teal-600/20"
    }
  ];

  return (
    <section className={`py-12 sm:py-16 md:py-24 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 tracking-normal px-2 sm:px-0 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>Certifications & Training</h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light px-3 sm:px-0 ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            Professional certifications and specialized training that demonstrate my commitment to continuous learning and technical excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="glassmorphism-enhanced rounded-xl sm:rounded-2xl overflow-hidden group transition-all-smooth hover:shadow-2xl active:scale-[0.98]"
              data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Certificate Background Display */}
              <div 
                className="h-36 sm:h-40 md:h-48 relative overflow-hidden bg-white rounded-t-xl sm:rounded-t-2xl cursor-pointer"
                onClick={() => {
                  if (cert.image) {
                    setSelectedCertificate(cert.image);
                  }
                }}
              >
                {/* Certificate Image Background */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url('${cert.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#ffffff'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 transition-all duration-300 leading-tight ${
                  isDarkMode ? 'text-white group-hover:gradient-text-blue' : 'text-black'
                }`}>{cert.title}</h3>
                <p className={`font-semibold text-xs sm:text-sm mb-1 sm:mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>{cert.provider}</p>
                <p className={`text-xs mb-2 sm:mb-4 font-medium ${
                  isDarkMode ? 'text-white/60' : 'text-black/60'
                }`}>{cert.date}</p>
                {cert.link && (
                  <motion.div 
                    className={`flex items-center transition-colors duration-300 cursor-pointer ${
                      isDarkMode ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, '_blank');
                    }}
                  >
                    <span className="font-medium text-xs sm:text-sm">View Credential</span>
                    <ExternalLink size={16} className="ml-2" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-[95vw] sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-lg sm:rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-2 transition-colors touch-manipulation"
            >
              <X size={18} className="sm:hidden" />
              <X size={20} className="hidden sm:block" />
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full h-auto max-h-[85vh] sm:max-h-[80vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
